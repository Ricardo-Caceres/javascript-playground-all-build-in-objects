import type { Exercise } from '@/shared/types/exercises'

export const mathPiExercises: Exercise[] = [
  {
    slug: 'math-pi-1',
    title: 'Math.PI — the value',
    description: `## Math.PI\n\nThe ratio of a circle's circumference to its diameter, approximately **3.141592653589793**.\n\n**Challenge:** Explore the value of \`Math.PI\` and verify its type and range.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'PI',
    initialCode: `// What is Math.PI?\nconst val = Math.PI`,
    solution: `const val = Math.PI`,
    tests: [
      { description: 'Math.PI is a number', assertion: "expect(typeof Math.PI).toBe('number')" },
      { description: 'Math.PI is greater than 3', assertion: "expect(Math.PI > 3).toBeTruthy()" },
      { description: 'Math.PI is less than 4', assertion: "expect(Math.PI < 4).toBeTruthy()" },
      { description: 'Math.PI is approximately 3.14159265358979', assertion: "expect(Math.abs(Math.PI - 3.14159265358979) < 0.000001).toBeTruthy()" },
      { description: 'Math.PI is finite', assertion: "expect(Number.isFinite(Math.PI)).toBeTruthy()" },
    ],
    hints: [
      'Math.PI is the ratio of a circle\'s circumference to its diameter.',
      'Its value is approximately 3.141592653589793.',
    ],
    tags: ['Math', 'PI', 'static-property', 'beginner'],
    usageExample: {
      code: `// Pi — ratio of circumference to diameter
Math.PI       // → 3.1415926535...
2 * Math.PI   // → 6.2831... (full circle in radians)`,
      explanation: {
        en: 'Use Math.PI when calculating circle circumferences, areas, or converting between degrees and radians.',
        es: 'Usa Math.PI al calcular circunferencias, áreas de círculos o convertir entre grados y radianes.',
      },
    },
  },
  {
    slug: 'math-pi-2',
    title: 'Math.PI — circle circumference',
    description: `## Math.PI\n\nThe circumference of a circle is **2πr**. For a unit circle (r=1), circumference = 2π ≈ 6.283.\n\n**Challenge:** Use \`Math.PI\` to compute circle circumferences.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'PI',
    initialCode: `// Circumference = 2 * Math.PI * r\nconst circumference = 2 * Math.PI * 1`,
    solution: `const circumference = 2 * Math.PI * 1`,
    tests: [
      { description: 'Circumference of unit circle is approximately 6.283', assertion: "expect(Math.abs(2 * Math.PI * 1 - 6.283) < 0.001).toBeTruthy()" },
      { description: '2 * Math.PI is greater than 6', assertion: "expect(2 * Math.PI > 6).toBeTruthy()" },
      { description: '2 * Math.PI is less than 7', assertion: "expect(2 * Math.PI < 7).toBeTruthy()" },
      { description: '2 * Math.PI is a number', assertion: "expect(typeof (2 * Math.PI)).toBe('number')" },
      { description: 'Circumference with r=5 is approximately 31.4159', assertion: "expect(Math.abs(2 * Math.PI * 5 - 31.4159) < 0.001).toBeTruthy()" },
    ],
    hints: [
      'Circumference = 2πr',
      '2 * Math.PI ≈ 6.283185307179586',
    ],
    tags: ['Math', 'PI', 'geometry', 'static-property', 'beginner'],
    usageExample: {
      code: `// Pi — ratio of circumference to diameter
Math.PI       // → 3.1415926535...
2 * Math.PI   // → 6.2831... (full circle in radians)`,
      explanation: {
        en: 'Use Math.PI when calculating circle circumferences, areas, or converting between degrees and radians.',
        es: 'Usa Math.PI al calcular circunferencias, áreas de círculos o convertir entre grados y radianes.',
      },
    },
  },
  {
    slug: 'math-pi-3',
    title: 'Math.PI — area of circle',
    description: `## Math.PI\n\nThe area of a circle is **πr²**. For a unit circle (r=1), area = π ≈ 3.14159.\n\n**Challenge:** Use \`Math.PI\` to compute circle areas.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'PI',
    initialCode: `// Area = Math.PI * r * r\nconst area = Math.PI * 1 * 1`,
    solution: `const area = Math.PI * 1 * 1`,
    tests: [
      { description: 'Area of unit circle is approximately 3.14159', assertion: "expect(Math.abs(Math.PI * 1 * 1 - 3.14159) < 0.001).toBeTruthy()" },
      { description: 'Area with r=2 is greater than 12', assertion: "expect(Math.PI * 2 * 2 > 12).toBeTruthy()" },
      { description: 'Area with r=2 is less than 13', assertion: "expect(Math.PI * 2 * 2 < 13).toBeTruthy()" },
      { description: 'Math.PI * 4 is a number', assertion: "expect(typeof (Math.PI * 4)).toBe('number')" },
      { description: 'Math.PI * 0 equals 0', assertion: "expect(Math.PI * 0).toBe(0)" },
    ],
    hints: [
      'Area = πr²',
      'Math.PI * r * r is equivalent to Math.PI * Math.pow(r, 2).',
    ],
    tags: ['Math', 'PI', 'geometry', 'static-property', 'beginner'],
    usageExample: {
      code: `// Pi — ratio of circumference to diameter
Math.PI       // → 3.1415926535...
2 * Math.PI   // → 6.2831... (full circle in radians)`,
      explanation: {
        en: 'Use Math.PI when calculating circle circumferences, areas, or converting between degrees and radians.',
        es: 'Usa Math.PI al calcular circunferencias, áreas de círculos o convertir entre grados y radianes.',
      },
    },
  },
  {
    slug: 'math-pi-4',
    title: 'Math.PI — degrees to radians',
    description: `## Math.PI\n\nConvert degrees to radians: **radians = degrees × (Math.PI / 180)**.\n\n**Challenge:** Use \`Math.PI\` to convert common degree values to radians.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'PI',
    initialCode: `// Convert degrees to radians\nconst rad90 = 90 * Math.PI / 180`,
    solution: `const rad90 = 90 * Math.PI / 180`,
    tests: [
      { description: '180 degrees equals Math.PI radians', assertion: "expect(Math.abs(180 * Math.PI / 180 - Math.PI) < 1e-10).toBeTruthy()" },
      { description: '90 degrees equals Math.PI/2 radians', assertion: "expect(Math.abs(90 * Math.PI / 180 - Math.PI / 2) < 1e-10).toBeTruthy()" },
      { description: '360 degrees equals 2*Math.PI radians', assertion: "expect(Math.abs(360 * Math.PI / 180 - 2 * Math.PI) < 1e-10).toBeTruthy()" },
      { description: '45 degrees in radians is a number', assertion: "expect(typeof (45 * Math.PI / 180)).toBe('number')" },
      { description: '0 degrees equals 0 radians', assertion: "expect(Math.abs(0 * Math.PI / 180 - 0)).toBe(0)" },
    ],
    hints: [
      'Multiply degrees by Math.PI / 180 to get radians.',
      '180 degrees = π radians, so 360 degrees = 2π radians.',
    ],
    tags: ['Math', 'PI', 'trigonometry', 'static-property', 'intermediate'],
    usageExample: {
      code: `// Pi — ratio of circumference to diameter
Math.PI       // → 3.1415926535...
2 * Math.PI   // → 6.2831... (full circle in radians)`,
      explanation: {
        en: 'Use Math.PI when calculating circle circumferences, areas, or converting between degrees and radians.',
        es: 'Usa Math.PI al calcular circunferencias, áreas de círculos o convertir entre grados y radianes.',
      },
    },
  },
  {
    slug: 'math-pi-5',
    title: 'Math.PI — exact IEEE 754 value',
    description: `## Math.PI\n\nThe exact IEEE 754 double-precision value of \`Math.PI\` is **3.141592653589793**.\n\n**Challenge:** Verify the exact stored value and its bounds.`,
    category: 'static-property',
    difficulty: 'advanced',
    builtIn: 'Math',
    method: 'PI',
    initialCode: `// Verify the exact IEEE 754 value of Math.PI\nconst val = Math.PI`,
    solution: `const val = Math.PI`,
    tests: [
      { description: 'Math.PI equals 3.141592653589793 exactly', assertion: "expect(Math.PI).toBe(3.141592653589793)" },
      { description: 'Math.PI is greater than 3.14159', assertion: "expect(Math.PI > 3.14159).toBeTruthy()" },
      { description: 'Math.PI is less than 3.14160', assertion: "expect(Math.PI < 3.14160).toBeTruthy()" },
      { description: 'Math.PI is finite', assertion: "expect(Number.isFinite(Math.PI)).toBeTruthy()" },
      { description: 'Math.PI is a number', assertion: "expect(typeof Math.PI).toBe('number')" },
    ],
    hints: [
      'The exact IEEE 754 representation is 3.141592653589793.',
      'This is the closest double-precision float to π.',
    ],
    tags: ['Math', 'PI', 'static-property', 'advanced'],
    usageExample: {
      code: `// Pi — ratio of circumference to diameter
Math.PI       // → 3.1415926535...
2 * Math.PI   // → 6.2831... (full circle in radians)`,
      explanation: {
        en: 'Use Math.PI when calculating circle circumferences, areas, or converting between degrees and radians.',
        es: 'Usa Math.PI al calcular circunferencias, áreas de círculos o convertir entre grados y radianes.',
      },
    },
  },
]
