import colorProcessor from 'color';

export const POINT: number = 8;

export const STEP_EXTRASMALL: number = 0.5;
export const STEP_SMALL: number = 1;
export const STEP_MEDIUM: number = 2;
export const STEP_LARGE: number = 3;
export const STEP_EXTRALARGE: number = 10;

export const OPACITY_LOW: number = 0.25;
export const OPACITY_MEDIUM: number = 0.5;
export const OPACITY_HIGH: number = 0.8;

type StepType = STEP_EXTRASMALL | STEP_SMALL | STEP_MEDIUM | STEP_LARGE | STEP_EXTRALARGE;

export const GET_STEP: number = (step: StepType) => step * POINT;
export const BACKDROP: string = (step: StepType, color: string, opacity: number = OPACITY_HIGH) => {
  return `0 ${GET_STEP(STEP_EXTRASMALL)}px ${GET_STEP(step)}px 0 ${colorProcessor(color).alpha(opacity)}`;
};
