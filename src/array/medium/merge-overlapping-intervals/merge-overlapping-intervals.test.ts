import { mergeOverlappingIntervals } from './merge-overlapping-intervals'

type Intervals = [number, number][]

describe('mergeOverlappingIntervals', () => {
  test('should merge overlapping intervals - 1', () => {
    const intervals: Intervals = [
      [1, 2],
      [3, 5],
      [4, 7],
      [6, 8],
      [9, 10],
    ]
    const expected: Intervals = [
      [1, 2],
      [3, 8],
      [9, 10],
    ]
    expect(mergeOverlappingIntervals(intervals)).toEqual(expected)
  })

  test('should merge overlapping intervals', () => {
    const intervals: Intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]
    const expected: Intervals = [
      [1, 6],
      [8, 10],
      [15, 18],
    ]
    expect(mergeOverlappingIntervals(intervals)).toEqual(expected)
  })

  test('should return the same intervals if there are no overlaps', () => {
    const intervals: Intervals = [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
    const expected = [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
    expect(mergeOverlappingIntervals(intervals)).toEqual(expected)
  })

  test('should handle intervals that are back-to-back', () => {
    const intervals: Intervals = [
      [1, 2],
      [2, 3],
      [3, 4],
    ]
    const expected = [[1, 4]]
    expect(mergeOverlappingIntervals(intervals)).toEqual(expected)
  })

  test('should handle a single interval', () => {
    const intervals: Intervals = [[1, 2]]
    const expected = [[1, 2]]
    expect(mergeOverlappingIntervals(intervals)).toEqual(expected)
  })

  test('should handle an empty array', () => {
    const intervals: Intervals = []
    const expected: Intervals = []
    expect(mergeOverlappingIntervals(intervals)).toEqual(expected)
  })

  test('should handle intervals with the same start and end', () => {
    const intervals: Intervals = [
      [1, 4],
      [2, 3],
      [3, 4],
    ]
    const expected: Intervals = [[1, 4]]
    expect(mergeOverlappingIntervals(intervals)).toEqual(expected)
  })

  test('should merge unsorted overlapping intervals', () => {
    const intervals: Intervals = [
      [5, 6],
      [1, 3],
      [2, 4],
    ]
    const expected: Intervals = [
      [1, 4],
      [5, 6],
    ]
    expect(mergeOverlappingIntervals(intervals)).toEqual(expected)
  })

  test('should merge unsorted intervals with no overlaps', () => {
    const intervals: Intervals = [
      [5, 6],
      [1, 2],
      [3, 4],
    ]
    const expected: Intervals = [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
    expect(mergeOverlappingIntervals(intervals)).toEqual(expected)
  })

  test('should merge unsorted intervals with some overlaps', () => {
    const intervals: Intervals = [
      [5, 10],
      [1, 3],
      [2, 6],
      [15, 18],
      [8, 12],
    ]
    const expected: Intervals = [
      [1, 12],
      [15, 18],
    ]
    expect(mergeOverlappingIntervals(intervals)).toEqual(expected)
  })
})
