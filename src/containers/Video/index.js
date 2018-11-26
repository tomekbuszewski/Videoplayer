/**
 * @flow
 * @author tomekbuszewski
 * @since 2018-11-26
 */
/* eslint-disable jsx-a11y/media-has-caption */

import * as React from 'react';

import ToggleButton from '@src/components/PlayPause';
import Timeline from '@src/components/Timeline';

type Props = {
  controls?: boolean,
  // classes: Object,
  highlights: Object[],
  src: string,
}

type State = {
  duration: number,
  paused: boolean,
  position?: number,
  muted: boolean,
}

const initialState = {
  duration: 0,
  paused: true,
  muted: false,
  position: 0,
};

class Video extends React.Component<Props, State> {
  static defaultProps = {
    controls: false,
  }

  constructor() {
    super();

    this.videoReference = React.createRef();
    this.video = null;
    this.playbackInterval = null;
    this.playbackIntervalValue = 500;

    this.state = {
      ...initialState,
    };
  }

  componentDidMount() {
    this.handleVideo();
  }

  componentDidUpdate(prevProps) {
    const { src: oldSrc } = prevProps;
    const { src: currentSrc } = this.props;

    /**
     * This is fired only when source is changed.
     */
    if (oldSrc !== currentSrc) {
      this.resetState();
      this.handleVideo();
    }
  }

  /**
   * Method for toggling playback state.
   */
  toggleVideo = (): void => {
    const { paused } = this.video;
    const { paused: statePaused } = this.state;

    if (paused) {
      this.video.play();
    } else {
      this.video.pause();
    }

    this.setState({
      paused: !statePaused,
    }, () => {
      const { paused: currentlyPaused } = this.state;
      this.watchVideoTime(!currentlyPaused);
    });
  };

  /**
   * Method for toggling audio state.
   */
  toggleAudio = (): void => {
    const { muted } = this.video;
    const { muted: stateMuted } = this.state;

    this.video.muted = !muted;

    this.setState({
      muted: !stateMuted,
    });
  };

  /**
   * Method that sets playback position.
   */
  setPlaybackPosition = (position: number): void => {
    this.video.currentTime = position;
  };

  /**
   * Method that assigns current (actual) element to global class member.
   */
  assignVideoRef() {
    this.video = this.videoReference.current;
  }

  /**
   * Method for setting videoReference duration by plugging/unplugging
   * event listener.
   *
   * By using this method I am notified when video is ready for reading, plus
   * I keep duration value in state for further usage without needing to refer
   * to the ref directly.
   */
  awaitVideoReadyState() {
    const setMetadata = () => {
      this.setState({
        duration: this.video.duration,
      }, () => {
        this.video.removeEventListener('durationchange', setMetadata);
      });
    };

    this.video.addEventListener('durationchange', setMetadata);
  }

  /**
   * Method that resets the entire state to the initial values.
   */
  resetState() {
    this.setState({
      ...initialState,
    });
  }

  /**
   * Method fired after obtaining source for video.
   */
  handleVideo() {
    if (this.videoReference.current !== null) {
      this.assignVideoRef();
      this.awaitVideoReadyState();
    }
  }

  /**
   * Method that watches current video time and sets it to state.
   * Set in interval every ~500ms (default).
   */
  watchVideoTime(start: boolean) {
    if (start) {
      this.playbackInterval = window.setInterval(() => {
        this.setState({
          position: this.video.currentTime,
        });
      }, this.playbackIntervalValue);
    } else {
      clearInterval(this.playbackInterval);
    }
  }

  render() {
    const { src, controls, highlights } = this.props;
    const {
      duration,
      paused,
      position,
      muted,
    } = this.state;

    if (!src) {
      return <div>Please provide source for the video!</div>;
    }

    /**
     * For brevity I reduced the `source` to just one, normally it should be an array
     * of objects pairing source and type ({ src: "...", type: "video/mp4" }).
     */
    return (
      <figure>
        <video
          controls={controls}
          muted={muted}
          ref={this.videoReference}
          style={{ width: '100%' }}
        >
          <source src={src} type="video/mp4" />
        </video>
        {duration && (
          <React.Fragment>
            <ToggleButton onClick={this.toggleVideo} paused={paused} />
            <button type="button" onClick={this.toggleAudio}>{muted ? 'Unmute' : 'Mute'}</button>
            <Timeline
              position={position}
              duration={duration}
              highlights={highlights}
              onClick={this.setPlaybackPosition}
            />
          </React.Fragment>
        )}
      </figure>
    );
  }
}

export default Video;
