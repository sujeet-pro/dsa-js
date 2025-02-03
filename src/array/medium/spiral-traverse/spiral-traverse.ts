/**
 * Write a function that takes in an n x m two-dimensional array
 * (that can be square-shaped when n == m) and returns a
 * one-dimensional array of all the array's elements in spiral order.
 *
 * Spiral order starts at the top left corner of the two-dimensional
 * array, goes to the right, and proceeds in a spiral pattern all the
 * way until every element has been visited.
 */
export function spiralTraverse(array: number[][]) {
  const ans: number[] = []
  if (array.length === 0) return ans
  // Write your code here.
  let rowStartIdx = 0
  let rowEndIdx = array.length - 1
  let colStartIdx = 0
  let colEndIdx = array[0]!.length - 1
  while (rowStartIdx <= rowEndIdx && colStartIdx <= colEndIdx) {
    // top:left-to-right startRow[colStart...colEnd])
    for (let i = colStartIdx; i <= colEndIdx; i++) {
      ans.push(array[rowStartIdx]![i]!)
    }
    // right side - top-to-bottom: colEnd:startRow+1...endRow
    for (let i = rowStartIdx + 1; i <= rowEndIdx; i++) {
      ans.push(array[i]![colEndIdx]!)
    }
    // bottom:right-to-left => rowEndIdx:[colEndIdx-1...colStart]
    for (let i = colEndIdx - 1; i >= colStartIdx && rowStartIdx != rowEndIdx; i--) {
      ans.push(array[rowEndIdx]![i]!)
    }
    // left:bottom-to-top => colStartIdx[rowEndIdx...rowStart-1]
    for (let i = rowEndIdx - 1; i > rowStartIdx && colStartIdx != colEndIdx; i--) {
      ans.push(array[i]![colStartIdx]!)
    }
    rowStartIdx++
    rowEndIdx--
    colStartIdx++
    colEndIdx--
  }
  return ans
}
