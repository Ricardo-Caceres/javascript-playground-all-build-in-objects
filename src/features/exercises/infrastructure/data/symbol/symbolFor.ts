import type { Exercise } from '@/shared/types/exercises'

export const symbolForExercises: Exercise[] = [
  {
    slug: 'symbol-for-1',
    title: 'Symbol.for() — same key returns same Symbol',
    description: `## Symbol.for(key)\n\n\`Symbol.for(key)\` looks up a Symbol in the global registry. If not found, it creates one. Calling it twice with the same key returns the same Symbol.\n\n**Challenge:** Verify that \`Symbol.for('foo') === Symbol.for('foo')\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Symbol',
    method: 'for',
    initialCode: `// Global Symbol registry\nconst s1 = Symbol.for('foo')\nconst s2 = Symbol.for('foo')\n`,
    solution: `Symbol.for('foo') === Symbol.for('foo')`,
    tests: [
      { description: "result", assertion: "expect(result).toBe(true)" },
      { description: 'same key always returns same Symbol', assertion: "const k = 'myKey'; expect(Symbol.for(k) === Symbol.for(k)).toBe(true)" },
      { description: 'both are symbols', assertion: "expect(typeof Symbol.for('bar')).toBe('symbol')" },
      { description: 'Symbol.for result is truthy', assertion: "expect(Symbol.for('x')).toBeTruthy()" },
      { description: 'different keys return different symbols', assertion: "expect(Symbol.for('a') === Symbol.for('b')).toBe(false)" },
    ],
    hints: ['Symbol.for() uses a global registry keyed by string.'],
    tags: ['symbol', 'Symbol.for', 'global-registry'],
    usageExample: {
      code: `Symbol.for('foo') === Symbol.for('foo')  // → true
Symbol('foo')    === Symbol('foo')       // → false`,
      explanation: {
        en: 'Symbol.for() looks up a global registry — the same key always returns the identical symbol.',
        es: 'Symbol.for() consulta un registro global; la misma clave siempre devuelve el mismo símbolo.',
      },
    },
  },
  {
    slug: 'symbol-for-2',
    title: 'Symbol.for() vs Symbol() — not the same',
    description: `## Symbol.for vs Symbol\n\n\`Symbol.for('foo')\` and \`Symbol('foo')\` create different symbols — one is global, the other is local.\n\n**Challenge:** Confirm they are not equal.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Symbol',
    method: 'for',
    initialCode: `// Global vs local Symbol\nconst global = Symbol.for('foo')\nconst local = Symbol('foo')\n`,
    solution: `Symbol.for('foo') !== Symbol('foo')`,
    tests: [
      { description: "result", assertion: "expect(result).toBe(true)" },
      { description: 'global and local are not equal', assertion: "expect(Symbol.for('x') === Symbol('x')).toBe(false)" },
      { description: 'both are symbol type', assertion: "expect(typeof Symbol.for('y')).toBe('symbol')" },
      { description: 'local symbol not in registry', assertion: "expect(Symbol.keyFor(Symbol('local'))).toBeUndefined()" },
      { description: 'global symbol is in registry', assertion: "expect(Symbol.keyFor(Symbol.for('reg'))).toBe('reg')" },
    ],
    hints: ['Symbol.for() registers globally; Symbol() is always a new local symbol.'],
    tags: ['symbol', 'Symbol.for', 'uniqueness'],
    usageExample: {
      code: `const g = Symbol.for('foo')
const l = Symbol('foo')
g === l   // → false`,
      explanation: {
        en: 'Symbol.for() returns a globally shared symbol, while Symbol() always creates a new local one.',
        es: 'Symbol.for() devuelve un símbolo global compartido; Symbol() crea siempre uno local nuevo.',
      },
    },
  },
  {
    slug: 'symbol-for-3',
    title: 'Symbol.for() — typeof result',
    description: `## Symbol.for() Returns a Symbol\n\nThe return type of \`Symbol.for()\` is still \`'symbol'\`.\n\n**Challenge:** Verify the type.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Symbol',
    method: 'for',
    initialCode: `const s = Symbol.for('x')\n`,
    solution: `typeof Symbol.for('x')`,
    tests: [
      { description: "result is 'symbol'", assertion: "expect(result).toBe('symbol')" },
      { description: 'result is not a string', assertion: "expect(result === 'string').toBe(false)" },
      { description: 'result is truthy', assertion: "expect(Symbol.for('x')).toBeTruthy()" },
      { description: 'Symbol.for is a function', assertion: "expect(typeof Symbol.for).toBe('function')" },
      { description: 'works with empty string key', assertion: "expect(typeof Symbol.for('')).toBe('symbol')" },
    ],
    hints: ['Even global symbols have type "symbol".'],
    tags: ['symbol', 'Symbol.for', 'typeof'],
    usageExample: {
      code: `typeof Symbol.for('x')   // → 'symbol'`,
      explanation: {
        en: 'Symbol.for() returns a symbol primitive — typeof is always \'symbol\'.',
        es: 'Symbol.for() devuelve un primitivo símbolo; typeof es siempre \'symbol\'.',
      },
    },
  },
  {
    slug: 'symbol-for-4',
    title: 'Symbol.for() — keyFor retrieves the key',
    description: `## Symbol.keyFor\n\n\`Symbol.keyFor(sym)\` returns the key used to register a global symbol.\n\n**Challenge:** Verify that \`Symbol.keyFor(Symbol.for('app'))\` === \`'app'\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Symbol',
    method: 'for',
    initialCode: `const s = Symbol.for('app')\n`,
    solution: `Symbol.keyFor(Symbol.for('app'))`,
    tests: [
      { description: "keyFor returns 'app'", assertion: "expect(result).toBe('app')" },
      { description: 'round-trip key retrieval', assertion: "const s = Symbol.for('test'); expect(Symbol.keyFor(s)).toBe('test')" },
      { description: 'keyFor is a function', assertion: "expect(typeof Symbol.keyFor).toBe('function')" },
      { description: 'local symbol has no key', assertion: "expect(Symbol.keyFor(Symbol('x'))).toBeUndefined()" },
      { description: 'empty string key round-trips', assertion: "expect(Symbol.keyFor(Symbol.for(''))).toBe('')" },
    ],
    hints: ['Symbol.keyFor only works for globally registered symbols.'],
    tags: ['symbol', 'Symbol.for', 'Symbol.keyFor'],
    usageExample: {
      code: `const s = Symbol.for('app')
Symbol.keyFor(s)   // → 'app'`,
      explanation: {
        en: 'Symbol.keyFor() retrieves the registration key used with Symbol.for().',
        es: 'Symbol.keyFor() recupera la clave de registro usada con Symbol.for().',
      },
    },
  },
  {
    slug: 'symbol-for-5',
    title: 'Symbol.for() — description matches key',
    description: `## Symbol.for Description\n\nFor a symbol created with \`Symbol.for('x')\`, the \`.description\` is \`'x'\`.\n\n**Challenge:** Verify the description of a global symbol.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Symbol',
    method: 'for',
    initialCode: `const s = Symbol.for('x')\n`,
    solution: `Symbol.for('x').description`,
    tests: [
      { description: "description is 'x'", assertion: "expect(result).toBe('x')" },
      { description: 'description matches key', assertion: "expect(Symbol.for('hello').description).toBe('hello')" },
      { description: 'description is a string', assertion: "expect(typeof Symbol.for('y').description).toBe('string')" },
      { description: 'global and local have same description', assertion: "expect(Symbol.for('q').description).toBe(Symbol('q').description)" },
      { description: 'empty key gives empty description', assertion: "expect(Symbol.for('').description).toBe('')" },
    ],
    hints: ['The description of Symbol.for(key) equals the key.'],
    tags: ['symbol', 'Symbol.for', 'description'],
    usageExample: {
      code: `const s = Symbol.for('id')
s.description   // → 'id'`,
      explanation: {
        en: 'For global symbols, .description is always equal to the registration key.',
        es: 'Para símbolos globales, .description es siempre igual a la clave de registro.',
      },
    },
  },
]
