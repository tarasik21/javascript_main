import { getOddNumbers } from './task2.js';

describe('getOddNumbers', () => {
  it('should return only odd numbers', () => {
    const result = getOddNumbers([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 3, 5]);
  });

  it('should return an empty array if there are no odd numbers', () => {
    const result = getOddNumbers([2, 4, 6]);
    expect(result).toEqual([]);
  });

  it('should return an empty array for an empty input', () => {
    const result = getOddNumbers([]);
    expect(result).toEqual([]);
  });
});
