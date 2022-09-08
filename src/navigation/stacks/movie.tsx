import { RouteConfig, StackNavigationState } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationEventMap,
  StackNavigationOptions,
} from "@react-navigation/stack";
import * as React from "react";
import { MovieDetailScreen } from "~screens/movie-detail";
import { MovieListScreen } from "~screens/movie-list";
import { RouteNames } from "../route-names";
import { MovieStackParamList } from "../types";

const Stack = createStackNavigator<MovieStackParamList>();

const movieStackRoutesType: Array<
  RouteConfig<
    MovieStackParamList,
    keyof MovieStackParamList,
    StackNavigationState<MovieStackParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >
> = [
  {
    name: RouteNames.moveList,
    component: MovieListScreen as React.ComponentType,
  },
  {
    name: RouteNames.movieDetail,
    component: MovieDetailScreen as React.ComponentType,
  },
];

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={RouteNames.moveList}>
      {movieStackRoutesType.map((routes) => (
        <Stack.Screen key={routes.name} {...routes} />
      ))}
    </Stack.Navigator>
  );
}

export default AuthStack;
