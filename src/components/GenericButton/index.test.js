import * as React from 'react';
import renderer from 'react-test-renderer';

import GenericButton from '.';

describe('GenericButton tests', () => {
  it('should match snapshot while active', () => {
    const component = renderer.create(<GenericButton
      active
      activeState="active"
      inactiveState="inactive"
      onClick={() => false}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot while inactive', () => {
    const component = renderer.create(<GenericButton
      active={false}
      activeState="active"
      inactiveState="inactive"
      onClick={() => false}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
