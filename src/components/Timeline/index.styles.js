import { COLOR_WHITE, COLOR_BRAND } from '@config/colors';
import {
  OPACITY_MEDIUM,
  STEP_EXTRASMALL,
  STEP_SMALL,
  GET_STEP,
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

  Pointer: {
    top: '50%',
    left: 0,
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    background: COLOR_WHITE,
    borderRadius: GET_STEP(STEP_SMALL),

    width: GET_STEP(STEP_SMALL),
    height: GET_STEP(STEP_SMALL),
  },
};
