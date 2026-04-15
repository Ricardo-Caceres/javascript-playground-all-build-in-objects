import type { Exercise } from '@/shared/types/exercises'

export const globalThisExercises: Exercise[] = [
  {
    slug: 'globalthis-typeof',
    title: 'typeof globalThis',
    description: 'Verify that globalThis is always an object, regardless of the execution environment.',
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'globalThis',
    initialCode: `function checkGlobalThisType() {
  // Return the typeof globalThis
}`,
    solution: `function checkGlobalThisType() {
  return typeof globalThis;
}`,
    tests: [
      {
        description: 'typeof globalThis is "object"',
        assertion: `expect(checkGlobalThisType()).toBe('object');`,
      },
      {
        description: 'typeof globalThis is truthy',
        assertion: `expect(typeof globalThis === 'object').toBeTruthy();`,
      },
      {
        description: 'globalThis is not null',
        assertion: `expect(globalThis !== null).toBeTruthy();`,
      },
      {
        description: 'globalThis is not undefined',
        assertion: `expect(globalThis !== undefined).toBeTruthy();`,
      },
      {
        description: 'globalThis is not a primitive',
        assertion: `expect(typeof globalThis !== 'string').toBeTruthy();`,
      },
    ],
    hints: ['globalThis always refers to the global object'],
    tags: [],
  },
  {
    slug: 'globalthis-same-reference',
    title: 'globalThis Is the Same Object',
    description: 'Verify that globalThis refers to itself consistently — same reference every time.',
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'globalThis',
    initialCode: `function checkGlobalThisSameRef() {
  // Return whether globalThis === globalThis
}`,
    solution: `function checkGlobalThisSameRef() {
  return globalThis === globalThis;
}`,
    tests: [
      {
        description: 'globalThis === globalThis is true',
        assertion: `expect(checkGlobalThisSameRef()).toBe(true);`,
      },
      {
        description: 'globalThis reference is stable',
        assertion: `expect(globalThis === globalThis).toBeTruthy();`,
      },
      {
        description: 'globalThis is strictly equal to itself',
        assertion: `const g = globalThis; expect(g === globalThis).toBe(true);`,
      },
      {
        description: 'globalThis is not a new object each time',
        assertion: `expect(Object.is(globalThis, globalThis)).toBe(true);`,
      },
      {
        description: 'globalThis has properties',
        assertion: `expect(Object.keys(globalThis).length >= 0).toBeTruthy();`,
      },
    ],
    hints: ['globalThis is a single shared object reference'],
    tags: [],
  },
  {
    slug: 'globalthis-parseint',
    title: 'globalThis.parseInt',
    description: 'Access the global parseInt function via globalThis.',
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'globalThis',
    initialCode: `function checkGlobalParseInt() {
  // Return whether globalThis.parseInt === parseInt
}`,
    solution: `function checkGlobalParseInt() {
  return globalThis.parseInt === parseInt;
}`,
    tests: [
      {
        description: 'globalThis.parseInt equals parseInt',
        assertion: `expect(checkGlobalParseInt()).toBe(true);`,
      },
      {
        description: 'globalThis.parseInt is a function',
        assertion: `expect(typeof globalThis.parseInt === 'function').toBeTruthy();`,
      },
      {
        description: 'globalThis.parseInt works correctly',
        assertion: `expect(globalThis.parseInt('42')).toBe(42);`,
      },
      {
        description: 'Direct parseInt and globalThis.parseInt same result',
        assertion: `expect(globalThis.parseInt('10', 16)).toBe(parseInt('10', 16));`,
      },
      {
        description: 'globalThis.parseInt is strictly equal to parseInt',
        assertion: `expect(globalThis.parseInt === parseInt).toBe(true);`,
      },
    ],
    hints: ['Global functions are accessible as properties of globalThis'],
    tags: [],
  },
  {
    slug: 'globalthis-isnan',
    title: 'globalThis.isNaN',
    description: 'Access the global isNaN function via globalThis.',
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'globalThis',
    initialCode: `function checkGlobalIsNaN() {
  // Return whether globalThis.isNaN === isNaN
}`,
    solution: `function checkGlobalIsNaN() {
  return globalThis.isNaN === isNaN;
}`,
    tests: [
      {
        description: 'globalThis.isNaN equals isNaN',
        assertion: `expect(checkGlobalIsNaN()).toBe(true);`,
      },
      {
        description: 'globalThis.isNaN is a function',
        assertion: `expect(typeof globalThis.isNaN === 'function').toBeTruthy();`,
      },
      {
        description: 'globalThis.isNaN(NaN) is true',
        assertion: `expect(globalThis.isNaN(NaN)).toBe(true);`,
      },
      {
        description: 'globalThis.isNaN(42) is false',
        assertion: `expect(globalThis.isNaN(42)).toBe(false);`,
      },
      {
        description: 'globalThis.isNaN strictly equals isNaN',
        assertion: `expect(globalThis.isNaN === isNaN).toBe(true);`,
      },
    ],
    hints: ['isNaN is a property of globalThis'],
    tags: [],
  },
  {
    slug: 'globalthis-math',
    title: 'globalThis.Math',
    description: 'Access the Math object via globalThis.',
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'globalThis',
    initialCode: `function checkGlobalMath() {
  // Return whether globalThis.Math === Math
}`,
    solution: `function checkGlobalMath() {
  return globalThis.Math === Math;
}`,
    tests: [
      {
        description: 'globalThis.Math equals Math',
        assertion: `expect(checkGlobalMath()).toBe(true);`,
      },
      {
        description: 'globalThis.Math is an object',
        assertion: `expect(typeof globalThis.Math === 'object').toBeTruthy();`,
      },
      {
        description: 'globalThis.Math.PI exists',
        assertion: `expect(globalThis.Math.PI).toBe(Math.PI);`,
      },
      {
        description: 'globalThis.Math.floor works',
        assertion: `expect(globalThis.Math.floor(2.7)).toBe(2);`,
      },
      {
        description: 'globalThis.Math is strictly equal to Math',
        assertion: `expect(globalThis.Math === Math).toBe(true);`,
      },
    ],
    hints: ['Math is accessible as globalThis.Math'],
    tags: [],
  },
]
