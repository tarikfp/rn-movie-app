import * as React from "react";
import { Pressable } from "react-native";
import { ms } from "react-native-size-matters";
import { MovieTypes } from "~api/movie";
import { styled } from "~theme";
import { getImageSourceUri } from "~utils";
import { MovieImage } from "../movie-image";
import { VoteSection } from "../vote-section";

export default function MovieCarouselItem(
  props: MovieTypes.MovieListItem & { onPress: () => void },
) {
  return (
    <Pressable onPress={props.onPress}>
      <MovieImage
        height={ms(210)}
        width={ms(180)}
        source={{
          uri: getImageSourceUri(props.backdrop_path),
        }}
      />
      <TitleText>{props.original_title}</TitleText>

      <VoteSection
        voteAverage={props.vote_average}
        voteCount={props.vote_count}
      />
    </Pressable>
  );
}

const TitleText = styled.Text`
  color: ${({ theme: { colors } }) => colors.textDark};
  font-size: ${({ theme: { fonts } }) => fonts.p1.fontSize}px;
  font-weight: ${({ theme: { fonts } }) => fonts.p1.fontWeight};
  font-family: ${({ theme: { fonts } }) => fonts.p1.fontFamily};
  margin-top: 12px;
`;
