export const ANIMATION_TIME: number = 200;
export const ANIMATION_TIME_LONG: number = 500;

export const TRANSITION_SHORTHAND: string = (prop: string, long: boolean = false) => {
  return `${prop} ${long ? ANIMATION_TIME_LONG : ANIMATION_TIME}ms ease-out`;
};
