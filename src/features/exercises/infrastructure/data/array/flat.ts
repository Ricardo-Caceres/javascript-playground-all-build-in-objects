import type { Exercise } from '@/shared/types/exercises'

export const flatExercises: Exercise[] = [
  {
    slug: 'array-flat-one-level',
    title: 'Array.prototype.flat() — flatten one level',
    description: `## Array.prototype.flat()

\`Array.prototype.flat(depth?)\` returns a new array with all sub-array elements concatenated recursively up to the specified depth (default: 1). It does not mutate the original array.

**Challenge:** Implement \`flatOnce(arr)\` that flattens one level deep using \`.flat()\`.

\`\`\`ts
flatOnce([1, [2, 3], [4, [5]]]) // → [1, 2, 3, 4, [5]]
flatOnce([[1], [2, 3]])         // → [1, 2, 3]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.flat',
    initialCode: `function flatOnce(arr: (number | number[])[]): number[] {
  // Use arr.flat() to flatten one level
}`,
    solution: `function flatOnce(arr: (number | number[])[]): number[] {
  return arr.flat() as number[]
}`,
    tests: [
      { description: 'flattens one level', assertion: "expect(flatOnce([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4])" },
      { description: 'nested arrays at depth 2 not fully flattened', assertion: "expect(flatOnce([1, [2, [3]]])).toEqual([1, 2, [3]])" },
      { description: 'empty array returns empty', assertion: "expect(flatOnce([])).toEqual([])" },
      { description: 'non-nested elements unchanged', assertion: "expect(flatOnce([1, 2, 3])).toEqual([1, 2, 3])" },
      { description: 'result is a new array', assertion: "const a = [[1], [2]]; const r = flatOnce(a); expect(r !== a).toBe(true)" },
    ],
    hints: [
      '`flat()` with no argument defaults to depth `1`.',
      'Nested arrays deeper than depth 1 are not unwrapped.',
    ],
    tags: ['Array', 'Array.prototype.flat', 'flatten', 'beginner'],
  },
  {
    slug: 'array-flat-deep',
    title: 'Array.prototype.flat() — flatten to any depth',
    description: `## Array.prototype.flat() — Infinity depth

Passing \`Infinity\` as the depth argument to \`flat()\` flattens all levels of nesting, no matter how deep.

**Challenge:** Implement \`flatDeep(arr)\` that flattens all nested arrays using \`arr.flat(Infinity)\`.

\`\`\`ts
flatDeep([1, [2, [3, [4]]]]) // → [1, 2, 3, 4]
flatDeep([[[[1]]]])           // → [1]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.flat',
    initialCode: `function flatDeep(arr: unknown[]): unknown[] {
  // Use arr.flat(Infinity) to flatten all nesting levels
}`,
    solution: `function flatDeep(arr: unknown[]): unknown[] {
  return arr.flat(Infinity)
}`,
    tests: [
      { description: 'flattens deeply nested array', assertion: "expect(flatDeep([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4])" },
      { description: 'flattens quadruple nesting', assertion: "expect(flatDeep([[[[1]]]])).toEqual([1])" },
      { description: 'empty array returns empty', assertion: "expect(flatDeep([])).toEqual([])" },
      { description: 'already flat remains flat', assertion: "expect(flatDeep([1, 2, 3])).toEqual([1, 2, 3])" },
      { description: 'mixed depths all flattened', assertion: "expect(flatDeep([[1], [2, [3]], 4])).toEqual([1, 2, 3, 4])" },
    ],
    hints: [
      '`Infinity` as the depth argument tells `flat()` to keep unwrapping until no nested arrays remain.',
      'This is equivalent to repeatedly calling `flat()` until the array stops changing.',
    ],
    tags: ['Array', 'Array.prototype.flat', 'flatten', 'depth', 'intermediate'],
  },
  {
    slug: 'array-flat-level-two',
    title: 'Array.prototype.flat() — flatten two levels',
    description: `## Array.prototype.flat() — depth 2

You can specify a numeric depth to control how many levels are unwrapped. \`flat(2)\` flattens two levels.

**Challenge:** Implement \`flatTwo(arr)\` that flattens exactly two levels using \`arr.flat(2)\`.

\`\`\`ts
flatTwo([1, [2, [3, [4]]]]) // → [1, 2, 3, [4]]
flatTwo([[1], [[2, 3]]])    // → [1, 2, 3]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.flat',
    initialCode: `function flatTwo(arr: (number | number[] | number[][])[]): number[] {
  // Use arr.flat(2) to flatten two levels deep
}`,
    solution: `function flatTwo(arr: (number | number[] | number[][])[]): number[] {
  return arr.flat(2) as number[]
}`,
    tests: [
      { description: 'flattens two levels', assertion: "expect(flatTwo([1, [2, [3, [4]]]])).toEqual([1, 2, 3, [4]])" },
      { description: 'two levels of wrapping fully flattened', assertion: "expect(flatTwo([[1], [[2, 3]]])).toEqual([1, 2, 3])" },
      { description: 'empty array returns empty', assertion: "expect(flatTwo([])).toEqual([])" },
      { description: 'depth-3 nesting partially flattened', assertion: "expect(flatTwo([[[1]], [[2]]])).toEqual([1, 2])" },
      { description: 'non-nested unchanged', assertion: "expect(flatTwo([1, 2, 3])).toEqual([1, 2, 3])" },
    ],
    hints: [
      '`flat(2)` unwraps arrays inside arrays, but leaves third-level nesting intact.',
      'Depth 2 means: flatten once, then flatten the result once more.',
    ],
    tags: ['Array', 'Array.prototype.flat', 'depth', 'intermediate'],
  },
  {
    slug: 'array-flat-remove-holes',
    title: 'Array.prototype.flat() — remove falsy and flat',
    description: `## Array.prototype.flat() — combining with filter

\`flat()\` can be combined with \`filter\` to both remove unwanted values and flatten the result.

**Challenge:** Implement \`removeHoles(arr)\` that filters out falsy values then calls \`flat()\`.

\`\`\`ts
removeHoles([1, undefined, 2, null, 3]) // → [1, 2, 3]
removeHoles([0, [1, 2], undefined])     // → [1, 2]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.flat',
    initialCode: `function removeHoles(arr: (number | undefined | null)[]): number[] {
  // Use arr.filter(Boolean).flat() to remove falsy values
}`,
    solution: `function removeHoles(arr: (number | undefined | null)[]): number[] {
  return arr.filter(Boolean).flat() as number[]
}`,
    tests: [
      { description: 'removes undefined and null', assertion: "expect(removeHoles([1, undefined, 2, null, 3])).toEqual([1, 2, 3])" },
      { description: 'removes zero (falsy)', assertion: "expect(removeHoles([0, 1, 2])).toEqual([1, 2])" },
      { description: 'empty array returns empty', assertion: "expect(removeHoles([])).toEqual([])" },
      { description: 'all valid returns same values', assertion: "expect(removeHoles([1, 2, 3])).toEqual([1, 2, 3])" },
      { description: 'all falsy returns empty', assertion: "expect(removeHoles([null, undefined])).toEqual([])" },
    ],
    hints: [
      '`filter(Boolean)` removes all falsy values.',
      '`.flat()` after filter ensures any nested arrays (not filtered) are also unwrapped.',
    ],
    tags: ['Array', 'Array.prototype.flat', 'filter', 'falsy', 'intermediate'],
  },
  {
    slug: 'array-flat-custom-depth',
    title: 'Array.prototype.flat() — configurable depth',
    description: `## Array.prototype.flat() — dynamic depth

The depth argument to \`flat()\` can be any non-negative integer or \`Infinity\`. This lets you build configurable flattening utilities.

**Challenge:** Implement \`flatToDepth(arr, depth)\` that wraps \`arr.flat(depth)\`.

\`\`\`ts
flatToDepth([1, [2, [3]]], 1) // → [1, 2, [3]]
flatToDepth([1, [2, [3]]], 2) // → [1, 2, 3]
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.prototype.flat',
    initialCode: `function flatToDepth(arr: unknown[], depth: number): unknown[] {
  // Use arr.flat(depth) to flatten to the specified depth
}`,
    solution: `function flatToDepth(arr: unknown[], depth: number): unknown[] {
  return arr.flat(depth)
}`,
    tests: [
      { description: 'depth 1 flattens one level', assertion: "expect(flatToDepth([1, [2, [3]]], 1)).toEqual([1, 2, [3]])" },
      { description: 'depth 2 flattens two levels', assertion: "expect(flatToDepth([1, [2, [3]]], 2)).toEqual([1, 2, 3])" },
      { description: 'depth 0 is a no-op', assertion: "expect(flatToDepth([[1], [2]], 0)).toEqual([[1], [2]])" },
      { description: 'empty array returns empty', assertion: "expect(flatToDepth([], 5)).toEqual([])" },
      { description: 'large depth fully flattens', assertion: "expect(flatToDepth([[[1, 2]]], 10)).toEqual([1, 2])" },
    ],
    hints: [
      'Any non-negative integer works as the depth argument.',
      'Depth `0` returns a shallow copy of the array without flattening.',
    ],
    tags: ['Array', 'Array.prototype.flat', 'depth', 'advanced'],
  },
]
