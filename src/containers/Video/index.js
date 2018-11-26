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
    const { src, controls, highlights } = this.props;
    const { duration, paused } = this.state;

    if (!src) {
      return <div>Please provide source for the video!</div>;
    }

    /**
     * For brevity I reducer the `source` to just one, normally it should be an array
     * of objects pairing source and type ({ src: "...", type: "videoReference/mp4" }).
     */
    return (
      <figure style={{ position: 'relative' }}>
        <video controls={controls} ref={this.videoReference} data-paused={paused} style={{ width: '100%' }}>
          <source src={src} type="video/ogg" />
        </video>
        {duration && (
          <React.Fragment>
            <ToggleButton onClick={this.toggleVideo} paused={paused} />
            <Timeline
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
