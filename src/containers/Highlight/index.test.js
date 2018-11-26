import * as React from 'react';
import renderer from 'react-test-renderer';

import Highlight from './';

describe('Highlight tests', () => {
  it ('should match snapshot', () => {
    const component = renderer.create(<Highlight />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
