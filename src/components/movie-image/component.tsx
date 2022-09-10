import * as React from "react";
import FastImage, { FastImageProps } from "react-native-fast-image";
import { styled } from "~theme";

type Props = FastImageProps & {
  height: number;
  width: number;
};

function MovieImage(props: Props) {
  return (
    <Shadow>
      <FastImage {...props} />
    </Shadow>
  );
}

export const StyledMovieImage = styled(MovieImage).attrs<Props, Props>(
  (props) => ({
    resizeMode: FastImage.resizeMode.cover,
    height: props.height,
    width: props.width,
  }),
)<Props>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  shadow-opacity: 0.75;
  shadow-radius: 5px;
  border-radius: 12px;
  shadow-offset: 0px 0px;
  elevation: 1;
`;

const Shadow = styled.View`
  shadow-color: ${({ theme: { colors } }) => colors.black};
  shadow-opacity: 0.8;
  shadow-offset: 1px 3px;
  shadow-radius: 2px;
  elevation: 2;
`;
