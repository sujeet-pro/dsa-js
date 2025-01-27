import { runLengthEncoding } from './run-length-encoding';

describe('runLengthEncoding', () => {
    test('encodes a string with no repeating characters', () => {
        expect(runLengthEncoding('abcdef')).toBe('1a1b1c1d1e1f');
    });

    test('encodes a string with repeating characters', () => {
        expect(runLengthEncoding('aabbcc')).toBe('2a2b2c');
    });

    test('encodes a string with mixed repeating and non-repeating characters', () => {
        expect(runLengthEncoding('aabcc')).toBe('2a1b2c');
    });

    test('encodes a string with single character', () => {
        expect(runLengthEncoding('a')).toBe('1a');
    });

    test('encodes an empty string', () => {
        expect(runLengthEncoding('')).toBe('');
    });

    test('encodes a string with more than 9 repeating characters', () => {
        expect(runLengthEncoding('aaaaaaaaaaa')).toBe('9a2a');
    });

    test('encodes a string with multiple groups of more than 9 repeating characters', () => {
        expect(runLengthEncoding('aaaaaaaaaaabbbbbbbbbb')).toBe('9a2a9b1b');
    });

    test('encodes a string with special characters', () => {
        expect(runLengthEncoding('aa$$%%^^')).toBe('2a2$2%2^');
    });

    test('encodes a string with spaces', () => {
        expect(runLengthEncoding('aa bb cc')).toBe('2a1 2b1 2c');
    });
});