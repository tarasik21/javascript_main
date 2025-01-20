import sum, { getSquaredArray, getOddNumbers } from './calculator.js';


it('should return array with squared numbers', () => {
  const result = getSquaredArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});


it('should return array with odd numbers', () => {
  const result = getOddNumbers([1, 2, 3, 4]);
  expect(result).toEqual([1, 3]);
});


it('should return sum of two numbers', () => {
  const result = sum(5, 3);
  expect(result).toBe(8);
});
