import * as React from 'react';

import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Video from '.';

const highlights = [
  {
    time: 100,
    text: 'Lorem ipsum',
  },
  {
    time: 200,
    text: 'Dolor sit',
  },
];

storiesOf('Molecules', module)
  .addDecorator(withKnobs)
  .add('Video', () => (
    <Video
      controls={boolean('Controls', false)}
      src={text('Source', 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4')}
      highlights={highlights}
    />
  ));
