import * as React from "react";
import renderer from "react-test-renderer";

import App from "./";

describe("App tests", () => {
  it ("should match snapshot", () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
