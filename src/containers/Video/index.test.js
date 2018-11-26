import * as React from 'react';
import renderer from 'react-test-renderer';

import Video from './';

describe('Video tests', () => {
  it ('should match snapshot', () => {
    const component = renderer.create(<Video />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
