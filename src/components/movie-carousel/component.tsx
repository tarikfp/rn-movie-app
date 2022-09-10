import { useNavigation } from "@react-navigation/native";
import { getWindowWidth } from "@tarikfp/react-native-utils";
import React from "react";
import { ListRenderItemInfo } from "react-native";
import { ms } from "react-native-size-matters";
import Carousel from "react-native-snap-carousel";
import styled from "styled-components/native";
import { MovieTypes } from "~api/movie";
import { RouteNames } from "~navigation/route-names";
import { MovieStackScreenProps } from "~navigation/types";

type Props = {
  carouselKey: string;
  autoPlay?: boolean;
  genre: MovieTypes.Genre;
  order: number;
  data: Array<MovieTypes.MovieListItem>;
  renderItem: (
    item: MovieTypes.MovieListItem,
    index: number,
    onPressCarouselItem: () => void,
  ) => React.ReactElement;
};

const SLIDER_AUTO_PLAY_DELAY = 2000;
const SLIDER_AUTO_PLAY_INTERVAL = 1000;

export default function MovieCarousel({
  carouselKey,
  data,
  order,
  autoPlay = false,
  genre,
  renderItem,
}: Props) {
  const [activeItemIndex, setActiveItemIndex] = React.useState<number>(0);
  const navigation =
    useNavigation<MovieStackScreenProps<RouteNames.moveList>["navigation"]>();

  const carouselRef = React.useRef<Carousel<MovieTypes.MovieListItem> | null>(
    null,
  );

  React.useEffect(() => {
    const firstSelectedItemInd = Math.ceil(data.length / 2);
    setActiveItemIndex(firstSelectedItemInd);
  }, [data.length]);

  const onPressCarouselItem = React.useCallback(
    (index: number) => {
      carouselRef.current?.snapToItem(index);

      if (data.length === 1) {
        navigation.navigate(RouteNames.movieDetail, {
          movieId: data[0].id,
          genre,
        });
        return;
      }

      if (index === activeItemIndex) {
        navigation.navigate(RouteNames.movieDetail, {
          movieId: data[index].id,
          genre,
        });
      }
    },
    [activeItemIndex, data, genre, navigation],
  );

  const memoizedRenderItem = React.useCallback(
    ({ index, item }: ListRenderItemInfo<MovieTypes.MovieListItem>) => {
      return renderItem(item, index, () => onPressCarouselItem(index));
    },
    [onPressCarouselItem, renderItem],
  );

  return (
    <CarouselContainer>
      <CategoryText>{genre.name}</CategoryText>
      <Carousel
        key={carouselKey}
        ref={carouselRef}
        autoplay={autoPlay}
        loop={false}
        enableSnap
        autoplayInterval={SLIDER_AUTO_PLAY_INTERVAL * (order + 1)}
        autoplayDelay={SLIDER_AUTO_PLAY_DELAY * (order + 1)}
        layout="default"
        sliderWidth={getWindowWidth(100)}
        itemWidth={ms(180)}
        onSnapToItem={setActiveItemIndex}
        firstItem={activeItemIndex}
        data={data}
        renderItem={memoizedRenderItem}
      />
    </CarouselContainer>
  );
}

const CategoryText = styled.Text`
  color: ${({ theme: { colors } }) => colors.textDark};
  font-size: ${({ theme: { fonts } }) => fonts.h2.fontSize}px;
  font-weight: ${({ theme: { fonts } }) => fonts.h2.fontWeight};
  font-family: ${({ theme: { fonts } }) => fonts.h2.fontFamily};
  margin-bottom: 16px;
`;

const CarouselContainer = styled.View`
  justify-content: space-around;
  align-items: center;
`;
