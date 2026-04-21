import type { Exercise } from '@/shared/types/exercises'

export const symbolKeyForExercises: Exercise[] = [
  {
    slug: 'symbol-keyfor-1',
    title: "Symbol.keyFor() — returns key for global symbol",
    description: `## Symbol.keyFor(sym)\n\n\`Symbol.keyFor(sym)\` returns the string key used to register a symbol in the global registry, or \`undefined\` for local symbols.\n\n**Challenge:** Verify that \`Symbol.keyFor(Symbol.for('hello'))\` === \`'hello'\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Symbol',
    method: 'keyFor',
    initialCode: `const s = Symbol.for('hello')\n`,
    solution: `Symbol.keyFor(Symbol.for('hello'))`,
    tests: [
      { description: "returns 'hello'", assertion:"expect(result).toBe('hello')" },
      { description: 'returns the correct key', assertion:"expect(Symbol.keyFor(Symbol.for('world'))).toBe('world')" },
      { description: 'result is a string', assertion:"expect(result).toBe('string')" },
      { description: 'works for any key', assertion:"const k = 'myKey'; expect(Symbol.keyFor(Symbol.for(k))).toBe(k)" },
      { description: 'empty string key', assertion:"expect(Symbol.keyFor(Symbol.for(''))).toBe('')" },
    ],
    hints: ['Symbol.keyFor reverses the Symbol.for lookup.'],
    tags: ['symbol', 'Symbol.keyFor', 'global-registry'],
    usageExample: {
      code: `const s = Symbol.for('hello')
Symbol.keyFor(s)   // → 'hello'`,
      explanation: {
        en: 'Symbol.keyFor() reverses Symbol.for() — it returns the string key used to register a global symbol.',
        es: 'Symbol.keyFor() invierte Symbol.for(): devuelve la clave usada para registrar un símbolo global.',
      },
    },
  },
  {
    slug: 'symbol-keyfor-2',
    title: 'Symbol.keyFor() — undefined for local symbol',
    description: `## Symbol.keyFor with Local Symbol\n\nA symbol created with \`Symbol()\` is not in the global registry, so \`Symbol.keyFor\` returns \`undefined\`.\n\n**Challenge:** Verify the result is undefined.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Symbol',
    method: 'keyFor',
    initialCode: `const local = Symbol('local')\n`,
    solution: `Symbol.keyFor(Symbol('local'))`,
    tests: [
      { description: 'local symbol returns undefined', assertion:"expect(result).toBeUndefined()" },
      { description: 'any local symbol returns undefined', assertion:"expect(Symbol.keyFor(Symbol('foo'))).toBeUndefined()" },
      { description: 'strictly undefined', assertion:"expect(Symbol.keyFor(Symbol('x')) === undefined).toBe(true)" },
      { description: 'unnamed symbol also undefined', assertion:'expect(Symbol.keyFor(Symbol())).toBeUndefined()' },
      { description: 'not null', assertion:"expect(Symbol.keyFor(Symbol('x')) !== null).toBe(true);" },
    ],
    hints: ['Only globally registered symbols have a key.'],
    tags: ['symbol', 'Symbol.keyFor', 'undefined'],
    usageExample: {
      code: `const local = Symbol('local')
Symbol.keyFor(local)   // → undefined`,
      explanation: {
        en: 'Local symbols created with Symbol() are not in the registry, so keyFor returns undefined.',
        es: 'Los símbolos locales creados con Symbol() no están en el registro, por lo que keyFor devuelve undefined.',
      },
    },
  },
  {
    slug: 'symbol-keyfor-3',
    title: 'Symbol.keyFor() — return type is string',
    description: `## Symbol.keyFor Return Type\n\nWhen a key is found, \`Symbol.keyFor\` returns a \`string\`.\n\n**Challenge:** Verify the type of the returned value.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Symbol',
    method: 'keyFor',
    initialCode: `const s = Symbol.for('x')\n`,
    solution: `typeof Symbol.keyFor(Symbol.for('x'))`,
    tests: [
      { description: "return type is 'string'", assertion:"expect(result).toBe('string')" },
      { description: 'not a symbol', assertion:"expect(result === 'symbol').toBe(false)" },
      { description: 'result has length', assertion:"expect(Symbol.keyFor(Symbol.for('abc'))!.length).toBe(3)" },
      { description: 'truthy for non-empty key', assertion:"expect(Symbol.keyFor(Symbol.for('hi'))).toBeTruthy()" },
      { description: 'local symbol gives undefined type', assertion:"expect(typeof Symbol.keyFor(Symbol('x'))).toBe('undefined')" },
    ],
    hints: ['The result is either a string or undefined.'],
    tags: ['symbol', 'Symbol.keyFor', 'typeof'],
    usageExample: {
      code: `const s = Symbol.for('x')
typeof Symbol.keyFor(s)   // → 'string'`,
      explanation: {
        en: 'When a key is found, Symbol.keyFor() returns a string; otherwise it returns undefined.',
        es: 'Cuando se encuentra la clave, Symbol.keyFor() devuelve un string; si no, devuelve undefined.',
      },
    },
  },
  {
    slug: 'symbol-keyfor-4',
    title: 'Symbol.keyFor() — well-known symbols return undefined',
    description: `## Well-Known Symbols and keyFor\n\nWell-known symbols like \`Symbol.iterator\` are NOT in the global string-keyed registry, so \`Symbol.keyFor\` returns \`undefined\` for them.\n\n**Challenge:** Verify this behaviour.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Symbol',
    method: 'keyFor',
    initialCode: `// Well-known symbols are not in the global registry\n`,
    solution: `Symbol.keyFor(Symbol.iterator)`,
    tests: [
      { description: 'Symbol.iterator has no global key', assertion:'expect(result).toBeUndefined()' },
      { description: 'Symbol.toPrimitive has no global key', assertion:'expect(Symbol.keyFor(Symbol.toPrimitive)).toBeUndefined()' },
      { description: 'Symbol.hasInstance has no global key', assertion:'expect(Symbol.keyFor(Symbol.hasInstance)).toBeUndefined()' },
      { description: 'local symbol also undefined', assertion:"expect(Symbol.keyFor(Symbol('x'))).toBeUndefined()" },
      { description: 'global registry symbol has a key', assertion:"expect(Symbol.keyFor(Symbol.for('mine'))).toBe('mine')" },
    ],
    hints: ['Well-known symbols live outside the global string registry.'],
    tags: ['symbol', 'Symbol.keyFor', 'well-known-symbols'],
    usageExample: {
      code: `Symbol.keyFor(Symbol.iterator)    // → undefined
Symbol.keyFor(Symbol.for('x'))     // → 'x'`,
      explanation: {
        en: 'Well-known symbols are not in the global registry, so Symbol.keyFor returns undefined for them.',
        es: 'Los símbolos conocidos no están en el registro global, por lo que keyFor devuelve undefined para ellos.',
      },
    },
  },
  {
    slug: 'symbol-keyfor-5',
    title: 'Symbol.keyFor() — consistent round-trip',
    description: `## Symbol.keyFor Round-Trip\n\nA symbol registered with \`Symbol.for(key)\` can always be recovered: \`Symbol.keyFor(Symbol.for(key)) === key\`.\n\n**Challenge:** Verify the round-trip is consistent.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Symbol',
    method: 'keyFor',
    initialCode: `const key = 'test'\nconst s = Symbol.for(key)\n`,
    solution: `Symbol.keyFor(Symbol.for('test')) === 'test'`,
    tests: [
      { description: "round-trip gives 'test'", assertion:"expect(Symbol.keyFor(Symbol.for('test'))).toBe('test')" },
      { description: 'round-trip for any key', assertion:"const k = 'unique'; expect(Symbol.keyFor(Symbol.for(k))).toBe(k)" },
      { description: 'multiple keys are independent', assertion:"expect(Symbol.keyFor(Symbol.for('a'))).toBe('a')" },
      { description: 'second registration same result', assertion:"Symbol.for('dup'); expect(Symbol.keyFor(Symbol.for('dup'))).toBe('dup')" },
      { description: 'equality check', assertion:"expect(result).toBe(true)" },
    ],
    hints: ['Symbol.for and Symbol.keyFor are inverse operations.'],
    tags: ['symbol', 'Symbol.keyFor', 'Symbol.for', 'round-trip'],
    usageExample: {
      code: `const key = 'userId'
const s = Symbol.for(key)
Symbol.keyFor(s) === key   // → true`,
      explanation: {
        en: 'Symbol.for(key) and Symbol.keyFor(sym) are inverse operations — a perfect round-trip.',
        es: 'Symbol.for(key) y Symbol.keyFor(sym) son operaciones inversas: un viaje de ida y vuelta perfecto.',
      },
    },
  },
]
