export function insertionSort(array: number[]) {
  // Write your code here.
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i]! > array[j]!) {
        swap(array, i, j)
      }
    }
  }
  return array;
}

function swap(arr: unknown[], i: number, j: number): void {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}