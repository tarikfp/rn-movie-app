import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";
import { AppSafeAreaProvider } from "./components/safe-area";
import { default as RootNavigator } from "./navigation/root-navigator";
import { MovieStackParamList } from "./navigation/types";
import { default as ErrorBoundary } from "./screens/error-boundary";
import { theme } from "./theme";

function App() {
  const navigationRef =
    useRef<NavigationContainerRef<MovieStackParamList>>(null);

  return (
    <ThemeProvider theme={theme}>
      <AppSafeAreaProvider>
        <ErrorBoundary>
          <NavigationContainer ref={navigationRef}>
            <RootNavigator />
          </NavigationContainer>
        </ErrorBoundary>
      </AppSafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
