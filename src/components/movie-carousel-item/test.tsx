import React from "react";
import { MOCK_MOVIES } from "~api/mock/movies";
import { TestUtils } from "~utils";
import MovieCarouselItem from "./component";

const props: React.ComponentProps<typeof MovieCarouselItem> = {
  ...MOCK_MOVIES[0],
  onPress: jest.fn(),
};

describe("Tests movie carousel component", () => {
  it("renders movie carousel correctly", () => {
    const tree = TestUtils.createWithWrappers(
      <MovieCarouselItem {...props} />,
      {
        hasTheme: true,
        hasNavigationContainer: true,
      },
    );

    expect(tree).toMatchSnapshot();
  });
});
