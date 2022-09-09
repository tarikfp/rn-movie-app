import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { MovieAPI, MovieTypes } from "..";
import { movieDataKeys } from "../key-factory";

export const useGetMoviesByGenreId = (
  genreId: number,
  page: number,
  options?: UseQueryOptions<
    MovieTypes.MovieListResult | undefined,
    Error,
    MovieTypes.MovieListResult | undefined,
    readonly [string, number, number]
  >,
): UseQueryResult<MovieTypes.MovieListResult | undefined, Error> => {
  return useQuery<
    MovieTypes.MovieListResult | undefined,
    Error,
    MovieTypes.MovieListResult | undefined,
    readonly [string, number, number]
  >(
    movieDataKeys.byGenreId(genreId, page),
    () => MovieAPI.getMoviesByGenreId(genreId, page),
    options,
  );
};
