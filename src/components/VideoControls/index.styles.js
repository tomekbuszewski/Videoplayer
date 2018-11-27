import { TRANSITION_SHORTHAND } from '@config/animations';
import { COLOR_BLACK } from '@config/colors';
import { GET_STEP, STEP_MEDIUM } from '@config/visuals';

export default {
  ControlsWrapper: {
    opacity: 0,
    pointerEvents: 'mouse',
    transition: TRANSITION_SHORTHAND('opacity'),

    '&:hover': {
      opacity: 1,
    },
  },

  ControlsWrapperActive: {
    opacity: 1,
    pointerEvents: 'all',
  },

  Controls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    background: `linear-gradient(to bottom, transparent 0%, ${COLOR_BLACK} 100%); `,
    display: 'flex',
    alignItems: 'center',

    padding: GET_STEP(STEP_MEDIUM),
  },
};
