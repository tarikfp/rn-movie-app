import { MOVIE_API_V3_KEY } from "react-native-dotenv";
import movieAxios from "../axios.instance";
import { DEFAULT_LANGUAGE } from "./constants";
import { generateMoviesByGenreIdsUrl } from "./factory";
import {
  Genre,
  MovieDetailEntry,
  MovieGenreListResult,
  MovieListResult,
  MoviesByGenre,
} from "./types";

export const getTopRatedMovies = async (
  page = 1,
  language: string = DEFAULT_LANGUAGE,
) => {
  const searchParams = {
    page: page.toString(),
    language,
    api_key: MOVIE_API_V3_KEY,
  };

  const params = new URLSearchParams(searchParams);

  return (await movieAxios.get<MovieListResult>(`movie/top_rated?${params}`))
    .data;
};

export const getMovieDetailById = async (movieId: number) => {
  return (
    await movieAxios.get<MovieDetailEntry>(
      `movie/${movieId}?api_key=${MOVIE_API_V3_KEY}`,
    )
  ).data;
};

export const getMovieGenreList = async () => {
  return (
    await movieAxios.get<MovieGenreListResult>(
      `genre/movie/list?api_key=${MOVIE_API_V3_KEY}`,
    )
  ).data;
};

export const getMoviesByGenreId = async (genreId: number, page = 1) => {
  const searchParams = {
    sort_by: "popularity.desc",
    page: page.toString(),
    language: DEFAULT_LANGUAGE,
    api_key: MOVIE_API_V3_KEY,
    with_genres: genreId.toString(),
  };

  const params = new URLSearchParams(searchParams);

  return (await movieAxios.get<MovieListResult>(`discover/movie?${params}`))
    .data;
};

export const getAllMoviesByGenreIds = async (
  genres: Array<Genre>,
  page = 1,
): Promise<Array<MoviesByGenre>> => {
  const searchParamsArr = generateMoviesByGenreIdsUrl(
    page,
    genres.map((genre) => genre.id),
  );

  const resolvedMovies = await Promise.all(
    searchParamsArr.map(async (searchParams) => {
      const params = new URLSearchParams(searchParams);
      const movieListData = (
        await movieAxios.get<MovieListResult>(`discover/movie?${params}`)
      ).data;
      // append genre information to final movie list data
      return {
        ...movieListData,
        genre: {
          name:
            genres.find(
              (genre) => genre.id.toString() === searchParams.with_genres,
            )?.name ?? "-",
          id: Number(searchParams.with_genres),
        },
      };
    }),
  );

  return resolvedMovies;
};
