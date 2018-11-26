/**
 * @flow
 * @author tomekbuszewski
 * @since 2018-11-26
 */

import * as React from 'react';

import View from "@src/components/Highlight";

type Props = {
  classes: Object,
  duration: number,
  highlights: Object[],
  position: number,
  onClick: Function,
};

type State = {
  active: boolean,
};

class Highlight extends React.Component<Props, State> {
  state = {
    active: false,
  };

  toggleHover = (): void => {
    const { active } = this.state;

    this.setState({
      active: !active,
    });
  };

  render() {
    const { active } = this.state;

    return (
      <View
        {...this.props}
        active={active}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      />
    );
  }
}

export default Highlight;
