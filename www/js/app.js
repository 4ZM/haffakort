angular.module('haffa', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
