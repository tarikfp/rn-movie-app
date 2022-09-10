import { Icon } from "@tarikfp/react-native-utils";
import React from "react";
import { Alert, Pressable, Text } from "react-native";
import { ms } from "react-native-size-matters";
import { useGetMovieDetailById } from "~api/movie";
import { Badge } from "~components/badge";
import {
  FlexCenter,
  GenericFlexView,
  GenericView,
  Spacing,
} from "~components/layout";
import { Loader } from "~components/loader";
import { AppStatusBar } from "~components/status-bar";
import { VoteSection } from "~components/vote-section";
import { RouteNames } from "~navigation/route-names";
import { MovieStackScreenProps } from "~navigation/types";
import { useMovieWishListStore } from "~store";
import { theme } from "~theme";
import { getImageSourceUri } from "~utils";
import * as MovieDetailHelpers from "./helpers";
import {
  MovieImageBackground,
  MovieTitleText,
  SectionDescriptionText,
  SectionTitleText,
  StyledScrollView,
} from "./styles";

const SECTION_SPACING = 15;
const IN_SECTION_SPACING = 10;

export default function MovieDetailScreen({
  navigation,
  route,
}: MovieStackScreenProps<RouteNames.movieDetail>) {
  const [imageLoading, setImageLoading] = React.useState<boolean>(false);

  const { data, isLoading, isError, isSuccess } = useGetMovieDetailById(
    route.params.movieId,
  );

  const wishListMovies = useMovieWishListStore((state) => state.wishListMovies);

  const addMovieToWishList = useMovieWishListStore(
    (state) => state.addMovieToWishList,
  );
  const removeMovieFromWishList = useMovieWishListStore(
    (state) => state.removeMovieFromWishList,
  );

  const isInWishList = wishListMovies.some((movie) => movie.id === data?.id);

  React.useEffect(() => {
    if (isError) {
      navigation.goBack();
      Alert.alert("Error", "Something went wrong");
    }
  }, [isError, navigation]);

  const shouldRenderMovieDetailData = data !== undefined && isSuccess;

  if (isLoading) {
    return (
      <FlexCenter>
        <Loader />
      </FlexCenter>
    );
  }

  return shouldRenderMovieDetailData ? (
    <GenericFlexView backgroundColor={theme.colors.black}>
      <MovieImageBackground
        onLoadStart={() => setImageLoading(true)}
        onLoadEnd={() => setImageLoading(false)}
        source={{ uri: getImageSourceUri(data.poster_path, true, 500) }}>
        <AppStatusBar backgroundColor={theme.colors.transparent} />

        <GenericView
          backgroundColor={theme.colors.transparent}
          paddingHorizontal={8}
          flexDirection="row"
          justifyContent="space-between">
          <Pressable onPress={navigation.goBack}>
            <Icon
              onPress={navigation.goBack}
              name="chevron-left"
              size={ms(36)}
              type="MaterialCommunityIcons"
              color={theme.colors.paper}
            />
          </Pressable>
        </GenericView>
        {imageLoading && <Loader />}
      </MovieImageBackground>

      <GenericFlexView
        style={{
          borderTopLeftRadius: 72,
          borderTopRightRadius: 72,
        }}>
        <StyledScrollView>
          <GenericView
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <MovieTitleText>{data.original_title}</MovieTitleText>
            <Pressable
              onPress={() => {
                if (!isInWishList) {
                  addMovieToWishList({ ...data, genre: route.params.genre });
                } else {
                  removeMovieFromWishList(data.id);
                }
              }}>
              <Icon
                disabled
                {...MovieDetailHelpers.getBookmarkIconByCategory(
                  route.params.genre.name.toLowerCase(),
                  isInWishList,
                )}
              />
            </Pressable>
          </GenericView>

          {data.tagline ? (
            <>
              <Spacing height={IN_SECTION_SPACING} />
              <SectionDescriptionText>{data.tagline}</SectionDescriptionText>
            </>
          ) : null}

          {data.vote_average && data.vote_count ? (
            <>
              <VoteSection
                voteAverage={data.vote_average}
                voteCount={data.vote_count}
              />
              <Spacing height={SECTION_SPACING} />
            </>
          ) : null}

          {data.spoken_languages ? (
            <>
              <SectionTitleText>Languages</SectionTitleText>

              <Spacing height={IN_SECTION_SPACING} />

              <GenericView flexDirection="row" justifyContent="flex-start">
                {data.spoken_languages.map((language) => (
                  <Badge key={language.name} label={language.english_name} />
                ))}
              </GenericView>

              <Spacing height={SECTION_SPACING} />
            </>
          ) : null}

          {data.genres ? (
            <>
              <SectionTitleText>Category</SectionTitleText>

              <Spacing height={IN_SECTION_SPACING} />

              <GenericView
                flexDirection="row"
                justifyContent="flex-start"
                style={{ flexWrap: "wrap" }}>
                {data.genres.map((genre) => (
                  <Badge key={genre.id} label={genre.name} />
                ))}
              </GenericView>

              <Spacing height={SECTION_SPACING} />
            </>
          ) : null}

          {data.release_date ? (
            <>
              <SectionTitleText>Release date</SectionTitleText>

              <Spacing height={IN_SECTION_SPACING} />

              <SectionDescriptionText>
                {data.release_date}
              </SectionDescriptionText>

              <Spacing height={SECTION_SPACING} />
            </>
          ) : null}

          {data.overview ? (
            <>
              <SectionTitleText>Overview</SectionTitleText>

              <Spacing height={IN_SECTION_SPACING} />

              <SectionDescriptionText>{data.overview}</SectionDescriptionText>
            </>
          ) : null}
        </StyledScrollView>
      </GenericFlexView>
    </GenericFlexView>
  ) : (
    <Text>Something went wrong...</Text>
  );
}
