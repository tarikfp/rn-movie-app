import { LogBox } from "react-native";

// ignore log from react-native-snap-carousel
LogBox.ignoreLogs([
  "Require cycle:",
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'",
]);
