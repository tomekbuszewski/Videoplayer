// @flow

export default (input: number | string): number => {
  if (typeof input === 'number') {
    return input;
  }

  const timeArray = input.split(':');

  const seconds = parseInt(timeArray[timeArray.length - 1], 0);
  const minutes = timeArray[timeArray.length - 2] * 60;
  const hours = (timeArray[timeArray.length - 3] || 0) * 3600;

  return hours + minutes + seconds;
};
