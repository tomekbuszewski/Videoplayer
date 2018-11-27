import { TRANSITION_SHORTHAND } from '@config/animations';
import { COLOR_BLACK, COLOR_BRAND, COLOR_WHITE } from '@config/colors';
import { FONT_SIZE_MEDIUM } from '@config/fonts';
import {
  BACKDROP,
  STEP_EXTRASMALL,
  STEP_MEDIUM,
  STEP_SMALL,
  GET_STEP,
  OPACITY_LOW,
} from '@config/visuals';

const borderStep = `${GET_STEP(STEP_MEDIUM) / 2}px`;

export default {
  Highlight: {
    position: 'absolute',
    top: 0,
  },

  HighlightRotated: {
    transform: `rotate(180deg) translate(${GET_STEP(STEP_MEDIUM)}px, ${GET_STEP(STEP_MEDIUM)}px)`,

    '& $CaptionHolder': {
      transform: `translate(-50%, ${GET_STEP(STEP_SMALL)}px) rotate(180deg)`,
    },

    '& $CaptionHolderActive': {
      transform: 'translate(-50%, 0) rotate(180deg)',
    },
  },

  Pointer: {
    cursor: 'pointer',
    background: 'none',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: `0 ${borderStep} ${borderStep} ${borderStep}`,
    borderColor: `transparent transparent ${COLOR_BRAND} transparent`,
    transform: 'translateX(-50%)',

    '&:hover': {
      borderColor: `transparent transparent ${COLOR_WHITE} transparent`,
    },
  },

  CaptionHolder: {
    position: 'absolute',
    pointerEvents: 'none',
    minWidth: 200,
    opacity: 0,
    transform: `translate(-50%, ${GET_STEP(STEP_SMALL)}px)`,
    borderRadius: GET_STEP(STEP_EXTRASMALL),
    padding: GET_STEP(STEP_SMALL),
    boxShadow: BACKDROP(STEP_EXTRASMALL, COLOR_BLACK, 0),
    fontSize: FONT_SIZE_MEDIUM,

    background: COLOR_WHITE,

    transition: `${TRANSITION_SHORTHAND('opacity')}, ${TRANSITION_SHORTHAND('transform')}, ${TRANSITION_SHORTHAND('box-shadow', true)}`,
  },

  CaptionHolderActive: {
    opacity: 1,
    height: 'auto',
    transform: 'translate(-50%, 0)',
    boxShadow: BACKDROP(STEP_EXTRASMALL, COLOR_BLACK, OPACITY_LOW),
    pointerEvents: 'all',
  },
};
