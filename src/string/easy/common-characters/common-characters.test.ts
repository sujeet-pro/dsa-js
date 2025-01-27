import { commonCharacters, commonCharactersNew } from './common-characters';

describe('commonCharacters', () => {
    test('should return common characters from multiple strings', () => {
        const input = ['abc', 'bcd', 'cde'];
        expect(commonCharacters(input)).toEqual(['c']);
        expect(commonCharactersNew(input)).toEqual(['c']);
    });

    test('should return empty array if no common characters', () => {
        const input = ['abc', 'def', 'ghi'];
        expect(commonCharacters(input)).toEqual([]);
        expect(commonCharactersNew(input)).toEqual([]);
    });

    test('should return all characters if all strings are the same', () => {
        const input = ['abc', 'abc', 'abc'];
        const output = ['a', 'b', 'c']
        expect(commonCharacters(input)).toEqual(output);
        expect(commonCharactersNew(input)).toEqual(output);
    });

    test('should handle single string input', () => {
        const input = ['abc'];
        const output = ['a', 'b', 'c']
        expect(commonCharacters(input)).toEqual(output);
        expect(commonCharactersNew(input)).toEqual(output);
    });

    test('should handle empty string input', () => {
        const input = [''];
        const output: string[] = []
        expect(commonCharacters(input)).toEqual(output);
        expect(commonCharactersNew(input)).toEqual(output);
    });
});