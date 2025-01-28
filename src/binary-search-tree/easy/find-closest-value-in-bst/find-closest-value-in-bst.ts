/**
 * Finds the closest value to a target integer in a Binary Search Tree (BST).
 *
 * @param {BST} tree - The root node of the Binary Search Tree.
 * @param {number} target - The target integer value.
 * @returns {number} - The closest value to the target value contained in the BST.
 *
 * @remarks
 * You can assume that there will only be one closest value.
 *
 * @description
 * Each BST node has an integer value, a left child node, and a right child node.
 * A node is said to be a valid BST node if and only if it satisfies the BST property:
 * - Its value is strictly greater than the values of every node to its left.
 * - Its value is less than or equal to the values of every node to its right.
 * - Its children nodes are either valid BST nodes themselves or None / null.
 */
export function findClosestValueInBst(tree: BST, target: number) {
  let closest = tree.value

  let node: BST | null = tree

  while (node !== null) {
    if (Math.abs(target - closest) > Math.abs(target - node.value)) {
      closest = node.value
    }
    if (target < node.value) {
      node = node.left
    } else if (target > node.value) {
      node = node.right
    } else {
      break
    }
  }
  return closest
}
class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}
