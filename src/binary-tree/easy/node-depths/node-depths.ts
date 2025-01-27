/**
 * The distance between a node in a Binary Tree and the tree's root is called the node's depth.
 * Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.
 * Each BinaryTree node has an integer value, a left child node, and a right child node. 
 * Children nodes can either be BinaryTree nodes themselves or None / null.
 */
export function nodeDepths(root: NodeDepthsBinaryTree, nodeDepth: number = 0): number {
  // Write your code here.
  let totalDepth = nodeDepth
  if(root.left) {
    totalDepth += nodeDepths(root.left, nodeDepth + 1)
  }
  if(root.right) {
    totalDepth += nodeDepths(root.right, nodeDepth + 1)
  }
  return totalDepth
}

// This is the class of the input binary tree.
export class NodeDepthsBinaryTree {
  value: number;
  left: NodeDepthsBinaryTree | null;
  right: NodeDepthsBinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
