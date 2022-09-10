import { Icon } from "@tarikfp/react-native-utils";
import * as React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ms } from "react-native-size-matters";
import { MovieTypes } from "~api/movie";
import { FlexCenter } from "~components/layout";
import { Loader } from "~components/loader";
import MovieCarouselItem from "~components/movie-carousel-item/component";
import MovieCarousel from "~components/movie-carousel/component";
import { AppSafeAreaView } from "~components/safe-area";
import { RouteNames } from "~navigation/route-names";
import { MovieStackScreenProps } from "~navigation/types";
import { useMovieWishListStore } from "~store";
import { theme } from "~theme";
import { CarouselActions } from "./components";
import { DEFAULT_CATEGORY_TO_DISPLAY_COUNT } from "./constants";
import * as MovieListHelpers from "./helpers";
import useMovieListData from "./hooks";

/**
 * @description this screen is responsible for displaying movie list data
 * from api and wish list movie list from mmkv/zustand storage
 */
function MovieListScreen({
  navigation,
}: MovieStackScreenProps<RouteNames.moveList>) {
  const [displayFilter, setDisplayFilter] = React.useState<boolean>(false);
  const [autoPlay, setAutoPlay] = React.useState<boolean>(false);

  const [isDrowdownOpen, setDropdownOpen] = React.useState<boolean>(false);

  const [categoryCountToDisplay, setCategoryCountToDisplay] =
    React.useState<number>(DEFAULT_CATEGORY_TO_DISPLAY_COUNT);

  const [shouldRenderWishListMovies, setShouldRenderWishListMovies] =
    React.useState<boolean>(false);

  const wishListMovies = useMovieWishListStore((state) => state.wishListMovies);

  const { moviesByGenreData, isLoading, error } = useMovieListData({
    categoryCountToDisplay,
    enabled: !shouldRenderWishListMovies,
  });

  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: (props) =>
        !shouldRenderWishListMovies ? (
          <Icon
            {...props}
            color={theme.colors.textLight}
            size={ms(22)}
            onPress={() => setDisplayFilter((prev) => !prev)}
            name={!displayFilter ? "filter" : "filter-remove"}
            type="MaterialCommunityIcons"
            style={{ marginLeft: 16 }}
          />
        ) : null,
      headerRight: (props) => (
        <Icon
          {...props}
          color={theme.colors.textLight}
          size={ms(22)}
          onPress={() => setShouldRenderWishListMovies((prev) => !prev)}
          name={shouldRenderWishListMovies ? "heart-remove" : "heart"}
          type="MaterialCommunityIcons"
          style={{ marginRight: 16 }}
        />
      ),
      headerTitle: shouldRenderWishListMovies
        ? "Wish list movies"
        : "Movie list",
    });
  }, [displayFilter, navigation, shouldRenderWishListMovies]);

  const renderCarouselItem = React.useCallback(
    (
      item: MovieTypes.MovieListItem,
      index: number,
      onPressCarouselItem: () => void,
    ) => {
      return <MovieCarouselItem {...item} onPress={onPressCarouselItem} />;
    },
    [],
  );

  const renderFlatListItem = React.useCallback(
    ({
      index,
      item: { genre, results },
    }: ListRenderItemInfo<MovieTypes.MoviesByGenre>) => {
      return (
        <MovieCarousel
          key={genre.id}
          autoPlay={autoPlay}
          order={index}
          carouselKey={genre.name}
          genre={genre}
          data={results}
          renderItem={renderCarouselItem}
        />
      );
    },
    [autoPlay, renderCarouselItem],
  );

  const renderItemSeparatorComponent = React.useCallback(() => {
    return <View style={{ height: 30 }} />;
  }, []);

  if (isLoading && !shouldRenderWishListMovies) {
    return (
      <FlexCenter>
        <Loader />
      </FlexCenter>
    );
  }

  const finalMovieListData = shouldRenderWishListMovies
    ? MovieListHelpers.mapWishListMoviesToMovieList(wishListMovies)
    : moviesByGenreData;

  return (
    <AppSafeAreaView edges={["bottom"]}>
      {displayFilter && !shouldRenderWishListMovies && (
        <CarouselActions
          setAutoPlay={setAutoPlay}
          autoPlay={autoPlay}
          categoryCountToDisplay={categoryCountToDisplay}
          isDropdownOpen={isDrowdownOpen}
          setCategoryCountToDisplay={setCategoryCountToDisplay}
          setDropdownOpen={setDropdownOpen}
        />
      )}

      {finalMovieListData !== undefined ? (
        <FlatList
          bouncesZoom={false}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          removeClippedSubviews
          ItemSeparatorComponent={renderItemSeparatorComponent}
          contentContainerStyle={styles.contentContainer}
          style={styles.flatList}
          initialNumToRender={7}
          maxToRenderPerBatch={8}
          data={finalMovieListData}
          renderItem={renderFlatListItem}
        />
      ) : error ? (
        <FlexCenter>
          <Text>Something went wrong...</Text>
        </FlexCenter>
      ) : null}
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    padding: 16,
  },
  flatList: {
    flex: 1,
  },
});

export default MovieListScreen;
