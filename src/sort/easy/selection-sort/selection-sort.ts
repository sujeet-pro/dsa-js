export function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j]! < array[minIndex]!) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      swap(array, i, minIndex)
    }
  }
  return array
}

function swap(arr: unknown[], i: number, j: number): void {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
