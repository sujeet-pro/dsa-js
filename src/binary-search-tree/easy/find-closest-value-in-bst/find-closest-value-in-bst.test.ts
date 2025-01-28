import { findClosestValueInBst } from './find-closest-value-in-bst'

class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value: number): BST {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value)
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value)
      } else {
        this.right.insert(value)
      }
    }
    return this
  }
}

describe('findClosestValueInBst', () => {
  let bst: BST

  beforeEach(() => {
    bst = new BST(10)
    bst.insert(5).insert(15).insert(2).insert(5).insert(13).insert(22).insert(1).insert(14)
  })

  it('should find the closest value to 12', () => {
    expect(findClosestValueInBst(bst, 12)).toBe(13)
  })

  it('should find the closest value to 23', () => {
    expect(findClosestValueInBst(bst, 23)).toBe(22)
  })

  it('should find the closest value to 1', () => {
    expect(findClosestValueInBst(bst, 1)).toBe(1)
  })

  it('should find the closest value to 6', () => {
    expect(findClosestValueInBst(bst, 6)).toBe(5)
  })

  it('should find the closest value to 10', () => {
    expect(findClosestValueInBst(bst, 10)).toBe(10)
  })
})
