console.log('strat lastPassImport in :', document.location.href);

// self = window.top;

// // NOK : forcer window.top à pointer vers self : via un getter :
// Object.defineProperty(window, "top", {
//         get: function() {return self;}
//     }
// );

// console.log('self === window.top', self === window.top);

// document.head.innerHTML = `
//         <head>
//         <title>Cozy dédé ! - Connexion</title>
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="referrer" content="origin" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta http-equiv="content-type" content="text/html;charset=utf-8" />
//         <meta http-equiv="Content-Style-Type" content="text/css" />
//         <meta name="msvalidate.01" content="2B12B4CCABC21F8773D59D5009484A0F" /><meta name="Keywords" content="dernier mot de passe, last pass, m&eacute;moriser le mot de passe, m&eacute;moriser les mots de passe, gestionnaire de mots de passe, gestionnaire de mots de passe en ligne, mot de passe, gestion de mot de passe, r&eacute;cup&eacute;ration de mot de passe, r&eacute;cup&eacute;rer un mot de passe, exporter des mots de passe, remplissage de formulaire, remplissage de formulaire, formulaire, mot de passe s&ucirc;r, chiffrement local, g&eacute;n&eacute;ration de mot de passe, g&eacute;n&eacute;rateur de mot de passe, protection contre le vol d&#039;identit&eacute;" />
//         <meta name="description" content="LastPass est un gestionnaire de mots de passe et outil de remplissage de formulaire en ligne qui rend la navigation sur le web plus facile et plus s&ucirc;re." /><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" /><link rel='stylesheet' type='text/css' href='/m.php/header_css_bundle?1615964429'><link rel='stylesheet' type='text/css' href='/m.php/headercss?1615964429'><script type="text/javascript" nonce="Degc8N2nTP-D8FTMLkR0d2rcHJ_B1a32mJmTmVTVPEc=">
//         var n=document.createElement("script");
//         n.type="text/javascript";
//         n.async=true;
//         n.src="/m.php/rsa?1615964431";
//         var s=document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(n,s);
//         </script><script type="text/javascript" src="/m.php/securetag?1615964431"></script><script type="text/javascript" src="/m.php/modernizer?1615964431"></script><script type="text/javascript" src="/m.php/header_js_smbundle?1615964431"></script><script type="text/javascript" src="/js/simple-keyboard/simple-keyboard.js"></script><link rel="stylesheet" href="/js/simple-keyboard/simple-keyboard.css"></head>
//       `;

document.addEventListener('DOMContentLoaded', (event) => {

    if (document.location.href !== 'https://lastpass.com/?ac=1&lpnorefresh=1') {
        return;
    }

    console.log('from injected lastpassImport, url=', document.location.href);
    // document.head.innerHTML = `
    // <head>
    // <title>Cozy bibi ! - Connexion</title>
    // <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    // <meta name="referrer" content="origin" />
    // <meta name="viewport" content="width=device-width, initial-scale=1" />
    // <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    // <meta http-equiv="Content-Style-Type" content="text/css" />
    // <meta name="msvalidate.01" content="2B12B4CCABC21F8773D59D5009484A0F" /><meta name="Keywords" content="dernier mot de passe, last pass, m&eacute;moriser le mot de passe, m&eacute;moriser les mots de passe, gestionnaire de mots de passe, gestionnaire de mots de passe en ligne, mot de passe, gestion de mot de passe, r&eacute;cup&eacute;ration de mot de passe, r&eacute;cup&eacute;rer un mot de passe, exporter des mots de passe, remplissage de formulaire, remplissage de formulaire, formulaire, mot de passe s&ucirc;r, chiffrement local, g&eacute;n&eacute;ration de mot de passe, g&eacute;n&eacute;rateur de mot de passe, protection contre le vol d&#039;identit&eacute;" />
    // <meta name="description" content="LastPass est un gestionnaire de mots de passe et outil de remplissage de formulaire en ligne qui rend la navigation sur le web plus facile et plus s&ucirc;re." /><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" /><link rel='stylesheet' type='text/css' href='/m.php/header_css_bundle?1615964429'><link rel='stylesheet' type='text/css' href='/m.php/headercss?1615964429'><script type="text/javascript" nonce="Degc8N2nTP-D8FTMLkR0d2rcHJ_B1a32mJmTmVTVPEc=">
    // var n=document.createElement("script");
    // n.type="text/javascript";
    // n.async=true;
    // n.src="/m.php/rsa?1615964431";
    // var s=document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(n,s);
    // </script><script type="text/javascript" src="/m.php/securetag?1615964431"></script><script type="text/javascript" src="/m.php/modernizer?1615964431"></script><script type="text/javascript" src="/m.php/header_js_smbundle?1615964431"></script><script type="text/javascript" src="/js/simple-keyboard/simple-keyboard.js"></script><link rel="stylesheet" href="/js/simple-keyboard/simple-keyboard.css"></head>
    // `

    setTimeout(() => {
        console.log('from injected lastpassImport timeout, url=', document.location.href);
        document.write(
        `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
        <!--[if lt IE 9]>
         <script nonce="Degc8N2nTP-D8FTMLkR0d2rcHJ_B1a32mJmTmVTVPEc=">
            document.createElement("header");
            document.createElement("nav");
            document.createElement("section");
            document.createElement("article");
            document.createElement("aside");
            document.createElement("footer");
         </script>
        <![endif]-->
        <head>
          <title>Cozy bobo ! - Connexion</title>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="referrer" content="origin" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="content-type" content="text/html;charset=utf-8" />
          <meta http-equiv="Content-Style-Type" content="text/css" />
          <meta name="msvalidate.01" content="2B12B4CCABC21F8773D59D5009484A0F" /><meta name="Keywords" content="dernier mot de passe, last pass, m&eacute;moriser le mot de passe, m&eacute;moriser les mots de passe, gestionnaire de mots de passe, gestionnaire de mots de passe en ligne, mot de passe, gestion de mot de passe, r&eacute;cup&eacute;ration de mot de passe, r&eacute;cup&eacute;rer un mot de passe, exporter des mots de passe, remplissage de formulaire, remplissage de formulaire, formulaire, mot de passe s&ucirc;r, chiffrement local, g&eacute;n&eacute;ration de mot de passe, g&eacute;n&eacute;rateur de mot de passe, protection contre le vol d&#039;identit&eacute;" />
          <meta name="description" content="LastPass est un gestionnaire de mots de passe et outil de remplissage de formulaire en ligne qui rend la navigation sur le web plus facile et plus s&ucirc;re." /><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" /><link rel='stylesheet' type='text/css' href='/m.php/header_css_bundle?1615964429'><link rel='stylesheet' type='text/css' href='/m.php/headercss?1615964429'>
          <script type="text/javascript" nonce="Degc8N2nTP-D8FTMLkR0d2rcHJ_B1a32mJmTmVTVPEc=">console.log("log from iframe header !!!");</script>
          <script type="text/javascript" nonce="Degc8N2nTP-D8FTMLkR0d2rcHJ_B1a32mJmTmVTVPEc=">
            var n=document.createElement("script");
            n.type="text/javascript";
            n.async=true;
            n.src="/m.php/rsa?1615964431";
            var s=document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(n,s);
          </script><script type="text/javascript" src="/m.php/securetag?1615964431"></script><script type="text/javascript" src="/m.php/modernizer?1615964431"></script><script type="text/javascript" src="/m.php/header_js_smbundle?1615964431"></script><script type="text/javascript" src="/js/simple-keyboard/simple-keyboard.js"></script><link rel="stylesheet" href="/js/simple-keyboard/simple-keyboard.css"></head>
        <body id="body" class="misc_login"><div id="mainbg"><header class="lpp-slim-header lpp-slim-header--login">
        <a class="lpp-slim-header__logo" href="https://www.lastpass.com/">
            <img src="/images/logo-lastpass-2020.svg" alt="LastPass"/>
        </a>
                <a class="lpp-slim-header__login" href="/?ac=1">Connexion</a>
        </header>
        <noscript><div style="text-align:center">JavaScript est obligatoire pour utiliser LastPass.<br/>Notre m&eacute;canisme de chiffrement/d&eacute;chiffrement local pour conserver vos donn&eacute;es sensibles hors de nos mains en d&eacute;pend.<br/>Nous ne vous recommandons pas de tenter de vous connecter sans activer JavaScript</div></noscript><div id="top-margin"></div><div id='headermarkup' ></div><div class="main"><div class="container"><div class="inner-container">    <script type="text/javascript" src="/webvault/static/js/main.3581496e.js"></script>
        <link rel="stylesheet" type="text/css" href="/m.php/opensans?1615964429"/>
        <script type="text/javascript" src="/m.php/federatedlogin?1615964431"></script>
        <link rel="stylesheet" type="text/css" href="fonts/opensans/opensans.css">
        <script type="text/javascript" src="/m.php/extensionconnector?1615964432"></script><script type="text/javascript" nonce="Degc8N2nTP-D8FTMLkR0d2rcHJ_B1a32mJmTmVTVPEc=">createExtensionInterface({ context: 'misc_login' }, null);</script>
        <script type="text/javascript" nonce="Degc8N2nTP-D8FTMLkR0d2rcHJ_B1a32mJmTmVTVPEc=">
        var trackingSessionId = "6052033f0896c4.31464732"
        var isReactLoginControl = false
        g_fixpbkdf2 = 1;

        function addsitejs() {
              showAddWindow(false);
            }

        $(function () {

        // Javascript based test for proxy.
        if (typeof (g_inframe) != "undefined" && g_inframe == 1) {
          return;
        }



              setTimeout(function () {
          send_website_event("getuuid");
        }, 50);
        setTimeout(function () {
          checkUUID(0);
        }, 250);


        $("#rememberemail").attr("checked",false);
        $("#sesameotp").val("");
        $("#otp").val("");

              $("#email").keydown(function (e) {
          if (e.which == 9) {
            $("#password").select();
            e.preventDefault();
          }
        });
        $("#password").keypress(function (e) {
          var key = e.which;
          var shiftkey = e.shiftKey ? e.shiftKey : (key == 16 ? true : false);
          var capson = ((key >= 65 && key <= 90 && !shiftkey) || (key >= 97 && key <= 122 && shiftkey)) ? true : false;
          if (capson) {
            $("#capslockwarning").show();
          } else {
            $("#capslockwarning").hide();
          }
        }).keydown(function (e) {
          if (e.which == 13 && isFederated !== "undefined" && !isFederated) {
            startLogin();
          }
        }).attr("autocomplete", "off");

        $("#divlogin").show();
        $("#migrated").show();
        if ($("#email").val() == "") {
          $("#email").select();
        } else {
          $("#password").select();
        }

              $(".main").css("background-color", "transparent");
        $("body").css("background-color", "#f9fbfd");
        reduxApp = webvault.create({
          username: "",
          rememberUsername: false,
          sesameOTP: "",
          otp: "",
          couponCode: "",
          couponCodeHash: "",
          startTrial: false,
          migratedWebroot: false,
          redirect: "",
          language: "fr-FR",
          enterpriseId: "",
          samlLogin: false,
          activeDirectoryLogin: false,
          activeDirectoryDomain: "",
          sentryDSN: "https://ad3a78118a8e4a2a9ddbbd5bf712e5c6@lastpass.com/sentry/103",
          trackingSessionId: trackingSessionId
        });
        reduxApp.render();
            });

        function startLogin() {
        login();
        if (!$("#email").val() == "" && !$("#password").val() == "") {
          Segment.time("login");
          Segment.event("login_clicked", {
            trackingSessionId: trackingSessionId,
            isReactLoginControl: isReactLoginControl
          });
        }
        }

        function subscriber(mutations) {
        mutations.forEach(function (mutation) {
          var addedNodes = [].slice.call(mutation.addedNodes),
              i = 0;

          if (addedNodes.length) {
            for (i; i < addedNodes.length; i++) {
              if (addedNodes[i].nodeName == "SCRIPT" && addedNodes[i].src.indexOf("newvault") != -1) {
                TrackingPixel.sendGAEvents(addedNodes[i].previousSibling, "login");
              }
            }
          }
        });
        }

        function sendGAEvents() {
        var login = document.querySelector("#divlogin"),
            iframe = document.querySelector("#LP_Login");

        if (iframe == null) {
          return;
        }

        login.addEventListener("click", function (event) {
          if (event.target.hasAttribute("data-gatracking-name")) {
            TrackingPixel.sendGAEvents(iframe, event.target.getAttribute("data-gatracking-name"));
          }
        });

        if ("MutationObserver" in window) {
          var observer = new MutationObserver(subscriber),
              target = document.querySelector(".misc_login"),
              config = {
                childList: true
              };

          observer.observe(target, config);

          setTimeout(function () {
            observer.disconnect();
          }, 120000);
        }
        }
        </script>

        <link rel='stylesheet' type='text/css' href='/m.php/reqaccts_css_bundle?1615964431'><style type="text/css">
        @media print
        {
         .contentarea  {width:100%;}
         .nonprintable {display:none}
        }
        </style><script type="text/javascript" src="/m.php/raven?1615964431"></script><script type="text/javascript" nonce="Degc8N2nTP-D8FTMLkR0d2rcHJ_B1a32mJmTmVTVPEc=">
          LPRavenSanitize.config.replaceIp = false;
          Raven.config('https://a158c2484dec4a3ebc40221c090c8725@lastpass.com/sentry/43', {
            environment: 'prod',
            debug: false,
            release: '0da2cbc78224f3bb5e0bb0bc17276020a8b40b74',
            autoBreadcrumbs: {
              'xhr': true,       // XMLHttpRequest
              'console': false,  // console logging
              'dom': true,       // DOM interactions, i.e. clicks/typing
              'location': false, // url changes, including pushState/popState
              'sentry': false    // sentry events
            },
            maxBreadcrumbs: 10
          }).install();
            var context = {};
            Object.defineProperty(
              context,
              'id',
              {
                enumerable: true,
                get: (function() {
                  var uid = null;
                  return function() {
                    try {
                      // bg may not exist when this is invoked, so catch that error.
                      if (!uid) {
                        uid = bg.get('g_uid');
                      }
                    } catch (e) {
                      uid = null;
                    }
                    return uid;
                  };
                })()
              }
            );
            Raven.setUserContext(context);
          </script><script type='text/javascript' src='/m.php/all?1615964431'></script><script type='text/javascript' src='/m.php/reqaccts_js_bundle?1615964431'></script><script type='text/javascript' src='/m.php/newvault?1615964432'></script><script type="text/javascript" nonce=Degc8N2nTP-D8FTMLkR0d2rcHJ_B1a32mJmTmVTVPEc=>        var translations = {"We are sorry, an error occurred - Cannot parse private key.":"Un problème est survenu lors de l'analyse de la clé privée","This item has already been shared, so you can't move it to a shared folder.":"Cet élément a déjà été partagé, donc vous ne pouvez pas le déplacer vers un dossier partagé.","Make a copy?":"Faire une copie?","An Error occurred":"Un problème est survenu","An Error occurred - Cannot retrieve public key.":"Un problème est survenu. Clé publique non récupérée.","An Error occurred - Empty User Group. Please add some users to this group and try again.":"Ajoutez des utilisateurs à ce groupe et recommencez.","Are you sure you would like to navigate to this site over an insecure connection":"Passer à ce site malgré la connexion non sécurisée?","Auto-Password Change":"Changer les mots de passe automatiquement","Bulk Auto-Password Change Complete!":"Mots de passe changés!","Calculating Master Password Strength":"Calcul de la force du mot de passe maître","Congratulations! Your password for %s was updated, and is now saved in your LastPass vault. Your change will sync on every device.":"Réussite! Votre mot de passe pour ce site a été mis à jour et enregistré dans votre coffre-fort: %s. Le nouveau mot de passe est disponible partout où vous utilisez LastPass.","Could not get CSRF Token. Login failed.":"Échec de la connexion: impossible de récupérer le jeton CSRF.","Create New Folder":"Créer un dossier","Encrypted username check failed, not creating OTP.":"Échec de la vérification du nom d'utilisateur non chiffré. Mot de passe à usage unique non créé.","ERROR - Could not decrypt your private key.":"Un problème est survenu. Impossible de déchiffrer la clé privée.","It looks like your sharing key is missing. Please log in to the LastPass extension and try again. If the problem persists, contact LastPass Support.":"Il semble que votre clé de partage manque. Connectez-vous à l'extension LastPass et recommencez. Si le problème persiste, contactez l'assistance LastPass.","Error communicating with server.":"Erreur en communication avec le serveur.","Error retrieving OTPs:":"Erreur en récupération de mots de passe à usage unique:","Error saving new OTP, please refresh this page":"Un problème est survenu en enregistrement de votre mot de passe à usage unique. Pour continuer, actualisez cette page.","Error, please try again later.":"Please try again later.","ERROR: An error occurred while attempting to contact the LastPass server.":"Un problème est survenu en tentant de contacter le serveur LastPass.","ERROR: The LastPass server could not be contacted.":"Nous n'avons pas pu contacter le serveur LastPass.","Failed to clear OTPs":"Nous n'avons pas pu retirer les mots de passe à usage unique","Failed to contact the server while loading settings window":"Nous n'avons pas pu contacter le serveur pendant le chargement de la fenêtre de paramètres","Failed to decrypt newly encrypted key:":"Nous n'avons pas pu déchiffrer le nouveau mot de passe chiffré:","Failed to encrypt a field! ABORTING":"Nous n'avons pas pu chiffrer un champ. Mission non accomplie!","Failed to pull OTPs":"Nous n'avons pas pu récupérer les mots de passe à usage unique","Failure decrypting otp":"Nous n'avons pas pu déchiffrer le mot de passe à usage unique","Folder's destination or current location: %s":"Destination ou emplacement actuel du dossier: %s","Google Auth Failed":"Échec de l’authentification Google","Google Authenticator Authentication":"Authentification avec Google Authenticator","If you tried to use your YubiKey on this page, please note that this page is for LastPass one time passwords, not YubiKey.":"Vous essayez d'utiliser votre YubiKey? Cette page est pour les mots de passe à usage unique LastPass, et non pas YubiKey.","In order to complete the process, LastPass will have to log in to %s and navigate through a number of windows quickly. It is normal to see windows flashing and changing quickly, and may take several moments. We'll let you know when you're all set!":"Pour terminer la procédure, LastPass va se connecter à ce site et parcourir rapidement un certain nombre de fenêtres: %s. Il est normal de voir des fenêtres clignoter et s'afficher rapidement. Nous vous dirons quand la procédure sera terminée.","Invalid code, please check your email and try again.":"Code non valable. Vérifiez le code dans votre e-mail et recommencez.","Invalid code.":"Code non valable.","Invalid folder name. Please enter a folder name without slashes.":"Nom de dossier non valable. Entrez un nom de dossier sans barres obliques.","Invalid password":"Mot de passe non valable ","Invalid username, one-time-password or one-time login is restricted by company policy.":"Soit votre organisation a restreint la connexion par mot de passe à usage unique, soit vous avez entré un nom d'utilisateur ou un mot de passe à usage unique non valable.","LastPass Grid Multifactor Authentication":"LastPass Grid Multifactor Authentication","LastPass is decrypting your usernames...":"LastPass est en train de déchiffrer vos noms d'utilisateur...","LastPass is setting up reader authentication...":"LastPass est en train de configurer l'authentification du lecteur...","LastPass will now attempt to change your password to a strong, generated password that will be saved in your vault and known only to you.":"LastPass va tenter de changer votre mot de passe par un autre fort généré, et de l'enregistrer dans votre coffre-fort.","Login Failed":"Échec de la connexion","Microsoft Authenticator Authentication":"Authentification avec Microsoft Authenticator","Missing result":"Une erreur s'est produite lors de l'envoi de votre mot de passe à usage unique. ","Move Selected to Folder":"Déplacer la sélection vers le dossier","No key detected. If you're not using the LastPass plugin you must login on this page.":"Aucune clé détectée. Assurez-vous d'être connecté à l'extension ou au site web LastPass.","No session error":"Erreur: pas de session","No username, are you logged out?":"Pas de nom d'utilisateur, êtes-vous déconnecté?","Once they do that this Shared Folder will become accessible to them:":"Une fois terminé, ils auront accès à ce dossier partagé:","Opt out of password change":"Refuser le changement de mot de passe","OTP worked, but you're already logged in so ignoring it, we recommend you refresh this page to update the list":"Il semble que vous êtes déjà connecté, donc nous avons ignoré votre mot de passe à usage unique. Actualisez cette page pour mettre à jour votre liste de mots de passe à usage unique.","Please delete sites from a single shared folder at a time.":"Veuillez supprimer les sites depuis un dossier partagé à la fois.","Please enter the code.":"Veuillez entrer le code.","Please fill all fields":"Remplissez tous les champs","Please move from/to one shared folder at a time":"Veuillez déplacer depuis ou vers un dossier partagé à la fois","Please purge sites from a single shared folder at a time.":"Veuillez purger les sites depuis un dossier partagé à la fois.","Please see %s for YubiKey setup instructions.":"Des instructions de configuration de Yubikey sont disponibles ici: %s.","Please select at least one item to share":"Sélectionnez au moins un élément à partager","Please specify a name":"Veuillez fournir un nom","Please undelete sites from a single shared folder at a time.":"Veuillez restaurer les sites depuis un dossier partagé à la fois.","Purge Selected":"Purger la sélection","Security Question Authentication":"Authentification par question de sécurité","Security Question Failed":"Réponse incorrecte à la question de sécurité","Share offer from":"Offre de partage de","Share Selected":"Partager la sélection","Share Updates":"Mises à jour de partage","Something is wrong, perhaps you used someone else's OTP while logged in under a different account, aborting":"Un problème est survenu. Il semble que vous avez djà utilisé un mot de passe à usage unique pour un compte différent.","Sorry - folder names starting with 'Shared-' are created by LastPass to indicate folders shared with other people. Please use a different name.":"Utilisez un nom qui ne commence pas par \"Shared\". C'est réservé à LastPass pour signaler des éléments partagés avec d'autres personnes.","Sorry something went wrong and bulk auto password change is not supported.":"Une erreur s'est produite lors de la tentative de mise à jour de vos mots de passe.","Sorry, a shared folder with that name already exists within this company.  It is possible that this is a deleted folder name.":"Il y a déjà un dossier partagé de ce nom, actif ou supprimé.","Sorry, an error occurred while trying to create the shared folder. Please relogin and try again.":"Nous n'avons pas pu créer le dossier partagé. Déconnectez-vous et reconnectez-vous avant de recommencer.","Sorry, an error occurred while trying to rename the shared folder. Please relogin and try again.":"Nous n'avons pas pu renommer le dossier partagé. Déconnectez-vous et reconnectez-vous avant de recommencer.","Sorry, as a premium user, you are limited to one Shared Folder. Please consider using LastPass Enterprise if you would like more.":"To share additional folders, you'll need LastPass Enterprise.","Sorry, LastPass for Chrome couldn't be installed.":"Désolé, LastPass pour Chrome n'a pas pu être installé.","Please try again.":"Please try again.","If the problem persists, uninstall and reinstall Google Chrome.":"Si le problème persiste, désinstallez et réinstallez Google Chrome.","Sorry, this shared folder is read-only.":"Vous ne pouvez pas modifier ce dossier partagé (lecture seule).","Sorry, this shared site is readonly.":"Vous ne pouvez pas modifier ce site partagé (lecture seule).","Sorry, you need to be a LastPass Premium member to use Shared Folders.":"Désolé, vous ne pouvez pas utiliser de dossiers partagés avec votre abonnement LastPass actuel.","The following users do not have an existing LastPass account: they'll need to create one before you can add them to your shared folder. Click below to invite them. If they join LastPass, %sboth of you will receive 1 month of LastPass Premium for free%s.":"Les utilisateurs suivants doivent créer un compte LastPass avant que vous puissiez les ajouter à votre dossier partagé. Cliquez pour les inviter. S'ils rejoignent LastPass, %svous recevrez tous les deux 1 mois de LastPass Premium gratuit%s.","This is a shared site. You are not permitted to clone it.":"C'est un dossier partagé. Vous n'êtes pas autorisé à le cloner.","Timed out waiting for the page to load.  Retry?":"Oops... That took too long. Try again?","To save this attachment, please edit the note from your local vault.":"Pour enregistrer cette pièce jointe, modifiez la note dans votre coffre-fort.","To view this attachment, please edit the note from your local vault.":"Pour consulter cette pièce jointe, modifiez la note dans votre coffre-fort.","Unable to contact the LastPass browser extension.  Please ensure you are running the latest version of the LastPass browser extension.":"Nous n'avons pas pu contacter l'extension de navigateur LastPass. Assurez-vous d'avoir la dernière version de l'extension de navigateur LastPass et recommencez.","Unable to proceed, the website does not allow automated password change.":"This site doesn't allow passwords to be changed automatically.","Undelete Selected":"Restaurer la sélection","Unknown OpenIDConnect provider":"Fournisseur de OpenID Connect inconnu","We are sorry, an error occurred - Cannot rsa decrypt value.":"Une erreur s'est produite lors du déchiffrement de la valeur RSA.","We need you password to calculate your score:":"Entrez votre mot de passe maître pour nous permettre de calculer votre score:","By moving sites from a shared folder to your general vault, you may make them unavailable to others.":"En déplaçant des sites depuis un dossier partagé vers votre coffre-fort général, vous pouvez les rendre indisponibles pour d'autres.","Continue?":"Continue?","By moving sites to a different shared folder, you may change who can access them.":"By moving sites to a different shared folder, you may change who can access them.","By moving sites to a shared folder, you may make them unavailable to others.":"En déplaçant des sites vers un dossier partagé, vous pouvez les rendre indisponibles pour d'autres.","You cannot move individually shared sites into a shared folder.":"Shared folders can't contain sites that are already shared individually.","You currently cannot move sites in/out of shared folders on the website, please use the browser plugin instead.":"Utilisez l'extension de navigateur pour gérer les sites dans des dossiers partagés.","Your free trial expires soon! Days remaining: %s. Buy LastPass Premium today?":"Votre essai gratuit expire bientôt! Jours restants: %s. Acheter LastPass Premium dès aujourd'hui?","Your one time password appears to be too long, it should be 32 (0-9, a-f) characters, aborting":"Votre mot de passe à usage unique est trop long. Il doit compter 32 caractères (0-9, a-f)","Your one time password appears to be too short, it should be 32 (0-9, a-f) characters, aborting":"Votre mot de passe à usage unique est trop court. Il doit compter 32 caractères (0-9, a-f)","Your personal account is no longer linked with your Enterprise account.":"Votre compte personnel n'est plus associé à votre compte Enterprise.","Log back in to see the changes.":"Reconnectez-vous pour voir les modifications.","This page will automatically refresh.":"Cette page va s'actualiser automatiquement.","Your share has been denied, probably because you lack permissions":"You might not have permission to do that. Check your permissions and try again.","Your trial has expired, would you like to purchase LastPass Premium?":"Votre essai a pris fin. Voulez-vous acheter LastPass Premium?","YubiKey Authentication":"Authentification YubiKey","You can make some above.":"Vous pouvez en créer ci-dessus.","Enter a valid email and try again":"Entrer un e-mail valable et réessayer","Admin":"Administrateur","Dashboard":"Tableau de bord","Disabled":"Désactivé","Settings":"Réglages","Shared Folders":"Dossiers partagés","User":"Utilisateur","Support Center":"Centre d'assistance","Very weak":"Très faible","Add":"Ajouter","Advanced Options":"Options avancées","Average":"Moyen","Back":"Précédent","Cancel":"Annuler","Delete":"Supprimer","Delete template":"Supprimer le modèle","Done":"Terminé","Edit":"Modifier","Enabled":"Activé","Name":"Nom","Never":"Jamais","Reject":"Rejeter","Remove":"Supprimer","Save":"Enregistrer","Renew within %d days to retain access to shared folders and other LastPass Enterprise features.":"Renouvelez dans les %d jours pour conserver l'accès aux dossiers partagés et autres fonctionnalités de LastPass Enterprise.","Renew today to retain access to shared folders and other LastPass Enterprise features.":"Renouvelez dès aujourd'hui pour conserver l'accès aux dossiers partagés et autres fonctionnalités de LastPass Enterprise.","Renew to retain access to shared folders":"Renouvelez pour conserver l'accès aux dossiers partagés","To leverage the full power of LastPass Enterprise, including shared folders, renew now.":"Renouvelez maintenant pour profiter de toute la puissance de LastPass Enterprise, dont les dossiers partagés.","Sites":"Sites","Status":"Statut","Strong":"Fort","Type":"Type","URL Rules":"Règles d’URL","Very Strong":"Très fort","Very strong":"Très fort","Weak":"Faible","Master Password Score":"Score de mot de passe maître","Accepted":"Acceptée","Add Role":"Ajouter un rôle","Add Shared Folder":"Ajouter un dossier partagé","Company Name":"Nom de société","Deleted":"Supprimé","Description":"Description","Duo Security":"Duo Security","Email Address":"Adresse e-mail du compte LastPass","Email address":"Adresse e-mail","Equivalent Domains":"Domaines équivalents","Family Manager":"Responsable de la famille","Family manager":"Responsable de la famille","Help":"Aide","No":"Non","No file chosen":"Aucun fichier choisi","Notes:":"Notes:","Other":"Autre","Phone Number":"Numéro de téléphone","SecureAuth":"SecureAuth","Security":"Sécurité","Security Score":"Score de sécurité","Set Initial Password":"Définir le mot de passe initial","Symantec VIP":"Symantec VIP","URL":"URL","Update":"Mettre à jour","Upgrade":"Mettre à niveau","Username":"Nom d’utilisateur","Yes":"Oui","features remaining":"fonctionnalités restantes","features used":"fonctionnalités utilisées","licenses in use":"licences en utilisation","licenses remaining":"licences restantes","Select":"Sélectionner","Value":"Valeur","Address":"Adresse","Advanced":"Avancé","Allow access to shared sites and folders":"Autoriser l'accès aux sites et dossiers partagés","Are you sure?":"Êtes-vous sûr ?","Close":"Fermer","Continue":"Continuer ","Country":"Pays","Download":"Télécharger","Error":"Erreur","Forbid access to shared sites and folders":"Interdire l'accès aux sites et dossiers partagés","OK":"OK","Remove user":"Retirer l'utilisateur","Renew now to access shared folders":"Renouvelez maintenant pour accéder aux dossiers partagés","To leverage the full power of LastPass Enterprise, including shared folders, update your payment info today.":"Pour profiter de toute la puissance de LastPass Enterprise, dont les dossiers partagés, mettez à jour dès aujourd'hui vos informations de paiement.","Renew":"Renouveler","State":"Statut","Updated":"Mis à jour ","Next":"Suivant","Shared by Policy":"Partagé par stratégie","Change Master Password":"Changer le mot de passe maître","Download Now":"Télécharger maintenant","Invited by":"Invité par","Warning":"Avertissement","Get Started":"Pour commencer","Linked Personal Account":"Compte personnel associé","Mobile":"Mobile","Multifactor Authentication":"Authentification multifacteur","Reporting":"Rapports","Notes":"Notes","An error occurred.":"Un problème est survenu.","Invalid password.":"Mot de passe non valable.","Send Email":"Envoyer un e-mail","Your account has been temporarily suspended because of too many login attempt failures.":"Votre compte a été suspendu à titre temporaire en raison d'un trop grand nombre de tentatives de connexion infructueuses.","Verify Your Email Address":"Vérifier votre adresse e-mail","Secure Note":"Note sécurisée","Logout":"Déconnexion","Login":"Connexion","Action":"Action","Please wait...":"Veuillez patienter...","Private Key":"Clé privée","View":"Afficher","Pending":"En attente","Learn More":"En savoir plus","Enterprise":"Enterprise","Folder Name":"Nom du dossier","More Info":"En savoir plus","Read-Only":"Lecture seule","User Details":"Détails d'utilisateur","Are you sure you want to continue?":"Continuer?","Folder:":"Dossier:","Name:":"Nom:","Password:":"Mot de passe du site:","URL:":"URL:","Username:":"Nom d'utilisateur:","You must enter a name.":"Entrez un nom.","Go Premium":"Passez à Premium ","Destroy All Sessions":"Détruire toutes les sessions","Require Password Change":"Exiger un changement de mot de passe","Google Authenticator":"Google Authenticator","Company":"Société","Features":"Fonctionnalités","Log In":"Connexion","Personal":"Personnel","Teams":"Teams","User Manual":"Manuel d'utilisation","Access a Secure Note":"Accéder à une note sécurisée","Access a Site":"Accéder à un site","Access an Identity":"Accéder à une identité","Alerts":"Alertes","Edit Shares":"Modifier des partages","Privacy":"Vie privée","All":"Toutes","Exclusive":"Exclusion","Form Fills":"Remplissages de formulaires","Group":"Groupe","Inclusive":"Inclusif","Last Login":"Dernière connexion","Emergency access":"Accès d’urgence","LastPass Premium":"LastPass Premium","One-to-many sharing":"Partage avec plusieurs","Upgrade to Premium":"Mettre à niveau vers Premium ","Allow reverting LastPass master password changes":"Autoriser le rétablissement des changements de mot de passe maître","Auto-Logoff Other Devices":"Déconnexion automatique des autres appareils","Bookmarklet Auto-Logoff":"Déconnexion automatique du bookmarklet","Country Restriction":"Restriction par pays","Disable Email Verification":"Désactiver la vérification par e-mail","Master Password Reverting":"Rétablir le mot de passe maître","Password Iterations":"Itérations de mot de passe","Security Email":"E-mail de sécurité","Send Test Email":"Envoyer un e-mail de test","Tor Networks":"Réseau Tor","Website Auto-Logoff":"Déconnexion automatique des sites","Credit Card Number":"Numéro de carte bancaire ","Expiration Date":"Date d’expiration","GST (Goods and Services Tax)":"GST (Taxe sur les marchandises et services)","If you are a customer and are not GST registered, you will be charged GST at the rate applicable in your country.":"Si vous êtes consommateur non immatriculé à la GST, la GST vous sera facturée au taux applicable dans votre pays.","If you are a customer within the EU and you are not VAT registered, you will be charged VAT at the rate applicable in your country.":"Si vous êtes consommateur dans l'UE non immatriculé à la TVA, la TVA vous sera facturée au taux applicable dans votre pays.","LastPass Families":"LastPass Families","Security Code":"Code de sécurité","Upgrade to LastPass Families":"Mettre à niveau vers LastPass Families","VAT (Value Added Tax)":"TVA (Taxe sur la valeur ajoutée)","Submit":"Envoyer","Mobile Devices":"Appareils mobiles","Never URLs":"Exclusions d’URL","Trusted Devices":"Appareils de confiance","Confirm New Password":"Confirmer le nouveau mot de passe maître","New Password":"Nouveau mot de passe maître","Federated Login":"Connexion fédérée","Something went wrong, please try again.":"Un problème est survenu, veuillez réessayer.","To continue, please login with Federated Login.":"Pour continuer, connectez-vous avec la connexion fédérée.","LastPass Enterprise":"LastPass Enterprise","LastPass Teams":"LastPass Teams","Generate Sharing Keys":"Générer les clés de partage","To generate sharing keys now, click the button below:":"Pour générer des clés de partage maintenant, cliquez ci-dessous:","Hide All":"Masquer tout","Show All":"Afficher tout","Date":"Date","Password":"Mot de passe","This is a shared site. You are not permitted to view the password.":"Vous n'êtes pas autorisé à voir le mot de passe pour ce site partagé.","Please provide this computer a name":"Nommer cet ordinateur","Authentication":"Authentification","YubiKey":"YubiKey","Website":"Site web","Request failed; is your Internet connection down?":"Cela n'a pas fonctionné. Êtes-vous connecté à l'Internet?","Multifactor authentication failed!":"Échec de l’authentification multifacteur!","Please enter your multifactor authentication code.":"Veuillez entrer votre code d'authentification multifacteur.","Create an account now.":"Créer un compte maintenant.","New to LastPass?":"Vous découvrez LastPass?","Adelaide":"Adélaïde","Alaska":"Alaska","Amman, Athens, Istanbul, Beirut, Cairo, Jerusalem":"Amman, Athènes, Istanbul, Beyrouth, Le Caire, Jérusalem","Amsterdam, Berlin, Rome, Vienna, Prague, Brussels":"Amsterdam, Berlin, Rome, Vienne, Prague, Bruxelles","Arizona":"Arizona","Atlantic Time (Canada), Manaus, Santiago":"Heure Atlantique (Canada), Manaus, Santiago","Auckland, Wellington":"Auckland, Wellington","Azores":"Les Açores","Buenos Aires, Georgetown":"Buenos Aires, Georgetown","Cape Verde Is.":"Îles du Cap-Vert","Caracas":"Caracas","Casablanca, Monrovia, Reykjavik":"Casablanca, Monrovia, Reykjavík","Central America, Saskatchewan":"Amérique centrale, Saskatchewan","Central Time (US & Canada), Guadalajara, Mexico City":"Heure centrale (États-Unis et Canada), Guadalajara, Mexico","Chennai, Kolkata, Mumbai, New Delhi, Sri Jayawardenepura":"Chennai, Kolkata, Mumbai, New Delhi, Sri Jayawardenapura","Darwin":"Darwin","Eastern Time (US & Canada)":"Heure standard de l’Est (États-Unis et Canada)","Fiji, Kamchatka, Marshall Is.":"Fidji, Kamtchatka, Îles Marshall","GMT: Dublin, Edinburgh, Lisbon, London":"GMT : Dublin, Édimbourg, Lisbonne, Londres","Greenland, Brasilia, Montevideo":"Groenland, Brasilia, Montevideo","Harare, Pretoria":"Harare, Pretoria","Hawaii":"Hawaii","Indiana, Bogota, Lima, Quito, Rio Branco":"Indiana, Bogota, Lima, Quito, Rio Branco","International Date Line West":"Ligne de date internationale (Ouest)","Kabul":"Kaboul","Kathmandu":"Katmandou","La Paz":"La Paz","Mid-Atlantic":"Centre Atlantique","Midway Island, Samoa":"Îles Midway, Samoa","Mountain Time (US & Canada)":"Heure des Rocheuses (États-Unis et Canada)","Newfoundland":"Terre-Neuve","Nuku'alofa":"Nuku'alofa","Pacific Time (US & Canada)":"Heure du Pacifique (États-Unis et Canada)","South Georgia":"Géorgie du Sud","Tehran":"Téhéran","West Central Africa":"Afrique centrale et occidentale","Yangon (Rangoon)":"Yangon (Rangoon)","Almaty":"Almaty","Baghdad":"Bagdad","Baku, Yerevan":"Bakou, Erevan","Canberra, Melbourne, Sydney, Hobart":"Ouganda","GMT+5":"GMT+5","GMT+7":"GMT+7","GMT+9":"GMT+7","Ulaan Bataar, Perth":"Oulan-Bator, Perth","Abu Dhabi, Muscat, Tbilisi, Izhevsk":"Abu Dhabi, Mascate, Tbilissi, Ijevsk","Astana, Dhaka, Novosibirsk":"Astana, Dhaka, Novossibirsk","Bangkok, Hanoi, Jakarta, Krasnoyarsk":"Bangkok, Hanoï, Jakarta, Krasnoïarsk","Beijing, Hong Kong, Singapore, Taipei, Irkutsk":"Beijing, Hong Kong, Singapour, Taipei, Irkoutsk","Brisbane, Guam, Port Moresby, Vladivostok":"Brisbane, Guam, Port Moresby, Vladivostok","Islamabad, Karachi, Tashkent, Ekaterinburg":"Islamabad, Karachi, Tachkent, Ekaterinbourg","Kuwait, Riyadh, Nairobi, Moscow, St. Petersburg, Volgograd":"Koweït, Riyad, Nairobi, Moscou, Saint-Pétersbourg, Volgograd","Magadan, Solomon Is., New Caledonia":"Magadan, Îles Salomon, Nouvelle-Calédonie","Seoul, Osaka, Sapporo, Tokyo, Yakutsk":"Séoul, Osaka, Sapporo, Tokyo, Iakoutsk","Sesame Authentication":"Authentification Sesame","The master password you entered is incorrect. Please try again.":"Mot de passe maître erroné. Recommencez.","Would you like to create an account now?":"Voulez-vous créer un compte maintenant?","Unable to login because of an Internet Explorer bug. Please login via the plugin or use a different browser.":"Connexion impossible suite à un problème avec Internet Explorer. Utilisez un navigateur plus récent.","Logoff":"Déconnexion","Payment History":"Historique des paiements","Re-encrypting Data":"Rechiffrement des données","Requesting Shared Folder Information":"Demande des données de dossier partagé","Timeout Error loading XML document, try again later":"Dépassement de délai en chargement du document XML, recommencez plus tard","Uploading Data":"Envoi de données","Add Notification":"Ajouter une notification","Are you sure you would like to delete this notification?":"Supprimer cette notification?","Are you sure you would like to send the email to %s user?":"Envoyer l'e-mail à %s utilisateur?","Are you sure you would like to send the email to %s users?":"Envoyer l'e-mail à %s utilisateurs?","List of Notifications":"Liste de notifications","Never Notify List":"Liste à ne jamais notifier","No email addresses have been entered.":"Pas d'adresses e-mail saisies.","Notification Deleted":"Notification supprimée","Notification Flow Control":"Contrôle de flux des notifications","Notification Saved":"Notification enregistrée","Sending Email":"Envoi d'e-mail","Upcoming Email Notifications":"Notifications par e-mail à venir","Updating":"Mise à jour en cours","View Notification":"Afficher la notification","Checkbox":"Case à cocher","Show Password":"Afficher le mot de passe","Text":"Texte","Generates one time verification codes on your smart phone.":"Génère des codes de vérification à usage unique sur votre téléphone.","Generates one time verification codes or sends push notifications to your smart phone.":"Envoie des notifications push à votre téléphone pour vérifier la connexion.","Hardware devices that generate one time verification codes.":"Périphériques matériels qui génèrent des codes de vérification à usage unique.","Printable spreadsheet of numbers and letters used to enter different values when logging in.":"Un tableau imprimable de chiffres et de lettres utilisés pour saisir des valeurs différents lors de la connexion.","Sends an Accept/Reject notification to your smart phone.":"Envoie une notification d'Acceptation/Rejet à votre téléphone.","Sends push notifications to your smart phone to verify your login.":"Envoie des notifications push à votre téléphone pour vérifier la connexion.","Software application that can be placed on a USB key to generate one time verification codes.":"Une application logicielle pouvant être placée sur une clé USB pour générer des codes de vérification à usage unique.","Support for fingerprint sensors and card readers.":"Compatibilité des capteurs d'empreintes digitales et lecteurs de carte.","USB device that generates one time verification codes.":"Appareil USB qui génère des codes de vérification à usage unique.","Fingerprint / Smart Card":"Empreinte digitale / Smart Card","Grid":"Grid","Salesforce Authenticator":"Salesforce Authenticator","Sesame":"Sesame","Toopher":"Toopher","Transakt":"Transakt","Emergency Access Request":"Demande d'accès d'urgence","Date (EST)":"Date (EST)","Duration":"Durée","Product":"Produit","Source":"Source","Sub Total":"Sous-total","Units":"Unités","Identity":"Identité","Instructions:":"Instructions:","Require Password Reprompt":"Redemander le mot de passe maître","An Error occurred while unsharing accounts":"Un problème est survenu lors de la suppression du partage de comptes","Attempt to unshare failed":"Échec de la tentative de suppression de partage","Available Items":"Éléments disponibles","Selected Items":"Éléments sélectionnés","Administrator":"Administrateur","Read Only":"Lecture seule","Master Password":"Mot de passe maître","Since this site is deleted, we are unable to log you in.":"Ce site a été supprimé, nous ne pouvons pas vous y connecter.","An error occurred":"Un problème est survenu","My LastPass Vault":"Mon coffre-fort LastPass","Sweden":"Suède","Denmark":"Danemark","Turkey":"Turquie","Holy See (Vatican City State)":"Saint-Siège (État de la Cité du Vatican)","Hide Passwords":"Masquer les mots de passe","Accept":"Accepter","(New Pending Share Offers)":"(Nouvelles offres de partage en attente)","Collapse All":"Réduire tout","Credit Monitoring":"Surveillance du crédit","Expand All":"Développer tout","Identities":"Identités","Tutorials":"Didacticiels","Deleted Items":"Éléments supprimés","Invite Friends To Try LastPass":"Inviter des amis à essayer LastPass","Purge":"Purger","Share":"Partager","Undelete":"Restaurer","Clear History":"Effacer l’historique","Loading":"Chargement en cours","Start Date":"Date de début","(none)":"(sans catégorie)","Accept Share Updates":"Accepter les données partagées","Accept Shared Site":"Accepter un site partagé","Account Number":"Numéro de compte","Account Recovery detected. It is essential that you immediately change your password! Enter a new password and password hint. You will not be prompted for your old password.":"Récupération de compte détectée. Changez votre mot de passe maître immédiatement! Entrez un nouveau mot de passe maître et un nouvel indice. Vous n'aurez pas à entrer votre ancien mot de passe.","Account Settings":"Paramètres du compte","Account Type":"Type de compte","Add Form Fill Profile":"Ajouter un profil de remplissage de formulaire","Add Identity":"Ajouter une identité","Add Profile":"Ajouter un profil","Add Secure Note":"Ajouter une note sécurisée","Add Site":"Ajouter un site","Add Site Information":"Ajouter des informations de site","Agent Name":"Nom de l’agent","Agent Phone":"Téléphone de l’agent","Alert":"Alerte","Alias":"Alias","All custom fields must have both text and a value.":"Tous les champs personnalisés doivent contenir du texte et une valeur.","An Error Occurred":"Un problème est survenu","An error occurred while downloading your deleted sites":"Un problème est survenu lors du téléchargement de vos sites supprimés","An error occurred. Please try again later.":"Un problème est survenu. Veuillez réessayer plus tard.","Analyzing Your Passwords":"Analyse de vos mots de passe","Applications":"Applications","Apps assigned to me":"Apps qui me sont attribuées","April":"Avril","Are you sure you want to accept this share update?":"Accepter ce partage mis à jour?","Are you sure you want to change this site's URL?\n\nDoing so may cause it to stop working.":"Modifier l'URL de ce site?\n\nIl risque de ne plus fonctionner.","Are you sure you want to delete this alert?":"Supprimer cette alerte?","Are you sure you want to delete this identity?":"Supprimer cette identité?","Are you sure you want to delete this item?":"Supprimer cet élément?","Are you sure you want to delete this share update?":"Supprimer ce partage mis à jour?","Are you sure you want to permanently delete the selected sites?":"Supprimer définitivement les sites sélectionnés?","Are you sure you would like to delete the selected sites?":"Supprimer les sites sélectionnés?","Are you sure you would like to delete this URL Rule?":"Supprimer cette règle d'URL?","Are you sure you would like to delete this field?":"Supprimer ce champ?","Are you sure you would like to delete this mobile device?":"Révoquer l'accès à LastPass depuis cet appareil? Pour restaurer l'accès depuis cet appareil, connectez-vous à votre compte et effectuez la procédure de vérification d'appareil.","Are you sure you would like to delete this never URL?":"Restaurer la fonctionnalité de LastPass pour cette URL?","Are you sure you would like to delete this set of equivalent domains?":"Supprimer cet ensemble de domaines équivalents?","Are you sure you would like to delete this trusted device?":"Supprimer cet appareil de confiance?","Are you sure you would like to revoke this third party's access to your LastPass account?":"Révoquer l'accès de ce tiers à votre compte LastPass?","Are you sure you would like to undelete the selected sites?":"Restaurer les sites sélectionnés?","Are you sure you would like to undelete this site?":"Restaurer ce site?","August":"Août","Authentication Failed.":"Échec de l’authentification.","Bank Account":"Compte bancaire","Bank Name":"Nom de la banque","Before we can give you a score you need to add some sites to your vault!":"Nous ne pouvons pas créer de score pour ce qui n'est pas présent. Ajoutez des sites à votre coffre-fort et recommencez.","Bit Strength":"Force de bits","Branch Address":"Adresse de l’agence","Branch Phone":"Téléphone de l’agence","Cannot Delete Field":"Impossible de supprimer le champ","Cannot Update":"Mise à jour impossible","Cannot Update Settings":"Mise à jour des réglages impossible","Change Folder Name":"Changer le nom du dossier","Change Password":"Changer le mot de passe","Change selected passwords with one click:":"Changer les mots de passe sélectionnés d'un seul clic:","City / Town":"Ville","Co-pay":"Co-paiement","Company Phone":"Téléphone professionnel","Company policy requires that you only use a single YubiKey.":"La stratégie d'entreprise n'autorise qu'une seule YubiKey.","Computing Overall Ranking":"Calcul du classement global","Confirm 'Open' Action":"Confirmer l'action 'Ouvrir'","Confirm Delete":"Confirmer la suppression","Confirm Password":"Confirmer le mot de passe","Confirm URL Change":"Confirmer le changement d'URL","Connection Mode":"Mode de connexion","Connection Type":"Type de connexion","Copy":"Copier","Count":"Nombre","Credit Card":"Carte bancaire","Database":"Base de données","Date of Birth":"Date de naissance","December":"Décembre","Decrypting Your Data":"Déchiffrement de vos données","Delete Alert?":"Supprimer l'alerte?","Delete Equivalent Domains?":"Supprimer les domaines équivalents?","Delete Forever?":"Supprimer définitivement?","Delete Identity?":"Supprimer l'identité?","Delete Mobile Device?":"Supprimer un appareil mobile?","Delete Never URL?":"Supprimer une exclusion d'URL?","Delete Shared Site":"Supprimer un site partagé","Delete Site?":"Supprimer le site?","Delete Sites?":"Supprimer les sites?","Delete Trusted Device?":"Supprimer l'appareil de confiance?","Delete URL Rule?":"Supprimer la règle d'URL?","Deselect All":"Désélectionner tout","Downloading your data...":"Téléchargement de vos données...","Driver's License":"Permis de conduire","Edit Application":"Modifier l'application","Edit Form Fill Profile":"Modifier un profil de remplissage de formulaire","Edit Identity":"Modifier l'identité","Edit Role":"Modification de rôle","Shared Folder Permission Changed":"Autorisation de dossier partagé modifiée","Edit Site Fields":"Modifier les champs du site","Edit Site Information":"Modifier les informations du site","Email Account":"Compte d’e-mail","Email already in use, have you forgotten your password?":"E-mail déjà utilisé. Avez-vous oublié votre mot de passe maître?","Encryption":"Chiffrement","Enter Password":"Entrer le mot de passe maître","Expiration":"Expiration","FIPS Mode":"Mode FIPS","Failed to change password.":"Échec de changement de mot de passe.","Fair":"Correcte","February":"Février","Format":"Format","Generate a Password":"Générer un mot de passe","Generic":"Générique","Google Authenticator authentication can not be enabled if Sesame authentication is being used. Please disable Sesame authentication and try again.":"Google Authenticator ne peut pas être activé en même temps que Sesame Authenticator. Désactivez Sesame et recommencez.","Great news! The usernames in your vault selected were tested and have not been involved in any known security breaches since this test was last run.":"Bonne nouvelle! Aucune des adresses que vous avez soumises n'a été compromise dans une violation de sécurité connue depuis la dernière exécution de ce test.","Group ID":"ID de groupe","Health Insurance":"Assurance maladie","Height":"Hauteur","High":"Haut","History":"Historique","Hostname":"Nom d’hôte","I just scored %s on the LastPass Security Challenge":"Je viens d'obtenir %s sur le Challenge de sécurité LastPass","I just scored %s on the LastPass Security Challenge ranking %s overall. It securely analyzes the strength of your passwords, alerts you if you have any duplicate or weak passwords, and tells you how to make them more secure.\n\nGive it a try and see if you can beat my score!":"Je viens d'obtenir %s sur le Challenge de sécurité LastPass pour un classement global de %s. Il analyse en toute sécurité la force de vos mots de passe, vous alerte en cas de mots de passe faibles ou en double, et vous explique comment les rendre plus sûrs.\n\nEssayez-le pour voir si vous pouvez battre mon score!","IBAN Number":"Numéro IBAN","If any security breaches are found, details will be emailed directly to the affected email addresses. Please deselect any email addresses that you do not want included, or click cancel to skip the test completely.":"Si nous trouvons quoi que ce soit, nous enverrons directement des détails aux adresses concernées. Décochez la case de tout élément que vous souhaitez ignorer, ou cliquez sur Annuler pour éviter complètement le test.","In progress...Please wait.":"Ce ne devrait pas être long...","In progress...This might take a few moments":"Cela pourrait prendre un moment","Initializing Comparison Engine":"Initialisation du moteur de comparaison","Initializing...":"Initialisation...","Instant Messenger":"Messagerie instantanée","Insurance":"Assurance","Invalid Password.":"Mot de passe non valable.","Invalid Selection":"Sélection non valable","Invalid email address, try again":"Adresse e-mail non valable, réessayez","Update to the new LastPass experience. It should only take a minute. You'll be logged out here and taken to LastPass.com to finish. Sorry for the inconvenience, but it only happens once - and it's worth it! Promise.":"Mettez à jour pour profiter des dernières nouveautés de LastPass. Cela ne devrait prendre qu'une minute. Vous allez être déconnecté d'ici pour passer à LastPass.com pour terminer l'opération. Désolés du dérangement, ceci ne se produira qu'une seule fois - et cela en vaut la peine ! Promis.","Update to the new LastPass experience. It should only take a minute.":"Mettez à jour maintenant pour profiter des dernières nouveautés de LastPass. Cela ne prendra qu'une minute.","Issued Date":"Date d’émission","Issuing Authority":"Autorité d’émission","Item has been permanently deleted":"L'élément a été définitivement supprimé","Item has been undeleted":"L'élément a été restauré","January":"Janvier","July":"Juillet","June":"Juin","Key Index":"Index de clé","Key Type":"Type de clé","LastPass Security Challenge":"Challenge de sécurité LastPass","LastPass Shared Folder":"Dossier partagé LastPass","Launch Site":"Lancer le site","License Class":"Classe de licence","License Key":"Clé de licence","Licensee":"Titulaire de la licence","Loading...":"Chargement...","March":"Mars","May":"Mai","MedHigh":"Moyenne haute","Member ID":"ID de membre","Member Name":"Nom de membre","Membership":"Adhésion","Membership Number":"Numéro de membre","Move to Folder":"Déplacer vers un dossier","Move to Sub-Folder":"Déplacer vers un sous-dossier","Multifactor Authentication Failure":"Échec de l’authentification multifacteur","Name on Card":"Nom sur la carte","Nationality":"Nationalité","Next we'll show you your score and ways to improve your security.":"Vous obtiendrez ensuite votre score et quelques conseils pour améliorer votre sécurité.","Normal":"Normal","Notes Too Large":"Notes trop grosses","November":"Novembre","Number":"Numéro","Number of Licenses":"Nombre de licences","Obtaining Word Dictionary":"Obtention du dictionnaire","October":"Octobre","One or more of the email addresses that we checked for you is associated with a website that may have been involved in a security breach.":"Au moins une adresse que nous avons vérifiée est associée à un site web qui peut avoir été impliqué dans une violation de sécurité.","Open All":"Ouvrir tout","Opening Your Secure Vault":"Ouvrir votre coffre-fort sécurisé","Order Number":"Numéro de commande","Order Total":"Total de la commande","Organization":"Organisation","Passphrase":"Phrase secrète","Passport":"Passeport","Password History":"Historique de mot de passe","Password and password reminder cannot match.":"L'indice de mot de passe ne peut pas être le mot de passe.","Perfect!":"Parfait!","Physician Address":"Adresse du médecin","Physician Name":"Nom du médecin","Physician Phone":"Téléphone du médecin","Pin":"Code PIN","Please Make a Selection":"Veuillez faire un choix","Please accept or reject all outstanding shares before changing your email/password.":"Veuillez accepter ou rejeter tous les partages en attente avant de changer votre adresse e-mail ou votre mot de passe maître.","Please enter a folder name.":"Entrez un nom de dossier.","Please limit URL Rule by hostname, path, or port.":"Veuillez limiter la règle d'URL par nom d'hôte, par chemin ou par port.","Please press the 'Increase Iterations' button to change your password iterations.":"Cliquez sur 'Augmenter les itérations' pour modifier le nombre de hachages PBKDF2 de vos identifiants avant leur envoi vers les serveurs LastPass.","Please re-enter your LastPass Master Password":"Veuillez entrer à nouveau votre mot de passe maître LastPass","Please reload the page to view the changes.":"Rechargez les pages pour voir les modifications.","Please select a type.":"Sélectionnez un type.","Please upgrade to the latest version of LastPass before changing your email/password.":"Veuillez faire la mise à jour vers la dernière version de LastPass avant de changer votre adresse e-mail ou votre mot de passe maître.","Policy Number":"Numéro de police","Policy Type":"Type de police","Port":"Port","Price":"Tarif","Protected":"Protégée","Public Key":"Clé publique","Publisher":"Éditeur","Purchase Date":"Date d’achat","Queued for a change. Please wait.":"En file d'attente en vue d'un changement. Veuillez patienter.","Re-encrypting your data...":"Rechiffrement de vos données...","Your invitation link has expired. Ask your LastPass administrator for a new invitation.":"Votre lien d'invitation a expiré. Demandez une nouvelle invitation à votre administrateur LastPass.","Reject Shared Site":"Rejeter un site partagé","Revoke Third Party Access?":"Révoquer l'accès de tiers?","Routing Number":"Code de la banque","SID":"SID","SITES WITH DUPLICATE PASSWORDS":"SITES AVEC MOTS DE PASSE EN DOUBLE","SITES WITH NO PASSWORDS":"SITES SANS MOT DE PASSE","SITES WITH UNIQUE PASSWORDS":"SITES AVEC UN MOT DE PASSE UNIQUE","SMTP Port":"Port SMTP","SMTP Server":"Serveur SMTP","SSH Key":"Clé SSH","SSID":"SSID","SUCCESS!":"Réussite!","SWIFT Code":"Code SWIFT","Secure Notes":"Notes sécurisées","Select All":"Sélectionner tout","Select or enter a new folder name":"Sélectionnez ou entrez un nouveau nom de dossier","September":"Septembre","Server":"Serveur","Sex":"Sexe","Show My Score":"Afficher mon score","Since these sites are pending shares, we are unable to log you in.":"Certains sites de ce dossier ont été partagés mais pas encore acceptés. Vous pourrez recommencer quand tous les éléments partagés auront été acceptés.","Site":"Site","Site Review Results":"Résultats de l'évaluation de site","Sites with Duplicate Passwords":"Sites avec mots de passe en double","Social Security":"Sexe","Software License":"Licence logicielle","Support Email":"E-mail d’assistance","Telephone":"Téléphone","Thanks for spreading the word!":"Merci de faire passer le mot!","That email address is already in use by a different user.":"Quelqu'un d'autre utilise déjà cette adresse e-mail.","That folder already exists.":"Ce dossier existe déjà.","The URL cannot be blank.":"Fournir une URL.","The domain cannot be blank.":"Fournissez un domaine.","The following email addresses are associated with sites in your LastPass vault. The next stage of the test is an optional lookup of the email addresses against known security breaches.":"Ces adresses e-mail sont associées à des sites dans votre coffre-fort LastPass. Poursuivez pour voir si l'une d'entre elles a été compromise lors de violations de sécurité connues.","The list of equivalent domains cannot be blank.":"Fournir une liste de domaines équivalents.","The notes field contains too much data.  You may store a maximum of 45,000 characters per note.\n\nWould you like us to truncate the note for you?  You will lose some of your data.":"C'est une « note » plutôt longue ! Limitez les notes à 45 000 caractères.\n\nDevons-nous la raccourcir pour vous? Vous pourriez perdre des données.","These sites use the same password as your LastPass Master password. Your master password should be unique and never reused as the password for another account or site.":"Ces sites utilisent le même mot de passe que votre mot de passe maître LastPass. Assurez-vous que votre mot de passe maître est unique. Ne le réutilisez jamais sur d'autres sites.","Timeout error, please try again later.":"Dépassement de délai, veuillez réessayer plus tard.","Tip: Use folder names like 'Social', 'Banking', or 'Kids Sites' to organize your LastPass vault!":"Conseil: Utilisez des noms de dossier tels que 'Social', 'Banque' ou 'Sites pour enfants' pour organiser votre coffre-fort LastPass!","To date, you have run the LastPass security challenge only %s times. To view historical graphs of your last 10 attempts: %sVIEW HISTORICAL GRAPHS%s":"À ce jour, nous avons exécuté le Challenge de sécurité LastPass %s fois. %sConsultez les graphiques historiques%s de vos 10 dernières tentatives.","Undelete Site?":"Restaurer le site?","Update Complete!":"Mise à jour terminée!","Update Now":"Mettre à jour maintenant","Uploading your re-encrypted data...":"Envoi de vos données rechiffrées...","Use 802.1X":"Utiliser 802.1X","User Does Not Exist":"L'utilisateur n'existe pas","Username History":"Historique de nom d'utilisateur","Version":"Version","View Alerts":"Afficher les alertes","View Shared Site":"Afficher le site partagé","View Shares":"Afficher des partages","Visit Site":"Visiter le site","We are sorry, an error occurred - Cannot parse public key.":"Un problème est survenu lors de l'analyse de la clé publique.","When changing your password, you must also change your reminder.":"Lors du changement de votre mot de passe maître, vous devez aussi changer votre indice.","Wi-Fi Password":"Mot de passe Wi-Fi","You are choosing to prevent downloading the contents of this Shared Folder to your vault. This is typically a good idea to improve performance if you have a lot of sites in Shared Folders that are not regularly used. You may always begin to download the folder contents again by going back to this menu.":"Vous êtes sur le point d'empêcher le téléchargement vers votre coffre-fort du contenu de ce dossier partagé. Ceci aide à améliorer les performances quand il y a beaucoup de sites rarement utilisés dans les Dossiers partagés. Vous pourrez télécharger à nouveau le contenu du dossier à tout moment.","You cannot share items that are already in a shared folder.":"Vous ne pouvez pas partager des éléments qui sont déjà dans un dossier partagé.","You currently have":"Vous avez actuellement","You did not enter your LastPass master password":"Vous n'avez pas entré votre mot de passe maître LastPass","You do not appear to have a sharing key, cannot proceed.":"Il semble que vous n'avez pas de clé de partage. Il vous en faut une pour terminer ce que vous avez commencé.","You do not have any Favorites yet.":"Vous n'avez pas encore de favoris.","You do not have any sites. Please add some sites to your vault and then try taking the LastPass Security Challenge again.":"Vous n'avez aucun site. Ajoutez des sites à votre coffre-fort pour reprendre le Challenge de sécurité LastPass.","You have deleted the application.":"Vous avez supprimé l'application.","You have entered an incorrect LastPass master password.":"Vous avez entré un mot de passe maître LastPass erroné.","You have entered an invalid password iterations value.":"Vous avez entré une valeur d'itérations de mot de passe non valable. Pour consulter vos paramètres, passez à Paramètres du compte > Avancés > Itérations de mot de passe.","You have no deleted sites.":"Vous n'avez pas de sites supprimés.","You have not selected any items. Please click on the checkbox next to the items you wish to share.":"Sélectionnez des éléments à partager et recommencez.","You have not selected any sites. Please click on the checkbox next to the sites you wish to delete.":"Sélectionnez des sites et recommencez.","You have not selected any sites. Please click on the checkbox next to the sites you wish to undelete.":"Sélectionnez des sites et recommencez.","You have selected too many items. Please limit your selection to %s items.":"Vous avez sélectionné trop d'éléments. Limite: %s.","You must enter a profile name.":"Entrez un nom de profil.","You must enter a unique name.":"Entrez un nom unique.","You must enter a valid bank account number, consisting only of letters and digits.":"Saisissez un numéro de compte bancaire valable uniquement composé de lettres et de chiffres.","You must enter a valid bank routing number, consisting only of digits.":"Saisissez un numéro de code de banque valable uniquement composé de chiffres.","You must enter a valid birthday, with a 4 digit year.":"Entrez une date de naissance valable comportant une année à 4 chiffres.","You must enter a valid credit card expiration date, with a 4 digit year.":"Entrez une date d'expiration de carte bancaire valable comportant une année à 4 chiffres.","You must enter a valid credit card start date, with a 4 digit year.":"Entrez une date de début de carte bancaire valable comportant une année à 4 chiffres.","You must enter a valid email address.":"Entrez une adresse e-mail valable.","You must enter a valid extension, consisting only of digits.":"Entrez une extension valable composée uniquement de chiffres.","You must enter a valid phone number.":"Entrez un numéro de téléphone valable.","You must enter a valid security email address.":"Veuillez saisir une adresse e-mail de sécurité valable.","You must enter an email address.":"Entrez une adresse e-mail.","You must enter your credit card issue number as a sequence of 1 to 3 digits.":"Saisissez le numéro d'émission de votre carte bancaire sous forme de séquence de 1 à 3 chiffres.","You must enter your credit card number as a sequence of 10 to 19 digits, without dashes.":"Saisissez votre numéro de carte bancaire sous forme de séquence de 10 à 19 chiffres, sans tirets.","You must enter your credit card security code as a sequence of 3 to 4 digits.":"Saisissez le code de sécurité de votre carte bancaire (CVC/CVV) sous forme de séquence de 3 à 4 chiffres.","You must log into your LastPass vault before starting the LastPass Security Challenge.":"Connectez-vous à votre coffre-fort LastPass avant de lancer le Challenge de sécurité LastPass.","Your LastPass Master password strength is:":"Force de votre mot de passe maître:","Your YubiKey failed to authenticate. Please contact support@lastpass.com for assistance.":"Échec de l'authentification par votre YubiKey. Consultez https://support.logmeininc.com/lastpass si le problème persiste.","Your YubiKey failed to authenticate. Please try again.":"Échec de l'authentification par votre YubiKey. Veuillez réessayer.","Your email address must be a part of one of the following domains:":"Votre adresse e-mail doit faire partie d'un des domaines suivants:","Your email/password has not been changed.\n\nLastPass should be contacting you soon about the problem you encountered.":"Votre adresse e-mail/mot de passe n'ont pas été modifiés.\n\nConsultez https://support.logmeininc.com/lastpass si le problème persiste.","Your email/password/password iterations change is complete. You should now be automatically logged out, please relogin to your account to verify your new credentials. If you are not automatically logged out, please do so manually.":"Votre modification d'adresse e-mail/mot de passe/itérations de passe est terminée. Vous devriez maintenant être déconnecté. Reconnectez-vous pour vérifier vos nouveaux identifiants.","Your field could not be deleted. Please retry later.":"Le champ n'a pas pu être supprimé. Réessayez plus tard.","Your message could not be sent to the following emails since the user has requested us to never send them any further emails ever again. Please use your personal email to contact them directly.":"Votre message n'a pas pu être envoyé à ces utilisateurs. Vous avez refusé les communications de LastPass. Utilisez votre adresse e-mail personnelle pour les contacter directement.","Your message could not be sent to the following emails since they are invalid. Please correct them and try again.":"Votre message n'a pas pu être envoyé aux adresses e-mail non valables suivantes. Corrigez-les et recommencez.","Your message has been sent":"Votre message a été envoyé","Your new password cannot be the same as your old password":"Votre nouveau mot de passe maître ne peut pas être le même que l'ancien","Your password can not be the same as your email.":"Désolé, vous ne pouvez pas utiliser votre adresse e-mail comme mot de passe maître.","Your password is easily guessable.":"Votre mot de passe maître est facile à deviner.","Your password is too short. It must be at least 8 characters long.":"Votre mot de passe maître doit comporter au moins 8 caractères.","Your personal LastPass account has been linked with your enterprise account. It will show up as a sub-folder in your vault.\n\nPlease log back in to see the changes.":"Votre compte LastPass personnel a été associé à votre compte Enterprise. Il apparaîtra comme sous-dossier dans votre coffre-fort.\n\nReconnectez-vous pour voir les modifications.","Your personal LastPass account has been linked with your enterprise account. It will show up as a sub-folder in your vault.\n\nThis page will automatically refresh.":"Votre compte LastPass personnel a été associé à votre compte Enterprise. Il apparaîtra comme sous-dossier dans votre coffre-fort.\n\nCette page va s'actualiser automatiquement.","Your settings could not be updated.":"Vos paramètres n'ont pas pu être mis à jour.","Your settings could not be updated. Please retry later.":"Vos paramètres n'ont pas pu être mis à jour. Réessayez plus tard.","YubiKey and Google Authenticator can not be enabled at the same time. Please disable one or the other and try again.":"Yubikey et Google Authenticator ne peuvent pas être activés simultanément. Désactivez un service et recommencez.","YubiKey and Grid authentication can not be enabled at the same time. Please disable one or the other and try again.":"Yubikey et l'authentification Grid ne peuvent pas être activés simultanément. Désactivez un service et recommencez.","YubiKey authentication can not be enabled if Sesame authentication is being used. Please disable Sesame authentication and try again.":"Yubikey ne peut pas être activé en même temps que l'authentification Sesame. Désactivez Sesame et recommencez.","ZIP / Postal Code":"Code postal","alert":"alerte","alerts":"alertes","application":"application","favorites":"favoris","hide":"masquer","identities":"identités","identity":"identité","password":"Mot de passe maître","profiles":"profils","show":"afficher","show password":"afficher le mot de passe","site":"site","sites":"sites","Auto-Change":"Changer automatiquement","Verify Email":"Vérifier l'adresse e-mail","You cannot change your account email and security email at the same time.  Please change them one at a time.":"Vous ne pouvez pas changer à la fois votre e-mail du compte et votre e-mail de sécurité. Changez-les un par un.","It could be matching the site's current password, or one of its old passwords.":"Il pourrait correspondre au mot de passe actuel du site, ou à un de ses anciens mots de passe.","The offending site in your vault is named '%s'.":"Voici le site en cause dans votre coffre-fort: %s.","We recommend that you change your master password.":"Nous vous recommandons de changer votre mot de passe maître.","Your master password is very weak because it is similar to a password in your LastPass vault.":"Votre mot de passe maître est très faible parce qu'il est similaire à un mot de passe de votre coffre-fort LastPass.","Your master password is very weak because its value already exists in your LastPass vault.":"Votre nouveau mot de passe maître est faible parce qu'il correspond à un mot de passe existant dans votre coffre-fort LastPass.","If you would like to use the LastPass batch auto password change feature, install our %sExtension%s now!":"Pour utiliser la fonction de changement de mot de passe automatique par lot de LastPass, installez notre %sextension%s dès maintenant!","If you would like to use the LastPass batch auto password change feature, install our %spre-build%s now!":"Pour utiliser la fonction de changement de mot de passe automatique par lot de LastPass, installez notre %spréversion%s dès maintenant!","If you would like to use the LastPass batch auto password change feature, switch to %sChrome%s and install our %sExtension%s now!":"Pour utiliser la fonction de changement de mot de passe automatique par lot de LastPass, passez à %sChrome%s et installez notre %sextension%s dès maintenant!","1 hour":"1 heure","12 hours":"12 heures","14 days":"14 jours","15 minutes":"15 minutes","21 days":"21 jours","24 hours":"24 heures","24/7 web access to your ID records and credit scores for all three credit bureaus.":"Accès web 24/7 à vos enregistrements de pièces d'identité et scores de crédit pour les trois bureaux de crédit aux États-Unis.","3 days":"3 jours","3 hours":"3 heures","30 days":"30 jours","30 minutes":"30 minutes","30 seconds":"30 secondes","48 hours":"48 heures","5 minutes":"5 minutes","6 hours":"6 heures","60 seconds":"60 secondes","7 days":"7 jours","8 hours":"8 heures","A Shared Folder will appear in the vault as Shared-'Folder Name'.":"Un dossier partagé va apparaître dans le coffre-fort sous la forme Shared-'Nom de dossier'.","A server error occurred while processing your request.":"Nous avons malheureusement subi une erreur de serveur. Veuillez recommencer.","Accept Emergency Access":"Accepter l’accès d’urgence","Access a FormFill":"Accéder à un remplissage de formulaire","Access a Site's Password":"Accéder au mot de passe d'un site","Access granted":"Accès accordé","Access pending until":"Fin de la période d'attente","Account Activity":"Activité du compte","Account Email":"E-mail du compte","Account linked":"Compte associé","Actions":"Actions","Add Attachment":"Ajouter une pièce jointe","Add Emergency Access":"Ajouter un accès d’urgence","Add Form Field":"Ajouter un champ de formulaire","Add New Folder":"Ajouter un nouveau dossier","Add Note":"Ajouter une note","Add Site to Favorites":"Ajouter aux favoris","Add WiFi passwords, membership IDs, or any other info you want to keep safe.":"Ajoutez des mots de passe Wi-Fi, cartes de membre ou d'autres informations que vous souhaitez protéger.","Add an Identity":"Ajouter une identité","Add another custom field":"Ajouter un autre champ personnalisé","Add as a subfolder under:":"Ajouter comme sous-dossier ici:","Add payment cards or address profiles to type less when shopping online.":"Voulez-vous taper moins pour vos achats en ligne? Ajoutez des cartes de paiement et des profils d'adresse.","Add to Selected":"Ajouter à la sélection","Address 1":"Adresse 1","Address 2":"Adresse 2","Address 3":"Adresse 3","Admin Console":"Console d'administration","Advanced Settings:":"Paramètres avancés:","Afghanistan":"Afghanistan","Alabama":"Alabama","Aland Islands":"Îles Åland","Albania":"Albanie","Alberta":"Alberta","Algeria":"Algérie","Allow Recipient to View Password":"Autoriser le destinataire à afficher le mot de passe","American Samoa":"Samoa américaines","An Identity helps you organize your vault into convenient 'subvaults'. Group your Sites, Secure Notes, and Form Fill profiles based on what you need in specific situations, such as 'Home' and 'Work'. When you switch Identities, you'll only see and fill the items you added to your current identity.":"Organisez votre coffre-fort en 'sous-coffres' pratiques grâce aux identités. Les identités courantes sont 'Travail' et 'Domicile'. Vous ne pouvez voir et remplir des éléments que dans l'identité active.","An item that has been individually shared with you cannot be moved into a shared folder.":"Ces éléments ont été partagés avec vous individuellement et ne peuvent pas être déplacés vers un dossier partagé.","An item that you have already shared individually cannot be moved to a shared folder.":"Un élément a été partagé individuellement et ne peut pas être déplacé vers un dossier partagé.","An unexpected error has occurred":"Nous ne sommes pas sûrs de ce qui s'est mal passé. Si le problème persiste, adressez-vous à l'équipe LastPass.","Andorra":"Andorre","Angola":"Angola","Anguilla":"Anguilla","Antarctica":"Antarctique","Antigua and Barbuda":"Antigua-et-Barbuda","Application:":"Application:","Apply to Other Users:":"Appliquer aux autres utilisateurs:","Are you sure you want to cancel this invitation?":"Annuler cette invitation?","Argentina":"Argentine","Arkansas":"Arkansas","Armed Forces Americas":"Forces armées Amériques","Armed Forces EMEAC":"Forces armées EMEAC","Armed Forces Pacific":"Forces armées Pacifique","Armenia":"Arménie","Aruba":"Aruba","Attachments:":"Pièces jointes:","Australia":"Australie","Austria":"Autriche","Auto Change Password":"Changer le mot de passe automatiquement","Auto Fill":"Remplir automatiquement","AutoLogin":"Connexion automatique","Automatically logoff devices when logging in from a different device":"Se déconnecter des autres appareils lors de la connexion depuis un appareil différent","Azerbaijan":"Azerbaïdjan","Bahamas":"Bahamas","Bahrain":"Bahreïn","Bangladesh":"Bangladesh","Barbados":"La Barbade","Before you can share, we need to verify your email.":"Pour terminer ce que vous avez démarré, faites vérifier votre adresse e-mail.","Belarus":"Biélorussie","Belgium":"Belgique","Belize":"Belize","Benin":"Bénin","Bermuda":"Les Bermudes","Bhutan":"Bhoutan","Birthday":"Date de naissance","Bolivia":"Bolivie","Bookmarklets":"Bookmarklets","Bosnia and Herzegovina":"Bosnie-Herzégovine","Botswana":"Botswana","Bouvet Island":"Île Bouvet","Brazil":"Brésil","British Columbia":"Colombie-Britannique","British Indian Ocean Territory":"Territoire britannique de l'océan Indien","Brunei Darussalam":"Brunei Darussalam","Bulgaria":"Bulgarie","Burkina Faso":"Burkina Faso","Burundi":"Burundi","By sharing this folder with other LastPass users, they will have access to all sites, passwords, and secure notes in this folder. This Shared Folder will appear in their vault after you assign it.":"Chaque destinataire de ce dossier partagé obtient l'accès à tout ce qu'il contient, notamment sites, mots de passe et notes sécurisées. Une fois partagé, il apparaît dans leur coffre-fort.","California":"Californie","Cambodia":"Cambodge","Cameroon":"Cameroun","Canada":"Canada","Canary Islands":"Îles Canaries","Cancel Invitation":"Annuler l'invitation","Cape Verde":"Cap Vert","Cayman Islands":"Îles Caïman","Central African Republic":"République centrafricaine","Central Time (US and Canada), Guadalajara, Mexico City":"Heure centrale (États-Unis et Canada), Guadalajara, Mexico","Chad":"Tchad","Change":"Modifier","Changes you have made have not been saved. Are you sure you want to close?":"Continuer et perdre les modifications non enregistrées?","Chile":"Chili","China":"Chine","Chinese (Simplified)":"Chinois (simplifié)","Chinese (Traditional)":"Chinois (traditionnel)","Christmas Island":"Île Christmas","Clear Search":"Effacer la recherche","Click Here to Save Your First Note!":"Cliquez ici pour enregistrer votre première note!","Click Here to Save Your First Profile!":"Cliquez ici pour enregistrer votre premier profil!","Click Here to Save Your First Site!":"Cliquez ici pour enregistrer votre premier site!","Click Here to Share Your First Item!":"Cliquez ici pour partager votre premier élément!","Clone":"Cloner","Cocos (Keeling) Islands":"Îles Cocos","Collapse":"Réduire","Collapse Menu":"Réduire le menu","Colombia":"Colombie","Colorado":"Colorado","Comoros":"Comores","Congo":"Congo","Congo, the Democratic Republic of The":"Congo, République démocratique du","Connecticut":"Connecticut","Contact":"Contact","Control characters found in selected filename, will not process it":"Nous ne pouvons pas traiter ce fichier du fait de caractères de contrôle/non imprimables dans son nom","Cook Islands":"Îles Cook","Copy Note":"Copier la note","Copy Password":"Copier le mot de passe","Copy TOTP":"Copier le TOTP","Copy URL":"Copier l’URL","Copy Username":"Copier le nom d’utilisateur","Cost":"Coût","Costa Rica":"Costa Rica","Cote D'ivoire":"Côte d’Ivoire","County":"Comté","Create":"Créer","Create Account":"Créer un compte","Create Credit Monitoring Profile":"Créer un profil de surveillance de crédit","Create and manage folders of shared logins and notes.":"Créer et gérer des dossiers contenant des sites partagés et des notes.","Credit Monitoring Profiles":"Profils de surveillance de crédit","Croatia":"Croatie","Cuba":"Cuba","Custom Fields":"Champs personnalisés","Cyprus":"Chypre","Czech Republic":"République tchèque","Danish":"Danois","Date Enabled":"Date d'activation","Date Received":"Date de réception","Declined":"Refusé","Delaware":"Delaware","Democratic People's Republic Of Korea":"République populaire démocratique de Corée","Device Manager":"Responsable des appareils","Disable AutoFill":"Désactiver le remplissage automatique","Disable Password Alerts":"Désactiver les alertes de mot de passe","Disallow logins from Tor networks":"Interdire l'accès depuis le réseau Tor","District of Columbia":"Washington","Djibouti":"Djibouti","Do not re-prompt for":"Ne pas redemander pendant","Do you really want to quit?  You cannot use LastPass without creating an account.":"Voulez-vous vraiment quitter? Vous ne pouvez pas utiliser LastPass sans un compte.","Do you want to continue?":"Voulez-vous continuer?","Domain Manager":"Responsable de domaine","Dominica":"Dominique","Dominican Republic":"République Dominicaine","Dr":"Dr","Drag and drop the sites, secure notes, and form fill profiles from the available column into the selected column to allow access for your new identity.":"Faites glisser des sites, des notes sécurisées et des remplissages de formulaires depuis la colonne Disponible vers la colonne Sélectionné pour permettre à l'accès à votre nouvelle identité.","Drag sites from the Available Items list into the Unavailable Items list to prevent access from this user.":"Pour éviter l'accès, faites glisser un site depuis la liste Éléments disponibles vers Éléments non disponibles.","Dutch":"Néerlandais","ERROR":"ERREUR","ERROR:":"ERREUR:","Eastern Time (US and Canada)":"Heure standard de l’Est (États-Unis et Canada)","Ecuador":"Équateur","Edit Access":"Modifier l’accès","Edit Form Fields":"Modifier les champs de formulaire","Edit Note":"Modifier une note","Edit Site":"Modifier un site","Egypt":"Égypte","El Salvador":"El Salvador","Email Address:":"Adresse e-mail:","Email and Notifications":"E-mail et notifications","Emergency Access":"Accès d’urgence","Emergency Access Recipient":"Contact d'accès d'urgence","Enable":"Activer","Enable Free Credit Monitoring":"Activer la surveillance de crédit gratuite","English":"Anglais","English (United Kingdom)":"Anglais (Royaume-Uni)","Enjoy convenient access to sites, notes, profiles and tools from a simplified menu.":"Profitez d'un accès pratique à des sites, notes, profils et outils depuis un menu simplifié.","Enterprise User":"Utilisateur Enterprise","Equatorial Guinea":"Guinée équatoriale","Eritrea":"Érythrée","Estonia":"Estonie","Ethiopia":"Éthiopie","Evening Number":"Numéro en soirée","Existing Shares:":"Partages existants:","Expand and collapse your folders, and sort by folder, site, or most-recently used.":"Développez et réduisez vos dossiers, triez par dossier, site ou dernière utilisation.","Export":"Exporter","FAQ":"FAQ","Falkland Islands (Malvinas)":"Îles Falkland (Malouines)","Faroe Islands":"Îles Féroé","Favorites":"Favoris","Fax Number":"Numéro de fax","Federated States Of Micronesia":"Micronésie, États fédérés de","Federated States of Micronesia":"Micronésie, États fédérés de","Female":"Femme","Field":"Champ","Fields:":"Champs:","Fiji":"Fidji","Fill":"Remplir","Fill every form":"Remplir tous les formulaires","Finland":"Finlande","Finnish":"Finnois","First Name":"Prénom","Florida":"Floride","Folder (a-z)":"Dossier (a-z)","Folder (z-a)":"Dossier (z-a)","Folder Name:":"Nom du dossier:","Folder must be downloaded in order to edit a member's access. Would you like to download now?":"Pour modifier l'accès d'un membre, téléchargez le dossier. Télécharger maintenant?","For a seamless login experience, you can set up and link a personal LastPass account. Personal = Private. Your Enterprise Admin":"Associez votre compte LastPass personnel/privé à votre compte de travail/Enterprise. L'association facilite l'accès aux sites depuis les deux comptes avec un même identifiant. Votre administrateur Enterprise ne voit jamais quoi que ce soit dans votre compte privé, et vous pourrez emporter vos données privées avec vous si vous quittez l'entreprise.","Form Fill":"Remplissage de formulaires","Form Fill Profiles:":"Profils de remplissage de formulaire:","France":"France","Free User":"Utilisateur Free","Free trials for Premium and Enterprise":"Essais gratuits des versions Premium et Enterprise","Free, daily credit monitoring. Get notified of events and protect yourself from identity theft, with no impact on your credit score.":"Surveillance de crédit gratuite et quotidienne. Soyez averti des événements pour vous protéger contre les vols d'identité, sans conséquence sur votre score de crédit.","French":"Français","French (Canada)":"Français (Canada)","French Guiana":"Guyane française","French Polynesia":"Polynésie française","French Southern Territories":"Terres australes françaises","Full-Service Resolution:":"Prestation complète de résolution:","Gabon":"Gabon","Gambia":"Gambie","Gender":"Sexe","General security notifications":"Notifications générales de sécurité","Generate":"Générer","Georgia":"Géorgie","German":"Allemand","Germany":"Allemagne","Ghana":"Ghana","Gibraltar":"Gibraltar","Give Emergency Access":"Autoriser l'accès d'urgence","Give trusted family or friends access to your vault in case of an emergency. You choose when they can access.":"Donnez à quelqu'un de confiance l'accès à votre coffre-fort. Vous pouvez choisir quand il y aura accès.","Go to URL":"Aller à l'URL","Greece":"Grèce","Greenland":"Groenland","Grenada":"Grenade","Grid View":"Vue grille","Grid or List - You Choose!":"Grille ou liste - à votre choix!","Guadeloupe":"Guadeloupe","Guam":"Guam","Guatemala":"Guatemala","Guernsey":"Guernesey","Guinea":"Guinée","Guinea-Bissau":"Guinée-Bissau","Guyana":"Guyane","Haiti":"Haïti","Heard Island and Mcdonald Islands":"Haïti","Help Center":"Centre d’aide","Help Improve LastPass":"Aider à améliorer LastPass","Honduras":"Honduras","Hong Kong":"Hong Kong","Hungarian":"Hongrois","Hungary":"Hongrie","I want to receive the following emails from LastPass (check all that apply):":"Je souhaite recevoir les e-mails suivants de la part de LastPass (cochez toutes les cases applicables):","Iceland":"Islande","Idaho":"Idaho","Identity Dashboard:":"Tableau de bord d'identité:","If you don't have a personal account, create one now.":"Si vous n'avez pas de compte personnel, créez-en un maintenant.","Illinois":"Illinois","Immediately":"Immédiatement","Import":"Importer","In case something happens to you, give someone you trust access to some or all of your vault. Or, use it as an emergency recovery feature if you forget your master password. When your trusted contact requests emergency access, you can decline their request within the specified waiting period. After that period, they can access the information you assigned to them.":"Donner à une personne de confiance l'accès à tout ou partie de votre coffre-fort. Lorsque votre contact de confiance demande un Accès d’urgence, vous pouvez refuser sa demande durant le délai d’attente spécifié. Sinon, les données que vous lui avez attribuées sont ajoutées à son compte LastPass.","In the future, any changes to the entries in the Shared Folder, as well as any new sites or notes added to the folder, will be automatically synced to all users who have access to the Shared Folder.":"Toutes les modifications du dossier partagé seront synchronisées avec chaque personne qui y a accès.","In the vault, drag-and-drop Sites or Secure Notes to add them to the Shared Folder. You can convert an existing folder to a Shared Folder at any time, or edit any item to assign it to a Shared Folder.":"Pour ajouter des sites ou des notes sécurisées au dossier partagé, passez à votre coffre-fort et glissez-déposez. Vous pouvez convertir un dossier existant en dossier partagé à tout moment, ou modifier un élément pour l'attribuer à un dossier partagé.","Inactive account reminders":"Rappels de comptes inactifs","India":"Islande","Indiana":"Indiana","Indonesia":"Indonésie","Install Binary Component":"Installer le composant binaire","Instantly add a new site, secure note, form fill profile, or folder at any time.":"Ajoutez instantanément un nouvel élément: site, note sécurisée, profil de remplissage de formulaire ou dossier à tout moment.","Invitation sent.":"Invitation envoyée.","Invite":"Inviter","Invite Accepted":"Invitation acceptée","Invite Users or Groups:":"Inviter des utilisateurs ou des groupes:","Iowa":"Iowa","Iran (Islamic Republic Of)":"Iran (République islamique)","Iraq":"Irak","Ireland":"Irlande","Isle of Man":"Île de Man","Israel":"Israël","Issue Number":"Numéro d’émission","It looks like you've entered an invalid or incomplete email address. Please try again.":"Il semble que vous avez saisi une adresse e-mail non valable ou incomplète. Recommencez.","Italian":"Italien","Italy":"Israël","Items to Share:":"Éléments à partager:","Jamaica":"Jamaïque","Japan":"Japon","Japanese":"Japonais","Jersey":"Jersey","Jordan":"Jordanie","Kansas":"Kansas","Kazakhstan":"Kazakhstan","Keep an Eye on Your Credit Report":"Garder un œil sur votre rapport de solvabilité","Keep track of login and form fill history":"Garder une trace de l'historique de connexion et du remplissage de formulaires","Kentucky":"Kentucky","Kenya":"Kenya","Kiribati":"Kiribati","Korea, Democratic People's Republic Of":"Corée, République populaire démocratique de","Korea, Republic Of":"Corée, République populaire démocratique de","Korean":"Coréen","Kuwait":"Koweït","Kyrgyzstan":"Koweït","Label / Random Identifier":"Étiquette ou identificateur aléatoire","Language:":"Langue:","Lao People's Democratic Republic":"Laos, République démocratique populaire","Last Name":"Nom","Last used":"Dernière utilisation","LastPass Enterprise Administrator: Company Name":"Administrateur de LastPass Enterprise: Nom de société","LastPass Enterprise for Teams":"LastPass pour les équipes","LastPass Enterprise solves the password problem for teams big and small, combining password vaulting and cloud SSO. Centralized, cost-effective, and secure. Join over 14,000 businesses improving employee productivity and security.":"LastPass Enterprise résout le problème des mots de passe pour les équipes grandes et petites, en associant la mise en coffre-fort de mots de passe et la connexion unique SSO dans le nuage. Centralisé, rentable et sécurisé. Rejoignez plus de 14 000 entreprises qui améliorent la productivité et la sécurité de leurs salariés.","LastPass Enterprise upgrade and renewal":"Mise à niveau et renouvellement de LastPass Enterprise","LastPass Premium upgrade and renewal":"Mise à niveau et renouvellement de LastPass Premium","LastPass Sentry breach alerts":"Alertes de violation de LastPass Sentry","LastPass detected a password change for":"LastPass a détecté un changement de mot de passe pour","LastPass newsletters, tips, and stories":"Actualités, conseils et cas d'école LastPass","LastPass promotions and giveaways":"Promotions et offres LastPass","Latvia":"Lettonie","Launch":"Lancer","Learn More.":"En savoir plus.","Lebanon":"Liban","Lesotho":"Lesotho","Liberia":"Liberia","Libyan Arab Jamahiriya":"Liberia","Liechtenstein":"Liechtenstein","Link Account":"Associer un compte","Link Personal Account":"Associer un compte personnel","List View":"Vue liste","Lithuania":"Lituanie","Log into a Site":"Se connecter à un site","Louisiana":"Louisiane","Luxembourg":"Lituanie","Macao":"Macao","Macedonia, the Former Yugoslav Republic Of":"Macédoine du Nord, République de","Madagascar":"Madagascar","Maine":"Maine","Malawi":"Malawi","Malaysia":"Malaisie","Maldives":"Maldives","Male":"et","Mali":"Mali","Malta":"Malte","Manage":"Gérer","Manage Deleted Items":"Gérer des éléments supprimés","Manage Folder":"Gérer le dossier","Manage Identities":"Gérer les identités","Manage Shared Folder":"Gérer le dossier partagé","Manage Shared Folders":"Gérer les dossiers partagés","Manitoba":"Manitoba","Marshall Islands":"Îles Marshall","Martinique":"Martinique","Maryland":"Maryland","Massachusetts":"Massachusetts","Master Password or email address changed":"Mot de passe maître ou adresse e-mail changé","Master Password:":"Mot de passe maître:","Mauritania":"Mauritanie","Mauritius":"Maurice","Maximize":"Agrandir","Mayotte":"Mayotte","Meet the Sharing Center":"Découvrez le Centre de partage","Membership Name":"Nom d'adhésion","Message:":"Message:","Mexico":"Mexique","Michigan":"Michigan","Micronesia, Federated States Of":"Micronésie, États fédérés de","Middle Name":"2e prénom","Minimize":"Réduire","Minnesota":"Minnesota","Mississippi":"Mississippi","Missouri":"Missouri","Mobile Number":"Numéro de mobile","Moldova, Republic Of":"Moldavie, République de","Monaco":"Monaco","Mongolia":"Mongolie","Montana":"Montana","Montenegro":"Monténégro","Montserrat":"Montserrat","More Options":"Plus d’options","Morocco":"Maroc","Most Recent":"Les plus récents","Mountain Time (US and Canada)":"Heure des Rocheuses (États-Unis et Canada)","Mozambique":"Mozambique","Mr":"M.","Mrs":"Mme [Mrs]","Ms":"Mme [Ms]","Multifactor Authentication - Enterprise":"Authentification multifacteur - Enterprise","Multifactor Authentication - Free":"Authentification multifacteur - Free","Multifactor Authentication - Premium":"Authentification multifacteur - Premium","Multifactor Option":"Option multifacteur","Myanmar":"Myanmar","Name (a-z)":"Nom (a-z)","Name (z-a)":"Nom (z-a)","Namibia":"Namibie","Nauru":"Nauru","Nebraska":"Nebraska","Nepal":"Népal","Netherlands":"Pays-Bas","Netherlands Antilles":"Antilles néerlandaises","Nevada":"Nevada","New Brunswick":"Nouveau-Brunswick","New Caledonia":"Nouvelle-Calédonie","New Hampshire":"New Hampshire","New Jersey":"New Jersey","New York":"New York","New Zealand":"Nouvelle-Zélande","News":"Actualités","Nicaragua":"Nicaragua","Niger":"Niger","Nigeria":"Nigeria","Niue":"Niué","No Email":"Pas d'adresse e-mail","No deleted items were found.":"Aucun élément supprimé trouvé.","No history available":"Pas d'historique disponible","Norfolk Island":"Île Norfolk","North Carolina":"Caroline du Nord","North Dakota":"Dakota du Nord","Northern Mariana Islands":"Îles Mariannes du Nord","Northwest Territories":"Territoires du Nord-Ouest","Norway":"Norvège","Norwegian":"Norvégien","Note History":"Historique de note","Note Type:":"Type de note:","Nova Scotia":"Nouvelle-Écosse","Nunavut":"Nunavut","Ohio":"Ohio","Oklahoma":"Oklahoma","Oman":"Oman","Once the binary component is installed please click below to enable it.":"Une fois le composant binaire installé, cliquez ci-dessous pour l'activer.","Once you link the accounts, your personal account will appear as a sub-folder in your Enterprise vault. You can save all personal logins directly into your personal folder, or drag them in later!":"Une fois associé, votre compte personnel apparaît dans un sous-dossier dans votre coffre-fort Enterprise. Vous pouvez enregistrer des sites directement dans votre dossier personnel, ou les faire glisser là ultérieurement.","One Time Passwords":"Mots de passe à usage unique","One convenient place to manage the sites, notes, and folders you share with others.":"Un lieu pratique pour gérer les sites, notes et dossiers que vous partagez avec d'autres.","Only send me critical security alerts":"Ne m'envoyer que des alertes de sécurité","Ontario":"Ontario","Open":"Ouvrir","Open All Favorites":"Ouvrir tous les favoris","Open All Sites":"Ouvrir tous les sites","Order #":"N° de commande","Oregon":"Oregon","Pacific Time (US and Canada)":"Heure du pacifique (États-Unis et Canada)","Pakistan":"Pakistan","Palau":"Palaos","Palestinian Territories":"Palestine, territoires","Panama":"Panama","Papua New Guinea":"Papouasie-Nouvelle-Guinée","Paraguay":"Paraguay","Password Alerts":"Alertes de mot de passe","Password Management for Business":"Gestion de mots de passe pour entreprise","Pending Items":"Éléments en attente","Pending Share":"Partage en attente","Pennsylvania":"Pennsylvanie","People I Trust":"Personnes de confiance","People Who Trust Me":"Personnes qui me font confiance","Permissions:":"Autorisations:","Personal Account Email:":"Adresse e-mail du compte personnel:","Personal Account Master Password:":"Mot de passe maître du compte personnel:","Peru":"Pérou","Philippines":"Philippines","Pitcairn":"Pitcairn","Please add items to this folder before editing a member's access.":"Pour pouvoir modifier l'accès d'un membre, ajoutez des éléments au dossier.","Please enter all fields":"Veuillez saisir tous les champs","Please select from an existing Form Fill Profile or create a new profile.":"Choisissez un remplissage de formulaire existant ou créez un nouveau profil.","Please select which sites you wish to apply this change.":"Sélectionnez les sites auxquels cette modification s'applique.","Please visit https://lastpass.com to create an account at a later time.":"Consultez https://lastpass.com pour créer un compte quand vous serez prêt.","Poland":"Pologne","Polish":"Polonais","Portugal":"Portugal","Portuguese":"Portugais","Portuguese (Brazilian)":"Portugais (Brésil)","Premium User":"Utilisateur Premium","Prince Edward Island":"Île-du-Prince-Édouard","Profile ID":"ID de profil","Provides two factor and token-less authentication.":"Assure une authentification à deux facteurs sans clé matérielle.","Puerto Rico":"Porto Rico","Qatar":"Qatar","Quebec":"Québec","Quickly search your vault. Open your profile menu to manage your account.":"Recherchez rapidement dans votre coffre-fort. Ouvrez votre profil pour gérer votre compte.","RSA SecurID":"RSA SecurID","Rather than specifying Unavailable Items, assign only Available Items. In this mode, newly added sites will automatically be added to the Unavailable Items list.":"Ajouter les disponibles seulement (toujours ajouter les nouveaux éléments comme non disponibles)","Re-Prompt for Master Password":"Redemander le mot de passe maître","Re-prompt for your LastPass master password before you:":"Redemander votre mot de passe maître LastPass:","Received empty response from server.":"Notre serveur a renvoyé un réponse vide.","Recipient (a-z)":"Destinataire (a-z)","Recipient (z-a)":"Destinataire (z-a)","Recipient Email Addresses:":"Adresses e-mail de destinataires:","Refer a Friend invitations":"Parrainer un ami pour des invitations","Refer a Friend, Earn Premium":"Parrainer un ami, gagner un abonnement Premium","Regular Monitoring:":"Surveillance régulière:","Remember every password":"Mémoriser tous les mots de passe","Remove Duplicates":"Supprimer les doublons","Remove Linked Personal Account":"Retirer le compte personnel associé","Remove Site from Favorites":"Retirer le site des favoris","Remove from Selected":"Retirer des sélectionnés","Rename":"Renommer","Reprompt":"Redemander","Republic Of Korea":"République de Corée","Republic Of Moldova":"République de Moldavie","Request Access":"Demander l’accès","Resend Invitation":"Renvoyer l’invitation","Restore":"Restaurer","Reunion":"Réunion","Revert Password Change":"Rétablir le changement du mot de passe maître","Review any passwords and notes others shared with you.":"Consultez les mots de passe et les notes que d'autres ont partagés avec vous.","Revoke Access":"Révoquer l'accès","Revoked":"Révoqué","Rhode Island":"Rhode Island","Romania":"Roumanie","Russian":"Russe","Russian Federation":"Russie","Rwanda":"Rwanda","SUCCESS":"Réussite","SUCCESS:":"Réussite!","Saint Barthelemy":"Saint-Barthélemy","Saint Helena":"Sainte-Hélène","Saint Kitts and Nevis":"Saint-Christophe-et-Nevis","Saint Lucia":"Sainte-Lucie","Saint Martin (French Part)":"Saint-Martin (Antilles françaises)","Saint Pierre and Miquelon":"Saint-Pierre-et-Miquelon","Saint Vincent and the Grenadines":"Saint-Vincent-et-les-Grenadines","Samoa":"Samoa","San Marino":"Saint-Marin","Sao Tome and Principe":"Sao Tomé-et-Principe","Saskatchewan":"Saskatchewan","Saudi Arabia":"Arabie Saoudite","Save and fill passwords for any website or app. Search them all from your vault.":"Enregistrer et saisir les mots de passe pour tout site ou toute app. Les rechercher tous dans votre coffre-fort.","Search Available":"Rechercher dans les disponibles","Search Members":"Rechercher des membres","Search Selected":"Rechercher dans la sélection","Securely send passwords and notes to friends and family.":"Envoyez des mots de passe et des notes en toute sécurité à des amis et à la famille.","Security Challenge":"Challenge de sécurité","Security Settings":"Paramètres de sécurité","Send Invite":"Envoyer l’invitation","Send Verification Email":"Envoyer l’e-mail de vérification","Send anonymous error reporting data to help improve LastPass":"Envoyer des rapports d’erreurs de façon anonyme pour aider à améliorer LastPass","Sender (a-z)":"Expéditeur (a-z)","Sender (z-a)":"Expéditeur (z-a)","Senegal":"Arabie Saoudite","Serbia":"Serbie","Setup Emergency Access":"Configurer l'Accès d'urgence","Seychelles":"Seychelles","Share Folder":"Partager un dossier","Share Item":"Partager un élément","Shared Folder":"Dossier partagé","Shared Folder:":"Dossier partagé:","Shared by":"Partagé par","Shared password notifications":"Notifications de mots de passe partagés","Shared with":"Partagé avec","Shared with Me":"Partagé avec moi","Shared with Others":"Partagé avec les autres","Shared with You":"Partagé avec vous","Sharing Center":"Centre de partage","Show":"Afficher","Show Password History":"Afficher l'historique de mot de passe","Show Username History":"Afficher l'historique de nom d'utilisateur","Sierra Leone":"Sierra Leone","Singapore":"Singapour","Skip Tour":"Ignorer la visite","Skip email verification of unknown devices and locations":"Ne pas exiger de vérification par e-mail depuis des appareils et emplacements inconnus","Slovak":"Slovaque","Slovakia":"Slovaquie","Slovenia":"Slovénie","Social Security Number":"Numéro de sécurité sociale","Solomon Islands":"Îles Salomon","Somalia":"Somalie","Sorry, you cannot perform this operation on a mix of shared and non-shared folders, or multiple shared folders at once.":"Sélectionnez des dossiers partagés ou non partagés, mais pas les deux à la fois, et recommencez.","Sorry, your password can not be the same as your email address.":"Désolé, vous ne pouvez pas utiliser votre adresse e-mail comme mot de passe.","Sorry, your password is too short. It must be a minimum of 8 characters long for security reasons.":"Désolé, trop court. Utilisez au moins 8 caractères.","Sort By:":"Trier par:","South Africa":"Afrique du Sud","South Carolina":"Caroline du Sud","South Dakota":"Dakota du Sud","South Georgia and the South Sandwich Islands":"Géorgie du Sud-et-les Îles Sandwich du Sud","Spain":"Espagne","Spanish":"Espagnol","Spanish (Mexico)":"Espagnol (Mexique)","Sri Lanka":"Sri Lanka","Start Downloading Folder":"Démarrer le téléchargement du dossier","State / Province":"État/province","Stop Downloading Folder":"Arrêter le téléchargement du dossier","Store every note":"Stocker toutes les notes","Sudan":"Sri Lanka","Summary":"Récapitulatif","Suriname":"Surinam","Suspicious characters found in selected filename, will not process it":"Nous ne pouvons pas traiter ce fichier du fait de caractères non reconnus dans son nom","Svalbard and Jan Mayen":"Svalbard et Jan Mayen","Swaziland":"Swaziland","Swedish":"Suédois","Switzerland":"Suisse","Syrian Arab Republic":"Syrie, République arabe","Taiwan":"Taïwan","Tajikistan":"Tadjikistan","Tanzania, United Republic Of":"Tadjikistan","Tennessee":"Tennessee","Texas":"Texas","Text to Find":"Texte à trouver","Thailand":"Thaïlande","The Democratic Republic of The Congo":"République démocratique du Congo","The Former Yugoslav Republic Of Macedonia":"Macédoine du Nord, République de","Security Dashboard":"Tableau de bord de sécurité","The new LastPass 4.0 vault is bold, fast, and easy to navigate. As you familiarize yourself with the new interface, you can switch back to the old version as you wish.":"Le nouveau coffret-fort LastPass 4.0 est fier, rapide et facile à utiliser. Pendant que vous découvrez la nouvelle interface, n'hésitez pas à revenir à l'ancienne version.","There are two ways to view your vault. Use the icons on the top right to toggle between them.":"Il y a deux façons de consulter votre coffre-fort. Utilisez les icônes en haut à droite pour basculer de l'une à l'autre.","This feature requires the binary version of this browser extension. Would you like to install it now?":"Pour utiliser cette fonction, installez la version binaire de l'extension de navigateur LastPass. L'installer maintenant?","This is the language displayed by the LastPass.com website.":"C'est la langue affichée par le site web LastPass.com.","Time Zone":"Fuseau horaire","Timor-Leste":"Timor oriental","Title":"Titre","To prevent access to all mobile devices except those checked above, click below.":"Pour n'autoriser l'accès qu'aux appareils mobiles répertoriés, cliquez ci-dessous.","To switch between LastPass 3.0 and 4.0, simply move the toggle in the vault under your profile dropdown menu. Note that we will be phasing out the old vault completely in the future, and will update you with the final date when we do.":"Pour basculer entre LastPass 3.0 et LastPass 4.0, déplacez la bascule dans le coffre-fort en dessous du menu déroulant de profil. Nous abandonnerons complètement l'ancien coffre-fort à un moment donné. Nous vous tiendrons au courant.","Toggle LastPass 3.0":"Basculer LastPass 3.0","Togo":"Timor oriental","Tokelau":"Tokélaou","Tonga":"Tonga","Track History":"Suivre l'historique","Trinidad and Tobago":"Trinité-et-Tobago","Try Free for 14 Days":"Essayer gratuitement pendant 14 jours","Tunisia":"Tunisie","Turkmenistan":"Turkménistan","Turks and Caicos Islands":"Îles Turques-et-Caïques","Tuvalu":"Tuvalu","Type:":"Type:","Uganda":"Ouganda","Ukraine":"Ukraine","Unavailable Items":"Éléments non disponibles","United Arab Emirates":"Émirats Arabes Unis","United Kingdom":"Royaume-Uni","United Republic Of Tanzania":"République unie de Tanzanie","United States":"États-Unis","United States Minor Outlying Islands":"Îles mineures éloignées des États-Unis","Unlink":"Dissocier","Unlink Personal Account":"Dissocier le compte personnel","Upgrade to Premium Credit Monitoring":"Mettez à niveau pour la surveillance de crédit Premium","Uruguay":"Uruguay","Use Password":"Utiliser le mot de passe","User Group":"Groupe d'utilisateurs","Utah":"Utah","Uzbekistan":"Ouzbékistan","Value to Fill":"Valeur à remplir","Vanuatu":"Vanuatu","Vault Tour":"Visite guidée du Coffre-fort","Venezuela":"Venezuela","Vermont":"Vermont","Victim of identity theft? Our team of experts investigate and help restore your records":"Victime d'un vol d'identité? Notre équipe peut enquêter et vous aider à restaurer vos données.","Viet Nam":"Vietnam","View Deleted Shared Folders":"Afficher les dossiers partagés supprimés","View passwords and notes that you have deleted from your vault. You can restore an item to your vault if needed, or permanently wipe deleted items. Items that have been deleted for 30 days will be wiped automatically.":"Affichez les mots de passe et les notes que vous avez supprimés de votre coffre-fort. Restaurez ou supprimez définitivement tout élément. Après 30 jours, les éléments sont définitivement supprimés.","View this tutorial at any time from the More menu in the left navigation bar.":"Consultez ce didacticiel à tout moment depuis le menu Plus d'options dans la barre de navigation à gauche.","Virgin Islands":"Îles Vierges","Virgin Islands (British)":"Îles Vierges (britanniques)","Virgin Islands (U.S.)":"Îles Vierges (américaines)","Virginia":"Virginie","Wait Time:":"Temps d'attente:","Waiting period":"Délai d’attente ","Wallis and Futuna":"Wallis-et-Futuna","Washington":"Washington","Website password changed":"Mot de passe de site web modifié","Website username changed":"Nom d'utilisateur de site web modifié","Welcome to LastPass 4.0":"Bienvenue à LastPass 4.0","West Virginia":"Washington","Western Sahara":"Sahara occidental","What is Emergency Access?":"Qu'est-ce que l'accès d'urgence?","What is an Identity?":"Qu'est-ce qu'une identité?","When someone grants you emergency access to their vault, their account will be listed here.":"Toute personne qui vous accorde l'accès d'urgence à son coffre-fort est répertoriée ici.","When your trusted contact requests emergency access to your vault, they will have to wait for the period of time you specify before being allowed access. During that time window, you can decline their request to access your vault.":"Quand votre contact de confiance demande un accès d'urgence, vous pouvez refuser sa demande dans la période d'attente spécifiée.","Wisconsin":"Wisconsin","Would you like to make a copy?":"Voulez-vous faire une copie?","Would you like us to send them an email inviting them to join LastPass?":"Souhaitez-vous que nous lui envoyions un e-mail pour l'inviter à rejoindre LastPass?","Wyoming":"Wisconsin","Yemen":"Yémen","You are about to convert this personal folder into a Shared Folder.":"Vous êtes sur le point de convertir ce dossier personnel en dossier partagé.","You are moving items from a shared folder into your vault. Others may lose access to them.":"Vous déplacez des éléments d’un dossier partagé vers votre coffre-fort. D’autres personnes risquent de ne plus pouvoir y accéder.","You are moving items to a different shared folder. This may change who has access to them.":"En déplaçant des sites vers un dossier partagé différent, vous pouvez modifier les utilisateurs qui peuvent y accéder.","You are moving sites to a shared folder. Others may now have access to them.":"Vous déplacez des sites vers un dossier partagé. D'autres personnes pourraient avoir accès aux sites.","You can only share data with other LastPass members. The following users are currently not LastPass members.":"Pour partager des données avec ces personnes, utilisez leur compte compte LastPass ou demandez-leur de s'inscrire.","You currently have no mobile devices defined.":"Vous n'avez encore défini aucun appareil mobile.","You currently have no trusted devices defined.":"Vous n'avez encore défini aucun appareil de confiance.","You have no alerts at this time.":"Pas d'alertes pour l'instant.","You have not enabled credit monitoring for any profiles.":"Vous n'avez activé la surveillance de crédit pour aucun profil.","You must agree to the Terms and Conditions in order to continue":"Vous devez accepter les Conditions générales pour continuer","You must agree to the terms to continue":"Vous devez accepter les conditions pour continuer","You're All Set!":"Tout est prêt !","Your Master Password and Confirm Master Password entries do not match, please enter them again.":"Erreur de correspondance! Recommencez.","Your Password Reminder can not be the same as your chosen Master Password for security reasons. Please edit your Reminder so that it does not contain your Master Password.":"Votre indice ne peut pas être votre mot de passe maître.","Your Shared Folder action failed. Please check your permissions before trying again":"Vous n'avez peut-être pas l'autorisation pour cela. Vérifiez vos autorisations et recommencez.","Your current settings require you to enter your LastPass password to complete this action.":"Entrez votre mot de passe maître pour continuer, d'après les paramètres de sécurité actuels.","Your new vault is bold, fast, and easy-to- use. All your passwords, in one place.":"Votre nouveau coffre-fort est facile à utiliser et sécurisé. Tous vos mots de passe, au même endroit.","Your password cannot match your hint":"Votre mot de passe maître ne doit pas être identique à votre indice de mot de passe","Your password doesn't match the confirm password field":"Votre mot de passe maître n'est pas identique au champ Confirmer le mot de passe maître","Your password is easily guessable, avoid simple runs of characters, or variations of 'password' or 'lastpass'.":"Essayez quelque chose de plus fort. Évitez les suites de caractères courantes ou les variations sur 'mot de passe' ou 'LastPass'.","Yugoslavia":"Yougoslavie","Yukon":"Yukon","Zambia":"Zambie","Zimbabwe":"Zimbabwe","accepted":"accepté","added":"ajouté","declined":"refusé","delete":"supprimer","goes with you":"vous accompagne","move items from":"déplacer des éléments depuis","move items to":"déplacer des éléments vers","never":"jamais","purged":"et","removed":"supprimé","renamed":"renommé","restored":"restauré","saved":"enregistré","search my deleted items":"rechercher dans mes éléments supprimés","search my identities":"rechercher dans mes identités","search my received shares":"rechercher dans mes partages reçus","search my sent shares":"rechercher dans mes partages envoyés","search my shared folders":"rechercher dans mes dossiers partagés","search my vault":"rechercher dans mon coffre-fort","search people I trust":"rechercher des personnes de confiance","search people who trust me":"rechercher des personnes qui me font confiance","sees what you store in your personal account, and your personal account":"voit ce que vous enregistrez dans votre compte personnel, et votre compte personnel","this folder's items":"les éléments de ce dossier","Create Sub-Folder":"Créer un sous-dossier","Delete Folder":"Supprimer le dossier","Rename Folder":"Renommer le dossier","none":"aucun","Generate Secure Password":"Générer un mot de passe sécurisé","Better protect your identity, monitor your credit scores, and get help from our team of experts in investigating and stopping unauthorized activity. For only 9.95 USD per month you will receive:":"Protégez mieux votre identité, surveillez vos scores de crédit et accédez à l'aide de notre équipe d'experts en matière d'enquête et d'arrêt des activités non autorisées. Pour seulement 9,95 USD par mois, vous recevrez:","No folder":"Aucun dossier","Organize":"Organiser","Open my Vault":"Ouvrir mon coffre-fort","Before you can complete this task, we need to verify your email.":"Pour terminer ce que vous avez démarré, faites vérifier votre adresse e-mail.","Please check your email for the verification message (it may have gone to your spam folder).":"N'oubliez pas que vous devrez peut-être consulter votre dossier d'indésirables ou de spam.","Please click the button below to send a verification email. You will be able to complete this task once you click on the link in the email. It should only take a minute.":"Cela ne devrait prendre qu'une minute.","Please click the button below to send a verification email. You will be able to share your sites with your friends and family once you click on the link in the email. It should only take a minute.":"Vous envoyer à vous-même un e-mail de vérification. Cliquez sur le lien dans l'e-mail pour pouvoir partager avec vos amis et votre famille. Cela ne devrait prendre qu'une minute.","There was an error connecting with the verification service.":"Nous n'avons pas pu nous connecter au service de vérification.","There was an error sending your verification email.":"Nous n'avons pas pu vous envoyer un e-mail de vérification.","Add Items, fill up your Vault.":"Ajoutez des éléments, remplissez votre coffre-fort.","Add personal information and addresses to save time filling out forms.":"Ajoutez des informations personnelles et des adresses pour gagner du temps dans le remplissage de formulaires.","Addresses, everything about you.":"Adresses, tout ce qui vous concerne.","All your passwords, in one safe place.":"Tous vos mots de passe en un même lieu sûr.","And no matter where you work, your vault keeps everything in sync, so you can stay organized and save time.":"Et où que vous soyez pour travailler, votre coffre-fort garde tout synchronisé, pour vous permettre de rester organisé et de gagner du temps.","Bank accounts, secure in your Vault.":"Comptes bancaires, en sécurité dans votre coffre-fort.","Generates one time verification codes on your smart phone. Can also be used with PingID or Okta Verify.":"Génère des codes de vérification à usage unique sur votre téléphone. Peut aussi être utilisé avec PingID ou Okta Verify.","Got it":"Compris","Grant access to your need-to-know networks. Easily add, remove, or manage their access.":"Autoriser l'accès aux personnes qui ont besoin de savoir dans votre réseau. Ajoutez, supprimez ou gérez facilement leur accès.","If you change your mind, you can revisit any time by selecting Help - Vault Tour.":"Si vous changez d'avis, vous pouvez revenir à tout moment en choisissant Aide - Visite guidée du Coffre-fort.","If you ever need a refresher, you can revisit any time by selecting Help - Vault Tour.":"Si vous avez besoin d'un rappel, vous pouvez revenir à tout moment en choisissant Aide - Visite guidée du Coffre-fort.","Keep your notes secure, always.":"Conservez vos notes en sécurité, à tout moment.","LastPass remembers the login information for all of your favorite websites - and helps you create stronger passwords, too. Click any site in your vault to launch it and log in instantly.":"LastPass mémorise les informations de connexion pour tous vos sites web favoris et vous aide à créer des mots de passe plus forts. Cliquez sur un site de votre coffre-fort pour le lancer et vous connecter instantanément.","Later":"Plus tard","No thanks":"Non merci","Not a good time?":"Pas le bon moment?","Payment cards, your digital wallet.":"Cartes de paiement, votre portefeuille numérique.","Psst! Need to share a secret?":"Psst! Vous devez partager un secret?","Save payment information to speed through online checkout.":"Enregistrez les informations de paiement pour accélérer le passage en caisse en ligne.","Save username and passwords to fill on the next visit to your favorite sites.":"Enregistrez vos noms d'utilisateur et mots de passe pour la prochaine fois que vous visiterez vos sites favoris.","Save usernames and passwords for all the websites and apps you visit, so LastPass can remember and fill them for you. You can save as you browse, too!":"Enregistrez les noms d'utilisateur et les mots de passe pour tous les sites web et applis que vous utilisez. LastPass les enregistrera et les remplira pour vous. Vous pouvez aussi les enregistrer pendant la navigation!","Show me around":"Montrez-moi comment","Store account and routing numbers as well as other banking information to streamline online bill pay.":"Simplifiez le paiement de factures en ligne en enregistrant des données bancaires telles que les numéros de compte et le code banque.","Store important memos and notes securely for easy access.":"Stockez des mémos et notes importants en toute sécurité pour faciliter l'accès.","Use this button to add new sites, notes, and profiles, from anywhere in your Vault.":"Utilisez ce bouton pour ajouter de nouveaux sites, notes et profils, de partout dans votre coffre-fort.","Welcome back!":"Ravi de vous revoir!","Welcome to your vault!":"Bienvenue dans votre coffre-fort!","Who needs sticky notes?":"Qui a besoin de post-it?","Your vault is a safe place to store passwords, notes, profiles for online shopping, and even documents.":"Votre coffre-fort est un lieu sûr pour stocker les mots de passe, notes, profils pour achats en ligne, et même documents.","Don't reach for your wallet.":"Ne cherchez pas votre portefeuille.","Keep track of all the odds and ends of your digital life with secure notes. Store memberships, Wi-Fi passwords, credit card numbers, and more. They're always there, when and where you need them.":"Gardez trace de toutes les vicissitudes de votre vie en ligne avec des notes sécurisées. Enregistrez des appartenances, des mots de passe Wi-Fi, des numéros de carte de crédit, etc. Les informations seront toujours là, au moment et où vous en aurez besoin.","Ready to get started? We'll help you set up your vault. It's easy-to-use, searchable, and organized just the way you like.":"Prêt à démarrer? Nous vous aiderons à configurer votre coffre-fort. Il est facile d'utilisation, permet les recherches et est organisé exactement comme vous l'aimez.","There's a lot more to discover, but we hope this tour was a helpful start. You can revisit any time by selecting More options - Help - Vault Tour.":"Il y a beaucoup d'autres choses à découvrir, mais nous espérons que cette visite a été un bon début. Vous pouvez revenir à tout moment en sélectionnant Plus d'options - Aide - Visite guidée du Coffre-fort.","We've got you covered with form fill profiles. Add your payment cards and contact info, so you can checkout in a few clicks, no typing required.":"Nous vous couvrons avec des profils de remplissage de formulaire. Ajoutez vos cartes de paiement et coordonnées de contact pour passer à la caisse en quelques clics, plus rien à taper.","When you need to give friends or family access to one of your accounts, don't send a text or email. Just share through LastPass, so you both can login when and where you need to.":"Pour donner à vos amis ou à votre famille un accès à un de vos comptes, n'envoyez pas de SMS ou d'e-mail. Partagez plutôt par LastPass.","You're ready to get started!":"Vous êtes prêt à démarrer!","Your email or password are not correct. Please try again or click 'Forgot Password' to have your password hint emailed to you.":"Votre adresse e-mail ou votre mot de passe maître ne sont pas corrects. Recommencez ou cliquez sur 'Mot de passe oublié' pour obtenir votre indice de mot de passe par e-mail.","'New Password' and 'Confirm New Password' do not match.":"Le mot de passe n'est pas identique à sa confirmation.","Instant alerts to any changes, with details on what changed and and how to take action.":"Alertes instantanées concernant les modifications, avec les détails des modifications et la façon d'agir.","Premium Trial User":"Utilisateur d'essai Premium","Renew LastPass Enterprise":"Renouveler LastPass Enterprise","Renew LastPass Families":"Renouveler LastPass Families","Renew LastPass Teams":"Renouveler LastPass Teams","Secure":"Sûr","Teams User":"Utilisateur Teams","Two-Factor Authentication":"Authentification multifacteur","Unlimited 1:1 Password Sharing":"Partage de mots de passe 1:1 illimité","Upgrade now to avoid losing LastPass Enterprise features.":"Mettez à niveau maintenant pour éviter de perdre les fonctionnalités de LastPass Enterprise.","Upgrade now to avoid losing LastPass Families features.":"Mettez à niveau maintenant pour éviter de perdre les fonctionnalités de LastPass Families.","Upgrade now to avoid losing LastPass Premium features.":"Mettez à niveau maintenant pour éviter de perdre les fonctionnalités de LastPass Premium.","Upgrade now to avoid losing LastPass Teams features.":"Mettez à niveau maintenant pour éviter de perdre les fonctionnalités de LastPass Teams.","Upgrade to LastPass Enterprise":"Mettre à niveau vers LastPass Enterprise","Upgrade to LastPass Premium":"Mettre à niveau vers LastPass Premium","Upgrade to LastPass Teams":"Mettre à niveau vers LastPass Teams","You are choosing to stop downloading the content of this Shared Folder to your vault. You may always begin downloading the folder content again in the Sharing Center.":"Cesser de télécharger le contenu de ce dossier partagé vers votre coffre-fort. Utilisez le Centre de partage si vous changez d'avis.","!$^@#":"!$^@#","(Accepted Share Offers)":"(Offres de partage acceptées)","(you)":"(vous)",", giving you access to unlimited family sharing, and other easy to use security features. ":", pour vous donner accès à un partage illimité dans la famille, et d'autres fonctions de sécurité faciles à utiliser. ","0_9":"0-9","A field with this name already exists.":"Il y a déjà un champ de ce nom.","A modern safe for today's digital family":"Un coffre-fort moderne pour la famille numérique d'aujourd'hui","A new version of LastPass is here!":"Une nouvelle version de LastPass est disponible!","A_Zupper":"A-Z majuscules","Accept Share":"Accepter le partage","Access":"Accès","Access denied.":"Accès refusé.","Access restrictions updated.":"Restrictions d'accès mises à jour.","Add Custom Template":"Ajouter un modèle personnalisé","Add Folder":"Ajouter un dossier","Add Form Fill":"Ajouter un remplissage de formulaire","Add Item":"Ajouter un élément","Add a bank account":"Ajouter un compte bancaire","Add a password":"Ajouter un mot de passe","Add a payment card":"Ajouter une carte de paiement","Add a secure note":"Ajouter une note sécurisée","Add an address":"Ajouter une adresse","Add new field":"Ajouter un champ","Add shared folder":"Ajouter un dossier partagé","Addresses":"Adresses","Addresses, everything about you":"Adresses, tout ce qui vous concerne","Advanced Options:":"Options avancées:","After download, simply login to your account again and use LastPass in Safari as you always have.":"Après le téléchargement, connectez-vous à votre compte et utilisez LastPass dans Safari comme auparavant.","All Items":"Tous les éléments","All characters":"Tous les caractères","Allow All Character Types":"Autoriser tous les types de caractères","Always Choose Profile and Credit Card":"Toujours choisir un profil et une carte de crédit","An Identity helps you organize your vault into convenient 'subvaults'. Group your Sites, Secure Notes, and Form Fills based on what you need in specific situations, such as 'Home' and 'Work'. When you switch Identities, you'll only see and fill the items you added to your current identity.":"Organisez votre coffre-fort en 'sous-coffres' pratiques grâce aux identités. Les identités courantes sont 'Travail' et 'Domicile'. Vous ne pouvez voir et remplir des éléments que dans l'identité active.","An individual share cannot be saved to a Shared Folder or Personal Linked Account.":"Vous ne pouvez pas enregistrer un élément partagé avec vous individuellement dans un dossier partagé ou un compte personnel associé.","Any character combination like !, 7, h, K, and Il":"Toute combinaison de caractères comme !, 7, h, K et Il","Any item that is currently shared with another user cannot be moved into a shared folder.":"Tout élément déjà partagé avec un autre utilisateur ne peut plus être déplacé vers un dossier partagé.","Any notes you created using this template will not be deleted.":"Les notes créées avec ce modèle ne sont pas supprimées.","Are you sure you want do delete? Any notes you created using this template will not be deleted.":"Supprimer cet éléments? Les notes créées avec ce modèle ne sont pas supprimées.","Attachment must be saved before it can be viewed.":"Enregistrez la pièce jointe pour la consulter.","Attend Training":"Suivre une formation","Autofill Language:":"Langue du remplissage automatique:","Avoid Ambiguous Characters":"Éviter les caractères ambigus","Avoid ambiguous characters like I, l, O, and 0":"Éviter les caractères ambigus, tels que I, l, O et 0","Avoid numbers and special characters":"Éviter les chiffres et les caractères spéciaux","Bank Accounts":"Comptes bancaires","Bank account":"Compte bancaire","Bank accounts include account information for savings and checking accounts. They can be auto-filled into any form.":"Les comptes bancaires incluent les informations de compte de dépôt et d'épargne. Vous pouvez choisir de les remplir dans n'importe quel formulaire.","Bank accounts include your bank, routing, and account information for savings and checking accounts. They can be auto-filled into any form.":"Les comptes bancaires incluent les informations de banque, de code banque et de compte de dépôt et d'épargne. Vous pouvez choisir de les remplir dans n'importe quel formulaire.","Birthday is required when Enable Free Credit Monitoring is checked.":"La date de naissance est obligatoire quand vous activez la surveillance gratuite de crédit.","Cannot save to folder, restricted by a policy":"Votre organisation interdit l'enregistrement dans un dossier","Cannot share an item with yourself.":"Vous ne pouvez pas partager un élément avec vous-même.","Changes will be lost if you close before saving.":"Les modifications seront perdues si vous fermez avant d'enregistrer.","Changes you have made have not been saved. Are you sure you want to continue?":"Continuer et perdre les modifications non enregistrées?","Choose Form Fill and Credit Card":"Choisir un remplissage de formulaire et une carte de crédit","City / Town is required when Enable Free Credit Monitoring is checked.":"La ville est obligatoire quand vous activez la surveillance de crédit gratuite.","Click the 'Add item' button to start organizing your Vault.":"Cliquez sur 'Ajouter un élément' pour commencer à organiser votre coffre-fort.","Clone Application":"Copier une application","Cloud Apps":"Applis dans le nuage","Confirm Deletion":"Confirmer la suppression","Confirm Request Access":"Confirmation d'accès d'urgence","Congratulations! You've been invited to LastPass Families by":"Félicitations! Vous avez été invité à rejoindre LastPass Families par","Congratulations, you're ready to go!":"Félicitations, tout est prêt!","Conversion Successful":"Conversion réussie","Convert":"Convertir","Convert to Enterprise":"Convertir en Enterprise","Convert to Legacy Shared Folder":"Convertir en dossier partagé hérité","Convert to Shared Folder":"Convertir en dossier partagé","Copied!":"Copié","Copy Account Number":"Copier le numéro de compte","Copy Address 1":"Copier adresse 1","Copy Address 2":"Copier adresse 2","Copy Bank Name":"Copier le nom de la banque","Copy City / Town":"Copier la ville","Copy Email Address":"Copier l'adresse e-mail","Copy Group ID":"Copier l'identifiant de groupe","Copy Hostname":"Copier le nom d'hôte","Copy Key":"Copier la clé","Copy License Key":"Copier la clé de licence","Copy License Number":"Copier le numéro de licence","Copy Member ID":"Copier l'identifiant de membre","Copy Membership Number":"Copier le numéro de membre","Copy Name on Card":"Copier le nom sur la carte","Copy Number":"Copier le numéro","Copy Order Number":"Copier le numéro de commande","Copy Passphrase":"Copier la phrase secrète","Copy Phone Number":"Copier le numéro de téléphone","Copy Policy Number":"Copier le numéro de police","Copy Public Key":"Copier la clé publique","Copy Routing Number":"Copier le code banque","Copy Security Code":"Copier le code de sécurité","Copy ZIP / Postal Code":"Copier le code postal","Could not decrypt attachment key.":"Impossible de déchiffrer la clé de pièce jointe.","Country must be entered for this phone number.":"Entrez un pays pour ce numéro de téléphone.","Create New Profile":"Créer un nouveau profil","Create New Shared Folder":"Créer un dossier partagé","Credit Card:":"Carte bancaire:","Credit cards, addresses, and other info can now be filled on any site - just like your passwords. None of your info is gone, it's just moved.":"Remplissez des formulaires de cartes bancaires, adresses et autres infos sur n'importe quel site, comme vous le faites avec vos mots de passe. Rien n'est perdu, mais certains éléments ont pu être déplacés.","Credit monitoring is only available for addresses in the United States.":"La surveillance de crédit est disponible uniquement pour des adresses aux États-Unis.","Custom Items":"Éléments personnalisés","Custom item":"Élément personnalisé","Databases":"Bases de données","Date generated":"Date de génération","Decline":"Refuser","Decline invitation":"Refuser l’invitation","Declined Offers":"Offres refusées","Deny Access":"Refuser l’accès","Designate a family member to receive access to your LastPass account in case of an emergency.":"Donnez à quelqu'un de confiance l'accès à votre coffre-fort en cas d'urgence.","Discard":"Abandonner","Discard Unsaved Changes?":"Abandonner les modifications non enregistrées?","Download the LastPass browser extension":"Télécharger l'extension de navigateur LastPass","Driver's Licenses":"Permis de conduire","Driver's license":"Permis de conduire","Due to new Apple requirements, you need to download the new LastPass app to continue using LastPass in your Safari browser.":"Téléchargez l'extension LastPass pour continuer à utiliser LastPass dans Safari.","Easy to read":"Facile à lire","Easy to say":"Facile à dire","Edit Access: %s":"Modifier l’accès : %s","Edit Custom Template":"Modifier le modèle personnalisé","Edit Form Fill":"Modifier le remplissage de formulaires","Edit shared folder":"Modifier le dossier partagé","Email Accounts":"Comptes d’e-mail","Email account":"Compte d’e-mail","Email already in use.":"Adresse e-mail déjà utilisée.","Email invited family members":"Envoyer un e-mail aux membres invités","Email:":"Adresse e-mail:","Emergency":"Urgence","Emergency Access should only be requested if there is a valid emergency situation and you need to manage another user's vault.":"Ne demandez l'accès d'urgence qu'en cas de situation légitime qui vous impose de gérer le coffre-fort d'un autre utilisateur.","Emergency access is a feature that is only available for LastPass Premium or LastPass Families users.":"L'accès d'urgence n'est disponible qu'avec LastPass Premium et LastPass Families.","Enable Credit Monitoring":"Activer la surveillance de crédit","Enrolled in credit monitoring.":"Inscrit à la surveillance de crédit.","Enter your master password, one more time!":"Entrez à nouveau votre mot de passe maître!","Error: This folder has already been moved?":"Ce dossier a peut-être été déjà déplacé?","Evening Phone":"Téléphone en soirée","Failed To Share With Some Users":"Échec du partage avec certains utilisateurs","Family member":"Membre de la famille","Fax":"Fax ","Field Name is required.":"Le nom de champ est obligatoire.","Field Name:":"Nom de champ:","Field Preview":"Aperçu du champ","Field Title":"Titre du champ","Field Type is required.":"Le type de champ est obligatoire.","Field Type:":"Type de champ:","Field Value:":"Valeur de champ:","Fill Password":"Remplir le mot de passe","Finish":"Terminer","First Name is required when Enable Free Credit Monitoring is checked.":"Le prénom est obligatoire quand vous activez la surveillance de crédit gratuite.","Folder Name is required.":"Nom de dossier obligatoire.","Folder name cannot contain backslashes.":"Nommez votre dossier sans barres obliques inverses \\.","Forgot your password?":"Mot de passe oublié?","Form Field %s":"Champ de formulaire %s","Form Fills:":"Remplissages de formulaires:","Form Name:":"Nom du formulaire:","Free users are limited to sharing one item with one person only. Upgrade to LastPass Premium to allow one-to-many sharing.":"Pour partager avec plus d'une personne, mettez à niveau vers LastPass Premium.","Generate Password":"Générer un mot de passe","Generate Sharing Key":"Générer une clé de partage","Generated":"Généré","Generated Password for":"Mot de passe généré pour","Generating Sharing Keys":"Génération de clés de partage","Generating sharing keys can take a long time (sometimes several minutes) when done via JavaScript, and your browser may become unresponsive during this process. Our Internet Explorer, Firefox, Safari, and Google Chrome browser extensions automatically perform this step the first time you login, in a much faster manner.  If you have trouble with this method, we recommend using one of those extensions.  If you must use JavaScript to generate your sharing keys, we recommend Google Chrome, as its JavaScript engine is many times faster than any other browser.  Internet Explorer's JavaScript engine is many times slower than other browsers, so it's doubtful that it will work at all. If you experience slow script warnings during this process, be sure to choose to let the script continue to run.":"Pour générer des clés de partage, utilisez l'extension LastPass sur un navigateur moderne. Nous ne recommandons pas JavaScript pour cette procédure parce que cela prend longtemps et peut dégrader les performances de votre navigateur.","Get started":"Pour commencer","Get the most out of LastPass so you can automatically save and fill your passwords, credit cards, addresses, and more.":"Tirez le meilleur parti de LastPass pour pouvoir enregistrer et remplir automatiquement vos mots de passe, cartes de crédit, adresses, etc.","Gift LastPass":"Offrez LastPass en cadeau","Go Premium now to create a Shared Folder, invite family or friends, and fill the folder with passwords and notes. Give up to 5 people access to the Shared Folder. Changes are synced automatically, and you can assign read-only access. Go Premium now to create a Shared Folder!":"Passez à Premium maintenant pour créer un dossier partagé que vous pourrez remplir de mots de passe et de notes à partager avec jusqu'à 5 utilisateurs. Si vous les autorisez à apporter des modifications, vous restez automatiquement synchronisés. Passez à Premium maintenant pour créer un dossier partagé!","Go premium":"Passez à Premium ","Good":"Bonne","HIDE":"MASQUER","Health Insurance Policies":"Polices d’assurance santé","Health insurance":"Assurance maladie","Hide History":"Masquer l'historique","Hide Password":"Masquer le mot de passe","I Agree":"Je suis d'accord","I Do Not Agree":"Je ne suis pas d'accord","I prefer not to receive promotional emails.":"Je préfère ne pas recevoir d’e-mails promotionnels.","If you change your mind, you can revisit this tour by selecting More options - Help - Vault Tour.":"Si vous changez d'avis, vous pouvez reprendre cette visite guidée en choisissant Plus d'options - Aide - Visite guidée du Coffre-fort.","In case of an emergency":"Configurer l'accès d'urgence","In case something unexpected happens, give someone you trust access to your vault. When your trusted contact requests Emergency Access to your vault, you can decline their request within the specified waiting period. After the waiting period passes, your vault will sync to their LastPass account automatically.":"Vous pouvez donner accès à votre coffre-fort à une personne de confiance. Lorsque votre contact de confiance demande un Accès d’urgence, vous pouvez refuser sa demande durant le délai d’attente spécifié. Sinon, votre coffre-fort est ajouté à son compte LastPass.","In order to create a shared folder or for someone else to share a site or secure note with you, you must perform this step once.":"Vous devez le faire une fois pour pouvoir partager ou recevoir un élément partagé.","In the vault, drag-and-drop Sites or Secure Notes to add them to the Legacy Shared Folder, or edit any item to assign it to the Legacy Shared Folder. You can only have one Legacy Shared Folder in your Vault at a time.":"Dans votre coffre-fort, déposez des sites ou des notes sécurisées pour les ajouter au dossier partagé hérité. Vous pouvez avoir un dossier partagé hérité à la fois.","Increased":"Augmenté","Install the LastPass browser extension for simple, quick access right from the LastPass icon in your browser toolbar.":"Installez l'extension de navigateur LastPass pour un accès simple et rapide à la barre d'outils de votre navigateur.","Instant Messenger Accounts":"Comptes de messagerie instantanée","Instant alerts to any changes, with details on what changed and how to take action.":"Alertes instantanées concernant les modifications, avec les détails des modifications et la façon d'agir.","Instant messenger":"Messagerie instantanée","Insurance Policies":"Polices d’assurance","Insurance policy":"Police d’assurance","Invalid":"Non valable","Invalid JSON response.":"Une erreur s'est produite. Si le problème persiste, adressez-vous à l'équipe LastPass (Erreur: Réponse JSON non valable).","Invalid XML response.":"Une erreur s'est produite. Si le problème persiste, adressez-vous à l'équipe LastPass (Erreur: Réponse XML non valable).","Invalid email address.":"Adresse e-mail non valable.","Invite family members":"Inviter des membres de la famille","Invite members to your family, all you need is the email address and name of the person you'd like to invite.":"Pour inviter des gens de votre famille, vous n'avez besoin que de leur adresse e-mail et de leur nom.","It's %0very%0 important that you remember it. For your security, we %1never%1 know or store your master password. We can't send it to you if you forget it. %2Learn more%2.":"Il est %0très%0 important de le mémoriser. Pour votre sécurité, nous ne connaissons ni n'enregistrons %1jamais%1 votre mot de passe maître. Nous ne pouvons pas vous l'envoyer si vous l'oublier. %2En savoir plus%2.","It's time to upgrade!":"C'est le moment de mettre à niveau!","Join the family":"Rejoindre la famille","Last Name is required when Enable Free Credit Monitoring is checked.":"Le nom est obligatoire quand vous activez la surveillance de crédit gratuite.","LastPass is currently generating unique sharing keys required for this action. Please try again later.":"LastPass est occupé à la génération des clés de partage dont il a besoin pour terminer cette action. Cela ne devrait pas être long.","LastPass is updating.":"LastPass est en cours de mise à jour.","LastPass saves and fills passwords for any site, app, or service.":"Utilisez LastPass pour enregistrer et remplir des mots de passe pour n'importe quel site, appli ou service.","Learn more":"En savoir plus","Licenses":"Licences","Linked":"Associé","Lowercase":"Minuscules","Make Pronounceable":"Rendre prononçable","Manage Family":"Gérer la famille","Management":"Gestion","Maybe later":"Peut-être plus tard","Member removed.":"Membre retiré.","Memberships":"Appartenances","Message":"Message","Minimum Numeric Characters":"Caractères numériques au minimum","Mobile Phone":"Téléphone mobile","Month / day / year":"Mois/jour/année","Month / year":"Mois / année","More Items":"Plus d'éléments","NEW":"NOUVEAU","Name is required.":"Le nom est obligatoire.","Need to share passwords with family or friends?":"Besoin de partager des mots de passe avec la famille ou des amis?","New Custom Template":"Nouveau modèle personnalisé","New custom item type":"Nouveau type d'élément personnalisé","No Matching Results":"Aucun résultat correspondant","No Sharing Keys":"Pas de clé de partage","No Sharing Support":"Pas d'assistance au partage","No Thanks":"Non merci","No access":"Aucun accès","No private key. Cannot decrypt Pending Shares.":"Nous n'avons pas pu trouver la clé privée nécessaire pour le déchiffrement des mots de passe partagés.","No thanks, I fly solo":"Non merci, je préfère rester seul","No token was provided. Request could not be completed":"Aucun jeton fourni. Requête non terminée.","No token was provided. Request could not be completed.":"Aucun jeton fourni. Requête non terminée.","Non-Administrator":"Non-administrateur","None available":"Aucun(e) disponible","Not Supported":"Non pris en charge","Not downloaded":"Non téléchargé","Nothing to copy":"Rien à copier","Nothing to see here":"Il n’y a rien à voir ici","Numbers":"Chiffres","Ok":"OK","Okay":"OK","Once they do that this Shared Folder will become accessible to them.":"Une fois terminé, ils auront accès à ce dossier partagé.","One Moment...":"Un instant...","Only the below information will be sent to LastPass.":"Les informations ci-dessous seront envoyées à LastPass.","Open Dashboard":"Ouvrir le tableau de bord","Optional":"Facultatif","Other confidential Form Fill information, such as credit card numbers, will not be sent.":"D'autres informations confidentielles de remplissage de formulaire, telles que numéro de carte de crédit, ne doivent pas être envoyées.","Outside Enterprise":"En dehors de votre compte Enterprise","Passports":"Passeports","Password Copied":"Mot de passe copié","Password Length:":"Longueur du mot de passe:","Password Reminder:":"Indice de mot de passe:","Password length":"Longueur du mot de passe","Passwords":"Mots de passe","Payment Cards":"Cartes de paiement","Payment card":"Carte de paiement","Payment cards include credit cards, debit cards, and anything else you use to shop. They can be auto-filled into any form.":"Les cartes de paiement incluent les cartes de crédit, les cartes de débit, et toute autre chose que vous utilisez pour faire des achats. Vous pouvez les remplir sur n'importe quel formulaire.","Pending Offers":"Offres en attente","Pending share":"Partage en attente","Permissions":"Autorisations","Permissions saved.":"Autorisations enregistrées.","Personal Folder":"Dossier personnel","Personal Shared Folder moved into Enterprise. You can now adminster the folder.":"Dossier partagé personnel déplacé vers Enterprise. Vous pouvez maintenant administrer le dossier.","Phone":"Téléphone","Phone Number is required when Enable Free Credit Monitoring is checked.":"Le numéro de téléphone est obligatoire quand vous activez la surveillance gratuite de crédit.","Please correct the validation errors and then click Save to enable credit monitoring.":"Pour activer la surveillance de crédit, confirmez les informations saisies et recommencez.","Please enter a password...":"Veuillez saisir un mot de passe...","Please enter at least one email and try again.":"Entrez au moins une adresse e-mail.","Please enter your email.":"Entrez votre adresse e-mail.","Please enter your password.":"Veuillez saisir votre mot de passe.","Please select from an existing Form Fill or create a new profile.":"Choisissez un remplissage de formulaire existant ou créez un nouveau profil.","Please try again once users have been added.":"Ajoutez des utilisateurs et recommencez.","Policy Update":"Mise à jour de stratégie","Premium Credit Monitoring":"Surveillance de crédit Premium","Profile:":"Profil:","Protect your family and share your digital lives securely. Enjoy the simplicity and security of your LastPass Families subscription.":"Protégez votre famille et partagez votre vie numérique en toute sécurité. Profitez de la simplicité et de la sécurité de votre abonnement à LastPass Families.","Purge All":"Supprimer tout définitivement","Re-enter your master password:":"Ressaisir votre mot de passe maître:","Read more.":"En savoir plus.","Read only access":"Accès en lecture seule","Reason":"Motif","Recently generated passwords will appear here.":"Les mots de passe générés récemment apparaissent ici.","Renew LastPass Premium":"Renouveler LastPass Premium","Renew now to avoid losing LastPass Enterprise features.":"Renouvelez maintenant pour éviter de perdre les fonctionnalités de LastPass Enterprise.","Renew now to avoid losing LastPass Families features.":"Renouvelez maintenant pour éviter de perdre les fonctionnalités de LastPass Families.","Renew now to avoid losing LastPass Premium features.":"Renouvelez maintenant pour éviter de perdre les fonctionnalités de LastPass Premium.","Renew now to avoid losing LastPass Teams features.":"Renouvelez maintenant pour éviter de perdre les fonctionnalités de LastPass Teams.","Replace":"Remplacer","Replace Site":"Remplacer le site","SHOW":"AFFICHER","SSH Keys":"Clés SSH","SSH key":"Clé SSH","Safari extension update required":"Mettre à jour l'extension Safari ","Search Unavailable":"Rechercher les sites non disponibles","Secure note":"Note sécurisée","Securely save and sync anything in LastPass: secret notes, contracts, or important legal documents.":"Enregistrez et synchronisez en toute sécurité tout ce qui se trouve dans LastPass: notes secrètes, contrats ou documents juridiques importants.","Security Policies":"Stratégies de sécurité","See What's Changed":"Voir ce qui a changé","Servers":"Serveurs","Share %s":"Partager %s","Share accepted.":"Partage accepté.","Share an Item":"Partager un élément","Share as much as you like":"Partagez autant que vous le souhaitez","Share rejected.":"Partage rejeté.","Share with your family quickly and easily with unlimited family folders.":"Partagez rapidement et facilement avec votre famille grâce à un nombre illimité de dossiers de famille.","Shared Folder accepted.":"Dossier partagé accepté.","Shared Folder deleted.":"Dossier partagé supprimé.","Shared Folder member reinvited.":"Membre du dossier partagé réinvité.","Shared Folder purged.":"Dossier partagé supprimé définitivement.","Shared Folder rejected.":"Dossier partagé rejeté.","Shared Folder restored.":"Dossier partagé restauré.","Shared Folder will no longer be downloaded.":"Le dossier partagé ne sera plus téléchargé.","Shared Folder will now be downloaded.":"Le dossier partagé sera téléchargé.","Shared folder name":"Nom de dossier partagé","Shared folders is a feature that is only available for LastPass Families users. With LastPass families, you get unlimited shared folders for you and up to five family members.":"Les dossiers partagés sont une fonction accessible seulement aux utilisateurs de LastPass Families. Avec LastPass Families, vous bénéficiez de dossiers partagés illimités pour vous et jusqu'à cinq autres membres de la famille.","Sharing is restricted by a LastPass Enterprise policy.":"Votre organisation interdit le partage.","Sharing keys generated.":"Clés de partage générées.","Show Compact View":"Afficher en vue compacte","Show History":"Afficher l'historique","Show Large View":"Afficher en vue large","Sign-On":"Inscription","Skip for now":"Ignorer pour l'instant","Social Security Number is required when Enable Free Credit Monitoring is checked.":"Le numéro de sécurité sociale est obligatoire quand vous activez la surveillance de crédit gratuite.","Social Security Numbers":"Numéros de sécurité sociale","Social security number":"Numéro de sécurité sociale ","Software Licenses":"Licences logicielles","Software license":"Licence logicielle","Sorry - group names starting with 'Shared-' are created by LastPass to indicate groups shared with other people. Please use a different name.":"Veuillez utiliser un nom ne commençant pas par 'Shared'. C'est réservé à LastPass pour signaler des dossiers partagés avec d'autres personnes.","Sorry, LastPass Enterprise users can not act as emergency contacts.":"Désolé, mais les utilisateurs de LastPass Enterprise ne peuvent pas servir de contact d’accès d’urgence.","Sorry, LastPass Premium is required to create a Shared Family Folder":"Les dossiers partagés Families sont disponibles avec LastPass Premium","Sorry, as a LastPass Premium user, you are limited to one Shared Folder. Please consider using LastPass Enterprise if you would like more.":"Pour partager des dossiers supplémentaires, vous aurez besoin de LastPass Enterprise.","Sorry, company policy prohibits use of this feature.":"Votre organisation l'interdit.","Sorry, this operation is not allowed by a policy.":"Votre organisation l'interdit.","Start 30-day trial":"Démarrer un essai de 30 jours","State is required when Enable Free Credit Monitoring is checked.":"L'état est obligatoire quand vous activez la surveillance de crédit gratuite.","Strength":"Force","Super!":"Super!","Symbols":"Symboles","Take a tour of your new vault to explore some of the new features of your LastPass Families account.":"Faites une visite guidée de votre nouveau coffre-fort pour explorer certaines des nouvelles fonctions de votre compte LastPass Families.","Take the tour":"Faire la visite","Template must contain at least one field.":"Ajoutez au moins un champ.","Text with copy button":"Texte avec bouton 'Copier'","The following items have already been shared individually and cannot be moved to a shared folder:":"Ces éléments ont été partagés individuellement et ne peuvent pas être déplacés vers un dossier partagé:","The following items have been individually shared with you and cannot be moved into a shared folder:":"Ces éléments ont été partagés avec vous individuellement et ne peuvent pas être déplacés vers un dossier partagé:","The following user groups are empty and cannot be added.":"Vous ne pouvez pas ajouter de groupes d'utilisateurs vides.","The following users do not currently have sharing keys.":"Ces utilisateurs n'ont pas de clés de partage.","The user does not want to receive emails from LastPass.":"L'utilisateur a demandé à ne pas recevoir d'e-mails de LastPass.","The user must login to LastPass at least once to permit sharing.":"L'utilisateur doit se connecter à LastPass au moins une fois pour permettre le partage.","These can be auto-filled into any form. They contain your contact information: address, phone, email, and more":"Ils peuvent être remplis sur n'importe quel formulaire. Ils contiennent vos coordonnées de contact: adresse, téléphone, e-mail, etc.","These can be auto-filled into any form. They contain your contact information: address, phone, email, and more.":"Ils peuvent être remplis sur n'importe quel formulaire. Ils contiennent vos coordonnées de contact: adresse, téléphone, e-mail, etc.","They can generate sharing keys by logging into LastPass via the LastPass Internet Explorer, Firefox, or Google Chrome browser extensions, or by logging into the website and clicking on the Generate Sharing Keys link.":"Les clés de partage sont générées automatiquement lors de la connexion à l'extension de navigateur LastPass, ou manuellement sur le site web par le lien Générer les clés de partage.","This account is already linked":"Ce compte est déjà associé","This feature requires an external binary component, which is currently not supported on this platform.":"Cette fonction exige un composant binaire externe qui n'est pas pris en charge sur cette plate-forme.","This is a shared site. You are not permitted to copy the password.":"Vous n'êtes pas autorisé à copier le mot de passe pour ce site partagé.","This request cannot be completed because you are currently offline.":"Vous ne pouvez pas le faire en mode hors ligne.","Timezone":"Fuseau horaire","Too many requests were made in a short time. Please try again later.":"Il peut y avoir un problème réseau temporaire de notre côté. Recommencez plus tard. Erreur: Régulation des requêtes.","Transmogrifier":"Transmogrifier","Try LastPass Families":"Essayer LastPass Families","Unlimited":"Illimité","Upgrade My Account":"Mettre à niveau mon compte","Upgrade Now":"Mettre à niveau maintenant","Uppercase":"Majuscules","Use Virtual Keyboard":"Utiliser un clavier virtuel","Use this button to add new sites, notes, and profiles, from anywhere in your vault.":"Utilisez ce bouton pour ajouter de nouveaux sites, notes et profils, de partout dans votre coffre-fort.","User is missing sharing keys, please ask them to login to become an emergency contact.":"Cet utilisateur doit d'abord se connecter à l'extension de navigateur LastPass pour créer automatiquement des clés de partage, un préalable technique pour le partage d'éléments et pour devenir un contact d'urgence.","We failed to share with the following users:":"Une erreur s'est produit lors du partage avec ces utilisateurs:","We've got something for you!":"Nous avons quelque chose pour vous!","We've organized the Vault by what things are instead of how they're used. All your saved items are here, in the left sidebar.":"Nous avons organisé le coffre-fort par type d'élément plutôt que par utilisation. Tous vos éléments enregistrés sont là dans la barre latérale gauche.","We've reorganized some things in your Vault!":"Nous avons réorganisé des éléments dans votre coffre-fort!","Welcome to Families!":"Bienvenue à Families!","Welcome to the family":"Bienvenue dans la famille","Welcome to the family!":"Bienvenue dans la famille!","Wi-Fi Passwords":"Mots de passe Wi-Fi","Wi-fi password":"Mot de passe Wi-Fi","With emergency access, you give someone you trust the ability to access your vault items in the event that you cannot.":"Avec l'accès d'urgence, vous pouvez donner à une personne de confiance l'accès à tout ou partie de votre coffre-fort.","You are logged out of LastPass. To log in again, simply click on the LastPass extension icon near the top of your browser.":"Vous êtes déconnecté de LastPass. Pour vous connecter, cliquez sur l'icône LastPass de votre navigateur.","You can not share with yourself.":"Vous ne pouvez pas partager avec vous-même.","You can now do even more with LastPass - Update now to see what's changed (it only takes a minute).":"Mettez à jour maintenant pour en faire plus avec LastPass. Cela ne prendra qu'une minute.","You cannot rename a top level Shared folder":"Vous ne pouvez pas renommer un dossier partagé de premier niveau","You do not have permission to add items to this folder.":"Vous n'avez pas l'autorisation d'ajouter des éléments dans ce dossier.","You do not have permission to link this account":"Vous n'avez pas l'autorisation d'associer ce compte","You do not have permission to move the following items from their respective shared folders:":"Vous n'avez pas l'autorisation de déplacer ces éléments:","You may only have one Notes field in a template.":"Vous ne pouvez avoir qu'un seul champ Notes dans un modèle.","You must be a Premium/Family/Enterprise user to share this item with more than one person.":"Vous devez être utilisateur Premium, Families ou Entreprise pour partager cet élément avec plus d'une personne.","You must enter a valid email or group name.":"Entrez un e-mail ou un nom de groupe valable.","You must enter at least one recipient email address.":"Entrez au moins une adresse e-mail de destinataire.","You must select an item.":"Sélectionnez un élément.","You must select at least one item to share.":"Sélectionnez au moins un élément à partager.","You've already shared this item with another LastPass user. In order to share with more than one person, you'll need to upgrade to LastPass Premium.":"Vous avez déjà partagé cet élément avec un autre utilisateur LastPass. Pour le partager avec plus d'une personne, vous devez mettre à niveau vers LastPass Premium.","Your Enterprise License has expired.":"Votre abonnement à LastPass Enterprise a pris fin.","Your Enterprise Trial has expired.":"Votre essai de LastPass Enterprise a pris fin.","Your Families License has expired.":"Votre abonnement à LastPass Families a pris fin.","Your Families Trial has expired.":"Votre essai de LastPass Families a pris fin.","Your Premium License has expired.":"Votre abonnement à LastPass Premium a pris fin.","Your Premium Trial has expired.":"Votre essai de LastPass Premium a pris fin.","Your Shared Folder action failed.":"Une erreur s'est produite sur votre dossier partagé.","Your Teams License has expired.":"Votre abonnement à LastPass Teams a pris fin.","Your Teams Trial has expired.":"Votre essai de LastPass Teams a pris fin.","Your do not have permission to view this account password so you cannot move it from the current Shared Folder.":"Vous n'avez pas l'autorisation de voir le mot de passe de ce site, donc vous ne pouvez pas le déplacer.","Your enterprise has prohibited individual sharing.":"Votre organisation interdit le partage individuel.","Your enterprise has prohibited sharing.":"Votre organisation interdit le partage.","ZIP / Postal Code is required when Enable Free Credit Monitoring is checked.":"Le code postal est obligatoire quand vous activez la surveillance de crédit gratuite.","Zip / Postal Code":"Code postal","a_zlower":"a-z minuscules","added to Favorites":"ajouté aux favoris","by":"Défini par","hared folder name":"Nom de dossier partagé","iew passwords and notes that you have deleted from your vault. You can restore an item to your vault if needed, or permanently wipe deleted items. Items that have been deleted for 30 days will be wiped automatically.":"Affichez les mots de passe et les notes que vous avez supprimés de votre coffre-fort. Restaurez ou supprimez définitivement tout élément. Après 30 jours, les éléments sont définitivement supprimés.","no thanks":"non merci","upgrade my account":"mettre à niveau mon compte","A day ago":"Il y a un jour","A minute ago":"Il y a un jour","A month ago":"Il y a un mois","A second ago":"Il y a un mois","A week ago":"Il y a une seconde","A year ago":"Il y a une semaine","Admin Dashboard":"Tableau de bord d’administration","Advanced Reporting":"Rapports avancés","An hour ago":"Il y a une heure","Are you sure you want to delete the selected items?":"Supprimer les éléments sélectionnés?","Are you sure you want to purge the selected items? It will be permanently deleted from LastPass.":"Supprimer définitivement cet élément de LastPass?","Are you sure you want to purge this folder's items? It will be permanently deleted from LastPass.":"Supprimer définitivement ces éléments de LastPass?","Are you sure you want to restore the selected items to your vault?":"Restaurer les éléments sélectionnés vers votre coffre-fort?","Are you sure you want to restore this folder's items to your vault?":"Restaurer les éléments de ce dossier vers votre coffre-fort?","Email address already in use":"Adresse e-mail déjà utilisée","Family Manager Dashboard":"Tableau de bord de responsable de la famille","Federated Login with AD Sync":"Connexion fédérée avec AD Sync","Get started with LastPass":"Prise en main de LastPass","Have at least 1 lowercase letter":"Avoir au moins 1 minuscule","Have at least 1 number":"Avoir au moins 1 chiffre","Have at least 1 uppercase letter":"Avoir au moins 1 majuscule","Increased Security Policies":"Stratégies de sécurité augmentées","Just now":"À l'instant","SAML Single Sign-On":"Authentification unique SAML","Six Premium Licenses":"Six licences Premium","Tour":"Visite","Unlimited Shared Folders":"Dossiers partagés illimités","User Management":"Gestion des utilisateurs","Verify Linked Account":"Vérifier le compte associé","Verify Linked Personal Account":"Vérifier le compte personnel associé","%d days":"%d jours","%d hours":"%d heures","To share with additional people, upgrade to LastPass Families":"Pour partager avec d'autres personnes, mettez à niveau vers LastPass Families","To share with additional people, upgrade to LastPass Premium":"Pour partager avec d'autres personnes, mettez à niveau vers LastPass Premium","UPGRADE":"METTRE À NIVEAU","Enterprise Admin":"Administrateur Enterprise","Enterprise %s User":"Utilisateur %s Enterprise","Identity Admin":"Administrateur Identity","Identity User":"Utilisateur Identity","Identity %s User":"Utilisateur %s Identity","The easy life awaits! Install the LastPass browser extension for the best possible experience.":"La belle vie vous attend ! Installez l'extension de navigateur LastPass pour en profiter du mieux possible.","Teams Admin":"Administrateur Teams","%sClick here%s to view examples and learn more about equivalent domains.":"%sCliquez ici%s pour voir des exemples et en savoir plus sur les domaines équivalents.","'%s' is not a valid domain":"'%s' n'est pas un domaine valable","Are you sure you want to delete this application?":"Supprimer cette application?","Are you sure you want to delete this friend?":"Supprimer cet ami?","Are you sure you want to delete this profile?":"Supprimer ce profil?","Are you sure you want to delete this role?":"Supprimer ce rôle?","Are you sure you want to permanently delete the selected alerts?":"Supprimer définitivement les alertes sélectionnées?","Are you sure you want to permanently delete the selected applications?":"Supprimer définitivement les applications sélectionnées?","Are you sure you want to permanently delete the selected friends?":"Supprimer définitivement les amis sélectionnés?","Are you sure you want to permanently delete the selected identities?":"Supprimer définitivement les identités sélectionnées?","Are you sure you want to permanently delete the selected profiles?":"Supprimer définitivement les profils sélectionnés?","Are you sure you want to permanently delete the selected roles?":"Supprimer définitivement les rôles sélectionnés?","Are you sure you want to permanently delete this alert?":"Supprimer définitivement cette alerte?","Are you sure you want to permanently delete this application?":"Supprimer définitivement cette application?","Are you sure you want to permanently delete this friend?":"Supprimer définitivement cet ami?","Are you sure you want to permanently delete this identity?":"Supprimer définitivement cette identité?","Are you sure you want to permanently delete this item?":"Supprimer définitivement cet élément?","Are you sure you want to permanently delete this profile?":"Supprimer définitivement ce profil?","Are you sure you want to permanently delete this role?":"Supprimer définitivement ce rôle?","Are you sure you would like to delete the selected alerts?":"Supprimer les alertes sélectionnées?","Are you sure you would like to delete the selected applications?":"Supprimer les applications sélectionnées?","Are you sure you would like to delete the selected friends?":"Supprimer les amis sélectionnés?","Are you sure you would like to delete the selected identities?":"Supprimer les identités sélectionnées?","Are you sure you would like to delete the selected profiles?":"Supprimer les profils sélectionnés?","Are you sure you would like to delete the selected roles?":"Supprimer les rôles sélectionnés?","Are you sure you would like to undelete the selected alerts?":"Restaurer les alertes sélectionnées?","Are you sure you would like to undelete the selected applications?":"Restaurer les applications sélectionnées?","Are you sure you would like to undelete the selected friends?":"Restaurer les amis sélectionnés?","Are you sure you would like to undelete the selected identities?":"Restaurer les identités sélectionnées?","Are you sure you would like to undelete the selected profiles?":"Restaurer les profils sélectionnés?","Are you sure you would like to undelete the selected roles?":"Restaurer les rôles sélectionnés?","Are you sure you would like to undelete this alert?":"Restaurer cette alerte?","Are you sure you would like to undelete this application?":"Restaurer cette application?","Are you sure you would like to undelete this friend?":"Restaurer cet ami?","Are you sure you would like to undelete this identity?":"Restaurer cette identité?","Are you sure you would like to undelete this profile?":"Restaurer ce profil?","Are you sure you would like to undelete this role?":"Restaurer ce rôle?","Choosing to 'Open' %s sites at once may take a long time and cause your browser to respond slowly.":"Le choix de 'Ouvrir ' autant de sites d'un coup (%s) peut prendre longtemps et créer un ralentissement de votre navigateur.","Delete Alerts?":"Supprimer les alertes?","Delete Application?":"Supprimer l'application?","Delete Applications?":"Supprimer les applications?","Delete Friend?":"Supprimer l'ami?","Delete Friends?":"Supprimer les amis?","Delete Identities?":"Supprimer les identités?","Delete Profile?":"Supprimer le profil?","Delete Profiles?":"Supprimer les profils?","Delete Role?":"Supprimer le rôle?","Delete Roles?":"Supprimer les rôles?","LastPass.com encrypts your data and sends it to its secure servers.":"LastPass.com chiffre vos données et les envoie à des serveurs LastPass sécurisés.","No one at LastPass can read your confidential data since it is encrypted using your secret password and you are the only one who knows your password.":"Personne chez LastPass ne peut lire vos données confidentielles du fait qu'elles sont chiffrées par le mot de passe maître secret que vous seul connaissez.","Please note that LastPass already considers the following domains to be equivalent:":"LastPass considère déjà les domaines suivants comme équivalents:","The autologoff timer is too short, your timeout was set to %s giving you 5 minutes instead":"La temporisation de déconnexion automatique est trop courte, donc votre délai d'attente a été fixé à %s, ce qui vous donne plutôt 5 minutes","Undelete Alert?":"Restaurer l'alerte?","Undelete Application?":"Restaurer l'application?","Undelete Friend?":"Restaurer l'ami?","Undelete Identity?":"Restaurer l'identité?","Undelete Profile?":"Restaurer le profil?","Undelete Role?":"Restaurer le rôle?","VULNERABLE":"VULNÉRABLE","You do not have permission to delete items from %s":"Vous n'avez pas l'autorisation de supprimer des éléments de %s","You do not have permission to move items to %s":"Vous n'avez pas l'autorisation de déplacer des éléments vers %s","You have no blank sites!":"Vous n'avez pas de sites à mots de passe vides!","You have no compromised sites!":"Vous n'avez pas de sites compromis!","You have no duplicate sites!":"Vous n'avez pas de sites à mots de passe en double!","You have no old sites!":"Vous n'avez pas de sites à vieux mots de passe!","You have no weak sites!":"Vous n'avez pas de sites à mots de passe faibles!","You must agree to send your encrypted data to LastPass.com.":"Vous devez accepter d'envoyer vos données chiffrées à LastPass.com.","Add Alert":"Ajouter une alerte","Add Application":"Ajouter une application","Add Friend":"Ajouter un ami","Search Alerts":"Rechercher dans les alertes","Search Applications":"Rechercher dans les applications","Search Friends":"Rechercher dans les amis","Search Identities":"Rechercher dans les identités","Search Profiles":"Rechercher dans les profils","Search Roles":"Rechercher dans les rôles","We are sorry, but an error occurred.":"Nous sommes désolés, mais un problème est survenu.","Share Accepted":"Partage accepté","The item that was shared with you is now available in your LastPass vault.":"L’élément partagé avec vous est disponible dans votre coffre-fort LastPass.","Information that was shared with you has been successfully added to your LastPass vault.":"Les informations partagées avec vous ont été ajoutées avec succès à votre coffre-fort LastPass.","Please log in to your LastPass account to access it.":"Veuillez vous connecter à votre compte LastPass pour y accéder.","Search Sites":"Rechercher dans les sites","You may need to log in again on your devices to apply the change.":"Vous devrez peut-être vous reconnecter sur vos appareils pour appliquer la modification.","Your language is set":"Votre langue est définie","Too many characters":"Trop de caractères","Please keep this page open until the operation completes.":"Conservez cette page ouverte jusqu'à l'achèvement de l'opération.","Your password has not been changed.":"Votre mot de passe maître n'a pas été changé.","We sent a push notification to your device. Please accept this request to perform the update.":"Recherchez une notification de la part de LastPass sur votre appareil. Acceptez-la pour effectuer la mise à jour.","LastPass Login":"Connexion à LastPass","Did you intend for your email to be %s?":"Est-ce ce que vous vouliez dire? %s","Must Verify":"Vérification nécessaire","Sorry, but imported items can't go directly into shared folders. Click OK to import to your vault. Once imported, you can organize them into folders and share as required.":"Désolé, les éléments importés ne peuvent pas arriver directement dans des dossiers partagés. Cliquez sur OK pour les importer dans votre coffre-fort. Une fois importés, vous pourrez les ranger dans des dossiers et les partager selon les besoins.","Alert deleted!":"Alerte supprimée!","Fields updated!":"Champs mis à jour!","Google Authenticator authentication failed!":"Échec de l'authentification Google Authenticator!","Grid authentication failed!":"Échec de l’authentification Grid!","Identity added!":"Identité ajoutée!","Identity deleted!":"Identité supprimée!","Identity updated!":"Identité mise à jour!","Invalid email or password!":"E-mail ou mot de passe non valable!","Almost there! Visit this page to verify that you have access to your email address: %s":"Presque terminé ! Visitez cette page pour vérifier que vous avez accès à votre adresse e-mail : %s","Invalid password!":"Mot de passe non valable!","Note added!":"Note ajoutée","Role added!":"Rôle ajouté","Role deleted!":"Rôle supprimé","Role updated!":"Rôle mis à jour","Security question authentication failed!":"Échec de l’authentification par question de sécurité","Sesame authentication failed!":"Échec de l’authentification Sesame!","Settings updated!":"Réglages mis à jour","Site added!":"Site ajouté","Site deleted!":"Site supprimé","Site purged!":"Site purgé","Site undeleted!":"Site restauré!","Site updated!":"Site mis à jour","Watch a screencast on basic usage":"Regarder une vidéo qui explique l'utilisation générale","You do not have alerts.":"Vous n'avez pas encore d'alertes.","You do not yet have any deleted sites!":"Vous n'avez encore supprimé aucun site.","You must sign in to your LastPass account before this operation.":"Pour continuer, connectez-vous à votre compte LastPass et recommencez.","YubiKey authentication failed!":"Échec de l’authentification YubiKey!","Add one by clicking 'Add Identity' to the left.":"Ajoutez-en une en cliquant sur 'Ajouter une identité' à gauche.","Add one by clicking 'Add Profile' to the left.":"Ajoutez-en un en cliquant sur 'Ajouter un profil' à gauche.","Add one by clicking 'Add Role' to the left.":"Ajoutez-en un en cliquant sur 'Ajouter un rôle' à gauche.","Add one by clicking 'Add Site' to the left.":"Ajoutez-en un en cliquant sur 'Ajouter un site' à gauche.","Add some by using LastPass for Applications.":"Ajoutez-en avec LastPass pour Applications.","Alert added!":"Alerte ajoutée!","Alert purged!":"Alerte purgée!","Alert replaced!":"Alerte remplacée!","Alert undeleted!":"Alerte restaurée!","Alert updated!":"Alerte mise à jour!","An error has occurred while contacting the LastPass server.":"Une erreur est survenue en contactant le serveur LastPass.","Application added!":"Application ajoutée!","Application deleted!":"Application supprimée!","Application purged!":"Application purgée!","Application replaced!":"Application remplacée!","Application undeleted!":"Application restaurée!","Application updated!":"Application mise à jour!","Browse the web as you normally would and LastPass will automatically remember passwords as you enter them.":"Parcourez le web comme d'habitude. LastPass vous propose d'enregistrer les sites dans votre coffre-fort pendant votre navigation.","Friend added!":"Ami ajouté!","Friend deleted!":"Ami supprimé!","Friend purged!":"Ami purgé!","Friend replaced!":"Ami remplacé!","Friend undeleted!":"Ami restauré!","Friend updated!":"Ami mis à jour!","Identity purged!":"Identité purgée!","Identity replaced!":"Identité remplacée!","Identity undeleted!":"Identité restaurée!","Please change your identity back to 'All' to view a complete listing of your sites.":"Changez votre identité en 'Toutes' pour afficher une liste complète de vos sites.","Please try again later.":"Veuillez réessayer plus tard.","Please try another search, or %sclear your current one%s.":"Essayez une autre recherche ou %seffacez l'actuelle%s.","Profile added!":"Profil ajouté!","Profile deleted!":"Profil supprimé!","Profile purged!":"Profil purgé!","Profile replaced!":"Profil remplacé!","Profile undeleted!":"Profil restauré!","Profile updated!":"Profil mis à jour!","Role purged!":"Rôle purgé!","Role replaced!":"Rôle remplacé!","Role undeleted!":"Rôle restauré!","Site replaced!":"Site remplacé!","To share an item, click on the 'Sites' tab and click an item's 'Share' link.":"Pour partager un élément, cliquez sur l'onglet 'Sites' et cliquez sur le lien 'Partager' d'un élément.","You are currently not sharing any items with any of your friends.":"Vous ne partagez aucun élément avec des amis.","You do not yet have any applications setup!":"Vous n'avez pas encore d'applications!","You do not yet have any form fill profiles setup!":"Vous n'avez pas encore de profils de remplissage de formulaires!","You do not yet have any identities setup!":"Vous n'avez pas encore d'identités!","You do not yet have any roles setup!":"Vous n'avez pas encore de rôles!","You do not yet have any sites for your currently selected identity!":"Vous n'avez aucun site enregistré dans l'identité sélectionnée!","You do not yet have any sites setup for your currently selected identity!":"Vous n'avez aucun site enregistré dans l'identité sélectionnée!","You do not yet have any sites setup!":"Vous n'avez pas encore de sites!","Your search didn't match any alerts!":"Votre recherche ne correspondait à aucune alerte!","Your search didn't match any applications!":"Votre recherche ne correspondait à aucune application!","Your search didn't match any friends!":"Votre recherche ne correspondait à aucun ami!","Your search didn't match any identities!":"Votre recherche ne correspondait à aucune identité!","Your search didn't match any profiles!":"Votre recherche ne correspondait à aucun profil!","Your search didn't match any roles!":"Votre recherche ne correspondait à aucun rôle!","Your search didn't match any sites!":"Votre recherche ne correspondait à aucun site!","Please try again later. If you still experience issues, please email support@lastpass.com for assistance.":"Veuillez réessayer plus tard. Si le problème persiste, consultez https://support.logmeininc.com/lastpass pour de l'aide.","Please enter your company name.":"Veuillez saisir votre nom de société.","Please enter your first and last name.":"Veuillez entrer votre prénom et nom.","Remove this character and try again: %s":"Retirez ce caractère et recommencez : '%s","Something doesn't look right. Please check that you've entered everything correctly.":"Il semble que quelque chose ne va pas. Vérifiez que vous avez tout saisi correctement.","You're already signed up":"Vous êtes déjà inscrit","Some items may appear blank in your vault. This happens when an imported item was created using a template that's not available in this vault.":"Certains éléments peuvent sembler vides dans votre coffre-fort. C'est le cas quand un élément importé a été créé avec un modèle qui n'est pas disponible dans ce coffre-fort.","Success!":"Réussite!","Activate":"Activer","You will now be redirected to our payment page to enter your payment information.":"Vous serez maintenant redirigé vers notre page de paiement pour entrer vos données de paiement.","Something went wrong. Please try again.":"Un problème est survenu. Veuillez réessayer plus tard.","Choose...":"Choisir...","Re-invite":"Réinviter","Edit Secure Note":"Modification de note sécurisée","Make Admin":"Promouvoir administrateur","Remove Admin":"Révocation de droits d'administrateur","Remove User From Company":"Retirer l'utilisateur de la société","Un-Require Password Change":"Cesser d'exiger un changement de mot de passe","Please enter a valid email address.":"Veuillez saisir une adresse e-mail valable.","Purchase Details":"Détails d'achat","Delete User":"Supprimer l'utilisateur","Error:":"Erreur:","Delete Selected":"Supprimer les appareils sélectionnés","For assistance, %svisit the Help Center%s.":"Pour de l'aide, %svisitez le Centre d’aide%s.","Would you like to continue with your purchase even though it will results in duplicate charges?":"Poursuivre l'achat malgré la facturation en double?","Don't worry; we have emailed you all the details, and you can use LastPass to help you to create new secure passwords for any affected site.":"Ne vous inquiétez pas, nous vous avons envoyé tous les détails par e-mail, et vous pouvez utiliser LastPass pour créer de nouveaux mots de passe sécurisés pour les sites concernés.","Enter a one-time passcode from your authenticator app.":"Entrez un code à usage unique dans votre app d’authentification.","Challenge Results":"Résultats du challenge","Top %s%%":"Premiers %s%%","Bottom %s%%":"Derniers %s%%","You don't have any one-time passwords.":"Vous n'avez aucun code à usage unique.","Please enter your LastPass login credentials:":"Entrez vos identifiants de connexion LastPass:","Please enter your email address.":"Veuillez entrer votre adresse e-mail.","Trouble logging in?":"Problème de connexion ?","Make sure this matches your master password.":"Vérifiez qu’il s’agit de votre mot de passe maître.","Please enter a valid username or one-time password.":"Veuillez entrer un nom d'utilisateur valable ou un mot de passe à usage unique.","If you are confident you are entering valid information, contact your LastPass administrator or LastPass support. One-time login may be restricted by your organization.":"Si vous avez confiance en la validité des données saisies, contactez votre administrateur LastPass ou l'assistance LastPass. La connexion par accès temporaire à usage unique peut être restreinte par votre organisation.","Visit %s if the problem persists.":"Consultez %s si le problème persiste.","Unnamed section":"Section sans nom","Unnamed field":"Champ sans nom","Tags":"Balises","Decrypt data":"Déchiffrer les données","Enter your key to decrypt your exported LastPass data.":"Saisissez votre clé pour déchiffrer vos données LastPass exportées.","Encryption key":"Clé de chiffrement","Invalid key!":"Clé non valable !","Decrypt":"Déchiffrer","Confirm encryption key":"Confirmer la clé de chiffrement","Encrypted export":"Exportation chiffrée","Required!":"Obligatoire !","Your key's not strong enough! Minimum requirements: 12 characters, 1 number, 1 uppercase & 1 lowercase letter.":"Votre clé manque de force ! Exigences minimales: 12 caractères, 1 chiffre, 1 majuscule et 1 minuscule.","Key and confirmation don't match!":"La clé n'est pas identique à sa confirmation !","We couldn't download your attachment. If the problem persists, contact LastPass support.":"Nous n'avons pas pu télécharger votre pièce jointe. Si le problème persiste, contactez l'assistance LastPass.","Something went wrong while reading the selected file. Confirm that the file exists and isn't corrupted and that you have permission to view it.":"Un problème est survenu en lecture du fichier sélectionné. Vérifiez que le fichier existe, n'est pas endommagé et que vous avez l'autorisation de le consulter.","File name contains special characters. Rename the file using only letters and numbers and try again.":"Le nom de fichier contient des caractères spéciaux. Renommez le fichier avec seulement des lettres et des chiffres et réessayez.","File is too big. Try again with a file smaller than 10MB.":"Le fichier est trop gros. Réessayez avec un fichier de moins de 10 Mo.","Sorry, you can't attach that file. Supported file types are:":"Désolé, vous ne pouvez pas joindre ce fichier. Les types de fichier pris en charge sont :","Documents":"Documents","Media":"Média","Your out-of-date browser won't let you do that! Switch to a modern browser and try again.":"Votre navigateur périmé ne vous permettra pas de faire cela ! Passez à un navigateur moderne et réessayez.","Save the item first to open the attachment.":"Enregistrez l'élément d'abord pour ouvrir la pièce jointe.","File not attached":"Fichier non joint","A problem occurred.":"Un problème est survenu.","An error occurred. Please contact LastPass support if this continues":"Un problème est survenu. Si le problème persiste, contactez l'assistance LastPass.","Are you sure you would like to disable 2 factor authentication?":"Voulez-vous vraiment désactiver l'authentification multifacteur?","Emails do not match!":"Les adresses e-mail ne correspondent pas!","Name change Failed":"Échec du changement de nom","Password change complete!":"Mot de passe changé!","Sorry, you are not allowed to delete users in a trial enterprise. Try disabling or removing the user instead.":"Désolé, vous n'êtes pas autorisé à supprimer des utilisateurs pendant votre essai. Essayez plutôt de désactiver ou de retirer l'utilisateur.","Sorry, you are not allowed to remove the last admin account.":"Désolé, vous n'êtes pas autorisé à supprimer le dernier compte d'administrateur.","Super Admin Master Password Reset":"Autoriser les super administrateurs à réinitialiser les mots de passe maîtres","The new email you specified is already in use.":"La nouvelle adresse e-mail donnée est déjà utilisée.","This user has already been assigned to one or more shared folders.  If you re-invite them, they will be removed from all shared folders, and will have to be added again.  Do you want to continue?":"Cet utilisateur a déjà été attribué à un ou plusieurs dossiers partagés. Si vous le réinvitez, il sera supprimé de tous les dossiers partagés et devra être à nouveau ajouté. Voulez-vous continuer?","Your settings could not be updated. Please retry later. Error=2":"Vos paramètres n'ont pas pu être mis à jour. Réessayez plus tard. Error=2","A problem occurred when changing your password. Please try again.":"Nous n'avons pas pu enregistrer votre modification. Veuillez réessayer.","Are you sure you would like to allow this user to login without forcing them to change their master password?":"Voulez-vous vraiment autoriser cet utilisateur à se connecter sans le forcer à changer son mot de passe maître?","Are you sure you would like to destroy all of this user's sessions?":"Supprimer toutes les sessions de cet utilisateur?","Are you sure you would like to force this user to change their master password on next login?":"Forcer cet utilisateur à changer son mot de passe maître à la prochaine connexion?","Are you sure you would like to reinvite all existing users that haven't accepted?":"Renvoyer une invitation à tous les utilisateurs existants qui ne l'ont pas encore acceptée?","Consistency check failed. It is recommended this user tries normal account recovery.  If they recently changed their password, ask them to utilize https://lastpass.com/revert first and then you can retry.":"Échec de la vérification de cohérence. Cet utilisateur devrait essayer la récupération de compte normale. S'il a récemment changé son mot de passe maître, demandez-lui d'utiliser cette page avant de recommencer: https://lastpass.com/revert.","Disable 2nd Factor":"Désactiver le deuxième facteur","If you assign this role, it will share %d accounts.\n\nAre you sure you want to continue?":"En attribuant ce rôle, vous partagerez %d comptes.\n\nContinuer?","If you choose 'Forbid access to shared sites and folders', you will lose access to that folder forever.":"Si vous choisissez 'Interdire l'accès aux sites et dossiers partagés', vous perdrez l'accès à ce dossier à jamais.","If you delete this role, it will unshare %d accounts.\n\nAre you sure you want to continue?":"En supprimant ce rôle, vous annulerez le partage de %d comptes.\n\nContinuer?","Remove user and lose access":"Retirer l'utilisateur et révoquer l'accès","Sharing Accounts, this may take a moment...":"Partage de comptes. Cela peut prendre un moment...","This user has sites and/or folders shared from other employees in the company. Please choose if you would like to delete these shared sites from the user's vault before removing them from the company:":"D'autres salariés ont partagé des éléments avec cet utilisateur. Voulez-vous supprimer ces éléments partagés du coffre-fort de l'utilisateur avant de le retirer de la société?","Are you sure you would like to send an email invitation telling users to join your Enterprise account?":"Envoyer une invitation par e-mail demandant aux utilisateurs de rejoindre votre compte Enterprise?","Please enter a valid number of licenses.":"Entrez un nombre de licences valable.","Please wait until your licenses have less than %s days balance remaining.":"Attendez que le solde restant de vos licences descende à %s jours.","You have active licenses that are still valid for another %s days.":"Vos licences actives sont valables pendant %s jours.","To cover all users in your LastPass Enterprise account, you must purchase at least this many licenses: %s. To purchase fewer licenses, remove some users from your account.\nFor assistance, contact %s.":"Pour couvrir tous les utilisateurs de votre compte LastPass Enterprise, vous devez acheter au moins ce nombre de licences : %s. Pour acheter moins de licences, retirez quelques utilisateurs de votre compte.\nPour une assistance, contactez %s.","Your LastPass Enterprise subscription has expired.  If you no longer want to be in an Enterprise account, click here.":"Votre abonnement LastPass Enterprise a pris fin. Si vous ne souhaitez plus avoir de compte Enterprise, cliquez ici.","Your LastPass Families subscription has expired.  If you no longer want to be in a Families account, click here.":"Votre abonnement LastPass Families a pris fin. Si vous ne souhaitez plus avoir de compte Families, cliquez ici.","Your LastPass Teams subscription has expired.  If you no longer want to be in a Teams account, click here.":"Votre abonnement LastPass Teams a pris fin. Si vous ne souhaitez plus avoir de compte Teams, cliquez ici.","You’ll need an existing LastPass account to complete your purchase. Please %s to continue.":"Il vous faudra un compte LastPass pour terminer votre achat. Veuillez %s pour continuer.","If you no longer want to be in a Families account see this FAQ":"Si vous ne souhaitez plus avoir de compte Families, consultez cette FAQ","If you no longer want to be in a Teams account see this FAQ":"Si vous ne souhaitez plus avoir de compte Teams, consultez cette FAQ","If you no longer want to be in an Enterprise account see this FAQ":"Si vous ne souhaitez plus avoir de compte Enterprise, consultez cette FAQ","Please login to view your account information.":"Veuillez vous connecter pour consulter vos informations de compte.","You must purchase via the LastPass Enterprise signup page.":"Pour acheter, utilisez la page d'inscription LastPass Enterprise.","You must purchase via the LastPass Families signup page.":"Pour acheter, utilisez la page d'inscription LastPass Families.","You must purchase via the LastPass Teams signup page.":"Pour acheter, utilisez la page d'inscription LastPass Teams.","We're sorry, this email cannot be used to complete your purchase.":"Nous sommes désolés, cet adresse e-mail ne peut pas être utilisée pour terminer votre achat.","If you are a GST registered business, you may submit your company GST registration number so that you will not be charged GST on your purchase.":"Les entreprises immatriculées à la GST peuvent envoyer leur numéro d'identification de GST pour éviter des facturations non nécessaires.","If you are a VAT registered business within the EU, you may submit your company VAT registration number so that you will not be charged VAT on your purchase.":"Les entreprises immatriculées à la TVA dans l'UE peuvent envoyer le numéro d'immatriculation à la TVA de votre société.","In accordance with current EU VAT legislation (including EU Directive 2006/112/EC and 2008/8/EC) LastPass''services are classified as electronically supplied services (eServices).":"Conformément à la législation actuelle de l'UE sur la TVA (notamment les Directives de l'UE 2006/112/CE et 2008/8/EC), les services de LastPass sont classés comme services fournis par voie électronique (eServices).","In accordance with current GST legislation within your country LastPass''services are classified as electronically supplied services (eServices).":"Conformément à la législation actuelle de votre pays sur la GST les services de LastPass sont classés comme services fournis par voie électronique (eServices).","To re-purchase LastPass Premium, or update your credit card information, please first cancel your existing auto-renewal.":"Annulez votre renouvellement automatique existant avant de racheter LastPass Premium ou de mettre à jour vos données de carte bancaire.","We recommend that customers with questions about GST contact their local tax office.":"Contactez l'administration fiscale locale pour toute question à propos de la GST.","We recommend that customers with questions about VAT contact their local tax office.":"Contactez l'administration fiscale locale pour toute question à propos de la TVA.","When purchasing LastPass from a country within the EU you are entering a binding contract with LastPass.":"Quand vous achetez LastPass depuis un pays membre de l'UE, vous signez un contrat juridiquement contraignant avec LastPass.","You must first enter a URL.":"Entrez une URL.","Sent":"Envoyé","Activate User":"Activer l'utilisateur","Change the user's email":"Changer l'adresse e-mail de l'utilisateur","Confirm New Email":"Confirmer la nouvelle adresse e-mail","Disable User":"Désactiver l'utilisateur","Downloading the data...":"Téléchargement des données...","Edit Attributes":"Modifier des attributs","Edit Name":"Modifier le nom","Edit Roles":"Modifier les rôles","Email sent!":"E-mail envoyé!","Enter the Duo Security username for this user:":"Entrez le nom d’utilisateur Duo Security pour cet utilisateur:","Force password change on next login":"Forcer le changement de mot de passe à la prochaine connexion","LastPass is re-encrypting all user data.":"LastPass rechiffre toutes les données d'utilisateur.","New Email":"Nouvelle adresse e-mail","Passwords do not match!":"Les mots de passe ne correspondent pas!","Please enter a new password for ":"Veuillez saisir un nouveau mot de passe pour","Please enter a password":"Veuillez saisir un mot de passe","Please enter an email":"Veuillez entrer une adresse e-mail","Provisioned Accounts":"Comptes approvisionnés","Re-encrypting the data...":"Rechiffrement des données...","Sending":"Envoi en cours","Set Duo Security Username":"Définir le nom d'utilisateur Duo Security","Uploading the re-encrypted data...":"Envoi des données rechiffrées...","Usage Reporting":"Rapports d'utilisation","User has never logged in.":"L'utilisateur ne s'est jamais connecté.","%s is a member of a LastPass Families account.":"%s est membre d'un compte LastPass Families.","Confirm Your Purchase":"Confirmer votre achat","It looks like you're already signed up":"Il semble que vous êtes déjà inscrit","Sorry, we don't recognize that email":"Désolé, nous ne reconnaissons pas cette adresse e-mail","create a new account":"créer un compte","Remember Email":"Se souvenir de l'adresse email","Remember Password":"Mémoriser le mot de passe","Trust this computer for 30 days":"Faire confiance à cet ordinateur pour 30 jours","Failed to get role. Please contact ":"Échec d'obtention du rôle. Veuillez contacter","Missing action parameter.":"Paramètre d'action manquant.","Remove this user from your organization?":"Retirer cet utilisateur de votre organisation?","Rename User":"Renommer l'utilisateur","Sorry!":"Désolé!","This user is the last one in your organization with access to these shared folders:":"Cet utilisateur est le dernier de votre organisation ayant accès à ces dossiers partagés:","Unknown action parameter":"Paramètre d'action inconnu","Warning:":"Avertissement:","What would you like to name this user?":"Comment voulez-vous nommer cet utilisateur?","%s users found.":"%s utilisateurs trouvés.","%s users shown out of a total of %s in the enterprise.":"%s utilisateurs affichés sur un total de %s dans l'entreprise.","No records were found":"Aucun enregistrement trouvé","Showing search results from this page only.":"Affichage des résultats de recherche de cette page seulement.","ALL USERS":"TOUS LES UTILISATEURS","Move All":"Déplacer tout","SELECTED USERS":"UTILISATEURS SÉLECTIONNÉS","Site logins":"Identifiants de site","If you need help, %scontact us%s.":"Si vous avez besoin d'aide, %scontactez-nous%s.","Please fill in all fields.":"Remplissez tous les champs.","%s is a member of a LastPass Enterprise company.":"%s est membre d'une société LastPass Enterprise.","%s is a member of a LastPass Teams company.":"%s est membre d'une société LastPass Teams.","%s is already associated with a LastPass account.":"%s est déjà associé à un compte LastPass.","The subscription for %s is already signed up with our partner, %p.":"L'abonnement pour %s est déjà inscrit auprès de notre partenaire, %p.","You can contact them at %c.":"Vous pouvez les contacter à l'adresse %c.","Your card number is incomplete.":"Votre numéro de carte est incomplet.","Your card number is invalid.":"Votre numéro de carte n'est pas valable.","Your card's expiration date is incomplete.":"La date d'expiration de votre carte est incomplète.","Your card's expiration year is in the past.":"L'année d'expiration de votre carte est dépassée.","Your card's expiration year is invalid.":"L'année d'expiration de votre carte n'est pas valable.","Your card's security code is incomplete.":"Le code de sécurité de votre carte est incomplet.","Update my payment method":"Mettre à jour mon mode de paiement","GST registration numbers are checked for accuracy.":"L'exactitude des numéros de GST est vérifiée.","Our records indicate that %s already has a subscription to LastPass Premium that automatically renews annually.":"Nos données indiquent que %s a déjà un abonnement à LastPass Premium à renouvellement automatique.","Providing false information is an offense.":"La fourniture d'informations inexactes est une infraction.","VAT registration numbers are checked for accuracy.":"L'exactitude des numéros de TVA est vérifiée.","When purchasing LastPass from your country you are entering a binding contract with LastPass.":"Quand vous achetez LastPass depuis votre pays, vous signez un contrat juridiquement contraignant avec LastPass.","You will, however, be responsible for accounting for GST under your country's regulations.":"Vous resterez responsable de la comptabilisation de la GST selon les règlements de votre pays.","You will, however, be responsible for accounting for VAT under the reverse charge mechanism.":"Vous resterez responsable de la comptabilisation de la TVA par le mécanisme d'autoliquidation.","Your credit card will be charged %s USD.":"Votre carte de crédit sera débitée de %s USD.","Form already submitted.":"Formulaire déjà envoyé.","This form has already been submitted to the server. Your payment may have already been processed. If you would like to pay again, please reload the page and re-enter your information. If you need assistance, please email support@lastpass.com.":"Ce formulaire a déjà été envoyé au serveur. Votre paiement a peut-être déjà été traité. Si vous souhaitez payer à nouveau, veuillez recharger la page et saisir à nouveau vos informations. Si vous avez besoin d’assistance, veuillez envoyer un e-mail à support@lastpass.com.","Failed to get role. Please contact us at %s!":"Impossible de récupérer le rôle. Si le problème persiste, contactez-nous: %s","File":"Fichier","Enter a new master password for %s":"Entrez un nouveau mot de passe maître pour %s","Please enter a password!":"Veuillez saisir un mot de passe!","Try Again":"Réessayer","Confirm":"Confirmer","GMT Dublin, Edinburgh, Lisbon, London":"GMT Dublin, Édimbourg, Lisbonne, Londres","Open File":"Ouvrir un fichier","Save File":"Enregistrer le fichier","%s will no longer be downloaded.":"%s ne sera plus téléchargé.","%s will now be downloaded.":"%s sera maintenant téléchargé.","%s containing %d item(s)":"%s contient %d élément(s)","%d passwords were updated.":"%d mots de passe ont été mis à jour.","Access will be granted on %s":"L’accès sera accordé le %s","One-time passcode:":"Code à usage unique :","Stop showing one-time passcodes":"Cesser d'afficher les codes à usage unique","Enter your secret key":"Entrer votre clé secrète","Activate one-time passcodes":"Activer les codes à usage unique","That key doesn't seem valid. Check it and try again.":"Cette clé ne semble pas valable. Vérifiez-la et recommencez.","Use only these characters: A-Z, 2-7, =":"N’utilisez que les caractères : A-Z, 2-7, =","Enter your secret key to show one-time passcodes":"Entrez votre clé secrète pour afficher les codes à usage unique","Enter your secret key to show time-based one-time passcodes (TOTP) in your LastPass vault.":"Entrez votre clé secrète pour afficher les codes temporels à usage unique (TOTP) dans votre coffre-fort LastPass.","Secret key":"Clé secrète","Show one-time passcode":"Afficher les codes à usage unique","Hide one-time passcode":"Masquer les codes à usage unique","%s has been deleted. This dialog will be closed.":"%s a été supprimé. Cette boîte de dialogue va se fermer.","New Mexico":"Nouveau-Mexique","Newfoundland and Labrador":"Terre-Neuve et Labrador","Pending invitation for %1$s was resent to %2$s":"L'invitation en cours pour %1$s a été renvoyée à %2$s","Pending invitation for %1$s was cancelled for %2$s":"L'invitation en cours pour %1$s a été annulée pour %2$s","%s gained emergency access to your vault on %s":"%s a obtenu un accès d'urgence à votre coffre-fort le %s","You'll never have to remember this password again!":"Vous n'aurez jamais à mémoriser à nouveau ce mot de passe!","%0Tell a story unique to you%0\n                      %1Fidoate!my2woolsox%1":"%0Racontez une histoire personnelle%0\n                      %1MédorAmangé!mes2chaussettes%1","I agree to the %0LastPass Terms%0 and %1Privacy Policy%1":"J'accepte les %0Conditions générales LastPass%0 et la %1Politique de confidentialité%1","By completing this form, I agree to the %0Terms%0 and %1Privacy Policy%1.":"En remplissant ce formulaire, j'accepte les %0Conditions générales%0 et la %1Politique de confidentialité%1.","I want to receive promotional emails, unless %0I opt out%0":"Je souhaite recevoir des e-mails promotionnels, sauf si %0Je me désinscris%0","I want to receive promotional emails, unless %0I opt out%0.":"Je souhaite recevoir des e-mails promotionnels, sauf si %0Je me désinscris%0.","%s is required.":"%s est obligatoire.","Edit %s":"Modifier %s","Add %s":"Ajouter %s","Ending in %s":"Fin dans %s","Share sent to %s.":"Partage envoyé à %s.","Share sent to %d recipients.":"Partage envoyé à %d destinataires.","Share revoked from %s":"Partage révoqué de %s","%d users/groups were invited.":"%d utilisateurs/groupes ont été invités.","Shared Folder %s created.":"Dossier partagé %s créé.","Shared Folder %s was renamed.":"Dossier partagé %s renommé.","Custom Note Template: %s created.":"Modèle de note personnalisé: %s créé.","Custom Note Template: %s deleted.":"Modèle de note personnalisé: %s supprimé.","Replace %s":"Remplacer %s","Expires %s":"Expire le %s","Message too long for RSA":"Message trop long pour RSA","Invalid RSA public key":"Clé publique RSA non valable","Invalid RSA private key":"Clé privée RSA non valable","A Legacy Shared Folder will appear in the vault as %0%0.":"Un dossier partagé hérité apparaîtra dans le coffre-fort comme %0%0.","Emergency%0%0Access":"Accès%0%0d’urgence","Six Premium%0%0Licenses":"Six licences%0%0Premium","Family Manager%0%0Dashboard":"Tableau de bord de%0%0gestionnaire de la famille","Unlimited%0%0Shared Folders":"Dossiers partagés%0%0illimités","User%0%0Management":"Gestion des%0%0utilisateurs","Federated Login%0%0with AD Sync":"Connexion fédérée%0%0avec AD Sync","SAML Single%0%0Sign-On":"Connexion unique%0%0SAML","Advanced%0%0Reporting":"Rapports%0%0avancés","%0Identity Dashboard:%024/7 web access to your ID records and credit scores for all three credit bureaus.":"%0Tableau de bord d'identité:%0Accès web 24/7 à vos enregistrements de pièces d'identité et scores de crédit pour les trois bureaux de crédit.","%0Regular Monitoring:%0Instant alerts to any changes, with details on what changed and how to take action.":"%0Surveillance régulière:%0Alertes instantanées de toutes modifications, avec les détails des modifications et la façon d'agir.","%0Full-Service Resolution:%0Victim of identity theft? Our team of experts investigate and help restore your records":"%0Résolution de service complet:%0Victime d'un vol d'identité? Notre équipe d'experts peut enquêter et vous aider à restaurer vos données","%d seconds ago":"Il y a %d secondes","%d minutes ago":"Il y a %d minutes","%d hours ago":"Il y a %d heures","%d days ago":"Il y a %d jours","%d weeks ago":"Il y a %d semaines","%d months ago":"Il y a %d mois","%d years ago":"Il y a %d ans","%d items selected":"%d éléments sélectionnés","%s was added.":"%s a été ajouté.","%d items were deleted.":"%d éléments ont été supprimés.","%s was deleted.":"%s a été supprimé.","%d items were restored.":"%d éléments ont été restaurés.","%s was restored.":"%s a été restauré.","%d items were renamed.":"%d éléments ont été renommés.","%s was renamed.":"%s a été renommé.","%d items were removed.":"%d éléments ont été retirés.","%s was removed.":"%s a été retiré.","%d items were saved.":"%d éléments ont été enregistrés.","%s was saved.":"%s a été enregistré.","%d items were purged.":"%d éléments ont été purgés.","%s was purged.":"%s a été purgé.","%d items were moved to %s.":"%d éléments ont été déplacés vers %s.","%s was moved to %s.":"%s a été déplacé vers %s.","%d items were organized to %s.":"%d éléments ont été rangés dans %s.","%s was organized to %s.":"%s a été rangé dans %s.","%d items were added.":"%d éléments ont été ajoutés.","%d items were added to Favorites.":"%d éléments ont été ajoutés aux favoris.","%s was added to Favorites.":"%s a été ajouté aux favoris.","Create an encryption key. %0Don't forget it!%0 It can't be recovered! You'll need it to decrypt your exported info.":"Créez une clé de chiffrement. ^0Ne l'oubliez pas !^0 Elle ne peut pas être récupérée ! Vous en aurez besoin pour déchiffrer vos données exportées.","Are you sure you want to purge %s? It will be permanently deleted from LastPass.":"Supprimer définitivement cet élément de LastPass? %s","Are you sure you want to restore %s to your vault?":"Restaurer l'élément dans le coffre-fort? %s","Are you sure you want to unlink your personal account (%s)":"Dissocier votre compte personnel? %s","Are you sure you want to decline to be the emergency access contact for %s?":"Refuser le rôle de délégué d'accès d'urgence pour cette personne? %s","!$%@#":"!$%@#","ErrorSessionMsg":"Il semble que votre session LastPass a expiré. Connectez-vous pour continuer à utiliser LastPass.","recently usedlower":"récemment visité","Account (%s) unlinked.":"Compte non associé: %s.","Are you sure you want to delete %s?":"Supprimer %s?","Are you sure you want to revoke access for %s? They will no longer be able to access this item.":"Révoquer l'accès pour %s? L'accès à cet élément sera perdu.","%s cannot be deleted while enabled.":"%s ne peut pas être supprimé tant qu'il est activé.","Are you sure you want to delete field %s?":"Supprimer le champ %s?","%d friends were invited. We will send you a notification email when any of them join LastPass so you can retry sharing your data with them.":"%d amis ont été invités. Vous recevrez un e-mail de LastPass quand un d'entre eux agira et sera prêt pour le partage.","You have already invited the following friends: %s. Please send them a reminder using your personal email as the email invitation sent by LastPass might not have reached them.":"Vous avez déjà invité ces amis: %s. Un conseil: Envoyez-leur un rappel depuis votre adresse e-mail personnelle au cas où ils auraient manqué l'e-mail de LastPass.","The following friends have marked your invitations as spam: %s.":"Ces amis ont marqué vos invitations comme courrier indésirable: %s.","The following emails are invalid: %s":"Ces e-mails ne sont pas valables: %s","%s requested emergency access to your vault. They will receive access on %s":"Cette personne a demandé un accès d’urgence à votre coffre-fort: %s. La personne obtiendra l’accès le %s","Are you sure you want to revoke emergency access for %s?":"Révoquer l'accès d'urgence pour %s?","The notes field contains too much data. You may store a maximum of 45,000 characters per note. Would you like us to truncate the note for you? You will lose some of your data.":"C'est une 'note' plutôt longue! Limitez les notes à 45 000 caractères. Devons-nous la raccourcir pour vous? Vous pourriez perdre des données.","Are you sure you want to remove %s? They will no longer be able to access items in this folder.":"Supprimer %s? Cela lui fera perdre l'accès aux éléments de ce dossier.","Sorry, this request is taking longer than normal.":"Hmm... Cela prend plus de temps que d'habitude.","%s has been updated. Would you like to update this dialog with the latest data?":"%s a été mis à jour. Le mettre à jour ici aussi avec les dernières données?","Are you sure you want to reject %s?":"Refuser %s?","%d Pending Shares could not be decrypted.":"Une erreur s'est produite lors du déchiffrement des mots de passe partagés (%d).","Would you like to replace an existing entry you have for %s?":"Remplacer l'entrée existante pour %s?","You are trying to share with too many people. Please remove at least 1 email and try again.":"Désolé, mais vous ne pouvez pas partager avec autant de personne. Supprimez au moins 1 destinataires et recommencez.","You are trying to share with too many people. Please remove at least %d emails and try again.":"Désolé, mais vous ne pouvez pas partager avec autant de personne. Supprimez au moins %d destinataires et recommencez.","You've successfully added%0 your first Site %0to your vault.":"Vous avez bien ajouté%0 votre premier site %0à votre coffre-fort.","This was a shared family folder, but you are now a part of a LastPass Enterprise account.  In order to continue administering this shared folder, you must move it into the enterprise account.  This may mean certain other members of the enterprise account will have access to it.":"Pour continuer l'administration de ce dossier partagé depuis votre compte Families, faites-le passer en compte Enterprise. N'oubliez pas que les membres du compte Enterprise peuvent y accéder.","Tell a story unique to you like: %0%0\n                        %1Fidoate!my2woolsox%1":"Racontez une histoire personnelle. %0%0\n                        %1MédorAmangé!mes2chaussettes%1","%s is already used.":"%s est déjà utilisé.","Field Title: %s is used more than once.":"Le champ de titre %s est utilisé plus d'une fois.","%0Instructions:%0 Drag and drop the sites, secure notes, and form fills from the available column into the selected column to allow access for your new identity. %1Learn More.%1":"%0Voici comment:%0 Faites glisser des sites, des notes sécurisées et des remplissages de formulaires depuis la colonne Disponible vers la colonne Sélectionné pour permettre à l'accès à votre nouvelle identité. %1En savoir plus.%1","This is a legacy folder and may include users who are not in your Family.":"Ce dossier hérité peut inclure des utilisateurs qui ne sont pas dans votre compte Families.","Shared folders is a feature that is only available for LastPass Families users. With LastPass families, you get unlimited shared folders for you and up to five family members. %0Learn more%0":"Avec LastPass Families, vous disposez de dossiers partagés illimités pour vous et jusqu'à cinq membres de la famille. %0En savoir plus%0","Congratulations! You've been invited to LastPass Families by %0%0, giving you access to unlimited family sharing, and other easy to use security features. %1Learn more%1":"Félicitations! Vous avez été invité à LastPass Families par %0%0, ce qui vous donne accès à un partage familial illimité et à d'autres fonctions de sécurité intuitives. %1En savoir plus%1","LastPass Families is here! Protect your family and share your digital lives securely with simple controls and unlimited sharing between family members. %0Learn more%0":"LastPass Families est là! Protégez votre famille et partagez des informations en toute sécurité. %0En savoir plus%0","You've already shared this item with another LastPass user. In order to share with more than one person, you'll need to upgrade to LastPass Premium. %0Learn more%0":"Vous avez déjà partagé cet élément avec un autre utilisateur LastPass. Pour le partager avec plus d'une personne, vous devez mettre à niveau vers LastPass Premium. %0En savoir plus%0","Emergency access is a feature that is only available for LastPass Premium or LastPass Families users.\n   With emergency access, you give someone you trust the ability to access your vault items in the event that you cannot.\n   %0Learn more%0":"L'accès d'urgence n'est disponible qu'avec LastPass Premium et LastPass Families.\n Donnez à quelqu'un de confiance l'accès à votre coffre-fort en cas d'urgence.\n %0En savoir plus%0","%s was invited. We will send you a notification email when they join LastPass so you can retry sharing your data with them.":"%s amis ont été invités. Vous recevrez un e-mail de LastPass quand ils agiront et seront prêts pour le partage.","LastPass has detected that your Master Password matches your password for %0%0.":"Il semble que votre mot de passe maître correspond à votre mot de passe pour %0%0.","LastPass strongly discourages reusing your Master Password on any other sites. In the event of a breach of %0%0, your entire vault would be vulnerable if that password is acquired":"Votre mot de passe maître ne doit correspondre à aucun mot de passe d'un autre site. En cas de compromission de %0%0, la totalité de votre coffre-fort pourrait devenir vulnérable.","An error occurred.\nPlease send a screenshot of this error to support@lastpass.com":"Hmm... Nous ne sommes sûrs de ce qui s'est mal passé.\nSi le problème persiste, adressez-vous à l'équipe LastPass.","To share with additional people, upgrade to %0LastPass Premium%0.":"Le partage avec plusieurs personnes n'est disponible qu'avec %0LastPass Premium%0.","You have assigned this folder to the maximum number of people under the Family Feature. If you wish to assign to more people, please consider %0LastPass Enterprise%0.":"Ce dossier peut être attribué à toute autre personne qui utilise LastPass Families. Pour l'attribuer à d'autres personnes, envisagez %0LastPass Enterprise%0.","Admin%0%0Dashboard":"Console%0%0d’administration","Increased%0%0Security Policies":"Stratégies de sécurité%0%0augmentées","In order to function properly, LastPass needs permission to access and collect your browser tab URLs  This allows LastPass to save and fill credentials on webpages  You can read more about the data LastPass collects in the \n          %0Privacy Policy%0.":"Pour fonctionner correctement, LastPass doit avoir l'autorisation d'accéder aux adresses web (URL) et de les collecter. Sans cette autorisation, LastPass ne peut pas enregistrer et remplir vos identifiants pour vos sites. Vous pourrez en savoir plus sur les données que LastPass collecte dans la \n          %0Politique de confidentialité%0.","Your trial will expire today":"Votre essai prend fin aujourd'hui","Are you sure you would like to remove this attachment?":"Voulez-vous vraiment retirer cette pièce jointe ?","Email and password required":"Adresse e-mail et mot de passe obligatoires","You must %sactivate your LastPass MFA app%s prior to enabling it as a Multifactor Option.":"Vous devez %sactiver votre app LastPass MFA%s avant de l'activer comme option multifacteur.","Successfully unlinked account":"Compte bien désassocié","No sites available":"Aucun site disponible","Data downloaded, now decrypting":"Données téléchargées, déchiffrement en cours","Failed to base64 decode your data":"Échec du décodage Base64 de vos données","Failed to get accounts, %sclick here to try again%s":"Échec d'obtention des comptes, %scliquez ici pour recommencer%s","Loading sites...":"Chargement des sites...","Password confirmation required":"Confirmation du mot de passe nécessaire","Showing and sorting data":"Affichage et tri des données","LastPass is setting up card reader authentication...":"LastPass configure l'authentification par lecteur de carte...","LastPass is setting up Nymi authentication...":"LastPass configure l'authentification Nymi...","LastPass is setting up fingerprint reader authentication...":"LastPass configure l'authentification par lecteur d'empreinte digitale...","Welcome to the new LastPass Experience!":"Bienvenue dans la nouvelle interface LastPass !","Your vault has been upgraded!":"Votre coffre-fort a été mis à niveau !","Learn more about these changes.":"En savoir plus sur ces changements.","Updated Vault Organization":"Organisation du coffre-fort mise à jour","Simplified Autofill":"Remplissage automatique simplifié","And more!":"Et bien d'autres choses encore !","The final step is to migrate your form fill profiles to their new homes - this process should only take a minute.":"L'étape finale consiste à migrer vos profils de remplissage de formulaires vers leurs nouveaux emplacements - cette procédure ne devrait prendre qu'une minute.","Your form fill information will be unavailable until you complete this step.":"Vos données de remplissage de formulaires ne seront plus disponibles tant que vous n'aurez pas terminé cette étape.","Finish the Update":"Terminer la mise à jour","A New Home for Your Form Fill Data":"Un nouvel emplacement pour vos données de remplissage de formulaire","As part of the latest LastPass update, Payment Card information stored in Form Fills have been moved here. However, you must complete the update process to transfer your Form Fill data. Don’t worry, it only takes a minute.":"Dans le cadre de la dernière mise à jour de LastPass, les informations de carte de paiement enregistrées dans le remplissage de formulaires ont été déplacées ici. Mais vous devez terminer la procédure de mise à jour pour transférer vos données de remplissage de formulaires. Ne vous inquiétez pas, cela ne prendra qu'une minute.","As part of the latest LastPass update, Addresses information stored in Form Fills have been moved here. However, you must complete the update process to transfer your Form Fill data. Don’t worry, it only takes a minute.":"Dans le cadre de la dernière mise à jour de LastPass, les informations d'adresse enregistrées dans le remplissage de formulaires ont été déplacées ici. Mais vous devez terminer la procédure de mise à jour pour transférer vos données de remplissage de formulaires. Ne vous inquiétez pas, cela ne prendra qu'une minute.","As part of the latest LastPass update, Bank Account information stored in Form Fills have been moved here. However, you must complete the update process to transfer your Form Fill data. Don’t worry, it only takes a minute.":"Dans le cadre de la dernière mise à jour de LastPass, les informations de compte bancaire enregistrées dans le remplissage de formulaires ont été déplacées ici. Mais vous devez terminer la procédure de mise à jour pour transférer vos données de remplissage de formulaires. Ne vous inquiétez pas, cela ne prendra qu'une minute.","Your Form Fill data will be unavailable until you complete the update.":"Vos informations de remplissage de formulaires ne seront plus disponibles tant que vous n'aurez pas terminé la mise à jour.","Please finish the latest update to access your Form Fills information":"Veuillez terminer la dernière mise à jour pour accéder à vos données de remplissage de formulaires","Don’t miss out the best LastPass features. Install LastPass extension to avoid limitations.":"Ne manquez pas les meilleurs fonctionnalités de LastPass. Installez l'extension LastPass pour éviter les limitations.","Install Now":"Installer maintenant","Update Vault":"Mettre à jour le coffre-fort","For your protection, your session will expire in 2 minutes. This is required by your organization's security policy.":"Pour votre protection, votre session expirera dans 2 minutes. La stratégie de sécurité de votre organisation l'exige.","Your session will expire soon":"Votre session va bientôt expirer","Add Billing Information":"Ajouter des informations de facturation","LastPass puts security first":"LastPass pense d'abord à la sécurité","To ensure heightened payment security and continued service, add the billing information associated with your organization's payment card.":"Pour assurer une meilleure sécurité des paiements et un service sans interruption, ajoutez les informations de facturation de la carte de paiement de votre organisation.","To ensure heightened payment security and continued service, add the billing information associated with your payment card.":"Pour assurer une meilleure sécurité des paiements et un service sans interruption, ajoutez les informations de facturation de votre carte de paiement.","To ensure continued service, update the billing information associated with your payment method.":"Pour un service sans interruption, mettez à jour les informations de facturation de votre mode de paiement.","To ensure continued service, update the billing information associated with your business's payment method.":"Pour un service sans interruption, mettez à jour les informations de facturation du mode de paiement de votre entreprise.","I'll do it later":"Plus tard","Video Tutorial":"Didacticiel vidéo","Get Help":"Accéder à l'aide","Manage Your Vault":"Gérer votre coffre-fort","Add identities":"Ajouter des identités","Open your favorite sites":"Ouvrir vos sites favoris","View account history":"Afficher l'historique du compte","View deleted items":"Afficher les éléments supprimés","Remove linked account":"Supprimer le compte associé","Improve Your Security":"Améliorer votre sécurité","Manage one-time passwords":"Gérer les mots de passe à usage unique","Video Tutorials":"Didacticiels vidéo","Please verify your email before signing up for your GoToMeeting trial.":"Veuillez vérifier votre adresse e-mail avant de vous inscrire pour votre essai de GoToMeeting.","Switch to computer only?":"Passer au type Ordinateurs seulement ?","Something went wrong. We couldn’t switch your device type. Please try again.":"Une erreur est survenue. Nous n’avons pas pu changer votre type d’appareil. Veuillez réessayer.","You switched to computer: %s switches left":"Vous êtes passé au type Ordinateurs : %s changements restants","You switched to computer: 1 switch left":"Vous êtes passé au type Ordinateurs : 1 changement restant","You made the final switch to computer":"Vous avez fait le dernier changement pour le type Ordinateurs","Go Premium for unlimited access":"Passez à Premium pour un accès illimité","Yes, make the final switch":"Oui, valider le dernier changement","Switch to computer":"Passer au type Ordinateurs","1 device switch left":"1 changement de type d'appareil restant","%s device switches left":"%s changements de type d’appareil restants","%sGo Premium%s for unlimited access on both mobile and computer.":"%sPassez à Premium%s pour un accès illimité sur les deux types d’appareils : ordinateurs et mobiles.","%sThis is your last opportunity to switch!%s After this switch, you’ll be able to use LastPass for free on computers, but not on mobile devices.":"%sC’est votre dernier changement !%s Ensuite, vous pourrez utiliser LastPass gratuitement sur des ordinateurs, mais plus sur des appareils mobiles.","You can only use LastPass for free on %sone type of device.%s":"Vous ne pouvez utiliser LastPass gratuitement que sur %sun type d'appareil.%s","You can only use LastPass for free on %sone type of device.%s Switch up to %s times to find the right option for you.":"Vous ne pouvez utiliser LastPass gratuitement que sur %sun type d’appareil.%s Vous pourrez en changer jusqu’à %s fois pour trouver la bonne option pour vous.","You can switch your device type %s2 more times%s to find the right option for you. Go Premium for unlimited access.":"Vous pouvez changer de type d’appareil %sencore 2 fois%s pour trouver la bonne option pour vous. Passez à Premium pour un accès illimité.","Please take a minute to %sthink about how you use LastPass.%s This is your last switch. Go Premium for unlimited access.":"Veuillez prendre une minute pour %sréfléchir à votre façon d'utiliser LastPass.%s C’est votre dernier changement. Passez à Premium pour un accès illimité.","%sGo Premium%s for unlimited access on both mobile devices and computers.":"%sPassez à Premium%s pour un accès illimité sur les deux types d’appareils : mobiles et ordinateurs.","%sClick the LastPass%s icon on the browser toolbar to activate your computer.":"%sCliquez sur l’icône LastPass%s de la barre d’outils du navigateur pour passer LastPass au type Ordinateurs.","Your active device type is mobile":"Votre type d’appareil actif est Mobile","What is LastPass Premium?":"Qu’est-ce que LastPass Premium ?","Learn about switching your device type":"En savoir plus sur le changement de votre type d’appareil","Active device type:":"Type d’appareil actif :","Go Premium to continue monitoring your security.":"Passez à Premium pour continuer à surveiller votre sécurité.","Go Premium to keep your digital life alive in an emergency.":"Passez à Premium pour poursuivre votre vie numérique en cas d’urgence.","%d days left in trial.":"%d jours d’essai restants.","1 day left in trial.":"1 jour d’essai restant.","Go Premium for only $3/month":"Passez à Premium pour seulement € 2,82/mois","Important changes to LastPass Free":"Modifications importantes pour LastPass Free","Grab your 25% discount today!":"Profitez dès aujourd’hui de votre remise de 25 % !","Starting %sMarch 16, 2021%s, you'll only be able to use LastPass Free on %sone device type%s (either computers or mobile devices). To continue using LastPass everywhere, upgrade now at a 25%% discount.":"Dès le %s16 mars 2021%s, vous ne pourrez utiliser LastPass Free que sur %sun type d'appareil%s (ordinateurs ou appareils mobiles). Pour continuer d'utiliser LastPass partout, mettez à niveau avec une remise de 25 %%.","Starting %stomorrow%s you'll only be able to use LastPass Free on %sone device type%s (either computers or mobile devices). To continue using LastPass everywhere, upgrade now at a 25%% discount.":"Dès le %sdemain%s, vous ne pourrez utiliser LastPass Free que sur %sun type d'appareil%s (ordinateurs ou appareils mobiles). Pour continuer d'utiliser LastPass partout, mettez à niveau avec une remise de 25 %%.","Starting %sMarch 16, 2021%s, we're making some important changes to LastPass.":"Dès le %s16 mars 2021%s, nous apportons des modifications importantes à LastPass.","As a Free user, you'll only be able to use LastPass on %sone type of device%s (either computers or mobile devices).":"En tant qu'utilisateur de la version Free, vous ne pourrez utiliser LastPass que sur %sun type d'appareil%s (ordinateurs ou appareils mobiles).","To continue using LastPass everywhere, upgrade to Premium now at a %s25%% discount.%s":"Pour continuer d'utiliser LastPass partout, mettez à niveau vers Premium maintenant avec %s25 %% de remise.%s","Learn more about device types":"En savoir plus sur les types d’appareils","I'll think it over":"Je vais y réfléchir","Upgrade for only $2.25/month":"Mettre à niveau pour seulement € 2,11/mois","Take a look at Premium now":"Jetez un œil à Premium dès aujourd’hui","We’re committed to helping you find the best fit for your online life.":"Nous nous engageons à vous aider à trouver le meilleur choix pour votre vie en ligne.","See if Premium is right for you.":"Voyez si Premium vous convient.","Here’s what you get with LastPass Premium!":"Voici ce que vous permet LastPass Premium !","Unlimited device access":"Accès sur un nombre d’appareils illimité","Use LastPass on mobile devices and computers":"Utiliser LastPass sur des appareils mobiles et des ordinateurs","Share vital passwords with family and friends":"Partagez des mots de passe indispensables avec la famille ou des amis","Monitor accounts for data breaches":"Surveiller les violations de données en ligne","Risk-free trial. No charges. No automatic renewal.":"Essai sans risques. Sans facturation. Sans renouvellement automatique.","Try Premium FREE for 30 days":"Essai Premium gratuit 30 jours","What else does Premium offer?":"Que Premium vous offre-t-il de plus ?","Dark web monitoring":"Surveillance du dark web","Congrats! Your free 30-day Premium trial has started.":"Félicitations ! Vos 30 jours d’essai de Premium commencent maintenant.","We couldn’t start your Premium trial. Don’t worry, you can try again.":"Nous n’avons pas pu démarrer votre essai de Premium. Ne vous inquiétez pas, vous pouvez réessayer.","Everything is safe in your vault.":"Tout est en sécurité dans votre coffre-fort.","To use LastPass on computer, go Premium. Otherwise, log in on a mobile device.":"Pour utiliser LastPass sur ordinateur, choisissez Premium. Sinon, connectez-vous sur un appareil mobile.","Go Premium for only $2.25/month":"Passez à Premium pour seulement € 2,11/mois","Go Premium for only %s$2.25/month%s":"Passez à Premium pour seulement %s€ 2,11/mois%s","This is your last opportunity to switch. Go Premium for unlimited access.":"C'est votre dernier changement possible. Passez à Premium pour un accès illimité.","You can switch your device type 2 more times to find the right option for you. Go Premium for unlimited access.":"Vous pouvez changer de type d’appareil encore 2 fois pour trouver la bonne option pour vous. Passez à Premium pour un accès illimité.","You can only use LastPass for free on one device type. Switch up to 3 times to find the right option for you.":"Vous ne pouvez utiliser LastPass gratuitement que sur un type d’appareil. Vous pourrez en changer jusqu’à 3 fois pour trouver la bonne option pour vous.","Your active device type is mobile.":"Votre type d’appareil actif est Mobile.","You can only use LastPass for free on one device type. Switch up to %s times to find the right option for you.":"Vous ne pouvez utiliser LastPass gratuitement que sur un type d’appareil. Vous pourrez en changer jusqu’à %s fois pour trouver la bonne option pour vous.","Upgrade to LastPass Premium for Emergency Access":"Mettez à niveau vers LastPass Premium pour bénéficier de l’accès d’urgence","Upgrade to LastPass Families for Emergency Access":"Mettez à niveau vers LastPass Families pour bénéficier de l’accès d’urgence","Keep your digital life alive. Designate an emergency contact & digital heir.":"Poursuivez votre vie numérique. Désignez un contact d’urgence et héritier numérique.","Use LastPass on all computers & mobiles":"Utilisez LastPass sur tous les ordinateurs et appareils mobiles","Learn more about Premium":"En savoir plus sur LastPass Premium","Upgrade to LastPass Premium to measure password strength":"Mettez à niveau vers LastPass Premium pour mesurer la force de vos mots de passe","Measure & improve the strength of your passwords.":"Mesurez et améliorez la force de vos mots de passe.","Keep your digital life alive":"Poursuivez votre vie numérique","Upgrade to LastPass Premium for unlimited sharing":"Mettez à niveau vers LastPass Premium pour un partage illimité","Securely share passwords and other sensitive information, arranged in convenient folders.":"Partagez en toute sécurité des mots de passe et autres informations sensibles, rangés en dossiers pratiques.","Here's what else you get with LastPass Premium!":"Voici d’autres choses possibles avec LastPass Premium !","Upgrade to LastPass Families for unlimited shared folders":"Mettez à niveau vers LastPass Families pour profiter de dossiers partagés illimités","6 Premium-level licences":"6 licences de niveau Premium","Each family member has their own personal vault, plus the ability to create shared folders amongst the family.":"Chaque membre a son propre coffre-fort, et la possibilité de créer des dossiers partagés avec la famille.","Family manager dashboard":"Tableau de bord de gestion familiale","Invite the clan to your LastPass Families account using their email address":"Invitez le clan à rejoindre votre compte LastPass Families avec leur adresse e-mail","Upgrade for 1GB of storage":"Mettez à niveau pour 1 Go de stockage","Upgrade to Families":"Mettez à niveau vers Families","Learn more about Families":"En savoir plus sur Families","Upgrade to LastPass Families for family manager dashboard":"Mettez à niveau vers LastPass Families pour profiter du tableau de bord de gestion familiale","Invite the clan to your Families account using their email address.":"Invitez le clan à rejoindre votre compte Families avec leur adresse e-mail.","Here’s what else you get with LastPass Premium!":"Voici d’autres choses possibles avec LastPass Premium !","Here’s what else you get with LastPass Families!":"Voici d’autres choses possibles avec LastPass Families !","Go Families for %s$4.00/month.%s":"Passez à Families pour %s€ 3,90/mois.%s","Go Premium for %s$3.00/month.%s":"Passez à Premium pour %s€ 2,90/mois.%s","Go Families to continue monitoring your security.":"Passez à Families pour continuer à surveiller votre sécurité.","Go Families to keep your digital life alive in an emergency.":"Passez à Families pour poursuivre votre vie numérique en cas d’urgence.","Go Families to continue managing your family’s online security.":"Passez à Families pour continuer à gérer la sécurité en ligne de votre famille.","%s%d days%s left in trial.":"%s%d jours%s d’essai restants.","Your file couldn't be attached because you reached the 50MB storage limit. Get 1GB of space with LastPass Premium.":"Votre fichier n’a pas pu être joint parce que vous avez atteint la limite de stockage de 50 Mo. Profitez de 1 Go d’espace avec LastPass Premium.","Don't attach file":"Ne pas joindre le fichier","Access on one device types":"Accès sur un type d’appareils","Access your passwords on one device type - computer (including all browsers running on desktops and laptops) or mobile (including all mobile phones, smart watches, and tablets). Plus, you can access your vault when you’re offline.":"Accédez à vos mots de passe sur un type d’appareils - ordinateur (y compris tous les navigateurs sur ordinateurs de bureau et portables) ou mobile (y compris tous les téléphones mobiles, montres connectées et tablettes). De plus, vous pouvez accéder à votre coffre-fort même hors ligne.","Basic Support":"Assistance de base","Access to our Support Center, which has a robust library of self-help resources available 24/7, plus access to our LastPass Community, which is actively monitored by LastPass specialists.":"Accès à notre Centre d’assistance, bibliothèque complète de ressources d’auto-assistance disponible 24/7, plus accès à notre communauté LastPass, activement surveillée par des spécialistes de LastPass.","Security Dashboard and Score":"Tableau de bord et score de sécurité","Your cybersecurity command center for assessing password security & monitoring accounts for data breaches. View your security score and see a list of your weak and reused passwords to make improving your security immediate and seamless.":"Votre centre de commande de cybersécurité pour évaluer la sécurité de vos mots de passe et surveiller les possibles violations de vos comptes. Affichez votre score de sécurité pour voir une liste de vos mots de passe faibles ou réutilisés pour que l’amélioration de votre sécurité devienne immédiate et sans effort.","Dark Web Monitoring":"Surveillance du dark web","Stop worrying about data breaches. LastPass monitors your accounts and sends an alert if your information is compromised on the dark web.":"Cessez de vous inquiéter des violations de données. LastPass surveille vos comptes et vous envoie une alerte si vos données sont compromises sur le dark web.","Personal Support":"Assistance personnelle","Access to our Support Center which has a robust library of self-help resources available 24/7, access to our LastPass Community, plus email support that’s managed by the LastPass customer care team.":"Accès à notre Centre d’assistance, bibliothèque complète de ressources d’auto-assistance, disponible 24/7, accès à notre communauté LastPass plus assistance par e-mail gérée par l’équipe d’assistance clientèle de LastPass."};
            var translations_loaded = true;

            if(typeof(gs)!="function"){
              function gs(a){if(typeof translations!="undefined"&&typeof translations[a]!="undefined")return translations[a];return a}
            }</script><script type="text/javascript" nonce="Degc8N2nTP-D8FTMLkR0d2rcHJ_B1a32mJmTmVTVPEc=">var sesameemail = '';
        var sesameotp  = '';

        var g_local_key              = "";
        var g_local_key1             = "";
        var g_pw_hash                = "";
        var g_username               = fix_username("");
        var g_username_changed       = 0;
        var g_security_level         = 0;
        var g_login_site_prompt      = false;
        var g_edit_site_prompt       = false;
        var g_edit_sn_prompt         = false;
        var g_view_pw_prompt         = false;
        var g_view_ff_prompt         = false;
        var g_switch_identity_prompt = false;
        var g_switch_f_prompt        = false;
        var g_multifactor_reprompt   = false;
        var g_sessionid              = "";
        var isIE11 = !!navigator.userAgent.match(/Trident.*rv:11\./);
        var bIE8                     = false;
        var bIE                      = false;
        var bSaf                     = (navigator.userAgent.indexOf("Safari") != -1);
        var bOpera                   = (navigator.userAgent.indexOf("Opera") != -1);
        var bMoz                     = (navigator.appName == "Netscape" && !isIE11);
        var g_hasplugin              = "0";
        var g_haspluginrsa           = false;
        var g_donotclearfirsttime    = false;
        var g_porig                  = "";
        var lpwebsiteeventformname   = "lpwebsiteeventform";
        var eventdata1               = null;
        var eventdata2               = null;
        var eventdata3               = null;
        var eventdata4               = null;
        var eventdata6               = null;
        var counter                  = 0;
        var updated_enc              = 1;
        var googleauth_fail_count    = 0;

        var g_premiumcreditmonids = {};
        function checkKey()
        {
        if (eventdata2.value!="" && eventdata2.value!="none" && (!bIE || eventdata6 != null && eventdata6.value != "" && eventdata6.value != "none"))
        {

          g_local_key = AES.hex2bin(eventdata2.value);
          var plugin_ver = "1.27";
          if(eventdata3.value!=""&&eventdata3.value!="none")
            plugin_ver = eventdata3.value;
          var iid = eventdata4.value;
          if (!bIE || eventdata6 == null) {
          reqAccts(plugin_ver, iid, null, null, null, "E");
          } else {
            reqAccts(plugin_ver, iid, null, null, null, "E", eventdata6.value);
          }
        } else {
          counter++;
          if(counter>20||eventdata2.value=="none")
          {document.location.href="/?&ac=1&lpnorefresh=1&fromwebsite=1&newvault=1&nk=1";
          } else {
            send_website_event("keyplug2web", g_username);
            setTimeout(function() { checkKey(); }, 250);
          }
        }
        }var g_waitbox_default_title      = "Veuillez patienter...";
        var g_waitbox_default_html       = "Envoi...";
        var g_waitbox_mustreencrypt_html = "LastPass doit rechiffrer vos données suite à une modification dans votre clé de chiffrement.<br\/><br\/>Ceci pourrait prendre jusqu&#039;à cinq minutes, mais pas plus...<br\/><br\/>Conservez cette page ouverte jusqu&#039;à l&#039;achèvement de l&#039;opération.<br\/><br\/><div id=\"changepw_progress\" style=\"width: 300px;height:50px;line-height:50px;font-size:15px;vertical-align:middle;color:#000;border:1px solid #ccc;text-align:center;display:none;\"><div id=\"changepw_progress2\" style=\"background:#2EFF38;height:50px;width:0px;position:absolute;z-index:400;\"><\/div><div style=\"position:absolute;z-index:500;width:300px;\" id=\"changepw_progress3\"><\/div><\/div>";

        function show_waitbox(mustreencrypt,defaulthtml)
        {
        var title = g_waitbox_default_title;
        var html = g_waitbox_default_html;
        if (typeof(mustreencrypt)!="undefined" && mustreencrypt!=null && mustreencrypt==true)
        html = g_waitbox_mustreencrypt_html;
        else if (typeof(defaulthtml)!="undefined" && defaulthtml && defaulthtml!="")
        html = defaulthtml;
        html = '<br/><br/><b>'+html+'<\/b><br/><br/>';
        lpwaitbox(title,html);
        Lpwm.uptopzindex();
        }

        function hide_waitbox()
        {
        lpwaitboxhide();
        }var g_pollinterval = parseInt("20");    var ofj_redirecturl             = "";
        var bool_fromotp                = false;
        var bool_hastoolband            = typeof(lptoolband)!="undefined" ? true : false;
        var ofjh_sesameauthfailed       = "&Eacute;chec de l&rsquo;authentification Sesame!";
        var ofjh_yubikeyauthfailed      = "&Eacute;chec de l&rsquo;authentification YubiKey!";
        var ofjh_googleauthfailed       = "&Eacute;chec de l\'authentification Google Authenticator!";
        var ofjh_googleauthfailed_first = "Votre code Google Authenticator a &eacute;chou&eacute;. Veuillez r&eacute;essayer.";
        var ofjh_microsoftauthfailed    = "&Eacute;chec de l&rsquo;authentification Microsoft Authenticator!";
        var ofjh_microsoftauthfailed_first  = "Votre code Microsoft Authenticator a &eacute;chou&eacute;. Veuillez r&eacute;essayer.";
        var ofjh_securityquestionfailed = "&Eacute;chec de l&rsquo;authentification par question de s&eacute;curit&eacute;";
        var ofjh_gridresponsefailed     = "&Eacute;chec de l&rsquo;authentification Grid!";
        var ofjh_blacklist              = "Votre compte a &eacute;t&eacute; suspendu &agrave; titre temporaire en raison d\'un trop grand nombre de tentatives de connexion infructueuses.";
        var ofjh_unknown                = "E-mail ou mot de passe non valable!";
        var ofjh_createaccountnow       = "Voulez-vous créer un compte maintenant?";
        var ofjh_logoffbuttontxt        = "Déconnexion";
        var ofjh_iebug                  = "Connexion impossible suite &agrave; un probl&egrave;me avec Internet Explorer. Utilisez un navigateur plus r&eacute;cent.";
        var bool_gIE                    = false;
        var ofj_from                    = "";
        var ofj_acctsurl                = "/newvault/websiteBackgroundScript.php?fromindex=1&ac=1&lpnorefresh=1&fromwebsite=1&newvault=1&xmlerr=1";
        var ofjh_errortxt1              = "Nous n\'avons pas trouv&eacute; votre compte. Les cookies sont peut-&ecirc;tre d&eacute;sactiv&eacute;s dans votre navigateur. V&eacute;rifiez les r&eacute;glages de votre navigateur et rechargez la page.";
        var ofjh_errortxt2              = "Nous ne pouvons pas r&eacute;cup&eacute;rer votre compte tant que vous n\'avez pas configur&eacute; l\'authentification multifacteur, selon les exigences de votre strat&eacute;gie d\'entreprise.";
        var bool_hasnoextcss            = false;
        var bool_hasnodefaultcss        = false;
        var ofj_urlprepend              = "/";
        var ofj_urlprepend_poll_server  = "https://lastpass.com/";
        var ofj_redirecturl2            = "https://lastpass.com/index.php?&ac=1&lpnorefresh=1&fromwebsite=1&newvault=1&nk=1";
        var ofjh_errordebug             = "D&eacute;tails de l\'erreur: https://lastpass.com/getaccts.php a renvoy&eacute; non connect&eacute;. Essayez d\'y aller directement.";
        var ofj_pluginversion           = "0";
        var ofjh_resetmasterpassword    = "<div class=\"center\"><div style=\"font-size:18px;padding:10px;background:#D32D27;color:#fff;\">Un rappel rapide<\/div><br/><div style=\"width:650px;padding:10px;font-size:14px;font-weight:bold;background:#fff;\"> __REPLACE__ <br/>Pour maintenir la s&eacute;curit&eacute; de votre compte, nous recommandons de le changer.<\/div><br/><table style=\"margin:0 auto;text-align:left;\"><tr><td style=\"font-weight:bold;\">Qu\'est-ce qui rend un mot de passe fort?<\/td><\/tr><tr><td style=\"display:list-item;margin-left:15px;\">Unique: jamais utilis&eacute; ailleurs<\/td><\/tr><tr><td style=\"display:list-item;margin-left:15px;\">Au moins 8 caract&egrave;res<\/td><\/tr><tr><td style=\"display:list-item;margin-left:15px;\">Majuscules et minuscules<\/td><\/tr><tr><td style=\"display:list-item;margin-left:15px;\">Vari&eacute;: Utilise des nombres et des symboles<\/td><\/tr><tr><td style=\"display:list-item;margin-left:15px;\">Peu courant: N\'utilise pas de mots qu\'on trouve dans un dictionnaire<\/td><\/tr><\/table><br/>Si vous avez besoin d\'aide pour cr&eacute;er un mot de passe fort, <b><a target=\"_blank\" href=\"https://lastpass.com/passwordhelp.php\">cliquez ici<\/a><\/b>.<br/><br/><b>Pr&ecirc;t &agrave; mettre &agrave; jour votre mot de passe ma&icirc;tre?<\/b><\/div>";
        var ofjh_reasonchange1          = "Il semble que votre mot de passe ma&icirc;tre LastPass ne soit pas tr&egrave;s fort.";
        var ofjh_reasonchange2          = "Il semble que vous n\'avez pas chang&eacute; votre mot de passe ma&icirc;tre LastPass depuis longtemps.";
        var bool_checkmpstrength        = true;
        var int_minmpstrength           = 75;
        var mfaType                     = null;

        function loginsuccess_loadvault(result, request, rememberemailarg)
        {
          var rememberemail = typeof(rememberemailarg)!="undefined" ? rememberemailarg : false;
          var responsetext  = result.responseText;

          if (typeof(hide_waitbox)=="function")
            hide_waitbox();

          if (responsetext.indexOf("<ok") !== -1)
          {
            close_virtual_keyboard();

            // Test master password strength
            var forceprompt = false;
            if (forceprompt ||
                ((responsetext.indexOf('ch="1"')!==-1 || responsetext.indexOf('oldpassword="1"')!==-1) &&
                 bool_checkmpstrength &&
                 typeof(g_username)!="undefined" && g_username && g_username.length &&
                 typeof(g_porig)!="undefined" && g_porig && g_porig.length))
            {
              var strength = calcStrength(g_username,g_porig);
              if (!isNaN(parseFloat(strength)) && isFinite(strength) && (strength<int_minmpstrength || forceprompt || responsetext.indexOf("oldpassword") > 0))
              {
                hidealldialogs(false);
                var html = ofjh_resetmasterpassword;
                if (responsetext.indexOf("oldpassword") > 0){
                  html = html.replace("__REPLACE__", ofjh_reasonchange2);
                }else{
                  html = html.replace("__REPLACE__", ofjh_reasonchange1);
                }
                lpyesnobox(null,html,
                  function(){
                    // Redirect to password change page
                    window.location.href="/passwordreset.php?fromprompt=1&from=vaultlogininclude&u="+encodeURIComponent(g_uvaltmp);
                  },function(){
                    // Continue with loading the vault
                    bool_checkmpstrength = false;
                    loginsuccess_loadvault(result, request, rememberemailarg);
                  });
                return;
              }
            }

            g_porig = "";
            saveKey(); // needed for backwards compatibility for older plugins

            var re = new RegExp('sessionid="([^"]+)"');
            var m  = re.exec(responsetext);
            if (m && typeof(m[1])!="undefined") {
              g_sessionid = m[1];
            }

            if (!result.authorize_link && responsetext.indexOf('pwresetreqd="1"') !== -1){
              //User needs to reset password.

              var pwreseturl = "/passwordreset.php?from=vaultlogininclude&u="+encodeURIComponent(g_uvaltmp);

              if (responsetext.indexOf('migrated="1"') !== -1) {
                pwreseturl += "&migrated=1";
              }

              window.location.href=pwreseturl;
              return;
            }

            if (!result.authorize_link && responsetext.indexOf('pwresetreqd="2"') !== -1 ){
              //User needs to link personal account

              var pwreseturl = "/passwordreset.php?req=2&u="+encodeURIComponent(g_uvaltmp);

              window.location.href=pwreseturl;
              return;
            }

            var loginextension = true;
            try{
              //If this login only worked with ad, we do not want to tell the extension
              var res = result.responseXML ? result.responseXML.getElementsByTagName("ok") : null;
              if (res && res.length > 0) {
                var redirectUrl = res[0].getAttribute("redirect_url");
                if (redirectUrl) {
                    window.location.href = redirectUrl;
                    return;
                }

                if (res[0].hasAttribute('token')) {
                  g_token = res[0].getAttribute('token');
                }

                if (res[0].hasAttribute('trustuuid')) {
                  var trustuuid = res[0].getAttribute('trustuuid');
                  if (trustuuid && trustuuid != '') {
                      if (g_hasplugin) {
                          send_website_event('setuuid', trustuuid, g_username);
                      } else {
                          localforage.setItem(SHA256(g_username) + '_trust', trustuuid);
                      }
                  }
                }

                if (res[0].getAttribute("adlogin") && res[0].getAttribute("adlogin")==1) {
                  loginextension = false;
                } else if (res[0].getAttribute("skiploginextension") && res[0].getAttribute("skiploginextension")==1) {
                  loginextension = false;
                }

                var newsettings_enabled = res[0].getAttribute('newsettings_enabled');
                if (newsettings_enabled != null && newsettings_enabled == 1) {
                  g_new_settings_enabled = true;
                }

                var nofolder_feature_enabled = res[0].getAttribute('nofolder_feature');
                if (nofolder_feature_enabled != null && nofolder_feature_enabled == 1) {
                  g_nofolder_feature_enabled = true;
                }

                var basicauth_feature_enabled = res[0].getAttribute('basic_auth_enabled');
                if (basicauth_feature_enabled != null && basicauth_feature_enabled == 1) {
                  g_basicauth_feature_enabled = true;
                }

                var privatekeyenc = res[0].getAttribute('privatekeyenc');
                if (privatekeyenc)
                {
                  lp_rsaprivatekeyhex = rsa_extract_privatekey(privatekeyenc, g_local_key);
                  rsaprivatekeyhex = lp_rsaprivatekeyhex;
                  lp_rsaprivatekeyenchex = privatekeyenc;
                }

              }
            }catch(e){}

            // Send Login Success Segment Event
            if (Segment.timeSince('login') > 0) {
              Segment.event('login_success', {
                mfa: mfaType,
                time: Segment.timeSince('login'),
                trackingSessionId: trackingSessionId,
                isReactLoginControl: isReactLoginControl
              });
            }

            // Redirect if needed
            if (ofj_redirecturl!="")
            {
              window.location.href = ofj_redirecturl;
              return;
            }

            if(loginextension){
              send_website_event("login",g_username,AES.bin2hex(g_local_key),"",rememberemail?1:0,g_sessionid);
            }

            if (bool_fromotp)
            {
              return;
            }

            var plugin_ver = null;
            if (bool_hastoolband)
            {
              plugin_ver = "1.27";
              var actualversion = lptoolbandcall("getpluginver");
              if (typeof(actualversion)=="string" && actualversion.length>0)
                plugin_ver = actualversion;
            }

            var re = new RegExp('uid="([^"]+)"');
            var m  = re.exec(responsetext);
            if (m && typeof(m[1])!="undefined")
            {
              var uid = m[1];
              var re = new RegExp('uidhash="([^"]+)"');
              var m  = re.exec(responsetext);
              if (m && typeof(m[1])!="undefined")
              {
                var uidhash = m[1];
                if (g_validatelink)
                {
                  oklink(uid );
                }
                else
                {
                  // Use setTimeout here as we might issue the request and then 0.5sec later the page might be reloaded by the plugin, creating a double request to the server needlessly.
                  setTimeout(function(){reqAccts(plugin_ver,null,uid,uidhash,null,"C");},1000);
                }
              }
            }
            else
            {
              if (g_validatelink)
              {
                // problem - we shouldn't get here with a response that doesn't have a uid
              }
              else
              {
                reqAccts(plugin_ver,null,null,null,null,"D");
              }
            }
          }
          else
          {
            var res = result.responseXML ? result.responseXML.getElementsByTagName("error") : null;
            var error_tag = res && res.length > 0 ? res[0] : null;
            if (res && res.length > 0 && res[0].getAttribute('trustexpired') == 1 && typeof(checkUUID) == 'function') {
              send_website_event("clearuuid", g_username);
              localforage.removeItem(SHA256(g_username) + "_trust");
              send_website_event("getuuid", g_username);
              setTimeout(function(){checkUUID(0);}, 100);
            }

            tempuid = 0;
            if (responsetext.indexOf("tempuid") !== -1)
            {
              tempuid = responsetext.split("tempuid=")[1].split('"')[1];
            }
            if (responsetext.indexOf("sesameotprequired") !== -1)
            {
              close_virtual_keyboard();
              showSesameWindow(error_tag);
              mfaType = 'sesame';
            }
            else if (responsetext.indexOf("sesameotpfailed") !== -1)
            {
              lpmessagebox(null,ofjh_sesameauthfailed,function(){hidedialog();});
            }
            else if (responsetext.indexOf("otprequired") !== -1)
            {
              close_virtual_keyboard();
              showOTPWindow('yubikey', error_tag);
              mfaType = 'yubikey';
            }
            else if (responsetext.indexOf("googleauthrequired") !== -1)
            {
               close_virtual_keyboard();
               showOTPWindow("googleauth", error_tag);
               mfaType = 'googleauth';
            }
            else if (responsetext.indexOf("microsoftauthrequired") !== -1)
            {
               close_virtual_keyboard();
               showOTPWindow("microsoftauth", error_tag);
               mfaType = 'microsoftauth';
            }
            else if (responsetext.indexOf("outofbandrequired") !== -1)
            {
              close_virtual_keyboard();
              var res = result.responseXML ? result.responseXML.getElementsByTagName("error") : null;
              if (res && res.length !== -1) {
                res = res[0];
              } else {
                res = null;
              }
              showOTPWindow("outofband",res);
              if (res) {
                mfaType = res.getAttribute('outofbandtype');
              }
            }
            else if (responsetext.indexOf("securityquestionrequired") !== -1)
            {
              close_virtual_keyboard();
              var res = result.responseXML ? result.responseXML.getElementsByTagName("error") : null;
              if (res && res.length > 0) {
                res = res[0];
              } else {
                res = null;
              }
              showOTPWindow("securityquestion",res);
            }
            else if (responsetext.indexOf("otpfailed") !== -1)
            {
              g_porig = "";
              lpmessagebox(null,ofjh_yubikeyauthfailed,function(){hidedialog();});
            }
            else if (responsetext.indexOf("googleauthfailed") !== -1)
            {
              if (++googleauth_fail_count < 5) {
                //showOTPWindow("googleauth", error_tag);
                lpmessagebox(null, ofjh_googleauthfailed_first);
              } else {
                lpmessagebox(null,ofjh_googleauthfailed,function(){hidedialog();});
                g_porig = "";
                googleauth_fail_count = 0;
              }
            }
            else if (responsetext.indexOf("microsoftauthfailed") !== -1)
            {
              if (++googleauth_fail_count < 5) {
                //showOTPWindow("googleauth", error_tag);
                lpmessagebox(null, ofjh_microsoftauthfailed_first);
              } else {
                lpmessagebox(null,ofjh_microsoftauthfailed,function(){hidedialog();});
                g_porig = "";
                googleauth_fail_count = 0;
              }
            }
            else if (responsetext.indexOf("securityquestionfailed") !== -1)
            {
              lpmessagebox(null,ofjh_securityquestionfailed,function(){hidedialog();});
            }
            else if (responsetext.indexOf("gridresponserequired") !== -1)
            {
              var res = result.responseXML ? result.responseXML.getElementsByTagName("error") : null;
              if (res && res.length > 0 && res[0].getAttribute("challenge")) {
                close_virtual_keyboard();
                showGridWindow(res[0].getAttribute("challenge"), error_tag);
              }
            }
            else if (responsetext.indexOf("iterations") !== -1)
            {
              var res = result.responseXML ? result.responseXML.getElementsByTagName("error") : null;
              if (res && res.length > 0 && res[0].getAttribute("iterations")) {
                get("iterations").value = res[0].getAttribute("iterations");
                get("password").value = g_porig;
                g_donotclearfirsttime = true;
                login();
                return;
              }
            }
            else if (responsetext.indexOf("pbkdf2fallback") !== -1)
            {
              get("password").value = g_porig;
              g_oldpbkdf2 = 1;
              g_donotclearfirsttime = true;
              login();
              return;
            }
            else if(responsetext.indexOf("gridresponsefailed") !== -1)
            {
              lpmessagebox(null,ofjh_gridresponsefailed,function(){hidedialog();document.location.reload(true);});
            }
            else if (responsetext.indexOf("multifactorresponserequired") !== -1)
            {
              var res = result.responseXML ? result.responseXML.getElementsByTagName("error") : null;
              if (res && res.length > 0 && res[0].getAttribute("challenge")) {
                close_virtual_keyboard();
                var hash = "";
                if (res[0].getAttribute("type") == "trueapi") {
                  hash = SHA256(SHA256(fix_username(g_username) + res[0].getAttribute("type")));
                }
                if (hash.length != 64) {
                  send_website_event("multifactorauth", res[0].getAttribute("type"), g_username, "", res[0].getAttribute("challenge"));
                  counter = 0;
                  setTimeout(function(){checkMultifactorAuth();}, 250);
                } else {
                  document.getElementById("eventdata5").value = SHA256(hash + res[0].getAttribute("challenge"));
                  document.getElementById("eventdata3").value = "done";
                  checkMultifactorAuth();
                }
              }
            }
            else if (responsetext.indexOf("multifactorresponsefailed") !== -1)
            {
              var type = null;
              var res = result.responseXML ? result.responseXML.getElementsByTagName("error") : null;
              if (res && res.length > 0) {
                res = res[0];
                type = res.getAttribute("type");
              } else {
                res = null;
              }
              multifactor_response_failed(type, res.getAttribute('message'));
            }
            else if(responsetext.indexOf("blacklist") !== -1)
            {
              g_porig = "";
              lpmessagebox(null,ofjh_blacklist);
            }
            else
            {
              var res = result.responseXML ? result.responseXML.getElementsByTagName("error") : null;
              if (!res || res.length == 0 || res[0].getAttribute('trialavailable') != 1) {
                g_porig = "";
              }

              if (res && res.length > 0 && res[0].getAttribute("deactivated")) {
                window.location.href = "protected.php?email="+encodeURIComponent(g_username);
              }

              if (res && res.length > 0 && res[0].getAttribute("message"))
              {
                if (res[0].getAttribute("cause") && res[0].getAttribute("cause") == "unknownemail")
                {
                  if (confirm(res[0].getAttribute("message") + "\n\n" + ofjh_createaccountnow))
                  {
                     window.location.href = "create_account.php";
                  }
                } else if(res[0].getAttribute("cause") && "wrongserver" == res[0].getAttribute("cause"))  {
                    var domainRegex = RegExp('^https://([^/]+)/?', 'g');
                    var wrongServer = domainRegex.exec(document.location.href)[1];
                    var rightServer = res[0].getAttribute("server");
                    var redirectUrlWithRightServer = document.location.href.split(wrongServer).join(rightServer);
                    document.location.href = redirectUrlWithRightServer;

                } else {
                  if (res[0].getAttribute("openurl"))
                  {
                    document.location.href = res[0].getAttribute("openurl");
                  }
                  else
                  {
                    var title = "";
                    var html  = "<center automation-id='dialogTextContainer'>"+of(res[0].getAttribute("message"))+"</center>";
                    if (res[0].getAttribute("cause")=="loggedinotheraccount")
                    {
                      var okbuttontext = ofjh_logoffbuttontxt;
                      var onclick      = function(){ send_website_event("logoff"); $.ajax({type: "GET", url: "/logout.php", success: function(response){} }); };
                      lpwindow({title:title,html:html,showok:true,showcancel:true,okbuttontext:okbuttontext,onclick:onclick});
                    }
                    else
                    {
                      var custombutton = res[0].getAttribute('custombutton');
                      var customaction = res[0].getAttribute('customaction');
                      if (custombutton && customaction) {
                        var okbuttontext = custombutton;
                        var onclick      = function(){ window.open(customaction); };
                        var o = {title:title,html:html,showok:true,showcancel:true,okbuttontext:okbuttontext,onclick:onclick};
                        if (res[0].getAttribute('trialavailable') == 1) {
                          o.showcustom = true;
                          o.custombuttontext = "D&eacute;marrer un essai";
                          o.customonclick = function() { hidedialog(); document.getElementById('starttrial').value = '1'; document.getElementById("password").value = g_porig; login(); };
                        }
                        lpwindow(o);
                      } else {
                        lpmessagebox(title,html);
                      }
                    }
                  }
                }
              }
              else
              {
                if (bool_gIE)
                {
                  lpmessagebox(null,ofjh_iebug);
                }
                else
                {
                  lpmessagebox(null,ofjh_unknown);
                }
              }
            }
          }
        }

        // Wrapper for reqAccts that takes an object instead of a zillion params
        function reqAcctsOptions(opts)
        {
          reqAccts(opts.plugin_ver,
                   opts.iid,
                   opts.uid,
                   opts.uidhash,
                   opts.extraurl,
                   opts.from,
                   opts.token);
        }

        // g_acctsurlattempt is a hack to work around a yubikey authentication race condition
        // basically, there is some kinda race between when we tell the firefox plugin to refresh windows and when we make a request from the website to accts.php to grab sites
        // that causes the website request to accts.php to fail.  retrying seems to fix things for me.
        var g_acctsurlattempt = 0;
        function reqAccts(plugin_ver, iid, uid, uidhash, extraurl, from, token)
        {
          if (ofj_from=="securitychallenge")
          {
            document.location.href = "index.php?securitychallenge=1";
            return;
          }

          var accts_url = ofj_acctsurl;

          if (plugin_ver && accts_url.indexOf("hasplugin")==-1) {
            accts_url += "&hasplugin=" + encodeURIComponent(plugin_ver);
            g_hasplugin = plugin_ver;
          } else if(g_hasplugin) {
            accts_url += "&hasplugin=1";
          }

          if (typeof(iid)!="undefined" && iid!=null)
            accts_url += "&iid=" + encodeURIComponent(iid);
          if (typeof(extraurl)!="undefined" && extraurl!=null)
            accts_url += extraurl;

          var params = {};
          if (g_sessionid!="")
            params.wxsessid = g_sessionid;
          if(g_username && g_username!="")
            params.username = fix_username(g_username);

          // Useful for debugging multiple requests to accts.php when logging into online vault
          //accts_url += "&attemptnumber=" + encodeURIComponent(g_acctsurlattempt);
          //accts_url += "&codeloc=" + encodeURIComponent(from);

          ++g_acctsurlattempt;
          if (accts_url.indexOf('/newvault/') != -1) {
            if (params.wxsessid)
              accts_url += "&wxsessid=" + encodeURIComponent(params.wxsessid);
            if (params.username)
              accts_url += "&username=" + encodeURIComponent(params.username);

            // prefer token parameter first, then use g_token if it's there.
            // if you don't have a token, vault will not load
            var the_token = token;
            if (!the_token && typeof(g_token) !== 'undefined')
              the_token = g_token;
            if (the_token) {
              accts_url += '&token=' + encodeURIComponent(the_token);
            }

            LPServer.lmiapi.jsonRequest({
              type: 'GET',
              url: 'lmiapi/jstrans',
              success: function (response) {
                translations = response;
                var include=document.createElement('script')
                include.setAttribute("type","text/javascript")
                include.setAttribute("src", accts_url)
                document.getElementsByTagName("body")[0].appendChild(include);
              }
            });
            return;
          }

          Ext.Ajax.request({
            url:     accts_url,
            method:  'POST',
            params:  params,
            success: function(result, request){

              var responsetext  = result.responseText;
              g_acctsurlattempt = 0;
              if (responsetext.indexOf('<result msg="not logged in') !== -1)
              {
                var bodyhtml = "<br/><br/><br/><center>" + ofjh_errortxt1 + " " + ofjh_errordebug + "</center>";
                document.getElementsByTagName("body")[0].innerHTML = bodyhtml;
                return;
              }
              else if (responsetext.indexOf('<result msg="multifactor needed') !== -1)
              {
                var bodyhtml = "<br/><br/><br/><center>" + ofjh_errortxt1 + "</center>";
                document.getElementsByTagName("body")[0].innerHTML = bodyhtml;
                return;
              }

              // Hack to hide black line
              $("#body").css({"border":"0px"});
              try{
                document.body.style.backgroundImage = "none";
                document.body.style.backgroundColor = "#fff";
              }catch(e){}

              if (typeof(uid)!="undefined" && uid!=null && typeof(uidhash)!="undefined" && uidhash!=null)
              {
                setTimeout( function(){
                    loadcss("spriteinclude.php?spriteuid="+encodeURIComponent(uid)+"&spriteuidhash="+encodeURIComponent(uidhash)+"&rand="+encodeURIComponent(Math.floor(Math.random()*1000)));
                }, 10 );
              }

              if (!bool_hasnoextcss)
              {
                loadcss("js/ext/resources/css/ext-all.css");
              }
              if (!bool_hasnodefaultcss)
              {
                loadcss("css/defaultc.css");
              }

              document.getElementsByTagName("body")[0].innerHTML = responsetext;
              scroll(0,0);
              execJS();

              if(typeof(vaultLoaded)=="function"){
               //Can be used by partners to initialize stuff
                vaultLoaded();
              }

              if (typeof(g_pollinterval)!="undefined" && g_pollinterval>0 && typeof(g_polling_setup)=="undefined")
              {
                g_polling_setup = true;

                setInterval(function()
                {
                  Ext.Ajax.request({
                    url: ofj_urlprepend_poll_server+"poll_server.php",
                    success: function(result, request){
                      var res = result.responseXML ? result.responseXML.getElementsByTagName("ok") : null;
                      if (res && res.length > 0) {
                        var accts_version = parseInt(res[0].getAttribute("accts_version"));
                        if (typeof(g_accts_version) != "undefined" && accts_version > g_accts_version)
                        {
                          if ( (typeof(ffwin)=="object" && ffwin && typeof(ffwin.isVisible)=="function" && ffwin.isVisible()) ||
                               (typeof(generatesharingkeyswin)=="object" && generatesharingkeyswin && typeof(generatesharingkeyswin.isVisible)=="function" && generatesharingkeyswin.isVisible()) ||
                               (typeof(bmlwin)=="object" && bmlwin && typeof(bmlwin.isVisible)=="function" && bmlwin.isVisible()) ||
                               (typeof(shwin)=="object" && shwin && typeof(shwin.isVisible)=="function" && shwin.isVisible()) ||
                               (typeof(win)=="object" && win && typeof(win.isVisible)=="function" && win.isVisible()) ||
                               (typeof(g_waitbox)=="object" && g_waitbox && typeof(g_waitbox.isVisible)=="function" && g_waitbox.isVisible()) )
                          {
                            return;
                          }

                          g_searchstr   = document.getElementById("q") ? document.getElementById("q").value : "";
                          g_activetabid = typeof(g_activetab) != "undefined" ? g_activetab.id : "";
                          reqAccts(plugin_ver, iid, uid, uidhash, extraurl, "A");
                        }
                      }
                      else
                      {
                        var error = result.responseXML ? result.responseXML.getElementsByTagName("error") : null;
                        if (error && error.length && error[0].getAttribute("notloggedin") && error[0].getAttribute("notloggedin")==1)
                        {
                          //No longer logged in, refresh page to logout
                          window.location.reload();
                        }
                      }
                    },
                    failure: function(result, request){
                    }
                  });
                }, g_pollinterval * 1000);
              }
              populate_done = false;

              if (typeof(g_dontrunthisfirsttime) != "undefined"){
                var lastsearch = typeof(gLastSearch)!=="undefined" ? gLastSearch : "";
                populate(lastsearch);
              }else{
                g_dontrunthisfirsttime = 1;
              }
            },
            failure: function(result, request){
              if (g_acctsurlattempt<3)
              {
                reqAccts(plugin_ver, iid, uid, uidhash, extraurl, "B");
                return;
              }
              g_acctsurlattempt = 0;
              document.location.href = ofj_redirecturl2;
            }
          });
        }

        if (typeof(g_hasplugin)=="undefined")
        {
          g_hasplugin = ofj_pluginversion;
        }


        var g_uvaltmp = "";
        var g_have_iterations = false;
        var g_validatelink = false;
        function login(donotclearyubikey,donotclearsesame,donotclearlabel, custom_handler, custom_failure_handler)
        {
        try
        {
         var e = g_validatelink ? get("linkusername") : get("email");
         if(get("adlogin").value=="1" && e.value.indexOf("@")==-1 && e.value!=""){
           //Convert the username to full email, at least gives us a chance to create valid key
           get("origusername").value = e.value;
           get("email").value = e.value + "@" + get("domain").value;
         }

         if (typeof getFederatedInfo === "function") {
           getFederatedInfo();
         }

         if (!g_have_iterations) {
           Ext.Ajax.request({
               url: "iterations.php",
               method: "post",
               params: {email: e.value},
               success: function(result, request){
                 get("iterations").value = result.responseText;
                 g_have_iterations = true;
                 login(donotclearyubikey, donotclearsesame, donotclearlabel, custom_handler, custom_failure_handler);
               },
               failure: custom_failure_handler ? custom_failure_handler : function(result, request){
                 hide_waitbox();
                 if( "function" === typeof lpmessagebox ){
                     lpmessagebox( "", "Une erreur est survenue en contactant le serveur LastPass. Veuillez r&eacute;essayer plus tard.");
                 } else {
                     alert("Une erreur est survenue en contactant le serveur LastPass. Veuillez r&eacute;essayer plus tard.");
                 }
               }
           });
           return false;
         }

         if (typeof(donotclearyubikey)=="undefined" || !donotclearyubikey)
         {
           if (!g_donotclearfirsttime)
             get("otp").value = "";
         }
         if (typeof(donotclearsesame)=="undefined" || !donotclearsesame)
         {
           if (!g_donotclearfirsttime)
            get("sesameotp").value = "";
         }
         g_donotclearfirsttime = false;
         if (typeof(donotclearlabel)=="undefined" || !donotclearlabel)
           get("trustlabel").value = "";

        $(e).css({"background":""});
        $(get("password")).css({"background":""});
        var bad = false;
        if (get("password").value=="")
        {
          $(get("password")).css({"background":"#FF9B9D"}).focus();
          bad = true;
        }
        if (e.value=="")
        {
          $(e).css({"background":"#FF9B9D"}).focus();
          bad = true;
        }
        if (bad)
          return;

        if (!custom_handler) {
          if (document.getElementById("outofbandrequest")) {
            document.getElementById("outofbandrequest").value = "0";
          }
          if (document.getElementById("outofbandretry")) {
            document.getElementById("outofbandretry").value = "0";
          }
          show_waitbox();
        } else {
          if (document.getElementById("outofbandrequest")) {
            document.getElementById("outofbandrequest").value = "1";
          }
        }

        var form = get("loginform");
        var re   = get("rememberemail");
        var rememberemail = false;
        if (re) {
          rememberemail = re.checked;
          if (re.checked && typeof(Date)!=="undefined"){
            cookdate = new Date;
            cookdate.setFullYear(cookdate.getFullYear()+1);
            document.cookie = "lpemail=" + encodeURIComponent(e.value) + "; expires=" + (cookdate).toGMTString() + "; path=/; domain=lastpass.com";
          }else{
              document.cookie = "lpemail=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=lastpass.com";
          }
        }
        var u      = get("username");
        u.value    = e.value;
        var p      = get("password");
        var hash   = get("hash");
        var iterations = get("iterations");
        u.value    = fix_username(u.value);

        // Determine migration status
        function createMigrationDataIfRequired(username, password, currentIterations, callback) {
          var defaultIterations = 100100;
          if (parseInt(currentIterations) < defaultIterations && username && username.length > 0 && password && password.length > 0) {
            var key = make_lp_key_iterations(username, password, defaultIterations);
            var hash = make_lp_hash_iterations(key, password, defaultIterations);
            var oldKey = make_lp_key_iterations(username, password, currentIterations);
            var oldKey1 = make_lp_key_iterations(username, password, 1);
            var oldHash = make_lp_hash_iterations(oldKey, password, currentIterations);

            var hash_migrate = {
              algorithm: "pbkdf2",
              data: {
                iterations: defaultIterations,
                key: key,
                hash: hash,
                oldKey: oldKey,
                oldKey1: oldKey1,
                oldHash: oldHash,
              }
            };

            if (typeof callback === "function") {
              LastpassApiHelper.sendLpImprove("pbkdf2_iterations_migration", true);
              callback(hash_migrate);
            }
          }
          else if (typeof callback === "function") {
            callback();
          }
        }

        make_lp_key_iterations(u.value, p.value, iterations.value, function(keyResult) {
          make_lp_hash_iterations(keyResult, p.value, iterations.value, function(hashResult) {
            g_local_key = keyResult;
            hash.value = hashResult;
            g_username  = u.value;
            g_porig     = p.value;
            if(get("adlogin").value=="1" && get("origusername").value!="" && get("origusername").value.indexOf("@")==-1){
              //encrypt
            }else{
              p.value     = "";
            }
            var eu      = get("encrypted_username");
            eu.value    = encecb(u.value);

            if(checkNeedsPBKDF2v2(g_username, g_porig)!=""){
              if(typeof(g_oldpbkdf2)!="undefined" && g_oldpbkdf2==1)
                form.action+="&fallback=1";
              else
                form.action+="&reqpbkdf2v2=1";
            }
            g_uvaltmp = u.value;

            var uuid = get("uuid");
            if (uuid && uuid.value.indexOf("{\"") == 0 && typeof (JSON) != "undefined" && typeof (SHA256) != "undefined") {
                try {
                    var uuids = JSON.parse(uuid.value);
                    var userhash = SHA256(g_username);
                    if (typeof (uuids[userhash]) != "undefined") {
                        uuid.value = uuids[userhash];
                    } else {
                        uuid.value = "Null";
                    }
                } catch (e) {
                    console.error("Error getting uuid", e);
                } finally {
                    doLoginFormSubmit(loginSuccessCheckIfHashMigrationNeeded);
                    return false;
                }
            } else if (uuid && typeof (SHA256) != "undefined" && typeof (localforage) != "undefined") {
                var userhash = SHA256(g_username);
                localforage.getItem(userhash + "_trust", function (error, trustuuid) {
                    if (!error) {
                        uuid.value = trustuuid;
                    } else {
                        uuid.value = "Null";
                    }
                    doLoginFormSubmit(loginSuccessCheckIfHashMigrationNeeded);
                    return false;
                });
            } else {
              doLoginFormSubmit(loginSuccessCheckIfHashMigrationNeeded);
              return false;
            }

            function loginSuccessHashMigrationNotNeeded(result, request) {
              var result = {responseText: result, responseXML: $.parseXML(result)};
              if (custom_handler) {
                custom_handler(result, request);
              }
              else {
                loginsuccess_loadvault(result, request, rememberemail);
              }
            }

            function loginSuccessCheckIfHashMigrationNeeded(result, request) {
              var responseXML = result && $.parseXML(result);
              var pbkdf2_iterations_migration = false;
              var token; // CSRF token
              var res = responseXML ? responseXML.getElementsByTagName("ok") : null;

              if (res && res.length > 0) {
                if (res[0].hasAttribute("pbkdf2_iterations_migration")) {
                  pbkdf2_iterations_migration = res[0].getAttribute("pbkdf2_iterations_migration");
                }
                if (res[0].hasAttribute("token")) {
                  token = res[0].getAttribute("token");
                }
              }

              if (!pbkdf2_iterations_migration) {
                 loginSuccessHashMigrationNotNeeded(result, request);
                 return;
              }

              createMigrationDataIfRequired(g_username, g_porig, iterations.value, function(migrationData) {
                if (migrationData) {
                  var newKey = migrationData.data.key;
                  var newHash = migrationData.data.hash;
                  var newIterations = migrationData.data.iterations;
                  var oldKey1 = migrationData.data.oldKey1;


                  var pwchanger = new PWCHANGER();
                  pwchanger.hashMigration(g_local_key, hash.value, g_username, newKey, newHash, base_url, token, newIterations, function(success, errors) {
                    if (!success) {
                      try {
                        throw new Error("Migration failed, continuing login. " + (errors ? errors : ""));
                      }
                      catch (e) {
                        if (typeof(Raven) !== "undefined") {
                          Raven.captureException(e);
                        }
                        else {
                          console.log(e);
                        }
                      }

                      loginSuccessHashMigrationNotNeeded(result, request);
                      return;

                    }

                    g_local_key = newKey;
                    hash.value = newHash;
                    iterations.value = newIterations;
                    eu.value = encecb(g_username);

                    // Resubmit login form.
                    doLoginFormSubmit(loginSuccessHashMigrationNotNeeded);
                  }, oldKey1);
                }
                else {
                  loginSuccessHashMigrationNotNeeded(result, request);
                }
              });
            }

            function doLoginFormSubmit(successCallback) {
              var request = $.ajax({
                  dataType:"text",
                  type:"POST",
                  cache:false,
                  url:form.action,
                  data:$(form).serialize(),
                  success:successCallback,
                  error:custom_failure_handler ? custom_failure_handler : function(result, request) {
                    g_porig = "";
                    hide_waitbox();
                    if( "function" === typeof lpmessagebox ) {
                      lpmessagebox( "", "Une erreur est survenue en contactant le serveur LastPass. Veuillez r&eacute;essayer plus tard.");
                    }
                    else {
                      alert("Une erreur est survenue en contactant le serveur LastPass. Veuillez r&eacute;essayer plus tard.");
                    }
                  },
              });

              if (custom_handler) {
                g_outofbandrequest = request;
              }
              else if (typeof(g_outofbandrequest) != "undefined") {
                try {
                  g_outofbandrequest.abort();
                }
                catch (e) {
                  console.error(e);
                }
              }
            }
          });
        });

        }
        catch (e) {
         if (typeof Raven !== "undefined") {
           Raven.captureException(e);
         }
         hide_waitbox();
         reportError("Error in login(): " + e.name + ":" + e.message + " ln: " + e.lineNumber);
         return false;
        }
        }

        function checkNeedsPBKDF2v2(u, p){
        for(var i = 0; i < u.length; i++){
          if(u.charCodeAt(i)>127){
            return "&reqpbkdf2v2=1";
          }
        }
        for(var i = 0; i < p.length; i++){
          if(p.charCodeAt(i)>127){
            return "&reqpbkdf2v2=1";
          }
        }
        return "";
        }

        function logout()
        {
        send_website_event("logoff");
        var url = "/logout.php";location.href = url;
        }

        function checkUUID(num)
        {
        var eventdata1 = get("eventdata1");
        var eventdata2 = get("eventdata2");
        if ((eventdata1.value.length>=32 && (typeof(g_username) == "undefined" || eventdata1.value != g_username)) || (eventdata2 && eventdata2.value == "cansetuuid")){
          get("uuid").value = eventdata1.value;
          g_hasplugin = true;
          if (eventdata2 && eventdata2.value == "cansetuuid" && get("cansetuuid")) {
            get("cansetuuid").value = "1";
          }
        } else if (num < 4) {
          num++;
          setTimeout(function() { send_website_event("getuuid", typeof(g_username) != "undefined" ? g_username : ""); }, 50);
          setTimeout(function() { checkUUID(num); }, 250);
        } else {
          g_hasplugin = false;

          get("cansetuuid").value = "1";
          get("uuid").value = "Null";
        }
        }

        function checkMultifactorAuth(){
        if(document.getElementById("eventdata3").value == "done") {
        var multifactorresponse = document.getElementById("eventdata5").value;

        if (typeof(g_fromwebsiteotplogin)!="undefined" && g_fromwebsiteotplogin)
        {
          websiteotplogin_multifactor("multifactorresponse",multifactorresponse,get("lptrust").checked,get("trustname").value);
          return;
        }

        get("multifactorresponse").value = multifactorresponse;
        get("password").value     = g_porig;
        get("trustlabel").value   = ""; // todo
        login(false,true,false);
        } else if (document.getElementById("eventdata3").value == "error") {
        multifactor_response_failed();
        }else{
        counter++;
        if(counter>20 && document.getElementById("eventdata3").value != "working"){
          multifactor_response_failed();
        }else{
          setTimeout(function(){ checkMultifactorAuth(); }, 250);
        }
        }
        }

        function multifactor_response_failed(type, msg)
        {
        if (!msg) {
        msg = "&Eacute;chec de l&rsquo;authentification multifacteur!";
        }
        msg += "\n\nWould you like to disable multifactor authentication?";
        g_porig = "";
        document.getElementById("outofbandretryid").value = "";
        if (confirm(msg)) {
        if (!type) {
          type = document.getElementById("eventdata1").value;
        }
        document.location.href = "multifactordisable.php?cmd=sendemail&username="+encodeURIComponent(document.getElementById("eventdata2").value) + "&type=" + encodeURIComponent(type);
        }
        }
        </script>

        <div style="display: none;">
        <form id="multifactorform" method="POST" autocomplete="off">
        <input type="hidden" name="cmd" value="sendemail"/>
        <input type="hidden" name="token" value="MTYxNTk4NzUxOS4wMzUzLYKAh6oy6KxTI3gCdJEhSANPdzc3VlHdUixV6WlaAFCE"/>
        </form>
        </div>

        <form id="parentform" style="display:none" target="_blank"  autocomplete="off" method="GET"></form><script type="text/javascript" nonce="Degc8N2nTP-D8FTMLkR0d2rcHJ_B1a32mJmTmVTVPEc=">var iframe = document.createElement("iframe");
        iframe.src = "php/blank.php";
        iframe.style.display = "none";
        iframe.style.top = "0px";
        iframe.style.left = "0px";
        iframe.style.position = "absolute";
        iframe.id = "accts";
        document.body.appendChild(iframe);  function childLoaded() {
        //If you close the browser with the vault open, it will come
        //back up with accts.php loaded, which we do not want.
        if(g_local_key==null ||g_local_key==""){
          window.location.reload();
          return;
        }

        var iframe = document.getElementById("accts");
        iframe.contentWindow.g_username = g_username;
        iframe.contentWindow.g_local_key = g_local_key;

        if(iframe.contentWindow.g_local_key.length!=32){
          //alert("Invalid key size. Trying old vault.");
          top.location.href = "/?ac=1&oldvault=1&rand="+Math.random();
          return;
        }

        iframe.contentWindow.g_sessionid = g_sessionid;
        iframe.contentWindow.translations = translations;
        iframe.contentWindow.updated_enc = updated_enc;
        iframe.contentWindow.g_login_site_prompt = g_login_site_prompt;
        iframe.contentWindow.g_edit_site_prompt = g_edit_site_prompt;
        iframe.contentWindow.g_edit_sn_prompt = g_edit_sn_prompt;
        iframe.contentWindow.g_view_pw_prompt = g_view_pw_prompt;
        iframe.contentWindow.g_view_ff_prompt = g_view_ff_prompt;
        iframe.contentWindow.g_switch_identity_prompt = g_switch_identity_prompt;
        iframe.contentWindow.g_switch_f_prompt = g_switch_f_prompt;
        iframe.contentWindow.g_multifactor_reprompt = g_multifactor_reprompt;
        iframe.contentWindow.g_hasplugin = g_hasplugin;
        iframe.contentWindow.g_haspluginrsa = g_haspluginrsa;

        document.getElementById("maintable").style.display = "none";
        document.body.style.borderTop = "0px";
        iframe.style.display = "";
        iframe.contentWindow.vault_onload();
        }</script><script type="text/javascript" src="/m.php/iframe_tracking?1615964431"></script>
        <div style="display:none;">
            <form id="lpwebsiteeventform" name="lpwebsiteeventform" onsubmit=" return false;" autocomplete="off" action="accts.php">
            <input type="hidden" name="eventtype" id="eventtype" value=""/>
        <input type="hidden" name="eventdata1" id="eventdata1" value=""/>
        <input type="hidden" name="eventdata2" id="eventdata2" value=""/>
        <input type="hidden" name="eventdata3" id="eventdata3" value=""/>
        <input type="hidden" name="eventdata4" id="eventdata4" value=""/>
        <input type="hidden" name="eventdata5" id="eventdata5" value=""/>
        <input type="hidden" name="eventdata6" id="eventdata6" value=""/>

                        <input type="submit" name="submitbtn"/>

        </form>

        <script type="text/javascript" nonce="Degc8N2nTP-D8FTMLkR0d2rcHJ_B1a32mJmTmVTVPEc=">
            var form = document.getElementById('lpwebsiteeventform');
            if (typeof(form) != "undefined") {
                form.onsubmit = function() { return false; }
            }
        </script>
        </div>

        <div id="divloading" style="display:none;margin:100px 0 300px 0;text-align:center;">
        <center><h1>Chargement de vos sites...</h1></center>
        </div>

        <form id="loginform" name="loginform" method="post" action="login.php?" onsubmit="return false;" autocomplete="off" target="emptyiframe" style="display: none;">
        <input type="hidden" name="method" value="web">
        <input type="hidden" name="hash" id="hash" value="">
        <input type="hidden" name="xml" id="xml" value="1">
        <input type="hidden" name="adlogin" id="adlogin" value="">
        <input type="hidden" name="username" id="username" value="">
        <input type="hidden" name="authsessionid" id="authsessionid" value="">
        <input type="hidden" name="fullusername" id="fullusername" value="">
        <input type="hidden" name="encrypted_username" id="encrypted_username" value="">
        <input type="hidden" name="otp" id="otp" value="">
        <input type="hidden" name="gridresponse" id="gridresponse" value="">
        <input type="hidden" name="multifactorresponse" id="multifactorresponse" value="">
        <input type="hidden" name="trustlabel" id="trustlabel" value="">
        <input type="hidden" name="uuid" id="uuid" value="">
        <input type="hidden" name="sesameotp" id="sesameotp" value="">
        <input type="hidden" name="lcid" id="lcid" value="">
        <input type="hidden" name="lcidhash" id="lcidhash" value="">
        <input type="hidden" name="domain" id="domain" value="">
        <input type="hidden" name="iterations" id="iterations" value="1">
        <input type="hidden" name="origusername" id="origusername" value="">
        <input type="hidden" name="outofbandsupported" id="outofbandsupported" value="1">
        <input type="hidden" name="outofbandrequest" id="outofbandrequest" value="0">
        <input type="hidden" name="outofbandretry" id="outofbandretry" value="0">
        <input type="hidden" name="outofbandretryid" id="outofbandretryid" value="">
        <input type="hidden" name="starttrial" id="starttrial" value="0">
        <input type="hidden" name="canexpire" id="canexpire" value="1">
        <input type="hidden" name="cansetuuid" id="cansetuuid" value="0">
        <input type="hidden" name="includeprivatekeyenc" id="includeprivatekeyenc" value="1">
        <input type="hidden" name="alpfragmentid" id="alpfragmentid" value="">
        <input type="hidden" name="calculatedfragmentid" id="calculatedfragmentid" value="">
        <input type="hidden" name="issamllogin" id="issamllogin" value="0">



        <div id="divlogin" class="contentframe out_shadow contentwide" style="display:none;margin:50px auto;">
                        <div style="position:relative; padding-top:30px; display:none;" id="mobilelogo"></div>
                    <div style="padding:20px 0;" id="loginwrapper">
                <script type="text/javascript" nonce="Degc8N2nTP-D8FTMLkR0d2rcHJ_B1a32mJmTmVTVPEc=">
                  if (document.getElementById("headermarkup") && document.getElementById("headermarkup").childNodes.length > 1) document.getElementById("headermarkup").childNodes[1].style.display = "none";
                  sendGAEvents();
                </script>

                <div class="nowrap">
                                    <div class="contentheading" style="margin-bottom:32px;">Se connecter pour accéder à LastPass</div>
                    <div class="loginformbox">
                        <div class="loginrow">
                            <div class="labellogin">
                                <label class="loginlabel" for="email"
                                       style="font-weight:bold;font-size:15px;text-align:right!important;margin-right:16px;">Adresse e-mail</label>
                            </div>
                            <input spellcheck="false" id="email" name="email" class="inputtext VK_no_animate" type="text" value="">
                                                </div>
                        <div class="nowrap loginrow" style="margin-top:10px;">
                            <div class="labellogin">
                                <label class="loginlabel" for="password"
                                       style="font-weight:bold;font-size:15px;text-align:right!important;margin-right:16px;">Mot de passe maître</label>
                            </div>
                            <input style="" id="password" name="password" class="inputtext VK_no_animate" type="password" value="">
                            <a style="position:relative;left:-30px;top:-4px;" href="#" id="keyboardlink" onclick="showkeyboard();return false;">
                                <img alt="launch on-screen keyboard" src="/images/keyboard.png">
                            </a>
                        </div>
                    </div>
                    <div class="nowrap" style="margin-top:10px;display:none;" id="capslockwarning">
                        <h2 style="float:left;width:250px;text-align:right;margin:7px 15px 0 0;"></h2>
                        <div style="width:765px;text-align:right;"><span style="padding:5px 10px;color:#FF0000;font-weight:bold;">Le verrouillage de majuscules est actif</span></div>
                    </div>
                    <div id="virtualkeyboard" style="margin: auto; margin-top:10px; display:none;">
                        <div class="simple-keyboard"></div>
                    </div>
                </div>
                <div class="nowrap rememberSignIn">
                    <div class="clearfix" style="position:relative;top:8px;" id="rememberdiv">
                                                <a class="forgotpassword" href="forgot.php" data-gatracking-name="forgotpassword">Mot de passe oublié?</a>
                                            <div class="loginActions">
                            <div class="wrapper--rememberEmail">
                                <input type="checkbox" name="rememberemail" id="rememberemail" checked data-gatracking-name="rememberme"/>
                                <label for="rememberemail" class="muted" id="rememberemaillabel">Mémoriser mon adresse e-mail</label>
                            </div>
                            <a id="buttonsigningo" class="button--login" onclick="startLogin()">Connexion</a>
                        </div>
                    </div>
                    <div id="federatedalert" style="display: none">
                        <img src="images/info_circle_white.svg"/>
                        <div>
                            <p>La connexion fédérée n’est pas activée pour la connexion par le web. <a href="#" id="federated-alert-install-link" style="color:#FFFFFF;">Utilisez l’extension de navigateur LastPass.</a></p>
                        </div>

                    </div>
                </div>
                                <div class="nowrap otherLoginOptions">
                        <div id="bottombar">
                            <p class="forNonLPUsers">Vous découvrez LastPass?</p>
                            <a id="createacctbtn" style="font-weight:bold;" data-gatracking-name="createacctnow"
                               href="create_account.php?fromloginpage=1">Créer un compte maintenant.
                            </a><br/>
                            <div id="mobilebtn" style="margin-top:20px;"><a href="/mobile/">Se connecter par le site mobile
                                </a></div>
                            <div id="otpbtn" style="margin-top:6px;"><a href="otp.php?forcelogin=1" id="otplink" data-gatracking-name="onetimepw">Se connecter avec un mot de passe à usage unique
                                </a></div>
                        </div>
                    </div>
                                    </div>
        </div>
        </form>

        <div id="root"></div>

        <script type="text/javascript" nonce="Degc8N2nTP-D8FTMLkR0d2rcHJ_B1a32mJmTmVTVPEc=">
          try {
            console.log('another window.top reached !')
            // window.top.location.href;
          } catch (e) {
            g_inframe = 1;
            document.getElementById("divlogin").style.display = "none";
          }

          var img = document.createElement("img");
          img.src = "https://" + "\u006c\u0061\u0073\u0074\u0070\u0061\u0073\u0073\u002e\u0063\u006f\u006d" + "/lytics.php";
          img.style.width = "0px";
          img.style.height = "0px";
          document.getElementById("rememberdiv").appendChild(img);

          var isFederated = false;

          function getFederatedInfo() {
            var username = $('#email').val();
            FederatedLogin.isFederated(username, function (isFederated, type) {
              if (isFederated) {
                $('#rememberdiv').hide();
                $('#federatedalert').show();
                $('#password')
                    .attr('disabled', true)
                    .css('background-color', '#e4e4e4');
                $('#keyboardlink').hide();
              } else {
                $('#rememberdiv').show();
                $('#federatedalert').hide();
                $('#password')
                    .attr('disabled', false)
                    .css('background-color', 'white');
                $('#keyboardlink').show();
              }
            });
          }

          $('#email').blur(function() {
            getFederatedInfo();
          });


        </script>

        <iframe id="emptyiframe" name="emptyiframe" src="/php/blank.php" style="display:none;"></iframe>
        </div>
        </div><!-- body-content -->    <footer class="lpp-footer">
            <div class="lpp-footer__language">
        <button class="lpp-footer__language-button" data-gaeventcategory="footer" data-gaeventaction="language-selector">Français</button>
        <ul class="lpp-footer__language-drop">
                        <li><a class="lpp-footer__language-link" href="#" data-language="en-US" data-gaeventcategory="footer" data-gaeventaction="language-English">English</a></li>
                        <li><a class="lpp-footer__language-link" href="#" data-language="de-DE" data-gaeventcategory="footer" data-gaeventaction="language-Deutsch">Deutsch</a></li>
                        <li><a class="lpp-footer__language-link" href="#" data-language="nl-NL" data-gaeventcategory="footer" data-gaeventaction="language-Nederlands">Nederlands</a></li>
                        <li><a class="lpp-footer__language-link" href="#" data-language="fr-FR" data-gaeventcategory="footer" data-gaeventaction="language-Français">Français</a></li>
                        <li><a class="lpp-footer__language-link" href="#" data-language="es-ES" data-gaeventcategory="footer" data-gaeventaction="language-Español">Español</a></li>
                        <li><a class="lpp-footer__language-link" href="#" data-language="it-IT" data-gaeventcategory="footer" data-gaeventaction="language-Italiano">Italiano</a></li>
                        <li><a class="lpp-footer__language-link" href="#" data-language="pt-BR" data-gaeventcategory="footer" data-gaeventaction="language-Português">Português</a></li>
                </ul>
        </div>        <div class="lpp-footer__links">
        <a href="https://www.logmeininc.com/legal/terms-and-conditions" data-gaeventcategory="footer" data-gaeventaction="terms-of-service">Conditions générales</a>
        <a href="https://secure.logmein.com/home/en/policies/privacy/" data-gaeventcategory="footer" data-gaeventaction="privacy-policy">Déclaration de confidentialité</a>
        <a href="https://www.logmeininc.com/legal/trademark" data-gaeventcategory="footer" data-gaeventaction="trademark">Marque déposée</a>
        <a href="https://support.logmeininc.com/lastpass" data-gaeventcategory="footer" data-gaeventaction="support">Assistance</a>
        <span>
            © 2021 LogMeIn, Inc. Tous droits réservés.
        </span>
        </div>    </footer>

        <script type="text/javascript" src="/m.php/quickdl2?1615964431"></script>


        <script type="text/javascript" src="/m.php/langdefjs?1615964431"></script>
        </body></html>
        `);

        // console.log(document.body.innerHTML);

        // const usernameInput = document.querySelector('#root input[name="username"]');
        // console.log(2)
        // const pwdInput = document.querySelector('#root input[name="password"]');
        // console.log(3)
        // usernameInput.value = 'benji';
        // console.log(usernameInput);
        // console.log(4)
        // pwdInput.value = '12345'
        // console.log(5)
    }, 1000);

});
