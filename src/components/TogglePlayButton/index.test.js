import * as React from 'react';
import renderer from 'react-test-renderer';

import PlayPause from './';

describe('PlayPause tests', () => {
  it ('should match snapshot', () => {
    const component = renderer.create(<PlayPause />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
