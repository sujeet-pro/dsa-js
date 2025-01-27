import { nodeDepths } from './node-depths';
import { NodeDepthsBinaryTree } from './node-depths';

describe('nodeDepths', () => {
    it('should return 0 for a single node tree', () => {
        const tree = new NodeDepthsBinaryTree(1);
        expect(nodeDepths(tree)).toBe(0);
    });

    it('should return correct depth sum for a tree with two levels', () => {
        const tree = new NodeDepthsBinaryTree(1);
        tree.left = new NodeDepthsBinaryTree(2);
        tree.right = new NodeDepthsBinaryTree(3);
        expect(nodeDepths(tree)).toBe(2);
    });

    it('should return correct depth sum for a tree with three levels', () => {
        const tree = new NodeDepthsBinaryTree(1);
        tree.left = new NodeDepthsBinaryTree(2);
        tree.right = new NodeDepthsBinaryTree(3);
        tree.left.left = new NodeDepthsBinaryTree(4);
        tree.left.right = new NodeDepthsBinaryTree(5);
        tree.right.left = new NodeDepthsBinaryTree(6);
        tree.right.right = new NodeDepthsBinaryTree(7);
        expect(nodeDepths(tree)).toBe(10);
    });

    it('should return correct depth sum for an unbalanced tree', () => {
        const tree = new NodeDepthsBinaryTree(1);
        tree.left = new NodeDepthsBinaryTree(2);
        tree.left.left = new NodeDepthsBinaryTree(3);
        tree.left.left.left = new NodeDepthsBinaryTree(4);
        expect(nodeDepths(tree)).toBe(6);
    });
});