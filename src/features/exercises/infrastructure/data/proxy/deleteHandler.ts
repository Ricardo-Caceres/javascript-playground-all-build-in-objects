import type { Exercise } from '@/shared/types/exercises'

export const proxyDeleteExercises: Exercise[] = [
  {
    slug: 'proxy-delete-log-key',
    title: 'Proxy deleteProperty trap — log deleted key',
    description: `## Proxy deleteProperty trap

The \`deleteProperty\` trap intercepts the \`delete\` operator. Use it to observe or prevent deletions.

**Challenge:** Verify that \`delete p.x\` pushes \`'x'\` into a \`deleted\` array.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Proxy',
    method: 'deleteProperty',
    initialCode: `function checkDeleteLog(): string[] {
  const deleted: string[] = []
  const p = new Proxy({ x: 1 } as Record<string, unknown>, {
    deleteProperty(t, k: string) { deleted.push(k); return true; }
  })
  delete (p as any).x
  return deleted
}`,
    solution: `function checkDeleteLog(): string[] {
  const deleted: string[] = []
  const p = new Proxy({ x: 1 } as Record<string, unknown>, {
    deleteProperty(t, k: string) { deleted.push(k); return true; }
  })
  delete (p as any).x
  return deleted
}`,
    tests: [
      { description: 'deleted contains x', assertion:"const deleted = []; const p = new Proxy({x:1}, { deleteProperty(t, k) { deleted.push(k); return true; } }); delete p.x; expect(deleted).toEqual(['x'])" },
      { description: 'deleted has length 1', assertion:"const deleted = []; const p = new Proxy({x:1}, { deleteProperty(t, k) { deleted.push(k); return true; } }); delete p.x; expect(deleted).toHaveLength(1)" },
      { description: 'deleted[0] is x', assertion:"const deleted = []; const p = new Proxy({x:1}, { deleteProperty(t, k) { deleted.push(k); return true; } }); delete p.x; expect(deleted[0]).toBe('x')" },
      { description: 'deleted is truthy', assertion:"const deleted = []; const p = new Proxy({x:1}, { deleteProperty(t, k) { deleted.push(k); return true; } }); delete p.x; expect(deleted).toBeTruthy()" },
      { description: 'deleted contains the key', assertion:"const deleted = []; const p = new Proxy({x:1}, { deleteProperty(t, k) { deleted.push(k); return true; } }); delete p.x; expect(deleted).toContain('x')" },
    ],
    hints: [
      'The `deleteProperty(target, key)` trap is called when `delete proxy.key` is executed.',
    ],
    tags: ['Proxy', 'deleteProperty trap', 'intermediate'],
  },
  {
    slug: 'proxy-delete-passthrough',
    title: 'Proxy deleteProperty trap — passthrough',
    description: `## deleteProperty — no trap

Without a \`deleteProperty\` trap, \`delete\` forwards to the target and actually removes the property.

**Challenge:** Verify that after \`delete p.x\`, \`p.x\` is \`undefined\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Proxy',
    method: 'deleteProperty',
    initialCode: `function checkDeletePassthrough(): undefined {
  const p = new Proxy({ x: 1 } as { x?: number }, {})
  delete p.x
  return p.x
}`,
    solution: `function checkDeletePassthrough(): undefined {
  const p = new Proxy({ x: 1 } as { x?: number }, {})
  delete p.x
  return p.x
}`,
    tests: [
      { description: 'p.x is undefined after delete', assertion:'const p = new Proxy({x: 1}, {}); delete p.x; expect(p.x).toBeUndefined()' },
      { description: 'property no longer exists', assertion:"const p = new Proxy({x: 1}, {}); delete p.x; expect('x' in p).toBe(false)" },
      { description: 'delete returns true', assertion:'const p = new Proxy({x: 1}, {}); expect(delete p.x).toBe(true)' },
      { description: 'proxy still exists', assertion:'const p = new Proxy({x: 1}, {}); delete p.x; expect(p).toBeTruthy()' },
      { description: 'proxy is object', assertion:"const p = new Proxy({x: 1}, {}); delete p.x; expect(typeof p).toBe('object')" },
    ],
    hints: [
      'Without a trap, `delete proxy.key` delegates to the target object.',
    ],
    tags: ['Proxy', 'deleteProperty trap', 'passthrough', 'beginner'],
  },
  {
    slug: 'proxy-delete-return-false',
    title: 'Proxy deleteProperty trap — return false',
    description: `## deleteProperty trap returning false

When the \`deleteProperty\` trap returns \`false\`, the \`delete\` expression evaluates to \`false\` and the property is not removed.

**Challenge:** Verify that \`delete p.x\` returns \`false\` when the trap returns \`false\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Proxy',
    method: 'deleteProperty',
    initialCode: `function checkDeleteReturnFalse(): boolean {
  const p = new Proxy({}, { deleteProperty: () => false })
  return delete (p as any).x
}`,
    solution: `function checkDeleteReturnFalse(): boolean {
  const p = new Proxy({}, { deleteProperty: () => false })
  return delete (p as any).x
}`,
    tests: [
      { description: 'delete p.x returns false', assertion:'const p = new Proxy({}, { deleteProperty: () => false }); expect(delete (p).x).toBe(false)' },
      { description: 'result is boolean', assertion:"const p = new Proxy({}, { deleteProperty: () => false }); expect(typeof delete (p).x).toBe('boolean')" },
      { description: 'result is falsy', assertion:'const p = new Proxy({}, { deleteProperty: () => false }); expect(delete (p).x).toBeFalsy()' },
      { description: 'equals false', assertion:'const p = new Proxy({}, { deleteProperty: () => false }); expect((delete (p).x) === false).toBe(true)' },
      { description: 'trap returning true gives true', assertion:'const p = new Proxy({}, { deleteProperty: () => true }); expect(delete (p).x).toBe(true)' },
    ],
    hints: [
      'Returning `false` from `deleteProperty` prevents deletion and makes `delete` evaluate to `false`.',
    ],
    tags: ['Proxy', 'deleteProperty trap', 'intermediate'],
  },
  {
    slug: 'proxy-delete-removes-from-target',
    title: 'Proxy deleteProperty trap — key removed from target',
    description: `## deleteProperty — passthrough removes key

After a passthrough \`delete\`, the property no longer exists on the proxy (or its target).

**Challenge:** Verify that after \`delete p.x\`, \`'x' in p\` is \`false\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Proxy',
    method: 'deleteProperty',
    initialCode: `function checkKeyRemovedAfterDelete(): boolean {
  const p = new Proxy({ x: 1, y: 2 } as Record<string, number>, {})
  delete (p as any).x
  return 'x' in p
}`,
    solution: `function checkKeyRemovedAfterDelete(): boolean {
  const p = new Proxy({ x: 1, y: 2 } as Record<string, number>, {})
  delete (p as any).x
  return 'x' in p
}`,
    tests: [
      { description: 'x not in p after delete', assertion:"const p = new Proxy({x:1, y:2}, {}); delete p.x; expect('x' in p).toBe(false)" },
      { description: 'y still in p', assertion:"const p = new Proxy({x:1, y:2}, {}); delete p.x; expect('y' in p).toBe(true)" },
      { description: 'result is boolean', assertion:"const p = new Proxy({x:1, y:2}, {}); delete p.x; expect(typeof ('x' in p)).toBe('boolean')" },
      { description: 'result is falsy', assertion:"const p = new Proxy({x:1, y:2}, {}); delete p.x; expect('x' in p).toBeFalsy()" },
      { description: 'p.x is undefined', assertion:'const p = new Proxy({x:1, y:2}, {}); delete p.x; expect(p.x).toBeUndefined()' },
    ],
    hints: [
      'A passthrough `delete` removes the key from the target, so `in` returns `false`.',
    ],
    tags: ['Proxy', 'deleteProperty trap', 'beginner'],
  },
  {
    slug: 'proxy-typeof-function',
    title: 'Proxy — typeof Proxy',
    description: `## typeof Proxy

\`Proxy\` is a built-in constructor, so \`typeof Proxy\` returns \`'function'\`.

**Challenge:** Verify that \`typeof Proxy\` returns \`'function'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Proxy',
    initialCode: `function checkProxyTypeof(): string {
  return typeof Proxy
}`,
    solution: `function checkProxyTypeof(): string {
  return typeof Proxy
}`,
    tests: [
      { description: 'typeof Proxy is function', assertion:"expect(typeof Proxy).toBe('function')" },
      { description: 'equals function string', assertion:"expect(typeof Proxy === 'function').toBe(true)" },
      { description: 'Proxy is truthy', assertion:'expect(Proxy).toBeTruthy()' },
      { description: 'Proxy is not null', assertion:'expect(Proxy !== null).toBe(true)' },
      { description: 'Proxy is not undefined', assertion:'expect(Proxy !== undefined).toBe(true)' },
    ],
    hints: [
      '`Proxy` is a built-in constructor function.',
    ],
    tags: ['Proxy', 'typeof', 'beginner'],
  },
]
