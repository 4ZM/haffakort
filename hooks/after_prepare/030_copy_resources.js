#!/usr/bin/env node

// From:
// http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/
// This hook copies various resource files
// from our version control system directories
// into the appropriate platform specific location

var filestocopy = [{
  'resources/android/res/drawable/icon.png':
  'platforms/android/res/drawable/icon.png'
}, {
  'resources/android/res/drawable-hdpi/icon.png':
  'platforms/android/res/drawable-hdpi/icon.png'
}, {
  'resources/android/res/drawable-ldpi/icon.png':
  'platforms/android/res/drawable-ldpi/icon.png'
}, {
  'resources/android/res/drawable-mdpi/icon.png':
  'platforms/android/res/drawable-mdpi/icon.png'
}, {
  'resources/android/res/drawable-xhdpi/icon.png':
  'platforms/android/res/drawable-xhdpi/icon.png'
}, {
  'resources/android/res/drawable-xxhdpi/icon.png':
  'platforms/android/res/drawable-xxhdpi/icon.png'
}, {
  'resources/android/res/drawable/splash.png':
  'platforms/android/res/drawable/splash.png'
}, {
  'resources/android/res/drawable-hdpi/splash.png':
  'platforms/android/res/drawable-hdpi/splash.png'
}, {
  'resources/android/res/drawable-ldpi/splash.png':
  'platforms/android/res/drawable-ldpi/splash.png'
}, {
  'resources/android/res/drawable-mdpi/splash.png':
  'platforms/android/res/drawable-mdpi/splash.png'
}, {
  'resources/android/res/drawable-xhdpi/splash.png':
  'platforms/android/res/drawable-xhdpi/splash.png'
}, {
  'resources/ios/Resources/icons/icon-72.png':
  'platforms/ios/YourAppName/Resources/icons/icon-72.png'
}, {
  'resources/ios/Resources/icons/icon.png':
  'platforms/ios/YourAppName/Resources/icons/icon.png'
}, {
  'resources/ios/Resources/icons/icon@2x.png':
  'platforms/ios/YourAppName/Resources/icons/icon@2x.png'
}, {
  'resources/ios/Resources/icons/icon-72@2x.png':
  'platforms/ios/YourAppName/Resources/icons/icon-72@2x.png'
}, {
  'resources/ios/Resources/splash/Default@2x~iphone.png':
  'platforms/ios/YourAppName/Resources/splash/Default@2x~iphone.png'
}, {
  'resources/ios/Resources/splash/Default-568h@2x~iphone.png':
  'platforms/ios/YourAppName/Resources/splash/Default-568h@2x~iphone.png'
}, {
  'resources/ios/Resources/splash/Default~iphone.png':
  'platforms/ios/YourAppName/Resources/splash/Default~iphone.png'
}, {
  'resources/ios/Resources/splash/Default-Portrait~ipad.png':
  'platforms/ios/YourAppName/Resources/splash/Default-Portrait~ipad.png'
}, {
  'resources/ios/Resources/splash/Default-Portrait@2x~ipad.png':
  'platforms/ios/YourAppName/Resources/splash/Default-Portrait@2x~ipad.png'
}, ];

var fs = require('fs');
var path = require('path');

// no need to configure below
var rootdir = process.argv[2];

filestocopy.forEach(function(obj) {
  Object.keys(obj).forEach(function(key) {
    var val = obj[key];
    var srcfile = path.join(rootdir, key);
    var destfile = path.join(rootdir, val);
    //console.log('copying '+srcfile+' to '+destfile);
    var destdir = path.dirname(destfile);
    if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
      fs.createReadStream(srcfile).pipe(fs.createWriteStream(destfile));
    }
  });
});
