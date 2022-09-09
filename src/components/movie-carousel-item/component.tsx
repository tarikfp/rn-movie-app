import { Icon } from "@tarikfp/react-native-utils";
import * as React from "react";
import { Pressable } from "react-native";
import { ms } from "react-native-size-matters";
import { MockMovie } from "~api/mock/movies";
import styled from "~theme/styled-theme";
import { getImageSourceUri } from "~utils";
import { MovieImage } from "../movie-image";

export default function MovieCarouselItem(
  props: MockMovie & { onPress: () => void },
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

      <VoteContainer>
        <Icon
          disabled
          name="star"
          type="MaterialCommunityIcons"
          color="orange"
        />
        <VoteText>
          {" "}
          {props.vote_average}/10 {"  "}({props.vote_count})
        </VoteText>
      </VoteContainer>
    </Pressable>
  );
}

const TitleText = styled.Text`
  color: ${({ theme: { colors } }) => colors.textDark};
  font-size: ${({ theme: { fonts } }) => fonts.p1.fontSize}px;
  font-weight: ${({ theme: { fonts } }) => fonts.p1.fontWeight};
  font-family: ${({ theme: { fonts } }) => fonts.p1.fontFamily};
  margin-top: 6px;
`;

const VoteText = styled.Text`
  color: ${({ theme: { colors } }) => colors.textDark};
  font-size: ${({ theme: { fonts } }) => fonts.p3.fontSize}px;
  font-weight: ${({ theme: { fonts } }) => fonts.p3.fontWeight};
  font-family: ${({ theme: { fonts } }) => fonts.p3.fontFamily};
  margin-top: 6px;
`;

const VoteContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
