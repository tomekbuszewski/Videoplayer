/**
 * @flow
 * Function that converts given amount of time to percentage of whole.
 */
export default (total: number, fraction: number, asPercent: boolean = false): number | string => {
  const value: number = fraction * 100 / total;

  return asPercent ? `${value}%` : value;
};
