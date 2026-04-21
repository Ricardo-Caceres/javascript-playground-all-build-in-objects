import type { Exercise } from '@/shared/types/exercises'

export const setUnionExercises: Exercise[] = [
  {
    slug: 'set-union-1',
    title: 'Set union() — combined size',
    description: `## Set.prototype.union() (ES2025)\n\n\`setA.union(setB)\` returns a new Set with all elements from both Sets.\n\n**Challenge:** Verify the size of the union.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'union',
    initialCode: `// Use union() - ES2025\nconst a = new Set([1,2])\nconst b = new Set([2,3])\n`,
    solution: `(new Set([1,2]) as any).union(new Set([2,3])).size`,
    tests: [
      { description: 'union size is 3', assertion:'expect(result).toBe(3)' },
      { description: 'union contains 1', assertion:'expect((new Set([1,2])).union(new Set([2,3])).has(1)).toBe(true)' },
      { description: 'union contains 2', assertion:'expect((new Set([1,2])).union(new Set([2,3])).has(2)).toBe(true)' },
      { description: 'union contains 3', assertion:'expect((new Set([1,2])).union(new Set([2,3])).has(3)).toBe(true)' },
      { description: 'result is a Set', assertion:'expect((new Set([1,2])).union(new Set([2,3])) instanceof Set).toBe(true)' },
    ],
    hints: ['union() returns a new Set containing all elements from both Sets'],
    tags: ['Set', 'union', 'ES2025'],
    usageExample: {
      code: `const a = new Set([1, 2])
const b = new Set([2, 3])
const all = a.union(b)
console.log([...all]) // → [1, 2, 3]`,
      explanation: {
        en: 'Use Set.union() to combine two sets into a new set containing all unique values.',
        es: 'Usa Set.union() para combinar dos conjuntos en uno nuevo con todos los valores únicos.',
      },
    },
  },
  {
    slug: 'set-union-2',
    title: 'Set union() — includes all elements',
    description: `## Set.prototype.union() (ES2025)\n\nThe union contains all elements from both Sets, with deduplication.\n\n**Challenge:** Verify that all unique elements are in the union.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'union',
    initialCode: `// Check union elements\nconst a = new Set([1,2,3])\nconst b = new Set([3,4,5])\n`,
    solution: `[...(new Set([1,2,3]) as any).union(new Set([3,4,5]))]`,
    tests: [
      { description: 'union has 5 elements', assertion:'expect((new Set([1,2,3])).union(new Set([3,4,5])).size).toBe(5)' },
      { description: 'union has all unique elements', assertion:'expect(result.sort((a,b)=>a-b)).toEqual([1,2,3,4,5])' },
      { description: 'shared element not duplicated', assertion:'expect(result).toBe(3)' },
      { description: 'union result is a Set', assertion:'expect((new Set([1])).union(new Set([2])) instanceof Set).toBe(true)' },
      { description: 'union has 1', assertion:'expect((new Set([1,2,3])).union(new Set([3,4,5])).has(1)).toBe(true)' },
    ],
    hints: ['union() combines both Sets and deduplicates values'],
    tags: ['Set', 'union', 'elements'],
    usageExample: {
      code: `const a = new Set([1, 2])
const b = new Set([2, 3])
const all = a.union(b)
console.log([...all]) // → [1, 2, 3]`,
      explanation: {
        en: 'Use Set.union() to combine two sets into a new set containing all unique values.',
        es: 'Usa Set.union() para combinar dos conjuntos en uno nuevo con todos los valores únicos.',
      },
    },
  },
  {
    slug: 'set-union-3',
    title: 'Set union() — non-overlapping',
    description: `## Set.prototype.union() (ES2025)\n\nUnion of disjoint Sets contains all elements from both.\n\n**Challenge:** Verify union of Sets with no common elements.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'union',
    initialCode: `// Non-overlapping union\nconst a = new Set([1,2])\nconst b = new Set([3,4])\n`,
    solution: `(new Set([1,2]) as any).union(new Set([3,4])).size`,
    tests: [
      { description: 'size is 4 for disjoint sets', assertion:'expect(result).toBe(4)' },
      { description: 'has all elements', assertion:'expect((new Set([1,2])).union(new Set([3,4])).has(3)).toBe(true)' },
      { description: 'has element from first set', assertion:'expect((new Set([1,2])).union(new Set([3,4])).has(1)).toBe(true)' },
      { description: 'has element from second set', assertion:'expect((new Set([1,2])).union(new Set([3,4])).has(4)).toBe(true)' },
      { description: 'result is Set instance', assertion:'expect((new Set([1,2])).union(new Set([3,4])) instanceof Set).toBe(true)' },
    ],
    hints: ['For disjoint Sets, union size equals the sum of both sizes'],
    tags: ['Set', 'union', 'disjoint'],
    usageExample: {
      code: `const a = new Set([1, 2])
const b = new Set([2, 3])
const all = a.union(b)
console.log([...all]) // → [1, 2, 3]`,
      explanation: {
        en: 'Use Set.union() to combine two sets into a new set containing all unique values.',
        es: 'Usa Set.union() para combinar dos conjuntos en uno nuevo con todos los valores únicos.',
      },
    },
  },
  {
    slug: 'set-union-4',
    title: 'Set union() — empty union',
    description: `## Set.prototype.union() (ES2025)\n\nUnion with an empty Set returns a copy of the original.\n\n**Challenge:** Verify union with empty Set.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'union',
    initialCode: `// Union with empty Set\nconst a = new Set([1,2,3])\nconst b = new Set()\n`,
    solution: `(new Set([1,2,3]) as any).union(new Set()).size`,
    tests: [
      { description: 'union with empty is same size', assertion:'expect(result).toBe(3)' },
      { description: 'empty union empty is empty', assertion:'expect((new Set()).union(new Set()).size).toBe(0)' },
      { description: 'union of empty with non-empty', assertion:'expect((new Set()).union(new Set([1,2])).size).toBe(2)' },
      { description: 'original elements preserved', assertion:'expect((new Set([1,2,3])).union(new Set()).has(2)).toBe(true)' },
      { description: 'result is new Set (not same ref)', assertion:'const a = new Set([1]); expect((a).union(new Set()) !== a).toBe(true)' },
    ],
    hints: ['union() with an empty Set returns a new Set equal to the original'],
    tags: ['Set', 'union', 'empty'],
    usageExample: {
      code: `const a = new Set([1, 2])
const b = new Set([2, 3])
const all = a.union(b)
console.log([...all]) // → [1, 2, 3]`,
      explanation: {
        en: 'Use Set.union() to combine two sets into a new set containing all unique values.',
        es: 'Usa Set.union() para combinar dos conjuntos en uno nuevo con todos los valores únicos.',
      },
    },
  },
  {
    slug: 'set-union-5',
    title: 'Set union() — originals unchanged',
    description: `## Set.prototype.union() (ES2025)\n\nunion() returns a new Set and does not modify the originals.\n\n**Challenge:** Verify that original Sets are unchanged after union().`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'union',
    initialCode: `// Check original Sets are unchanged\nconst a = new Set([1,2])\nconst b = new Set([3,4])\n`,
    solution: `const a = new Set([1,2]); const b = new Set([3,4]); (a as any).union(b); a.size`,
    tests: [
      { description: 'original a unchanged after union', assertion:'const a = new Set([1,2]); (a).union(new Set([3,4])); expect(a.size).toBe(2)' },
      { description: 'original b unchanged after union', assertion:'const a = new Set([1,2]); const b = new Set([3,4]); (a).union(b); expect(b.size).toBe(2)' },
      { description: 'a does not contain elements from b', assertion:'const a = new Set([1,2]); (a).union(new Set([3,4])); expect(a.has(3)).toBe(false)' },
      { description: 'result is a new Set', assertion:'const a = new Set([1,2]); const result = (a).union(new Set([3])); expect(result !== a).toBe(true)' },
      { description: 'result size is correct', assertion:'expect(result).toBe(4)' },
    ],
    hints: ['union() returns a new Set; neither original is modified'],
    tags: ['Set', 'union', 'immutable'],
    usageExample: {
      code: `const a = new Set([1, 2])
const b = new Set([2, 3])
const all = a.union(b)
console.log([...all]) // → [1, 2, 3]`,
      explanation: {
        en: 'Use Set.union() to combine two sets into a new set containing all unique values.',
        es: 'Usa Set.union() para combinar dos conjuntos en uno nuevo con todos los valores únicos.',
      },
    },
  },
]
