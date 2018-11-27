import * as React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Highlight from '.';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add(
    'Highlight',
    (() => <Highlight
      active
      image="https://www.fillmurray.com/300/200"
      onMouseEnter={() => false}
      onMouseLeave={() => false}
      onClick={() => false}
    />),
  );
