/**
 * @flow
 * @author tomekbuszewski
 * @since 2018-11-26
 */

import * as React from 'react';
import inject from 'react-jss';

import getPercentage from '@services/getPercentage';

import styles from './index.styles';

type Props = {
  classes: Object,
  duration: number,
  highlights: Object[],
  position: number,
  onClick: Function,
}

const Timeline = (props: Props) => {
  const {
    classes,
    duration,
    highlights,
    position,
    onClick,
  } = props;

  return (
    <div className={classes.Timeline}>
      <p style={{ position: 'absolute', left: getPercentage(duration, position, true) }}>{position} / {duration}</p>
      {highlights.map((item: Object) => (
        <button
          key={`timeline-${item.time}`}
          type="button"
          className={classes.Pointer}
          style={{ left: getPercentage(duration, item.time, true) }}
          onClick={() => { onClick(item.time); }}
        />
      ))}
    </div>
  );
}

export default inject(styles)(Timeline);
