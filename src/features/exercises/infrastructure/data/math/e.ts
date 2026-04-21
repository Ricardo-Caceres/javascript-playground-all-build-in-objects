import type { Exercise } from '@/shared/types/exercises'

export const mathEExercises: Exercise[] = [
  {
    slug: 'math-e-1',
    title: "Math.E — the value",
    description: `## Math.E\n\nEuler's number, the base of natural logarithms, approximately **2.718281828459045**.\n\n**Challenge:** Explore the value of \`Math.E\` and verify its type and range.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'E',
    initialCode: `// What is Math.E?\nconst val = Math.E`,
    solution: `const val = Math.E`,
    tests: [
      { description: 'Math.E is a number', assertion: "expect(typeof Math.E).toBe('number')" },
      { description: 'Math.E is approximately 2.718', assertion: "expect(Math.abs(Math.E - 2.718281828459045) < 0.000001).toBeTruthy()" },
      { description: 'Math.E is greater than 2', assertion: "expect(Math.E > 2).toBeTruthy()" },
      { description: 'Math.E is less than 3', assertion: "expect(Math.E < 3).toBeTruthy()" },
      { description: 'Math.E is finite', assertion: "expect(Number.isFinite(Math.E)).toBeTruthy()" },
    ],
    hints: [
      'Math.E is Euler\'s number, the base of natural logarithms.',
      'Its value is approximately 2.718281828459045.',
    ],
    tags: ['Math', 'E', 'static-property', 'beginner'],
    usageExample: {
      code: `// Euler's number — base of natural logarithms
Math.E          // → 2.7182818284...
Math.log(Math.E) // → 1`,
      explanation: {
        en: "Use Math.E when you need Euler's number — the base of natural logarithm calculations.",
        es: 'Usa Math.E como número de Euler cuando necesites la base para cálculos de logaritmo natural.',
      },
    },
  },
  {
    slug: 'math-e-2',
    title: "Math.E — e^1 equals Math.E",
    description: `## Math.E\n\n\`Math.exp(1)\` raises Euler's number to the power of 1, which should equal \`Math.E\`.\n\n**Challenge:** Verify that \`Math.exp(1) === Math.E\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'E',
    initialCode: `// Does Math.exp(1) equal Math.E?\nconst result = Math.exp(1)`,
    solution: `const result = Math.exp(1)`,
    tests: [
      { description: 'Math.exp(1) strictly equals Math.E', assertion: "expect(Math.exp(1) === Math.E).toBeTruthy()" },
      { description: 'Math.exp(1) and Math.E differ by less than 1e-10', assertion: "expect(Math.abs(Math.exp(1) - Math.E) < 1e-10).toBeTruthy()" },
      { description: 'Math.exp(1) is a number', assertion: "expect(typeof Math.exp(1)).toBe('number')" },
      { description: 'Math.E is greater than 2.718', assertion: "expect(Math.E > 2.718).toBeTruthy()" },
      { description: 'Math.E is less than 2.719', assertion: "expect(Math.E < 2.719).toBeTruthy()" },
    ],
    hints: [
      'Math.exp(n) computes e^n.',
      'Math.exp(1) should be identical to Math.E.',
    ],
    tags: ['Math', 'E', 'exp', 'static-property', 'beginner'],
    usageExample: {
      code: `// Euler's number — base of natural logarithms
Math.E          // → 2.7182818284...
Math.log(Math.E) // → 1`,
      explanation: {
        en: "Use Math.E when you need Euler's number — the base of natural logarithm calculations.",
        es: 'Usa Math.E como número de Euler cuando necesites la base para cálculos de logaritmo natural.',
      },
    },
  },
  {
    slug: 'math-e-3',
    title: "Math.E — e^2 approximation",
    description: `## Math.E\n\ne² is approximately **7.389**. You can compute it as \`Math.E * Math.E\` or \`Math.exp(2)\`.\n\n**Challenge:** Verify the value of e².`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'E',
    initialCode: `// What is e squared?\nconst eSquared = Math.E * Math.E`,
    solution: `const eSquared = Math.E * Math.E`,
    tests: [
      { description: 'Math.E * Math.E is approximately 7.389', assertion: "expect(Math.abs(Math.E * Math.E - 7.389) < 0.001).toBeTruthy()" },
      { description: 'Math.exp(2) is greater than 7', assertion: "expect(Math.exp(2) > 7).toBeTruthy()" },
      { description: 'Math.exp(2) is less than 8', assertion: "expect(Math.exp(2) < 8).toBeTruthy()" },
      { description: 'Math.exp(2) and Math.E * Math.E differ by less than 1e-10', assertion: "expect(Math.abs(Math.exp(2) - Math.E * Math.E) < 1e-10).toBeTruthy()" },
      { description: 'Math.exp(2) is a number', assertion: "expect(typeof Math.exp(2)).toBe('number')" },
    ],
    hints: [
      'e² ≈ 7.38905609893065',
      'Both Math.exp(2) and Math.E * Math.E give the same result.',
    ],
    tags: ['Math', 'E', 'exp', 'static-property', 'intermediate'],
    usageExample: {
      code: `// Euler's number — base of natural logarithms
Math.E          // → 2.7182818284...
Math.log(Math.E) // → 1`,
      explanation: {
        en: "Use Math.E when you need Euler's number — the base of natural logarithm calculations.",
        es: 'Usa Math.E como número de Euler cuando necesites la base para cálculos de logaritmo natural.',
      },
    },
  },
  {
    slug: 'math-e-4',
    title: "Math.E — natural logarithm relationship",
    description: `## Math.E\n\nThe natural log of \`Math.E\` is exactly 1. This is the fundamental identity: ln(e) = 1.\n\n**Challenge:** Verify the relationship between \`Math.E\` and \`Math.log\`.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'E',
    initialCode: `// What is Math.log(Math.E)?\nconst lnE = Math.log(Math.E)`,
    solution: `const lnE = Math.log(Math.E)`,
    tests: [
      { description: 'Math.log(Math.E) equals 1', assertion: "expect(Math.log(Math.E)).toBe(1)" },
      { description: 'Math.log(Math.E) differs from 1 by less than 1e-10', assertion: "expect(Math.abs(Math.log(Math.E) - 1) < 1e-10).toBeTruthy()" },
      { description: 'Math.log(Math.E * Math.E) is approximately 2', assertion: "expect(Math.abs(Math.log(Math.E * Math.E) - 2) < 1e-10).toBeTruthy()" },
      { description: 'Math.E is positive', assertion: "expect(Math.E > 0).toBeTruthy()" },
      { description: 'Math.log(1) equals 0', assertion: "expect(Math.log(1)).toBe(0)" },
    ],
    hints: [
      'Math.log computes the natural logarithm (base e).',
      'ln(e) = 1 is the defining identity.',
    ],
    tags: ['Math', 'E', 'log', 'static-property', 'intermediate'],
    usageExample: {
      code: `// Euler's number — base of natural logarithms
Math.E          // → 2.7182818284...
Math.log(Math.E) // → 1`,
      explanation: {
        en: "Use Math.E when you need Euler's number — the base of natural logarithm calculations.",
        es: 'Usa Math.E como número de Euler cuando necesites la base para cálculos de logaritmo natural.',
      },
    },
  },
  {
    slug: 'math-e-5',
    title: "Math.E — use in exponential formula",
    description: `## Math.E\n\nExplore how \`Math.E\` behaves with \`Math.pow\`. Any number to the power of 0 is 1, and e^1 = e.\n\n**Challenge:** Use \`Math.pow(Math.E, n)\` and verify key identities.`,
    category: 'static-property',
    difficulty: 'advanced',
    builtIn: 'Math',
    method: 'E',
    initialCode: `// Math.E in exponential formulas\nconst e0 = Math.pow(Math.E, 0)\nconst e1 = Math.pow(Math.E, 1)`,
    solution: `const e0 = Math.pow(Math.E, 0)\nconst e1 = Math.pow(Math.E, 1)`,
    tests: [
      { description: 'Math.pow(Math.E, 0) equals 1', assertion: "expect(Math.abs(Math.pow(Math.E, 0) - 1) < 1e-10).toBeTruthy()" },
      { description: 'Math.pow(Math.E, 1) equals Math.E', assertion: "expect(Math.abs(Math.pow(Math.E, 1) - Math.E) < 1e-10).toBeTruthy()" },
      { description: 'Math.pow(Math.E, -1) is positive', assertion: "expect(Math.pow(Math.E, -1) > 0).toBeTruthy()" },
      { description: 'Math.E is a number', assertion: "expect(typeof Math.E).toBe('number')" },
      { description: 'Math.E is not zero', assertion: "expect(Math.E !== 0).toBeTruthy()" },
    ],
    hints: [
      'e^0 = 1 for any base.',
      'e^(-1) = 1/e ≈ 0.368.',
    ],
    tags: ['Math', 'E', 'pow', 'static-property', 'advanced'],
    usageExample: {
      code: `// Euler's number — base of natural logarithms
Math.E          // → 2.7182818284...
Math.log(Math.E) // → 1`,
      explanation: {
        en: "Use Math.E when you need Euler's number — the base of natural logarithm calculations.",
        es: 'Usa Math.E como número de Euler cuando necesites la base para cálculos de logaritmo natural.',
      },
    },
  },
]
