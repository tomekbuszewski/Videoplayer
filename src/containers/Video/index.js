/**
 * @flow
 * @author tomekbuszewski
 * @since 2018-11-26
 */
/* eslint-disable jsx-a11y/media-has-caption */

import * as React from 'react';

import ToggleButton from '@src/components/PlayPause';

type Props = {
  controls?: boolean,
  // classes: Object,
  src: string
}

type State = {
  duration: number,
  paused: boolean,
}

class Video extends React.Component<Props, State> {
  static defaultProps = {
    controls: false,
  }

  constructor() {
    super();

    this.videoReference = React.createRef();
    this.video = null;

    this.state = {
      duration: 0,
      paused: true,
    };
  }

  componentDidMount() {
    if (this.videoReference.current !== null) {
      this.assignVideoRef();
      this.awaitVideoReadyState();
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
    });
  };

  /**
   * Method that converts given amount of time to percentage of whole.
   */
  getPercentageOfVideo = (time: number, asPercent: boolean = false): number | string => {
    const { duration } = this.state;
    const value: number = time * 100 / duration;

    return asPercent ? `${value}%` : value;
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

  render() {
    const { src, controls } = this.props;
    const { duration, paused } = this.state;

    if (!src) {
      return <div>Please provide source for the video!</div>;
    }

    /**
     * For brevity I reducer the `source` to just one, normally it should be an array
     * of objects pairing source and type ({ src: "...", type: "videoReference/mp4" }).
     */
    return (
      <React.Fragment>
        <button onClick={() => { this.setPlaybackPosition(10); }}>Duration: {duration}</button>
        <ToggleButton onClick={this.toggleVideo} paused={paused} />
        <video controls={controls} ref={this.videoReference} data-paused={paused}>
          <source src={src} type="video/ogg" />
        </video>
      </React.Fragment>
    );
  }
}

export default Video;
