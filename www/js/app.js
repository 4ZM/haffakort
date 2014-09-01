var haffa = angular.module('haffa', ['ionic', 'pascalprecht.translate']);

haffa.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

haffa.controller('HaffaCtrl', function ($scope, $translate) {
  $scope.key = 'se';

  $scope.changeLanguage = function (key) {
    $scope.key = key;
    $translate.use(key);
  };
});

haffa.config(function ($translateProvider) {
  $translateProvider.translations('se', {
    'TITLE': 'HAFFAKORT',
    'SUBTITLE-1': 'Dina rättigheter',
    'SUBTITLE-2': '– när polisen kommer',

    'MISC.TITLE': 'Allmänna tips',

    'MISC.PAR-1': 'Det är bra att ha pengar, ID och klocka på sig om man blir gripen. Lämna adressböcker och liknande hemma. Kom ihåg att ha pin-kod på mobiltelefonen och att bilder från din kamera kan användas för att identifiera dina kamrater.',

    'MISC.PAR-2': 'Du behöver inte svara på frågor som polisen ställer, varken som kallprat eller i förhör. Låt polisen bevisa din skuld och neka alltid till alla anklagelser. Peka aldrig ut någon kamrat som ansvarig för en aktion. Den personen riskerar att betraktas som anstiftare.',

    'MISC.PAR-3': 'Bli inte förvånad om polisen ljuger eller agerar utanför sina befogenheter. Det brukar de göra. Fota och filma övergrepp, speciellt polisernas hjälmnummer och ansikten.',
    'DISORDERLY.TITLE': 'Störande av den allmänna ordningen',
    'DISORDERLY.PRE': 'Du har enligt grundlagen rätt att demonstrera och utöva mötes- och yttrande-frihet. Det gäller även motdemonstrationer. Om aktiviteterna anses störande av den allmänna ordningen (eller hotar att bli det) kan polisen ingripa på följande vis:',
    'DISORDERLY.DISMISS.SUBTITLE': 'Avvisa:',
    'DISORDERLY.DISMISS': 'Polisen beordrar dig att lämna platsen eller ger inte tillträde till en viss plats (PL13).',
    'DISORDERLY.REMOVE.SUBTITLE': 'Avlägsna:',
    'DISORDERLY.REMOVE': 'Polisen för bort dig handgripligen, kortvarigt och en kort sträcka. Polisen får visitera dig för att leta efter vapen eller ta reda på vem du är (PL13).',

    'DISORDERLY-2.TITLE': 'Störande (forts.)',
    'DISORDERLY-2.DETAIN.SUBTITLE': 'Omhänderta:',
    'DISORDERLY-2.DETAIN': 'Polisen för bort dig till en polisstation eller till ditt hem. Detta kan de göra ifall de anser att avvisa eller avlägsna inte är tillräckligt (PL13). Du har alltid rätt att få veta varför du blir omhändertagen (PL15). Vid omhändertagande enligt PL13 får du sitta max 6 timmar, men skall bli släppt direkt efter förhör (PL16).',
    'DISORDERLY-2.MASSREMOVAL.SUBTITLE': 'Bussning:',
    'DISORDERLY-2.MASSREMOVAL': 'Om en folkmassa stör den allmänna ordningen kan polisen göra ett utvidgat avlägsnande (PL13c). Då samlar polisen ihop en hel grupp personer och kör iväg er i buss, ofta långt bort. Polisen måste släppa er två timmar efter att ni frihetsberövats.',

    'PL24.TITLE': 'PL24 område',
    'PL24.WHAT?': 'Polisen kan avgränsa ett område och hindra folk från att komma in där, eller ställa upp särskilda villkor för att en skall få komma in på området. Ett sådant villkor kan vara att du måste identifiera dig. Polisen kan göra ett PL24-område kring ex. en demonstration som de tror kommer att bli attackerad.',
    'PL24.TRANSGRESSION': 'Om du försöker ta dig in på området ändå kan polisen avlägsna dig och ditt försök kan också vara brottsligt (ohörsamhet mot ordningsmakten).',

    'DISGUISE.TITLE': 'Maskering',
    'DISGUISE': 'Maskering är att täcka ansiktet med syfte att försvåra identifiering. Det finns ett förbud mot maskering men det gäller bara då det har, eller precis håller på att uppstå en ordningsstörning i en demonstration eller folksamling på allmän plats. Polisen skall uppge när förbudet har börjat gälla. Det är inte olagligt att bara ha maskering med sig.',

    'QUESTIONING.TITLE': 'Förhör',
    'QUESTIONING.PAR-1': 'Vid förhör får förhörsledaren inte använda sig av lögner, löften, hot eller tvång. Den förhörde har rätt till sedvanliga måltider och nödvändig vila. Du har rätt att ta med dig ett förhörsvittne (tex en kamrat eller släkting) om detta kan ske utan att utredningen skadas.',
    'QUESTIONING.PAR-2': 'Du behöver inte uppge annat än namn, personnummer och adress under förhör. För att inte göra det lättare för polisen att sätta dit dig eller dina kamrater är det alltid bäst att svara "ingen kommentar" på alla frågor. Om du struntar i att komma på ett förhör du blivit kallad till kan polisen hämta dig. Det är dock inget brott att utebli från förhör.',

    'ARREST.TITLE': 'Anhållande & häktning',
    'ARREST.QUESTIONING': 'Är du intagen till förhör får polisen hålla kvar dig i högst 6 timmar. Är du misstänkt för ett brott kan du hållas ytterligare 6 timmar. Är du under 15 år gäller högst 3 resp. 6 timmar. Därefter måste du släppas eller anhållas.',
    'ARREST.ATTORNEY': 'Som anhållen eller misstänkt för ett brott som ger minst 6 månader i fängelse har du alltid rätt till offentlig försvarare. Begär det direkt.',
    'ARREST.TIMES': 'Anhållen kan du vara som längst 4 dygn. Därefter måste du släppas eller häktas. Häktad kan man vara i princip hur länge som helst. Blir du anhållen eller häktad, begär att få läsa Lagen om behandling av häktade och anhållna.',

    'ABOUT.TITLE': 'Om haffa-appen',
    'ABOUT.WHO?': 'Vi i förbundet Allt åt alla har gjort den här appen och vi hoppas att du får nytta av den. Texten är en bearbetning av tidigare haffakort från Vänsterjuristerna.',
    'ABOUT.BITE': 'Kom ihåg att lagen skrivs av människor med makt, vars intressen sällan sammanfaller med dina. Polisen är till för att skydda dem, inte dig.'

  });

  $translateProvider.translations('en', {
    'TITLE': 'BUST CARD',
    'SUBTITLE-1': 'Your Rights, in Sweden',
    'SUBTITLE-2': 'when facing the police',

    'MISC.TITLE': 'General Advice',

    'MISC.PAR-1': 'Bring some money, your ID and a watch to protests where you risk getting arrested. Leave address books at home. Set a PIN-code on your phone and remember that if you take pictures, they can be used to identify your friends.',

    'MISC.PAR-2': 'You don\'t have to answer any questions asked by the police. Let them prove your guilt and always deny all accusations. In particular, don\'t tell the police who\'s \"in charge\" of a protest, they could be charged with incitement.',

    'MISC.PAR-3': 'Don\'t be surprised if the police lie or act outside of their authority. They usually do. Try to record abuse and the identity of police officers.',

    'DISORDERLY.TITLE': 'Disorderly Conduct',
    'DISORDERLY.PRE': 'The Swedish constitution grants you the right to protest and excises free speech. These right also apply to counter protests. It the situation is, or is about to become, disorderly, the police can intervene in the following ways:',
    'DISORDERLY.DISMISS.SUBTITLE': 'Dismiss:',
    'DISORDERLY.DISMISS': 'The police orders you to leave a place or won\'t let you enter some location (PL13).',
    'DISORDERLY.REMOVE.SUBTITLE': 'Remove:',
    'DISORDERLY.REMOVE': 'The police can move you against your will, a short distance and for a short time. They may search you to look for weapons and to try to identify you (PL13).',

    'DISORDERLY-2.TITLE': 'Disorderly (cont.)',
    'DISORDERLY-2.DETAIN.SUBTITLE': 'Detain:',
    'DISORDERLY-2.DETAIN': 'If the police thinks that dismissing you is not sufficient, they can take you to a police station or to your home (PL13). You have the right to know why you are being removed (PL15). The police may hold you for at most 6 hours, but they shall release you directly after questioning (PL16).',
    'DISORDERLY-2.MASSREMOVAL.SUBTITLE': 'Mass removal:',
    'DISORDERLY-2.MASSREMOVAL': 'If a crowd acts disorderly, the police may conduct an "extended removal" (PL13c). The police will then round you up, put you on a buss and drive you a significant distance. The police may not hold you for more than 2 hours.',

    'PL24.TITLE': 'PL24 Area',
    'PL24.WHAT?': 'The police may restrict access to an area and prevent people from entering it or stipulate conditions for entering the area. A common condition is that you must identify yourself. The police can eg. declare a PL24 area around a protest they think might be attacked.',
    'PL24.TRANSGRESSION': 'If you try to enter a PL24 area the police can remove you. Your action might also be criminal (failure to comply with the police).',

    'DISGUISE.TITLE': 'Covering your Face',
    'DISGUISE': 'In Sweden you are generally allowed to cover your face to prevent being identified. However, if a protest or crowd acts disorderly, or is about to start acting disorderly, you are no longer allowed to cover your face. The police must inform the crowd of this new condition. Simply carrying around stuff to cover your face with is never illegal.',

    'QUESTIONING.TITLE': 'Questioning',
    'QUESTIONING.PAR-1': 'The police questioning you can not lie, make promises, threats or use force. You have the right to get food and reasonable periods of rest. You have the right to bring a friend or relative as an interrogation witness if it won\'t hurt the investigation.',
    'QUESTIONING.PAR-2': 'You only have to state your name, your personal identity number (if you have one) and current address. Always answer "no comment" to any other questions to protect yourself and your friends. If you don\'t show up for an interrogation that you have been summoned to the police might come to pick you up, but it\'s not a crime.',

    'ARREST.TITLE': 'Arrest & Remand',
    'ARREST.QUESTIONING': 'If you are held for questioning the police must release you after 6 hours. If you are suspected of a crime, they can hold you for another 6 hours. If you are younger than 15, the limits are 3 and 6 hours. After this period they must arrest you or let you go.',
    'ARREST.ATTORNEY': 'If you are suspected of a crime that can result in 6 months jail time or more, you have the right to a public attorney. Ask for it straight away.',
    'ARREST.TIMES': 'You can be remanded in custody ("anhållen") for at most 4 days, after this the police must release you or continue to hold you as "häktad". There is no upper limit on how long you can remain "häktad". ',

    'ABOUT.TITLE': 'About the App',
    'ABOUT.WHO?': 'This app is published by Allt Åt Alla with much of it\'s contents borrowed from older bust cards by Vänsterjuristerna.',
    'ABOUT.BITE': 'Remember that the law is written by people in power, whose interests usually are opposite of yours. The police exist to protect them, not you.'
  });

  $translateProvider.preferredLanguage('se');
});
