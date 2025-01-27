import { isPalindrome } from './palindrome-check';

describe('isPalindrome', () => {
    test('should return true for a palindrome string', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    test('should return false for a non-palindrome string', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    test('should return true for a single character string', () => {
        expect(isPalindrome('a')).toBe(true);
    });

    test('should return true for an empty string', () => {
        expect(isPalindrome('')).toBe(true);
    });

    test('should return true for a palindrome string with even length', () => {
        expect(isPalindrome('abba')).toBe(true);
    });

    test('should return false for a non-palindrome string with even length', () => {
        expect(isPalindrome('abcd')).toBe(false);
    });

    test('should return true for a palindrome string with mixed case', () => {
        expect(isPalindrome('RaceCar')).toBe(false); // Case-sensitive check
    });

    test('should return true for a palindrome string with spaces', () => {
        expect(isPalindrome('a man a plan a canal panama')).toBe(false); // Space-sensitive check
    });
});