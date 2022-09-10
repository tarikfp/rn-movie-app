import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { useRef } from "react";
import FlashMessage from "react-native-flash-message";
import { ThemeProvider } from "styled-components";
import { AppSafeAreaProvider } from "./components/safe-area";
import { default as RootNavigator } from "./navigation/root-navigator";
import { MovieStackParamList } from "./navigation/types";
import { default as ErrorBoundary } from "./screens/error-boundary";
import { theme } from "./theme";
import { initQueryClient } from "./utils";
import "./utils/ignore-logs";

const queryClient = initQueryClient();

function App() {
  const navigationRef =
    useRef<NavigationContainerRef<MovieStackParamList>>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppSafeAreaProvider>
          <ErrorBoundary>
            <NavigationContainer ref={navigationRef}>
              <RootNavigator />
            </NavigationContainer>
          </ErrorBoundary>
        </AppSafeAreaProvider>
      </ThemeProvider>
      <FlashMessage position="bottom" />
    </QueryClientProvider>
  );
}

export default App;
