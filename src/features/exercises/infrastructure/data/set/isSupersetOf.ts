import type { Exercise } from '@/shared/types/exercises'

export const setIsSupersetOfExercises: Exercise[] = [
  {
    slug: 'set-issupersetof-1',
    title: 'Set isSupersetOf() — superset is true',
    description: `## Set.prototype.isSupersetOf() (ES2025)\n\n\`setA.isSupersetOf(setB)\` returns true if all elements of B are in A.\n\n**Challenge:** Verify that a superset returns true.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'isSupersetOf',
    initialCode: `// Use isSupersetOf() - ES2025\nconst a = new Set([1,2,3,4])\nconst b = new Set([2,3])\n`,
    solution: `(new Set([1,2,3,4]) as any).isSupersetOf(new Set([2,3]))`,
    tests: [
      { description: 'superset returns true', assertion:'expect(result).toBe(true)' },
      { description: 'result is boolean', assertion:"expect(typeof (new Set([1,2,3])).isSupersetOf(new Set([1,2]))).toBe('boolean')" },
      { description: 'result is truthy', assertion:'expect((new Set([1,2,3])).isSupersetOf(new Set([1,2]))).toBeTruthy()' },
      { description: 'isSupersetOf is a function', assertion:"expect(typeof (new Set()).isSupersetOf).toBe('function')" },
      { description: 'superset of single element', assertion:'expect((new Set([1,2,3])).isSupersetOf(new Set([1]))).toBe(true)' },
    ],
    hints: ['isSupersetOf returns true if every element of B exists in A'],
    tags: ['Set', 'isSupersetOf', 'ES2025'],
    usageExample: {
      code: `const a = new Set([1, 2, 3])
const b = new Set([1, 2])
a.isSupersetOf(b)   // → true
b.isSupersetOf(a)   // → false`,
      explanation: {
        en: 'Use Set.isSupersetOf() to check whether a set contains all elements of another set.',
        es: 'Usa Set.isSupersetOf() para verificar si un conjunto contiene todos los elementos de otro.',
      },
    },
  },
  {
    slug: 'set-issupersetof-2',
    title: 'Set isSupersetOf() — non-superset is false',
    description: `## Set.prototype.isSupersetOf() (ES2025)\n\nIf B has an element not in A, isSupersetOf returns false.\n\n**Challenge:** Verify that a non-superset returns false.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'isSupersetOf',
    initialCode: `// Non-superset check\nconst a = new Set([1,2])\nconst b = new Set([2,3])\n`,
    solution: `(new Set([1,2]) as any).isSupersetOf(new Set([2,3]))`,
    tests: [
      { description: 'non-superset returns false', assertion:'expect(result).toBe(false)' },
      { description: 'result is boolean', assertion:"expect(typeof (new Set([1,2])).isSupersetOf(new Set([3,4]))).toBe('boolean')" },
      { description: 'result is falsy', assertion:'expect(result).toBeFalsy()' },
      { description: 'smaller set is not superset of larger', assertion:'expect((new Set([1,2])).isSupersetOf(new Set([1,2,3]))).toBe(false)' },
      { description: 'missing element → false', assertion:'expect((new Set([1,2,3])).isSupersetOf(new Set([1,4]))).toBe(false)' },
    ],
    hints: ['isSupersetOf returns false if any element of B is missing from A'],
    tags: ['Set', 'isSupersetOf', 'nonSuperset'],
    usageExample: {
      code: `const a = new Set([1, 2, 3])
const b = new Set([1, 2])
a.isSupersetOf(b)   // → true
b.isSupersetOf(a)   // → false`,
      explanation: {
        en: 'Use Set.isSupersetOf() to check whether a set contains all elements of another set.',
        es: 'Usa Set.isSupersetOf() para verificar si un conjunto contiene todos los elementos de otro.',
      },
    },
  },
  {
    slug: 'set-issupersetof-3',
    title: 'Set isSupersetOf() — every set is superset of empty',
    description: `## Set.prototype.isSupersetOf() (ES2025)\n\nEvery Set is a superset of the empty Set.\n\n**Challenge:** Verify that any Set is a superset of the empty Set.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'isSupersetOf',
    initialCode: `// Any set is superset of empty\n`,
    solution: `(new Set([1,2,3]) as any).isSupersetOf(new Set())`,
    tests: [
      { description: 'any set is superset of empty', assertion:'expect(result).toBe(true)' },
      { description: 'empty set is superset of empty', assertion:'expect((new Set()).isSupersetOf(new Set())).toBe(true)' },
      { description: 'single-element is superset of empty', assertion:'expect((new Set([42])).isSupersetOf(new Set())).toBe(true)' },
      { description: 'result is boolean', assertion:"expect(typeof (new Set([1])).isSupersetOf(new Set())).toBe('boolean')" },
      { description: 'result is truthy', assertion:'expect((new Set([1])).isSupersetOf(new Set())).toBeTruthy()' },
    ],
    hints: ['Every set is a superset of ∅ because there are no elements to fail'],
    tags: ['Set', 'isSupersetOf', 'empty'],
    usageExample: {
      code: `const a = new Set([1, 2, 3])
const b = new Set([1, 2])
a.isSupersetOf(b)   // → true
b.isSupersetOf(a)   // → false`,
      explanation: {
        en: 'Use Set.isSupersetOf() to check whether a set contains all elements of another set.',
        es: 'Usa Set.isSupersetOf() para verificar si un conjunto contiene todos los elementos de otro.',
      },
    },
  },
  {
    slug: 'set-issupersetof-4',
    title: 'Set isSupersetOf() — equal sets are supersets',
    description: `## Set.prototype.isSupersetOf() (ES2025)\n\nEqual Sets are supersets of each other.\n\n**Challenge:** Verify that equal Sets are supersets of each other.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'isSupersetOf',
    initialCode: `// Equal sets\nconst a = new Set([1,2,3])\nconst b = new Set([1,2,3])\n`,
    solution: `(new Set([1,2,3]) as any).isSupersetOf(new Set([1,2,3]))`,
    tests: [
      { description: 'equal sets are supersets of each other', assertion:'expect(result).toBe(true)' },
      { description: 'single element: equal', assertion:'expect((new Set([5])).isSupersetOf(new Set([5]))).toBe(true)' },
      { description: 'A is superset of A', assertion:'const a = new Set([1,2,3]); expect((a).isSupersetOf(a)).toBe(true)' },
      { description: 'result is true', assertion:'expect((new Set([1,2])).isSupersetOf(new Set([1,2]))).toBe(true)' },
      { description: 'result is truthy', assertion:'expect((new Set([1,2])).isSupersetOf(new Set([1,2]))).toBeTruthy()' },
    ],
    hints: ['A set is always a superset of itself or any equal set'],
    tags: ['Set', 'isSupersetOf', 'equal'],
    usageExample: {
      code: `const a = new Set([1, 2, 3])
const b = new Set([1, 2])
a.isSupersetOf(b)   // → true
b.isSupersetOf(a)   // → false`,
      explanation: {
        en: 'Use Set.isSupersetOf() to check whether a set contains all elements of another set.',
        es: 'Usa Set.isSupersetOf() para verificar si un conjunto contiene todos los elementos de otro.',
      },
    },
  },
  {
    slug: 'set-issupersetof-5',
    title: 'Set isSupersetOf() — single element check',
    description: `## Set.prototype.isSupersetOf() (ES2025)\n\nA Set is a superset of {x} if and only if it contains x.\n\n**Challenge:** Verify single-element superset behavior.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'isSupersetOf',
    initialCode: `// Single element superset check\n`,
    solution: `(new Set([1,2,3]) as any).isSupersetOf(new Set([2]))`,
    tests: [
      { description: 'contains element: superset is true', assertion:'expect(result).toBe(true)' },
      { description: 'missing element: superset is false', assertion:'expect((new Set([1,2,3])).isSupersetOf(new Set([5]))).toBe(false)' },
      { description: 'single to single: contained', assertion:'expect((new Set([1])).isSupersetOf(new Set([1]))).toBe(true)' },
      { description: 'single to single: not contained', assertion:'expect((new Set([1])).isSupersetOf(new Set([2]))).toBe(false)' },
      { description: 'result is boolean', assertion:"expect(typeof (new Set([1,2])).isSupersetOf(new Set([1]))).toBe('boolean')" },
    ],
    hints: ['isSupersetOf({x}) is equivalent to has(x)'],
    tags: ['Set', 'isSupersetOf', 'single'],
    usageExample: {
      code: `const a = new Set([1, 2, 3])
const b = new Set([1, 2])
a.isSupersetOf(b)   // → true
b.isSupersetOf(a)   // → false`,
      explanation: {
        en: 'Use Set.isSupersetOf() to check whether a set contains all elements of another set.',
        es: 'Usa Set.isSupersetOf() para verificar si un conjunto contiene todos los elementos de otro.',
      },
    },
  },
]
