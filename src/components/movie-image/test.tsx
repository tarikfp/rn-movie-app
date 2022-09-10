import React from "react";
import { MOCK_MOVIES } from "~api/mock/movies";
import { getImageSourceUri, TestUtils } from "~utils";
import { StyledMovieImage as MovieImage } from "./component";

const props: React.ComponentProps<typeof MovieImage> = {
  height: 210,
  width: 180,
  source: {
    uri: getImageSourceUri(MOCK_MOVIES[0].backdrop_path),
  },
};

describe("Tests movie image component", () => {
  it("renders movie image correctly", () => {
    const tree = TestUtils.createWithWrappers(<MovieImage {...props} />, {
      hasTheme: true,
    });

    expect(tree).toMatchSnapshot();
  });
});
