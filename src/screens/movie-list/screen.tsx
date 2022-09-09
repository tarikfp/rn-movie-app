import { Icon } from "@tarikfp/react-native-utils";
import * as React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { ms } from "react-native-size-matters";
import { MovieTypes } from "~api/movie";
import { FlexCenter } from "~components/layout";
import { Loader } from "~components/loader";
import MovieCarouselItem from "~components/movie-carousel-item/component";
import MovieCarousel from "~components/movie-carousel/component";
import { AppSafeAreaView } from "~components/safe-area";
import { RouteNames } from "~navigation/route-names";
import { MovieStackScreenProps } from "~navigation/types";
import { theme } from "../../theme";
import { SelectCategoryCount } from "./components";
import { DEFAULT_CATEGORY_TO_DISPLAY_COUNT } from "./constants";
import useMovieListData from "./hooks";

function MovieListScreen({
  navigation,
  route,
}: MovieStackScreenProps<RouteNames.moveList>) {
  const [displayFilter, setDisplayFilter] = React.useState<boolean>(false);
  const [isDrowdownOpen, setDropdownOpen] = React.useState<boolean>(false);
  const [categoryCountToDisplay, setCategoryCountToDisplay] =
    React.useState<number>(DEFAULT_CATEGORY_TO_DISPLAY_COUNT);

  const { moviesByGenreData, isLoading } = useMovieListData(
    categoryCountToDisplay,
  );

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: (props) => (
        <Icon
          {...props}
          color={theme.colors.textLight}
          size={ms(22)}
          onPress={() => setDisplayFilter((prev) => !prev)}
          name={!displayFilter ? "filter" : "filter-remove"}
          type="MaterialCommunityIcons"
          style={{ marginRight: 16 }}
        />
      ),
    });
  }, [displayFilter, navigation]);

  const renderCarouselItem = React.useCallback(
    (
      item: MovieTypes.Result,
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
          order={index}
          carouselKey={genre.name}
          data={results}
          renderItem={renderCarouselItem}
          genreName={genre.name}
        />
      );
    },
    [renderCarouselItem],
  );

  const renderItemSeparatorComponent = React.useCallback(() => {
    return <View style={{ height: 30 }} />;
  }, []);

  if (isLoading) {
    return (
      <FlexCenter>
        <Loader />
      </FlexCenter>
    );
  }

  return (
    <AppSafeAreaView edges={["bottom"]}>
      {displayFilter && (
        <SelectCategoryCount
          categoryCountToDisplay={categoryCountToDisplay}
          isDropdownOpen={isDrowdownOpen}
          setCategoryCountToDisplay={setCategoryCountToDisplay}
          setDropdownOpen={setDropdownOpen}
        />
      )}

      {moviesByGenreData !== undefined && (
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
          data={moviesByGenreData}
          renderItem={renderFlatListItem}
        />
      )}
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
