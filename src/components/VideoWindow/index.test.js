import * as React from 'react';
import renderer from 'react-test-renderer';

import VideoWindow from './';

describe('VideoWindow tests', () => {
  it ('should match snapshot', () => {
    const component = renderer.create(<VideoWindow />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
