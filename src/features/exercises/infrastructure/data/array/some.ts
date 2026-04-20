import type { Exercise } from '@/shared/types/exercises'

export const someExercises: Exercise[] = [
  {
    slug: 'array-some-basic',
    title: 'Array.prototype.some() — check for negatives',
    description: `## Array.prototype.some()

\`Array.prototype.some(predicate)\` returns \`true\` if **at least one** element satisfies the predicate, \`false\` otherwise. It short-circuits as soon as a match is found.

**Challenge:** Implement \`hasNegative(nums)\` that returns \`true\` if any number in the array is less than \`0\`.

\`\`\`ts
hasNegative([1, -2, 3])  // → true
hasNegative([1, 2, 3])   // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.some',
    initialCode: `function hasNegative(nums: number[]): boolean {
  // Use nums.some(...)
}`,
    solution: `function hasNegative(nums: number[]): boolean {
  return nums.some(n => n < 0)
}`,
    tests: [
      { description: 'returns true when a negative exists', assertion:'expect(hasNegative([1, -2, 3])).toBe(true)' },
      { description: 'returns false when all positive', assertion:'expect(hasNegative([1, 2, 3])).toBe(false)' },
      { description: 'empty array returns false', assertion:'expect(hasNegative([])).toBe(false)' },
      { description: 'zero is not negative', assertion:'expect(hasNegative([0, 1, 2])).toBe(false)' },
      { description: 'single negative value returns true', assertion:'expect(hasNegative([-1])).toBe(true)' },
    ],
    hints: [
      '`some(n => n < 0)` checks every element until it finds one less than zero.',
      '`some()` on an empty array always returns `false` — there are no elements to match.',
    ],
    tags: ['Array', 'Array.prototype.some', 'predicate', 'beginner'],
  },
  {
    slug: 'array-some-string',
    title: 'Array.prototype.some() — long string check',
    description: `## Array.prototype.some() — strings

\`some()\` works on arrays of any type. You can inspect string properties like \`.length\` inside the predicate.

**Challenge:** Implement \`hasLong(strs, minLen)\` that returns \`true\` if any string has \`length >= minLen\`.

\`\`\`ts
hasLong(['hi', 'hello', 'hey'], 5) // → true
hasLong(['hi', 'hey'], 5)          // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.some',
    initialCode: `function hasLong(strs: string[], minLen: number): boolean {
  // Use strs.some(...)
}`,
    solution: `function hasLong(strs: string[], minLen: number): boolean {
  return strs.some(s => s.length >= minLen)
}`,
    tests: [
      { description: 'finds string with length >= 5', assertion:"expect(hasLong(['hi', 'hello', 'hey'], 5)).toBe(true)" },
      { description: 'returns false when none long enough', assertion:"expect(hasLong(['hi', 'hey'], 5)).toBe(false)" },
      { description: 'empty array returns false', assertion:"expect(hasLong([], 1)).toBe(false)" },
      { description: 'exact match on length counts', assertion:"expect(hasLong(['abc'], 3)).toBe(true)" },
      { description: 'minLen 0 always true for non-empty', assertion:"expect(hasLong(['x'], 0)).toBe(true)" },
    ],
    hints: [
      'Access `.length` on each string inside the predicate: `s => s.length >= minLen`.',
      '`some()` stops as soon as the first matching string is found.',
    ],
    tags: ['Array', 'Array.prototype.some', 'string', 'beginner'],
  },
  {
    slug: 'array-some-empty',
    title: 'Array.prototype.some() — empty array behaviour',
    description: `## Array.prototype.some() — vacuous false

Calling \`some()\` on an **empty array** always returns \`false\`, regardless of the predicate. This is called a *vacuous truth* — there are no elements to fail the test, so the result defaults to \`false\`.

**Challenge:** Implement \`someEmpty()\` that returns \`([] as boolean[]).some(() => true)\` and observe the result.

\`\`\`ts
someEmpty() // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.some',
    initialCode: `function someEmpty(): boolean {
  // Return ([] as boolean[]).some(() => true)
}`,
    solution: `function someEmpty(): boolean {
  return ([] as boolean[]).some(() => true)
}`,
    tests: [
      { description: 'empty array some returns false', assertion:'expect(someEmpty()).toBe(false)' },
      { description: 'returns a boolean', assertion:"expect(typeof someEmpty()).toBe('boolean')" },
      { description: 'is strictly false not falsy', assertion:'expect(someEmpty() === false).toBe(true)' },
      { description: 'always returns false regardless of predicate', assertion:'expect(someEmpty()).toBeFalsy()' },
      { description: 'not true', assertion:'expect(someEmpty() !== true).toBe(true)' },
    ],
    hints: [
      '`[].some(predicate)` returns `false` no matter what the predicate does.',
      'Contrast this with `[].every(predicate)`, which returns `true` (vacuously true).',
    ],
    tags: ['Array', 'Array.prototype.some', 'empty', 'beginner'],
  },
  {
    slug: 'array-some-object',
    title: 'Array.prototype.some() — find an admin user',
    description: `## Array.prototype.some() — objects

\`some()\` is commonly used to check whether an array of objects contains at least one item matching a condition.

**Challenge:** Implement \`hasAdmin(users)\` that returns \`true\` if any user has \`role === 'admin'\`.

\`\`\`ts
hasAdmin([{role: 'user'}, {role: 'admin'}]) // → true
hasAdmin([{role: 'user'}, {role: 'mod'}])   // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.some',
    initialCode: `function hasAdmin(users: { role: string }[]): boolean {
  // Use users.some(...)
}`,
    solution: `function hasAdmin(users: { role: string }[]): boolean {
  return users.some(u => u.role === 'admin')
}`,
    tests: [
      { description: 'returns true when admin present', assertion:"expect(hasAdmin([{role:'user'},{role:'admin'}])).toBe(true)" },
      { description: 'returns false with no admin', assertion:"expect(hasAdmin([{role:'user'},{role:'mod'}])).toBe(false)" },
      { description: 'empty array returns false', assertion:'expect(hasAdmin([])).toBe(false)' },
      { description: 'single admin returns true', assertion:"expect(hasAdmin([{role:'admin'}])).toBe(true)" },
      { description: 'role must be exactly admin', assertion:"expect(hasAdmin([{role:'administrator'}])).toBe(false)" },
    ],
    hints: [
      'Destructure the object in the predicate for clarity: `({ role }) => role === \'admin\'`.',
      'Strict equality (`===`) is important — `\'administrator\'` is not `\'admin\'`.',
    ],
    tags: ['Array', 'Array.prototype.some', 'objects', 'intermediate'],
  },
  {
    slug: 'array-some-early-exit',
    title: 'Array.prototype.some() — detect duplicates',
    description: `## Array.prototype.some() — early exit with indexOf

\`some()\` is ideal for detecting duplicates: check whether any element appears at a different index than its first occurrence using \`indexOf\`.

**Challenge:** Implement \`containsDuplicate(arr)\` that returns \`true\` if any element appears more than once.

\`\`\`ts
containsDuplicate([1, 2, 3, 2]) // → true
containsDuplicate([1, 2, 3])    // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.some',
    initialCode: `function containsDuplicate(arr: number[]): boolean {
  // Use arr.some((val, idx) => arr.indexOf(val) !== idx)
}`,
    solution: `function containsDuplicate(arr: number[]): boolean {
  return arr.some((val, idx) => arr.indexOf(val) !== idx)
}`,
    tests: [
      { description: 'detects duplicate', assertion:'expect(containsDuplicate([1, 2, 3, 2])).toBe(true)' },
      { description: 'returns false for all unique', assertion:'expect(containsDuplicate([1, 2, 3])).toBe(false)' },
      { description: 'empty array no duplicates', assertion:'expect(containsDuplicate([])).toBe(false)' },
      { description: 'all same element is duplicate', assertion:'expect(containsDuplicate([5, 5, 5])).toBe(true)' },
      { description: 'single element no duplicate', assertion:'expect(containsDuplicate([42])).toBe(false)' },
    ],
    hints: [
      '`indexOf` always returns the **first** occurrence index. If `idx` differs from `indexOf(val)`, the element is a duplicate.',
      'This is O(n²) — for large arrays, a `Set` approach is more performant.',
    ],
    tags: ['Array', 'Array.prototype.some', 'indexOf', 'duplicate', 'intermediate'],
  },
]
