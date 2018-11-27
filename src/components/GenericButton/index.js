/**
 * @flow
 * @author tomekbuszewski
 * @since 2018-11-27
 */

import * as React from 'react';
import inject from 'react-jss';

import styles from './index.styles';

type Props = {
  active: boolean,
  activeState: any,
  classes: Object,
  inactiveState: any,

  onClick: Function,
}

const GenericButton = (props: Props) => {
  const {
    active,
    activeState,
    classes,
    inactiveState,
    onClick,
  } = props;

  return <button className={classes.GenericButton} type="button" onClick={onClick}>{active ? activeState : inactiveState}</button>;
};

export default inject(styles)(GenericButton);
