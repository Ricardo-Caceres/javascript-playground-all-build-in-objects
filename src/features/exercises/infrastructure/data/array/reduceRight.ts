import type { Exercise } from '@/shared/types/exercises'

export const reduceRightExercises: Exercise[] = [
  {
    slug: 'array-reduce-right-sum',
    title: 'Array.prototype.reduceRight() — sum from right',
    description: `## Array.prototype.reduceRight()\n\n\`reduceRight()\` works like \`reduce()\` but iterates from **right to left**. For commutative operations like addition the result is the same.\n\n\`\`\`ts\n[1, 2, 3].reduceRight((acc, n) => acc + n, 0) // 6\n\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.reduceRight',
    initialCode: `function sumRight(nums: number[]): number {\n  // Use reduceRight to sum all elements from right to left\n}`,
    solution: `function sumRight(nums: number[]): number {\n  return nums.reduceRight((acc, n) => acc + n, 0)\n}`,
    tests: [
      { description: 'sums [1, 2, 3] to 6', assertion: `expect(sumRight([1, 2, 3])).toBe(6)` },
      { description: 'returns 0 for empty array', assertion: `expect(sumRight([])).toBe(0)` },
      { description: 'returns the value for a single-element array', assertion: `expect(sumRight([10])).toBe(10)` },
      { description: 'handles negative numbers', assertion: `expect(sumRight([-1, 2, -3])).toBe(-2)` },
      { description: 'produces the same result as reduce for addition', assertion: `expect(sumRight([5, 10, 15])).toBe(30)` },
    ],
    hints: [
      '`reduceRight` takes the same arguments as `reduce` — it just processes from right to left.',
      'Provide `0` as the initial value to handle empty arrays safely.',
    ],
    tags: ['array', 'reduceRight', 'sum', 'right-to-left'],
    usageExample: {
      code: `const nums = [1, 2, 3, 4]
nums.reduceRight((acc, n) => acc + n, 0)  // → 10`,
      explanation: {
        en: 'Use reduceRight() like reduce() but processing elements from right to left.',
        es: 'Usa reduceRight() como reduce() pero procesando los elementos de derecha a izquierda.',
      },
    },
  },
  {
    slug: 'array-reduce-right-flatten',
    title: 'Array.prototype.reduceRight() — flatten from right',
    description: `## Flattening with reduceRight\n\nYou can flatten a 2D array from right to left. To preserve the original element order, use \`cur.concat(acc)\` instead of \`acc.concat(cur)\`.\n\n\`\`\`ts\n[[1, 2], [3, 4]].reduceRight((acc, cur) => cur.concat(acc), []) // [1, 2, 3, 4]\n\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.reduceRight',
    initialCode: `function flattenRight(arr: number[][]): number[] {\n  // Use reduceRight to flatten a 2D array, preserving original order\n}`,
    solution: `function flattenRight(arr: number[][]): number[] {\n  return arr.reduceRight((acc, cur) => cur.concat(acc), [] as number[])\n}`,
    tests: [
      { description: 'flattens a 2D array', assertion: `expect(flattenRight([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4])` },
      { description: 'returns empty array for empty input', assertion: `expect(flattenRight([])).toEqual([])` },
      { description: 'handles sub-arrays of different lengths', assertion: `expect(flattenRight([[1], [2, 3], [4, 5, 6]])).toEqual([1, 2, 3, 4, 5, 6])` },
      { description: 'handles empty sub-arrays', assertion: `expect(flattenRight([[], [1, 2], []])).toEqual([1, 2])` },
      { description: 'preserves element order', assertion: `expect(flattenRight([[3, 1], [4, 1], [5]])).toEqual([3, 1, 4, 1, 5])` },
    ],
    hints: [
      'Use `cur.concat(acc)` (not `acc.concat(cur)`) so that right-to-left processing still yields left-to-right order.',
      'Start with `[] as number[]` as the initial accumulator.',
    ],
    tags: ['array', 'reduceRight', 'flatten', 'concat', 'right-to-left'],
    usageExample: {
      code: `const nested = [[1, 2], [3, 4], [5]]
nested.reduceRight((acc, arr) => acc.concat(arr), [])
// → [5, 3, 4, 1, 2]`,
      explanation: {
        en: 'Use reduceRight() to flatten nested arrays from right to left.',
        es: 'Usa reduceRight() para aplanar arrays anidados de derecha a izquierda.',
      },
    },
  },
  {
    slug: 'array-reduce-right-reverse-string',
    title: 'Array.prototype.reduceRight() — join words in reverse order',
    description: `## Reversing order with reduceRight\n\n\`reduceRight()\` without an initial value starts accumulating from the rightmost element, which naturally reverses the order when joining.\n\n\`\`\`ts\n['a', 'b', 'c'].reduceRight((acc, w) => acc + ' ' + w) // 'c b a'\n\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.reduceRight',
    initialCode: `function reverseWords(words: string[]): string {\n  // Use reduceRight (no initial value) to join words in reversed order\n}`,
    solution: `function reverseWords(words: string[]): string {\n  return words.reduceRight((acc, word) => acc + ' ' + word)\n}`,
    tests: [
      { description: 'reverses two-word array', assertion: `expect(reverseWords(['hello', 'world'])).toBe('world hello')` },
      { description: 'reverses three-word array', assertion: `expect(reverseWords(['a', 'b', 'c'])).toBe('c b a')` },
      { description: 'returns a single word unchanged', assertion: `expect(reverseWords(['only'])).toBe('only')` },
      { description: 'preserves individual word content', assertion: `expect(reverseWords(['foo', 'bar', 'baz'])).toBe('baz bar foo')` },
      { description: 'joins with a single space between words', assertion: `expect(reverseWords(['one', 'two'])).toContain(' ')` },
    ],
    hints: [
      'Omit the initial value — `reduceRight` uses the last element as the starting accumulator.',
      'Without an initial value, `acc` starts as the rightmost element.',
      'Concatenate with a space: `acc + \' \' + word`.',
    ],
    tags: ['array', 'reduceRight', 'string', 'reverse', 'join'],
    usageExample: {
      code: `const chars = ['a', 'b', 'c']
chars.reduceRight((acc, c) => acc + c, '')  // → 'cba'`,
      explanation: {
        en: 'Use reduceRight() to reverse-join characters or elements without reversing the original array.',
        es: 'Usa reduceRight() para unir caracteres o elementos al revés sin revertir el array original.',
      },
    },
  },
  {
    slug: 'array-reduce-right-compose',
    title: 'Array.prototype.reduceRight() — function composition',
    description: `## Function composition with reduceRight\n\nIn functional programming, **compose** applies functions right-to-left. \`reduceRight()\` is a natural fit.\n\n\`\`\`ts\nconst double = (x: number) => x * 2\nconst addOne = (x: number) => x + 1\ncompose([addOne, double])(3) // addOne(double(3)) = addOne(6) = 7\n\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.prototype.reduceRight',
    initialCode: `function compose(fns: ((x: number) => number)[]): (x: number) => number {\n  // Return a function that applies fns from right to left\n}`,
    solution: `function compose(fns: ((x: number) => number)[]): (x: number) => number {\n  return (x: number) => fns.reduceRight((acc, fn) => fn(acc), x)\n}`,
    tests: [
      { description: 'composes two functions right-to-left', assertion: `expect(compose([x => x + 1, x => x * 2])(3)).toBe(7)` },
      { description: 'composes three functions', assertion: `expect(compose([x => x - 1, x => x * 3, x => x + 2])(4)).toBe(17)` },
      { description: 'works with a single function', assertion: `expect(compose([x => x * 5])(4)).toBe(20)` },
      { description: 'returns identity for empty function list', assertion: `expect(compose([])(10)).toBe(10)` },
      { description: 'order matters — right function applies first', assertion: `expect(compose([x => x * 2, x => x + 10])(0)).toBe(20)` },
    ],
    hints: [
      'Return a new function `(x) => fns.reduceRight(...)` so the composed function is reusable.',
      'Pass `x` as the initial accumulator value to `reduceRight`.',
      'The rightmost function in the array is applied first to the input.',
    ],
    tags: ['array', 'reduceRight', 'compose', 'functional', 'higher-order'],
    usageExample: {
      code: `const double = x => x * 2
const addOne = x => x + 1
const fns = [double, addOne]
fns.reduceRight((v, fn) => fn(v), 3)
// addOne(double(3)) → 7`,
      explanation: {
        en: 'Use reduceRight() to compose functions right-to-left, applying each to the accumulated result.',
        es: 'Usa reduceRight() para componer funciones de derecha a izquierda, aplicando cada una al resultado acumulado.',
      },
    },
  },
  {
    slug: 'array-reduce-right-nested',
    title: 'Array.prototype.reduceRight() — build a nested object',
    description: `## Building nested objects with reduceRight\n\nGiven keys \`['a', 'b', 'c']\` and a value, build a deeply nested object: \`{ a: { b: { c: value } } }\`.\n\n\`reduceRight()\` lets you wrap from the inside out.\n\n\`\`\`ts\nbuildNested(['a', 'b', 'c'], 42) // { a: { b: { c: 42 } } }\n\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.prototype.reduceRight',
    initialCode: `function buildNested(keys: string[], val: unknown): unknown {\n  // Use reduceRight to wrap val in nested objects keyed by each string\n}`,
    solution: `function buildNested(keys: string[], val: unknown): unknown {\n  return keys.reduceRight((acc, key) => ({ [key]: acc }), val)\n}`,
    tests: [
      { description: 'builds a 3-level nested object', assertion: `expect(buildNested(['a', 'b', 'c'], 42)).toEqual({a: {b: {c: 42}}})` },
      { description: 'builds a 1-level object', assertion: `expect(buildNested(['x'], 1)).toEqual({x: 1})` },
      { description: 'returns the value itself for empty keys array', assertion: `expect(buildNested([], 99)).toBe(99)` },
      { description: 'works with a string value', assertion: `expect(buildNested(['foo', 'bar'], 'hello')).toEqual({foo: {bar: 'hello'}})` },
      { description: 'works with 4 keys', assertion: `expect(buildNested(['a', 'b', 'c', 'd'], true)).toEqual({a: {b: {c: {d: true}}}})` },
    ],
    hints: [
      'Use `val` as the initial accumulator — it becomes the deepest value.',
      'Wrap the accumulator with each key: `(acc, key) => ({ [key]: acc })`.',
      'Computed property syntax `{ [key]: acc }` creates an object with a dynamic key.',
    ],
    tags: ['array', 'reduceRight', 'nested', 'object', 'functional'],
    usageExample: {
      code: `const obj = {a: {b: {c: 42}}}
['a', 'b', 'c'].reduce((acc, key) => acc[key], obj)  // → 42`,
      explanation: {
        en: 'Use reduce() (or reduceRight()) to safely drill into a nested object with a path array.',
        es: 'Usa reduce() (o reduceRight()) para navegar de forma segura por un objeto anidado con un array de claves.',
      },
    },
  },
]
