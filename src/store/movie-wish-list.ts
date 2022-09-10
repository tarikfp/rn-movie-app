import create from "zustand";
import { MovieTypes } from "../api/movie";
import { appStorage, AppStorageKeys } from "../utils";

export interface MovieWishListStore {
  wishListMovies: Array<MovieTypes.WishListMovie>;
  addMovieToWishList: (movie: MovieTypes.WishListMovie) => void;
  initializeWishListMovies: (movies: Array<MovieTypes.WishListMovie>) => void;
  removeMovieFromWishList: (movieId: number) => void;
}

const useMovieWishListStore = create<MovieWishListStore>((set, get) => ({
  wishListMovies: [],
  initializeWishListMovies: (movies) => {
    set({ wishListMovies: movies });
  },
  addMovieToWishList: (movieEntry) => {
    const updatedWishListMovies = [...get().wishListMovies, movieEntry];

    set({
      wishListMovies: [...get().wishListMovies, movieEntry],
    });

    appStorage.set(
      AppStorageKeys.USER_WISH_LIST,
      JSON.stringify(updatedWishListMovies),
    );
  },
  removeMovieFromWishList: (movieId) => {
    const updatedWishListMovies = get().wishListMovies.filter(
      (wishListMovie) => wishListMovie.id !== movieId,
    );

    set({
      wishListMovies: updatedWishListMovies,
    });

    appStorage.set(
      AppStorageKeys.USER_WISH_LIST,
      JSON.stringify(updatedWishListMovies),
    );
  },
}));

export default useMovieWishListStore;
