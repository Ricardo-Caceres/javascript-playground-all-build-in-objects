import type { Exercise } from '@/shared/types/exercises'

export const proxyHasExercises: Exercise[] = [
  {
    slug: 'proxy-has-always-true',
    title: 'Proxy has trap — always true',
    description: `## Proxy has trap

The \`has\` trap intercepts the \`in\` operator. When it always returns \`true\`, every key appears to exist.

**Challenge:** Verify that \`'anything' in p\` is \`true\` when the \`has\` trap always returns \`true\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Proxy',
    method: 'has',
    initialCode: `function checkHasAlwaysTrue(): boolean {
  const p = new Proxy({}, { has: () => true })
  return 'anything' in p
}`,
    solution: `function checkHasAlwaysTrue(): boolean {
  const p = new Proxy({}, { has: () => true })
  return 'anything' in p
}`,
    tests: [
      { description: 'anything in p is true', assertion: "const p = new Proxy({}, { has: () => true }); expect('anything' in p).toBe(true)" },
      { description: 'foo in p is also true', assertion: "const p = new Proxy({}, { has: () => true }); expect('foo' in p).toBe(true)" },
      { description: 'result is boolean', assertion: "const p = new Proxy({}, { has: () => true }); expect(typeof ('anything' in p)).toBe('boolean')" },
      { description: 'result is truthy', assertion: "const p = new Proxy({}, { has: () => true }); expect('anything' in p).toBeTruthy()" },
      { description: 'equals true', assertion: "const p = new Proxy({}, { has: () => true }); expect(('anything' in p) === true).toBe(true)" },
    ],
    hints: [
      'The `has` trap intercepts the `in` operator: `key in proxy`.',
    ],
    tags: ['Proxy', 'has trap', 'in operator', 'intermediate'],
    usageExample: {
      code: `const p = new Proxy({}, {
  has: (target, key) => key.startsWith('a')
})
console.log('apple' in p)  // → true
console.log('banana' in p) // → false`,
      explanation: {
        en: 'The has trap intercepts the in operator, allowing you to control which property names are considered present on a proxy.',
        es: 'La trampa has intercepta el operador in, permitiendo controlar qué nombres de propiedad se consideran presentes en un proxy.',
      },
    },
  },
  {
    slug: 'proxy-has-passthrough-existing',
    title: 'Proxy has trap — passthrough for existing key',
    description: `## has trap — passthrough

Without a \`has\` trap, the \`in\` operator checks the target directly.

**Challenge:** Verify that \`'a' in new Proxy({a: 1}, {})\` is \`true\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Proxy',
    method: 'has',
    initialCode: `function checkHasPassthrough(): boolean {
  const p = new Proxy({ a: 1 }, {})
  return 'a' in p
}`,
    solution: `function checkHasPassthrough(): boolean {
  const p = new Proxy({ a: 1 }, {})
  return 'a' in p
}`,
    tests: [
      { description: 'a in p is true', assertion: "const p = new Proxy({a: 1}, {}); expect('a' in p).toBe(true)" },
      { description: 'result is boolean', assertion: "const p = new Proxy({a: 1}, {}); expect(typeof ('a' in p)).toBe('boolean')" },
      { description: 'missing key is false', assertion: "const p = new Proxy({a: 1}, {}); expect('z' in p).toBe(false)" },
      { description: 'result is truthy', assertion: "const p = new Proxy({a: 1}, {}); expect('a' in p).toBeTruthy()" },
      { description: 'equals true', assertion: "const p = new Proxy({a: 1}, {}); expect(('a' in p) === true).toBe(true)" },
    ],
    hints: [
      'Without a `has` trap, `in` checks the real target.',
    ],
    tags: ['Proxy', 'has trap', 'passthrough', 'beginner'],
    usageExample: {
      code: `const p = new Proxy({}, {
  has: (target, key) => key.startsWith('a')
})
console.log('apple' in p)  // → true
console.log('banana' in p) // → false`,
      explanation: {
        en: 'The has trap intercepts the in operator, allowing you to control which property names are considered present on a proxy.',
        es: 'La trampa has intercepta el operador in, permitiendo controlar qué nombres de propiedad se consideran presentes en un proxy.',
      },
    },
  },
  {
    slug: 'proxy-has-always-false',
    title: 'Proxy has trap — always false',
    description: `## has trap — hide all properties

When the \`has\` trap always returns \`false\`, no key ever appears present — even if the target has it.

**Challenge:** Verify that \`'x' in p\` is \`false\` when the \`has\` trap always returns \`false\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Proxy',
    method: 'has',
    initialCode: `function checkHasAlwaysFalse(): boolean {
  const p = new Proxy({}, { has: () => false })
  return 'x' in p
}`,
    solution: `function checkHasAlwaysFalse(): boolean {
  const p = new Proxy({}, { has: () => false })
  return 'x' in p
}`,
    tests: [
      { description: 'x in p is false', assertion: "const p = new Proxy({}, { has: () => false }); expect('x' in p).toBe(false)" },
      { description: 'anything in p is false', assertion: "const p = new Proxy({}, { has: () => false }); expect('anything' in p).toBe(false)" },
      { description: 'result is boolean', assertion: "const p = new Proxy({}, { has: () => false }); expect(typeof ('x' in p)).toBe('boolean')" },
      { description: 'result is falsy', assertion: "const p = new Proxy({}, { has: () => false }); expect('x' in p).toBeFalsy()" },
      { description: 'equals false', assertion: "const p = new Proxy({}, { has: () => false }); expect(('x' in p) === false).toBe(true)" },
    ],
    hints: [
      'The `has` trap can lie — returning `false` even if the target has the property.',
    ],
    tags: ['Proxy', 'has trap', 'intermediate'],
    usageExample: {
      code: `const p = new Proxy({}, {
  has: (target, key) => key.startsWith('a')
})
console.log('apple' in p)  // → true
console.log('banana' in p) // → false`,
      explanation: {
        en: 'The has trap intercepts the in operator, allowing you to control which property names are considered present on a proxy.',
        es: 'La trampa has intercepta el operador in, permitiendo controlar qué nombres de propiedad se consideran presentes en un proxy.',
      },
    },
  },
  {
    slug: 'proxy-has-conditional-x',
    title: 'Proxy has trap — only x is present',
    description: `## has trap — selective key visibility

The \`has\` trap receives \`(target, key)\`. You can conditionally return \`true\` only for specific keys.

**Challenge:** Verify that \`'x' in p\` is \`true\` when \`has\` returns \`key === 'x'\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Proxy',
    method: 'has',
    initialCode: `function checkHasConditional(): boolean {
  const p = new Proxy({ x: 1 }, { has: (t, k) => k === 'x' })
  return 'x' in p
}`,
    solution: `function checkHasConditional(): boolean {
  const p = new Proxy({ x: 1 }, { has: (t, k) => k === 'x' })
  return 'x' in p
}`,
    tests: [
      { description: 'x in p is true', assertion: "const p = new Proxy({x:1}, { has: (t, k) => k === 'x' }); expect('x' in p).toBe(true)" },
      { description: 'result is boolean', assertion: "const p = new Proxy({x:1}, { has: (t, k) => k === 'x' }); expect(typeof ('x' in p)).toBe('boolean')" },
      { description: 'result is truthy', assertion: "const p = new Proxy({x:1}, { has: (t, k) => k === 'x' }); expect('x' in p).toBeTruthy()" },
      { description: 'equals true', assertion: "const p = new Proxy({x:1}, { has: (t, k) => k === 'x' }); expect(('x' in p) === true).toBe(true)" },
      { description: 'y is not present', assertion: "const p = new Proxy({x:1}, { has: (t, k) => k === 'x' }); expect('y' in p).toBe(false)" },
    ],
    hints: [
      'Use `k === \'x\'` to allow only the key `\'x\'` through the trap.',
    ],
    tags: ['Proxy', 'has trap', 'intermediate'],
    usageExample: {
      code: `const p = new Proxy({}, {
  has: (target, key) => key.startsWith('a')
})
console.log('apple' in p)  // → true
console.log('banana' in p) // → false`,
      explanation: {
        en: 'The has trap intercepts the in operator, allowing you to control which property names are considered present on a proxy.',
        es: 'La trampa has intercepta el operador in, permitiendo controlar qué nombres de propiedad se consideran presentes en un proxy.',
      },
    },
  },
  {
    slug: 'proxy-has-conditional-y-absent',
    title: 'Proxy has trap — y is absent',
    description: `## has trap — y not visible

When the \`has\` trap only returns \`true\` for \`'x'\`, the key \`'y'\` is not visible via \`in\`.

**Challenge:** Verify that \`'y' in p\` is \`false\` when \`has\` returns \`key === 'x'\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Proxy',
    method: 'has',
    initialCode: `function checkHasYAbsent(): boolean {
  const p = new Proxy({ x: 1 }, { has: (t, k) => k === 'x' })
  return 'y' in p
}`,
    solution: `function checkHasYAbsent(): boolean {
  const p = new Proxy({ x: 1 }, { has: (t, k) => k === 'x' })
  return 'y' in p
}`,
    tests: [
      { description: 'y in p is false', assertion: "const p = new Proxy({x:1}, { has: (t, k) => k === 'x' }); expect('y' in p).toBe(false)" },
      { description: 'result is boolean', assertion: "const p = new Proxy({x:1}, { has: (t, k) => k === 'x' }); expect(typeof ('y' in p)).toBe('boolean')" },
      { description: 'result is falsy', assertion: "const p = new Proxy({x:1}, { has: (t, k) => k === 'x' }); expect('y' in p).toBeFalsy()" },
      { description: 'equals false', assertion: "const p = new Proxy({x:1}, { has: (t, k) => k === 'x' }); expect(('y' in p) === false).toBe(true)" },
      { description: 'x is still present', assertion: "const p = new Proxy({x:1}, { has: (t, k) => k === 'x' }); expect('x' in p).toBe(true)" },
    ],
    hints: [
      'When the condition is false, `has` returns `false` for that key.',
    ],
    tags: ['Proxy', 'has trap', 'intermediate'],
    usageExample: {
      code: `const p = new Proxy({}, {
  has: (target, key) => key.startsWith('a')
})
console.log('apple' in p)  // → true
console.log('banana' in p) // → false`,
      explanation: {
        en: 'The has trap intercepts the in operator, allowing you to control which property names are considered present on a proxy.',
        es: 'La trampa has intercepta el operador in, permitiendo controlar qué nombres de propiedad se consideran presentes en un proxy.',
      },
    },
  },
]
