import type { Exercise } from '@/shared/types/exercises'

export const funcLengthExercises: Exercise[] = [
  {
    slug: 'function-length-three-params',
    title: 'Function.length — three parameters',
    description: `## fn.length

The \`length\` property of a function returns the number of formal parameters it expects (excluding rest parameters and defaults).

**Challenge:** Verify that \`function f(a, b, c) {}\` has \`f.length === 3\`.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'length',
    initialCode: `function getThreeParamLength(): number {
  function f(a: number, b: number, c: number) {}
  // Return f.length
}`,
    solution: `function getThreeParamLength(): number {
  function f(a: number, b: number, c: number) {}
  return f.length
}`,
    tests: [
      { description: 'f.length equals 3', assertion:'function f(a, b, c) {} expect(f.length).toBe(3)' },
      { description: 'result is number', assertion:"function f(a, b, c) {} expect(typeof f.length).toBe('number')" },
      { description: 'f.length === 3 is true', assertion:'function f(a, b, c) {} expect(f.length === 3).toBe(true)' },
      { description: 'length is truthy', assertion:'function f(a, b, c) {} expect(f.length).toBeTruthy()' },
      { description: 'not zero', assertion:'function f(a, b, c) {} expect(f.length !== 0).toBe(true)' },
    ],
    hints: [
      '`fn.length` counts only the positional parameters before any defaults or rest.',
    ],
    tags: ['Function', 'length', 'beginner'],
    usageExample: {
      code: `function fn(a, b, c) {}
fn.length  // → 3`,
      explanation: {
        en: "Function.length returns the number of declared parameters.",
        es: "Function.length devuelve el número de parámetros declarados.",
      },
    },
  },
  {
    slug: 'function-length-zero-params',
    title: 'Function.length — zero parameters',
    description: `## fn.length — no parameters

A function with no parameters has a \`length\` of \`0\`.

**Challenge:** Verify that \`function g() {}\` has \`g.length === 0\`.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'length',
    initialCode: `function getZeroParamLength(): number {
  function g() {}
  // Return g.length
}`,
    solution: `function getZeroParamLength(): number {
  function g() {}
  return g.length
}`,
    tests: [
      { description: 'g.length equals 0', assertion:'function g() {} expect(g.length).toBe(0)' },
      { description: 'result is number', assertion:"function g() {} expect(typeof g.length).toBe('number')" },
      { description: 'g.length === 0 is true', assertion:'function g() {} expect(g.length === 0).toBe(true)' },
      { description: 'length is not negative', assertion:'function g() {} expect(g.length >= 0).toBe(true)' },
      { description: 'length is falsy (0)', assertion:'function g() {} expect(g.length).toBeFalsy()' },
    ],
    hints: [
      'A function with no declared parameters has `length` of `0`.',
    ],
    tags: ['Function', 'length', 'beginner'],
    usageExample: {
      code: `function fn(a, b = 1) {}
fn.length  // → 1 (default params not counted)`,
      explanation: {
        en: "Parameters with default values are not counted in Function.length.",
        es: "Los parámetros con valores por defecto no se cuentan en Function.length.",
      },
    },
  },
  {
    slug: 'function-length-default-params',
    title: 'Function.length — default parameters not counted',
    description: `## fn.length — defaults excluded

Parameters with default values are **not** counted in \`fn.length\`. Only the parameters before the first default are counted.

**Challenge:** Verify that \`function h(a, b = 1) {}\` has \`h.length === 1\`.`,
    category: 'instance-property',
    difficulty: 'intermediate',
    builtIn: 'Function',
    method: 'length',
    initialCode: `function getLengthWithDefault(): number {
  function h(a: number, b = 1) {}
  // Return h.length
}`,
    solution: `function getLengthWithDefault(): number {
  function h(a: number, b = 1) {}
  return h.length
}`,
    tests: [
      { description: 'h.length equals 1', assertion:'function h(a, b = 1) {} expect(h.length).toBe(1)' },
      { description: 'result is number', assertion:"function h(a, b = 1) {} expect(typeof h.length).toBe('number')" },
      { description: 'h.length === 1 is true', assertion:'function h(a, b = 1) {} expect(h.length === 1).toBe(true)' },
      { description: 'not equal to 2', assertion:'function h(a, b = 1) {} expect(h.length !== 2).toBe(true)' },
      { description: 'result is truthy', assertion:'function h(a, b = 1) {} expect(h.length).toBeTruthy()' },
    ],
    hints: [
      'Parameters with defaults do not count towards `fn.length`.',
    ],
    tags: ['Function', 'length', 'default params', 'intermediate'],
    usageExample: {
      code: `function fn(...args) {}
fn.length  // → 0 (rest params not counted)`,
      explanation: {
        en: "Rest parameters are not included in Function.length.",
        es: "Los parámetros rest no se incluyen en Function.length.",
      },
    },
  },
  {
    slug: 'function-length-rest-params',
    title: 'Function.length — rest parameters not counted',
    description: `## fn.length — rest params excluded

Rest parameters (\`...args\`) are never counted in \`fn.length\`. A function with only a rest parameter has \`length === 0\`.

**Challenge:** Verify that \`((...args) => {}).length === 0\`.`,
    category: 'instance-property',
    difficulty: 'intermediate',
    builtIn: 'Function',
    method: 'length',
    initialCode: `function getRestParamLength(): number {
  const fn = (...args: unknown[]) => {}
  // Return fn.length
}`,
    solution: `function getRestParamLength(): number {
  const fn = (...args: unknown[]) => {}
  return fn.length
}`,
    tests: [
      { description: 'rest-only fn has length 0', assertion:'expect(((...args) => {}).length).toBe(0)' },
      { description: 'result equals 0', assertion:'expect(((...args) => {}).length === 0).toBe(true)' },
      { description: 'result is number', assertion:"expect(typeof ((...args) => {}).length).toBe('number')" },
      { description: 'result is falsy', assertion:'expect(((...args) => {}).length).toBeFalsy()' },
      { description: 'not equal to 1', assertion:'expect(((...args) => {}).length !== 1).toBe(true)' },
    ],
    hints: [
      'Rest parameters (`...args`) are excluded from `fn.length`.',
    ],
    tags: ['Function', 'length', 'rest params', 'intermediate'],
    usageExample: {
      code: `const arrow = (a, b) => a + b
arrow.length  // → 2`,
      explanation: {
        en: "Arrow functions also have a length property reflecting their parameter count.",
        es: "Las funciones flecha también tienen una propiedad length que refleja su conteo de parámetros.",
      },
    },
  },
  {
    slug: 'function-length-typeof',
    title: 'Function.length — typeof',
    description: `## typeof fn.length

\`fn.length\` is always a number. \`typeof ((a) => {}).length\` returns \`'number'\`.

**Challenge:** Verify that \`typeof ((a) => {}).length\` returns \`'number'\`.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'length',
    initialCode: `function checkLengthType(): string {
  // Return typeof ((a) => {}).length
}`,
    solution: `function checkLengthType(): string {
  return typeof ((a: unknown) => {}).length
}`,
    tests: [
      { description: 'typeof length is number', assertion:"expect(typeof ((a) => {}).length).toBe('number')" },
      { description: 'result equals number string', assertion:"expect(typeof ((a) => {}).length === 'number').toBe(true)" },
      { description: 'length value is 1', assertion:'expect(((a) => {}).length).toBe(1)' },
      { description: 'length is truthy', assertion:'expect(((a) => {}).length).toBeTruthy()' },
      { description: 'not string', assertion:"expect(typeof ((a) => {}).length !== 'string').toBe(true)" },
    ],
    hints: [
      '`fn.length` is always a non-negative integer — a `number`.',
    ],
    tags: ['Function', 'length', 'typeof', 'beginner'],
    usageExample: {
      code: `function fn(a, b, c, d = 0) {}
fn.length  // → 3`,
      explanation: {
        en: "Only parameters before the first default are counted in length.",
        es: "Solo los parámetros antes del primer valor por defecto se cuentan en length.",
      },
    },
  },
]
