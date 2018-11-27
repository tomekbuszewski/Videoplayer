import * as React from 'react';
import renderer from 'react-test-renderer';

import PlayPause from '.';

describe('PlayPause tests', () => {
  it('should match snapshot while paused', () => {
    const component = renderer.create(<PlayPause paused onClick={() => false} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot while not paused', () => {
    const component = renderer.create(<PlayPause paused={false} onClick={() => false} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
