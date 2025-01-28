/**
 * You're given a Node class that has a name and an array of optional children nodes.
 * When put together, nodes form an acyclic tree-like structure.
 *
 * Implement the depthFirstSearch method on the Node class, which takes in an empty array,
 * traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right),
 * stores all of the nodes' names in the input array, and returns it.
 *
 */
export class DepthFirstSearchNode {
  name: string
  children: DepthFirstSearchNode[]

  constructor(name: string) {
    this.name = name
    this.children = []
  }

  addChild(name: string) {
    this.children.push(new DepthFirstSearchNode(name))
    return this
  }

  // In Order
  depthFirstSearch(array: string[]) {
    // Write your code here.
    array.push(this.name)
    this.children.forEach(child => {
      child.depthFirstSearch(array)
    })
    return array
  }
}
