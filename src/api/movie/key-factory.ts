import { Genre } from "./types";

export const movieDataKeys = {
  all: ["movie-data"] as const,
  movieGenreList: ["movie-genre-list"] as const,
  getTopRated: (page: number, language: string) =>
    [...movieDataKeys.all, page, language] as const,
  byId: (movieId: number) => [...movieDataKeys.all, movieId] as const,
  byGenreId: (genreId: number, page: number) =>
    [...movieDataKeys.all, genreId, page] as const,
  byGenreIds: (genres: Array<Genre>, page: number) =>
    [...movieDataKeys.all, ...genres.map((genre) => genre.id), page] as const,
};
