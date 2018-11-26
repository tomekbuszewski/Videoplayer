/**
 * @flow
 * @author tomekbuszewski
 * @since 2018-11-26
 */

import * as React from 'react';
import inject from 'react-jss';

import styles from './index.styles';

type Props = {
  classes: Object,
  src?: string
}

const VideoWindow = ({ classes, src }: Props) => (
  <video>
    <source src={src} type="video/ogg" />
  </video>
);

VideoWindow.defaultProps = {
  src: 'https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_stereo.ogg',
}

export default inject(styles)(VideoWindow);
