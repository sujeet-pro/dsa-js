import { evaluateExpressionTree, EvaluateExpressionBinaryTree } from './evaluate-expression-tree'

describe('evaluateExpressionTree', () => {
    it('should evaluate a single node tree', () => {
        const tree = new EvaluateExpressionBinaryTree(5)
        expect(evaluateExpressionTree(tree)).toBe(5)
    })

    it('should evaluate an addition operation', () => {
        const tree = new EvaluateExpressionBinaryTree(-1)
        tree.left = new EvaluateExpressionBinaryTree(3)
        tree.right = new EvaluateExpressionBinaryTree(4)
        expect(evaluateExpressionTree(tree)).toBe(7)
    })

    it('should evaluate a subtraction operation', () => {
        const tree = new EvaluateExpressionBinaryTree(-2)
        tree.left = new EvaluateExpressionBinaryTree(10)
        tree.right = new EvaluateExpressionBinaryTree(4)
        expect(evaluateExpressionTree(tree)).toBe(6)
    })

    it('should evaluate a multiplication operation', () => {
        const tree = new EvaluateExpressionBinaryTree(-4)
        tree.left = new EvaluateExpressionBinaryTree(3)
        tree.right = new EvaluateExpressionBinaryTree(4)
        expect(evaluateExpressionTree(tree)).toBe(12)
    })

    it('should evaluate a division operation', () => {
        const tree = new EvaluateExpressionBinaryTree(-3)
        tree.left = new EvaluateExpressionBinaryTree(8)
        tree.right = new EvaluateExpressionBinaryTree(2)
        expect(evaluateExpressionTree(tree)).toBe(4)
    })

    it('should evaluate a complex expression tree', () => {
        const tree = new EvaluateExpressionBinaryTree(-1)
        tree.left = new EvaluateExpressionBinaryTree(-2)
        tree.left.left = new EvaluateExpressionBinaryTree(10)
        tree.left.right = new EvaluateExpressionBinaryTree(4)
        tree.right = new EvaluateExpressionBinaryTree(-4)
        tree.right.left = new EvaluateExpressionBinaryTree(2)
        tree.right.right = new EvaluateExpressionBinaryTree(3)
        expect(evaluateExpressionTree(tree)).toBe(12)
    })
})