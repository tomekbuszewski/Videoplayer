import { COLOR_WHITE } from '@config/colors';
import {
  OPACITY_MEDIUM,
  STEP_EXTRASMALL,
  STEP_SMALL,
  GET_STEP, STEP_MEDIUM,
} from '@config/visuals';

export default {
  Timeline: {
    width: '100%',
    position: 'relative',
  },

  Track: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    transform: 'translateY(-50%)',
    height: GET_STEP(STEP_EXTRASMALL),
    background: COLOR_WHITE,
    borderRadius: GET_STEP(STEP_EXTRASMALL),
    opacity: OPACITY_MEDIUM,
  },

  Range: {
    opacity: 0,
    width: `calc(100% + ${GET_STEP(STEP_SMALL)}px)`,
    left: -GET_STEP(STEP_SMALL) / 2,
  },

  Timer: {
    color: COLOR_WHITE,
    position: 'absolute',
    top: GET_STEP(STEP_MEDIUM),
  },

  Pointer: {
    top: '50%',
    left: 0,
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    background: COLOR_WHITE,
    borderRadius: GET_STEP(STEP_SMALL),
    pointerEvents: 'none',

    width: GET_STEP(STEP_SMALL),
    height: GET_STEP(STEP_SMALL),
  },
};
