import type { Exercise } from '@/shared/types/exercises'

export const proxyGetExercises: Exercise[] = [
  {
    slug: 'proxy-get-key-exclamation',
    title: 'Proxy get trap — append ! to key',
    description: `## Proxy get trap

The \`get\` trap intercepts property reads. Use it to transform the key.

**Challenge:** Verify that a proxy with \`get: (t, k) => k + '!'\` returns \`'foo!'\` for \`p.foo\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Proxy',
    method: 'get',
    initialCode: `function getWithExclamation(): string {
  const p = new Proxy({}, { get: (t, k: string) => k + '!' })
  // Access p.foo
  return p.foo
}`,
    solution: `function getWithExclamation(): string {
  const p = new Proxy({}, { get: (t, k: string) => k + '!' })
  return p.foo
}`,
    tests: [
      { description: 'p.foo returns foo!', assertion: "const p = new Proxy({}, { get: (t, k) => k + '!' }); expect(p.foo).toBe('foo!')" },
      { description: 'p.bar returns bar!', assertion: "const p = new Proxy({}, { get: (t, k) => k + '!' }); expect(p.bar).toBe('bar!')" },
      { description: 'result is string', assertion: "const p = new Proxy({}, { get: (t, k) => k + '!' }); expect(typeof p.foo).toBe('string')" },
      { description: 'result is truthy', assertion: "const p = new Proxy({}, { get: (t, k) => k + '!' }); expect(p.foo).toBeTruthy()" },
      { description: 'result contains foo', assertion: "const p = new Proxy({}, { get: (t, k) => k + '!' }); expect(p.foo).toContain('foo')" },
    ],
    hints: [
      'The `get` trap receives `(target, key, receiver)` — use `key` to build the return value.',
    ],
    tags: ['Proxy', 'get trap', 'intermediate'],
    usageExample: {
      code: `const p = new Proxy({}, {
  get: (target, key) => 'got ' + String(key)
})
console.log(p.foo) // → 'got foo'
console.log(p.bar) // → 'got bar'`,
      explanation: {
        en: 'The get trap intercepts property reads on a proxy, letting you return custom values for any key instead of actual target values.',
        es: 'La trampa get intercepta lecturas de propiedades en un proxy, permitiendo devolver valores personalizados en lugar de las propiedades reales del objetivo.',
      },
    },
  },
  {
    slug: 'proxy-get-double-value',
    title: 'Proxy get trap — double value',
    description: `## get trap — transform target values

The \`get\` trap can access the real target and transform its values.

**Challenge:** Verify that a proxy doubling \`target[key]\` returns \`2\` for a target \`{a: 1}\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Proxy',
    method: 'get',
    initialCode: `function getDoubleValue(): number {
  const p = new Proxy({ a: 1 }, { get: (t, k: string) => (t as any)[k] * 2 })
  return p.a
}`,
    solution: `function getDoubleValue(): number {
  const p = new Proxy({ a: 1 }, { get: (t, k: string) => (t as any)[k] * 2 })
  return p.a
}`,
    tests: [
      { description: 'p.a returns 2', assertion: 'const p = new Proxy({a: 1}, { get: (t, k) => t[k] * 2 }); expect(p.a).toBe(2)' },
      { description: 'result equals 2', assertion: 'expect(new Proxy({a: 1}, { get: (t, k) => t[k] * 2 }).a === 2).toBe(true)' },
      { description: 'result is number', assertion: "expect(typeof new Proxy({a: 1}, { get: (t, k) => t[k] * 2 }).a).toBe('number')" },
      { description: 'double of 5 is 10', assertion: 'const p = new Proxy({n: 5}, { get: (t, k) => t[k] * 2 }); expect(p.n).toBe(10)' },
      { description: 'result is truthy', assertion: 'expect(new Proxy({a: 1}, { get: (t, k) => t[k] * 2 }).a).toBeTruthy()' },
    ],
    hints: [
      'Access `target[key]` inside the trap to get the original value.',
    ],
    tags: ['Proxy', 'get trap', 'intermediate'],
    usageExample: {
      code: `const p = new Proxy({}, {
  get: (target, key) => 'got ' + String(key)
})
console.log(p.foo) // → 'got foo'
console.log(p.bar) // → 'got bar'`,
      explanation: {
        en: 'The get trap intercepts property reads on a proxy, letting you return custom values for any key instead of actual target values.',
        es: 'La trampa get intercepta lecturas de propiedades en un proxy, permitiendo devolver valores personalizados en lugar de las propiedades reales del objetivo.',
      },
    },
  },
  {
    slug: 'proxy-get-intercepted-constant',
    title: 'Proxy get trap — always return intercepted',
    description: `## get trap — intercept all reads

A \`get\` trap that ignores the target always returns a fixed value for any property.

**Challenge:** Verify that \`p.anything === 'intercepted'\` when get always returns \`'intercepted'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Proxy',
    method: 'get',
    initialCode: `function getIntercepted(): string {
  const p = new Proxy({}, { get: () => 'intercepted' })
  return p.anything
}`,
    solution: `function getIntercepted(): string {
  const p = new Proxy({}, { get: () => 'intercepted' })
  return p.anything
}`,
    tests: [
      { description: 'p.anything is intercepted', assertion: "const p = new Proxy({}, { get: () => 'intercepted' }); expect(p.anything).toBe('intercepted')" },
      { description: 'p.foo is also intercepted', assertion: "const p = new Proxy({}, { get: () => 'intercepted' }); expect(p.foo).toBe('intercepted')" },
      { description: 'result is string', assertion: "const p = new Proxy({}, { get: () => 'intercepted' }); expect(typeof p.anything).toBe('string')" },
      { description: 'result is truthy', assertion: "const p = new Proxy({}, { get: () => 'intercepted' }); expect(p.anything).toBeTruthy()" },
      { description: 'contains intercepted', assertion: "const p = new Proxy({}, { get: () => 'intercepted' }); expect(p.x).toContain('intercepted')" },
    ],
    hints: [
      'Returning a constant in the `get` trap intercepts all property reads.',
    ],
    tags: ['Proxy', 'get trap', 'beginner'],
    usageExample: {
      code: `const p = new Proxy({}, {
  get: (target, key) => 'got ' + String(key)
})
console.log(p.foo) // → 'got foo'
console.log(p.bar) // → 'got bar'`,
      explanation: {
        en: 'The get trap intercepts property reads on a proxy, letting you return custom values for any key instead of actual target values.',
        es: 'La trampa get intercepta lecturas de propiedades en un proxy, permitiendo devolver valores personalizados en lugar de las propiedades reales del objetivo.',
      },
    },
  },
  {
    slug: 'proxy-get-passthrough',
    title: 'Proxy get trap — passthrough (no trap)',
    description: `## Proxy without get trap

An empty handler means the proxy forwards all reads to the target unchanged.

**Challenge:** Verify that \`new Proxy({x: 10}, {}).x === 10\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Proxy',
    method: 'get',
    initialCode: `function getPassthrough(): number {
  const p = new Proxy({ x: 10 }, {})
  return p.x
}`,
    solution: `function getPassthrough(): number {
  const p = new Proxy({ x: 10 }, {})
  return p.x
}`,
    tests: [
      { description: 'p.x equals 10', assertion: 'const p = new Proxy({x: 10}, {}); expect(p.x).toBe(10)' },
      { description: 'result equals 10', assertion: 'expect(new Proxy({x: 10}, {}).x === 10).toBe(true)' },
      { description: 'result is number', assertion: "expect(typeof new Proxy({x: 10}, {}).x).toBe('number')" },
      { description: 'result is truthy', assertion: 'expect(new Proxy({x: 10}, {}).x).toBeTruthy()' },
      { description: 'missing key is undefined', assertion: 'expect(new Proxy({x: 10}, {}).y).toBeUndefined()' },
    ],
    hints: [
      'Without a `get` trap, the proxy reads directly from the target.',
    ],
    tags: ['Proxy', 'get trap', 'passthrough', 'beginner'],
    usageExample: {
      code: `const p = new Proxy({}, {
  get: (target, key) => 'got ' + String(key)
})
console.log(p.foo) // → 'got foo'
console.log(p.bar) // → 'got bar'`,
      explanation: {
        en: 'The get trap intercepts property reads on a proxy, letting you return custom values for any key instead of actual target values.',
        es: 'La trampa get intercepta lecturas de propiedades en un proxy, permitiendo devolver valores personalizados en lugar de las propiedades reales del objetivo.',
      },
    },
  },
  {
    slug: 'proxy-get-typeof-key',
    title: 'Proxy get trap — typeof key',
    description: `## get trap — typeof the key

Property keys are strings (or Symbols). A \`get\` trap returning \`typeof k\` will return \`'string'\` for any string key.

**Challenge:** Verify that \`p.foo === 'string'\` when get returns \`typeof k\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Proxy',
    method: 'get',
    initialCode: `function getTypeofKey(): string {
  const p = new Proxy({}, { get: (t, k) => typeof k })
  return p.foo
}`,
    solution: `function getTypeofKey(): string {
  const p = new Proxy({}, { get: (t, k) => typeof k })
  return p.foo
}`,
    tests: [
      { description: 'p.foo returns string', assertion: "const p = new Proxy({}, { get: (t, k) => typeof k }); expect(p.foo).toBe('string')" },
      { description: 'p.bar also returns string', assertion: "const p = new Proxy({}, { get: (t, k) => typeof k }); expect(p.bar).toBe('string')" },
      { description: 'result is string', assertion: "const p = new Proxy({}, { get: (t, k) => typeof k }); expect(typeof p.foo).toBe('string')" },
      { description: 'result is truthy', assertion: "const p = new Proxy({}, { get: (t, k) => typeof k }); expect(p.foo).toBeTruthy()" },
      { description: 'equals string literal', assertion: "const p = new Proxy({}, { get: (t, k) => typeof k }); expect(p.anything === 'string').toBe(true)" },
    ],
    hints: [
      'String property keys have `typeof key === \'string\'`.',
    ],
    tags: ['Proxy', 'get trap', 'typeof', 'intermediate'],
    usageExample: {
      code: `const p = new Proxy({}, {
  get: (target, key) => 'got ' + String(key)
})
console.log(p.foo) // → 'got foo'
console.log(p.bar) // → 'got bar'`,
      explanation: {
        en: 'The get trap intercepts property reads on a proxy, letting you return custom values for any key instead of actual target values.',
        es: 'La trampa get intercepta lecturas de propiedades en un proxy, permitiendo devolver valores personalizados en lugar de las propiedades reales del objetivo.',
      },
    },
  },
]
