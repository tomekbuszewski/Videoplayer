/**
 * @author tomekbuszewski
 * @since 2018-11-26
 */

import * as React from 'react';
import inject from 'react-jss';

import { highlights } from '@src/containers/Video/index.stories';

import Video from '@src/containers/Video';

import styles from './index.styles';

const App = () => (
  <div>
    <h1>Video player</h1>
    <h2>Vanilla player without any additions</h2>
    <Video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" />
    <br />
    <hr />
    <br />
    <h2>Player with highlights</h2>
    <Video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" highlights={highlights} />
  </div>
);

export default inject(styles)(App);
