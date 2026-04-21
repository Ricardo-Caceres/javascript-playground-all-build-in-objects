import type { Exercise } from '@/shared/types/exercises'

export const weakRefConstructorExercises: Exercise[] = [
  {
    slug: 'weakref-constructor-1',
    title: 'WeakRef — instanceof',
    description: `## WeakRef Constructor\n\n\`new WeakRef(obj) instanceof WeakRef\` is \`true\`.\n\n**Challenge:** Verify the instanceof check.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'WeakRef',
    initialCode: `const obj = {};\nnew WeakRef(obj) instanceof WeakRef`,
    solution: `const obj = {}; new WeakRef(obj) instanceof WeakRef`,
    tests: [
      { description: 'instanceof WeakRef is true', assertion: 'const obj = {}; expect(new WeakRef(obj) instanceof WeakRef).toBe(true)' },
      { description: 'instanceof Object is true', assertion: 'expect(new WeakRef({}) instanceof Object).toBe(true)' },
      { description: 'is truthy', assertion: 'expect(new WeakRef({})).toBeTruthy()' },
      { description: 'two instances are different', assertion: 'expect(new WeakRef({}) === new WeakRef({})).toBe(false)' },
      { description: 'not null', assertion: 'expect(new WeakRef({}) === null).toBe(false)' },
    ],
    hints: ['WeakRef is a constructor that creates a weak reference to an object.'],
    tags: ['weakref', 'constructor', 'instanceof'],
    usageExample: {
      code: `let obj = { data: 42 }
const ref = new WeakRef(obj)
ref.deref().data  // → 42`,
      explanation: {
        en: "WeakRef holds a weak reference to an object that does not prevent garbage collection.",
        es: "WeakRef mantiene una referencia débil a un objeto que no impide la recolección de basura.",
      },
    },
  },
  {
    slug: 'weakref-constructor-2',
    title: 'WeakRef — typeof',
    description: `## typeof WeakRef Instance\n\n\`typeof new WeakRef({})\` is \`'object'\`.\n\n**Challenge:** Verify the type.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'WeakRef',
    initialCode: `typeof new WeakRef({})`,
    solution: `typeof new WeakRef({}) === 'object'`,
    tests: [
      { description: "typeof is 'object'", assertion: "expect(typeof new WeakRef({})).toBe('object')" },
      { description: "not 'function'", assertion: "expect(typeof new WeakRef({}) === 'function').toBe(false)" },
      { description: "not 'string'", assertion: "expect(typeof new WeakRef({}) === 'string').toBe(false)" },
      { description: 'instanceof WeakRef', assertion: 'expect(new WeakRef({}) instanceof WeakRef).toBe(true)' },
      { description: 'is truthy', assertion: 'expect(new WeakRef({})).toBeTruthy()' },
    ],
    hints: ['All WeakRef instances are objects.'],
    tags: ['weakref', 'constructor', 'typeof'],
    usageExample: {
      code: `const target = {}
const ref = new WeakRef(target)
ref.deref() === target  // → true`,
      explanation: {
        en: "deref() returns the original target object if it has not been garbage collected.",
        es: "deref() devuelve el objeto objetivo original si no ha sido recolectado por el GC.",
      },
    },
  },
  {
    slug: 'weakref-constructor-3',
    title: 'WeakRef — deref returns original object',
    description: `## WeakRef deref\n\n\`new WeakRef(obj).deref() === obj\` is \`true\`.\n\n**Challenge:** Verify that deref returns the original object.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'WeakRef',
    initialCode: `const obj = {};\nnew WeakRef(obj).deref() === obj`,
    solution: `const obj = {}; new WeakRef(obj).deref() === obj`,
    tests: [
      { description: 'deref returns original', assertion: 'const obj = {}; expect(new WeakRef(obj).deref() === obj).toBe(true)' },
      { description: 'deref is not null', assertion: 'expect(new WeakRef({}).deref() === null).toBe(false)' },
      { description: 'deref is not undefined (immediately)', assertion: 'const o = {}; expect(new WeakRef(o).deref()).toBe(o)' },
      { description: 'is truthy', assertion: 'const o2 = {}; expect(new WeakRef(o2).deref()).toBeTruthy()' },
      { description: 'instanceof WeakRef', assertion: 'expect(new WeakRef({}) instanceof WeakRef).toBe(true)' },
    ],
    hints: ['deref() returns the referenced object if it has not been garbage collected.'],
    tags: ['weakref', 'constructor', 'deref'],
    usageExample: {
      code: `const ref = new WeakRef({})
ref instanceof WeakRef  // → true`,
      explanation: {
        en: "WeakRef instances can be checked with instanceof.",
        es: "Las instancias de WeakRef se pueden verificar con instanceof.",
      },
    },
  },
  {
    slug: 'weakref-constructor-4',
    title: 'WeakRef — deref preserves properties',
    description: `## WeakRef Property Access\n\n\`new WeakRef({x: 1}).deref().x === 1\`.\n\n**Challenge:** Verify property access through deref.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'WeakRef',
    initialCode: `const obj = { x: 1 };\nnew WeakRef(obj).deref()`,
    solution: `const obj = { x: 1 }; (new WeakRef(obj).deref() as any).x === 1`,
    tests: [
      { description: 'deref preserves x', assertion: 'const obj = {x: 1}; expect(new WeakRef(obj).deref().x).toBe(1)' },
      { description: 'deref is the same object', assertion: 'const obj = {x: 1}; expect(new WeakRef(obj).deref()).toEqual({x: 1})' },
      { description: 'x property exists', assertion: 'const obj = {x: 1}; const ref = new WeakRef(obj); expect(ref.deref().x).toBe(1)' },
      { description: 'instanceof WeakRef', assertion: 'expect(new WeakRef({x: 1}) instanceof WeakRef).toBe(true)' },
      { description: 'deref is not null', assertion: 'expect(new WeakRef({x: 1}).deref() === null).toBe(false)' },
    ],
    hints: ['The dereferenced object has all original properties intact.'],
    tags: ['weakref', 'constructor', 'deref', 'property'],
    usageExample: {
      code: `const obj = { name: 'test' }
const ref = new WeakRef(obj)
obj.name  // → 'test'`,
      explanation: {
        en: "Holding a WeakRef does not keep the object alive on its own.",
        es: "Mantener un WeakRef no mantiene el objeto vivo por sí solo.",
      },
    },
  },
  {
    slug: 'weakref-constructor-5',
    title: 'WeakRef — primitive throws',
    description: `## WeakRef Primitive\n\n\`new WeakRef(42)\` throws a TypeError because WeakRef only accepts objects.\n\n**Challenge:** Verify that passing a primitive throws.`,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'WeakRef',
    initialCode: `// WeakRef requires an object, not a primitive\ntry {\n  new (WeakRef as any)(42)\n} catch (e) {\n  (e as Error).message\n}`,
    solution: `expect(() => { new (WeakRef as any)(42); }).toThrow()`,
    tests: [
      { description: 'throws on primitive', assertion: 'expect(result).toBeTruthy()' },
      { description: 'does not throw on object', assertion: 'const r = new WeakRef({}); expect(r instanceof WeakRef).toBe(true)' },
      { description: 'WeakRef is a function', assertion: "expect(typeof WeakRef).toBe('function')" },
      { description: 'WeakRef has deref', assertion: "expect(typeof WeakRef.prototype.deref).toBe('function')" },
      { description: 'WeakRef name', assertion: "expect(WeakRef.name).toBe('WeakRef')" },
    ],
    hints: ['WeakRef only accepts objects (including arrays and functions), not primitives like numbers or strings.'],
    tags: ['weakref', 'constructor', 'error'],
    usageExample: {
      code: `const ref = new WeakRef({})
typeof ref  // → 'object'`,
      explanation: {
        en: "WeakRef is an object type used for memory-sensitive caching scenarios.",
        es: "WeakRef es un tipo de objeto usado para escenarios de caché sensibles a la memoria.",
      },
    },
  },
]
