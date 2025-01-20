import { getSquaredNumbers } from './task1.js';

describe('getSquaredNumbers', () => {
  it('should return an array of squared numbers', () => {
    const result = getSquaredNumbers([1, 2, 3]);
    expect(result).toEqual([1, 4, 9]);
  });

  it('should return an empty array for an empty input', () => {
    const result = getSquaredNumbers([]);
    expect(result).toEqual([]);
  });

  it('should handle negative numbers correctly', () => {
    const result = getSquaredNumbers([-1, -2, -3]);
    expect(result).toEqual([1, 4, 9]);
  });
});
