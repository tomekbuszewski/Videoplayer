/**
 * @flow
 * @author tomekbuszewski
 * @since 2018-11-26
 */

import * as React from 'react';
import inject from 'react-jss';
import c from 'classnames';

import Highlight from '@src/containers/Highlight';

import getPercentage from '@services/getPercentage';
import secondsToTime from '@services/secondsToTime';

import styles from './index.styles';

type Props = {
  classes: Object,
  duration: number,
  highlights: Object[] | null,
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
      <div className={classes.Track} />
      <input
        className={c(classes.Track, classes.Range)}
        type="range"
        min={0}
        max={duration}
        defaultValue={position}
        onChange={(e) => { onClick(e.target.value); }}
        step={1}
      />
      <div className={classes.Pointer} style={{ left: getPercentage(duration, position, true) }}>
        <span className={classes.Timer}>{secondsToTime(position)}</span>
      </div>
      {highlights && highlights.map((item: Object) => (
        <Highlight
          key={`highlight-${item.time}-${duration}`}
          className={classes.Pointer}
          style={{ left: getPercentage(duration, item.time, true) }}
          onClick={() => { onClick(item.time); }}
          image={item.image}
          caption={item.caption}
        />
      ))}
    </div>
  );
};

export default inject(styles)(Timeline);
