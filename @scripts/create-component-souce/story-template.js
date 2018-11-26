module.exports = name => `import * as React from 'react';

import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import ${name} from './';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add(
    '${name}',
    withInfo()(() => <${name} />),
  );
`
;
