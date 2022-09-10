import { getWindowWidth } from "@tarikfp/react-native-utils";
import { ImageBackgroundProps, ScrollViewProps } from "react-native";
import { styled } from "~theme";

export const StyledScrollView = styled.ScrollView.attrs<
  unknown,
  Omit<ScrollViewProps, "refreshControl" | "accessibilityRole">
>((props) => ({
  showsVerticalScrollIndicator: false,
  bouncesZoom: props.bouncesZoom ? props.bouncesZoom : false,
  bounces: props.bounces ? props.bounces : false,
  style: {
    flex: 1,
    backgroundColor: props.theme.colors.paper,
  },
  contentContainerStyle: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: props.theme.colors.paper,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
}))<Omit<ScrollViewProps, "refreshControl" | "accessibilityRole">>``;

export const MovieTitleText = styled.Text`
  color: ${({ theme: { colors } }) => colors.textDark};
  max-width: ${getWindowWidth(75)}px;
  font-size: ${({ theme: { fonts } }) => fonts.h2.fontSize}px;
  font-weight: ${({ theme: { fonts } }) => fonts.h2.fontWeight};
  font-family: ${({ theme: { fonts } }) => fonts.h2.fontFamily};
`;

export const SectionDescriptionText = styled.Text`
  color: ${({ theme: { colors } }) => colors.textDark};
  font-size: ${({ theme: { fonts } }) => fonts.p3.fontSize}px;
  font-weight: ${({ theme: { fonts } }) => fonts.p3.fontWeight};
  font-family: ${({ theme: { fonts } }) => fonts.p3.fontFamily};
`;

export const SectionTitleText = styled.Text`
  color: ${({ theme: { colors } }) => colors.textDark};
  font-size: ${({ theme: { fonts } }) => fonts.p1.fontSize}px;
  font-weight: ${({ theme: { fonts } }) => fonts.p1.fontWeight};
  font-family: ${({ theme: { fonts } }) => fonts.p1.fontFamily};
`;

export const MovieImageBackground = styled.ImageBackground.attrs<
  ImageBackgroundProps,
  Omit<Partial<ImageBackgroundProps>, "accessibilityRole">
>((_props) => ({
  resizeMode: "cover",
  imageStyle: {
    opacity: 0.7,
  },
}))<ImageBackgroundProps>`
  flex: 0.6;
`;
