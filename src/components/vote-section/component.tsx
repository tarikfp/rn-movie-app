import { Icon } from "@tarikfp/react-native-utils";
import * as React from "react";
import { styled } from "~theme";

type Props = {
  voteAverage: number;
  voteCount: number;
};
export default function VoteSection({ voteAverage, voteCount }: Props) {
  return (
    <VoteContainer>
      <Icon disabled name="star" type="MaterialCommunityIcons" color="orange" />
      <VoteText>
        {" "}
        {voteAverage.toFixed(2)}/10 {"  "}({voteCount} reviews)
      </VoteText>
    </VoteContainer>
  );
}

const VoteText = styled.Text`
  color: ${({ theme: { colors } }) => colors.textDark};
  font-size: ${({ theme: { fonts } }) => fonts.p3.fontSize}px;
  font-weight: ${({ theme: { fonts } }) => fonts.p3.fontWeight};
  font-family: ${({ theme: { fonts } }) => fonts.p3.fontFamily};
`;

const VoteContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;
`;
