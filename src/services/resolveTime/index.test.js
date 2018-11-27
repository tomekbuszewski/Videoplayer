import resolveTime from '.';

describe('ResolveTime tests', () => {
  it('should return 3600 from "01:00:00', () => {
    expect(resolveTime('01:00:00')).toBe(3600);
  });

  it('should return 120 from "02:00"', () => {
    expect(resolveTime('02:00')).toBe(120);
  });

  it('should return untouched input if it is a number', () => {
    expect(resolveTime(10)).toBe(10);
  })
});
