import * as React from 'react';
import renderer from 'react-test-renderer';

import Highlight from '.';

describe('Highlight tests', () => {
  it('should match snapshot with caption and image', () => {
    const component = renderer.create(
      <Highlight
        active
        caption="Test caption"
        image="https://www.fillmurray.com/300/200"
        onMouseEnter={() => false}
        onMouseLeave={() => false}
        onClick={() => false}
      />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with caption and without image', () => {
    const component = renderer.create(
      <Highlight
        active
        caption="Test caption"
        onMouseEnter={() => false}
        onMouseLeave={() => false}
        onClick={() => false}
      />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with image and without caption', () => {
    const component = renderer.create(
      <Highlight
        active
        image="https://www.fillmurray.com/300/200"
        onMouseEnter={() => false}
        onMouseLeave={() => false}
        onClick={() => false}
      />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot without image or caption', () => {
    const component = renderer.create(
      <Highlight
        active
        onMouseEnter={() => false}
        onMouseLeave={() => false}
        onClick={() => false}
      />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
