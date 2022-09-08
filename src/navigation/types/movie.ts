import { StackScreenProps } from "@react-navigation/stack";
import { RouteNames } from "../route-names";

// Movie stack
export type MovieStackParamList = {
  [RouteNames.moveList]: undefined;
  [RouteNames.movieDetail]: { movieId: number };
};

export type MovieStackScreenProps<T extends keyof MovieStackParamList> =
  StackScreenProps<MovieStackParamList, T>;
