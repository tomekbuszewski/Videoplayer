import * as React from 'react';
import renderer from 'react-test-renderer';

import GenericButton from './';

describe('GenericButton tests', () => {
  it ('should match snapshot', () => {
    const component = renderer.create(<GenericButton />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
