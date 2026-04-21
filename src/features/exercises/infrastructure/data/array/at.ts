import type { Exercise } from '@/shared/types/exercises'

export const atExercises: Exercise[] = [
  {
    slug: 'array-at-positive',
    title: 'Array.prototype.at() — get first element',
    description: `## Array.prototype.at()

\`Array.prototype.at(index)\` returns the element at the given index. It works just like bracket notation for positive indices, but also accepts negative integers to count from the end.

**Challenge:** Implement \`getElement(arr, 0)\` that returns the first element of \`arr\` using \`.at(0)\`.

\`\`\`ts
getElement([10, 20, 30], 0) // → 10
getElement(['a', 'b'], 0)   // → 'a'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.at',
    initialCode: `function getElement<T>(arr: T[], index: number): T | undefined {
  // Use arr.at(index) to return the element at the given index
}`,
    solution: `function getElement<T>(arr: T[], index: number): T | undefined {
  return arr.at(index)
}`,
    tests: [
      { description: 'returns first element with index 0', assertion: "expect(getElement([10, 20, 30], 0)).toBe(10)" },
      { description: 'works with strings', assertion: "expect(getElement(['a', 'b', 'c'], 0)).toBe('a')" },
      { description: 'returns correct element at positive index', assertion: "expect(getElement([1, 2, 3, 4], 2)).toBe(3)" },
      { description: 'single-element array', assertion: "expect(getElement([42], 0)).toBe(42)" },
      { description: 'returns undefined for out-of-bounds', assertion: "expect(getElement([1, 2], 5)).toBeUndefined()" },
    ],
    hints: [
      '`arr.at(0)` is equivalent to `arr[0]` for non-negative indices.',
      'The `.at()` method returns `undefined` for out-of-bounds indices, just like bracket notation.',
    ],
    tags: ['Array', 'Array.prototype.at', 'index', 'beginner'],
    usageExample: {
      code: `const colors = ['red', 'green', 'blue']
colors.at(0)  // → 'red'
colors.at(1)  // → 'green'`,
      explanation: {
        en: 'Use at() to access an element by a positive index, just like bracket notation.',
        es: 'Usa at() para acceder a un elemento por un índice positivo, igual que la notación de corchetes.',
      },
    },
  },
  {
    slug: 'array-at-negative',
    title: 'Array.prototype.at() — get last element',
    description: `## Array.prototype.at() — negative indices

One of the key advantages of \`.at()\` over bracket notation is support for **negative indices**. \`arr.at(-1)\` returns the last element without needing \`arr[arr.length - 1]\`.

**Challenge:** Implement \`getLast(arr)\` that returns the last element using \`.at(-1)\`.

\`\`\`ts
getLast([1, 2, 3]) // → 3
getLast(['x'])     // → 'x'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.at',
    initialCode: `function getLast<T>(arr: T[]): T | undefined {
  // Use arr.at(-1) to return the last element
}`,
    solution: `function getLast<T>(arr: T[]): T | undefined {
  return arr.at(-1)
}`,
    tests: [
      { description: 'returns last element of [1,2,3]', assertion: "expect(getLast([1, 2, 3])).toBe(3)" },
      { description: 'works on single-element array', assertion: "expect(getLast(['x'])).toBe('x')" },
      { description: 'returns last string in string array', assertion: "expect(getLast(['a', 'b', 'c'])).toBe('c')" },
      { description: 'empty array returns undefined', assertion: "expect(getLast([])).toBeUndefined()" },
      { description: 'returns last of five elements', assertion: "expect(getLast([10, 20, 30, 40, 50])).toBe(50)" },
    ],
    hints: [
      '`arr.at(-1)` is the clean equivalent of `arr[arr.length - 1]`.',
      'Negative indices count backwards from the end of the array.',
    ],
    tags: ['Array', 'Array.prototype.at', 'negative-index', 'beginner'],
    usageExample: {
      code: `const nums = [10, 20, 30, 40]
nums.at(-1)  // → 40  (last)
nums.at(-2)  // → 30  (second-to-last)`,
      explanation: {
        en: 'Use at(-1) to reliably access the last element without knowing the array length.',
        es: 'Usa at(-1) para acceder al último elemento de forma confiable sin conocer la longitud del array.',
      },
    },
  },
  {
    slug: 'array-at-second-to-last',
    title: 'Array.prototype.at() — second-to-last element',
    description: `## Array.prototype.at() — counting from the end

\`.at(-2)\` gives you the second-to-last element. Compare this to the bracket notation equivalent: \`arr[arr.length - 2]\` — \`.at()\` is much more readable.

**Challenge:** Implement \`getSecondToLast(arr)\` that returns the second-to-last element using \`.at(-2)\`.

\`\`\`ts
getSecondToLast([1, 2, 3, 4]) // → 3
getSecondToLast(['a', 'b'])   // → 'a'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.at',
    initialCode: `function getSecondToLast<T>(arr: T[]): T | undefined {
  // Use arr.at(-2) to return the second-to-last element
}`,
    solution: `function getSecondToLast<T>(arr: T[]): T | undefined {
  return arr.at(-2)
}`,
    tests: [
      { description: 'returns second-to-last of [1,2,3,4]', assertion: "expect(getSecondToLast([1, 2, 3, 4])).toBe(3)" },
      { description: 'returns first element of two-element array', assertion: "expect(getSecondToLast(['a', 'b'])).toBe('a')" },
      { description: 'single-element array returns undefined', assertion: "expect(getSecondToLast([1])).toBeUndefined()" },
      { description: 'empty array returns undefined', assertion: "expect(getSecondToLast([])).toBeUndefined()" },
      { description: 'works with larger arrays', assertion: "expect(getSecondToLast([10, 20, 30, 40, 50])).toBe(40)" },
    ],
    hints: [
      '`arr.at(-2)` counts 2 from the end, equivalent to `arr[arr.length - 2]`.',
      'If the array has fewer than 2 elements, `.at(-2)` returns `undefined`.',
    ],
    tags: ['Array', 'Array.prototype.at', 'negative-index', 'beginner'],
    usageExample: {
      code: `const items = ['a', 'b', 'c', 'd']
items.at(-2)  // → 'c'
items.at(-1)  // → 'd'`,
      explanation: {
        en: 'Use at() with negative indices to access elements from the end of an array.',
        es: 'Usa at() con índices negativos para acceder a elementos desde el final de un array.',
      },
    },
  },
  {
    slug: 'array-at-undefined',
    title: 'Array.prototype.at() — out-of-bounds returns undefined',
    description: `## Array.prototype.at() — safe access

\`.at(n)\` returns \`undefined\` when \`n\` is out of bounds (either too large or too negative). This makes it a safe alternative to bracket notation.

**Challenge:** Implement \`safeAt(arr, n)\` that returns \`arr.at(n)\`, which is \`undefined\` if the index is out of bounds.

\`\`\`ts
safeAt([1, 2, 3], 10)  // → undefined
safeAt([1, 2, 3], -5)  // → undefined
safeAt([1, 2, 3], 1)   // → 2
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.at',
    initialCode: `function safeAt<T>(arr: T[], n: number): T | undefined {
  // Use arr.at(n) — it returns undefined for out-of-bounds indices
}`,
    solution: `function safeAt<T>(arr: T[], n: number): T | undefined {
  return arr.at(n)
}`,
    tests: [
      { description: 'returns undefined for large positive index', assertion: "expect(safeAt([1, 2, 3], 10)).toBeUndefined()" },
      { description: 'returns undefined for large negative index', assertion: "expect(safeAt([1, 2, 3], -5)).toBeUndefined()" },
      { description: 'returns correct value for valid index', assertion: "expect(safeAt([1, 2, 3], 1)).toBe(2)" },
      { description: 'returns undefined for empty array', assertion: "expect(safeAt([], 0)).toBeUndefined()" },
      { description: 'negative index within bounds works', assertion: "expect(safeAt([10, 20, 30], -1)).toBe(30)" },
    ],
    hints: [
      '`.at()` never throws — it returns `undefined` when the index is out of range.',
      'A negative index `-n` is out of bounds when `n > arr.length`.',
    ],
    tags: ['Array', 'Array.prototype.at', 'undefined', 'safe-access', 'intermediate'],
    usageExample: {
      code: `const arr = [1, 2, 3]
arr.at(5)   // → undefined
arr.at(-5)  // → undefined`,
      explanation: {
        en: 'at() returns undefined when the index is out of bounds, making it safe for optional access.',
        es: 'at() devuelve undefined cuando el índice está fuera de límites, haciéndolo seguro para acceso opcional.',
      },
    },
  },
  {
    slug: 'array-at-vs-bracket',
    title: 'Array.prototype.at() — get middle element',
    description: `## Array.prototype.at() — computed indices

\`.at()\` can accept computed indices just like bracket notation. For an odd-length array, the middle element is at index \`Math.floor(arr.length / 2)\`.

**Challenge:** Implement \`getMiddle(arr)\` that returns the middle element of an odd-length array using \`.at()\`.

\`\`\`ts
getMiddle([1, 2, 3, 4, 5]) // → 3
getMiddle([10, 20, 30])    // → 20
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.at',
    initialCode: `function getMiddle<T>(arr: T[]): T | undefined {
  // Use arr.at(Math.floor(arr.length / 2)) to return the middle element
}`,
    solution: `function getMiddle<T>(arr: T[]): T | undefined {
  return arr.at(Math.floor(arr.length / 2))
}`,
    tests: [
      { description: 'middle of [1,2,3,4,5] is 3', assertion: "expect(getMiddle([1, 2, 3, 4, 5])).toBe(3)" },
      { description: 'middle of [10,20,30] is 20', assertion: "expect(getMiddle([10, 20, 30])).toBe(20)" },
      { description: 'single-element array returns that element', assertion: "expect(getMiddle([42])).toBe(42)" },
      { description: 'middle of [1,2,3] is 2', assertion: "expect(getMiddle([1, 2, 3])).toBe(2)" },
      { description: 'works with string array', assertion: "expect(getMiddle(['a', 'b', 'c', 'd', 'e'])).toBe('c')" },
    ],
    hints: [
      '`Math.floor(arr.length / 2)` gives the center index for any odd-length array.',
      '`.at()` accepts any integer expression as an argument.',
    ],
    tags: ['Array', 'Array.prototype.at', 'index', 'intermediate'],
    usageExample: {
      code: `const arr = ['x', 'y', 'z']
arr[arr.length - 1]  // → 'z'  (bracket)
arr.at(-1)           // → 'z'  (at — cleaner)`,
      explanation: {
        en: 'Prefer at() over bracket notation when accessing the last element — it avoids manual length arithmetic.',
        es: 'Prefiere at() sobre la notación de corchetes al acceder al último elemento, evitando aritmética manual con length.',
      },
    },
  },
]
