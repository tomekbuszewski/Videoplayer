import * as React from 'react';
import renderer from 'react-test-renderer';

import Timeline from './';

describe('Timeline tests', () => {
  it ('should match snapshot', () => {
    const component = renderer.create(<Timeline />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
