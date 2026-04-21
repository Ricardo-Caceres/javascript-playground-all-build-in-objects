import type { Exercise } from '@/shared/types/exercises'

export const setIsDisjointFromExercises: Exercise[] = [
  {
    slug: 'set-isdisjointfrom-1',
    title: 'Set isDisjointFrom() — disjoint is true',
    description: `## Set.prototype.isDisjointFrom() (ES2025)\n\n\`setA.isDisjointFrom(setB)\` returns true if A and B share no common elements.\n\n**Challenge:** Verify that disjoint Sets return true.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'isDisjointFrom',
    initialCode: `// Use isDisjointFrom() - ES2025\nconst a = new Set([1,2,3])\nconst b = new Set([4,5,6])\n`,
    solution: `(new Set([1,2,3]) as any).isDisjointFrom(new Set([4,5,6]))`,
    tests: [
      { description: 'disjoint returns true', assertion:'expect(result).toBe(true)' },
      { description: 'result is boolean', assertion:"expect(typeof (new Set([1,2])).isDisjointFrom(new Set([3,4]))).toBe('boolean')" },
      { description: 'result is truthy', assertion:'expect((new Set([1,2])).isDisjointFrom(new Set([3,4]))).toBeTruthy()' },
      { description: 'isDisjointFrom is a function', assertion:"expect(typeof (new Set()).isDisjointFrom).toBe('function')" },
      { description: 'disjoint single elements', assertion:'expect((new Set([1])).isDisjointFrom(new Set([2]))).toBe(true)' },
    ],
    hints: ['isDisjointFrom returns true when the Sets share no elements'],
    tags: ['Set', 'isDisjointFrom', 'ES2025'],
    usageExample: {
      code: `const a = new Set([1, 2])
const b = new Set([3, 4])
a.isDisjointFrom(b)   // → true
a.isDisjointFrom(new Set([2, 5])) // → false`,
      explanation: {
        en: 'Use Set.isDisjointFrom() to check whether two sets share no elements.',
        es: 'Usa Set.isDisjointFrom() para verificar si dos conjuntos no comparten ningún elemento.',
      },
    },
  },
  {
    slug: 'set-isdisjointfrom-2',
    title: 'Set isDisjointFrom() — non-disjoint is false',
    description: `## Set.prototype.isDisjointFrom() (ES2025)\n\nIf A and B share any element, isDisjointFrom returns false.\n\n**Challenge:** Verify that non-disjoint Sets return false.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'isDisjointFrom',
    initialCode: `// Non-disjoint check\nconst a = new Set([1,2,3])\nconst b = new Set([3,4,5])\n`,
    solution: `(new Set([1,2,3]) as any).isDisjointFrom(new Set([3,4,5]))`,
    tests: [
      { description: 'non-disjoint returns false', assertion:'expect(result).toBe(false)' },
      { description: 'result is boolean', assertion:"expect(typeof result).toBe('boolean')" },
      { description: 'result is falsy', assertion:'expect(result).toBeFalsy()' },
      { description: 'single common element → false', assertion:'expect((new Set([1])).isDisjointFrom(new Set([1,2]))).toBe(false)' },
      { description: 'overlapping sets → false', assertion:'expect((new Set([1,2,3,4])).isDisjointFrom(new Set([4,5,6]))).toBe(false)' },
    ],
    hints: ['isDisjointFrom returns false if any element is shared between A and B'],
    tags: ['Set', 'isDisjointFrom', 'nonDisjoint'],
    usageExample: {
      code: `const a = new Set([1, 2])
const b = new Set([3, 4])
a.isDisjointFrom(b)   // → true
a.isDisjointFrom(new Set([2, 5])) // → false`,
      explanation: {
        en: 'Use Set.isDisjointFrom() to check whether two sets share no elements.',
        es: 'Usa Set.isDisjointFrom() para verificar si dos conjuntos no comparten ningún elemento.',
      },
    },
  },
  {
    slug: 'set-isdisjointfrom-3',
    title: 'Set isDisjointFrom() — empty set is disjoint from everything',
    description: `## Set.prototype.isDisjointFrom() (ES2025)\n\nThe empty Set is disjoint from every Set.\n\n**Challenge:** Verify that the empty Set is disjoint from any Set.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'isDisjointFrom',
    initialCode: `// Empty set is disjoint from everything\n`,
    solution: `(new Set() as any).isDisjointFrom(new Set([1,2,3]))`,
    tests: [
      { description: 'empty set is disjoint from any set', assertion:'expect(result).toBe(true)' },
      { description: 'empty set is disjoint from empty set', assertion:'expect((new Set()).isDisjointFrom(new Set())).toBe(true)' },
      { description: 'any set is disjoint from empty set', assertion:'expect((new Set([1,2,3])).isDisjointFrom(new Set())).toBe(true)' },
      { description: 'result is boolean', assertion:"expect(typeof (new Set()).isDisjointFrom(new Set([1]))).toBe('boolean')" },
      { description: 'result is truthy', assertion:'expect((new Set()).isDisjointFrom(new Set([1]))).toBeTruthy()' },
    ],
    hints: ['The empty Set has no elements to share, so it is always disjoint'],
    tags: ['Set', 'isDisjointFrom', 'empty'],
    usageExample: {
      code: `const a = new Set([1, 2])
const b = new Set([3, 4])
a.isDisjointFrom(b)   // → true
a.isDisjointFrom(new Set([2, 5])) // → false`,
      explanation: {
        en: 'Use Set.isDisjointFrom() to check whether two sets share no elements.',
        es: 'Usa Set.isDisjointFrom() para verificar si dos conjuntos no comparten ningún elemento.',
      },
    },
  },
  {
    slug: 'set-isdisjointfrom-4',
    title: 'Set isDisjointFrom() — overlapping sets',
    description: `## Set.prototype.isDisjointFrom() (ES2025)\n\nSets with partial overlap are not disjoint.\n\n**Challenge:** Verify that partially overlapping Sets are not disjoint.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'isDisjointFrom',
    initialCode: `// Overlapping sets\nconst a = new Set([1,2,3,4])\nconst b = new Set([3,4,5,6])\n`,
    solution: `(new Set([1,2,3,4]) as any).isDisjointFrom(new Set([3,4,5,6]))`,
    tests: [
      { description: 'overlapping sets: false', assertion:'expect(result).toBe(false)' },
      { description: 'result is falsy', assertion:'expect((new Set([1,2,3])).isDisjointFrom(new Set([2,4,6]))).toBeFalsy()' },
      { description: 'subset overlap: false', assertion:'expect((new Set([1,2,3])).isDisjointFrom(new Set([1,2]))).toBe(false)' },
      { description: 'superset overlap: false', assertion:'expect((new Set([1,2])).isDisjointFrom(new Set([1,2,3]))).toBe(false)' },
      { description: 'result is boolean', assertion:"expect(typeof (new Set([1,2,3])).isDisjointFrom(new Set([3,4]))).toBe('boolean')" },
    ],
    hints: ['Any shared element makes the Sets non-disjoint'],
    tags: ['Set', 'isDisjointFrom', 'overlap'],
    usageExample: {
      code: `const a = new Set([1, 2])
const b = new Set([3, 4])
a.isDisjointFrom(b)   // → true
a.isDisjointFrom(new Set([2, 5])) // → false`,
      explanation: {
        en: 'Use Set.isDisjointFrom() to check whether two sets share no elements.',
        es: 'Usa Set.isDisjointFrom() para verificar si dos conjuntos no comparten ningún elemento.',
      },
    },
  },
  {
    slug: 'set-isdisjointfrom-5',
    title: 'Set isDisjointFrom() — identical sets are not disjoint',
    description: `## Set.prototype.isDisjointFrom() (ES2025)\n\nIdentical non-empty Sets are not disjoint — they share all elements.\n\n**Challenge:** Verify that identical Sets are not disjoint.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'isDisjointFrom',
    initialCode: `// Identical sets\nconst a = new Set([1,2,3])\nconst b = new Set([1,2,3])\n`,
    solution: `(new Set([1,2,3]) as any).isDisjointFrom(new Set([1,2,3]))`,
    tests: [
      { description: 'identical sets are not disjoint', assertion:'expect(result).toBe(false)' },
      { description: 'result is false', assertion:'expect((new Set([1,2])).isDisjointFrom(new Set([1,2]))).toBe(false)' },
      { description: 'A is not disjoint from A', assertion:'const a = new Set([1,2,3]); expect((a).isDisjointFrom(a)).toBe(false)' },
      { description: 'result is falsy', assertion:'expect((new Set([1,2])).isDisjointFrom(new Set([1,2]))).toBeFalsy()' },
      { description: 'single identical element: not disjoint', assertion:'expect((new Set([5])).isDisjointFrom(new Set([5]))).toBe(false)' },
    ],
    hints: ['Non-empty identical Sets share all their elements, so they are not disjoint'],
    tags: ['Set', 'isDisjointFrom', 'identical'],
    usageExample: {
      code: `const a = new Set([1, 2])
const b = new Set([3, 4])
a.isDisjointFrom(b)   // → true
a.isDisjointFrom(new Set([2, 5])) // → false`,
      explanation: {
        en: 'Use Set.isDisjointFrom() to check whether two sets share no elements.',
        es: 'Usa Set.isDisjointFrom() para verificar si dos conjuntos no comparten ningún elemento.',
      },
    },
  },
]
