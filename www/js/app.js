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
    'UNORDERLY.TITLE': 'Störande av den allmänna ordningen',
    'UNORDERLY.PRE': 'Du har enligt grundlagen rätt att demonstrera och utöva mötes- och yttrande-frihet. Det gäller även motdemonstrationer. Om aktiviteterna anses störande av den allmänna ordningen (eller hotar att bli det) kan polisen ingripa på följande vis:',
    'UNORDERLY.DISMISS.SUBTITLE': 'Avvisa:',
    'UNORDERLY.DISMISS': 'Polisen beordrar dig att lämna platsen eller ger inte tillträde till en viss plats (PL13).',
    'UNORDERLY.REMOVE.SUBTITLE': 'Avlägsna:',
    'UNORDERLY.REMOVE': 'Polisen för bort dig handgripligen, kortvarigt och en kort sträcka. Polisen får visitera dig för att leta efter vapen eller ta reda på vem du är (PL13).',

    'UNORDERLY-2.TITLE': 'Störande (forts.)',
    'UNORDERLY-2.DETAIN.SUBTITLE': 'Omhänderta:',
    'UNORDERLY-2.DETAIN': 'Polisen för bort dig till en polisstation eller till ditt hem. Detta kan de göra ifall de anser att avvisa eller avlägsna inte är tillräckligt (PL13). Du har alltid rätt att få veta varför du blir omhändertagen (PL15). Vid omhändertagande enligt PL13 får du sitta max 6 timmar, men skall bli släppt direkt efter förhör (PL16).',
    'UNORDERLY-2.MASSREMOVAL.SUBTITLE': 'Bussning:',
    'UNORDERLY-2.MASSREMOVAL': 'Om en folkmassa stör den allmänna ordningen kan polisen göra ett utvidgat avlägsnande (PL13c). Då samlar polisen ihop en hel grupp personer och kör iväg er i buss, ofta långt bort. Polisen måste släppa er två timmar efter att ni frihetsberövats.',

    'PL24.TITLE': 'PL24 område',
    'PL24.WHAT?': 'Polisen kan avgränsa ett område och hindra folk från att komma in där, eller ställa upp särskilda villkor för att en skall få komma in på området. Ett sådant villkor kan vara att du måste identifiera dig. Polisen kan göra ett PL24-område kring ex. en demonstration som de tror kommer att bli attackerad.',
    'PL24.TRANSGRESSION': 'Om du försöker ta dig in på området ändå kan polisen avlägsna dig och ditt försök kan också vara brottsligt (ohörsamhet mot ordningsmakten).',

    'DISGUISE.TITLE': 'Maskering',
    'DISGUISE': 'Maskering är att täcka ansiktet med syfte att försvåra identifiering. Det finns ett förbud mot maskering men det gäller bara då det har, eller precis håller på att uppstå en ordningsstörning i en demonstration eller folksamling på allmän plats. Polisen skall uppge när förbudet har börjat gälla. Det är inte olagligt att bara ha maskering med sig.'
  });

  $translateProvider.translations('en', {
    'TITLE': 'BUST CARD',
    'SUBTITLE-1': 'Your Rights, in Sweden',
    'SUBTITLE-2': 'when confronted by the police',

    'MISC.TITLE': 'General Advice',

    'MISC.PAR-1': 'Bring some money, your ID and a watch to protests where you risk getting arrested. Leave address books at home. Set a PIN-code on your phone and remember that if you take pictures, they can be used to identify your friends.',

    'MISC.PAR-2': 'You don\'t have to answer any questions asked by the police. Let them prove your guilt and always deny all accusations. In particular, don\'t tell the police who\'s \"in charge\" of a protest, they could be charged with incitement.',

    'MISC.PAR-3': 'Don\'t be surprised if the police lie or act outside of their authority. They usually do. Try to record abuse and the identity of police officers.',

    'UNORDERLY.TITLE': 'Unorderly Conduct',
    'UNORDERLY.PRE': 'The Swedish constitution grants you the right to protest and excises free speech. These right also apply to counter protests. It the situation is, or is about to become, unorderly, the police can intervene in the following ways:',
    'UNORDERLY.DISMISS.SUBTITLE': 'Dismiss:',
    'UNORDERLY.DISMISS': 'The police orders you to leave a place or won\'t let you enter some location (PL13).',
    'UNORDERLY.REMOVE.SUBTITLE': 'Remove:',
    'UNORDERLY.REMOVE': 'The police can move you against your will, a short distance and for a short time. They may search you to look for weapons and to try to identify you (PL13).',

    'UNORDERLY-2.TITLE': 'Unorderly (cont.)',
    'UNORDERLY-2.DETAIN.SUBTITLE': 'Detain:',
    'UNORDERLY-2.DETAIN': 'If the police think that dismissing you is not sufficient, they can take you to a police station or to your home (PL13). You have the right to know why you are being removed (PL15). The police may hold you for at most 6 hours, but they shall release you directly after questioning (PL16).',
    'UNORDERLY-2.MASSREMOVAL.SUBTITLE': 'Mass removal:',
    'UNORDERLY-2.MASSREMOVAL': 'If a crowd acts unorderly, the police may conduct an \'extended removal\' (PL13c). The police will then round you up, put you on a buss and drive you a significant distance. The police may not hold you for more than 2 hours.',

    'PL24.TITLE': 'PL24 Area',
    'PL24.WHAT?': 'The police may restrict access to an area and prevent people from entering it or stipulate conditions for entering the area. A common condition is that you identify yourself. The police can eg. declare a PL24 area around a protest they think might be attacked.',
    'PL24.TRANSGRESSION': 'If you try to enter a PL24 area the police can remove you. Your action might also be criminal (failure to comply with the police).',

    'DISGUISE.TITLE': 'Covering your Face',
    'DISGUISE': 'In Sweden you are generally allowed to cover your face to prevent being identified. However, if a protest or crowd acts unorderly, or is about to start acting unorderly, you are no longer allowed to cover your face. The police must inform the crowd of this new condition. Simply carrying around stuff to cover your face with is never illegal'
  });

  $translateProvider.preferredLanguage('se');
});
