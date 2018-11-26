import * as React from 'react';

import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Video from '.';

const highlights = [
  {
    time: 100,
    caption: 'Lorem ipsum',
  },
  {
    time: 200,
    caption: 'Dolor sit',
    image: 'https://www.fillmurray.com/300/200',
  },
];

storiesOf('Molecules', module)
  .addDecorator(withKnobs)
  .add('Video', () => (
    <Video
      controls={boolean('Controls', false)}
      src={text('Source', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4')}
      highlights={highlights}
    />
  ));
