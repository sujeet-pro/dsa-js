export function bubbleSort(array: number[]) {
  for(let i = 0; i < array.length; i++) {
    let hasSwapped = false
    for(let j = 0; j < array.length - i - 1; j++) {
      const num_j = array[j]!
      const num_j1 = array[j + 1]!
      if(num_j > num_j1) {
        hasSwapped = true
        array[j + 1] = num_j
        array[j] = num_j1
      }
    }
    if(!hasSwapped) {
      break;
    }
  }
  // Write your code here.
  return array;
}
