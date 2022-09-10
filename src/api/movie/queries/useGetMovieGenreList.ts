import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import * as MovieAPI from "../api";
import { movieDataKeys } from "../key-factory";
import * as MovieTypes from "../types";

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
  >(movieDataKeys.movieGenreList, () => MovieAPI.getMovieGenreList(), options);
};
