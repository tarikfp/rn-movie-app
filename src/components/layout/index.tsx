import { FlexStyle } from "react-native";
import { styled } from "~theme";

export const FlexCenter = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const RowCenter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ColumnCenter = styled.View`
  align-items: center;
  justify-content: center;
`;

export const GenericView = styled.View<
  FlexStyle & { backgroundColor?: string }
>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.paper};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
`;

export const GenericFlexView = styled.View<
  FlexStyle & { backgroundColor?: string }
>`
  flex: ${(props) => (props.flex ? props.flex : 1)};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.colors.background};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "stretch")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
`;

export const Spacing = styled.View<{
  height: number;
  backgroundColor?: string;
}>`
  height: ${(props) => (props.height ? props.height : 5)}px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.colors.paper};
`;
