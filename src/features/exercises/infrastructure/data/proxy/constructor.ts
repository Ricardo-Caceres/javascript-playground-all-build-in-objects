import type { Exercise } from '@/shared/types/exercises'

export const proxyConstructorExercises: Exercise[] = [
  {
    slug: 'proxy-constructor-instanceof-object',
    title: 'Proxy() — instanceof Object',
    description: `## Proxy constructor

A \`Proxy\` wraps an object and intercepts operations. A proxy of an object is still an \`Object\` instance.

**Challenge:** Verify that \`new Proxy({}, {}) instanceof Object\` is \`true\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Proxy',
    method: 'Proxy',
    initialCode: `function checkProxyInstanceof(): boolean {
  // Return whether new Proxy({}, {}) instanceof Object
}`,
    solution: `function checkProxyInstanceof(): boolean {
  return new Proxy({}, {}) instanceof Object
}`,
    tests: [
      { description: 'instanceof Object is true', assertion:'expect(new Proxy({}, {}) instanceof Object).toBe(true)' },
      { description: 'result is boolean', assertion:"expect(typeof (new Proxy({}, {}) instanceof Object)).toBe('boolean')" },
      { description: 'truthy check', assertion:'expect(new Proxy({}, {}) instanceof Object).toBeTruthy()' },
      { description: 'not null', assertion:'expect(new Proxy({}, {}) !== null).toBe(true)' },
      { description: 'is an object', assertion:"expect(typeof new Proxy({}, {})).toBe('object')" },
    ],
    hints: [
      'A `Proxy` forwards operations to the target, so it inherits the target\'s prototype chain.',
    ],
    tags: ['Proxy', 'constructor', 'instanceof', 'beginner'],
    usageExample: {
      code: `const target = { value: 42 }
const p = new Proxy(target, {
  get: (t, k) => k in t ? t[k] : 'default'
})
console.log(p.value)   // → 42
console.log(p.missing) // → 'default'`,
      explanation: {
        en: 'new Proxy(target, handler) creates a proxy that intercepts operations on the target object using trap methods in the handler.',
        es: 'new Proxy(target, handler) crea un proxy que intercepta operaciones sobre el objeto objetivo usando métodos trampa en el handler.',
      },
    },
  },
  {
    slug: 'proxy-constructor-typeof-object',
    title: 'Proxy() — typeof',
    description: `## typeof a Proxy

\`typeof new Proxy({}, {})\` returns \`'object'\` because the proxy wraps a plain object.

**Challenge:** Verify that \`typeof new Proxy({}, {})\` returns \`'object'\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Proxy',
    method: 'Proxy',
    initialCode: `function checkProxyTypeof(): string {
  // Return typeof new Proxy({}, {})
}`,
    solution: `function checkProxyTypeof(): string {
  return typeof new Proxy({}, {})
}`,
    tests: [
      { description: 'typeof proxy is object', assertion:"expect(typeof new Proxy({}, {})).toBe('object')" },
      { description: 'equals object string', assertion:"expect(typeof new Proxy({}, {}) === 'object').toBe(true)" },
      { description: 'not function', assertion:"expect(typeof new Proxy({}, {}) !== 'function').toBe(true)" },
      { description: 'not undefined', assertion:"expect(typeof new Proxy({}, {}) !== 'undefined').toBe(true)" },
      { description: 'proxy is truthy', assertion:'expect(new Proxy({}, {})).toBeTruthy()' },
    ],
    hints: [
      '`typeof` on a proxy of an object returns `\'object\'`.',
    ],
    tags: ['Proxy', 'typeof', 'beginner'],
    usageExample: {
      code: `const target = { value: 42 }
const p = new Proxy(target, {
  get: (t, k) => k in t ? t[k] : 'default'
})
console.log(p.value)   // → 42
console.log(p.missing) // → 'default'`,
      explanation: {
        en: 'new Proxy(target, handler) creates a proxy that intercepts operations on the target object using trap methods in the handler.',
        es: 'new Proxy(target, handler) crea un proxy que intercepta operaciones sobre el objeto objetivo usando métodos trampa en el handler.',
      },
    },
  },
  {
    slug: 'proxy-constructor-transparent',
    title: 'Proxy() — transparent proxy',
    description: `## Transparent proxy

A \`Proxy\` with an empty handler \`{}\` transparently forwards all operations to the target object.

**Challenge:** Verify that \`new Proxy({x: 1}, {}).x === 1\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Proxy',
    method: 'Proxy',
    initialCode: `function checkTransparentProxy(): number {
  // Create a transparent proxy of {x: 1} and return .x
}`,
    solution: `function checkTransparentProxy(): number {
  return new Proxy({ x: 1 }, {}).x
}`,
    tests: [
      { description: 'p.x equals 1', assertion:'const p = new Proxy({x: 1}, {}); expect(p.x).toBe(1)' },
      { description: 'result equals 1', assertion:'expect(new Proxy({x: 1}, {}).x === 1).toBe(true)' },
      { description: 'result is number', assertion:"expect(typeof new Proxy({x: 1}, {}).x).toBe('number')" },
      { description: 'result is truthy', assertion:'expect(new Proxy({x: 1}, {}).x).toBeTruthy()' },
      { description: 'missing key is undefined', assertion:'expect(new Proxy({x: 1}, {}).y).toBeUndefined()' },
    ],
    hints: [
      'An empty handler `{}` means no traps — all operations pass through to the target.',
    ],
    tags: ['Proxy', 'constructor', 'transparent', 'beginner'],
    usageExample: {
      code: `const target = { value: 42 }
const p = new Proxy(target, {
  get: (t, k) => k in t ? t[k] : 'default'
})
console.log(p.value)   // → 42
console.log(p.missing) // → 'default'`,
      explanation: {
        en: 'new Proxy(target, handler) creates a proxy that intercepts operations on the target object using trap methods in the handler.',
        es: 'new Proxy(target, handler) crea un proxy que intercepta operaciones sobre el objeto objetivo usando métodos trampa en el handler.',
      },
    },
  },
  {
    slug: 'proxy-constructor-get-trap-constant',
    title: 'Proxy() — get trap returning constant',
    description: `## Proxy get trap

When a \`get\` trap always returns \`42\`, any property access on the proxy returns \`42\`.

**Challenge:** Verify that \`new Proxy({}, { get: () => 42 }).anything === 42\`.`,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Proxy',
    method: 'Proxy',
    initialCode: `function checkGetTrapConstant(): number {
  // Create a proxy whose get trap always returns 42
  // Access any property and return it
}`,
    solution: `function checkGetTrapConstant(): number {
  const p = new Proxy({}, { get: () => 42 })
  return p.anything
}`,
    tests: [
      { description: 'any property returns 42', assertion:'const p = new Proxy({}, { get: () => 42 }); expect(p.anything).toBe(42)' },
      { description: 'another key also returns 42', assertion:'const p = new Proxy({}, { get: () => 42 }); expect(p.foo).toBe(42)' },
      { description: 'result equals 42', assertion:'expect(new Proxy({}, { get: () => 42 }).anything === 42).toBe(true)' },
      { description: 'result is number', assertion:"expect(typeof new Proxy({}, { get: () => 42 }).anything).toBe('number')" },
      { description: 'result is truthy', assertion:'expect(new Proxy({}, { get: () => 42 }).x).toBeTruthy()' },
    ],
    hints: [
      'The `get(target, key)` trap intercepts all property reads.',
    ],
    tags: ['Proxy', 'constructor', 'get trap', 'intermediate'],
    usageExample: {
      code: `const target = { value: 42 }
const p = new Proxy(target, {
  get: (t, k) => k in t ? t[k] : 'default'
})
console.log(p.value)   // → 42
console.log(p.missing) // → 'default'`,
      explanation: {
        en: 'new Proxy(target, handler) creates a proxy that intercepts operations on the target object using trap methods in the handler.',
        es: 'new Proxy(target, handler) crea un proxy que intercepta operaciones sobre el objeto objetivo usando métodos trampa en el handler.',
      },
    },
  },
  {
    slug: 'proxy-constructor-null-target-throws',
    title: 'Proxy() — null target throws',
    description: `## Proxy requires a non-null target

The \`Proxy\` constructor throws a \`TypeError\` when the target is \`null\`.

**Challenge:** Verify that \`() => new Proxy(null, {})\` throws.`,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Proxy',
    method: 'Proxy',
    initialCode: `function checkNullTargetThrows(): boolean {
  // Return true if new Proxy(null, {}) throws
  try {
    new Proxy(null as any, {})
    return false
  } catch {
    return true
  }
}`,
    solution: `function checkNullTargetThrows(): boolean {
  try {
    new Proxy(null as any, {})
    return false
  } catch {
    return true
  }
}`,
    tests: [
      { description: 'null target throws', assertion:'expect(() => new Proxy(null, {})).toThrow()' },
      { description: 'throws a TypeError', assertion:'expect(() => new Proxy(null, {})).toThrow(TypeError)' },
      { description: 'valid target does not throw', assertion:'expect((() => { try { (() => new Proxy({}, {}))(); return true; } catch(e) { return false; } })()).toBe(true)' },
      { description: 'Proxy is truthy', assertion:'expect(Proxy).toBeTruthy()' },
      { description: 'typeof Proxy is function', assertion:"expect(typeof Proxy).toBe('function')" },
    ],
    hints: [
      'The first argument to `Proxy` must be a non-null object or function.',
    ],
    tags: ['Proxy', 'constructor', 'TypeError', 'intermediate'],
    usageExample: {
      code: `const target = { value: 42 }
const p = new Proxy(target, {
  get: (t, k) => k in t ? t[k] : 'default'
})
console.log(p.value)   // → 42
console.log(p.missing) // → 'default'`,
      explanation: {
        en: 'new Proxy(target, handler) creates a proxy that intercepts operations on the target object using trap methods in the handler.',
        es: 'new Proxy(target, handler) crea un proxy que intercepta operaciones sobre el objeto objetivo usando métodos trampa en el handler.',
      },
    },
  },
]
