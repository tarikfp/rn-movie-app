export const movieDataKeys = {
  all: ["movie-data"] as const,
  movieGenreList: ["movie-genre-list"] as const,
  getTopRated: (page: number, language: string) =>
    [...movieDataKeys.all, page, language] as const,
  byId: (movieId: number) => [...movieDataKeys.all, movieId] as const,
};
