import type { Exercise } from '@/shared/types/exercises'

export const mathAbsExercises: Exercise[] = [
  {
    slug: 'math-abs-1',
    title: 'Negative to Positive with Math.abs()',
    description: `## Math.abs(x)\n\nReturns the absolute value of a number, converting negative numbers to positive.\n\n**Challenge:** Use \`Math.abs()\` to convert a negative number to its positive equivalent.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'abs',
    initialCode: `// Use Math.abs() to get the absolute value of negative numbers\nconst result = Math.abs(-5)\n`,
    solution: `const result = Math.abs(-5) // 5\n`,
    tests: [
      { description: 'Math.abs(-5) returns 5', assertion: 'expect(Math.abs(-5)).toBe(5)' },
      { description: 'Math.abs(-3.14) is approximately 3.14', assertion: 'expect(Math.abs(Math.abs(-3.14) - 3.14) < 1e-10).toBeTruthy()' },
      { description: 'Math.abs(-0) returns 0', assertion: 'expect(Math.abs(-0)).toBe(0)' },
      { description: 'typeof Math.abs(-1) is number', assertion: "expect(typeof Math.abs(-1)).toBe('number')" },
      { description: 'Math.abs(-100) returns 100', assertion: 'expect(Math.abs(-100)).toBe(100)' },
    ],
    hints: ['Math.abs() strips the sign from a number', 'Works with integers and floats alike'],
    tags: ['Math', 'abs', 'static-method'],
    usageExample: {
      code: `// Get the absolute value of a number
Math.abs(-7)   // → 7
Math.abs(3.5)  // → 3.5`,
      explanation: {
        en: 'Use Math.abs() when you need the magnitude of a number regardless of its sign.',
        es: 'Usa Math.abs() cuando necesites la magnitud de un número independientemente de su signo.',
      },
    },
  },
  {
    slug: 'math-abs-2',
    title: 'Positive Numbers Stay Positive',
    description: `## Math.abs(x)\n\nWhen passed a positive number, \`Math.abs()\` returns it unchanged.\n\n**Challenge:** Verify that \`Math.abs()\` leaves positive numbers unchanged.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'abs',
    initialCode: `// Use Math.abs() on positive numbers\nconst result = Math.abs(5)\n`,
    solution: `const result = Math.abs(5) // 5\n`,
    tests: [
      { description: 'Math.abs(5) returns 5', assertion: 'expect(Math.abs(5)).toBe(5)' },
      { description: 'Math.abs(3.14) returns 3.14', assertion: 'expect(Math.abs(3.14)).toBe(3.14)' },
      { description: 'Math.abs(0) returns 0', assertion: 'expect(Math.abs(0)).toBe(0)' },
      { description: 'Math.abs(100) returns 100', assertion: 'expect(Math.abs(100)).toBe(100)' },
      { description: 'typeof Math.abs(0) is number', assertion: "expect(typeof Math.abs(0)).toBe('number')" },
    ],
    hints: ['Positive numbers are unaffected by Math.abs()', 'Zero is neither positive nor negative'],
    tags: ['Math', 'abs', 'static-method'],
    usageExample: {
      code: `// Get the absolute value of a number
Math.abs(-7)   // → 7
Math.abs(3.5)  // → 3.5`,
      explanation: {
        en: 'Use Math.abs() when you need the magnitude of a number regardless of its sign.',
        es: 'Usa Math.abs() cuando necesites la magnitud de un número independientemente de su signo.',
      },
    },
  },
  {
    slug: 'math-abs-3',
    title: 'Absolute Value of Zero',
    description: `## Math.abs(x)\n\nBoth \`0\` and \`-0\` have an absolute value of \`0\`.\n\n**Challenge:** Explore the absolute value of zero and negative zero.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'abs',
    initialCode: `// Use Math.abs() on zero\nconst result = Math.abs(0)\n`,
    solution: `const result = Math.abs(0) // 0\n`,
    tests: [
      { description: 'Math.abs(0) returns 0', assertion: 'expect(Math.abs(0)).toBe(0)' },
      { description: 'Math.abs(-0) returns 0', assertion: 'expect(Math.abs(-0)).toBe(0)' },
      { description: 'Math.abs(0) is non-negative', assertion: 'expect(Math.abs(0) >= 0).toBeTruthy()' },
      { description: 'typeof Math.abs(0) is number', assertion: "expect(typeof Math.abs(0)).toBe('number')" },
      { description: 'Math.abs(0) equals Math.abs(-0)', assertion: 'expect(Math.abs(0) === Math.abs(-0)).toBeTruthy()' },
    ],
    hints: ['In JavaScript, -0 exists but Math.abs(-0) === 0', 'Both 0 and -0 have absolute value 0'],
    tags: ['Math', 'abs', 'static-method'],
    usageExample: {
      code: `// Get the absolute value of a number
Math.abs(-7)   // → 7
Math.abs(3.5)  // → 3.5`,
      explanation: {
        en: 'Use Math.abs() when you need the magnitude of a number regardless of its sign.',
        es: 'Usa Math.abs() cuando necesites la magnitud de un número independientemente de su signo.',
      },
    },
  },
  {
    slug: 'math-abs-4',
    title: 'Negative Zero Behavior',
    description: `## Math.abs(x)\n\nJavaScript has a special \`-0\` value. \`Math.abs(-0)\` returns positive \`0\`.\n\n**Challenge:** Understand how \`Math.abs()\` handles negative zero.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'abs',
    initialCode: `// Explore Math.abs() with negative zero\nconst result = Math.abs(-0)\n`,
    solution: `const result = Math.abs(-0) // 0\n`,
    tests: [
      { description: 'Math.abs(-0) returns 0', assertion: 'expect(Math.abs(-0)).toBe(0)' },
      { description: 'Object.is(Math.abs(-0), 0) is true', assertion: 'expect(Object.is(Math.abs(-0), 0)).toBeTruthy()' },
      { description: 'Math.abs(-0) is non-negative', assertion: 'expect(Math.abs(-0) >= 0).toBeTruthy()' },
      { description: 'typeof Math.abs(-0) is number', assertion: "expect(typeof Math.abs(-0)).toBe('number')" },
      { description: 'Math.abs(-0) equals 0', assertion: 'expect(Math.abs(-0) === 0).toBeTruthy()' },
    ],
    hints: ['-0 is a valid IEEE 754 value in JavaScript', 'Object.is() distinguishes -0 from 0, but Math.abs(-0) removes the sign'],
    tags: ['Math', 'abs', 'static-method', 'negative-zero'],
    usageExample: {
      code: `// Get the absolute value of a number
Math.abs(-7)   // → 7
Math.abs(3.5)  // → 3.5`,
      explanation: {
        en: 'Use Math.abs() when you need the magnitude of a number regardless of its sign.',
        es: 'Usa Math.abs() cuando necesites la magnitud de un número independientemente de su signo.',
      },
    },
  },
  {
    slug: 'math-abs-5',
    title: 'Math.abs() with NaN and Infinity',
    description: `## Math.abs(x)\n\n\`Math.abs(NaN)\` returns \`NaN\` and \`Math.abs(Infinity)\` returns \`Infinity\`.\n\n**Challenge:** Understand how \`Math.abs()\` handles special numeric values.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'abs',
    initialCode: `// Use Math.abs() with special values\nconst result = Math.abs(NaN)\n`,
    solution: `const result = Math.abs(NaN) // NaN\n`,
    tests: [
      { description: 'Math.abs(NaN) is NaN', assertion: 'expect(isNaN(Math.abs(NaN))).toBeTruthy()' },
      { description: 'typeof Math.abs(NaN) is number', assertion: "expect(typeof Math.abs(NaN)).toBe('number')" },
      { description: 'NaN is not equal to itself', assertion: 'expect(Math.abs(NaN) !== Math.abs(NaN)).toBeTruthy()' },
      { description: 'Math.abs(Infinity) is Infinity', assertion: 'expect(Math.abs(Infinity)).toBe(Infinity)' },
      { description: 'Math.abs(-Infinity) is Infinity', assertion: 'expect(Math.abs(-Infinity)).toBe(Infinity)' },
    ],
    hints: ['NaN is the only value not equal to itself', 'Math.abs() of ±Infinity returns positive Infinity'],
    tags: ['Math', 'abs', 'static-method', 'NaN', 'Infinity'],
    usageExample: {
      code: `// Get the absolute value of a number
Math.abs(-7)   // → 7
Math.abs(3.5)  // → 3.5`,
      explanation: {
        en: 'Use Math.abs() when you need the magnitude of a number regardless of its sign.',
        es: 'Usa Math.abs() cuando necesites la magnitud de un número independientemente de su signo.',
      },
    },
  },
]
