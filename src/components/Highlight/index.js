/**
 * @flow
 * @author tomekbuszewski
 * @since 2018-11-26
 */

import * as React from 'react';
import c from 'classnames';
import inject from 'react-jss';

import styles from './index.styles';

type Props = {
  active: boolean,
  caption?: string | boolean,
  classes: Object,
  image?: string | boolean;
  onClick: Function,
  onMouseEnter: Function,
  onMouseLeave: Function,
  style: Object,
};

const Highlight = (props: Props) => {
  const {
    active,
    caption,
    classes,
    image,
    onMouseEnter,
    onMouseLeave,
    style,
    onClick,
  } = props;

  return (
    <div style={{ ...style }} className={classes.Highlight}>
      <button
        type="button"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classes.Pointer}
      />
      {(caption || image) && (
        <div className={c(classes.CaptionHolder, active && classes.CaptionHolderActive)}>
          {image && <img src={image} alt="" />}
          {caption && <p>{caption}</p>}
        </div>
      )}
    </div>
  );
};

Highlight.defaultProps = {
  image: false,
  caption: false,
};

export default inject(styles)(Highlight);
