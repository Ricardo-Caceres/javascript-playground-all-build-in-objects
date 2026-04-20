import type { Exercise } from '@/shared/types/exercises'

export const funcCallExercises: Exercise[] = [
  {
    slug: 'function-call-this-binding',
    title: 'Function.prototype.call() — bind this',
    description: `## fn.call(thisArg)

\`call()\` invokes a function with a specified \`this\` value. The first argument becomes \`this\` inside the function.

**Challenge:** Use \`call()\` so that \`greet\` returns the name from its \`this\` context.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'call',
    initialCode: `function greet(this: { name: string }): string {
  return this.name
}

function callGreet(): string {
  // Call greet with { name: 'Alice' } as this
}`,
    solution: `function greet(this: { name: string }): string {
  return this.name
}

function callGreet(): string {
  return greet.call({ name: 'Alice' })
}`,
    tests: [
      { description: 'returns Alice', assertion:"function greet() { return this.name; } expect(greet.call({ name: 'Alice' })).toBe('Alice')" },
      { description: 'this.name is accessible', assertion:"function greet() { return this.name; } expect(greet.call({ name: 'Alice' }) === 'Alice').toBe(true)" },
      { description: 'result is string', assertion:"function greet() { return this.name; } expect(typeof greet.call({ name: 'Alice' })).toBe('string')" },
      { description: 'works with different name', assertion:"function greet() { return this.name; } expect(greet.call({ name: 'Bob' })).toBe('Bob')" },
      { description: 'result is truthy', assertion:"function greet() { return this.name; } expect(greet.call({ name: 'Alice' })).toBeTruthy()" },
    ],
    hints: [
      '`fn.call(ctx, arg1, arg2)` sets `this` to `ctx`.',
      'Pass the object as the first argument to `call()`.',
    ],
    tags: ['Function', 'call', 'this', 'beginner'],
  },
  {
    slug: 'function-call-with-args',
    title: 'Function.prototype.call() — pass arguments',
    description: `## fn.call(thisArg, arg1, arg2, ...)

After the \`this\` argument, \`call()\` accepts individual arguments to pass to the function.

**Challenge:** Use \`call()\` with \`null\` as \`this\` and pass \`2, 3\` to an \`add\` function.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'call',
    initialCode: `function add(a: number, b: number): number {
  return a + b
}

function callAdd(): number {
  // Call add with null as this and 2, 3 as arguments
}`,
    solution: `function add(a: number, b: number): number {
  return a + b
}

function callAdd(): number {
  return add.call(null, 2, 3)
}`,
    tests: [
      { description: 'add.call(null, 2, 3) returns 5', assertion:'function add(a, b) { return a + b; } expect(add.call(null, 2, 3)).toBe(5)' },
      { description: 'result equals 5', assertion:'function add(a, b) { return a + b; } expect(add.call(null, 2, 3) === 5).toBe(true)' },
      { description: 'result is number', assertion:"function add(a, b) { return a + b; } expect(typeof add.call(null, 2, 3)).toBe('number')" },
      { description: 'add.call(null, 10, 5) returns 15', assertion:'function add(a, b) { return a + b; } expect(add.call(null, 10, 5)).toBe(15)' },
      { description: 'result is truthy', assertion:'function add(a, b) { return a + b; } expect(add.call(null, 2, 3)).toBeTruthy()' },
    ],
    hints: [
      'Use `null` as the first argument when `this` is not needed.',
      'Arguments come after the `thisArg`.',
    ],
    tags: ['Function', 'call', 'arguments', 'beginner'],
  },
  {
    slug: 'function-call-this-type',
    title: 'Function.prototype.call() — typeof this',
    description: `## fn.call() — this is an object

When you pass an object as \`thisArg\`, \`this\` inside the function will be that object. \`typeof\` that object is \`'object'\`.

**Challenge:** Verify that \`typeof getThis.call({x: 1})\` returns \`'object'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'call',
    initialCode: `function getThisType(): string {
  function getThis() { return this }
  // Return typeof getThis.call({x: 1})
}`,
    solution: `function getThisType(): string {
  function getThis() { return this }
  return typeof getThis.call({ x: 1 })
}`,
    tests: [
      { description: 'typeof this is object', assertion:"function getThis() { return this; } expect(typeof getThis.call({x:1})).toBe('object')" },
      { description: 'this has property x', assertion:'function getThis() { return this; } expect(getThis.call({x:1}).x).toBe(1)' },
      { description: 'this is not null', assertion:'function getThis() { return this; } expect(getThis.call({x:1}) !== null).toBe(true)' },
      { description: 'this is truthy', assertion:'function getThis() { return this; } expect(getThis.call({x:1})).toBeTruthy()' },
      { description: 'this is the passed object', assertion:'const ctx = {x:1}; function getThis() { return this; } expect(getThis.call(ctx)).toBe(ctx)' },
    ],
    hints: [
      '`this` in a regular function is the `thisArg` passed to `call()`.',
    ],
    tags: ['Function', 'call', 'this', 'intermediate'],
  },
  {
    slug: 'function-call-array-push',
    title: 'Function.prototype.call() — borrow Array.push',
    description: `## Borrowing array methods with call()

You can borrow built-in array methods for array-like objects using \`call()\`.

**Challenge:** Use \`[].push.call(arr, 10)\` to push \`10\` onto \`arr\` and verify \`arr[0] === 10\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Function',
    method: 'call',
    initialCode: `function pushViaCall(): number[] {
  const arr: number[] = []
  // Use [].push.call to push 10 onto arr
  return arr
}`,
    solution: `function pushViaCall(): number[] {
  const arr: number[] = []
  ;[].push.call(arr, 10)
  return arr
}`,
    tests: [
      { description: 'arr[0] is 10', assertion:'const arr = []; [].push.call(arr, 10); expect(arr[0]).toBe(10)' },
      { description: 'arr has length 1', assertion:'const arr = []; [].push.call(arr, 10); expect(arr).toHaveLength(1)' },
      { description: 'arr contains 10', assertion:'const arr = []; [].push.call(arr, 10); expect(arr).toContain(10)' },
      { description: 'arr equals [10]', assertion:'const arr = []; [].push.call(arr, 10); expect(arr).toEqual([10])' },
      { description: 'arr is truthy', assertion:'const arr = []; [].push.call(arr, 10); expect(arr).toBeTruthy()' },
    ],
    hints: [
      '`[].push.call(target, value)` calls `Array.prototype.push` on `target`.',
    ],
    tags: ['Function', 'call', 'Array', 'intermediate'],
  },
  {
    slug: 'function-call-math-max',
    title: 'Function.prototype.call() — Math.max with call()',
    description: `## Using call() with Math.max

\`Math.max\` expects individual arguments. You can invoke it with \`call()\` passing \`null\` as \`this\`.

**Challenge:** Use \`Math.max.call(null, 1, 2, 3)\` and verify the result is \`3\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'call',
    initialCode: `function maxViaCall(): number {
  // Use Math.max.call to find the max of 1, 2, 3
}`,
    solution: `function maxViaCall(): number {
  return Math.max.call(null, 1, 2, 3)
}`,
    tests: [
      { description: 'Math.max.call(null,1,2,3) returns 3', assertion:'expect(Math.max.call(null, 1, 2, 3)).toBe(3)' },
      { description: 'result equals 3', assertion:'expect(Math.max.call(null, 1, 2, 3) === 3).toBe(true)' },
      { description: 'result is number', assertion:"expect(typeof Math.max.call(null, 1, 2, 3)).toBe('number')" },
      { description: 'max of negatives', assertion:'expect(Math.max.call(null, -1, -2, -3)).toBe(-1)' },
      { description: 'result is truthy', assertion:'expect(Math.max.call(null, 1, 2, 3)).toBeTruthy()' },
    ],
    hints: [
      '`Math.max` does not use `this`, so pass `null` as `thisArg`.',
    ],
    tags: ['Function', 'call', 'Math', 'beginner'],
  },
]
