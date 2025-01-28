import { DepthFirstSearchNode } from './depth-first-search'

describe('Node', () => {
  it('should perform depth-first search correctly', () => {
    const root = new DepthFirstSearchNode('A')
    root.addChild('B').addChild('C')
    root.children[0]?.addChild('D').addChild('E')
    root.children[1]?.addChild('F').addChild('G')

    const result = root.depthFirstSearch([])
    expect(result).toEqual(['A', 'B', 'D', 'E', 'C', 'F', 'G'])
  })

  it('should handle single node tree', () => {
    const root = new DepthFirstSearchNode('A')
    const result = root.depthFirstSearch([])
    expect(result).toEqual(['A'])
  })

  it('should handle tree with multiple levels', () => {
    const root = new DepthFirstSearchNode('A')
    root.addChild('B').addChild('C')
    root.children[0]?.addChild('D')
    root.children[0]?.children[0]?.addChild('E')

    const result = root.depthFirstSearch([])
    expect(result).toEqual(['A', 'B', 'D', 'E', 'C'])
  })

  it('should handle tree with no children', () => {
    const root = new DepthFirstSearchNode('A')
    const result = root.depthFirstSearch([])
    expect(result).toEqual(['A'])
  })
})
