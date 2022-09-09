// Get all movies by genre ids utils

import { MOVIE_API_V3_KEY } from "react-native-dotenv";
import { DEFAULT_LANGUAGE } from "./constants";

type MoviesByGenreIdsParams = ReturnType<typeof getMoviesByGenreIdsParams>;

export const getMoviesByGenreIdsParams = (page: number, genreId: number) => ({
  sort_by: "popularity.desc",
  page: page.toString(),
  language: DEFAULT_LANGUAGE,
  api_key: MOVIE_API_V3_KEY,
  with_genres: genreId.toString(),
});

export const generateMoviesByGenreIdsUrl = (
  page: number,
  genreIds: Array<number>,
) => {
  return genreIds.reduce((prev, curr) => {
    prev.push(getMoviesByGenreIdsParams(page, curr));
    return prev;
  }, [] as MoviesByGenreIdsParams[]);
};
