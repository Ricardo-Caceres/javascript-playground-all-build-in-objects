import type { Exercise } from '@/shared/types/exercises'

export const proxySetExercises: Exercise[] = [
  {
    slug: 'proxy-set-log-key',
    title: 'Proxy set trap — log key on set',
    description: `## Proxy set trap

The \`set\` trap intercepts property assignments. Use it to observe or transform writes.

**Challenge:** Verify that setting \`p.x = 1\` pushes \`'x'\` into a log array.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Proxy',
    method: 'set',
    initialCode: `function checkSetLog(): string[] {
  const log: string[] = []
  const p = new Proxy({}, {
    set(t: Record<string, unknown>, k: string, v: unknown) {
      log.push(k)
      t[k] = v
      return true
    }
  })
  p.x = 1
  return log
}`,
    solution: `function checkSetLog(): string[] {
  const log: string[] = []
  const p = new Proxy({}, {
    set(t: Record<string, unknown>, k: string, v: unknown) {
      log.push(k)
      t[k] = v
      return true
    }
  })
  p.x = 1
  return log
}`,
    tests: [
      { description: 'log contains x', assertion:"const log = []; const p = new Proxy({}, { set(t, k, v) { log.push(k); t[k] = v; return true; } }); p.x = 1; expect(log).toEqual(['x'])" },
      { description: 'log has length 1', assertion:"const log = []; const p = new Proxy({}, { set(t, k, v) { log.push(k); t[k] = v; return true; } }); p.x = 1; expect(log).toHaveLength(1)" },
      { description: 'log[0] is x', assertion:"const log = []; const p = new Proxy({}, { set(t, k, v) { log.push(k); t[k] = v; return true; } }); p.x = 1; expect(log[0]).toBe('x')" },
      { description: 'log is truthy', assertion:"const log = []; const p = new Proxy({}, { set(t, k, v) { log.push(k); t[k] = v; return true; } }); p.x = 1; expect(log).toBeTruthy()" },
      { description: 'log contains the key', assertion:"const log = []; const p = new Proxy({}, { set(t, k, v) { log.push(k); t[k] = v; return true; } }); p.x = 1; expect(log).toContain('x')" },
    ],
    hints: [
      'The `set` trap receives `(target, key, value, receiver)`. Return `true` to indicate success.',
    ],
    tags: ['Proxy', 'set trap', 'intermediate'],
    usageExample: {
      code: `const log = []
const p = new Proxy({}, {
  set: (t, k, v) => { log.push(String(k) + '=' + v); t[k] = v; return true }
})
p.x = 10
console.log(log) // → ["x=10"]`,
      explanation: {
        en: 'The set trap intercepts property assignments on a proxy, letting you validate or observe writes before they reach the target.',
        es: 'La trampa set intercepta asignaciones de propiedades en un proxy, permitiendo validar u observar escrituras antes de que lleguen al objetivo.',
      },
    },
  },
  {
    slug: 'proxy-set-double-value',
    title: 'Proxy set trap — double value on write',
    description: `## set trap — transform written values

Use the \`set\` trap to store a transformed version of the value.

**Challenge:** Verify that after \`p.n = 5\`, reading \`p.n\` returns \`10\` (value doubled).`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Proxy',
    method: 'set',
    initialCode: `function checkSetDouble(): number {
  const p = new Proxy({} as Record<string, number>, {
    set(t, k: string, v: number) { t[k] = v * 2; return true; }
  })
  p.n = 5
  return p.n
}`,
    solution: `function checkSetDouble(): number {
  const p = new Proxy({} as Record<string, number>, {
    set(t, k: string, v: number) { t[k] = v * 2; return true; }
  })
  p.n = 5
  return p.n
}`,
    tests: [
      { description: 'p.n is 10 after p.n = 5', assertion:'const p = new Proxy({}, { set(t, k, v) { t[k] = v * 2; return true; } }); p.n = 5; expect(p.n).toBe(10)' },
      { description: 'result equals 10', assertion:'const p = new Proxy({}, { set(t, k, v) { t[k] = v * 2; return true; } }); p.n = 5; expect(p.n === 10).toBe(true)' },
      { description: 'result is number', assertion:"const p = new Proxy({}, { set(t, k, v) { t[k] = v * 2; return true; } }); p.n = 5; expect(typeof p.n).toBe('number')" },
      { description: 'double of 3 is 6', assertion:'const p = new Proxy({}, { set(t, k, v) { t[k] = v * 2; return true; } }); p.n = 3; expect(p.n).toBe(6)' },
      { description: 'result is truthy', assertion:'const p = new Proxy({}, { set(t, k, v) { t[k] = v * 2; return true; } }); p.n = 5; expect(p.n).toBeTruthy()' },
    ],
    hints: [
      'Store `v * 2` in `target[key]` inside the `set` trap.',
    ],
    tags: ['Proxy', 'set trap', 'intermediate'],
    usageExample: {
      code: `const log = []
const p = new Proxy({}, {
  set: (t, k, v) => { log.push(String(k) + '=' + v); t[k] = v; return true }
})
p.x = 10
console.log(log) // → ["x=10"]`,
      explanation: {
        en: 'The set trap intercepts property assignments on a proxy, letting you validate or observe writes before they reach the target.',
        es: 'La trampa set intercepta asignaciones de propiedades en un proxy, permitiendo validar u observar escrituras antes de que lleguen al objetivo.',
      },
    },
  },
  {
    slug: 'proxy-set-passthrough',
    title: 'Proxy set trap — passthrough (no trap)',
    description: `## set — no trap means passthrough

Without a \`set\` trap the proxy forwards assignments directly to the target.

**Challenge:** Verify that after \`p.x = 'hello'\`, reading \`p.x\` returns \`'hello'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Proxy',
    method: 'set',
    initialCode: `function checkSetPassthrough(): string {
  const p = new Proxy({} as { x?: string }, {})
  p.x = 'hello'
  return p.x!
}`,
    solution: `function checkSetPassthrough(): string {
  const p = new Proxy({} as { x?: string }, {})
  p.x = 'hello'
  return p.x!
}`,
    tests: [
      { description: 'p.x is hello after assignment', assertion:"const p = new Proxy({}, {}); p.x = 'hello'; expect(p.x).toBe('hello')" },
      { description: 'result equals hello', assertion:"const p = new Proxy({}, {}); p.x = 'hello'; expect(p.x === 'hello').toBe(true)" },
      { description: 'result is string', assertion:"const p = new Proxy({}, {}); p.x = 'hello'; expect(typeof p.x).toBe('string')" },
      { description: 'result is truthy', assertion:"const p = new Proxy({}, {}); p.x = 'hello'; expect(p.x).toBeTruthy()" },
      { description: 'result contains hello', assertion:"const p = new Proxy({}, {}); p.x = 'hello'; expect(p.x).toContain('hello')" },
    ],
    hints: [
      'Without a `set` trap, writes go directly to the target object.',
    ],
    tags: ['Proxy', 'set trap', 'passthrough', 'beginner'],
    usageExample: {
      code: `const log = []
const p = new Proxy({}, {
  set: (t, k, v) => { log.push(String(k) + '=' + v); t[k] = v; return true }
})
p.x = 10
console.log(log) // → ["x=10"]`,
      explanation: {
        en: 'The set trap intercepts property assignments on a proxy, letting you validate or observe writes before they reach the target.',
        es: 'La trampa set intercepta asignaciones de propiedades en un proxy, permitiendo validar u observar escrituras antes de que lleguen al objetivo.',
      },
    },
  },
  {
    slug: 'proxy-set-trap-no-store',
    title: 'Proxy set trap — returns true but does not store',
    description: `## set trap — return true without storing

A \`set\` trap can return \`true\` (indicating success) without actually writing to the target. The property will remain \`undefined\`.

**Challenge:** Verify that after \`p.n = 5\`, \`p.n\` is still \`undefined\` because the trap never stores the value.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Proxy',
    method: 'set',
    initialCode: `function checkSetTrapNoStore(): undefined {
  const p = new Proxy({}, { set(t, k, v) { return true; } })
  p.n = 5
  return (p as any).n
}`,
    solution: `function checkSetTrapNoStore(): undefined {
  const p = new Proxy({}, { set(t, k, v) { return true; } })
  p.n = 5
  return (p as any).n
}`,
    tests: [
      { description: 'p.n is undefined', assertion:'const p = new Proxy({}, { set(t, k, v) { return true; } }); p.n = 5; expect(p.n).toBeUndefined()' },
      { description: 'trap returns true', assertion:'const p = new Proxy({}, { set(t, k, v) { return v > 0; } }); const result = Reflect.set(p, "n", 5); expect(result).toBe(true)' },
      { description: 'property not in target', assertion:"const t = {}; const p = new Proxy(t, { set(_, k, v) { return true; } }); p.n = 5; expect('n' in t).toBe(false)" },
      { description: 'Proxy is a function', assertion:"expect(typeof Proxy).toBe('function')" },
      { description: 'empty proxy is an object', assertion:"expect(typeof new Proxy({}, {})).toBe('object')" },
    ],
    hints: [
      'Returning `true` from `set` signals success but the trap controls whether the value is actually stored.',
    ],
    tags: ['Proxy', 'set trap', 'advanced'],
    usageExample: {
      code: `const log = []
const p = new Proxy({}, {
  set: (t, k, v) => { log.push(String(k) + '=' + v); t[k] = v; return true }
})
p.x = 10
console.log(log) // → ["x=10"]`,
      explanation: {
        en: 'The set trap intercepts property assignments on a proxy, letting you validate or observe writes before they reach the target.',
        es: 'La trampa set intercepta asignaciones de propiedades en un proxy, permitiendo validar u observar escrituras antes de que lleguen al objetivo.',
      },
    },
  },
  {
    slug: 'proxy-set-constructor-typeof',
    title: 'Proxy — constructor typeof',
    description: `## typeof proxy.constructor

A proxy of a plain object forwards the \`constructor\` property lookup to the target, which points to \`Object\`. \`typeof\` that is \`'function'\`.

**Challenge:** Verify that \`typeof new Proxy({}, {}).constructor === 'function'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Proxy',
    method: 'set',
    initialCode: `function checkProxyConstructorType(): string {
  return typeof new Proxy({}, {}).constructor
}`,
    solution: `function checkProxyConstructorType(): string {
  return typeof new Proxy({}, {}).constructor
}`,
    tests: [
      { description: 'constructor typeof is function', assertion:"expect(typeof new Proxy({}, {}).constructor).toBe('function')" },
      { description: 'equals function string', assertion:"expect(typeof new Proxy({}, {}).constructor === 'function').toBe(true)" },
      { description: 'constructor is truthy', assertion:'expect(new Proxy({}, {}).constructor).toBeTruthy()' },
      { description: 'constructor is not null', assertion:'expect(new Proxy({}, {}).constructor !== null).toBe(true)' },
      { description: 'constructor not undefined', assertion:'expect(new Proxy({}, {}).constructor !== undefined).toBe(true)' },
    ],
    hints: [
      'Without a `get` trap, `.constructor` resolves on the target\'s prototype chain.',
    ],
    tags: ['Proxy', 'constructor', 'typeof', 'beginner'],
    usageExample: {
      code: `const log = []
const p = new Proxy({}, {
  set: (t, k, v) => { log.push(String(k) + '=' + v); t[k] = v; return true }
})
p.x = 10
console.log(log) // → ["x=10"]`,
      explanation: {
        en: 'The set trap intercepts property assignments on a proxy, letting you validate or observe writes before they reach the target.',
        es: 'La trampa set intercepta asignaciones de propiedades en un proxy, permitiendo validar u observar escrituras antes de que lleguen al objetivo.',
      },
    },
  },
]
