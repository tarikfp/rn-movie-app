import React from "react";
import { TestUtils } from "~utils";
import { default as VoteSection } from "./component";

const props: React.ComponentProps<typeof VoteSection> = {
  voteAverage: 6.54,
  voteCount: 2423,
};

describe("Tests vote section component", () => {
  it("renders vote section correctly", () => {
    const tree = TestUtils.createWithWrappers(<VoteSection {...props} />, {
      hasTheme: true,
      hasSafeAreaProvider: true,
    });

    expect(tree).toMatchSnapshot();
  });
});
