/**
 * @flow
 * @author tomekbuszewski
 * @since 2018-11-27
 */

import * as React from 'react';
import inject from 'react-jss';
import c from 'classnames';

import GenericButton from '@src/components/GenericButton';
import TogglePlay from '@src/components/TogglePlayButton';
import Timeline from '@src/components/Timeline';

import AudioOnIcon from '@assets/audio-on.svg';
import AudioOffIcon from '@assets/audio-off.svg';

import styles from './index.styles';

type Props = {
  classes: Object,
  duration: number,
  highlights?: Object[],
  muted: boolean,
  paused: boolean,
  position: number,

  togglePlay: Function,
  toggleMute: Function,
  setPlayback: Function,
};

const VideoControls = (props: Props) => {
  const {
    classes,
    duration,
    highlights,
    muted,
    paused,
    position,

    togglePlay,
    toggleMute,
    setPlayback,
  } = props;

  return (
    <div className={c(classes.ControlsWrapper, paused && classes.ControlsWrapperActive)}>
      <TogglePlay onClick={togglePlay} paused={paused} />
      <div className={classes.Controls}>
        <Timeline
          duration={duration}
          highlights={highlights}
          onClick={setPlayback}
          position={position}
        />
        <GenericButton
          active={muted}
          activeState={<AudioOffIcon />}
          inactiveState={<AudioOnIcon />}
          onClick={toggleMute}
        />
      </div>
    </div>
  );
};

VideoControls.defaultProps = {
  highlights: null,
};

export default inject(styles)(VideoControls);
