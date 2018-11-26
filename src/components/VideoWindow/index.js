/**
 * @flow
 * @author tomekbuszewski
 * @since 2018-11-26
 */

import * as React from 'react';
import inject from 'react-jss';

import styles from './index.styles';

type Props = {
  controls?: boolean,
  classes: Object,
  src: string
}

const VideoWindow = React.forwardRef(({ controls, classes, src }: Props, ref) => {
  if (!src) {
    return <div>Please provide source for the video!</div>;
  }

  /**
   * For brevity I reducer the `source` to just one, normally it should be an array
   * of objects pairing source and type ({ src: "...", type: "videoReference/mp4" }).
   */
  // eslint-disable jsx-a11y/media-has-caption
  return (
    <video className={classes.Video} controls={controls} ref={ref}>
      <source src={src} type="video/ogg" />
    </video>
  );
});

VideoWindow.defaultProps = {
  controls: false,
};

export default inject(styles)(VideoWindow);
