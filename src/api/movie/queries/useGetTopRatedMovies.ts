import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { MovieAPI, MovieTypes } from "..";
import { DEFAULT_LANGUAGE } from "../constants";
import { movieDataKeys } from "../key-factory";

export const useGetTopRatedMovies = (
  page: number,
  options?: UseQueryOptions<
    MovieTypes.MovieListResult | undefined,
    Error,
    MovieTypes.MovieListResult | undefined,
    readonly [string, number, string]
  >,
): UseQueryResult<MovieTypes.MovieListResult | undefined, Error> => {
  return useQuery<
    MovieTypes.MovieListResult | undefined,
    Error,
    MovieTypes.MovieListResult | undefined,
    readonly [string, number, string]
  >(
    movieDataKeys.getTopRated(page, DEFAULT_LANGUAGE),
    () => MovieAPI.getTopRatedMovies(page),
    options,
  );
};
