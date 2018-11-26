import perc from '.';

describe('getPercentage tests', () => {
  it('should return proper value as number', () => expect(perc(100, 50)).toBe(50));

  it('should return proper value as percent (string)', () => expect(perc(100, 50, true)).toBe('50%'));
});
