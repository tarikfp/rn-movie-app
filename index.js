import { NativeModules, Platform } from "react-native";

if (__DEV__) {
  if (Platform.OS === "ios") {
    NativeModules.DevSettings.setIsDebuggingRemotely(true);
  }
}

import "./src";
