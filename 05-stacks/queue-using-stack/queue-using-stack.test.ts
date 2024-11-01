import { QueueUsingStack } from './queue-using-stack.solution'

type OperationType = 'push' | 'pop' | 'peek' | 'empty'
type OperationInput = [Omit<OperationType, 'empty' | 'push'>, number | null] | ['push', number] | ['empty', boolean]

const testCases: OperationInput[][] = [
  [
    ['push', 9],
    ['push', 3],
    ['push', 1],
    ['pop', 9],
    ['peek', 3],
    ['empty', false],
  ],
  [
    ['pop', null],
    ['push', 10],
    ['push', 6],
    ['pop', 10],
    ['empty', false],
    ['peek', 6],
  ],

  [
    ['push', 1],
    ['push', 2],
    ['push', 3],
    ['peek', 1],
    ['pop', 1],
    ['pop', 2],
    ['pop', 3],
    ['empty', true],
  ],
  [
    ['push', 1],
    ['push', 2],
    ['peek', 1],
    ['pop', 1],
    ['empty', false],
  ],
  [
    ['push', 1],
    ['push', 2],
    ['peek', 1],
    ['pop', 1],
    ['pop', 2],
    ['empty', true],
    ['push', 3],
    ['empty', false],
  ],
]

describe('05 - Stacks / Queue using stacks', () => {
  test.each(testCases)('%j', (...operations) => {
    const queue = new QueueUsingStack()
    for (let [opType, opField] of operations) {
      if (opType === 'push') {
        expect(queue.push(opField)).toBe(undefined)
      } else if (opType === 'empty') {
        expect(queue.isEmpty()).toBe(opField)
      } else if (opType === 'pop') {
        expect(queue.pop()).toBe(opField)
      } else if (opType === 'peek') {
        expect(queue.peek()).toBe(opField)
      }
    }
  })
})
