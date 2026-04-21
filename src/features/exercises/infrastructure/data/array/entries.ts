import type { Exercise } from '@/shared/types/exercises'

export const entriesExercises: Exercise[] = [
  {
    slug: 'array-entries-basic',
    title: 'Array.prototype.entries() — convert to array',
    description: `## Array.prototype.entries()

\`Array.prototype.entries()\` returns an **iterator** of \`[index, value]\` pairs for every element. You must consume the iterator — for example with \`Array.from()\` — to get a plain array.

**Challenge:** Implement \`getEntries(arr)\` that converts \`arr.entries()\` to a regular array of \`[index, value]\` pairs using \`Array.from()\`.

\`\`\`ts
getEntries(['a', 'b', 'c']) // → [[0, 'a'], [1, 'b'], [2, 'c']]
getEntries([])              // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.entries',
    initialCode: `function getEntries<T>(arr: T[]): [number, T][] {
  // Use Array.from(arr.entries()) to convert the iterator to an array
}`,
    solution: `function getEntries<T>(arr: T[]): [number, T][] {
  return Array.from(arr.entries())
}`,
    tests: [
      { description: "returns [[0,'a'],[1,'b'],[2,'c']] for ['a','b','c']", assertion: "expect(getEntries(['a', 'b', 'c'])).toEqual([[0, 'a'], [1, 'b'], [2, 'c']])" },
      { description: 'returns [] for empty array', assertion: "expect(getEntries([])).toEqual([])" },
      { description: 'single element returns [[0, val]]', assertion: "expect(getEntries([42])).toEqual([[0, 42]])" },
      { description: 'each entry is a pair of [index, value]', assertion: "expect(getEntries([10, 20])[1]).toEqual([1, 20])" },
      { description: 'result has same length as input', assertion: "expect(getEntries([1, 2, 3, 4])).toHaveLength(4)" },
    ],
    hints: [
      '`arr.entries()` returns an iterator — wrap it with `Array.from()` to get a regular array.',
      'Each yielded value is a `[index, element]` tuple.',
    ],
    tags: ['Array', 'Array.prototype.entries', 'iterator', 'beginner'],
    usageExample: {
      code: `const arr = ['a', 'b', 'c']
const iter = arr.entries()
iter.next().value  // → [0, 'a']
iter.next().value  // → [1, 'b']`,
      explanation: {
        en: 'Use entries() to get an iterator of [index, value] pairs from an array.',
        es: 'Usa entries() para obtener un iterador de pares [índice, valor] de un array.',
      },
    },
  },
  {
    slug: 'array-entries-index-value',
    title: 'Array.prototype.entries() — index/value pairs',
    description: `## Array.prototype.entries() — working with pairs

Iterating over \`entries()\` gives you both the index and the value at each step. This is helpful when you need both without maintaining a separate counter.

**Challenge:** Implement \`getIndexValuePairs(arr)\` that returns an array of \`[index, value]\` pairs from \`['a', 'b', 'c']\`.

\`\`\`ts
getIndexValuePairs(['a', 'b', 'c']) // → [[0, 'a'], [1, 'b'], [2, 'c']]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.entries',
    initialCode: `function getIndexValuePairs(arr: string[]): [number, string][] {
  // Use a for...of loop over arr.entries() to build the result
}`,
    solution: `function getIndexValuePairs(arr: string[]): [number, string][] {
  const result: [number, string][] = []
  for (const [i, v] of arr.entries()) {
    result.push([i, v])
  }
  return result
}`,
    tests: [
      { description: "['a','b','c'] returns [[0,'a'],[1,'b'],[2,'c']]", assertion: "expect(getIndexValuePairs(['a', 'b', 'c'])).toEqual([[0, 'a'], [1, 'b'], [2, 'c']])" },
      { description: 'empty input returns []', assertion: "expect(getIndexValuePairs([])).toEqual([])" },
      { description: 'indices start at 0', assertion: "expect(getIndexValuePairs(['x'])[0][0]).toBe(0)" },
      { description: 'values are preserved', assertion: "expect(getIndexValuePairs(['hello'])[0][1]).toBe('hello')" },
      { description: 'result has correct length', assertion: "expect(getIndexValuePairs(['a', 'b'])).toHaveLength(2)" },
    ],
    hints: [
      '`for (const [i, v] of arr.entries())` destructures each pair cleanly.',
      'You can also use `Array.from(arr.entries())` for a one-liner.',
    ],
    tags: ['Array', 'Array.prototype.entries', 'for-of', 'intermediate'],
    usageExample: {
      code: `const fruits = ['apple', 'banana', 'cherry']
for (const [i, v] of fruits.entries()) {
  console.log(i, v)  // 0 apple, 1 banana, 2 cherry
}`,
      explanation: {
        en: 'Use entries() with for-of destructuring to loop over both the index and value of each element.',
        es: 'Usa entries() con desestructuración en for-of para iterar sobre el índice y el valor de cada elemento.',
      },
    },
  },
  {
    slug: 'array-entries-find-by-value',
    title: 'Array.prototype.entries() — find entry by value',
    description: `## Array.prototype.entries() — searching with index

By iterating over \`entries()\`, you can find the first \`[index, value]\` pair where the value matches a condition — useful when you need both the index and the value.

**Challenge:** Implement \`findIndexOf(arr, val)\` that uses \`entries()\` to return the first \`[index, value]\` pair where the value equals \`val\`, or \`null\` if not found.

\`\`\`ts
findIndexOf(['a', 'b', 'c'], 'b') // → [1, 'b']
findIndexOf(['a', 'b', 'c'], 'z') // → null
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.entries',
    initialCode: `function findIndexOf<T>(arr: T[], val: T): [number, T] | null {
  // Use entries() to find the first [index, value] where value === val
}`,
    solution: `function findIndexOf<T>(arr: T[], val: T): [number, T] | null {
  for (const [i, v] of arr.entries()) {
    if (v === val) return [i, v]
  }
  return null
}`,
    tests: [
      { description: "finds 'b' at index 1", assertion: "expect(findIndexOf(['a', 'b', 'c'], 'b')).toEqual([1, 'b'])" },
      { description: 'returns null when not found', assertion: "expect(findIndexOf(['a', 'b', 'c'], 'z')).toBeNull()" },
      { description: 'finds first occurrence when duplicates', assertion: "expect(findIndexOf([1, 2, 1, 3], 1)).toEqual([0, 1])" },
      { description: 'works with number array', assertion: "expect(findIndexOf([10, 20, 30], 20)).toEqual([1, 20])" },
      { description: 'empty array returns null', assertion: "expect(findIndexOf([], 'a')).toBeNull()" },
    ],
    hints: [
      'Use `for...of` with destructuring: `for (const [i, v] of arr.entries())`.',
      'Return early as soon as the value matches to get the *first* occurrence.',
    ],
    tags: ['Array', 'Array.prototype.entries', 'search', 'intermediate'],
    usageExample: {
      code: `const arr = [10, 20, 30]
for (const [i, v] of arr.entries()) {
  if (v === 20) console.log('found at', i)  // found at 1
}`,
      explanation: {
        en: 'Use entries() to find both the index and value when searching through an array.',
        es: 'Usa entries() para encontrar tanto el índice como el valor al buscar en un array.',
      },
    },
  },
  {
    slug: 'array-entries-rebuild',
    title: 'Array.prototype.entries() — rebuild array from iterator',
    description: `## Array.prototype.entries() — consuming an iterator

The iterator returned by \`entries()\` can be consumed step by step. You can use \`reduce\` on the array from the iterator to rebuild the original array from its entries.

**Challenge:** Implement \`rebuildFromEntries(arr)\` that iterates over \`arr.entries()\` and rebuilds the array using \`reduce\`.

\`\`\`ts
rebuildFromEntries([10, 20, 30]) // → [10, 20, 30]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.entries',
    initialCode: `function rebuildFromEntries<T>(arr: T[]): T[] {
  // Convert arr.entries() to array, then use reduce to rebuild from [index, value] pairs
}`,
    solution: `function rebuildFromEntries<T>(arr: T[]): T[] {
  return Array.from(arr.entries()).reduce((acc, [, val]) => {
    acc.push(val)
    return acc
  }, [] as T[])
}`,
    tests: [
      { description: 'rebuilds [10,20,30]', assertion: "expect(rebuildFromEntries([10, 20, 30])).toEqual([10, 20, 30])" },
      { description: 'works with empty array', assertion: "expect(rebuildFromEntries([])).toEqual([])" },
      { description: 'preserves strings', assertion: "expect(rebuildFromEntries(['a', 'b', 'c'])).toEqual(['a', 'b', 'c'])" },
      { description: 'result has same length', assertion: "expect(rebuildFromEntries([1, 2, 3, 4])).toHaveLength(4)" },
      { description: 'result is a new array', assertion: "const a = [1, 2]; const r = rebuildFromEntries(a); expect(r === a).toBe(false)" },
    ],
    hints: [
      'Convert the iterator first: `Array.from(arr.entries())` gives `[[0, val0], [1, val1], ...]`.',
      'In the `reduce` callback, destructure as `[, val]` to skip the index.',
    ],
    tags: ['Array', 'Array.prototype.entries', 'reduce', 'iterator', 'intermediate'],
    usageExample: {
      code: `const arr = ['x', 'y', 'z']
const pairs = [...arr.entries()]
pairs  // → [[0,'x'], [1,'y'], [2,'z']]`,
      explanation: {
        en: 'Spread entries() into an array to convert it to an array of [index, value] pairs.',
        es: 'Extiende entries() a un array para convertirlo en un array de pares [índice, valor].',
      },
    },
  },
  {
    slug: 'array-entries-to-object',
    title: 'Array.prototype.entries() — combine arrays into an object',
    description: `## Array.prototype.entries() — creating key-value maps

You can use \`entries()\` on a keys array to pair indices with values from a parallel values array, building an object map.

**Challenge:** Implement \`arrayToObject(keys, vals)\` that combines two parallel arrays into a plain object using \`entries()\`.

\`\`\`ts
arrayToObject(['a', 'b', 'c'], [1, 2, 3]) // → { a: 1, b: 2, c: 3 }
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.prototype.entries',
    initialCode: `function arrayToObject(keys: string[], vals: unknown[]): Record<string, unknown> {
  // Use keys.entries() to iterate index/key pairs, then map vals[index]
}`,
    solution: `function arrayToObject(keys: string[], vals: unknown[]): Record<string, unknown> {
  const result: Record<string, unknown> = {}
  for (const [i, key] of keys.entries()) {
    result[key] = vals[i]
  }
  return result
}`,
    tests: [
      { description: 'creates object from parallel arrays', assertion: "expect(arrayToObject(['a', 'b', 'c'], [1, 2, 3])).toEqual({ a: 1, b: 2, c: 3 })" },
      { description: 'empty arrays return empty object', assertion: "expect(arrayToObject([], [])).toEqual({})" },
      { description: 'single pair', assertion: "expect(arrayToObject(['x'], [42])).toEqual({ x: 42 })" },
      { description: 'preserves string values', assertion: "expect(arrayToObject(['name'], ['Alice'])).toEqual({ name: 'Alice' })" },
      { description: 'keys are strings', assertion: "const r = arrayToObject(['k'], [1]); expect(typeof Object.keys(r)[0]).toBe('string')" },
    ],
    hints: [
      'Iterate over `keys.entries()` to get `[index, key]` — then use `vals[index]` for the value.',
      'You can also use `Object.fromEntries(keys.map((k, i) => [k, vals[i]]))` for a one-liner.',
    ],
    tags: ['Array', 'Array.prototype.entries', 'object', 'advanced'],
    usageExample: {
      code: `const arr = ['a', 'b', 'c']
const obj = Object.fromEntries(arr.entries())
// → { 0: 'a', 1: 'b', 2: 'c' }`,
      explanation: {
        en: 'Pass entries() to Object.fromEntries() to convert an array into an indexed object.',
        es: 'Pasa entries() a Object.fromEntries() para convertir un array en un objeto indexado.',
      },
    },
  },
]
