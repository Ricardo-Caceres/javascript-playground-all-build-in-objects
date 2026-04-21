import type { Exercise } from '@/shared/types/exercises'

export const setDeleteExercises: Exercise[] = [
  {
    slug: 'set-delete-1',
    title: 'Set delete() — returns true for existing',
    description: `## Set.prototype.delete()\n\n\`delete(value)\` removes the value and returns true if it existed.\n\n**Challenge:** Verify that delete() returns true for an existing value.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Set',
    method: 'delete',
    initialCode: `// Delete an existing value\nconst s = new Set([1, 2, 3])\n`,
    solution: `new Set([1,2,3]).delete(2)`,
    tests: [
      { description: 'delete existing returns true', assertion:'expect(result).toBe(true)' },
      { description: 'result is boolean', assertion:"expect(typeof result).toBe('boolean')" },
      { description: 'result is truthy', assertion:'expect(result).toBeTruthy()' },
      { description: 'delete returns true strictly', assertion:'expect(result === true).toBe(true)' },
      { description: 'works for any existing value', assertion:"expect(new Set(['a','b']).delete('a')).toBe(true)" },
    ],
    hints: ['delete() returns true when the value existed and was removed'],
    tags: ['Set', 'delete', 'method'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
s.delete(2)   // → true
s.delete(99)  // → false
console.log(s.size) // → 2`,
      explanation: {
        en: 'Use Set.delete() to remove a value; it returns true if the value existed.',
        es: 'Usa Set.delete() para eliminar un valor; devuelve true si el valor existía.',
      },
    },
  },
  {
    slug: 'set-delete-2',
    title: 'Set delete() — returns false for missing',
    description: `## Set.prototype.delete()\n\n\`delete()\` returns false when the value doesn't exist.\n\n**Challenge:** Verify that delete() returns false for a missing value.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Set',
    method: 'delete',
    initialCode: `// Delete a value that doesn't exist\nconst s = new Set([1, 2, 3])\n`,
    solution: `new Set([1,2,3]).delete(99)`,
    tests: [
      { description: 'delete missing returns false', assertion:'expect(result).toBe(false)' },
      { description: 'result is boolean', assertion:"expect(typeof result).toBe('boolean')" },
      { description: 'result is falsy', assertion:'expect(result).toBeFalsy()' },
      { description: 'empty set delete returns false', assertion:'expect(new Set().delete(1)).toBe(false)' },
      { description: 'delete returns false not undefined', assertion:'expect(new Set().delete(1) === false).toBe(true)' },
    ],
    hints: ['delete() returns false (not undefined) when the value did not exist'],
    tags: ['Set', 'delete', 'missing'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
s.delete(2)   // → true
s.delete(99)  // → false
console.log(s.size) // → 2`,
      explanation: {
        en: 'Use Set.delete() to remove a value; it returns true if the value existed.',
        es: 'Usa Set.delete() para eliminar un valor; devuelve true si el valor existía.',
      },
    },
  },
  {
    slug: 'set-delete-3',
    title: 'Set delete() — size decreases',
    description: `## Set.prototype.delete()\n\nAfter a successful delete(), size decreases by 1.\n\n**Challenge:** Verify that size decreases after delete().`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Set',
    method: 'delete',
    initialCode: `// Check size after delete\nconst s = new Set([1,2,3])\ns.delete(1)\n`,
    solution: `const s = new Set([1,2,3]); s.delete(1); s.size`,
    tests: [
      { description: 'size decreases by 1', assertion:'const s = new Set([1,2,3]); s.delete(1); expect(s.size).toBe(2)' },
      { description: 'size is 0 after deleting only value', assertion:'const s = new Set([1]); s.delete(1); expect(s.size).toBe(0)' },
      { description: 'missing delete does not change size', assertion:'const s = new Set([1,2]); s.delete(99); expect(s.size).toBe(2)' },
      { description: 'multiple deletes reduce size', assertion:'const s = new Set([1,2,3]); s.delete(1); s.delete(2); expect(s.size).toBe(1)' },
      { description: 'size before delete is 3', assertion:'expect(new Set([1,2,3]).size).toBe(3)' },
    ],
    hints: ['Each successful delete() reduces size by 1'],
    tags: ['Set', 'delete', 'size'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
s.delete(2)   // → true
s.delete(99)  // → false
console.log(s.size) // → 2`,
      explanation: {
        en: 'Use Set.delete() to remove a value; it returns true if the value existed.',
        es: 'Usa Set.delete() para eliminar un valor; devuelve true si el valor existía.',
      },
    },
  },
  {
    slug: 'set-delete-4',
    title: 'Set delete() — has() false after delete',
    description: `## Set.prototype.delete()\n\nAfter delete(), has() returns false for the deleted value.\n\n**Challenge:** Verify that has() returns false after delete().`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Set',
    method: 'delete',
    initialCode: `// Delete then check has()\nconst s = new Set([1, 2])\ns.delete(1)\n`,
    solution: `const s = new Set([1,2]); s.delete(1); s.has(1)`,
    tests: [
      { description: 'has(1) false after delete(1)', assertion:'const s = new Set([1,2]); s.delete(1); expect(s.has(1)).toBe(false)' },
      { description: 'other values unaffected', assertion:'const s = new Set([1,2]); s.delete(1); expect(s.has(2)).toBe(true)' },
      { description: 'size also decreased', assertion:'const s = new Set([1,2]); s.delete(1); expect(s.size).toBe(1)' },
      { description: 'has false is falsy', assertion:'const s = new Set([1]); s.delete(1); expect(s.has(1)).toBeFalsy()' },
      { description: 'can re-add after delete', assertion:'const s = new Set([1]); s.delete(1); s.add(1); expect(s.has(1)).toBe(true)' },
    ],
    hints: ['delete() fully removes the value from the Set'],
    tags: ['Set', 'delete', 'has'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
s.delete(2)   // → true
s.delete(99)  // → false
console.log(s.size) // → 2`,
      explanation: {
        en: 'Use Set.delete() to remove a value; it returns true if the value existed.',
        es: 'Usa Set.delete() para eliminar un valor; devuelve true si el valor existía.',
      },
    },
  },
  {
    slug: 'set-delete-5',
    title: 'Set delete() — delete twice',
    description: `## Set.prototype.delete()\n\nDeleting the same value twice: first returns true, second returns false.\n\n**Challenge:** Verify the second delete returns false.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Set',
    method: 'delete',
    initialCode: `// Delete the same value twice\nconst s = new Set([1])\ns.delete(1)\n`,
    solution: `const s = new Set([1]); s.delete(1); s.delete(1)`,
    tests: [
      { description: 'second delete returns false', assertion:'const s = new Set([1]); s.delete(1); expect(s.delete(1)).toBe(false)' },
      { description: 'first delete returns true', assertion:'const s = new Set([1]); expect(s.delete(1)).toBe(true)' },
      { description: 'size is 0 after first delete', assertion:'const s = new Set([1]); s.delete(1); expect(s.size).toBe(0)' },
      { description: 'second delete does not throw', assertion:'const s = new Set([1]); s.delete(1); expect((() => { try { (() => s.delete(1))(); return true; } catch(e) { return false; } })()).toBe(true)' },
      { description: 'result of second delete is exactly false', assertion:'const s = new Set([1]); s.delete(1); expect(s.delete(1) === false).toBe(true)' },
    ],
    hints: ['delete() is idempotent — deleting an already-deleted value returns false'],
    tags: ['Set', 'delete', 'idempotent'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
s.delete(2)   // → true
s.delete(99)  // → false
console.log(s.size) // → 2`,
      explanation: {
        en: 'Use Set.delete() to remove a value; it returns true if the value existed.',
        es: 'Usa Set.delete() para eliminar un valor; devuelve true si el valor existía.',
      },
    },
  },
]
