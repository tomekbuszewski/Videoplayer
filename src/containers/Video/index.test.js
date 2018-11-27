import * as React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { VideoComponent } from '.';

const wrapper = mount(<VideoComponent src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />);
const instance = wrapper.instance();

describe('Video tests', () => {
  beforeEach(() => {
    instance.resetState();
  });

  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => false;
    window.HTMLMediaElement.prototype.pause = () => false;
  });

  it('should match snapshot with src', () => {
    const component = renderer.create(<VideoComponent src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot without src', () => {
    const component = renderer.create(<VideoComponent />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should reset its state when requested', () => {
    expect(wrapper.state().duration).toBe(0);
    wrapper.setState({ duration: 10 });
    expect(wrapper.state().duration).toBe(10);

    instance.resetState();

    expect(wrapper.state().duration).toBe(0);
  });

  it('should toggle audio state', () => {
    expect(wrapper.state().muted).toBeFalsy();
    instance.toggleAudio();
    expect(wrapper.state().muted).toBeTruthy();
    instance.toggleAudio();
    expect(wrapper.state().muted).toBeFalsy();
  });

  it('should toggle playback state', () => {
    expect(wrapper.state().paused).toBeTruthy();
    instance.toggleVideo();
    expect(wrapper.state().paused).toBeFalsy();
    instance.toggleVideo();
    expect(wrapper.state().paused).toBeTruthy();
  });

  it('should set selected highlight position to address bar', () => {
    wrapper.setState({ position: 10 });
    instance.setVideoPositionToBar();

    expect(window.location.hash).toBe(`#${instance.hashIdentifier}10`);
  });

  it('should set playback position properly', () => {
    expect(wrapper.state().position).toBe(0);
    instance.setPlaybackPosition(25);
    expect(wrapper.state().position).toBe(25);
    expect(instance.video.currentTime).toBe(25);
  });

  it('should set duration when video is available', () => {
    expect(wrapper.state().duration).toBe(0);
    expect(instance.video).toBeInstanceOf(HTMLVideoElement);
    expect(instance.video.duration).toBe(wrapper.state().duration);
  });
});
