import groupBy from "lodash/groupBy";
import { MovieTypes } from "~api/movie";

export const mapWishListMoviesToMovieList = (
  data: Array<MovieTypes.WishListMovie>,
): Array<MovieTypes.MoviesByGenre> => {
  const groupedMovieListByGenre = groupBy(data, (x) => x.genre.name);

  return Object.keys(groupedMovieListByGenre).reduce((prev, curr) => {
    prev.push({
      results: groupedMovieListByGenre[curr],
      genre: groupedMovieListByGenre[curr][0].genre,
    });
    return prev;
  }, [] as Array<MovieTypes.MoviesByGenre>);
};
