import { NativeModules, Platform } from "react-native";
import "./src";

if (__DEV__) {
  if (Platform.OS === "ios") {
    NativeModules.DevSettings.setIsDebuggingRemotely(false);
  }
}
