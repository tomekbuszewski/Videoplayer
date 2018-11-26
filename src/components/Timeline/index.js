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
  onClick: Function,
}

const Timeline = ({ classes, duration, highlights, onClick }: Props) => (
  <div className={classes.Timeline}>
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

export default inject(styles)(Timeline);
