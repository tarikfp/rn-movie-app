import * as React from "react";
import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from "react-native-safe-area-context";
import styled from "~theme/styled-theme";

type Props = React.PropsWithChildren<NativeSafeAreaViewProps>;

/**
 * @description
 * Custom, overridable, app specific safe area provider component
 * Common props that will be used throughout the app
 * can be set in this custom component to prevent repetition
 */

function AppSafeAreaView({ children, ...props }: Props) {
  return <SafeAreaView {...props}>{children}</SafeAreaView>;
}

const StyledSafeAreaView = styled(AppSafeAreaView)`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

export default StyledSafeAreaView;
