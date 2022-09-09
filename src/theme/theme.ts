import { Platform, TextStyle, ViewStyle } from "react-native";
import { ms } from "react-native-size-matters";
import { DefaultTheme } from "styled-components/native";

const theme: DefaultTheme = {
  borderRadius: {
    default: "1px",
    mid: "8px",
    large: "16px",
  },
  colors: {
    primary: "#7C92FF",
    background: "rgba(247, 249, 253, 1)",
    textDark: "rgba(35, 47, 72, 1)",
    textLight: "#8B92AB",
    black: "#000000",
    border: "rgba(0, 0, 0,0.05)",
    shadow: "rgba(45, 97, 185, 0.04)",
    disabled: "rgba(119, 161, 243, 0.1)",
    paper: "#FFFFFF",
    textRed: "rgba(253, 81, 95, 1)",
    transparent: "#00000000",
  },
  shadow: {
    default: {
      ...Platform.select<ViewStyle>({
        android: {
          shadowColor: "#A09AA5",
          elevation: 4,
        },
        ios: {
          shadowColor: "rgba(45, 97, 185, 0.04)",
          shadowOffset: {
            width: 3,
            height: 4,
          },
          shadowOpacity: 1.25,
          shadowRadius: 1,
        },
      }),
    },
  },
  fonts: {
    h1: {
      ...Platform.select<TextStyle>({
        ios: {
          fontFamily: "Poppins-SemiBold",
          fontSize: ms(24),
          lineHeight: ms(28),
          fontWeight: "500",
        },
        android: {
          fontFamily: "Poppins-SemiBold",
          fontSize: ms(24),
          lineHeight: ms(28),
          fontWeight: "500",
        },
      }),
    },
    h2: {
      ...Platform.select<TextStyle>({
        ios: {
          fontFamily: "Poppins-Medium",
          fontSize: ms(19),
          lineHeight: ms(24),
          fontWeight: "500",
        },
        android: {
          fontFamily: "Poppins-Medium",
          fontSize: ms(19),
          lineHeight: ms(24),
          fontWeight: "500",
        },
      }),
    },
    h3: {
      ...Platform.select<TextStyle>({
        ios: {
          fontFamily: "Poppins-Regular",
          fontSize: ms(18),
          lineHeight: ms(24),
          fontWeight: "400",
        },
        android: {
          fontFamily: "Poppins-Regular",
          fontSize: ms(18),
          lineHeight: ms(24),
          fontWeight: "400",
        },
      }),
    },
    p1: {
      ...Platform.select({
        ios: {
          fontFamily: "Poppins-Light",
          fontSize: ms(16),
          lineHeight: ms(22),
          fontWeight: "400",
        },
        android: {
          fontFamily: "Poppins-Light",
          fontSize: ms(16),
          lineHeight: ms(22),
          fontWeight: "400",
        },
      }),
    },
    p2: {
      ...Platform.select({
        ios: {
          fontFamily: "Poppins-Light",
          fontSize: ms(14),
          lineHeight: ms(20),
          fontWeight: "400",
        },
        android: {
          fontFamily: "Poppins-Light",
          fontSize: ms(14),
          lineHeight: ms(20),
          fontWeight: "400",
        },
      }),
    },
    p3: {
      ...Platform.select({
        ios: {
          fontFamily: "Poppins-Light",
          fontSize: ms(12),
          lineHeight: ms(18),
          fontWeight: "400",
        },
        android: {
          fontFamily: "Poppins-Medium",
          fontSize: ms(12),
          lineHeight: ms(18),
          fontWeight: "400",
        },
      }),
    },
  },
};

export type Theme = typeof theme;
export { theme };
