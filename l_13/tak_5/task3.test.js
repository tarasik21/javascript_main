import { calc } from './task3.js';

describe('calc', () => {
  it('should return correct result for addition', () => {
    const result = calc('3 + 5');
    expect(result).toBe('3 + 5 = 8');
  });

  it('should return correct result for subtraction', () => {
    const result = calc('10 - 7');
    expect(result).toBe('10 - 7 = 3');
  });

  it('should return null for invalid input', () => {
    expect(calc(123)).toBeNull();
    expect(calc(null)).toBeNull();
    expect(calc('')).toBeNull();
  });
});
