import type { Exercise } from '@/shared/types/exercises'

export const setIntersectionExercises: Exercise[] = [
  {
    slug: 'set-intersection-1',
    title: 'Set intersection() — common elements',
    description: `## Set.prototype.intersection() (ES2025)\n\n\`setA.intersection(setB)\` returns a new Set with elements common to both.\n\n**Challenge:** Verify the intersection of two Sets.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'intersection',
    initialCode: `// Use intersection() - ES2025\nconst a = new Set([1,2,3])\nconst b = new Set([2,3,4])\n`,
    solution: `[...(new Set([1,2,3]) as any).intersection(new Set([2,3,4]))]`,
    tests: [
      { description: 'intersection has common elements [2,3]', assertion:'expect(result.sort((a,b)=>a-b)).toEqual([2,3])' },
      { description: 'has 2', assertion:'expect((new Set([1,2,3])).intersection(new Set([2,3,4])).has(2)).toBe(true)' },
      { description: 'has 3', assertion:'expect((new Set([1,2,3])).intersection(new Set([2,3,4])).has(3)).toBe(true)' },
      { description: 'does not have 1', assertion:'expect((new Set([1,2,3])).intersection(new Set([2,3,4])).has(1)).toBe(false)' },
      { description: 'result is a Set', assertion:'expect((new Set([1,2,3])).intersection(new Set([2,3,4])) instanceof Set).toBe(true)' },
    ],
    hints: ['intersection() returns elements that exist in both Sets'],
    tags: ['Set', 'intersection', 'ES2025'],
    usageExample: {
      code: `const a = new Set([1, 2, 3])
const b = new Set([2, 3, 4])
const common = a.intersection(b)
console.log([...common]) // → [2, 3]`,
      explanation: {
        en: 'Use Set.intersection() to get the values present in both sets.',
        es: 'Usa Set.intersection() para obtener los valores presentes en ambos conjuntos.',
      },
    },
  },
  {
    slug: 'set-intersection-2',
    title: 'Set intersection() — size',
    description: `## Set.prototype.intersection() (ES2025)\n\nThe size of the intersection is the count of common elements.\n\n**Challenge:** Verify the size of the intersection.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'intersection',
    initialCode: `// Check intersection size\nconst a = new Set([1,2,3,4])\nconst b = new Set([3,4,5,6])\n`,
    solution: `(new Set([1,2,3,4]) as any).intersection(new Set([3,4,5,6])).size`,
    tests: [
      { description: 'intersection size is 2', assertion:'expect(result).toBe(2)' },
      { description: 'single common element has size 1', assertion:'expect(result).toBe(1)' },
      { description: 'identical sets: intersection size equals set size', assertion:'expect((new Set([1,2,3])).intersection(new Set([1,2,3])).size).toBe(3)' },
      { description: 'size is a number', assertion:"expect(typeof (new Set([1,2])).intersection(new Set([2,3])).size).toBe('number')" },
      { description: 'intersection of subsets', assertion:'expect((new Set([1,2])).intersection(new Set([1,2,3])).size).toBe(2)' },
    ],
    hints: ['intersection size can range from 0 to min(size_A, size_B)'],
    tags: ['Set', 'intersection', 'size'],
    usageExample: {
      code: `const a = new Set([1, 2, 3])
const b = new Set([2, 3, 4])
const common = a.intersection(b)
console.log([...common]) // → [2, 3]`,
      explanation: {
        en: 'Use Set.intersection() to get the values present in both sets.',
        es: 'Usa Set.intersection() para obtener los valores presentes en ambos conjuntos.',
      },
    },
  },
  {
    slug: 'set-intersection-3',
    title: 'Set intersection() — no common elements',
    description: `## Set.prototype.intersection() (ES2025)\n\nIntersection of disjoint Sets is an empty Set.\n\n**Challenge:** Verify that intersection of disjoint Sets is empty.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'intersection',
    initialCode: `// Disjoint sets intersection\nconst a = new Set([1,2,3])\nconst b = new Set([4,5,6])\n`,
    solution: `(new Set([1,2,3]) as any).intersection(new Set([4,5,6])).size`,
    tests: [
      { description: 'disjoint intersection size is 0', assertion:'expect(result).toBe(0)' },
      { description: 'empty intersection is empty Set', assertion:'expect([...(new Set([1,2])).intersection(new Set([3,4]))]).toEqual([])' },
      { description: 'result is a Set', assertion:'expect((new Set([1,2])).intersection(new Set([3,4])) instanceof Set).toBe(true)' },
      { description: 'intersection with empty Set is empty', assertion:'expect((new Set([1,2,3])).intersection(new Set()).size).toBe(0)' },
      { description: 'empty intersect anything is empty', assertion:'expect((new Set()).intersection(new Set([1,2,3])).size).toBe(0)' },
    ],
    hints: ['Disjoint Sets share no elements, so their intersection is empty'],
    tags: ['Set', 'intersection', 'disjoint'],
    usageExample: {
      code: `const a = new Set([1, 2, 3])
const b = new Set([2, 3, 4])
const common = a.intersection(b)
console.log([...common]) // → [2, 3]`,
      explanation: {
        en: 'Use Set.intersection() to get the values present in both sets.',
        es: 'Usa Set.intersection() para obtener los valores presentes en ambos conjuntos.',
      },
    },
  },
  {
    slug: 'set-intersection-4',
    title: 'Set intersection() — originals unchanged',
    description: `## Set.prototype.intersection() (ES2025)\n\nintersection() does not modify the original Sets.\n\n**Challenge:** Verify that original Sets are unchanged.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'intersection',
    initialCode: `// Check originals unchanged\nconst a = new Set([1,2,3])\nconst b = new Set([2,3,4])\n`,
    solution: `const a = new Set([1,2,3]); const b = new Set([2,3,4]); (a as any).intersection(b); a.size`,
    tests: [
      { description: 'original a unchanged', assertion:'const a = new Set([1,2,3]); (a).intersection(new Set([2,3])); expect(a.size).toBe(3)' },
      { description: 'original b unchanged', assertion:'const a = new Set([1,2,3]); const b = new Set([2,3,4]); (a).intersection(b); expect(b.size).toBe(3)' },
      { description: 'result is a new Set', assertion:'const a = new Set([1,2,3]); const result = (a).intersection(new Set([2])); expect(result !== a).toBe(true)' },
      { description: 'a still has original elements', assertion:'const a = new Set([1,2,3]); (a).intersection(new Set([2,3])); expect(a.has(1)).toBe(true)' },
      { description: 'result only has common elements', assertion:'const r = (new Set([1,2,3])).intersection(new Set([2,3,4])); expect(r.has(1)).toBe(false)' },
    ],
    hints: ['intersection() returns a new Set; originals are not modified'],
    tags: ['Set', 'intersection', 'immutable'],
    usageExample: {
      code: `const a = new Set([1, 2, 3])
const b = new Set([2, 3, 4])
const common = a.intersection(b)
console.log([...common]) // → [2, 3]`,
      explanation: {
        en: 'Use Set.intersection() to get the values present in both sets.',
        es: 'Usa Set.intersection() para obtener los valores presentes en ambos conjuntos.',
      },
    },
  },
  {
    slug: 'set-intersection-5',
    title: 'Set intersection() — single common element',
    description: `## Set.prototype.intersection() (ES2025)\n\nIntersection with only one common element returns a Set with that element.\n\n**Challenge:** Verify intersection with a single common element.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'intersection',
    initialCode: `// Single common element\nconst a = new Set([1,2,3])\nconst b = new Set([3,4,5])\n`,
    solution: `(new Set([1,2,3]) as any).intersection(new Set([3,4,5])).size`,
    tests: [
      { description: 'size is 1', assertion:'expect(result).toBe(1)' },
      { description: 'has the common element 3', assertion:'expect((new Set([1,2,3])).intersection(new Set([3,4,5])).has(3)).toBe(true)' },
      { description: 'does not have 1', assertion:'expect((new Set([1,2,3])).intersection(new Set([3,4,5])).has(1)).toBe(false)' },
      { description: 'does not have 4', assertion:'expect((new Set([1,2,3])).intersection(new Set([3,4,5])).has(4)).toBe(false)' },
      { description: 'result is Set instance', assertion:'expect((new Set([1,2,3])).intersection(new Set([3,4,5])) instanceof Set).toBe(true)' },
    ],
    hints: ['intersection returns only the elements shared between both Sets'],
    tags: ['Set', 'intersection', 'single'],
    usageExample: {
      code: `const a = new Set([1, 2, 3])
const b = new Set([2, 3, 4])
const common = a.intersection(b)
console.log([...common]) // → [2, 3]`,
      explanation: {
        en: 'Use Set.intersection() to get the values present in both sets.',
        es: 'Usa Set.intersection() para obtener los valores presentes en ambos conjuntos.',
      },
    },
  },
]
