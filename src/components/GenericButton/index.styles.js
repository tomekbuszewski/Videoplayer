import { STEP_SMALL, STEP_MEDIUM, GET_STEP } from '@config/visuals';
import { COLOR_WHITE } from '@config/colors';

export default {
  GenericButton: {
    padding: GET_STEP(STEP_SMALL),
    background: 'none',
    border: 0,
    color: COLOR_WHITE,

    '& svg': {
      width: GET_STEP(STEP_MEDIUM),
      fill: COLOR_WHITE,
    },
  },
};
