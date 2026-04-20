import type { Exercise } from '@/shared/types/exercises'

export const forEachExercises: Exercise[] = [
  {
    slug: 'array-foreach-sum',
    title: 'Array.prototype.forEach() — sum array elements',
    description: `## Array.prototype.forEach()

\`Array.prototype.forEach(callback)\` executes a provided function once for each array element, in order. Unlike \`map\` or \`filter\`, it always returns \`undefined\` and is used exclusively for side effects.

**Challenge:** Implement \`sumArray(nums)\` that uses \`forEach\` to sum all numbers by accumulating into an external variable.

\`\`\`ts
sumArray([1, 2, 3, 4]) // → 10
sumArray([])            // → 0
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.forEach',
    initialCode: `function sumArray(nums: number[]): number {
  // Use forEach to accumulate a sum into an external variable
}`,
    solution: `function sumArray(nums: number[]): number {
  let sum = 0
  nums.forEach(n => { sum += n })
  return sum
}`,
    tests: [
      { description: 'sums [1,2,3,4] to 10', assertion:"expect(sumArray([1, 2, 3, 4])).toBe(10)" },
      { description: 'empty array returns 0', assertion:"expect(sumArray([])).toBe(0)" },
      { description: 'single element', assertion:"expect(sumArray([5])).toBe(5)" },
      { description: 'negative numbers', assertion:"expect(sumArray([-1, -2, 3])).toBe(0)" },
      { description: 'all zeros', assertion:"expect(sumArray([0, 0, 0])).toBe(0)" },
    ],
    hints: [
      'Declare `let sum = 0` before `forEach`, then add each element inside the callback.',
      '`forEach` does not return anything useful — the side effect is the mutation of `sum`.',
    ],
    tags: ['Array', 'Array.prototype.forEach', 'accumulate', 'beginner'],
  },
  {
    slug: 'array-foreach-collect',
    title: 'Array.prototype.forEach() — collect property values',
    description: `## Array.prototype.forEach() — collecting values

\`forEach\` can be used to collect property values from an array of objects into a new array.

**Challenge:** Implement \`collectStrings(items)\` that uses \`forEach\` to collect all \`label\` values into a string array.

\`\`\`ts
collectStrings([{label:'a'},{label:'b'}]) // → ['a', 'b']
collectStrings([])                         // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.forEach',
    initialCode: `function collectStrings(items: {label: string}[]): string[] {
  // Use forEach to push each item.label into a result array
}`,
    solution: `function collectStrings(items: {label: string}[]): string[] {
  const result: string[] = []
  items.forEach(item => result.push(item.label))
  return result
}`,
    tests: [
      { description: 'collects labels from objects', assertion:"expect(collectStrings([{label:'a'},{label:'b'}])).toEqual(['a', 'b'])" },
      { description: 'empty array returns empty', assertion:"expect(collectStrings([])).toEqual([])" },
      { description: 'single item', assertion:"expect(collectStrings([{label:'x'}])).toEqual(['x'])" },
      { description: 'result has same length as input', assertion:"expect(collectStrings([{label:'a'},{label:'b'},{label:'c'}])).toHaveLength(3)" },
      { description: 'order is preserved', assertion:"expect(collectStrings([{label:'z'},{label:'a'}])).toEqual(['z', 'a'])" },
    ],
    hints: [
      'Declare an empty array before `forEach`, then `push` inside the callback.',
      'This pattern is equivalent to `items.map(item => item.label)`.',
    ],
    tags: ['Array', 'Array.prototype.forEach', 'collect', 'objects', 'beginner'],
  },
  {
    slug: 'array-foreach-side-effects',
    title: 'Array.prototype.forEach() — mutate array in-place',
    description: `## Array.prototype.forEach() — index-based mutation

The \`forEach\` callback receives three arguments: \`(value, index, array)\`. You can use the \`index\` to mutate elements in-place by writing back to \`array[index]\`.

**Challenge:** Implement \`multiplyInPlace(arr, factor)\` that multiplies each element in the array by \`factor\` using \`forEach\`.

\`\`\`ts
const arr = [1, 2, 3]
multiplyInPlace(arr, 2)
// arr is now [2, 4, 6]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.forEach',
    initialCode: `function multiplyInPlace(arr: number[], factor: number): void {
  // Use arr.forEach((val, idx) => { arr[idx] = val * factor })
}`,
    solution: `function multiplyInPlace(arr: number[], factor: number): void {
  arr.forEach((val, idx) => { arr[idx] = val * factor })
}`,
    tests: [
      { description: 'multiplies each element by 2', assertion:"const a = [1,2,3]; multiplyInPlace(a, 2); expect(a).toEqual([2, 4, 6])" },
      { description: 'multiplies by 0 zeros out', assertion:"const a = [1,2,3]; multiplyInPlace(a, 0); expect(a).toEqual([0, 0, 0])" },
      { description: 'multiplies by 1 unchanged', assertion:"const a = [1,2,3]; multiplyInPlace(a, 1); expect(a).toEqual([1, 2, 3])" },
      { description: 'returns undefined', assertion:"const a = [1,2,3]; expect(multiplyInPlace(a, 2)).toBeUndefined()" },
      { description: 'empty array no-op', assertion:"const a[] = []; multiplyInPlace(a, 5); expect(a).toEqual([])" },
    ],
    hints: [
      'The third argument to the callback is the original array — use `array[index] = ...` to mutate it.',
      '`forEach` returns `undefined` — it is only useful for its side effects.',
    ],
    tags: ['Array', 'Array.prototype.forEach', 'mutation', 'in-place', 'intermediate'],
  },
  {
    slug: 'array-foreach-void',
    title: 'Array.prototype.forEach() — always returns undefined',
    description: `## Array.prototype.forEach() — return value

No matter what the callback returns, \`forEach\` always returns \`undefined\`. This distinguishes it from \`map\`, \`filter\`, and \`reduce\`.

**Challenge:** Implement \`forEachReturns(arr)\` that calls \`forEach\` on the array and returns its return value (which will always be \`undefined\`).

\`\`\`ts
forEachReturns([1, 2, 3]) // → undefined
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.forEach',
    initialCode: `function forEachReturns(arr: number[]): undefined {
  // Call arr.forEach and return its return value
}`,
    solution: `function forEachReturns(arr: number[]): undefined {
  return arr.forEach(() => {}) as undefined
}`,
    tests: [
      { description: 'returns undefined', assertion:"expect(forEachReturns([1, 2, 3])).toBeUndefined()" },
      { description: 'returns undefined for empty array', assertion:"expect(forEachReturns([])).toBeUndefined()" },
      { description: 'returns undefined regardless of callback', assertion:"expect(forEachReturns([1, 2, 3])).toBe(undefined)" },
      { description: 'is strictly undefined not null', assertion:"expect(forEachReturns([1]) === undefined).toBe(true)" },
      { description: 'result is falsy', assertion:"expect(forEachReturns([1, 2])).toBeFalsy()" },
    ],
    hints: [
      '`forEach` is void — it never returns a value.',
      'Use `map` if you need to collect results from each iteration.',
    ],
    tags: ['Array', 'Array.prototype.forEach', 'undefined', 'return-value', 'intermediate'],
  },
  {
    slug: 'array-foreach-vs-map',
    title: 'Array.prototype.forEach() — implement map manually',
    description: `## Array.prototype.forEach() — manual map

You can implement \`map\` manually using \`forEach\` by pushing each mapped result into an external array. This illustrates the difference: \`map\` builds a new array automatically; \`forEach\` requires you to do it manually.

**Challenge:** Implement \`mapWithForEach(arr, fn)\` that applies \`fn\` to each element and returns a new array — using \`forEach\` instead of \`map\`.

\`\`\`ts
mapWithForEach([1, 2, 3], n => n * 2) // → [2, 4, 6]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.forEach',
    initialCode: `function mapWithForEach(arr: number[], fn: (n: number) => number): number[] {
  // Use forEach to build a new array by pushing fn(n) for each element
}`,
    solution: `function mapWithForEach(arr: number[], fn: (n: number) => number): number[] {
  const result: number[] = []
  arr.forEach(n => result.push(fn(n)))
  return result
}`,
    tests: [
      { description: 'applies fn to each element', assertion:"expect(mapWithForEach([1, 2, 3], n => n * 2)).toEqual([2, 4, 6])" },
      { description: 'empty array returns empty', assertion:"expect(mapWithForEach([], n => n + 1)).toEqual([])" },
      { description: 'identity function returns same values', assertion:"expect(mapWithForEach([1, 2, 3], n => n)).toEqual([1, 2, 3])" },
      { description: 'result has same length', assertion:"expect(mapWithForEach([1, 2, 3, 4], n => n + 10)).toHaveLength(4)" },
      { description: 'original array not modified', assertion:"const a = [1,2,3]; mapWithForEach(a, n => n*2); expect(a).toEqual([1,2,3])" },
    ],
    hints: [
      'Create an empty result array, then `push(fn(n))` for each element.',
      'This is exactly what `map` does internally — but `map` is more concise and idiomatic.',
    ],
    tags: ['Array', 'Array.prototype.forEach', 'map', 'implement', 'intermediate'],
  },
]
