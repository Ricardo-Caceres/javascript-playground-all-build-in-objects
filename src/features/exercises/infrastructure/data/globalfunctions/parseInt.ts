import type { Exercise } from '@/shared/types/exercises'

export const globalParseIntExercises: Exercise[] = [
  {
    slug: 'global-parseint-1',
    title: 'parseInt — basic integer string',
    description: `## parseInt\n\n\`parseInt('42')\` returns the integer \`42\`.\n\n**Challenge:** Verify that \`parseInt('42') === 42\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'GlobalFunctions',
    method: 'parseInt',
    initialCode: `parseInt('42')`,
    solution: `parseInt('42') === 42`,
    tests: [
      { description: "result", assertion: "expect(parseInt('42')).toBe(42)" },
      { description: 'result is a number', assertion: "expect(typeof parseInt('42')).toBe('number')" },
      { description: 'not a string', assertion: "expect(typeof parseInt('42') === 'string').toBe(false)" },
      { description: 'is truthy', assertion: "expect(parseInt('42')).toBeTruthy()" },
      { description: 'equals 42', assertion: "expect(result).toBe(true)" },
    ],
    hints: ['parseInt converts a string to an integer.'],
    tags: ['globalfunctions', 'parseInt', 'number'],
    usageExample: {
      code: `parseInt('42')         // → 42
typeof parseInt('42')  // → 'number'`,
      explanation: {
        en: 'parseInt() parses a string and returns the first integer it finds.',
        es: 'parseInt() analiza una cadena y devuelve el primer entero que encuentra.',
      },
    },
  },
  {
    slug: 'global-parseint-2',
    title: 'parseInt — binary radix',
    description: `## parseInt with Radix\n\n\`parseInt('10', 2)\` parses \`'10'\` as binary, returning \`2\`.\n\n**Challenge:** Verify the binary parse.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'GlobalFunctions',
    method: 'parseInt',
    initialCode: `parseInt('10', 2)`,
    solution: `parseInt('10', 2) === 2`,
    tests: [
      { description: "result", assertion: "expect(parseInt('10', 2)).toBe(2)" },
      { description: 'result is a number', assertion: "expect(typeof parseInt('10', 2)).toBe('number')" },
      { description: 'not NaN', assertion: "expect(isNaN(parseInt('10', 2))).toBe(false)" },
      { description: 'is truthy', assertion: "expect(parseInt('10', 2)).toBeTruthy()" },
      { description: "equals 2 (binary '10')", assertion: "expect(result).toBe(true)" },
    ],
    hints: ["The second argument to parseInt is the radix (base). Base 2 means binary."],
    tags: ['globalfunctions', 'parseInt', 'radix', 'binary'],
    usageExample: {
      code: `parseInt('10', 2)    // → 2   (binary 10 = decimal 2)
parseInt('1010', 2)  // → 10`,
      explanation: {
        en: 'The second argument is the radix — parseInt(\'10\', 2) treats the string as binary.',
        es: 'El segundo argumento es la base: parseInt(\'10\', 2) trata la cadena como binario.',
      },
    },
  },
  {
    slug: 'global-parseint-3',
    title: 'parseInt — hexadecimal radix',
    description: `## parseInt with Hex\n\n\`parseInt('ff', 16)\` parses hex \`ff\`, returning \`255\`.\n\n**Challenge:** Verify the hex parse.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'GlobalFunctions',
    method: 'parseInt',
    initialCode: `parseInt('ff', 16)`,
    solution: `parseInt('ff', 16) === 255`,
    tests: [
      { description: "result", assertion: "expect(parseInt('ff', 16)).toBe(255)" },
      { description: 'result is a number', assertion: "expect(typeof parseInt('ff', 16)).toBe('number')" },
      { description: 'not NaN', assertion: "expect(isNaN(parseInt('ff', 16))).toBe(false)" },
      { description: 'is truthy', assertion: "expect(parseInt('ff', 16)).toBeTruthy()" },
      { description: 'equals 255', assertion: "expect(result).toBe(true)" },
    ],
    hints: ["Base 16 is hexadecimal. 'ff' in hex equals 255 in decimal."],
    tags: ['globalfunctions', 'parseInt', 'radix', 'hex'],
    usageExample: {
      code: `parseInt('ff', 16)   // → 255
parseInt('FF', 16)   // → 255  (case-insensitive)`,
      explanation: {
        en: 'parseInt(\'ff\', 16) parses hexadecimal — ff equals 255 in decimal.',
        es: 'parseInt(\'ff\', 16) analiza hexadecimal; ff equivale a 255 en decimal.',
      },
    },
  },
  {
    slug: 'global-parseint-4',
    title: 'parseInt — truncates decimal',
    description: `## parseInt Truncates\n\n\`parseInt('3.14')\` truncates the decimal part and returns \`3\`.\n\n**Challenge:** Verify the truncation.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'GlobalFunctions',
    method: 'parseInt',
    initialCode: `parseInt('3.14')`,
    solution: `parseInt('3.14') === 3`,
    tests: [
      { description: "result", assertion: "expect(parseInt('3.14')).toBe(3)" },
      { description: 'result is a number', assertion: "expect(typeof parseInt('3.14')).toBe('number')" },
      { description: 'not 3.14', assertion: "expect(result.14).toBe(false)" },
      { description: 'not NaN', assertion: "expect(isNaN(parseInt('3.14'))).toBe(false)" },
      { description: 'equals 3', assertion: "expect(result).toBe(true)" },
    ],
    hints: ['parseInt stops parsing at the decimal point.'],
    tags: ['globalfunctions', 'parseInt', 'truncate'],
    usageExample: {
      code: `parseInt('3.14')   // → 3
parseInt('3.99')   // → 3  (truncates, does not round)`,
      explanation: {
        en: 'parseInt() stops at the decimal point, truncating (not rounding) the fractional part.',
        es: 'parseInt() se detiene en el punto decimal, truncando (no redondeando) la parte fraccionaria.',
      },
    },
  },
  {
    slug: 'global-parseint-5',
    title: 'parseInt — non-numeric string returns NaN',
    description: `## parseInt NaN\n\n\`parseInt('abc')\` cannot be parsed and returns \`NaN\`.\n\n**Challenge:** Verify that \`isNaN(parseInt('abc'))\` is true.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'GlobalFunctions',
    method: 'parseInt',
    initialCode: `isNaN(parseInt('abc'))`,
    solution: `isNaN(parseInt('abc')) === true`,
    tests: [
      { description: "isNaN(parseInt('abc')) is true", assertion: "expect(isNaN(parseInt('abc'))).toBe(true)" },
      { description: 'result is NaN', assertion: "expect(parseInt('abc')).toBeNaN ? expect(isNaN(parseInt('abc'))).toBe(true) : expect(isNaN(parseInt('abc'))).toBe(true)" },
      { description: 'typeof is number', assertion: "expect(typeof parseInt('abc')).toBe('number')" },
      { description: 'not finite', assertion: "expect(isFinite(parseInt('abc'))).toBe(false)" },
      { description: 'NaN !== NaN', assertion: "expect(parseInt('abc') === parseInt('abc')).toBe(false)" },
    ],
    hints: ['NaN is returned when a string cannot be converted to a number.'],
    tags: ['globalfunctions', 'parseInt', 'NaN'],
    usageExample: {
      code: `parseInt('abc')          // → NaN
isNaN(parseInt('abc'))   // → true`,
      explanation: {
        en: 'parseInt() returns NaN when the string does not start with a parseable integer.',
        es: 'parseInt() devuelve NaN cuando la cadena no comienza con un entero analizable.',
      },
    },
  },
]
