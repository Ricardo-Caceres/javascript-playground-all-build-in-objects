import type { Exercise } from '@/shared/types/exercises'

export const getOwnPropertySymbolsExercises: Exercise[] = [
  {
    slug: 'object-get-own-prop-symbols-basic',
    title: 'Object.getOwnPropertySymbols() — returns Symbol keys',
    description: `## Object.getOwnPropertySymbols()

\`Object.getOwnPropertySymbols(obj)\` returns an array of all own Symbol-keyed properties. Symbols are not returned by \`Object.keys\` or \`Object.getOwnPropertyNames\`.

**Challenge:** Implement \`getSymbolKeys(obj)\` that returns the Symbol-keyed properties of \`obj\`.

\`\`\`ts
const s = Symbol('key')
getSymbolKeys({ [s]: 1 }) // → [s]
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.getOwnPropertySymbols',
    initialCode: `function getSymbolKeys(obj: object): symbol[] {
  // Use Object.getOwnPropertySymbols to return Symbol keys
}`,
    solution: `function getSymbolKeys(obj: object): symbol[] {
  return Object.getOwnPropertySymbols(obj)
}`,
    tests: [
      { description: 'returns array with symbol', assertion: "const s = Symbol('k'); expect(getSymbolKeys({ [s]: 1 })).toHaveLength(1)" },
      { description: 'returned item is a symbol', assertion: "const s = Symbol('k'); expect(typeof getSymbolKeys({ [s]: 1 })[0]).toBe('symbol')" },
      { description: 'empty array when no symbols', assertion: "expect(getSymbolKeys({ a: 1 })).toHaveLength(0)" },
      { description: 'multiple symbols returned', assertion: "const s1 = Symbol('a'); const s2 = Symbol('b'); expect(getSymbolKeys({ [s1]: 1, [s2]: 2 })).toHaveLength(2)" },
      { description: 'result is an array', assertion: "const s = Symbol('x'); expect(Array.isArray(getSymbolKeys({ [s]: 1 }))).toBe(true)" },
    ],
    hints: [
      '`Object.getOwnPropertySymbols` is the Symbol counterpart of `Object.getOwnPropertyNames`.',
    ],
    tags: ['Object', 'Object.getOwnPropertySymbols', 'symbol', 'intermediate'],
    usageExample: {
      code: `// Get all Symbol-keyed properties
const sym = Symbol('id')
const obj = { [sym]: 1, name: 'Alice' }
Object.getOwnPropertySymbols(obj)   // → [Symbol(id)]`,
      explanation: {
        en: 'Use Object.getOwnPropertySymbols() to retrieve all symbol-keyed own properties, which are invisible to Object.keys().',
        es: 'Usa Object.getOwnPropertySymbols() para obtener todas las propiedades con clave simbólica, que son invisibles para Object.keys().',
      },
    },
  },
  {
    slug: 'object-get-own-prop-symbols-empty',
    title: 'Object.getOwnPropertySymbols() — empty when no symbols',
    description: `## Object.getOwnPropertySymbols() — no symbols

When an object has no Symbol-keyed properties, \`Object.getOwnPropertySymbols\` returns an empty array.

**Challenge:** Implement \`hasSymbols(obj)\` that returns \`true\` if the object has any Symbol keys.

\`\`\`ts
hasSymbols({ a: 1 })                    // → false
hasSymbols({ [Symbol('x')]: 1 })        // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.getOwnPropertySymbols',
    initialCode: `function hasSymbols(obj: object): boolean {
  // Return true if Object.getOwnPropertySymbols(obj).length > 0
}`,
    solution: `function hasSymbols(obj: object): boolean {
  return Object.getOwnPropertySymbols(obj).length > 0
}`,
    tests: [
      { description: 'false when no symbols', assertion: "expect(hasSymbols({ a: 1 })).toBe(false)" },
      { description: 'true when symbol exists', assertion: "const s = Symbol('x'); expect(hasSymbols({ [s]: 1 })).toBe(true)" },
      { description: 'false for empty object', assertion: "expect(hasSymbols({})).toBe(false)" },
      { description: 'true for multiple symbols', assertion: "const s1 = Symbol('a'); const s2 = Symbol('b'); expect(hasSymbols({ [s1]: 1, [s2]: 2 })).toBe(true)" },
      { description: 'string keys do not count', assertion: "expect(hasSymbols({ x: 1, y: 2 })).toBe(false)" },
    ],
    hints: [
      'Check `Object.getOwnPropertySymbols(obj).length > 0`.',
    ],
    tags: ['Object', 'Object.getOwnPropertySymbols', 'symbol', 'beginner'],
    usageExample: {
      code: `// Get all Symbol-keyed properties
const sym = Symbol('id')
const obj = { [sym]: 1, name: 'Alice' }
Object.getOwnPropertySymbols(obj)   // → [Symbol(id)]`,
      explanation: {
        en: 'Use Object.getOwnPropertySymbols() to retrieve all symbol-keyed own properties, which are invisible to Object.keys().',
        es: 'Usa Object.getOwnPropertySymbols() para obtener todas las propiedades con clave simbólica, que son invisibles para Object.keys().',
      },
    },
  },
  {
    slug: 'object-get-own-prop-symbols-keys-miss',
    title: 'Object.getOwnPropertySymbols() — Object.keys misses symbols',
    description: `## Object.getOwnPropertySymbols() — invisible to Object.keys

Symbol properties are completely invisible to \`Object.keys\`, \`Object.values\`, and \`Object.entries\`.

**Challenge:** Implement \`onlyStringKeyCount(obj)\` that returns the number of string keys using \`Object.keys\`, demonstrating that Symbols are not counted.

\`\`\`ts
const s = Symbol('x')
onlyStringKeyCount({ a: 1, [s]: 2 }) // → 1 (symbol not counted)
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.getOwnPropertySymbols',
    initialCode: `function onlyStringKeyCount(obj: object): number {
  // Return Object.keys(obj).length (Symbol keys excluded)
}`,
    solution: `function onlyStringKeyCount(obj: object): number {
  return Object.keys(obj).length
}`,
    tests: [
      { description: 'symbol key not counted by Object.keys', assertion: "const s = Symbol('x'); expect(onlyStringKeyCount({ a: 1, [s]: 2 })).toBe(1)" },
      { description: 'no string keys returns 0', assertion: "const s = Symbol('y'); expect(onlyStringKeyCount({ [s]: 99 })).toBe(0)" },
      { description: 'multiple string keys counted', assertion: "expect(onlyStringKeyCount({ a: 1, b: 2 })).toBe(2)" },
      { description: 'symbol count from getOwnPropertySymbols', assertion: "const s = Symbol('z'); const o = { [s]: 1 }; expect(Object.getOwnPropertySymbols(o)).toHaveLength(1)" },
      { description: 'total = string + symbol', assertion: "const s = Symbol('k'); const o = { a: 1, [s]: 2 }; expect(Object.keys(o).length + Object.getOwnPropertySymbols(o).length).toBe(2)" },
    ],
    hints: [
      '`Object.keys` only sees string-keyed enumerable properties. Use `Object.getOwnPropertySymbols` for Symbol keys.',
    ],
    tags: ['Object', 'Object.getOwnPropertySymbols', 'Object.keys', 'beginner'],
    usageExample: {
      code: `// Get all Symbol-keyed properties
const sym = Symbol('id')
const obj = { [sym]: 1, name: 'Alice' }
Object.getOwnPropertySymbols(obj)   // → [Symbol(id)]`,
      explanation: {
        en: 'Use Object.getOwnPropertySymbols() to retrieve all symbol-keyed own properties, which are invisible to Object.keys().',
        es: 'Usa Object.getOwnPropertySymbols() para obtener todas las propiedades con clave simbólica, que son invisibles para Object.keys().',
      },
    },
  },
  {
    slug: 'object-get-own-prop-symbols-create',
    title: 'Object.getOwnPropertySymbols() — Symbol created with Symbol()',
    description: `## Object.getOwnPropertySymbols() — creating Symbols

Each call to \`Symbol(description)\` creates a unique symbol. Two symbols with the same description are not equal.

**Challenge:** Implement \`uniqueSymbols()\` that creates two symbols with the same description \`'test'\` and returns whether they are equal.

\`\`\`ts
uniqueSymbols() // → false (each Symbol() call is unique)
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.getOwnPropertySymbols',
    initialCode: `function uniqueSymbols(): boolean {
  // Create Symbol('test') twice and return whether they are equal (===)
}`,
    solution: `function uniqueSymbols(): boolean {
  const s1 = Symbol('test')
  const s2 = Symbol('test')
  return s1 === s2
}`,
    tests: [
      { description: 'two Symbol("test") are not equal', assertion: "expect(uniqueSymbols()).toBe(false)" },
      { description: 'each Symbol() call is unique', assertion: "expect(Symbol('x') === Symbol('x')).toBe(false)" },
      { description: 'same symbol reference is equal', assertion: "const s = Symbol('y'); expect(s === s).toBe(true)" },
      { description: 'symbol key is retrievable', assertion: "const s = Symbol('desc'); const o = { [s]: 42 }; expect(Object.getOwnPropertySymbols(o)[0] === s).toBe(true)" },
      { description: 'symbol description is accessible', assertion: "const s = Symbol('hello'); expect(s.description).toBe('hello')" },
    ],
    hints: [
      '`Symbol()` always creates a brand-new unique value, even with the same description string.',
    ],
    tags: ['Object', 'Object.getOwnPropertySymbols', 'symbol', 'beginner'],
    usageExample: {
      code: `// Get all Symbol-keyed properties
const sym = Symbol('id')
const obj = { [sym]: 1, name: 'Alice' }
Object.getOwnPropertySymbols(obj)   // → [Symbol(id)]`,
      explanation: {
        en: 'Use Object.getOwnPropertySymbols() to retrieve all symbol-keyed own properties, which are invisible to Object.keys().',
        es: 'Usa Object.getOwnPropertySymbols() para obtener todas las propiedades con clave simbólica, que son invisibles para Object.keys().',
      },
    },
  },
  {
    slug: 'object-get-own-prop-symbols-multiple',
    title: 'Object.getOwnPropertySymbols() — multiple symbols',
    description: `## Object.getOwnPropertySymbols() — counting multiple symbols

An object can have multiple Symbol-keyed properties. \`Object.getOwnPropertySymbols\` returns all of them.

**Challenge:** Implement \`countSymbols(obj)\` that returns the number of Symbol-keyed properties.

\`\`\`ts
const s1 = Symbol('a'); const s2 = Symbol('b')
countSymbols({ [s1]: 1, [s2]: 2 }) // → 2
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.getOwnPropertySymbols',
    initialCode: `function countSymbols(obj: object): number {
  // Return the count of Symbol-keyed properties
}`,
    solution: `function countSymbols(obj: object): number {
  return Object.getOwnPropertySymbols(obj).length
}`,
    tests: [
      { description: 'counts two symbols', assertion: "const s1 = Symbol('a'); const s2 = Symbol('b'); expect(countSymbols({ [s1]: 1, [s2]: 2 })).toBe(2)" },
      { description: 'returns 0 for no symbols', assertion: "expect(countSymbols({ a: 1 })).toBe(0)" },
      { description: 'returns 1 for one symbol', assertion: "const s = Symbol('test'); expect(countSymbols({ [s]: 1 })).toBe(1)" },
      { description: 'mixed keys: symbol counted separately', assertion: "const s = Symbol('x'); expect(countSymbols({ a: 1, [s]: 2 })).toBe(1)" },
      { description: 'empty object has 0 symbols', assertion: "expect(countSymbols({})).toBe(0)" },
    ],
    hints: [
      '`Object.getOwnPropertySymbols(obj).length` gives the count of Symbol properties.',
    ],
    tags: ['Object', 'Object.getOwnPropertySymbols', 'symbol', 'beginner'],
    usageExample: {
      code: `// Get all Symbol-keyed properties
const sym = Symbol('id')
const obj = { [sym]: 1, name: 'Alice' }
Object.getOwnPropertySymbols(obj)   // → [Symbol(id)]`,
      explanation: {
        en: 'Use Object.getOwnPropertySymbols() to retrieve all symbol-keyed own properties, which are invisible to Object.keys().',
        es: 'Usa Object.getOwnPropertySymbols() para obtener todas las propiedades con clave simbólica, que son invisibles para Object.keys().',
      },
    },
  },
]
