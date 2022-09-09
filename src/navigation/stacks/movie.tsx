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
    options: {
      headerTitle: "Movie list",
    },
  },
  {
    name: RouteNames.movieDetail,
    component: MovieDetailScreen as React.ComponentType,
    options: { headerTitle: "Movie detail" },
  },
];

function MovieStack() {
  return (
    <Stack.Navigator initialRouteName={RouteNames.moveList}>
      {movieStackRoutesType.map((routes) => (
        <Stack.Screen key={routes.name} {...routes} />
      ))}
    </Stack.Navigator>
  );
}

export default MovieStack;
