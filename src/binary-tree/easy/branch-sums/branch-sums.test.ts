import { branchSums, BranchSumsBinaryTree } from './branch-sums';

describe('branchSums', () => {
    it('should return the correct branch sums for a simple binary tree', () => {
        const root = new BranchSumsBinaryTree(1);
        root.left = new BranchSumsBinaryTree(2);
        root.right = new BranchSumsBinaryTree(3);
        root.left.left = new BranchSumsBinaryTree(4);
        root.left.right = new BranchSumsBinaryTree(5);
        root.right.left = new BranchSumsBinaryTree(6);
        root.right.right = new BranchSumsBinaryTree(7);

        const result = branchSums(root);
        expect(result).toEqual([7, 8, 10, 11]);
    });

    it('should return the correct branch sums for a binary tree with a single node', () => {
        const root = new BranchSumsBinaryTree(1);

        const result = branchSums(root);
        expect(result).toEqual([1]);
    });

    it('should return the correct branch sums for a binary tree with only left children', () => {
        const root = new BranchSumsBinaryTree(1);
        root.left = new BranchSumsBinaryTree(2);
        root.left.left = new BranchSumsBinaryTree(3);

        const result = branchSums(root);
        expect(result).toEqual([6]);
    });

    it('should return the correct branch sums for a binary tree with only right children', () => {
        const root = new BranchSumsBinaryTree(1);
        root.right = new BranchSumsBinaryTree(2);
        root.right.right = new BranchSumsBinaryTree(3);

        const result = branchSums(root);
        expect(result).toEqual([6]);
    });

    it('should return the correct branch sums for a complex binary tree', () => {
        const root = new BranchSumsBinaryTree(1);
        root.left = new BranchSumsBinaryTree(2);
        root.right = new BranchSumsBinaryTree(3);
        root.left.left = new BranchSumsBinaryTree(4);
        root.left.right = new BranchSumsBinaryTree(5);
        root.right.left = new BranchSumsBinaryTree(6);
        root.right.right = new BranchSumsBinaryTree(7);
        root.left.left.left = new BranchSumsBinaryTree(8);
        root.left.left.right = new BranchSumsBinaryTree(9);

        const result = branchSums(root);
        expect(result).toEqual([15, 16, 8, 10, 11]);
    });
});