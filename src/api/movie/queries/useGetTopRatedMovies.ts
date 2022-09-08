import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { MovieAPI, MovieTypes } from "..";
import { DEFAULT_LANGUAGE } from "../api";
import { movieDataKeys } from "../key-factory";

export const useGetTopRatedMovies = (
  page: number,
  options?: UseQueryOptions<
    MovieTypes.TopRatedMovieResult | undefined,
    Error,
    MovieTypes.TopRatedMovieResult | undefined,
    readonly [string, number, string]
  >,
): UseQueryResult<MovieTypes.TopRatedMovieResult | undefined, Error> => {
  return useQuery<
    MovieTypes.TopRatedMovieResult | undefined,
    Error,
    MovieTypes.TopRatedMovieResult | undefined,
    readonly [string, number, string]
  >(
    movieDataKeys.getTopRated(page, DEFAULT_LANGUAGE),
    () => MovieAPI.getTopRatedMovies(page),
    options,
  );
};
