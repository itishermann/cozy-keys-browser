require('./feedbacks.scss');

// Globals
var
    panel                   ,
    data                    ,
    i18nGetMessage          ,
    rand = '--- Random mark - don\'t modify this line :' + Math.floor((Math.random()*100000000)+1)  ;

document.addEventListener('DOMContentLoaded', () => {

    // 0- retrieve url data = {url, cozyUrl, version}
    data = JSON.parse(decodeURI(window.location.search).slice(1))
    data.userAgent = navigator.userAgent

    // 1- get elements references
    panel      = document.getElementById('panel')
    intro      = document.getElementById('intro')
    titleEl    = document.getElementById('title-content')
    feedbacks  = document.getElementById('user-text')
    addHtmlBtn = document.getElementById('addHtml')
    note       = document.getElementById('note')
    btn        = document.getElementById('submit-btn')

    // 2- prepare i18n and apply
    var i18n = {};
    var lang = window.navigator.language;
    if (typeof safari !== 'undefined') { // not implemented for safari for now
        // const responseCommand = 'notificationBarFrameDataResponse';
        // sendPlatformMessage({
        //     command: 'bgGetDataForTab',
        //     responseCommand: responseCommand
        // });
        // safari.self.addEventListener('message', (msgEvent) => {
        //     const msg = JSON.parse(msgEvent.message.msg);
        //     if (msg.command === responseCommand && msg.data) {
        //         i18n = msg.data.i18n;
        //         load();
        //     }
        // }, false);
    } else {
        // retrieve i18n values and set elements textcontent
        lang = chrome.i18n.getUILanguage();
        i18nGetMessage = chrome.i18n.getMessage
        titleEl.textContent = 'Participez à améliorer les suggestions automatiques de Cozy Pass' // i18nGetMessage('inPageMenuSelectAnAccount')
        intro.textContent = `L'algorithme qui décide où placer le menu et quelles propositions faire a besoin de vous ! Partagez nous les cas de figure que vous rencontrez pour qu'il apprenne et s'amaliore.` // i18nGetMessage('inPageMenuSelectAnAccount')
        userText = `
Bonjour Claude,

Le menu de Cozy Pass est fort pratique, mais en navigant sur le site :
   > **url**

je remarque que : [supprimer/compléter]
  * le menu est proposé dans un champs non pertinent car...
  * les propositions du menu ne sont pas adaptées car ...
  * le menu n'apparait pas alors que ...

J'espère qu'avec ces informations vous allez trouver une solution et continuer à améliorer Cozy !

Signé : l'utilisateur du cozy "**cozyUrl**"

[laissez nous votre mail si vous voulez être informés de la suite]

Info complémentaires :
  * version de l'addon : **version**
  * statut addon : **addonStatus**
  * navigateur : **userAgent**
 `
        userText = userText
            .split('**')
            .map( s => {
                for (var key in data) {
                    if (s !== key) continue
                    return data[key]
                }
                return s
            })
            .join('')
        feedbacks.textContent = userText
        addHtmlLabel.textContent = `Inclure le code de la page (important si la page n'est pas publiques, les données de formulaires ne sont elles pas envoyées)`
        note.textContent = `note : seul le texte ci dessus sera envoyé.`
        btn.textContent = `Envoyer vos remarques`
    }

    // 3-
    addHtmlBtn.addEventListener('change', (e) => {
        if (e.target.checked) {
            requestHtmlContent()
        } else {
            const regExp = new RegExp(`${rand}[\\s\\S]*${rand}`, 'gm')
            const nexTxt = feedbacks.value.replace(regExp, '')
            feedbacks.value = nexTxt.endsWith('\n') ? nexTxt.slice(0,-1) : nexTxt ;
        }
    })
    requestHtmlContent()

    // 4- listen to click on the close menu button
    const closeIcon = document.querySelector('.close-icon')
    closeIcon.addEventListener('click', close )

    // 5- activate face-in
    panel.style.transformOrigin = 'calc(50%) 0'
    panel.classList.add('fade-in')

    // 6- listen to click on the submit button
    btn.addEventListener('click', submit )

    // 7- Listen to messages from background
    chrome.runtime.onMessage.addListener( (msg, sender, sendResponse) => {
        // console.log('FEEDBACKS.ONMESSAGE', {command:msg.command, subcommand:msg.subcommand, 'msg.sender':msg.sender, sender, 'full-msg':msg});
        if (msg.command !== 'feedbacksAnswerRequest') return
        if (msg.subcommand === 'setHtmlContent') {
            data.htmlContent = msg.htmlContent
            feedbacks.value = feedbacks.value
                + '\n'
                + rand
                + '\n______HTML start______\n'
                + msg.htmlContent
                + '\n______HTML end______\n'
                + rand
        }
    })
})

function close() {
    chrome.runtime.sendMessage({
        command   : 'bgAnswerMenuRequest',
        subcommand: 'closeFeedbacks'     ,
        sender    : 'feedbacks.js'       ,
    });
}

function submit() {
    // 1- send the message
    D = new Date()
    y = D.getFullYear()
    m = D.getMonth().toString().padStart(2, '0')
    d = D.getDate().toString().padStart(2, '0')
    h = D.getHours().toString().padStart(2, '0')
    n = D.getMinutes().toString().padStart(2, '0')
    uuid = Math.floor((Math.random()*100000000)+1)
    path = `https://desktop-upload.cozycloud.cc/cozy-pass-addon/${y}-${m}-${d}:${h}h${n}_${uuid}.log.json`
    console.log('SEND USER MESSAGE');
    console.log(path);


    // 2- close
    close()
}

function requestHtmlContent() {
    chrome.runtime.sendMessage({
        command   : 'bgAnswerMenuRequest'   ,
        subcommand: 'getHtmlContentFromTab' ,
        sender    : 'feedbacks.js'          ,
    });
}
