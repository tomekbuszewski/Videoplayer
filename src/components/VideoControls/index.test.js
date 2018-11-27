import * as React from 'react';
import renderer from 'react-test-renderer';

import VideoControls from './';

describe('VideoControls tests', () => {
  it ('should match snapshot', () => {
    const component = renderer.create(<VideoControls />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
