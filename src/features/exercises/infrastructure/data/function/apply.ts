import type { Exercise } from '@/shared/types/exercises'

export const funcApplyExercises: Exercise[] = [
  {
    slug: 'function-apply-add',
    title: 'Function.prototype.apply() — basic usage',
    description: `## fn.apply(thisArg, argsArray)

\`apply()\` is like \`call()\` but takes arguments as an **array** instead of individually.

**Challenge:** Use \`add.apply(null, [2, 3])\` and verify the result is \`5\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'apply',
    initialCode: `function add(a: number, b: number): number {
  return a + b
}

function applyAdd(): number {
  // Use apply to call add with [2, 3]
}`,
    solution: `function add(a: number, b: number): number {
  return a + b
}

function applyAdd(): number {
  return add.apply(null, [2, 3])
}`,
    tests: [
      { description: 'add.apply(null, [2,3]) returns 5', assertion: 'function add(a, b) { return a + b; } expect(add.apply(null, [2, 3])).toBe(5)' },
      { description: 'result equals 5', assertion: 'function add(a, b) { return a + b; } expect(add.apply(null, [2, 3]) === 5).toBe(true)' },
      { description: 'result is number', assertion: "function add(a, b) { return a + b; } expect(typeof add.apply(null, [2, 3])).toBe('number')" },
      { description: 'apply(null, [10, 5]) returns 15', assertion: 'function add(a, b) { return a + b; } expect(add.apply(null, [10, 5])).toBe(15)' },
      { description: 'result is truthy', assertion: 'function add(a, b) { return a + b; } expect(add.apply(null, [2, 3])).toBeTruthy()' },
    ],
    hints: [
      '`apply()` takes an array as the second argument instead of spread args.',
    ],
    tags: ['Function', 'apply', 'beginner'],
  },
  {
    slug: 'function-apply-math-max',
    title: 'Function.prototype.apply() — Math.max with array',
    description: `## apply() with Math.max

Because \`apply()\` spreads an array as arguments, it is perfect for calling \`Math.max\` with an array of numbers.

**Challenge:** Use \`Math.max.apply(null, [1, 5, 3])\` and verify the result is \`5\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'apply',
    initialCode: `function maxViaApply(): number {
  // Use Math.max.apply to find the max of [1, 5, 3]
}`,
    solution: `function maxViaApply(): number {
  return Math.max.apply(null, [1, 5, 3])
}`,
    tests: [
      { description: 'Math.max.apply(null, [1,5,3]) returns 5', assertion: 'expect(Math.max.apply(null, [1, 5, 3])).toBe(5)' },
      { description: 'result equals 5', assertion: 'expect(Math.max.apply(null, [1, 5, 3]) === 5).toBe(true)' },
      { description: 'result is number', assertion: "expect(typeof Math.max.apply(null, [1, 5, 3])).toBe('number')" },
      { description: 'apply with larger array', assertion: 'expect(Math.max.apply(null, [10, 20, 30])).toBe(30)' },
      { description: 'result is truthy', assertion: 'expect(Math.max.apply(null, [1, 5, 3])).toBeTruthy()' },
    ],
    hints: [
      'Before spread syntax existed, `apply` was the idiomatic way to spread an array into `Math.max`.',
    ],
    tags: ['Function', 'apply', 'Math', 'beginner'],
  },
  {
    slug: 'function-apply-rest-params',
    title: 'Function.prototype.apply() — rest params sum',
    description: `## apply() with rest parameters

Functions using rest parameters gather all arguments. \`apply()\` lets you pass an array that becomes the rest parameter.

**Challenge:** Use \`sum.apply(null, [1, 2, 3])\` and verify the result is \`6\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Function',
    method: 'apply',
    initialCode: `function sumViaApply(): number {
  function sum(...args: number[]) { return args.reduce((a, b) => a + b, 0) }
  // Use apply to call sum with [1, 2, 3]
}`,
    solution: `function sumViaApply(): number {
  function sum(...args: number[]) { return args.reduce((a, b) => a + b, 0) }
  return sum.apply(null, [1, 2, 3])
}`,
    tests: [
      { description: 'sum.apply(null,[1,2,3]) returns 6', assertion: 'function sum(...args) { return args.reduce((a,b)=>a+b,0); } expect(sum.apply(null,[1,2,3])).toBe(6)' },
      { description: 'result equals 6', assertion: 'function sum(...args) { return args.reduce((a,b)=>a+b,0); } expect(sum.apply(null,[1,2,3]) === 6).toBe(true)' },
      { description: 'result is number', assertion: "function sum(...args) { return args.reduce((a,b)=>a+b,0); } expect(typeof sum.apply(null,[1,2,3])).toBe('number')" },
      { description: 'sum of [10,20] is 30', assertion: 'function sum(...args) { return args.reduce((a,b)=>a+b,0); } expect(sum.apply(null,[10,20])).toBe(30)' },
      { description: 'result is truthy', assertion: 'function sum(...args) { return args.reduce((a,b)=>a+b,0); } expect(sum.apply(null,[1,2,3])).toBeTruthy()' },
    ],
    hints: [
      '`apply(thisArg, array)` — array elements become the function\'s arguments.',
    ],
    tags: ['Function', 'apply', 'rest', 'intermediate'],
  },
  {
    slug: 'function-apply-push',
    title: 'Function.prototype.apply() — push multiple elements',
    description: `## apply() with Array.push

\`[].push.apply(target, source)\` appends all elements of \`source\` into \`target\` — useful before spread syntax.

**Challenge:** Use \`[].push.apply(arr, [2, 3])\` on \`arr = [1]\` and verify \`arr\` equals \`[1, 2, 3]\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Function',
    method: 'apply',
    initialCode: `function pushViaApply(): number[] {
  const arr = [1]
  // Use [].push.apply to append [2, 3] to arr
  return arr
}`,
    solution: `function pushViaApply(): number[] {
  const arr = [1]
  ;[].push.apply(arr, [2, 3])
  return arr
}`,
    tests: [
      { description: 'arr equals [1,2,3]', assertion: 'const arr = [1]; [].push.apply(arr, [2, 3]); expect(arr).toEqual([1, 2, 3])' },
      { description: 'arr has length 3', assertion: 'const arr = [1]; [].push.apply(arr, [2, 3]); expect(arr).toHaveLength(3)' },
      { description: 'arr contains 2', assertion: 'const arr = [1]; [].push.apply(arr, [2, 3]); expect(arr).toContain(2)' },
      { description: 'arr contains 3', assertion: 'const arr = [1]; [].push.apply(arr, [2, 3]); expect(arr).toContain(3)' },
      { description: 'arr[2] is 3', assertion: 'const arr = [1]; [].push.apply(arr, [2, 3]); expect(arr[2]).toBe(3)' },
    ],
    hints: [
      '`[].push.apply(target, items)` is equivalent to `target.push(...items)`.',
    ],
    tags: ['Function', 'apply', 'Array', 'intermediate'],
  },
  {
    slug: 'function-apply-typeof',
    title: 'Function.prototype.apply — typeof',
    description: `## typeof Function.prototype.apply

\`apply\` is a method on \`Function.prototype\`, so \`typeof Function.prototype.apply\` returns \`'function'\`.

**Challenge:** Verify that \`typeof Function.prototype.apply\` is \`'function'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'apply',
    initialCode: `function checkApplyType(): string {
  // Return typeof Function.prototype.apply
}`,
    solution: `function checkApplyType(): string {
  return typeof Function.prototype.apply
}`,
    tests: [
      { description: 'typeof apply is function', assertion: "expect(typeof Function.prototype.apply).toBe('function')" },
      { description: 'apply is truthy', assertion: 'expect(Function.prototype.apply).toBeTruthy()' },
      { description: 'not undefined', assertion: 'expect(Function.prototype.apply).not.toBeUndefined()' },
      { description: 'not null', assertion: 'expect(Function.prototype.apply).not.toBeNull()' },
      { description: 'equals function string', assertion: "expect(typeof Function.prototype.apply === 'function').toBe(true)" },
    ],
    hints: [
      '`apply` lives on `Function.prototype` and is therefore a function itself.',
    ],
    tags: ['Function', 'apply', 'typeof', 'beginner'],
  },
]
