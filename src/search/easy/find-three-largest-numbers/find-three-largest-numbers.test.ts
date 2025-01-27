import { findThreeLargestNumbers } from './find-three-largest-numbers';

describe('findThreeLargestNumbers', () => {
    test('should return the three largest numbers in the array', () => {
        expect(findThreeLargestNumbers([10, 5, 9, 10, 12])).toEqual([10, 10, 12]);
        expect(findThreeLargestNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([7, 8, 9]);
        expect(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])).toEqual([18, 141, 541]);
    });

    test('should handle arrays with less than three elements', () => {
        expect(findThreeLargestNumbers([1])).toEqual([1]);
        expect(findThreeLargestNumbers([1, 2])).toEqual([1, 2]);
    });

    test('should handle arrays with negative numbers', () => {
        expect(findThreeLargestNumbers([-1, -2, -3, -4, -5])).toEqual([-3, -2, -1]);
        expect(findThreeLargestNumbers([-10, -10, -10, -10])).toEqual([-10, -10, -10]);
    });

    test('should handle arrays with duplicate numbers', () => {
        expect(findThreeLargestNumbers([5, 5, 5, 5, 5])).toEqual([5, 5, 5]);
        expect(findThreeLargestNumbers([1, 2, 2, 3, 3, 3])).toEqual([3, 3, 3]);
    });
});