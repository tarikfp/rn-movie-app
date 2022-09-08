import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { MovieAPI, MovieTypes } from "..";
import { movieDataKeys } from "../key-factory";

export const useGetMovieGenreList = (
  options?: UseQueryOptions<
    MovieTypes.MovieGenreListResult | undefined,
    Error,
    MovieTypes.MovieGenreListResult | undefined,
    readonly [string]
  >,
): UseQueryResult<MovieTypes.MovieGenreListResult | undefined, Error> => {
  return useQuery<
    MovieTypes.MovieGenreListResult | undefined,
    Error,
    MovieTypes.MovieGenreListResult | undefined,
    readonly [string]
  >(movieDataKeys.movieGenreList, MovieAPI.getMovieGenreList, options);
};
