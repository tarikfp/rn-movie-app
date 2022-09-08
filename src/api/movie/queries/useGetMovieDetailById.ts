import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { MovieAPI, MovieTypes } from "..";
import { movieDataKeys } from "../key-factory";

export const useGetMovieDetailById = (
  movieId: number,
  options?: UseQueryOptions<
    MovieTypes.MovieEntry | undefined,
    Error,
    MovieTypes.MovieEntry | undefined,
    readonly [string, number]
  >,
): UseQueryResult<MovieTypes.MovieEntry | undefined, Error> => {
  return useQuery<
    MovieTypes.MovieEntry | undefined,
    Error,
    MovieTypes.MovieEntry | undefined,
    readonly [string, number]
  >(
    movieDataKeys.byId(movieId),
    () => MovieAPI.getMovieDetailById(movieId),
    options,
  );
};
