import React from "react";
import { StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "~theme";

type Props = {
  backgroundColor: string;
};

export default function AppStatusBar({ backgroundColor }: Props) {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: backgroundColor ?? theme.colors.transparent,
        height: top,
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.transparent}
        translucent
      />
    </View>
  );
}
