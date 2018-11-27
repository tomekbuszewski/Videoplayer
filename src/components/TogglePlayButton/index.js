/**
 * @flow
 * @author tomekbuszewski
 * @since 2018-11-26
 */

import * as React from 'react';
import inject from 'react-jss';

import PlayIcon from '@assets/play.svg';
import PauseIcon from '@assets/pause.svg';

import styles from './index.styles';

type Props = {
  classes: Object,
  onClick: Function,
  paused: boolean,
}

const PlayPause = ({ classes, onClick, paused }: Props) => (
  <button type="button" onClick={onClick} className={classes.Button}>{paused ? <PlayIcon /> : <PauseIcon />}</button>
);

export default inject(styles)(PlayPause);
