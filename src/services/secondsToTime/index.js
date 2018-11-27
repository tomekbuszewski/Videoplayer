// @flow

const makeDoubleDigits = (input: number): string => input <= 9 ? `0${input}` : input;

/**
 * I know I could use momentjs, and if it would be available in the project
 * already, I would. But adding 500KB to convert one value to another
 * is just not a good idea,
 */
export default (time: number): string => {
  const MINUTE: number = 60;
  const HOUR: number = 3600;

  const HOURS = Math.floor(time / HOUR);
  const MINUTES = Math.floor(time % HOUR / MINUTE); // eslint-disable-line no-mixed-operators
  const SECONDS = Math.floor(time % HOUR % MINUTE); // eslint-disable-line no-mixed-operators

  if (HOURS) {
    return `${makeDoubleDigits(HOURS)}:${makeDoubleDigits(MINUTES)}:${makeDoubleDigits(SECONDS)}`;
  }

  if (HOURS || MINUTES) {
    return `${makeDoubleDigits(MINUTES)}:${makeDoubleDigits(SECONDS)}`;
  }

  return `00:${makeDoubleDigits(SECONDS)}`;
};
