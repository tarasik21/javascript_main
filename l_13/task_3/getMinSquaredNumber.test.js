import getMinSquaredNumber from './getMinSquaredNumber.js';

describe('getMinSquaredNumber', () => {

    it('should return null for an empty array', () => {
      const result = getMinSquaredNumber([]);
      expect(result).toBeNull();
    });


    it('should return the square of the smallest absolute number', () => {
        const result = getMinSquaredNumber([-777, 3, -2, 45, -20]);
        expect(result).toBe(4);
    });


    it('should return the square of the smallest absolute number if it is only one number in massive', () => {
        const result = getMinSquaredNumber([5]);
        expect(result).toBe(25);
    });


    it('should return the square of the smallest absolute number for floats', () => {
        const result = getMinSquaredNumber([-1.5, 2.7, -3.1]);
        expect(result).toBeCloseTo(2.25); 
    });


    it('should return null if input is not an array', () => {
        expect(getMinSquaredNumber('not an array')).toBeNull();
        expect(getMinSquaredNumber(123)).toBeNull();
        expect(getMinSquaredNumber(null)).toBeNull();
    });
});
