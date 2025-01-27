import { productSum, productSumUsingReduce, SpecialArray } from './product-sum';

describe('productSum', () => {
  it('should return the correct product sum for a flat array', () => {
    const input = [1, 2, 3];
    const expectedOutput = 6;
    expect(productSum(input)).toBe(expectedOutput);
    expect(productSumUsingReduce(input)).toBe(expectedOutput);
  });

  it('should return the correct product sum for a nested array', () => {
    const input = [1, [2, 3]];
    const expectedOutput = 1 + 2 * (2 + 3);
    expect(productSum(input)).toBe(expectedOutput);
    expect(productSumUsingReduce(input)).toBe(expectedOutput);
  });

  it('should return the correct product sum for a deeply nested array', () => {
    const input = [1, [2, [3]]];
    const expectedOutput = 1 + 2 * (2 + 3 * 3);
    expect(productSum(input)).toBe(expectedOutput);
    expect(productSumUsingReduce(input)).toBe(expectedOutput);
  });

  it('should return the correct product sum for an array with multiple levels of nesting', () => {
    const input = [1, [2, [3, [4]]]];
    const expectedOutput = 1 + 2 * (2 + 3 * (3 + 4 * 4));
    expect(productSum(input)).toBe(expectedOutput);
    expect(productSumUsingReduce(input)).toBe(expectedOutput);
  });

  it('should return the correct product sum for an empty array', () => {
    const input: SpecialArray[] = [];
    const expectedOutput = 0;
    expect(productSum(input)).toBe(expectedOutput);
    expect(productSumUsingReduce(input)).toBe(expectedOutput);
  });

  it('should return the correct product sum for an array with empty nested arrays', () => {
    const input = [1, [], [2, []]];
    const expectedOutput = 1 + 2 * (2);
    expect(productSum(input)).toBe(expectedOutput);
    expect(productSumUsingReduce(input)).toBe(expectedOutput);
  });
});
