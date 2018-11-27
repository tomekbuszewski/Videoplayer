import * as React from 'react';
import renderer from 'react-test-renderer';

import { highlights } from '@src/containers/Video/index.stories';

import VideoControls from '.';

describe('VideoControls tests', () => {
  it('should match snapshot with highlights', () => {
    const component = renderer.create(<VideoControls
      duration={100}
      highlights={highlights}
      muted
      paused
      position={30}

      togglePlay={() => false}
      toggleMute={() => false}
      setPlayback={() => false}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot without highlights', () => {
    const component = renderer.create(<VideoControls
      duration={100}
      muted
      paused
      position={30}

      togglePlay={() => false}
      toggleMute={() => false}
      setPlayback={() => false}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
