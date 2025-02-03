/**
 * Given an array of integers and a specific integer, write a function that moves all instances of that integer to the end of the array.
 * The function should modify the input array in place and does not need to maintain the order of the other integers.
 */
export function moveElementToEnd(array: number[], toMove: number) {
  let leftIdx = 0
  let rightIdx = array.length - 1
  while (leftIdx < rightIdx) {
    if (array[rightIdx] == toMove) {
      rightIdx--
    } else if (array[leftIdx] !== toMove) {
      leftIdx++
    } else {
      ;[array[leftIdx], array[rightIdx]] = [array[rightIdx]!, array[leftIdx]!]
      leftIdx++
      rightIdx--
    }
  }
  return array
}
