import * as React from "react";
import { useMovieWishListStore } from "../store";
import { getWishListMoviesFromStorage } from "../utils";
import { MovieStack } from "./stacks";

function RootNavigator() {
  /**
   * @description
   * set wish list movies stored in mmkv to the zustand
   */
  const initializeWishListMovies = useMovieWishListStore(
    (state) => state.initializeWishListMovies,
  );

  React.useEffect(() => {
    const wishListMovies = getWishListMoviesFromStorage();
    if (wishListMovies) {
      initializeWishListMovies(wishListMovies);
    }
  }, [initializeWishListMovies]);

  return <MovieStack />;
}

export default RootNavigator;
