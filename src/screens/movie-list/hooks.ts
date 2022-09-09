import { Alert } from "react-native";
import { MovieTypes, useGetMovieGenreList } from "~api/movie";
import { useGetMoviesByGenreIds } from "~api/movie/queries/useGetMoviesByGenreIds";
import { DEFAULT_PAGE } from "./constants";

export default function useMovieListData(categoryToDisplayCount: number) {
  const {
    data: genreListData,
    isError: genreListIsError,
    isSuccess: genreListIsSuccess,
    error: genreListError,
    isLoading: genreListIsLoading,
  } = useGetMovieGenreList();

  const {
    data: moviesByGenreData,
    isError: moviesByGenreIsError,
    error: moviesByGenreError,
    isLoading: moviesByGenreIsLoading,
  } = useGetMoviesByGenreIds(
    DEFAULT_PAGE,
    (genreListData?.genres as Array<MovieTypes.Genre>)?.slice(
      0,
      categoryToDisplayCount,
    ) ?? [],
    {
      enabled: Array.isArray(genreListData?.genres) && genreListIsSuccess,
    },
  );

  if (genreListIsError || moviesByGenreIsError) {
    Alert.alert("Error", "Something went wrong...");
  }

  const isLoading = moviesByGenreIsLoading || genreListIsLoading;

  return { moviesByGenreData, isLoading };
}
