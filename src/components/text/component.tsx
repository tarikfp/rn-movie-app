import * as React from "React";
import { DefaultTheme } from "styled-components/native";

export type FontSize =
  | "smallest"
  | "small"
  | "smallMedium"
  | "medium"
  | "large"
  | "xLarge";

const getFont = (
  fontSize: FontSize,
  theme: DefaultTheme,
  fontWeight?: string,
): string => {
  switch (fontSize) {
    case "smallest":
      return `${fontWeight || theme.fonts.p2.fontWeight} ${
        theme.fonts.p2.fontSize
      }px ${theme.fonts.p2.fontFamily}`;
    case "small":
      return `${fontWeight || theme.fonts.p1.fontWeight} ${
        theme.fonts.p1.fontSize
      }px ${theme.fonts.p1.fontFamily}`;
    case "smallMedium":
      return `${fontWeight || theme.fonts.h4.fontWeight} ${
        theme.fonts.h4.fontSize
      }px ${theme.fonts.h4.fontFamily}`;
    case "medium":
      return `${fontWeight || theme.fonts.h3.fontWeight} ${
        theme.fonts.h3.fontSize
      }px ${theme.fonts.h3.fontFamily}`;
    case "large":
      return `${fontWeight || theme.fonts.h2.fontWeight} ${
        theme.fonts.h2.fontSize
      }px ${theme.fonts.h2.fontFamily}`;
    case "xLarge":
      return `${fontWeight || theme.fonts.h1.fontWeight} ${
        theme.fonts.h1.fontSize
      }px ${theme.fonts.h1.fontFamily}`;
    default:
      return `${theme.fonts.h3.fontWeight} ${theme.fonts.h3.fontSize}px ${theme.fonts.h3.fontFamily}`;
  }
};

export default function AppText(
  props: React.PropsWithChildren<GenericTextProps & TextProps>,
) {
  return <StyledText testID={AppTextTestIds.Root} {...props} />;
}

const StyledText = styled.Text<GenericTextProps>`
  font: ${(props) => getFont(props.fontSize, props.theme, props.fontWeight)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : "none"};
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 300)}px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}px;
`;
