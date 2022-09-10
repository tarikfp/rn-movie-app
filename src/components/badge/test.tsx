import React from "react";
import { TestUtils } from "~utils";
import Badge from "./component";

describe("Tests badge component", () => {
  it("renders badge correctly", () => {
    const tree = TestUtils.createWithWrappers(<Badge label="test" />, {
      hasTheme: true,
    });

    expect(tree).toMatchSnapshot();
  });
});
