import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { Alert } from "react-native";
import { MovieAPI, MovieTypes } from "..";
import { ErrorService } from "../../error";
import { movieDataKeys } from "../key-factory";

export const useGetMovieDetailById = (
  movieId: number,
  options?: UseQueryOptions<
    MovieTypes.MovieDetailEntry | undefined,
    Error,
    MovieTypes.MovieDetailEntry | undefined,
    readonly [string, number]
  >,
): UseQueryResult<MovieTypes.MovieDetailEntry | undefined, Error> => {
  return useQuery<
    MovieTypes.MovieDetailEntry | undefined,
    Error,
    MovieTypes.MovieDetailEntry | undefined,
    readonly [string, number]
  >(movieDataKeys.byId(movieId), () => MovieAPI.getMovieDetailById(movieId), {
    ...options,
    onError: (err) => {
      if (err) {
        if (ErrorService.isBadRequestError(err)) {
          Alert.alert("Error", "Bad request");
        }
        if (ErrorService.isInvalidAPIKeyError(err)) {
          Alert.alert("Error", "Invalid API key");
        }
      }
    },
  });
};
