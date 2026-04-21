import type { Exercise } from '@/shared/types/exercises'

export const weakSetHasExercises: Exercise[] = [
  {
    slug: 'weakset-has-1',
    title: 'WeakSet.prototype.has() — added object',
    description: `## WeakSet has()\n\n\`ws.has(obj)\` returns \`true\` for an added object.\n\n**Challenge:** Verify has() returns true.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'WeakSet',
    method: 'has',
    initialCode: `const ws = new WeakSet()\nconst obj = {}\nws.add(obj)\nws.has(obj)\n`,
    solution: `const ws = new WeakSet(); const obj = {}; ws.add(obj); ws.has(obj)`,
    tests: [
      { description: 'has true for added object', assertion: 'const ws1 = new WeakSet(); const o1={}; ws1.add(o1); expect(ws1.has(o1)).toBe(true)' },
      { description: 'result is truthy', assertion: 'const ws2 = new WeakSet(); const o2={}; ws2.add(o2); expect(ws2.has(o2)).toBeTruthy()' },
      { description: 'has true for function object', assertion: 'const ws3 = new WeakSet(); const fn = () => {}; ws3.add(fn); expect(ws3.has(fn)).toBe(true)' },
      { description: 'has true for array object', assertion: 'const ws4 = new WeakSet(); const arr = []; ws4.add(arr); expect(ws4.has(arr)).toBe(true)' },
      { description: 'has is a boolean', assertion: 'const ws5 = new WeakSet(); const o5={}; ws5.add(o5); expect(typeof ws5.has(o5)).toBe("boolean")' },
    ],
    hints: ['has() returns a boolean indicating presence.'],
    tags: ['weakset', 'has', 'instance-method'],
    usageExample: {
      code: `const ws = new WeakSet()
const o = {}
ws.add(o)
ws.has(o)  // → true`,
      explanation: {
        en: "has() returns true if the object is in the WeakSet.",
        es: "has() devuelve true si el objeto está en el WeakSet.",
      },
    },
  },
  {
    slug: 'weakset-has-2',
    title: 'WeakSet.prototype.has() — non-added object',
    description: `## WeakSet has() Missing\n\n\`ws.has(obj)\` returns \`false\` for an object that was never added.\n\n**Challenge:** Verify has() returns false.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'WeakSet',
    method: 'has',
    initialCode: `const ws = new WeakSet()\nconst obj = {}\nws.has(obj)\n`,
    solution: `const ws = new WeakSet(); const obj = {}; ws.has(obj)`,
    tests: [
      { description: 'has false for absent object', assertion: 'const ws1 = new WeakSet(); const o1={}; expect(ws1.has(o1)).toBe(false)' },
      { description: 'result is falsy', assertion: 'const ws2 = new WeakSet(); const o2={}; expect(ws2.has(o2)).toBeFalsy()' },
      { description: 'empty set has no objects', assertion: 'const ws3 = new WeakSet(); expect(ws3.has({})).toBe(false)' },
      { description: 'similar object is different reference', assertion: 'const ws4 = new WeakSet(); const o4={x:1}; ws4.add(o4); expect(ws4.has({x:1})).toBe(false)' },
      { description: 'different reference is absent', assertion: 'const ws5 = new WeakSet(); const o5={},o6={}; ws5.add(o5); expect(ws5.has(o6)).toBe(false)' },
    ],
    hints: ['Object identity (reference), not content, is used for lookup.'],
    tags: ['weakset', 'has', 'missing'],
    usageExample: {
      code: `const ws = new WeakSet()
const o = {}
ws.has(o)  // → false`,
      explanation: {
        en: "has() returns false for objects not added to the WeakSet.",
        es: "has() devuelve false para objetos no agregados al WeakSet.",
      },
    },
  },
  {
    slug: 'weakset-has-3',
    title: 'WeakSet.prototype.has() — after delete',
    description: `## WeakSet has() After Delete\n\nAfter \`delete(obj)\`, \`has(obj)\` returns \`false\`.\n\n**Challenge:** Verify has() after deletion.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'WeakSet',
    method: 'has',
    initialCode: `const ws = new WeakSet()\nconst obj = {}\nws.add(obj)\nws.delete(obj)\nws.has(obj)\n`,
    solution: `const ws = new WeakSet(); const obj = {}; ws.add(obj); ws.delete(obj); ws.has(obj)`,
    tests: [
      { description: 'has false after delete', assertion: 'const ws1 = new WeakSet(); const o1={}; ws1.add(o1); ws1.delete(o1); expect(ws1.has(o1)).toBe(false)' },
      { description: 'has true before delete', assertion: 'const ws2 = new WeakSet(); const o2={}; ws2.add(o2); expect(ws2.has(o2)).toBe(true)' },
      { description: 'result is falsy after delete', assertion: 'const ws3 = new WeakSet(); const o3={}; ws3.add(o3); ws3.delete(o3); expect(ws3.has(o3)).toBeFalsy()' },
      { description: 'other object unaffected', assertion: 'const ws4 = new WeakSet(); const o4={},o5={}; ws4.add(o4); ws4.add(o5); ws4.delete(o4); expect(ws4.has(o5)).toBe(true)' },
      { description: 'can re-add after delete', assertion: 'const ws5 = new WeakSet(); const o6={}; ws5.add(o6); ws5.delete(o6); ws5.add(o6); expect(ws5.has(o6)).toBe(true)' },
    ],
    hints: ['delete() removes the object; has() reflects this.'],
    tags: ['weakset', 'has', 'delete'],
    usageExample: {
      code: `const ws = new WeakSet()
const o = {}
ws.add(o)
ws.delete(o)
ws.has(o)  // → false`,
      explanation: {
        en: "has() returns false after the object has been deleted.",
        es: "has() devuelve false después de que el objeto haya sido eliminado.",
      },
    },
  },
  {
    slug: 'weakset-has-4',
    title: 'WeakSet.prototype.has() — different references',
    description: `## WeakSet Reference Identity\n\nTwo variables pointing to the same object share the same key.\n\n**Challenge:** Verify alias references behave correctly.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'WeakSet',
    method: 'has',
    initialCode: `const ws = new WeakSet()\nconst a = {}\nconst b = a\nws.add(a)\n`,
    solution: `const ws = new WeakSet(); const a = {}; const b = a; ws.add(a); ws.has(b)`,
    tests: [
      { description: 'alias reference has true', assertion: 'const ws1 = new WeakSet(); const a1={}; const b1=a1; ws1.add(a1); expect(ws1.has(b1)).toBe(true)' },
      { description: 'different object has false', assertion: 'const ws2 = new WeakSet(); const a2={},b2={}; ws2.add(a2); expect(ws2.has(b2)).toBe(false)' },
      { description: 'add via alias, has via original', assertion: 'const ws3 = new WeakSet(); const a3={}; const b3=a3; ws3.add(b3); expect(ws3.has(a3)).toBe(true)' },
      { description: 'delete via alias, has via original is false', assertion: 'const ws4 = new WeakSet(); const a4={}; const b4=a4; ws4.add(a4); ws4.delete(b4); expect(ws4.has(a4)).toBe(false)' },
      { description: 'new object with same content is different', assertion: 'const ws5 = new WeakSet(); const a5={x:1}; ws5.add(a5); expect(ws5.has({x:1})).toBe(false)' },
    ],
    hints: ['Two variables pointing to the same object share the same identity.'],
    tags: ['weakset', 'has', 'reference'],
    usageExample: {
      code: `const ws = new WeakSet()
const a = {x:1}, b = {x:1}
ws.add(a)
ws.has(b)  // → false`,
      explanation: {
        en: "Different object references are distinct entries even if structurally equal.",
        es: "Las diferentes referencias de objeto son entradas distintas aunque sean estructuralmente iguales.",
      },
    },
  },
  {
    slug: 'weakset-has-5',
    title: 'WeakSet.prototype.has() — constructor-initialized',
    description: `## WeakSet has() After Constructor Init\n\nObjects passed to the constructor are present immediately.\n\n**Challenge:** Verify has() for constructor-initialized objects.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'WeakSet',
    method: 'has',
    initialCode: `const o = {}\nconst ws = new WeakSet([o])\n`,
    solution: `const o = {}; const ws = new WeakSet([o]); ws.has(o)`,
    tests: [
      { description: 'has true for constructor-added object', assertion: 'const o1={}; const ws1 = new WeakSet([o1]); expect(ws1.has(o1)).toBe(true)' },
      { description: 'non-initial object absent', assertion: 'const o2={}, o3={}; const ws2 = new WeakSet([o2]); expect(ws2.has(o3)).toBe(false)' },
      { description: 'multiple initial objects present', assertion: 'const o4={},o5={}; const ws3 = new WeakSet([o4,o5]); expect(ws3.has(o4) && ws3.has(o5)).toBe(true)' },
      { description: 'result is boolean', assertion: 'const o6={}; const ws4 = new WeakSet([o6]); expect(typeof ws4.has(o6)).toBe("boolean")' },
      { description: 'result is truthy', assertion: 'const o7={}; const ws5 = new WeakSet([o7]); expect(ws5.has(o7)).toBeTruthy()' },
    ],
    hints: ['Objects passed to the WeakSet constructor are immediately present.'],
    tags: ['weakset', 'has', 'constructor'],
    usageExample: {
      code: `const ws = new WeakSet()
const o = {}
ws.add(o)
ws.has(o)  // → true`,
      explanation: {
        en: "Use has() to guard operations that should only run once per object.",
        es: "Usa has() para proteger operaciones que solo deben ejecutarse una vez por objeto.",
      },
    },
  },
]
