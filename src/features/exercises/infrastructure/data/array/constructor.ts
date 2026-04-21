import type { Exercise } from '@/shared/types/exercises'

export const constructorExercises: Exercise[] = [
  {
    slug: 'array-constructor-empty',
    title: 'Array() — create an empty array',
    description: `## Array constructor

The \`Array\` constructor creates array objects. Called with no arguments, it produces an empty array identical to \`[]\`.

**Challenge:** Implement \`createEmptyArray\` using \`new Array()\` to return an empty array.

\`\`\`ts
createEmptyArray() // → []
\`\`\``,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array',
    initialCode: `function createEmptyArray(): number[] {
  // Use new Array() to create an empty array
}`,
    solution: `function createEmptyArray(): number[] {
  return new Array()
}`,
    tests: [
      { description: 'returns an array', assertion: 'expect(Array.isArray(createEmptyArray())).toBe(true)' },
      { description: 'returns an empty array', assertion: 'expect(createEmptyArray()).toHaveLength(0)' },
      { description: 'first element is undefined', assertion: 'expect(createEmptyArray()[0]).toBeUndefined()' },
      { description: 'is truthy (not null)', assertion: 'expect(createEmptyArray()).toBeTruthy()' },
      { description: 'length is 0', assertion: 'expect(createEmptyArray().length).toBe(0)' },
    ],
    hints: [
      '`new Array()` with no arguments creates an empty array.',
      'The result is identical to `[]`.',
    ],
    tags: ['Array', 'constructor', 'beginner'],
    usageExample: {
      code: `const empty = new Array()
empty.length  // → 0
empty         // → []`,
      explanation: {
        en: 'Call new Array() with no arguments to create an empty array.',
        es: 'Llama a new Array() sin argumentos para crear un array vacío.',
      },
    },
  },
  {
    slug: 'array-constructor-with-length',
    title: 'Array() — create array with a given length',
    description: `## Array constructor — with a length argument

When the \`Array\` constructor receives a single numeric argument, it creates a **sparse** array with that many empty slots. The array has the correct \`length\` but no actual element values.

**Challenge:** Implement \`createArrayOfLength\` that returns a sparse array of length \`n\`.

\`\`\`ts
createArrayOfLength(3)  // → [ <3 empty slots> ] (length === 3)
createArrayOfLength(0)  // → [] (length === 0)
\`\`\``,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array',
    initialCode: `function createArrayOfLength(n: number): unknown[] {
  // Use new Array(n) to create a sparse array of length n
}`,
    solution: `function createArrayOfLength(n: number): unknown[] {
  return new Array(n)
}`,
    tests: [
      { description: 'length is 3', assertion: 'expect(createArrayOfLength(3)).toHaveLength(3)' },
      { description: 'length is 0', assertion: 'expect(createArrayOfLength(0)).toHaveLength(0)' },
      { description: 'length is 10', assertion: 'expect(createArrayOfLength(10)).toHaveLength(10)' },
      { description: 'result is an array', assertion: 'expect(Array.isArray(createArrayOfLength(5))).toBe(true)' },
      { description: 'slots are empty (undefined)', assertion: 'expect(createArrayOfLength(2)[0]).toBeUndefined()' },
    ],
    hints: [
      '`new Array(n)` creates a sparse array — it has a `length` but the slots are empty.',
      'This differs from `new Array(1, 2, 3)` which creates `[1, 2, 3]`.',
    ],
    tags: ['Array', 'constructor', 'sparse', 'beginner'],
    usageExample: {
      code: `const sparse = new Array(3)
sparse.length  // → 3
sparse         // → [ <3 empty items> ]`,
      explanation: {
        en: 'Pass a single number to new Array(n) to create a sparse array with a preset length.',
        es: 'Pasa un solo número a new Array(n) para crear un array disperso con una longitud predefinida.',
      },
    },
  },
  {
    slug: 'array-constructor-with-elements',
    title: 'Array() — create array from multiple arguments',
    description: `## Array constructor — with multiple arguments

When the \`Array\` constructor receives **more than one** argument, each argument becomes an element in the resulting array. This is equivalent to an array literal.

**Challenge:** Implement \`createArrayFromArgs\` that accepts any number of numbers and returns them as an array using \`new Array(...args)\`.

\`\`\`ts
createArrayFromArgs(1, 2, 3) // → [1, 2, 3]
createArrayFromArgs(42)      // → [42]
\`\`\``,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array',
    initialCode: `function createArrayFromArgs(...args: number[]): number[] {
  // Use new Array(...args) to create an array from the arguments
}`,
    solution: `function createArrayFromArgs(...args: number[]): number[] {
  return new Array(...args)
}`,
    tests: [
      { description: 'creates [1,2,3] from three arguments', assertion: 'expect(createArrayFromArgs(1, 2, 3)).toEqual([1, 2, 3])' },
      { description: 'single argument becomes a one-element array', assertion: 'expect(createArrayFromArgs(42)).toEqual([42])' },
      { description: 'no arguments produces empty array', assertion: 'expect(createArrayFromArgs()).toHaveLength(0)' },
      { description: 'result has correct length', assertion: 'expect(createArrayFromArgs(10, 20)).toHaveLength(2)' },
      { description: 'elements are in order', assertion: 'expect(createArrayFromArgs(5, 4, 3)[2]).toBe(3)' },
    ],
    hints: [
      'Spreading the rest parameter into `new Array()` passes each value as a separate argument.',
      'With 2+ numeric args, the constructor stores them as elements, not as a length.',
    ],
    tags: ['Array', 'constructor', 'rest-parameters', 'beginner'],
    usageExample: {
      code: `const arr = new Array(1, 2, 3)
arr  // → [1, 2, 3]`,
      explanation: {
        en: 'Pass multiple arguments to new Array() to create an array pre-filled with those values.',
        es: 'Pasa múltiples argumentos a new Array() para crear un array prellenado con esos valores.',
      },
    },
  },
  {
    slug: 'array-constructor-fill-pattern',
    title: 'Array() — create an array of zeros',
    description: `## Array constructor + fill()

A common pattern is to combine \`new Array(n)\` with \`.fill(value)\` to create an array of \`n\` identical values without a loop. The sparse array produced by \`new Array(n)\` is immediately filled with the provided value.

**Challenge:** Implement \`createZeros\` that returns an array of \`n\` zeros.

\`\`\`ts
createZeros(4) // → [0, 0, 0, 0]
createZeros(0) // → []
\`\`\``,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array',
    initialCode: `function createZeros(n: number): number[] {
  // Use new Array(n).fill(0) to create an array of n zeros
}`,
    solution: `function createZeros(n: number): number[] {
  return new Array(n).fill(0)
}`,
    tests: [
      { description: 'createZeros(4) returns [0,0,0,0]', assertion: 'expect(createZeros(4)).toEqual([0, 0, 0, 0])' },
      { description: 'createZeros(0) returns []', assertion: 'expect(createZeros(0)).toEqual([])' },
      { description: 'all elements are 0', assertion: 'expect(createZeros(5).every(x => x === 0)).toBe(true)' },
      { description: 'has correct length', assertion: 'expect(createZeros(7)).toHaveLength(7)' },
      { description: 'is a real array', assertion: 'expect(Array.isArray(createZeros(3))).toBe(true)' },
    ],
    hints: [
      '`new Array(n)` creates an empty-slot array; `.fill(0)` replaces every slot with `0`.',
      'This pattern avoids a for-loop and is very common in algorithm problems.',
    ],
    tags: ['Array', 'constructor', 'fill', 'intermediate'],
    usageExample: {
      code: `const zeros = new Array(5).fill(0)
zeros  // → [0, 0, 0, 0, 0]`,
      explanation: {
        en: 'Combine new Array(n) with fill() to create an array of n identical values.',
        es: 'Combina new Array(n) con fill() para crear un array de n valores idénticos.',
      },
    },
  },
  {
    slug: 'array-constructor-spread',
    title: 'Array() — create a range [1…n]',
    description: `## Array constructor — creating a range

To produce \`[1, 2, 3, …, n]\` you can combine \`new Array(n)\` (which creates \`n\` empty slots) with \`Array.from\` and a mapping function, or spread the result of \`Array(n).keys()\`.

**Challenge:** Implement \`createRange\` that returns \`[1, 2, …, n]\`.

\`\`\`ts
createRange(5) // → [1, 2, 3, 4, 5]
createRange(1) // → [1]
\`\`\``,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array',
    initialCode: `function createRange(n: number): number[] {
  // Use new Array(n) combined with Array.from or spread + keys() to create [1, 2, ..., n]
}`,
    solution: `function createRange(n: number): number[] {
  return Array.from(new Array(n), (_, i) => i + 1)
}`,
    tests: [
      { description: 'createRange(5) returns [1,2,3,4,5]', assertion: 'expect(createRange(5)).toEqual([1, 2, 3, 4, 5])' },
      { description: 'createRange(1) returns [1]', assertion: 'expect(createRange(1)).toEqual([1])' },
      { description: 'first element is always 1', assertion: 'expect(createRange(3)[0]).toBe(1)' },
      { description: 'last element equals n', assertion: 'expect(createRange(7)[6]).toBe(7)' },
      { description: 'length equals n', assertion: 'expect(createRange(10)).toHaveLength(10)' },
    ],
    hints: [
      '`Array.from(new Array(n), (_, i) => i + 1)` maps each slot index to `index + 1`.',
      'You could also do `[...Array(n).keys()].map(i => i + 1)`.',
    ],
    tags: ['Array', 'constructor', 'Array.from', 'range', 'intermediate'],
    usageExample: {
      code: `const range = [...new Array(4).keys()]
range  // → [0, 1, 2, 3]`,
      explanation: {
        en: 'Spread new Array(n).keys() to generate a compact 0-based index range array.',
        es: 'Extiende new Array(n).keys() para generar un array compacto de índices de base 0.',
      },
    },
  },
]
