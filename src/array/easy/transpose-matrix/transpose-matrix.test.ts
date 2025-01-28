import { transposeMatrix, transposeMatrix2 } from './transpose-matrix';
describe('transposeMatrix', () => {
  it('should transpose a 2x2 matrix', () => {
    const matrix = [
      [1, 2],
      [3, 4]
    ];
    const expected = [
      [1, 3],
      [2, 4]
    ];
    expect(transposeMatrix(matrix)).toEqual(expected);
    expect(transposeMatrix2(matrix)).toEqual(expected);
  });

  it('should transpose a 3x2 matrix', () => {
    const matrix = [
      [1, 2],
      [3, 4],
      [5, 6]
    ];
    const expected = [
      [1, 3, 5],
      [2, 4, 6]
    ];
    expect(transposeMatrix(matrix)).toEqual(expected);
    expect(transposeMatrix2(matrix)).toEqual(expected);
  });

  it('should transpose a 2x3 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6]
    ];
    const expected = [
      [1, 4],
      [2, 5],
      [3, 6]
    ];
    expect(transposeMatrix(matrix)).toEqual(expected);
    expect(transposeMatrix2(matrix)).toEqual(expected);
  });

  it('should transpose a 1x1 matrix', () => {
    const matrix = [
      [1]
    ];
    const expected = [
      [1]
    ];
    expect(transposeMatrix(matrix)).toEqual(expected);
    expect(transposeMatrix2(matrix)).toEqual(expected);
  });

  it('should transpose a 1x3 matrix', () => {
    const matrix = [
      [1, 2, 3]
    ];
    const expected = [
      [1],
      [2],
      [3]
    ];
    expect(transposeMatrix(matrix)).toEqual(expected);
    expect(transposeMatrix2(matrix)).toEqual(expected);
  });

  it('should transpose a 3x1 matrix', () => {
    const matrix = [
      [1],
      [2],
      [3]
    ];
    const expected = [
      [1, 2, 3]
    ];
    expect(transposeMatrix(matrix)).toEqual(expected);
    expect(transposeMatrix2(matrix)).toEqual(expected);
  });
});