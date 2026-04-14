import type { Exercise } from '@/shared/types/exercises'

export const numberConstructorExercises: Exercise[] = [
  {
    slug: 'number-constructor-string-1',
    title: 'Number() — converting strings to numbers',
    description: `## Number() Constructor

\`Number(value)\` converts a value to a number primitive.

**Challenge:** Implement \`strToNum(str)\` that converts a string to a number using \`Number()\`.

\`\`\`ts
strToNum('42')    // → 42
strToNum('3.14')  // → 3.14
\`\`\``,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Number',
    initialCode: `function strToNum(str: string): number {
  // Use Number(str)
}`,
    solution: `function strToNum(str: string): number {
  return Number(str)
}`,
    tests: [
      { description: 'integer string', assertion: "expect(Number('42')).toBe(42)" },
      { description: 'float string', assertion: "expect(Number('3.14')).toBe(3.14)" },
      { description: 'negative string', assertion: "expect(Number('-7')).toBe(-7)" },
      { description: 'zero string', assertion: "expect(Number('0')).toBe(0)" },
      { description: 'empty string returns 0', assertion: "expect(Number('')).toBe(0)" },
    ],
    hints: ['`Number(str)` parses numeric strings directly.'],
    tags: ['Number', 'constructor', 'coercion', 'beginner'],
  },
  {
    slug: 'number-constructor-boolean-1',
    title: 'Number() — converting booleans',
    description: `## Number() — Boolean Coercion

\`Number(true)\` returns \`1\`, \`Number(false)\` returns \`0\`.

**Challenge:** Implement \`boolToNum(b)\` that converts a boolean to a number.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Number',
    initialCode: `function boolToNum(b: boolean): number {
  // Use Number(b)
}`,
    solution: `function boolToNum(b: boolean): number {
  return Number(b)
}`,
    tests: [
      { description: 'true → 1', assertion: 'expect(Number(true)).toBe(1)' },
      { description: 'false → 0', assertion: 'expect(Number(false)).toBe(0)' },
      { description: 'true is truthy', assertion: 'expect(Number(true)).toBeTruthy()' },
      { description: 'false is falsy', assertion: 'expect(Number(false)).toBeFalsy()' },
      { description: 'true + true = 2', assertion: 'expect(Number(true) + Number(true)).toBe(2)' },
    ],
    hints: ['JavaScript treats `true` as 1 and `false` as 0.'],
    tags: ['Number', 'constructor', 'boolean', 'beginner'],
  },
  {
    slug: 'number-constructor-null-1',
    title: 'Number() — null becomes 0',
    description: `## Number() — null Coercion

\`Number(null)\` returns \`0\` (not NaN!).

**Challenge:** Verify this behaviour.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Number',
    initialCode: `// What does Number(null) return?
const result = Number(null)`,
    solution: `const result = Number(null)`,
    tests: [
      { description: 'Number(null) is 0', assertion: 'expect(Number(null)).toBe(0)' },
      { description: 'Number(null) is falsy', assertion: 'expect(Number(null)).toBeFalsy()' },
      { description: 'typeof Number(null)', assertion: "expect(typeof Number(null)).toBe('number')" },
      { description: 'null + 1 = 1', assertion: 'expect(Number(null) + 1).toBe(1)' },
      { description: 'is not NaN', assertion: 'expect(Number.isNaN(Number(null))).toBe(false)' },
    ],
    hints: ['`null` is coerced to `0`, unlike `undefined` which gives `NaN`.'],
    tags: ['Number', 'constructor', 'null', 'beginner'],
  },
  {
    slug: 'number-constructor-undefined-nan-1',
    title: 'Number() — undefined becomes NaN',
    description: `## Number() — undefined Coercion

\`Number(undefined)\` returns \`NaN\`.

**Challenge:** Verify this behaviour and contrast with null.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Number',
    initialCode: `// What does Number(undefined) return?
const result = Number(undefined)`,
    solution: `const result = Number(undefined)`,
    tests: [
      { description: 'Number(undefined) is NaN', assertion: 'expect(Number.isNaN(Number(undefined))).toBe(true)' },
      { description: 'typeof is number', assertion: "expect(typeof Number(undefined)).toBe('number')" },
      { description: 'NaN is not equal to itself', assertion: 'expect(Number(undefined) === Number(undefined)).toBe(false)' },
      { description: 'contrast with null', assertion: 'expect(Number(null)).toBe(0)' },
      { description: 'undefined NaN is falsy', assertion: 'expect(Number(undefined)).toBeFalsy()' },
    ],
    hints: ['`undefined` coerces to `NaN`, while `null` coerces to `0`.'],
    tags: ['Number', 'constructor', 'undefined', 'NaN', 'beginner'],
  },
  {
    slug: 'number-constructor-object-vs-primitive-1',
    title: 'Number() vs new Number() — object vs primitive',
    description: `## Number() vs new Number()

- \`Number(5)\` returns a **primitive** number.
- \`new Number(5)\` returns a **Number object**.

\`\`\`ts
typeof Number(5)      // → 'number'
typeof new Number(5)  // → 'object'
\`\`\``,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Number',
    initialCode: `// Explore the difference between Number() and new Number()
const primitive = Number(5)
const obj = new Number(5)`,
    solution: `const primitive = Number(5)
const obj = new Number(5)`,
    tests: [
      { description: 'Number(5) typeof is number', assertion: "expect(typeof Number(5)).toBe('number')" },
      { description: 'new Number(5) typeof is object', assertion: "expect(typeof new Number(5)).toBe('object')" },
      { description: 'primitive equals 5', assertion: 'expect(Number(5) === 5).toBe(true)' },
      { description: 'object loose equals 5', assertion: 'expect(new Number(5) == 5).toBe(true)' },
      { description: 'object strict not equal to 5', assertion: 'expect(new Number(5) === 5).toBe(false)' },
    ],
    hints: ['`new Number()` wraps a number in an object box — rarely needed in practice.'],
    tags: ['Number', 'constructor', 'object', 'primitive', 'intermediate'],
  },
]
