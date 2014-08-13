#!/bin/bash

cordova build --release android

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore haffakort.keystore platforms/android/ant-build/Haffakort-release-unsigned.apk haffakort

rm -f Haffakort.apk
zipalign -v 4 platforms/android/ant-build/Haffakort-release-unsigned.apk Haffakort.apk
