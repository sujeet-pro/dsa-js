/**
 * Write a function that takes in a non-empty array of integers and returns an array of the same length.
 * Each element in the output array should be equal to the product of every other number in the input array.
 *
 * In other words, the value at output[i] should be equal to the product of every number in the input array except input[i].
 *
 * Note: Solve this problem without using division.
 */
export function arrayOfProducts(array: number[]) {
  const products = new Array(array.length).fill(1)
  for (let i = 1; i < array.length; i++) {
    products[i] = array[i - 1]! * products[i - 1]
  }
  let rp = 1
  for (let i = array.length - 1; i >= 0; i--) {
    products[i] *= rp
    rp *= array[i]!
  }
  return products
}
// 0  1  2  3  4  5
// 1  2  3  4  5  6
// 1  1  2  6  24  120
//       120 30  6   1
