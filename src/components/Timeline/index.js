/**
 * @flow
 * @author tomekbuszewski
 * @since 2018-11-26
 */

import * as React from 'react';
import inject from 'react-jss';

import Highlight from '@src/containers/Highlight';

import getPercentage from '@services/getPercentage';

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
      <div className={classes.Pointer} style={{ left: getPercentage(duration, position, true) }} />
      {highlights && highlights.map((item: Object) => (
        <Highlight
          key={`timeline-${item.time}`}
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
