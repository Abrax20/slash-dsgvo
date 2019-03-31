#!/bin/bash
if ($ios)
  then
    react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios
  else
    if ($android)
      then
        cd android && ./gradlew assembleRelease
        cd ..
      else
        react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios
        cd android && ./gradlew assembleRelease
        cd ..
    fi
fi
