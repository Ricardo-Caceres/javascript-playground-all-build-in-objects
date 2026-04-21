import type { Exercise } from '@/shared/types/exercises'

export const isArrayExercises: Exercise[] = [
  {
    slug: 'array-is-array-basic',
    title: 'Array.isArray() — basic check',
    description: `## Array.isArray()

\`Array.isArray(value)\` returns \`true\` if and only if the value is an Array object. It is the most reliable way to check for arrays — more reliable than \`instanceof Array\` when working across iframes or with subclasses.

**Challenge:** Implement \`isItAnArray\` that returns \`true\` when the value is an array and \`false\` otherwise.

\`\`\`ts
isItAnArray([1, 2, 3]) // → true
isItAnArray('hello')   // → false
isItAnArray({})        // → false
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.isArray',
    initialCode: `function isItAnArray(val: unknown): boolean {
  // Use Array.isArray to check whether val is an array
}`,
    solution: `function isItAnArray(val: unknown): boolean {
  return Array.isArray(val)
}`,
    tests: [
      { description: '[1,2,3] is an array', assertion: 'expect(isItAnArray([1, 2, 3])).toBe(true)' },
      { description: 'empty array is an array', assertion: "expect(isItAnArray([])).toBe(true)" },
      { description: 'string is not an array', assertion: "expect(isItAnArray('hello')).toBe(false)" },
      { description: 'object is not an array', assertion: "expect(isItAnArray({})).toBe(false)" },
      { description: 'null is not an array', assertion: "expect(isItAnArray(null)).toBe(false)" },
    ],
    hints: [
      '`Array.isArray` is the canonical, spec-defined way to test for arrays.',
      'It correctly returns `false` for `null`, `undefined`, objects, and strings.',
    ],
    tags: ['Array', 'Array.isArray', 'beginner'],
    usageExample: {
      code: `Array.isArray([1, 2, 3])   // → true
Array.isArray('hello')     // → false
Array.isArray({length: 3}) // → false`,
      explanation: {
        en: 'Use Array.isArray() to reliably check whether a value is an array.',
        es: 'Usa Array.isArray() para comprobar de forma confiable si un valor es un array.',
      },
    },
  },
  {
    slug: 'array-is-array-vs-typeof',
    title: 'Array.isArray() — why not typeof',
    description: `## Array.isArray() vs typeof

\`typeof []\` returns \`'object'\` — the same as for plain objects, \`null\`, and other non-primitives. \`Array.isArray()\` was introduced specifically to distinguish real arrays from objects.

**Challenge:** Implement \`isRealArray\` that returns \`true\` only for real arrays (not other objects) by using \`Array.isArray\`.

\`\`\`ts
isRealArray([])           // → true  (typeof [] === 'object' too!)
isRealArray({})           // → false
isRealArray(null)         // → false (typeof null === 'object' — gotcha!)
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.isArray',
    initialCode: `function isRealArray(val: unknown): boolean {
  // typeof won't work — use Array.isArray instead
}`,
    solution: `function isRealArray(val: unknown): boolean {
  return Array.isArray(val)
}`,
    tests: [
      { description: 'empty array returns true', assertion: 'expect(isRealArray([])).toBe(true)' },
      { description: 'plain object returns false', assertion: 'expect(isRealArray({})).toBe(false)' },
      { description: 'null returns false', assertion: 'expect(isRealArray(null)).toBe(false)' },
      { description: 'number returns false', assertion: 'expect(isRealArray(42)).toBe(false)' },
      { description: '[1,2] returns true', assertion: 'expect(isRealArray([1, 2])).toBe(true)' },
    ],
    hints: [
      '`typeof null === "object"` is a famous JavaScript quirk — always use `Array.isArray` for arrays.',
      '`typeof []` also returns `"object"`, making `typeof` useless for this check.',
    ],
    tags: ['Array', 'Array.isArray', 'typeof', 'beginner'],
    usageExample: {
      code: `typeof []          // → 'object'  (misleading)
Array.isArray([])  // → true      (accurate)`,
      explanation: {
        en: "Prefer Array.isArray() over typeof for array detection — typeof returns 'object' for arrays.",
        es: "Prefiere Array.isArray() sobre typeof para detectar arrays; typeof devuelve 'object' para arrays.",
      },
    },
  },
  {
    slug: 'array-is-array-filter',
    title: 'Array.isArray() — filter only arrays',
    description: `## Array.isArray() — filtering a mixed collection

\`Array.isArray\` is often used as a predicate in \`.filter()\` to pull only array values out of a mixed collection.

**Challenge:** Implement \`keepOnlyArrays\` that takes an array of unknown values and returns only the elements that are themselves arrays.

\`\`\`ts
keepOnlyArrays([1, [2], 'hi', [3, 4], null]) // → [[2], [3, 4]]
keepOnlyArrays([1, 2, 3])                    // → []
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.isArray',
    initialCode: `function keepOnlyArrays(vals: unknown[]): unknown[][] {
  // Use .filter() with Array.isArray as the predicate
}`,
    solution: `function keepOnlyArrays(vals: unknown[]): unknown[][] {
  return vals.filter(Array.isArray) as unknown[][]
}`,
    tests: [
      { description: "keeps [2] and [3,4] from mixed array", assertion: "expect(keepOnlyArrays([1, [2], 'hi', [3, 4], null])).toEqual([[2], [3, 4]])" },
      { description: 'no arrays returns []', assertion: "expect(keepOnlyArrays([1, 'two', null])).toEqual([])" },
      { description: 'all arrays are kept', assertion: 'expect(keepOnlyArrays([[1], [2], [3]])).toHaveLength(3)' },
      { description: 'empty input returns []', assertion: 'expect(keepOnlyArrays([])).toEqual([])' },
      { description: 'result contains only arrays', assertion: 'expect(keepOnlyArrays([1, [2], {}]).every(Array.isArray)).toBe(true)' },
    ],
    hints: [
      '`Array.isArray` is a function — you can pass it directly to `.filter()` without wrapping.',
      'The return type is `unknown[][]` because the kept elements are themselves arrays.',
    ],
    tags: ['Array', 'Array.isArray', 'filter', 'intermediate'],
    usageExample: {
      code: `const mixed = [1, 'a', [2, 3], {b: 4}, [5]]
mixed.filter(Array.isArray)  // → [[2, 3], [5]]`,
      explanation: {
        en: 'Pass Array.isArray as a filter callback to extract only the array elements from a mixed collection.',
        es: 'Pasa Array.isArray como callback de filter para extraer solo los elementos array de una colección mixta.',
      },
    },
  },
  {
    slug: 'array-is-array-nested',
    title: 'Array.isArray() — check if all elements are arrays',
    description: `## Array.isArray() — array of arrays

Using \`Array.isArray\` together with \`.every()\` lets you verify that every element of an array is itself an array — a useful validation when working with matrix data.

**Challenge:** Implement \`isArrayOfArrays\` that returns \`true\` only when the input is an array **and** every element is also an array.

\`\`\`ts
isArrayOfArrays([[1, 2], [3, 4]]) // → true
isArrayOfArrays([[1], 2, [3]])    // → false
isArrayOfArrays([])               // → true  (vacuously true)
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.isArray',
    initialCode: `function isArrayOfArrays(val: unknown): boolean {
  // Check the outer value is an array, then every element is also an array
}`,
    solution: `function isArrayOfArrays(val: unknown): boolean {
  return Array.isArray(val) && (val as unknown[]).every(Array.isArray)
}`,
    tests: [
      { description: '[[1,2],[3,4]] returns true', assertion: 'expect(isArrayOfArrays([[1, 2], [3, 4]])).toBe(true)' },
      { description: '[[1], 2, [3]] returns false (2 is not an array)', assertion: 'expect(isArrayOfArrays([[1], 2, [3]])).toBe(false)' },
      { description: 'empty array returns true', assertion: 'expect(isArrayOfArrays([])).toBe(true)' },
      { description: 'non-array input returns false', assertion: 'expect(isArrayOfArrays("not an array")).toBe(false)' },
      { description: 'single nested array returns true', assertion: 'expect(isArrayOfArrays([[1, 2, 3]])).toBe(true)' },
    ],
    hints: [
      'First guard with `Array.isArray(val)`, then chain `.every(Array.isArray)` on the result.',
      '`.every()` short-circuits on the first failing element.',
    ],
    tags: ['Array', 'Array.isArray', 'every', 'nested', 'intermediate'],
    usageExample: {
      code: `const matrix = [[1, 2], [3, 4]]
matrix.every(Array.isArray)  // → true  (all rows are arrays)`,
      explanation: {
        en: 'Use Array.isArray with every() to confirm all elements of an array are themselves arrays.',
        es: 'Usa Array.isArray con every() para confirmar que todos los elementos de un array son también arrays.',
      },
    },
  },
  {
    slug: 'array-is-array-array-like',
    title: 'Array.isArray() — distinguish array-like objects',
    description: `## Array.isArray() — arrays vs array-like objects

An **array-like** object has a numeric \`length\` property (e.g. \`{ length: 2 }\`, \`arguments\`, \`NodeList\`) but is not a real array. \`Array.isArray\` returns \`false\` for them.

**Challenge:** Implement \`getType\` that classifies a value as:
- \`'array'\` — a real array
- \`'array-like'\` — a non-array object with a numeric \`length\` property
- \`'other'\` — anything else

\`\`\`ts
getType([1, 2])       // → 'array'
getType({ length: 2}) // → 'array-like'
getType('hello')      // → 'other'
\`\`\``,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.isArray',
    initialCode: `function getType(val: unknown): 'array' | 'array-like' | 'other' {
  // Use Array.isArray for 'array', then check for numeric length for 'array-like'
}`,
    solution: `function getType(val: unknown): 'array' | 'array-like' | 'other' {
  if (Array.isArray(val)) return 'array'
  if (
    val !== null &&
    typeof val === 'object' &&
    typeof (val as Record<string, unknown>).length === 'number'
  ) {
    return 'array-like'
  }
  return 'other'
}`,
    tests: [
      { description: '[1,2] is array', assertion: "expect(getType([1, 2])).toBe('array')" },
      { description: '{length:2} is array-like', assertion: "expect(getType({ length: 2 })).toBe('array-like')" },
      { description: 'string is other', assertion: "expect(getType('hello')).toBe('other')" },
      { description: 'number is other', assertion: "expect(getType(42)).toBe('other')" },
      { description: 'null is other', assertion: "expect(getType(null)).toBe('other')" },
    ],
    hints: [
      'Check `Array.isArray` first — even a subclass array should return `"array"`.',
      'For "array-like": the value must be an object (not null) with a numeric `length` property.',
    ],
    tags: ['Array', 'Array.isArray', 'array-like', 'advanced'],
    usageExample: {
      code: `Array.isArray(Array.from('abc'))  // → true  (converted to real array)
Array.isArray({0:'a', length:1})  // → false (array-like, not array)`,
      explanation: {
        en: 'Use Array.isArray() to distinguish real arrays from array-like objects such as NodeList or arguments.',
        es: 'Usa Array.isArray() para distinguir arrays reales de objetos tipo array como NodeList o arguments.',
      },
    },
  },
]
