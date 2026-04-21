import type { Exercise } from '@/shared/types/exercises'

export const keysExercises: Exercise[] = [
  {
    slug: 'array-keys-basic',
    title: 'Array.prototype.keys() — convert iterator to array',
    description: `## Array.prototype.keys()

\`Array.prototype.keys()\` returns an **Array Iterator** that yields the index of each element. Because it returns an iterator (not a plain array), you need to convert it with \`Array.from()\` or the spread operator to get an actual array.

**Challenge:** Implement \`getKeys(arr)\` that converts \`arr.keys()\` to an array of indices.

\`\`\`ts
getKeys(['a', 'b', 'c']) // → [0, 1, 2]
getKeys([])              // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.keys',
    initialCode: `function getKeys(arr: unknown[]): number[] {
  // Use Array.from(arr.keys())
}`,
    solution: `function getKeys(arr: unknown[]): number[] {
  return Array.from(arr.keys())
}`,
    tests: [
      { description: 'returns [0,1,2] for a 3-element array', assertion: "expect(getKeys(['a', 'b', 'c'])).toEqual([0, 1, 2])" },
      { description: 'returns [] for empty array', assertion: "expect(getKeys([])).toEqual([])" },
      { description: 'returns [0] for single-element array', assertion: "expect(getKeys([42])).toEqual([0])" },
      { description: 'result is an actual array', assertion: "expect(Array.isArray(getKeys([1, 2]))).toBe(true)" },
      { description: 'indices match length', assertion: "expect(getKeys([0, 0, 0, 0])).toHaveLength(4)" },
    ],
    hints: [
      '`arr.keys()` returns an iterator, not an array — wrap it with `Array.from()`.',
      'You can also use the spread operator: `[...arr.keys()]`.',
    ],
    tags: ['Array', 'Array.prototype.keys', 'iterator', 'beginner'],
    usageExample: {
      code: `const arr = ['a', 'b', 'c']
const keys = arr.keys()
keys.next().value  // → 0
keys.next().value  // → 1`,
      explanation: {
        en: 'Use keys() to get an iterator that yields the index of each element.',
        es: 'Usa keys() para obtener un iterador que produce el índice de cada elemento.',
      },
    },
  },
  {
    slug: 'array-keys-length',
    title: 'Array.prototype.keys() — count the keys',
    description: `## Array.prototype.keys() — number of keys

The number of keys yielded by \`arr.keys()\` is always the same as \`arr.length\`. This exercise makes that relationship explicit.

**Challenge:** Implement \`countKeys(arr)\` that returns the number of keys in the array (i.e. how many indices exist).

\`\`\`ts
countKeys([10, 20, 30]) // → 3
countKeys([])           // → 0
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.keys',
    initialCode: `function countKeys(arr: unknown[]): number {
  // Convert arr.keys() to an array and return its length
}`,
    solution: `function countKeys(arr: unknown[]): number {
  return Array.from(arr.keys()).length
}`,
    tests: [
      { description: 'counts 3 keys for 3-element array', assertion: 'expect(countKeys([10, 20, 30])).toBe(3)' },
      { description: 'counts 0 keys for empty array', assertion: 'expect(countKeys([])).toBe(0)' },
      { description: 'counts 1 key for single element', assertion: "expect(countKeys(['x'])).toBe(1)" },
      { description: 'result equals arr.length', assertion: 'const a = [1,2,3,4,5]; expect(countKeys(a)).toBe(a.length)' },
      { description: 'works with mixed types', assertion: "expect(countKeys([1, 'two', true, null])).toBe(4)" },
    ],
    hints: [
      'The count of keys always equals `arr.length`.',
      'Convert with `Array.from()` then access `.length`, or just use `arr.length` directly.',
    ],
    tags: ['Array', 'Array.prototype.keys', 'length', 'beginner'],
    usageExample: {
      code: `const arr = ['x', 'y', 'z']
[...arr.keys()].length  // → 3  (same as arr.length)`,
      explanation: {
        en: 'Spreading keys() into an array lets you count or work with the set of indices.',
        es: 'Extender keys() a un array te permite contar o trabajar con el conjunto de índices.',
      },
    },
  },
  {
    slug: 'array-keys-with-holes',
    title: 'Array.prototype.keys() — keys over sparse arrays',
    description: `## Array.prototype.keys() — sparse arrays

Unlike \`forEach\` or \`map\`, \`keys()\` iterates over **every** index, including holes in sparse arrays. \`new Array(n)\` creates a sparse array with \`n\` holes — \`keys()\` still yields 0 through n-1.

**Challenge:** Implement \`sparseKeys(n)\` that returns all indices of a sparse array of length \`n\`.

\`\`\`ts
sparseKeys(3) // → [0, 1, 2]
sparseKeys(0) // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.keys',
    initialCode: `function sparseKeys(n: number): number[] {
  // Use Array.from(new Array(n).keys())
}`,
    solution: `function sparseKeys(n: number): number[] {
  return Array.from(new Array(n).keys())
}`,
    tests: [
      { description: 'returns [0,1,2] for n=3', assertion: 'expect(sparseKeys(3)).toEqual([0, 1, 2])' },
      { description: 'returns [] for n=0', assertion: 'expect(sparseKeys(0)).toEqual([])' },
      { description: 'returns [0] for n=1', assertion: 'expect(sparseKeys(1)).toEqual([0])' },
      { description: 'returns correct range for n=5', assertion: 'expect(sparseKeys(5)).toEqual([0, 1, 2, 3, 4])' },
      { description: 'length matches n', assertion: 'expect(sparseKeys(7)).toHaveLength(7)' },
    ],
    hints: [
      '`new Array(n)` creates a sparse array with `n` holes — no actual values, but `length === n`.',
      '`keys()` visits every slot, including holes, so you get indices 0 through n-1.',
      'This pattern is a common way to generate a range of numbers.',
    ],
    tags: ['Array', 'Array.prototype.keys', 'sparse', 'intermediate'],
    usageExample: {
      code: `const sparse = [1, , , 4]
[...sparse.keys()]  // → [0, 1, 2, 3]  (includes holes)`,
      explanation: {
        en: 'keys() yields indices for every slot including holes in sparse arrays.',
        es: 'keys() produce índices para cada posición, incluidos los huecos en arrays dispersos.',
      },
    },
  },
  {
    slug: 'array-keys-iterate',
    title: 'Array.prototype.keys() — iterate with for…of',
    description: `## Array.prototype.keys() — for…of loop

Because \`keys()\` returns an iterator, you can consume it directly inside a \`for…of\` loop without converting it first. This is useful when you want to build up a result array manually.

**Challenge:** Implement \`keysToArray(arr)\` using a \`for…of\` loop over \`arr.keys()\` to collect all indices.

\`\`\`ts
keysToArray(['x', 'y', 'z']) // → [0, 1, 2]
keysToArray([])              // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.keys',
    initialCode: `function keysToArray(arr: unknown[]): number[] {
  const result: number[] = []
  // Use for...of on arr.keys() and push each index
  return result
}`,
    solution: `function keysToArray(arr: unknown[]): number[] {
  const result: number[] = []
  for (const i of arr.keys()) {
    result.push(i)
  }
  return result
}`,
    tests: [
      { description: 'collects indices [0,1,2]', assertion: "expect(keysToArray(['x', 'y', 'z'])).toEqual([0, 1, 2])" },
      { description: 'empty array yields empty result', assertion: 'expect(keysToArray([])).toEqual([])' },
      { description: 'single element yields [0]', assertion: 'expect(keysToArray([99])).toEqual([0])' },
      { description: 'result is an array', assertion: "expect(Array.isArray(keysToArray(['a', 'b']))).toBe(true)" },
      { description: 'works with 4-element array', assertion: 'expect(keysToArray([1, 2, 3, 4])).toEqual([0, 1, 2, 3])' },
    ],
    hints: [
      '`for (const i of arr.keys())` gives you each index as a number.',
      'Push each `i` into the `result` array inside the loop.',
    ],
    tags: ['Array', 'Array.prototype.keys', 'for-of', 'iterator', 'intermediate'],
    usageExample: {
      code: `const arr = ['red', 'green', 'blue']
for (const i of arr.keys()) {
  console.log(i)  // 0, 1, 2
}`,
      explanation: {
        en: 'Use keys() with for-of to iterate over only the indices of an array.',
        es: 'Usa keys() con for-of para iterar solo sobre los índices de un array.',
      },
    },
  },
  {
    slug: 'array-keys-vs-entries',
    title: 'Array.prototype.keys() — build an index map',
    description: `## Array.prototype.keys() — index map

\`keys()\` gives you just the indices, while \`entries()\` gives you \`[index, value]\` pairs. When you only need the indices to look up values manually, \`keys()\` is the right choice.

**Challenge:** Implement \`indexMap(arr)\` that returns an object mapping each numeric index to its corresponding array value.

\`\`\`ts
indexMap(['a', 'b', 'c']) // → { 0: 'a', 1: 'b', 2: 'c' }
indexMap([])              // → {}
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.prototype.keys',
    initialCode: `function indexMap(arr: string[]): Record<number, string> {
  const result: Record<number, string> = {}
  // Iterate arr.keys() and build the result object
  return result
}`,
    solution: `function indexMap(arr: string[]): Record<number, string> {
  const result: Record<number, string> = {}
  for (const i of arr.keys()) {
    result[i] = arr[i]
  }
  return result
}`,
    tests: [
      { description: "maps ['a','b','c'] to {0:'a',1:'b',2:'c'}", assertion: "expect(indexMap(['a', 'b', 'c'])).toEqual({ 0: 'a', 1: 'b', 2: 'c' })" },
      { description: 'empty array returns empty object', assertion: "expect(indexMap([])).toEqual({})" },
      { description: 'single element maps correctly', assertion: "expect(indexMap(['hello'])).toEqual({ 0: 'hello' })" },
      { description: 'keys are numeric indices', assertion: "expect(Object.keys(indexMap(['x', 'y']))).toEqual(['0', '1'])" },
      { description: 'values match original array', assertion: "const arr = ['p', 'q', 'r']; const m = indexMap(arr); expect(m[1]).toBe('q')" },
    ],
    hints: [
      'Use `for (const i of arr.keys())` to get each index.',
      'Assign `result[i] = arr[i]` inside the loop to populate the map.',
      '`keys()` only yields indices — you still need `arr[i]` to get the value.',
    ],
    tags: ['Array', 'Array.prototype.keys', 'object', 'advanced'],
    usageExample: {
      code: `const arr = ['a', 'b']
[...arr.keys()]     // → [0, 1]           (indices only)
[...arr.entries()]  // → [[0,'a'],[1,'b']] (index+value pairs)`,
      explanation: {
        en: 'Use keys() for indices only; use entries() when you need both the index and the value.',
        es: 'Usa keys() solo para índices; usa entries() cuando necesites tanto el índice como el valor.',
      },
    },
  },
]
