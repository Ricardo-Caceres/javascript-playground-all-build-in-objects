import type { Exercise } from '@/shared/types/exercises'

export const symbolConstructorExercises: Exercise[] = [
  {
    slug: 'symbol-constructor-1',
    title: 'Symbol() — typeof is symbol',
    description: `## Symbol Constructor\n\n\`Symbol(description?)\` creates a new unique symbol primitive.\n\n**Challenge:** Verify that \`typeof Symbol('x')\` is \`'symbol'\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Symbol',
    initialCode: `// Create a Symbol and check its type\nconst s = Symbol('x')\n`,
    solution: `typeof Symbol('x')`,
    tests: [
      { description: "result is 'symbol'", assertion:"expect(result).toBe('symbol')" },
      { description: 'Symbol returns a symbol primitive', assertion:"expect(typeof Symbol('hello')).toBe('symbol')" },
      { description: 'Symbol with number description', assertion:"expect(typeof Symbol(42)).toBe('symbol')" },
      { description: 'Symbol without description is still a symbol', assertion:"expect(typeof Symbol()).toBe('symbol')" },
      { description: 'Symbol is not a string', assertion:"expect(result === 'string').toBe(false)" },
    ],
    hints: ['Use the typeof operator to check the type of a Symbol.'],
    tags: ['symbol', 'typeof', 'constructor'],
    usageExample: {
      code: `const sym = Symbol('id')
typeof sym   // → 'symbol'`,
      explanation: {
        en: 'Symbol() creates a primitive whose typeof is always \'symbol\'.',
        es: 'Symbol() crea un primitivo cuyo typeof es siempre \'symbol\'.',
      },
    },
  },
  {
    slug: 'symbol-constructor-2',
    title: 'Symbol() — each Symbol is unique',
    description: `## Symbol Uniqueness\n\nEvery call to \`Symbol()\` returns a new, unique symbol — even with the same description.\n\n**Challenge:** Verify that two Symbols with the same description are not equal.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Symbol',
    initialCode: `// Two Symbols with the same description\nconst a = Symbol('x')\nconst b = Symbol('x')\n`,
    solution: `Symbol('x') !== Symbol('x')`,
    tests: [
      { description: "result is true", assertion:"expect(result).toBe(true)" },
      { description: 'two Symbols are never equal', assertion:"expect(Symbol('a') === Symbol('a')).toBe(false)" },
      { description: 'Symbols without description are also unique', assertion:'expect(Symbol() === Symbol()).toBe(false)' },
      { description: 'same variable refers to same Symbol', assertion:"const s = Symbol('x'); expect(s === s).toBe(true)" },
      { description: 'uniqueness holds for different descriptions', assertion:"expect(Symbol('foo') !== Symbol('bar')).toBe(true)" },
    ],
    hints: ['Each Symbol() call produces a fresh, unique value.'],
    tags: ['symbol', 'uniqueness', 'constructor'],
    usageExample: {
      code: `const a = Symbol('x')
const b = Symbol('x')
a === b   // → false`,
      explanation: {
        en: 'Every Symbol() call returns a new unique value — even with the same description.',
        es: 'Cada llamada a Symbol() devuelve un valor único, aunque la descripción sea igual.',
      },
    },
  },
  {
    slug: 'symbol-constructor-3',
    title: 'Symbol() — description property',
    description: `## Symbol Description\n\nThe optional string passed to \`Symbol()\` becomes its \`.description\`.\n\n**Challenge:** Access the description of a Symbol.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Symbol',
    method: 'description',
    initialCode: `// Create a Symbol with description 'desc'\nconst s = Symbol('desc')\n`,
    solution: `Symbol('desc').description`,
    tests: [
      { description: "description is 'desc'", assertion:"expect(result).toBe('desc')" },
      { description: 'description matches argument', assertion:"expect(Symbol('hello').description).toBe('hello')" },
      { description: 'description is a string', assertion:"expect(result.description).toBe('string')" },
      { description: 'empty string description', assertion:"expect(Symbol('').description).toBe('')" },
      { description: 'description with spaces', assertion:"expect(Symbol('my desc').description).toBe('my desc')" },
    ],
    hints: ['Access `.description` on any Symbol.'],
    tags: ['symbol', 'description', 'constructor'],
    usageExample: {
      code: `const sym = Symbol('hello')
sym.description   // → 'hello'`,
      explanation: {
        en: 'The string passed to Symbol() becomes its read-only .description property.',
        es: 'La cadena pasada a Symbol() se convierte en su propiedad .description de solo lectura.',
      },
    },
  },
  {
    slug: 'symbol-constructor-4',
    title: 'Symbol() — no description is undefined',
    description: `## Symbol Without Description\n\nWhen called without an argument, the Symbol's \`.description\` is \`undefined\`.\n\n**Challenge:** Verify that \`Symbol().description\` is \`undefined\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Symbol',
    initialCode: `// Symbol with no description\nconst s = Symbol()\n`,
    solution: `Symbol().description`,
    tests: [
      { description: 'description is undefined when no arg', assertion:'expect(result).toBeUndefined()' },
      { description: 'description is strictly undefined', assertion:'expect(result === undefined).toBe(true)' },
      { description: 'typeof description is undefined', assertion:"expect(typeof result).toBe('undefined')" },
      { description: 'Symbol() still creates a symbol', assertion:"expect(typeof Symbol()).toBe('symbol')" },
      { description: 'description undefined, not null', assertion:'expect(result !== null).toBe(true)' },
    ],
    hints: ['Calling Symbol() with no argument leaves description as undefined.'],
    tags: ['symbol', 'description', 'undefined', 'constructor'],
    usageExample: {
      code: `const sym = Symbol()
sym.description   // → undefined`,
      explanation: {
        en: 'Without an argument, Symbol().description is undefined, not an empty string.',
        es: 'Sin argumento, Symbol().description es undefined, no una cadena vacía.',
      },
    },
  },
  {
    slug: 'symbol-constructor-5',
    title: 'Symbol() — cannot use new',
    description: `## Symbol Cannot Be Constructed with new\n\nUnlike most built-ins, \`Symbol\` is a function — calling it with \`new\` throws a \`TypeError\`.\n\n**Challenge:** Confirm that \`new Symbol()\` throws.`,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Symbol',
    initialCode: `// Attempting new Symbol() should throw\n`,
    solution: `() => new (Symbol as any)()`,
    tests: [
      { description: 'new Symbol() throws', assertion:'expect(result).toThrow()' },
      { description: 'throws a TypeError', assertion:'expect(result).toThrow(TypeError)' },
      { description: 'calling Symbol() without new works fine', assertion:"expect(typeof Symbol()).toBe('symbol')" },
      { description: 'Symbol is a function', assertion:"expect(typeof Symbol).toBe('function')" },
      { description: 'Symbol() does not throw', assertion:"expect((() => { try { (() => Symbol('ok'))(); return true; } catch(e) { return false; } })()).toBe(true)" },
    ],
    hints: ['Wrap the `new Symbol()` call in an arrow function for toThrow().'],
    tags: ['symbol', 'constructor', 'TypeError', 'new'],
    usageExample: {
      code: `Symbol('ok')   // works fine
try {
  new Symbol()  // TypeError!
} catch (e) {
  console.log(e instanceof TypeError)  // → true
}`,
      explanation: {
        en: 'Symbol is a primitive factory — calling it with new throws a TypeError.',
        es: 'Symbol es una función primitiva; llamarla con new lanza un TypeError.',
      },
    },
  },
]
