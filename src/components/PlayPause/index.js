/**
 * @flow
 * @author tomekbuszewski
 * @since 2018-11-26
 */

import * as React from 'react';
import inject from 'react-jss';

import styles from './index.styles';

type Props = {
  classes: Object,
  onClick: Function,
  paused: boolean,
}

const PlayPause = ({ classes, onClick, paused }: Props) => (
  <button type="button" onClick={onClick}>{paused ? '►' : '❚❚'}</button>
);

export default inject(styles)(PlayPause);
