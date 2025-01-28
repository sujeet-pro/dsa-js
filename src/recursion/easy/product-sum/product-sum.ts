export type SpecialArray = Array<number | SpecialArray>
export function productSum(array: SpecialArray, depth = 1): number {
  let val = 0
  for (const elem of array) {
    if (Array.isArray(elem)) {
      val += productSum(elem, depth + 1)
    } else {
      val += elem
    }
  }
  return depth * val
}

export function productSumUsingReduce(array: SpecialArray, depth = 1): number {
  return (
    depth *
    array.reduce<number>((agg, elem) => {
      return agg + (Array.isArray(elem) ? productSumUsingReduce(elem, depth + 1) : elem)
    }, 0)
  )
}
