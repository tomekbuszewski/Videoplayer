import * as React from 'react';

import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import VideoWindow from '@src/containers/Video';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add('VideoWindow', () => (
    <VideoWindow
      controls={boolean('Controls', false)}
      src={text('Source', 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4')}
    />
  ));
