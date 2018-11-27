import * as React from 'react';
import { mount } from 'enzyme';

import Highlight from '.';

describe('Highlight tests', () => {
  it('should toggle its state', () => {
    const wrapper = mount(<Highlight onClick={() => false} />);
    const instance = wrapper.instance();

    expect(wrapper.state().active).toBeFalsy();

    instance.toggleHover();

    expect(wrapper.state().active).toBeTruthy();
  });
});
