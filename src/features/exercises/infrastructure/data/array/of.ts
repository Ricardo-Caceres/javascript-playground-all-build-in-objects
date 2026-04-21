import type { Exercise } from '@/shared/types/exercises'

export const ofExercises: Exercise[] = [
  {
    slug: 'array-of-basic',
    title: 'Array.of() — create an array from arguments',
    description: `## Array.of()

\`Array.of()\` creates a new \`Array\` instance from any number of arguments, **regardless of their number or type**. Every argument becomes an element in the resulting array.

**Challenge:** Implement \`createArrayOf\` that accepts any number of numbers and returns them as an array using \`Array.of()\`.

\`\`\`ts
createArrayOf(1, 2, 3) // → [1, 2, 3]
createArrayOf(7)       // → [7]
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.of',
    initialCode: `function createArrayOf(...args: number[]): number[] {
  // Use Array.of(...args) to create an array from the arguments
}`,
    solution: `function createArrayOf(...args: number[]): number[] {
  return Array.of(...args)
}`,
    tests: [
      { description: 'createArrayOf(1,2,3) returns [1,2,3]', assertion: 'expect(createArrayOf(1, 2, 3)).toEqual([1, 2, 3])' },
      { description: 'createArrayOf(7) returns [7]', assertion: 'expect(createArrayOf(7)).toEqual([7])' },
      { description: 'createArrayOf() returns []', assertion: 'expect(createArrayOf()).toEqual([])' },
      { description: 'result is an array', assertion: 'expect(Array.isArray(createArrayOf(1, 2))).toBe(true)' },
      { description: 'has correct length', assertion: 'expect(createArrayOf(10, 20, 30)).toHaveLength(3)' },
    ],
    hints: [
      '`Array.of(1, 2, 3)` is equivalent to the literal `[1, 2, 3]`.',
      'Spread the rest parameter into `Array.of()` to forward all arguments.',
    ],
    tags: ['Array', 'Array.of', 'beginner'],
    usageExample: {
      code: `Array.of(1, 2, 3)  // → [1, 2, 3]
Array.of(7)        // → [7]  (not a sparse array!)`,
      explanation: {
        en: 'Use Array.of() to create an array from arguments — unlike new Array(), a single number is an element.',
        es: 'Usa Array.of() para crear un array a partir de argumentos; a diferencia de new Array(), un solo número es un elemento.',
      },
    },
  },
  {
    slug: 'array-of-vs-constructor',
    title: 'Array.of() — avoid the single-number trap',
    description: `## Array.of() vs new Array()

\`new Array(7)\` creates a **sparse** array with 7 empty slots, not an array containing 7. \`Array.of(7)\` always creates an array whose single element is \`7\`. This distinction makes \`Array.of\` safer when you only have one value.

**Challenge:** Implement \`safeArrayOf\` that always wraps \`n\` in an array (i.e. returns \`[n]\`), never a sparse array of length \`n\`.

\`\`\`ts
safeArrayOf(7)   // → [7]   not [ <7 empty slots> ]
safeArrayOf(0)   // → [0]
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.of',
    initialCode: `function safeArrayOf(n: number): number[] {
  // Use Array.of(n) — never new Array(n)
}`,
    solution: `function safeArrayOf(n: number): number[] {
  return Array.of(n)
}`,
    tests: [
      { description: 'safeArrayOf(7) returns [7]', assertion: 'expect(safeArrayOf(7)).toEqual([7])' },
      { description: 'safeArrayOf(0) returns [0]', assertion: 'expect(safeArrayOf(0)).toEqual([0])' },
      { description: 'result has length 1', assertion: 'expect(safeArrayOf(42)).toHaveLength(1)' },
      { description: 'first element equals the argument', assertion: 'expect(safeArrayOf(99)[0]).toBe(99)' },
      { description: 'result is a real array', assertion: 'expect(Array.isArray(safeArrayOf(5))).toBe(true)' },
    ],
    hints: [
      '`Array.of(n)` always creates `[n]` regardless of what `n` is.',
      '`new Array(n)` treats a single numeric argument as the desired length, not a value.',
    ],
    tags: ['Array', 'Array.of', 'constructor', 'beginner'],
    usageExample: {
      code: `// Ambiguous new Array:
new Array(3)         // → [empty x 3]  (sparse)
new Array(1, 2, 3)   // → [1, 2, 3]
// Always predictable Array.of:
Array.of(3)          // → [3]`,
      explanation: {
        en: 'Prefer Array.of() over new Array() for clarity — its behavior is consistent regardless of argument count.',
        es: 'Prefiere Array.of() sobre new Array() por claridad; su comportamiento es consistente sin importar el número de argumentos.',
      },
    },
  },
  {
    slug: 'array-of-single-value',
    title: 'Array.of() — wrap a single value',
    description: `## Array.of() — generic wrapping

Because \`Array.of()\` is generic, it works with any value type. It is a clean, intention-revealing alternative to the literal \`[val]\` when you want to be explicit that you are wrapping a single value.

**Challenge:** Implement \`wrapInArray\` that takes any value and returns it inside a single-element array using \`Array.of\`.

\`\`\`ts
wrapInArray(42)      // → [42]
wrapInArray('hello') // → ['hello']
wrapInArray(null)    // → [null]
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.of',
    initialCode: `function wrapInArray<T>(val: T): T[] {
  // Use Array.of(val) to wrap the value in an array
}`,
    solution: `function wrapInArray<T>(val: T): T[] {
  return Array.of(val)
}`,
    tests: [
      { description: 'wrapInArray(42) returns [42]', assertion: 'expect(wrapInArray(42)).toEqual([42])' },
      { description: "wrapInArray('hello') returns ['hello']", assertion: "expect(wrapInArray('hello')).toEqual(['hello'])" },
      { description: 'wrapInArray(null) returns [null]', assertion: 'expect(wrapInArray(null)).toEqual([null])' },
      { description: 'result has length 1', assertion: 'expect(wrapInArray(false)).toHaveLength(1)' },
      { description: 'result is an array', assertion: 'expect(Array.isArray(wrapInArray(0))).toBe(true)' },
    ],
    hints: [
      '`Array.of(val)` is equivalent to `[val]` but communicates intent clearly.',
      'The generic `<T>` ensures the return type is inferred correctly by TypeScript.',
    ],
    tags: ['Array', 'Array.of', 'generic', 'beginner'],
    usageExample: {
      code: `Array.of(42)    // → [42]   (element)
new Array(42)   // → (42 empty slots)  (length!)`,
      explanation: {
        en: 'Array.of(n) with a single number creates a one-element array; new Array(n) creates n empty slots.',
        es: 'Array.of(n) con un solo número crea un array de un elemento; new Array(n) crea n posiciones vacías.',
      },
    },
  },
  {
    slug: 'array-of-mixed-types',
    title: 'Array.of() — mixed-type array',
    description: `## Array.of() — heterogeneous elements

\`Array.of()\` works with any mix of value types. The resulting array's type is the union of its element types.

**Challenge:** Implement \`createMixed\` that takes a number, string, boolean, and null and returns them in an array using \`Array.of\`.

\`\`\`ts
createMixed(1, 'two', true, null) // → [1, 'two', true, null]
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.of',
    initialCode: `function createMixed(
  a: number,
  b: string,
  c: boolean,
  d: null,
): (number | string | boolean | null)[] {
  // Use Array.of(a, b, c, d) to create a mixed-type array
}`,
    solution: `function createMixed(
  a: number,
  b: string,
  c: boolean,
  d: null,
): (number | string | boolean | null)[] {
  return Array.of(a, b, c, d)
}`,
    tests: [
      { description: "createMixed(1,'two',true,null) returns correct array", assertion: "expect(createMixed(1, 'two', true, null)).toEqual([1, 'two', true, null])" },
      { description: 'result has length 4', assertion: "expect(createMixed(1, 'two', true, null)).toHaveLength(4)" },
      { description: 'first element is number', assertion: "expect(typeof createMixed(1, 'x', false, null)[0]).toBe('number')" },
      { description: 'second element is string', assertion: "expect(typeof createMixed(1, 'x', false, null)[1]).toBe('string')" },
      { description: 'fourth element is null', assertion: "expect(createMixed(1, 'x', false, null)[3]).toBeNull()" },
    ],
    hints: [
      '`Array.of` accepts any types — just pass all four parameters directly.',
      'TypeScript infers the union type automatically from the function signature.',
    ],
    tags: ['Array', 'Array.of', 'mixed-types', 'intermediate'],
    usageExample: {
      code: `Array.of(1, 'two', true, null)
// → [1, 'two', true, null]`,
      explanation: {
        en: 'Array.of() accepts values of any type and places them all in a new array.',
        es: 'Array.of() acepta valores de cualquier tipo y los coloca todos en un nuevo array.',
      },
    },
  },
  {
    slug: 'array-of-verify-output',
    title: 'Array.of() — verify deep equality',
    description: `## Array.of() — deep equality check

\`Array.of()\` produces a plain array. You can verify this with \`Array.isArray\` and compare its contents with \`.every()\` to confirm each element matches the expected value.

**Challenge:** Implement \`verifyOf\` that creates \`Array.of(5, 10, 15)\` and returns \`true\` if it deep-equals \`[5, 10, 15]\`.

\`\`\`ts
verifyOf() // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.of',
    initialCode: `function verifyOf(): boolean {
  // Use Array.of(5, 10, 15) and compare with [5, 10, 15]
}`,
    solution: `function verifyOf(): boolean {
  const expected = [5, 10, 15]
  const result = Array.of(5, 10, 15)
  return result.length === expected.length && result.every((v, i) => v === expected[i])
}`,
    tests: [
      { description: 'verifyOf() returns true', assertion: 'expect(verifyOf()).toBe(true)' },
      { description: 'Array.of(5,10,15) has length 3', assertion: 'expect(Array.of(5, 10, 15)).toHaveLength(3)' },
      { description: 'Array.of(5,10,15)[0] is 5', assertion: 'expect(Array.of(5, 10, 15)[0]).toBe(5)' },
      { description: 'Array.of(5,10,15)[2] is 15', assertion: 'expect(Array.of(5, 10, 15)[2]).toBe(15)' },
      { description: 'Array.of(5,10,15) equals [5,10,15]', assertion: 'expect(Array.of(5, 10, 15)).toEqual([5, 10, 15])' },
    ],
    hints: [
      'Use `.every((v, i) => v === expected[i])` to compare element-by-element.',
      '`Array.of` always returns a plain Array, so `.toEqual` works directly on it.',
    ],
    tags: ['Array', 'Array.of', 'deep-equality', 'intermediate'],
    usageExample: {
      code: `const arr = Array.of(10, 20, 30)
Array.isArray(arr)  // → true
arr.length          // → 3`,
      explanation: {
        en: 'Array.of() always produces a real Array instance, verifiable with Array.isArray().',
        es: 'Array.of() siempre produce una instancia real de Array, verificable con Array.isArray().',
      },
    },
  },
]
