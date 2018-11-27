import { TRANSITION_SHORTHAND } from '@config/animations';
import { COLOR_ACCENT, COLOR_BRAND, COLOR_WHITE } from '@config/colors';
import {
  BACKDROP,
  GET_STEP,
  STEP_MEDIUM,
  STEP_LARGE,
  STEP_EXTRALARGE,
} from '@config/visuals';

export default {
  Button: {
    cursor: 'pointer',
    position: 'absolute',
    zIndex: 100,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '100%',
    width: GET_STEP(STEP_EXTRALARGE),
    height: GET_STEP(STEP_EXTRALARGE),

    background: COLOR_WHITE,
    boxShadow: BACKDROP(STEP_MEDIUM, COLOR_ACCENT),
    transition: TRANSITION_SHORTHAND('box-shadow'),

    '& svg': {
      width: '50%',
      fill: COLOR_ACCENT,
      transition: TRANSITION_SHORTHAND('color'),
    },

    '&:hover': {
      boxShadow: BACKDROP(STEP_LARGE, COLOR_BRAND),

      '& svg': {
        color: COLOR_BRAND,
      },
    },
  },
};
