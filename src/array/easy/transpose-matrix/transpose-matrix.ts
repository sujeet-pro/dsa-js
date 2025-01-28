/**
 * You're given a 2D array of integers matrix. Write a function that returns the transpose of the matrix.
 *
 * The transpose of a matrix is a flipped version of the original matrix across its main diagonal (which runs from top-left to bottom-right); 
 * it switches the row and column indices of the original matrix.
 *
 * You can assume the input matrix always has at least 1 value; however its width and height are not necessarily the same.
 */

export function transposeMatrix(matrix: number[][]) {
  // row, col w.r.t to input matrix
  const rowCount = matrix.length
  const colCount = matrix[0]!.length
  const output: number[][] = Array.from({ length: colCount }, () => Array(rowCount).fill(0));
  for(let rowIdx in matrix) {
    for(let colIdx in matrix[rowIdx]!) {
      output[colIdx]![rowIdx] = matrix[rowIdx][colIdx]!
    }
  }
  return output;
}


export function transposeMatrix2(matrix: number[][]) {
  // row, col w.r.t to output matrix
  const colCount = matrix.length
  const rowCount = matrix[0]!.length

  const outputMatrix: number[][] = new Array(rowCount)

  for(let rowIdx = 0; rowIdx < rowCount; rowIdx++) {
    const outputRow = new Array(colCount) // Contains columns
    for(let colIdx = 0; colIdx < colCount; colIdx++) {
      outputRow[colIdx] = matrix[colIdx]![rowIdx]
    }
    outputMatrix[rowIdx] = outputRow
  }
  return outputMatrix;
}
