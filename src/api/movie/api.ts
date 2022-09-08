import movieAxios from "../axios.instance";
import { MovieEntry, MovieGenreListResult, TopRatedMovieResult } from "./types";

export const DEFAULT_LANGUAGE = "en-US";

export const getTopRatedMovies = async (
  page = 1,
  language: string = DEFAULT_LANGUAGE,
) => {
  const searchParamsObj = { page: page.toString(), language };

  const params = new URLSearchParams(searchParamsObj);

  return (
    await movieAxios.get<TopRatedMovieResult>(`movie/top_rated?${params}`)
  ).data;
};

export const getMovieDetailById = async (movieId: number) => {
  return (await movieAxios.get<MovieEntry>(`movie/${movieId}`)).data;
};

export const getMovieGenreList = async () => {
  return (await movieAxios.get<MovieGenreListResult>(`genre/movie/list`)).data;
};
