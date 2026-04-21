import type { Exercise } from '@/shared/types/exercises'

export const mapExercises: Exercise[] = [
  {
    slug: 'array-map-double',
    title: 'Array.prototype.map() — double each number',
    description: `## Array.prototype.map()

\`Array.prototype.map(callback)\` creates a **new array** populated with the return values of calling \`callback\` on every element of the original array. The original array is not mutated.

**Challenge:** Implement \`double(nums)\` that returns a new array where every number is multiplied by 2.

\`\`\`ts
double([1, 2, 3])    // → [2, 4, 6]
double([0, -1, 10])  // → [0, -2, 20]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.map',
    initialCode: `function double(nums: number[]): number[] {
  // Use nums.map(x => x * 2)
}`,
    solution: `function double(nums: number[]): number[] {
  return nums.map(x => x * 2)
}`,
    tests: [
      { description: 'doubles each element', assertion: 'expect(double([1, 2, 3])).toEqual([2, 4, 6])' },
      { description: 'handles zero and negatives', assertion: 'expect(double([0, -1, 10])).toEqual([0, -2, 20])' },
      { description: 'empty array returns empty array', assertion: 'expect(double([])).toEqual([])' },
      { description: 'does not mutate original', assertion: 'const a = [1, 2, 3]; double(a); expect(a).toEqual([1, 2, 3])' },
      { description: 'returns an array', assertion: 'expect(Array.isArray(double([1]))).toBe(true)' },
    ],
    hints: [
      '`map` always returns a new array of the same length.',
      'The callback receives the element as the first argument: `x => x * 2`.',
    ],
    tags: ['Array', 'Array.prototype.map', 'transform', 'beginner'],
    usageExample: {
      code: `const nums = [1, 2, 3]
nums.map(n => n * 2)  // → [2, 4, 6]`,
      explanation: {
        en: 'Use map() to transform every element of an array and collect the results in a new array.',
        es: 'Usa map() para transformar cada elemento de un array y recopilar los resultados en uno nuevo.',
      },
    },
  },
  {
    slug: 'array-map-to-string',
    title: 'Array.prototype.map() — convert numbers to strings',
    description: `## Array.prototype.map() — type conversion

\`map\` can be used to convert every element to a different type. Passing a built-in function such as \`String\` directly as the callback is a concise pattern.

**Challenge:** Implement \`toStrings(nums)\` that converts each number to its string representation.

\`\`\`ts
toStrings([1, 2, 3])    // → ['1', '2', '3']
toStrings([0, -5, 100]) // → ['0', '-5', '100']
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.map',
    initialCode: `function toStrings(nums: number[]): string[] {
  // Use nums.map(String)
}`,
    solution: `function toStrings(nums: number[]): string[] {
  return nums.map(String)
}`,
    tests: [
      { description: "converts [1,2,3] to ['1','2','3']", assertion: "expect(toStrings([1, 2, 3])).toEqual(['1', '2', '3'])" },
      { description: 'handles zero and negatives', assertion: "expect(toStrings([0, -5, 100])).toEqual(['0', '-5', '100'])" },
      { description: 'empty array returns empty array', assertion: "expect(toStrings([])).toEqual([])" },
      { description: 'each element is a string', assertion: "expect(toStrings([42])[0]).toBe('42')" },
      { description: 'result length matches input', assertion: 'expect(toStrings([1, 2, 3, 4])).toHaveLength(4)' },
    ],
    hints: [
      '`String` can be passed directly as the callback: `nums.map(String)`.',
      'Alternatively: `nums.map(n => String(n))` or `nums.map(n => \`${n}\`)`.',
    ],
    tags: ['Array', 'Array.prototype.map', 'String', 'type-conversion', 'beginner'],
    usageExample: {
      code: `const nums = [1, 2, 3]
nums.map(String)  // → ['1', '2', '3']`,
      explanation: {
        en: 'Pass String directly as the map() callback to convert every number to its string equivalent.',
        es: 'Pasa String directamente como callback de map() para convertir cada número a su equivalente en cadena.',
      },
    },
  },
  {
    slug: 'array-map-objects',
    title: 'Array.prototype.map() — pluck a property from objects',
    description: `## Array.prototype.map() — property extraction

A common use of \`map\` is extracting a single property from each object in an array — sometimes called "plucking". TypeScript generics let you express this in a fully type-safe way.

**Challenge:** Implement \`pluck(arr, key)\` that returns an array of the value at \`key\` for every object in \`arr\`.

\`\`\`ts
pluck([{ name: 'Alice' }, { name: 'Bob' }], 'name') // → ['Alice', 'Bob']
pluck([{ age: 30 }, { age: 25 }], 'age')            // → [30, 25]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.map',
    initialCode: `function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  // Use arr.map(item => item[key])
}`,
    solution: `function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  return arr.map(item => item[key])
}`,
    tests: [
      { description: 'plucks name from objects', assertion: "expect(pluck([{ name: 'Alice' }, { name: 'Bob' }], 'name')).toEqual(['Alice', 'Bob'])" },
      { description: 'plucks numeric property', assertion: "expect(pluck([{ age: 30 }, { age: 25 }], 'age')).toEqual([30, 25])" },
      { description: 'returns empty for empty array', assertion: "expect(pluck([], 'id')).toEqual([])" },
      { description: 'plucks boolean property', assertion: "expect(pluck([{ active: true }, { active: false }], 'active')).toEqual([true, false])" },
      { description: 'result has correct length', assertion: "expect(pluck([{ x: 1 }, { x: 2 }, { x: 3 }], 'x')).toHaveLength(3)" },
    ],
    hints: [
      '`K extends keyof T` ensures the key actually exists on type `T`.',
      'The return type `T[K][]` is TypeScript\'s way of saying "array of the value type at key K".',
    ],
    tags: ['Array', 'Array.prototype.map', 'generics', 'pluck', 'intermediate'],
    usageExample: {
      code: `const users = [{name:'Ana'}, {name:'Ben'}]
users.map(u => u.name)  // → ['Ana', 'Ben']`,
      explanation: {
        en: 'Use map() to extract a single property from each object in an array.',
        es: 'Usa map() para extraer una sola propiedad de cada objeto en un array.',
      },
    },
  },
  {
    slug: 'array-map-with-index',
    title: 'Array.prototype.map() — use the index parameter',
    description: `## Array.prototype.map() — index parameter

The \`map\` callback optionally receives a second argument: the current element's **index**. This is useful for labelling, numbering, or interleaving positional data.

**Challenge:** Implement \`addIndex(arr)\` that prepends each element's index to its value.

\`\`\`ts
addIndex(['a', 'b', 'c']) // → ['0: a', '1: b', '2: c']
addIndex([])              // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.map',
    initialCode: `function addIndex(arr: string[]): string[] {
  // Use arr.map((s, i) => \`\${i}: \${s}\`)
}`,
    solution: `function addIndex(arr: string[]): string[] {
  return arr.map((s, i) => \`\${i}: \${s}\`)
}`,
    tests: [
      { description: "prepends index to each element", assertion: "expect(addIndex(['a', 'b', 'c'])).toEqual(['0: a', '1: b', '2: c'])" },
      { description: 'empty array returns empty array', assertion: "expect(addIndex([])).toEqual([])" },
      { description: 'single element gets index 0', assertion: "expect(addIndex(['hello'])).toEqual(['0: hello'])" },
      { description: 'format is \"index: value\"', assertion: "expect(addIndex(['x', 'y'])[1]).toBe('1: y')" },
      { description: 'result length matches input', assertion: "expect(addIndex(['p', 'q', 'r', 's'])).toHaveLength(4)" },
    ],
    hints: [
      'The second parameter of the `map` callback is the index: `(s, i) => ...`.',
      'Use a template literal: `` `${i}: ${s}` ``.',
    ],
    tags: ['Array', 'Array.prototype.map', 'index', 'template-literal', 'intermediate'],
    usageExample: {
      code: `const letters = ['a', 'b', 'c']
letters.map((v, i) => i + ':' + v)
// → ['0:a', '1:b', '2:c']`,
      explanation: {
        en: 'Use the index parameter of map() to include positional information in the transformed output.',
        es: 'Usa el parámetro de índice de map() para incluir información posicional en la salida transformada.',
      },
    },
  },
  {
    slug: 'array-map-parse',
    title: 'Array.prototype.map() — parse strings to numbers',
    description: `## Array.prototype.map() — parse numbers

Just as \`String\` can be passed directly to \`map\`, so can \`Number\`. This converts an array of numeric strings into an array of actual numbers in one step.

**Challenge:** Implement \`parseNumbers(strs)\` that converts each string element to a number.

\`\`\`ts
parseNumbers(['1', '2', '3'])  // → [1, 2, 3]
parseNumbers(['10', '-5', '0']) // → [10, -5, 0]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.map',
    initialCode: `function parseNumbers(strs: string[]): number[] {
  // Use strs.map(Number)
}`,
    solution: `function parseNumbers(strs: string[]): number[] {
  return strs.map(Number)
}`,
    tests: [
      { description: "converts ['1','2','3'] to [1,2,3]", assertion: "expect(parseNumbers(['1', '2', '3'])).toEqual([1, 2, 3])" },
      { description: 'handles negatives and zero', assertion: "expect(parseNumbers(['10', '-5', '0'])).toEqual([10, -5, 0])" },
      { description: 'empty array returns empty array', assertion: "expect(parseNumbers([])).toEqual([])" },
      { description: 'each result is a number type', assertion: "expect(typeof parseNumbers(['42'])[0]).toBe('number')" },
      { description: 'result length matches input', assertion: "expect(parseNumbers(['1', '2', '3', '4', '5'])).toHaveLength(5)" },
    ],
    hints: [
      '`Number` can be used as a callback directly: `strs.map(Number)`.',
      'Equivalent to `strs.map(s => Number(s))` or `strs.map(s => +s)`.',
    ],
    tags: ['Array', 'Array.prototype.map', 'Number', 'parse', 'intermediate'],
    usageExample: {
      code: `const strs = ['1', '2', '3']
strs.map(Number)  // → [1, 2, 3]`,
      explanation: {
        en: 'Pass Number as the map() callback to parse every string element to a number.',
        es: 'Pasa Number como callback de map() para convertir cada elemento cadena a número.',
      },
    },
  },
]
