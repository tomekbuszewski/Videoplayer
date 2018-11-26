import * as React from 'react';

import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import VideoWindow from './';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add(
    'VideoWindow',
    withInfo()(() => <VideoWindow />),
  );
