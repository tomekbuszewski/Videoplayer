import * as React from 'react';
import renderer from 'react-test-renderer';

import { highlights } from '@src/containers/Video/index.stories';

import Timeline from '.';

describe('Timeline tests', () => {
  it('should match snapshot with highlights', () => {
    const component = renderer.create(<Timeline
      duration={100}
      position={0}
      onClick={() => false}
      highlights={highlights}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot without highlights', () => {
    const component = renderer.create(<Timeline
      duration={100}
      position={0}
      onClick={() => false}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
