import sum, { getSquaredArray, getOddNumbers } from './calculator.js';

describe('Calculator functions', () => {
    test('getSquaredArray squares all numbers in array', () => {
        expect(getSquaredArray([1, 2, 3])).toEqual([1, 4, 9]);
        expect(getSquaredArray([-1, 0, 2])).toEqual([1, 0, 4]);
        expect(getSquaredArray([])).toEqual([]);
    });

    test('getOddNumbers filters out even numbers', () => {
        expect(getOddNumbers([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
        expect(getOddNumbers([2, 4, 6])).toEqual([]);
        expect(getOddNumbers([])).toEqual([]);
    });

    test('sum returns correct sum of two numbers', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(-1, 1)).toBe(0);
        expect(sum(0, 0)).toBe(0);
    });
});