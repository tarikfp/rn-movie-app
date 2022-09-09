import { TextStyle, ViewStyle } from "react-native";
import "styled-components";

declare module "styled-components/native" {
  export interface DefaultTheme {
    borderRadius: {
      default: string;
      mid: string;
      large: string;
    };
    shadow: {
      default: ViewStyle;
    };
    fonts: {
      h1: TextStyle;
      h2: TextStyle;
      h3: TextStyle;
      p1: TextStyle;
      p2: TextStyle;
      p3: TextStyle;
    };
    colors: {
      primary: string;
      background: string;
      textDark: string;
      textRed: string;
      border: string;
      black: string;
      shadow: string;
      textLight: string;
      border: string;
      disabled: string;
      transparent: string;
      paper: string;
    };
  }
}
