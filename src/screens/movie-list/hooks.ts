import { Alert } from "react-native";
import { ErrorService } from "~api/error";
import { MovieTypes, useGetMovieGenreList } from "~api/movie";
import { useGetMoviesByGenreIds } from "~api/movie/queries";
import { DEFAULT_PAGE } from "./constants";

export default function useMovieListData({
  categoryCountToDisplay,
  enabled,
}: {
  categoryCountToDisplay: number;
  enabled: boolean;
}) {
  const {
    data: genreListData,
    isSuccess: genreListIsSuccess,
    error: genreListError,
    isLoading: genreListIsLoading,
  } = useGetMovieGenreList({ enabled });

  const {
    data: moviesByGenreData,
    error: moviesByGenreError,
    isLoading: moviesByGenreIsLoading,
  } = useGetMoviesByGenreIds(
    DEFAULT_PAGE,
    (genreListData?.genres as Array<MovieTypes.Genre>)?.slice(
      0,
      categoryCountToDisplay,
    ) ?? [],
    {
      enabled:
        enabled && Array.isArray(genreListData?.genres) && genreListIsSuccess,
    },
  );

  if (moviesByGenreError || genreListError) {
    const error = moviesByGenreError || genreListError;

    if (ErrorService.isBadRequestError(error)) {
      Alert.alert("Error", "Bad request");
    }
    if (ErrorService.isInvalidAPIKeyError(error)) {
      Alert.alert("Error", "Invalid API key");
    }
  }

  const isLoading = moviesByGenreIsLoading || genreListIsLoading;

  return {
    moviesByGenreData,
    isLoading,
    error: moviesByGenreError || genreListError,
  };
}
