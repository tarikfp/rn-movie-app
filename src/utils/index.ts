import { QueryClient } from "@tanstack/react-query";
import { Alert } from "react-native";
import { MOVIE_API_IMAGE_URL } from "react-native-dotenv";
import { MMKV } from "react-native-mmkv";
import { MovieTypes } from "../api/movie";

// https://developers.themoviedb.org/3/getting-started/images
export const getImageSourceUri = (
  imageUri: string,
  isBackdropImage = false,
  size: "original" | 500 = "original",
) => {
  return `${MOVIE_API_IMAGE_URL}/${
    isBackdropImage ? "w" : ""
  }${size}${imageUri}`;
};

export const initQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        notifyOnChangeProps: "all",
        cacheTime: 600000,
      },
    },
  });

export enum AppStorageKeys {
  // contains list of movies that user has added to the wish list
  // array of movie entries
  USER_WISH_LIST = "user-wish-list",
}

/**
 * mmkv will behave like the app database
 * the stored items will be loaded to the zustand store
 * on app launch
 */
export const appStorage = new MMKV();

export const getWishListMoviesFromStorage = () => {
  const wishListMovies = appStorage.getString(AppStorageKeys.USER_WISH_LIST);
  if (wishListMovies) {
    try {
      const parsedWishListMovieArray = JSON.parse(wishListMovies);
      if (Array.isArray(parsedWishListMovieArray)) {
        return parsedWishListMovieArray as Array<MovieTypes.WishListMovie>;
      }
    } catch {
      Alert.alert("An error occurred while retrieving wish list movies");
    }
  }
};
