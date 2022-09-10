import { StackScreenProps } from "@react-navigation/stack";
import { MovieTypes } from "~api/movie";
import { RouteNames } from "../route-names";

// Movie stack
export type MovieStackParamList = {
  [RouteNames.moveList]: { isWishList?: boolean };
  [RouteNames.movieDetail]: { movieId: number; genre: MovieTypes.Genre };
};

export type MovieStackScreenProps<T extends keyof MovieStackParamList> =
  StackScreenProps<MovieStackParamList, T>;
