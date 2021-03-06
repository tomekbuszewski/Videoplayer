import * as React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import GenericButton from '.';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add(
    'GenericButton',
    (() => <GenericButton
      active
      activeState="active"
      inactiveState="inactive"
      onClick={() => false}
    />),
  );
