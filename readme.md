# Planning Poker

A basic planning poker app for Android, created using [Iconic](https://ionicframework.com/) & [Angular 5](https://angular.io/)

<p align="center">
  <a href="https://play.google.com/store/apps/details?id=com.stebakerdev.planningpokerionic">
    <img src="https://cdn.jsdelivr.net/gh/steverichey/google-play-badge-svg/img/en_get.svg" width="50%">
  </a>
</p>

## Setup 
Install ionic and cordova:
- `npm install -g @ionic/cli`
- `npm i -g cordova`

## Running locally (via browser)
`npm run ionic:serve`

## Running locally (via emulator)
This assumes you have previously installed the ionic CLI and an Android Virtual Device:
`ionic cordova run android`


## Target newer versions of Android SDK
Re-install the cordova android platform: 
- ionic cordova platform rm android
- ionic cordova platform add android

or target the version specificly in config.xml:
`<preference name="android-targetSdkVersion" value="29" />`

## Deployment process

Manually update the `android-versionCode` and `version` in `config.xml`

Build an APK: 
- ionic cordova build --release android

Sign and verify the APK:
- jarsigner.exe -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $myKeyStore $myApk my-key
- zipalign.exe -v 4 $myApk $myApkZipped
- apksigner verify $myApk

## Upload to Play Store
- Create a new version using Play Console using a Alpha/Beta channel
- Upload APK
- Promote the release to Production once you're happy with the new version 

## Resources 
- [ionicons](https://ionicframework.com/docs/v3/ionicons/)
- [Ionic v3 docs](https://ionicframework.com/docs/v3/)