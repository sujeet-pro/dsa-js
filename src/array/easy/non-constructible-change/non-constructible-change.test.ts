import { nonConstructibleChange } from './non-constructible-change';

describe('nonConstructibleChange', () => {
    test('should return 1 when no coins are provided', () => {
        expect(nonConstructibleChange([])).toBe(1);
    });

    test('should return 4 for coins [1, 2, 5]', () => {
        expect(nonConstructibleChange([1, 2, 5])).toBe(4);
    });

    test('should return 2 for coins [1, 1, 1, 1, 1]', () => {
        expect(nonConstructibleChange([1, 1, 1, 1, 1])).toBe(6);
    });

    test('should return 20 for coins [1, 2, 5, 10, 20, 50]', () => {
        expect(nonConstructibleChange([1, 2, 5, 10, 20, 50])).toBe(4);
    });

    test('should return 1 for coins [2, 3, 4, 5]', () => {
        expect(nonConstructibleChange([2, 3, 4, 5])).toBe(1);
    });

    test('should return 8 for coins [1, 1, 3, 4]', () => {
        expect(nonConstructibleChange([1, 1, 3, 4])).toBe(10);
    });
});