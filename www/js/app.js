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

    'MISC.PAR-3': 'Bli inte förvånad om polisen ljuger eller agerar utanför sina befogenheter. Det brukar de göra. Fota och filma övergrepp, speciellt polisernas hjälmnummer och ansikten.'
  });

  $translateProvider.translations('en', {
    'TITLE': 'BUST CARD',
    'SUBTITLE-1': 'Your Rights, in Sweden',
    'SUBTITLE-2': 'when confronting the police',

    'MISC.TITLE': 'General Advice',

    'MISC.PAR-1': 'Bring some money, your ID and a watch to protests where you risk getting arrested. Leave address books at home. Set a PIN-code on your phone and remember that if you take pictures, they can be used to identify your friends.',

    'MISC.PAR-2': 'You don\'t have to answer any questions asked by the police. Let them prove your guilt and always deny all accusations. In particular, don\'t tell the police who\'s \"in charge\" of a protest, they could be charged with incitement.',

    'MISC.PAR-3': 'Don\'t be surprised if the police lie or act outside of their authority. They usually do. Try to record abuse and the identity of police officers.'
  });

  $translateProvider.preferredLanguage('se');
});
