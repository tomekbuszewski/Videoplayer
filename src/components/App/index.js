/**
 * @author tomekbuszewski
 * @since 2018-11-26
 */

import * as React from 'react';
import inject from 'react-jss';

import styles from './index.styles';

const App = () => (
  <div>Hello</div>
);

export default inject(styles)(App);
