import * as React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Highlight from './';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add(
    'Highlight',
    (() => <Highlight />),
  );
