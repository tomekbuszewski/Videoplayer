/**
 * @flow
 * @author tomekbuszewski
 * @since 2018-11-26
 */

import * as React from 'react';
import inject from 'react-jss';

import styles from './index.styles';

const Highlight = ({ classes }) => (
  <button>Hello</button>
);

export default inject(styles)(Highlight);
