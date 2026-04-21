import type { Exercise } from '@/shared/types/exercises'

export const withExercises: Exercise[] = [
  {
    slug: 'array-with-basic',
    title: 'Replace Element at Index',
    description: `## Array.prototype.with\n\nThe \`with()\` method returns a new array with the element at the given index replaced by the provided value.\n\nImplement \`replaceAt\` that returns \`arr.with(index, val)\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.with',
    initialCode: `function replaceAt(arr: number[], index: number, val: number): number[] {\n  // Use arr.with(index, val)\n}`,
    solution: `function replaceAt(arr: number[], index: number, val: number): number[] {\n  return arr.with(index, val)\n}`,
    tests: [
      { description: 'replaces element at index 0', assertion: 'expect(replaceAt([1,2,3], 0, 10)).toEqual([10,2,3])' },
      { description: 'replaces element at index 1', assertion: 'expect(replaceAt([1,2,3], 1, 20)).toEqual([1,20,3])' },
      { description: 'replaces element at last index', assertion: 'expect(replaceAt([1,2,3], 2, 30)).toEqual([1,2,30])' },
      { description: 'returns an array', assertion: 'expect(Array.isArray(replaceAt([1,2,3], 0, 10))).toBe(true)' },
      { description: 'result has same length', assertion: 'expect(replaceAt([1,2,3], 0, 10)).toHaveLength(3)' },
    ],
    hints: [
      '`Array.prototype.with` was introduced in ES2023.',
      'It returns a new array — the original is not modified.',
    ],
    tags: ['array', 'with', 'immutable', 'es2023'],
    usageExample: {
      code: `const arr = [1, 2, 3, 4]
arr.with(1, 99)  // → [1, 99, 3, 4]
arr              // → [1, 2, 3, 4]  (unchanged)`,
      explanation: {
        en: 'Use with(index, value) to return a new array with one element replaced, leaving the original intact.',
        es: 'Usa with(índice, valor) para devolver un nuevo array con un elemento reemplazado, dejando el original intacto.',
      },
    },
  },
  {
    slug: 'array-with-negative',
    title: 'Replace Last Element',
    description: `## Array.prototype.with — Negative Index\n\n\`with()\` supports negative indices. \`-1\` refers to the last element.\n\nImplement \`replaceFromEnd\` that replaces the last element of \`arr\` with \`val\` using \`arr.with(-1, val)\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.with',
    initialCode: `function replaceFromEnd(arr: number[], val: number): number[] {\n  // Use arr.with(-1, val)\n}`,
    solution: `function replaceFromEnd(arr: number[], val: number): number[] {\n  return arr.with(-1, val)\n}`,
    tests: [
      { description: 'replaces last element', assertion: 'expect(replaceFromEnd([1,2,3], 99)).toEqual([1,2,99])' },
      { description: 'replaces last element in a two-element array', assertion: 'expect(replaceFromEnd([5,6], 0)).toEqual([5,0])' },
      { description: 'replaces last element in a single-element array', assertion: 'expect(replaceFromEnd([7], 42)).toEqual([42])' },
      { description: 'result has same length', assertion: 'expect(replaceFromEnd([1,2,3], 99)).toHaveLength(3)' },
      { description: 'original array is unchanged', assertion: 'expect((arr => { replaceFromEnd(arr, 99); return arr })([1,2,3])).toEqual([1,2,3])' },
    ],
    hints: [
      'Negative indices in `with()` count from the end of the array.',
      '`-1` is the last element, `-2` is second-to-last, etc.',
    ],
    tags: ['array', 'with', 'negative-index', 'es2023'],
    usageExample: {
      code: `const arr = ['a', 'b', 'c']
arr.with(-1, 'z')  // → ['a', 'b', 'z']
arr                // → ['a', 'b', 'c']  (unchanged)`,
      explanation: {
        en: 'Pass a negative index to with() to replace an element counting from the end.',
        es: 'Pasa un índice negativo a with() para reemplazar un elemento contando desde el final.',
      },
    },
  },
  {
    slug: 'array-with-no-mutation',
    title: 'Verify No Mutation',
    description: `## Array.prototype.with — Immutability\n\n\`with()\` does **not** mutate the original array. It always returns a new array.\n\nImplement \`withNoMutation\` that calls \`arr.with(0, 99)\` but returns the **original** \`arr\`. The original should be unchanged.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.with',
    initialCode: `function withNoMutation(arr: number[]): number[] {\n  // Call arr.with(0, 99) but return the original arr\n}`,
    solution: `function withNoMutation(arr: number[]): number[] {\n  arr.with(0, 99)\n  return arr\n}`,
    tests: [
      { description: 'original array is unchanged after with()', assertion: 'expect(withNoMutation([1,2,3])).toEqual([1,2,3])' },
      { description: 'first element is still original', assertion: 'expect(withNoMutation([5,6,7])[0]).toBe(5)' },
      { description: 'returns an array', assertion: 'expect(Array.isArray(withNoMutation([1,2,3]))).toBe(true)' },
      { description: 'length is unchanged', assertion: 'expect(withNoMutation([1,2,3])).toHaveLength(3)' },
      { description: 'works with all same values', assertion: 'expect(withNoMutation([0,0,0])).toEqual([0,0,0])' },
    ],
    hints: [
      '`with()` is a non-mutating method — calling it does not change the original array.',
      'The return value of `arr.with(0, 99)` is a new array, not `arr`.',
    ],
    tags: ['array', 'with', 'immutable', 'es2023'],
    usageExample: {
      code: `const original = [1, 2, 3]
const updated = original.with(0, 99)
original  // → [1, 2, 3]  (unchanged)
updated   // → [99, 2, 3]`,
      explanation: {
        en: 'with() never mutates the source array — it always returns a new array with the change applied.',
        es: 'with() nunca muta el array fuente; siempre devuelve un nuevo array con el cambio aplicado.',
      },
    },
  },
  {
    slug: 'array-with-returns-new',
    title: 'Confirm New Array Reference',
    description: `## Array.prototype.with — New Reference\n\n\`with()\` always returns a **new** array, even if the value is the same. The result is never the same reference as the original.\n\nImplement \`withReturnsNew\` that returns \`true\` if \`arr.with(0, 99) !== arr\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.with',
    initialCode: `function withReturnsNew(arr: number[]): boolean {\n  // Return true if arr.with(0, 99) !== arr\n}`,
    solution: `function withReturnsNew(arr: number[]): boolean {\n  return arr.with(0, 99) !== arr\n}`,
    tests: [
      { description: 'returns true for a normal array', assertion: 'expect(withReturnsNew([1,2,3])).toBe(true)' },
      { description: 'returns true for a single-element array', assertion: 'expect(withReturnsNew([1])).toBe(true)' },
      { description: 'returns a boolean', assertion: 'expect(typeof withReturnsNew([1,2,3])).toBe("boolean")' },
      { description: 'returns true even when value is same', assertion: 'expect(withReturnsNew([99,2,3])).toBe(true)' },
      { description: 'returns true for an array of zeros', assertion: 'expect(withReturnsNew([0,0,0])).toBe(true)' },
    ],
    hints: [
      '`with()` always allocates a new array object.',
      'Use `!==` to compare object references.',
    ],
    tags: ['array', 'with', 'reference', 'immutable', 'es2023'],
    usageExample: {
      code: `const arr = [10, 20, 30]
const result = arr.with(1, 200)
result !== arr  // → true  (different reference)`,
      explanation: {
        en: 'with() returns a brand new array — the result and the source are distinct objects.',
        es: 'with() devuelve un array completamente nuevo; el resultado y la fuente son objetos distintos.',
      },
    },
  },
  {
    slug: 'array-with-chain',
    title: 'Apply Multiple Replacements',
    description: `## Array.prototype.with — Chaining\n\n\`with()\` returns a new array, so it can be chained. Use \`reduce\` to apply a list of \`[index, value]\` changes one after another.\n\nImplement \`setMultiple(arr, changes)\` where \`changes\` is an array of \`[index, value]\` tuples.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.prototype.with',
    initialCode: `function setMultiple(arr: number[], changes: [number, number][]): number[] {\n  // Use reduce to chain arr.with() calls for each [index, val] in changes\n}`,
    solution: `function setMultiple(arr: number[], changes: [number, number][]): number[] {\n  return changes.reduce((current, [index, val]) => current.with(index, val), arr)\n}`,
    tests: [
      { description: 'applies single change', assertion: 'expect(setMultiple([1,2,3], [[0, 10]])).toEqual([10,2,3])' },
      { description: 'applies multiple changes', assertion: 'expect(setMultiple([1,2,3], [[0, 10], [2, 30]])).toEqual([10,2,30])' },
      { description: 'returns original array when no changes', assertion: 'expect(setMultiple([1,2,3], [])).toEqual([1,2,3])' },
      { description: 'result has same length as input', assertion: 'expect(setMultiple([1,2,3], [[0,9],[1,8],[2,7]])).toHaveLength(3)' },
      { description: 'later changes overwrite earlier ones at same index', assertion: 'expect(setMultiple([1,2,3], [[0, 5], [0, 9]])).toEqual([9,2,3])' },
    ],
    hints: [
      'Use `Array.prototype.reduce` to accumulate the result of repeated `.with()` calls.',
      'The accumulator starts as `arr` and each step returns `current.with(index, val)`.',
      'Because `.with()` is non-mutating, each step in the reduce produces a fresh array.',
    ],
    tags: ['array', 'with', 'reduce', 'chaining', 'immutable', 'es2023'],
    usageExample: {
      code: `const arr = [1, 2, 3]
arr.with(0, 10).with(2, 30)  // → [10, 2, 30]`,
      explanation: {
        en: 'Chain with() calls to replace multiple elements in immutable pipeline style.',
        es: 'Encadena llamadas a with() para reemplazar múltiples elementos en estilo de pipeline inmutable.',
      },
    },
  },
]
