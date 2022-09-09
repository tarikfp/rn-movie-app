import { getWindowWidth } from "@tarikfp/react-native-utils";
import React from "react";
import { ListRenderItemInfo } from "react-native";
import { ms } from "react-native-size-matters";
import Carousel from "react-native-snap-carousel";
import styled from "styled-components/native";
import { MovieTypes } from "~api/movie";

type Props = {
  carouselKey: string;
  // programatically auto play sliders if needed
  autoPlay?: boolean;
  genreName: string;
  order: number;
  data: Array<MovieTypes.Result>;
  renderItem: (
    item: MovieTypes.Result,
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
  genreName,
  renderItem,
}: Props) {
  const carouselRef = React.useRef<Carousel<MovieTypes.Result> | null>(null);

  const onPressCarouselItem = React.useCallback((index: number) => {
    carouselRef.current?.snapToItem(index);
  }, []);

  const memoizedRenderItem = React.useCallback(
    ({ index, item }: ListRenderItemInfo<MovieTypes.Result>) => {
      return renderItem(item, index, () => onPressCarouselItem(index));
    },
    [onPressCarouselItem, renderItem],
  );

  return (
    <CarouselContainer>
      <CategoryText>{genreName}</CategoryText>
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
        firstItem={data.length / 2}
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
