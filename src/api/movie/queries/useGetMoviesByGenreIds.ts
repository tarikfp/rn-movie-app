import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { MovieAPI, MovieTypes } from "..";
import { movieDataKeys } from "../key-factory";
import { Genre } from "../types";

export const useGetMoviesByGenreIds = (
  page: number,
  genres: Array<Genre>,
  options?: UseQueryOptions<
    Array<MovieTypes.MoviesByGenre> | undefined,
    Error,
    Array<MovieTypes.MoviesByGenre> | undefined,
    readonly (string | number)[]
  >,
): UseQueryResult<Array<MovieTypes.MoviesByGenre> | undefined, Error> => {
  return useQuery<
    Array<MovieTypes.MoviesByGenre> | undefined,
    Error,
    Array<MovieTypes.MoviesByGenre> | undefined,
    readonly (string | number)[]
  >(
    movieDataKeys.byGenreIds(genres, page),
    () => MovieAPI.getAllMoviesByGenreIds(genres, page),
    options,
  );
};
