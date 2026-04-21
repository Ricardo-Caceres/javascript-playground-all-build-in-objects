import type { Exercise } from '@/shared/types/exercises'

export const reflectGetExercises: Exercise[] = [
  {
    slug: 'reflect-get-basic',
    title: 'Reflect.get() — basic property read',
    description: `## Reflect.get(target, key)

\`Reflect.get()\` reads a property from an object, mirroring the \`target[key]\` operation.

**Challenge:** Verify that \`Reflect.get({x: 1}, 'x')\` returns \`1\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'get',
    initialCode: `function reflectGetX(): number {
  return Reflect.get({ x: 1 }, 'x')
}`,
    solution: `function reflectGetX(): number {
  return Reflect.get({ x: 1 }, 'x')
}`,
    tests: [
      { description: 'Reflect.get({x:1}, x) returns 1', assertion:"expect(Reflect.get({x: 1}, 'x')).toBe(1)" },
      { description: 'result equals 1', assertion:"expect(Reflect.get({x: 1}, 'x') === 1).toBe(true)" },
      { description: 'result is number', assertion:"expect(typeof Reflect.get({x: 1}, 'x')).toBe('number')" },
      { description: 'result is truthy', assertion:"expect(Reflect.get({x: 1}, 'x')).toBeTruthy()" },
      { description: 'get value 42', assertion:"expect(Reflect.get({x: 42}, 'x')).toBe(42)" },
    ],
    hints: [
      '`Reflect.get(target, key)` is equivalent to `target[key]`.',
    ],
    tags: ['Reflect', 'get', 'beginner'],
    usageExample: {
      code: `const obj = { name: 'Alice', age: 30 }
const name = Reflect.get(obj, 'name')
console.log(name) // → 'Alice'`,
      explanation: {
        en: 'Reflect.get() retrieves the value of a property on an object, equivalent to obj[key].',
        es: 'Reflect.get() obtiene el valor de una propiedad en un objeto, equivalente a obj[key].',
      },
    },
  },
  {
    slug: 'reflect-get-array-index',
    title: 'Reflect.get() — array index',
    description: `## Reflect.get() with arrays

\`Reflect.get()\` works on arrays too — use a numeric index as the key (as a string or number).

**Challenge:** Verify that \`Reflect.get([10, 20], 1)\` returns \`20\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'get',
    initialCode: `function reflectGetArrayIndex(): number {
  return Reflect.get([10, 20], 1)
}`,
    solution: `function reflectGetArrayIndex(): number {
  return Reflect.get([10, 20], 1)
}`,
    tests: [
      { description: 'Reflect.get([10,20], 1) returns 20', assertion:'expect(Reflect.get([10, 20], 1)).toBe(20)' },
      { description: 'result equals 20', assertion:'expect(Reflect.get([10, 20], 1) === 20).toBe(true)' },
      { description: 'result is number', assertion:"expect(typeof Reflect.get([10, 20], 1)).toBe('number')" },
      { description: 'index 0 returns 10', assertion:'expect(Reflect.get([10, 20], 0)).toBe(10)' },
      { description: 'result is truthy', assertion:'expect(Reflect.get([10, 20], 1)).toBeTruthy()' },
    ],
    hints: [
      '`Reflect.get` works on any object including arrays.',
    ],
    tags: ['Reflect', 'get', 'array', 'beginner'],
    usageExample: {
      code: `const obj = { name: 'Alice', age: 30 }
const name = Reflect.get(obj, 'name')
console.log(name) // → 'Alice'`,
      explanation: {
        en: 'Reflect.get() retrieves the value of a property on an object, equivalent to obj[key].',
        es: 'Reflect.get() obtiene el valor de una propiedad en un objeto, equivalente a obj[key].',
      },
    },
  },
  {
    slug: 'reflect-get-missing-key',
    title: 'Reflect.get() — missing key returns undefined',
    description: `## Reflect.get() — missing key

Reading a non-existent key with \`Reflect.get()\` returns \`undefined\`, just like \`obj[key]\`.

**Challenge:** Verify that \`Reflect.get({}, 'missing')\` returns \`undefined\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'get',
    initialCode: `function reflectGetMissing(): undefined {
  return Reflect.get({}, 'missing') as undefined
}`,
    solution: `function reflectGetMissing(): undefined {
  return Reflect.get({}, 'missing') as undefined
}`,
    tests: [
      { description: 'missing key returns undefined', assertion:"expect(Reflect.get({}, 'missing')).toBeUndefined()" },
      { description: 'result is undefined', assertion:"expect(Reflect.get({}, 'missing') === undefined).toBe(true)" },
      { description: 'null check', assertion:"expect(Reflect.get({}, 'missing') !== null).toBe(true)" },
      { description: 'not a string', assertion:"expect(typeof Reflect.get({}, 'missing') !== 'string').toBe(true)" },
      { description: 'result is falsy', assertion:"expect(Reflect.get({}, 'missing')).toBeFalsy()" },
    ],
    hints: [
      'Missing keys always return `undefined` in JavaScript.',
    ],
    tags: ['Reflect', 'get', 'undefined', 'beginner'],
    usageExample: {
      code: `const obj = { name: 'Alice', age: 30 }
const name = Reflect.get(obj, 'name')
console.log(name) // → 'Alice'`,
      explanation: {
        en: 'Reflect.get() retrieves the value of a property on an object, equivalent to obj[key].',
        es: 'Reflect.get() obtiene el valor de una propiedad en un objeto, equivalente a obj[key].',
      },
    },
  },
  {
    slug: 'reflect-get-typeof',
    title: 'Reflect.get — typeof',
    description: `## typeof Reflect.get

\`Reflect.get\` is a static method, so \`typeof Reflect.get\` returns \`'function'\`.

**Challenge:** Verify that \`typeof Reflect.get\` returns \`'function'\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'get',
    initialCode: `function checkReflectGetType(): string {
  return typeof Reflect.get
}`,
    solution: `function checkReflectGetType(): string {
  return typeof Reflect.get
}`,
    tests: [
      { description: 'typeof Reflect.get is function', assertion:"expect(typeof Reflect.get).toBe('function')" },
      { description: 'Reflect.get is truthy', assertion:'expect(Reflect.get).toBeTruthy()' },
      { description: 'Reflect.get not null', assertion:'expect(Reflect.get !== null).toBe(true)' },
      { description: 'Reflect.get not undefined', assertion:'expect(Reflect.get !== undefined).toBe(true)' },
      { description: 'equals function string', assertion:"expect(typeof Reflect.get === 'function').toBe(true)" },
    ],
    hints: [
      '`Reflect` methods are all functions.',
    ],
    tags: ['Reflect', 'get', 'typeof', 'beginner'],
    usageExample: {
      code: `const obj = { name: 'Alice', age: 30 }
const name = Reflect.get(obj, 'name')
console.log(name) // → 'Alice'`,
      explanation: {
        en: 'Reflect.get() retrieves the value of a property on an object, equivalent to obj[key].',
        es: 'Reflect.get() obtiene el valor de una propiedad en un objeto, equivalente a obj[key].',
      },
    },
  },
  {
    slug: 'reflect-get-string-value',
    title: 'Reflect.get() — string value',
    description: `## Reflect.get() — returning a string

\`Reflect.get()\` can read string values from objects.

**Challenge:** Verify that \`Reflect.get({a: 'hello'}, 'a')\` returns \`'hello'\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'get',
    initialCode: `function reflectGetString(): string {
  return Reflect.get({ a: 'hello' }, 'a') as string
}`,
    solution: `function reflectGetString(): string {
  return Reflect.get({ a: 'hello' }, 'a') as string
}`,
    tests: [
      { description: 'returns hello', assertion:"expect(Reflect.get({a: 'hello'}, 'a')).toBe('hello')" },
      { description: 'equals hello string', assertion:"expect(Reflect.get({a: 'hello'}, 'a') === 'hello').toBe(true)" },
      { description: 'result is string', assertion:"expect(typeof Reflect.get({a: 'hello'}, 'a')).toBe('string')" },
      { description: 'result is truthy', assertion:"expect(Reflect.get({a: 'hello'}, 'a')).toBeTruthy()" },
      { description: 'contains hello', assertion:"expect(Reflect.get({a: 'hello'}, 'a')).toContain('hello')" },
    ],
    hints: [
      '`Reflect.get` is just a functional form of the property access operator.',
    ],
    tags: ['Reflect', 'get', 'beginner'],
    usageExample: {
      code: `const obj = { name: 'Alice', age: 30 }
const name = Reflect.get(obj, 'name')
console.log(name) // → 'Alice'`,
      explanation: {
        en: 'Reflect.get() retrieves the value of a property on an object, equivalent to obj[key].',
        es: 'Reflect.get() obtiene el valor de una propiedad en un objeto, equivalente a obj[key].',
      },
    },
  },
]
