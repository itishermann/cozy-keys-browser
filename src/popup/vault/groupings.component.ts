import { Angulartics2 } from 'angulartics2';

import { Location } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    NgZone,
    OnDestroy,
    OnInit,
} from '@angular/core';
import {
    ActivatedRoute,
    Router,
} from '@angular/router';

import { BrowserApi } from '../../browser/browserApi';

import { CipherType } from 'jslib/enums/cipherType';

import { CipherView } from 'jslib/models/view/cipherView';

import { CipherService } from 'jslib/abstractions/cipher.service';
import { CollectionService } from 'jslib/abstractions/collection.service';
import { FolderService } from 'jslib/abstractions/folder.service';
import { PlatformUtilsService } from 'jslib/abstractions/platformUtils.service';
import { SearchService } from 'jslib/abstractions/search.service';
import { StateService } from 'jslib/abstractions/state.service';
import { StorageService } from 'jslib/abstractions/storage.service';
import { SyncService } from 'jslib/abstractions/sync.service';
import { UserService } from 'jslib/abstractions/user.service';

import { ToasterService } from 'angular2-toaster';
import { I18nService } from 'jslib/abstractions/i18n.service';
import { BroadcasterService } from 'jslib/angular/services/broadcaster.service';
import { AutofillService } from '../../services/abstractions/autofill.service';

import { GroupingsComponent as BaseGroupingsComponent } from 'jslib/angular/components/groupings.component';

import { PopupUtilsService } from '../services/popup-utils.service';

const BroadcasterSubscriptionId = 'GroupingsComponent';
const ComponentId = 'GroupingsComponent';
const ScopeStateId = ComponentId + 'Scope';

@Component({
    selector: 'app-vault-groupings',
    templateUrl: 'groupings.component.html',
})

/**
 *  See the original component:
 *
 *  https://github.com/bitwarden/browser/blob/
 *  0bbe17f6e2becdf5146677d51cbc71cc099aaec9/src/popup/vault/groupings.component.ts
 */
export class GroupingsComponent extends BaseGroupingsComponent implements OnInit, OnDestroy {
    ciphers: CipherView[];
    typeCounts = new Map<CipherType, number>();
    searchText: string;
    state: any;
    scopeState: any;
    showLeftHeader = true;
    searchPending = false;
    searchTypeSearch = false;
    deletedCount = 0;
    pageDetails: any[] = [];

    private loadedTimeout: number;
    private selectedTimeout: number;
    private preventSelected = false;
    private noFolderListSize = 100;
    private totpCode: string;
    private totpTimeout: number;
    private searchTimeout: any = null;
    private hasSearched = false;
    private hasLoadedAllCiphers = false;
    private allCiphers: CipherView[] = null;
    private ciphersByType: any;

    constructor(collectionService: CollectionService, folderService: FolderService,
        storageService: StorageService, userService: UserService,
        private cipherService: CipherService, private router: Router,
        private ngZone: NgZone, private broadcasterService: BroadcasterService,
        private changeDetectorRef: ChangeDetectorRef, private route: ActivatedRoute,
        private stateService: StateService, private popupUtils: PopupUtilsService,
        private syncService: SyncService, private analytics: Angulartics2,
        private platformUtilsService: PlatformUtilsService, private searchService: SearchService,
        private location: Location, private toasterService: ToasterService, private i18nService: I18nService,
        private autofillService: AutofillService ) {
        super(collectionService, folderService, storageService, userService);
        this.noFolderListSize = 100;
    }

    async ngOnInit() {
        this.ciphersByType = {};
        this.ciphersByType[CipherType.Card] = [];
        this.ciphersByType[CipherType.Identity] = [];
        this.ciphersByType[CipherType.Login] = [];
        this.searchTypeSearch = !this.platformUtilsService.isSafari();
        this.showLeftHeader = !this.platformUtilsService.isSafari() &&
            !(this.popupUtils.inSidebar(window) && this.platformUtilsService.isFirefox());
        this.stateService.remove('CiphersComponent');

        this.broadcasterService.subscribe(ComponentId, (message: any) => {
            this.ngZone.run(async () => {
                switch (message.command) {
                    case 'syncCompleted':
                        window.setTimeout(() => {
                            this.load();
                        }, 500);
                        break;
                    case 'collectPageDetailsResponse':
                        console.log('collectPageDetailsResponse received');

                        if (message.sender === BroadcasterSubscriptionId) {
                            this.pageDetails.push({
                                frameId: message.webExtSender.frameId,
                                tab: message.tab,
                                details: message.details,
                            });
                        }
                        break;
                    default:
                        break;
                }

                this.changeDetectorRef.detectChanges();
            });
        });

        const restoredScopeState = await this.restoreState();
        const queryParamsSub = this.route.queryParams.subscribe(async (params) => {
            this.state = (await this.stateService.get<any>(ComponentId)) || {};
            if (this.state.searchText) {
                this.searchText = this.state.searchText;
            } else if (params.searchText) {
                this.searchText = params.searchText;
                this.location.replaceState('vault');
            }

            if (!this.syncService.syncInProgress) {
                this.load();
            } else {
                this.loadedTimeout = window.setTimeout(() => {
                    if (!this.loaded) {
                        this.load();
                    }
                }, 5000);
            }

            if (!this.syncService.syncInProgress || restoredScopeState) {
                window.setTimeout(() => this.popupUtils.setContentScrollY(window, this.state.scrollY), 0);
            }
            if (queryParamsSub != null) {
                queryParamsSub.unsubscribe();
            }
        });
    }

    ngOnDestroy() {
        if (this.loadedTimeout != null) {
            window.clearTimeout(this.loadedTimeout);
        }
        if (this.selectedTimeout != null) {
            window.clearTimeout(this.selectedTimeout);
        }
        this.saveState();
        this.broadcasterService.unsubscribe(ComponentId);
    }

    async load() {
        this.pageDetails = [];
        const tab = await BrowserApi.getTabFromCurrentWindow();
        console.log('GroupingsComponent : collect page details requested for tab', tab);

        BrowserApi.tabSendMessage(tab, {
            command: 'collectPageDetails',
            tab: tab,
            sender: BroadcasterSubscriptionId,
        });
        await super.load(false);
        await this.loadCiphers();
        super.loaded = true;
    }

    async loadCiphers() {
        this.allCiphers = await this.cipherService.getAllDecrypted();
        this.deletedCount = this.allCiphers.filter((c) => c.isDeleted).length;
        await this.search(null);
        const typeCounts = new Map<CipherType, number>();
        this.ciphers.forEach((c) => {
            if (c.isDeleted) {
                return;
            }
            if (typeCounts.has(c.type)) {
                typeCounts.set(c.type, typeCounts.get(c.type) + 1);
            } else {
                typeCounts.set(c.type, 1);
            }
        });
        this.ciphersByType = {};
        this.ciphersByType[CipherType.Card] = this._ciphersByType(CipherType.Card);
        this.ciphersByType[CipherType.Identity] = this._ciphersByType(CipherType.Identity);
        this.ciphersByType[CipherType.Login] = this._ciphersByType(CipherType.Login);
        console.log('at the end of loadCiphers, ciphersByType=', this.ciphersByType);


        this.typeCounts = typeCounts;
    }

    async search(timeout: number = null) {
        this.searchPending = false;
        if (this.searchTimeout != null) {
            window.clearTimeout(this.searchTimeout);
        }
        const filterDeleted = (c: CipherView) => !c.isDeleted;
        if (timeout == null) {
            this.hasSearched = this.searchService.isSearchable(this.searchText);
            this.ciphers = await this.searchService.searchCiphers(this.searchText, filterDeleted, this.allCiphers);
            return;
        }
        this.searchPending = true;
        this.searchTimeout = setTimeout(async () => {
            this.hasSearched = this.searchService.isSearchable(this.searchText);
            if (!this.hasLoadedAllCiphers && !this.hasSearched) {
                await this.loadCiphers();
            } else {
                this.ciphers = await this.searchService.searchCiphers(this.searchText, filterDeleted, this.allCiphers);
            }
            this.searchPending = false;
        }, timeout);
    }

    emptySearch() {
        this.searchText = '';
        this.hasSearched = false;
    }

    _ciphersByType(type: CipherType) {
        return this.ciphers.filter((c) => c.type === type);
    }

    countByType(type: CipherType) {
        return this.typeCounts.get(type);
    }

    async selectTrash() {
        super.selectTrash();
        this.router.navigate(['/ciphers'], { queryParams: { deleted: true } });
    }

    async selectCipher(cipher: CipherView) {
        this.selectedTimeout = window.setTimeout(() => {
            if (!this.preventSelected) {
                this.router.navigate(['/view-cipher'], { queryParams: { cipherId: cipher.id } });
            }
            this.preventSelected = false;
        }, 200);
    }

    async launchCipher(cipher: CipherView): Promise<boolean> {
        if (cipher.type !== CipherType.Login || !cipher.login.canLaunch) {
            console.log('can not launch this cipher', cipher);
            return false;
        }

        if (this.selectedTimeout != null) {
            window.clearTimeout(this.selectedTimeout);
        }
        this.preventSelected = true;
        this.analytics.eventTrack.next({ action: 'Launched URI From Listing' });
        await this.cipherService.updateLastLaunchedDate(cipher.id);
        BrowserApi.createNewTab(cipher.login.launchUri);
        if (this.popupUtils.inPopup(window)) {
            BrowserApi.closePopup(window);
        }
        return true;
    }

    async fillOrLaunchCipher(cipher: CipherView) {
        console.log('fillOrLaunchCipher()');

        if (this.pageDetails == null || this.pageDetails.length === 0) {
            console.log('no pageDetails : can not fill tab with cipher, try to launch cipher');
            this.launchCipher(cipher);
            return;
        }

        // try to autofill (even if it is a Card or Identity cipher)
        this.totpCode = null;
        if (this.totpTimeout != null) {
            window.clearTimeout(this.totpTimeout);
        }
        try {
            this.totpCode = await this.autofillService.doAutoFill({
                cipher         : cipher,
                pageDetails    : this.pageDetails,
                doc            : window.document,
                fillNewPassword: true,
            });
            this.analytics.eventTrack.next({ action: 'Autofilled' });
            if (this.totpCode != null) {
                this.platformUtilsService.copyToClipboard(this.totpCode, { window: window });
            }
            if (this.popupUtils.inPopup(window)) {
                BrowserApi.closePopup(window);
            }
        } catch {
            console.log('autofill failed, try to launch');
            const launchResult: boolean = await this.launchCipher(cipher);
            if (!launchResult) {
                console.log('launch failed, send error toaster');
                this.ngZone.run(() => {
                    this.analytics.eventTrack.next({ action: 'Autofilled Error' });
                    this.toasterService.popAsync('error', null, this.i18nService.t('autofillError'));
                    this.changeDetectorRef.detectChanges();
                });
            }

        }
    }

    async addCipher() {
        this.router.navigate(['/add-cipher']);
    }

    showSearching() {
        return this.hasSearched || (!this.searchPending && this.searchService.isSearchable(this.searchText));
    }

    private async saveState() {
        this.state = {
            scrollY: this.popupUtils.getContentScrollY(window),
            searchText: this.searchText,
        };
        await this.stateService.save(ComponentId, this.state);

        this.scopeState = {
            ciphers: this.ciphers,
            typeCounts: this.typeCounts,
            deletedCount: this.deletedCount,
        };
        await this.stateService.save(ScopeStateId, this.scopeState);
    }

    private async restoreState(): Promise<boolean> {
        this.scopeState = await this.stateService.get<any>(ScopeStateId);
        if (this.scopeState == null) {
            return false;
        }

        if (this.scopeState.ciphers != null) {
            this.ciphers = this.scopeState.ciphers;
        }
        if (this.scopeState.typeCounts != null) {
            this.typeCounts = this.scopeState.typeCounts;
        }
        if (this.scopeState.deletedCiphers != null) {
            this.deletedCount = this.scopeState.deletedCount;
        }

        if (this.scopeState.deletedCiphers != null) {
            this.deletedCount = this.scopeState.deletedCount;
        }

        return true;
    }
}
