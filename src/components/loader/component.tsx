import * as React from "react";
import { ActivityIndicatorProps, Platform } from "react-native";
import { ms } from "react-native-size-matters";
import styled from "~theme/styled-theme";

type Props = Pick<ActivityIndicatorProps, "size" | "color">;

export default function Loader({ color, size }: Props) {
  return (
    <StyledActivityIndicator
      animating
      color={(color as string) ?? ""}
      {...Platform.select({
        ios: { size: size ?? "large" },
        android: { size: size ?? ms(26) },
      })}
    />
  );
}

const StyledActivityIndicator = styled.ActivityIndicator.attrs(
  ({ theme: { colors } }) => ({
    color: colors.primary,
  }),
)``;
