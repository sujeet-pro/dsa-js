/**
 * Write a function that takes in a non-empty array of arbitrary intervals,
 * merges any overlapping intervals, and returns the new intervals in no particular order.
 *
 * Each interval is an array of two integers, with interval[0] as the start of the interval
 * and interval[1] as the end of the interval.
 *
 * Note that back-to-back intervals aren't considered to be overlapping.
 * For example, [1, 5] and [6, 7] aren't overlapping; however, [1, 6] and [6, 7] are indeed overlapping.
 *
 * Also note that the start of any particular interval will always be less than or equal to the end of that interval.
 */
export function mergeOverlappingIntervals(intervals: [number, number][]) {
  let results: [number, number][] = []
  intervals.sort((a, b) => a[0] - b[0])
  for (let interval of intervals) {
    const lastInterval = results[results.length - 1]
    if (lastInterval && interval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], interval[1])
    } else {
      results.push(interval)
    }
  }
  return results
}
