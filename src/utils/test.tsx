/* eslint-disable react/jsx-no-useless-fragment */
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import rerender, { ReactTestRendererJSON } from "react-test-renderer";
import { ThemeProvider } from "styled-components/native";
import { theme } from "~theme";

export default function compose(...funcs: any[]) {
  if (funcs.length === 0) {
    return (arg: any) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(
    (a, b) =>
      (...args: any[]) =>
        a(b(...args)),
  );
}

export function withTheme(children: React.ReactElement): React.ReactElement {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export function withNavigationContainer(
  children: React.ReactElement,
): React.ReactElement {
  return <NavigationContainer>{children}</NavigationContainer>;
}

export function withReactQuery(
  children: React.ReactElement,
): React.ReactElement {
  const queryClient = createTestQueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export function withSafeAreaProvider(
  children: React.ReactElement,
): React.ReactElement {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
}

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        structuralSharing: false,
        retry: false,
      },
    },
  });

export const createWithReactQueryWrapper = () => {
  const queryClient = createTestQueryClient();

  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export type Wrappers = {
  hasTheme?: boolean;
  hasSafeAreaProvider?: boolean;
  hasReactQuery?: boolean;
  hasNavigationContainer?: boolean;
};

const Fragment = (
  children: React.ReactElement | React.ReactNode,
): React.ReactElement => <>{children}</>;

const getComposedProviders = (wrappers?: Wrappers) =>
  compose(
    wrappers?.hasReactQuery ? withReactQuery : Fragment,
    wrappers?.hasTheme ? withTheme : Fragment,
    wrappers?.hasSafeAreaProvider ? withSafeAreaProvider : Fragment,
    wrappers?.hasNavigationContainer ? withNavigationContainer : Fragment,
  );

export function createWithWrappers(
  children: React.ReactElement | React.ReactNode,
  wrappers?: Wrappers,
): null | ReactTestRendererJSON | ReactTestRendererJSON[] {
  return rerender
    .create(
      getComposedProviders(wrappers)(
        children as React.ReactElement,
      ) as React.ReactElement,
    )
    .toJSON();
}

export function withWrappers(
  children: React.ReactElement | React.ReactNode,
  wrappers?: Wrappers,
): React.ReactElement {
  return getComposedProviders(wrappers)(
    children as React.ReactElement,
  ) as React.ReactElement;
}
