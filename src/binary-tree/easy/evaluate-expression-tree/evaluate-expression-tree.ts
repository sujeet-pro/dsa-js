/**
 * Evaluates a binary expression tree and returns the resulting integer.
 *
 * All leaf nodes in the tree represent operands, which will always be positive integers.
 * All of the other nodes represent operators. There are 4 operators supported, each of which is represented by a negative integer:
 *
 * - -1: Addition operator, adding the left and right subtrees.
 * - -2: Subtraction operator, subtracting the right subtree from the left subtree.
 * - -3: Division operator, dividing the left subtree by the right subtree. If the result is a decimal, it should be rounded towards zero.
 * - -4: Multiplication operator, multiplying the left and right subtrees.
 *
 * The tree is always a valid expression tree. Each operator also works as a grouping symbol, meaning the bottom of the tree is always evaluated first, regardless of the operator.
 *
 * @param {EvaluateExpressionBinaryTree} root - The root node of the binary expression tree.
 * @returns {number} The result of evaluating the expression tree.
 */
export function evaluateExpressionTree(tree: EvaluateExpressionBinaryTree): number {
  if (!tree.left && !tree.right) return tree.value
  if (tree.left && tree.right) {
    const leftVal = evaluateExpressionTree(tree.left)
    const rightVal = evaluateExpressionTree(tree.right)
    switch (tree.value) {
      case -1:
        return leftVal + rightVal
      case -2:
        return leftVal - rightVal
      case -3:
        return Math.trunc(leftVal / rightVal)
      case -4:
        return leftVal * rightVal
    }
  }
  return -1
}

export class EvaluateExpressionBinaryTree {
  value: number
  left: EvaluateExpressionBinaryTree | null
  right: EvaluateExpressionBinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}
