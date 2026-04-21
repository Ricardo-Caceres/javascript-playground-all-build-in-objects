import type { Exercise } from '@/shared/types/exercises'

export const unshiftExercises: Exercise[] = [
  {
    slug: 'array-unshift-basic',
    title: 'Add Element to Start of Array',
    description: `## Array.prototype.unshift\n\n\`unshift\` prepends one or more elements to the **beginning** of an array and returns the **new length**.\n\nImplement \`addToStart\` which unshifts \`val\` onto \`arr\` and returns the new length.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.unshift',
    initialCode: `function addToStart(arr: number[], val: number): number {\n  // prepend val and return new length\n}`,
    solution: `function addToStart(arr: number[], val: number): number {\n  return arr.unshift(val)\n}`,
    tests: [
      { description: 'returns new length after unshift', assertion: `expect(addToStart([1, 2, 3], 0)).toBe(4)` },
      { description: 'returns 1 for previously empty array', assertion: `expect(addToStart([], 5)).toBe(1)` },
      { description: 'returns 2 when prepending to single-element array', assertion: `expect(addToStart([1], 0)).toBe(2)` },
      { description: 'return type is number', assertion: `expect(typeof addToStart([1, 2], 0)).toBe('number')` },
      { description: 'length increases by 1', assertion: `expect(addToStart([10, 20, 30, 40], 0)).toBe(5)` },
    ],
    hints: [
      'unshift mutates the array and returns the new length',
      'Return the result of arr.unshift(val) directly',
    ],
    tags: ['array', 'unshift', 'prepend', 'length'],
    usageExample: {
      code: `const arr = [2, 3, 4]
arr.unshift(1)  // returns 4 (new length)
arr  // → [1, 2, 3, 4]`,
      explanation: {
        en: 'Use unshift() to prepend one element to the beginning of an array.',
        es: 'Usa unshift() para anteponer un elemento al inicio de un array.',
      },
    },
  },
  {
    slug: 'array-unshift-multiple',
    title: 'Prepend Multiple Elements',
    description: `## Array.prototype.unshift — Multiple Elements\n\n\`unshift\` accepts multiple arguments and inserts them all at the beginning in the order they are provided.\n\nImplement \`prependAll\` which unshifts all \`vals\` onto \`arr\` and returns the new length.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.unshift',
    initialCode: `function prependAll(arr: number[], ...vals: number[]): number {\n  // prepend all vals and return new length\n}`,
    solution: `function prependAll(arr: number[], ...vals: number[]): number {\n  return arr.unshift(...vals)\n}`,
    tests: [
      { description: 'prepends multiple values and returns new length', assertion: `expect(prependAll([3, 4], 1, 2)).toBe(4)` },
      { description: 'prepends single value', assertion: `expect(prependAll([1], 0)).toBe(2)` },
      { description: 'prepends three values', assertion: `expect(prependAll([4, 5], 1, 2, 3)).toBe(5)` },
      { description: 'prepending nothing returns original length', assertion: `expect(prependAll([1, 2, 3])).toBe(3)` },
      { description: 'return type is number', assertion: `expect(typeof prependAll([1, 2], 0, -1)).toBe('number')` },
    ],
    hints: [
      'Spread the rest parameter: arr.unshift(...vals)',
      'Elements are prepended in the order they appear in the argument list',
    ],
    tags: ['array', 'unshift', 'prepend', 'multiple', 'rest'],
    usageExample: {
      code: `const arr = [3, 4, 5]
arr.unshift(1, 2)  // returns 5
arr  // → [1, 2, 3, 4, 5]`,
      explanation: {
        en: 'Pass multiple arguments to unshift() to prepend several elements at once.',
        es: 'Pasa múltiples argumentos a unshift() para anteponer varios elementos a la vez.',
      },
    },
  },
  {
    slug: 'array-unshift-returns-length',
    title: 'unshift Returns the New Length',
    description: `## Array.prototype.unshift — Return Value\n\nThe return value of \`unshift\` is the **new length** of the array after insertion — not the modified array itself.\n\nImplement \`unshiftReturns\` which returns the value of \`arr.unshift(val)\` directly.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.unshift',
    initialCode: `function unshiftReturns(arr: number[], val: number): number {\n  // return what arr.unshift(val) returns\n}`,
    solution: `function unshiftReturns(arr: number[], val: number): number {\n  return arr.unshift(val)\n}`,
    tests: [
      { description: 'return type is number', assertion: `expect(typeof unshiftReturns([1, 2], 0)).toBe('number')` },
      { description: 'returns new length of 3', assertion: `expect(unshiftReturns([1, 2], 0)).toBe(3)` },
      { description: 'returns 1 for empty array', assertion: `expect(unshiftReturns([], 99)).toBe(1)` },
      { description: 'returns new length of 5', assertion: `expect(unshiftReturns([1, 2, 3, 4], 0)).toBe(5)` },
      { description: 'does not return the array', assertion: `expect(Array.isArray(unshiftReturns([1], 0))).toBe(false)` },
    ],
    hints: [
      'Return arr.unshift(val) directly — its return value is the new length',
      'Unlike push, the return value is a number, not the array',
    ],
    tags: ['array', 'unshift', 'return-value', 'length'],
    usageExample: {
      code: `const arr = ['b']
const len = arr.unshift('a')  // → 2 (new length)
arr  // → ['a', 'b']`,
      explanation: {
        en: 'unshift() returns the new length of the array after insertion.',
        es: 'unshift() devuelve la nueva longitud del array después de la inserción.',
      },
    },
  },
  {
    slug: 'array-unshift-mutates',
    title: 'unshift Mutates the Array',
    description: `## Array.prototype.unshift — Mutation\n\n\`unshift\` modifies the original array in place. After calling it, the prepended value becomes \`arr[0]\`.\n\nImplement \`prependAndCheck\` which unshifts \`val\` and returns \`arr[0]\` to confirm it is now the first element.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.unshift',
    initialCode: `function prependAndCheck(arr: number[], val: number): number {\n  // unshift val, then return the new first element\n}`,
    solution: `function prependAndCheck(arr: number[], val: number): number {\n  arr.unshift(val)\n  return arr[0]\n}`,
    tests: [
      { description: 'val is now the first element', assertion: `expect(prependAndCheck([2, 3], 1)).toBe(1)` },
      { description: 'works with any value', assertion: `expect(prependAndCheck([10, 20], 99)).toBe(99)` },
      { description: 'works on empty array', assertion: `expect(prependAndCheck([], 7)).toBe(7)` },
      { description: 'first element equals val', assertion: `expect(prependAndCheck([5, 6, 7], 0)).toBe(0)` },
      { description: 'return type is number', assertion: `expect(typeof prependAndCheck([1, 2], 0)).toBe('number')` },
    ],
    hints: [
      'Call arr.unshift(val) first, then read arr[0]',
      'After unshift, arr[0] is always the value you prepended',
    ],
    tags: ['array', 'unshift', 'mutation', 'first-element'],
    usageExample: {
      code: `const arr = ['b', 'c']
arr.unshift('a')
console.log(arr)  // → ['a', 'b', 'c']  (mutated)`,
      explanation: {
        en: 'unshift() mutates the original array — use toSpliced(0, 0, el) for an immutable alternative.',
        es: 'unshift() muta el array original; usa toSpliced(0, 0, el) como alternativa inmutable.',
      },
    },
  },
  {
    slug: 'array-unshift-queue',
    title: 'Implement a Queue with unshift',
    description: `## Array.prototype.unshift — Queue\n\nUsing \`unshift\` to prepend and \`pop\` to dequeue from the end gives you a simple FIFO queue.\n\nImplement \`enqueue\` which prepends \`val\` using \`unshift\` and returns the modified queue.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.unshift',
    initialCode: `function enqueue(queue: number[], val: number): number[] {\n  // prepend val and return the queue\n}`,
    solution: `function enqueue(queue: number[], val: number): number[] {\n  queue.unshift(val)\n  return queue\n}`,
    tests: [
      { description: 'val is at the front of the queue', assertion: `expect(enqueue([2, 3], 1)).toEqual([1, 2, 3])` },
      { description: 'enqueuing to empty queue', assertion: `expect(enqueue([], 1)).toEqual([1])` },
      { description: 'first element is the enqueued value', assertion: `expect(enqueue([10, 20], 5)[0]).toBe(5)` },
      { description: 'length increases by 1', assertion: `expect(enqueue([1, 2, 3], 0)).toHaveLength(4)` },
      { description: 'returns the queue array', assertion: `expect(Array.isArray(enqueue([1], 0))).toBe(true)` },
    ],
    hints: [
      'Call queue.unshift(val) to prepend, then return queue',
      'unshift mutates in place, so you return the same array reference',
    ],
    tags: ['array', 'unshift', 'queue', 'data-structure'],
    usageExample: {
      code: `const queue = ['second', 'third']
queue.unshift('first')
queue.shift()  // → 'first'  (FIFO)`,
      explanation: {
        en: 'Use unshift() with shift() to manage a FIFO queue by adding to the front and removing from it.',
        es: 'Usa unshift() con shift() para gestionar una cola FIFO agregando al frente y eliminando desde allí.',
      },
    },
  },
]
