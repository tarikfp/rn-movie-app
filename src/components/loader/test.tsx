import React from "react";
import { TestUtils } from "~utils";
import { default as Loader } from "./component";

describe("Tests loader component", () => {
  it("renders loader correctly", () => {
    const tree = TestUtils.createWithWrappers(<Loader />, {
      hasTheme: true,
    });

    expect(tree).toMatchSnapshot();
  });
});
