import React from "react";
import { TestUtils } from "~utils";
import { default as StatusBar } from "./component";

const props: React.ComponentProps<typeof StatusBar> = {
  backgroundColor: "#ffffff",
};

describe("Tests app status bar component", () => {
  it("renders app status bar correctly", () => {
    const tree = TestUtils.createWithWrappers(<StatusBar {...props} />, {
      hasTheme: true,
      hasSafeAreaProvider: true,
    });

    expect(tree).toMatchSnapshot();
  });
});
