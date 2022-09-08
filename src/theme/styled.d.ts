import { StyleProp, TextStyle, ViewStyle } from "react-native";
import "styled-components";

declare module "styled-components/native" {
  export interface DefaultTheme {
    borderRadius: {
      default: string;
      mid: string;
      large: string;
    };
    shadow: {
      default: StyleProp<ViewStyle>;
    };
    fonts: {
      h1: StyleProp<TextStyle>;
      h2: StyleProp<TextStyle>;
      h3: StyleProp<TextStyle>;
      p1: StyleProp<TextStyle>;
      p2: StyleProp<TextStyle>;
      p3: StyleProp<TextStyle>;
    };
    colors: {
      primary: string;
      background: string;
      textDark: string;
      textRed: string;
      textLight: string;
      borderColor: string;
      disabled: string;
      transparent: string;
      paper: string;
    };
  }
}
