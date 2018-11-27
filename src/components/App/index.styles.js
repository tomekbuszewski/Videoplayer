import { FONT_SIZE_SMALL } from '@config/fonts';

export default {
  '@global': {
    html: {
      fontSize: FONT_SIZE_SMALL,
    },

    body: {
      fontFamily: '"Roboto Mono", "Courier New", monospaced',
    },

    '*': {
      margin: 0,
      boxSizing: 'border-box',
      padding: 0,
    },
  },
};
