/**
 * You walk into a theatre to see a show. The usher guides you to your row and tells you that you can sit anywhere
 * within the row. Naturally, you want to sit in the seat that gives you the most space. You also prefer this space
 * to be evenly distributed on either side of you (e.g., if there are three empty seats in a row, you would prefer
 * to sit in the middle of those three seats).
 *
 * Given the theatre row represented as an integer array, return the seat index where you should sit. Ones represent
 * occupied seats and zeroes represent empty seats.
 *
 * You may assume that someone is always sitting in the first and last seat of the row. Whenever there are two equally
 * good seats, you should sit in the seat with the lower index. If there is no seat to sit in, return -1. The given
 * array will always have a length of at least one and contain only ones and zeroes.
 */
// [1, 0, 0, 0, 1, 0, 0, 0, 0, 1]
//
export function bestSeat(seats: number[]) {
  let bestSeatIdx = -1
  let maxSpace = 0
  let currSpace = 0
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      currSpace = 0
    } else {
      currSpace++
      if (currSpace > maxSpace) {
        maxSpace = currSpace
        bestSeatIdx = i - Math.floor(currSpace / 2)
      }
    }
  }
  return bestSeatIdx
}
export function bestSeat2(seats: number[]) {
  // Write your code here.
  let gapFromLeft = new Array(seats.length)
  // let gapFromRight = new Array(seats.length)
  let seatGaps = new Array(seats.length)
  let counter = -1
  for (let idx = 0; idx < seats.length; idx++) {
    if (seats[idx] === 1) {
      counter = -1
    } else {
      counter++
    }
    gapFromLeft[idx] = counter
  }
  counter = -1
  for (let idx = seats.length - 1; idx >= 0; idx--) {
    if (seats[idx] === 1) {
      counter = -1
    } else {
      counter++
    }
    // gapFromRight[idx] = counter
    seatGaps[idx] = counter + gapFromLeft[idx]
  }
  const maxSpaceIdx = seatGaps.reduce((maxIdx, gap, idx, arr) => {
    if (gap > arr[maxIdx]) {
      return idx
    }
    return maxIdx
  }, 0)
  return maxSpaceIdx + Math.floor(seatGaps[maxSpaceIdx] / 2)
}
