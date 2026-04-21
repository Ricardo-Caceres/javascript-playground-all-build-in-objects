import type { Exercise } from '@/shared/types/exercises'

export const getPrototypeOfExercises: Exercise[] = [
  {
    slug: 'object-get-prototype-of-plain',
    title: 'Object.getPrototypeOf() — plain object prototype',
    description: `## Object.getPrototypeOf()

\`Object.getPrototypeOf(obj)\` returns the prototype of \`obj\`. For plain objects created with \`{}\` or \`new Object()\`, the prototype is \`Object.prototype\`.

**Challenge:** Implement \`plainProtoIsObjectProto()\` that creates \`{}\` and returns whether its prototype is \`Object.prototype\`.

\`\`\`ts
plainProtoIsObjectProto() // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.getPrototypeOf',
    initialCode: `function plainProtoIsObjectProto(): boolean {
  // Return true if Object.getPrototypeOf({}) === Object.prototype
}`,
    solution: `function plainProtoIsObjectProto(): boolean {
  return Object.getPrototypeOf({}) === Object.prototype
}`,
    tests: [
      { description: 'plain object prototype is Object.prototype', assertion:"expect(plainProtoIsObjectProto()).toBe(true)" },
      { description: 'new Object() also has Object.prototype', assertion:"expect(Object.getPrototypeOf(new Object()) === Object.prototype).toBe(true)" },
      { description: 'Object.prototype has toString', assertion:"expect(typeof Object.prototype.toString).toBe('function')" },
      { description: 'prototype is not null', assertion:"expect(Object.getPrototypeOf({}) !== null).toBe(true)" },
      { description: 'prototype of prototype is null', assertion:"expect(Object.getPrototypeOf(Object.prototype)).toBeNull()" },
    ],
    hints: [
      '`Object.getPrototypeOf({})` returns `Object.prototype` — the root of most prototype chains.',
    ],
    tags: ['Object', 'Object.getPrototypeOf', 'prototype', 'beginner'],
    usageExample: {
      code: `// Get the prototype of an object
const arr = []
Object.getPrototypeOf(arr) === Array.prototype   // → true
Object.getPrototypeOf({}) === Object.prototype   // → true`,
      explanation: {
        en: 'Use Object.getPrototypeOf() to retrieve the prototype of an object, allowing you to inspect its inheritance chain.',
        es: 'Usa Object.getPrototypeOf() para obtener el prototipo de un objeto e inspeccionar su cadena de herencia.',
      },
    },
  },
  {
    slug: 'object-get-prototype-of-array',
    title: 'Object.getPrototypeOf() — array prototype',
    description: `## Object.getPrototypeOf() — arrays

Arrays are instances of \`Array\`, so their prototype is \`Array.prototype\`, not \`Object.prototype\` directly.

**Challenge:** Implement \`arrayProtoIsArrayProto()\` that returns whether the prototype of \`[]\` is \`Array.prototype\`.

\`\`\`ts
arrayProtoIsArrayProto() // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.getPrototypeOf',
    initialCode: `function arrayProtoIsArrayProto(): boolean {
  // Return true if Object.getPrototypeOf([]) === Array.prototype
}`,
    solution: `function arrayProtoIsArrayProto(): boolean {
  return Object.getPrototypeOf([]) === Array.prototype
}`,
    tests: [
      { description: 'array prototype is Array.prototype', assertion:"expect(arrayProtoIsArrayProto()).toBe(true)" },
      { description: 'Array.prototype has push method', assertion:"expect(typeof Array.prototype.push).toBe('function')" },
      { description: 'array is not directly Object.prototype', assertion:"expect(Object.getPrototypeOf([]) === Object.prototype).toBe(false)" },
      { description: 'Array.prototype prototype is Object.prototype', assertion:"expect(Object.getPrototypeOf(Array.prototype) === Object.prototype).toBe(true)" },
      { description: 'new Array() same prototype', assertion:"expect(Object.getPrototypeOf(new Array()) === Array.prototype).toBe(true)" },
    ],
    hints: [
      'Arrays are instances of `Array`, whose prototype chain is `[] → Array.prototype → Object.prototype → null`.',
    ],
    tags: ['Object', 'Object.getPrototypeOf', 'array', 'beginner'],
    usageExample: {
      code: `// Get the prototype of an object
const arr = []
Object.getPrototypeOf(arr) === Array.prototype   // → true
Object.getPrototypeOf({}) === Object.prototype   // → true`,
      explanation: {
        en: 'Use Object.getPrototypeOf() to retrieve the prototype of an object, allowing you to inspect its inheritance chain.',
        es: 'Usa Object.getPrototypeOf() para obtener el prototipo de un objeto e inspeccionar su cadena de herencia.',
      },
    },
  },
  {
    slug: 'object-get-prototype-of-null-proto',
    title: 'Object.getPrototypeOf() — null prototype',
    description: `## Object.getPrototypeOf() — null

\`Object.create(null)\` creates an object with no prototype. \`Object.getPrototypeOf\` returns \`null\` for such objects.

**Challenge:** Implement \`nullProtoIsNull()\` that creates an object with \`Object.create(null)\` and returns whether its prototype is \`null\`.

\`\`\`ts
nullProtoIsNull() // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.getPrototypeOf',
    initialCode: `function nullProtoIsNull(): boolean {
  // Create Object.create(null) and check its prototype is null
}`,
    solution: `function nullProtoIsNull(): boolean {
  const obj = Object.create(null)
  return Object.getPrototypeOf(obj) === null
}`,
    tests: [
      { description: 'null-proto object returns null', assertion:"expect(nullProtoIsNull()).toBe(true)" },
      { description: 'null-proto object has no toString', assertion:"const o = Object.create(null); expect(o.toString).toBeUndefined()" },
      { description: 'Object.create(null) prototype is null', assertion:"expect(Object.getPrototypeOf(Object.create(null))).toBeNull()" },
      { description: 'plain object is not null-proto', assertion:"expect(Object.getPrototypeOf({}) !== null).toBe(true)" },
      { description: 'null-proto object can hold properties', assertion:"const o = Object.create(null); o.x = 1; expect(o.x).toBe(1)" },
    ],
    hints: [
      '`Object.create(null)` creates an object completely outside the normal prototype chain.',
    ],
    tags: ['Object', 'Object.getPrototypeOf', 'null prototype', 'beginner'],
    usageExample: {
      code: `// Get the prototype of an object
const arr = []
Object.getPrototypeOf(arr) === Array.prototype   // → true
Object.getPrototypeOf({}) === Object.prototype   // → true`,
      explanation: {
        en: 'Use Object.getPrototypeOf() to retrieve the prototype of an object, allowing you to inspect its inheritance chain.',
        es: 'Usa Object.getPrototypeOf() para obtener el prototipo de un objeto e inspeccionar su cadena de herencia.',
      },
    },
  },
  {
    slug: 'object-get-prototype-of-class',
    title: 'Object.getPrototypeOf() — class instance prototype',
    description: `## Object.getPrototypeOf() — classes

When you create an instance with \`new MyClass()\`, the prototype is \`MyClass.prototype\`.

**Challenge:** Implement \`classInstanceProto()\` that creates a class \`Foo\`, instantiates it, and returns whether the prototype is \`Foo.prototype\`.

\`\`\`ts
classInstanceProto() // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.getPrototypeOf',
    initialCode: `function classInstanceProto(): boolean {
  // Define a class Foo, instantiate it, and check Object.getPrototypeOf(instance) === Foo.prototype
}`,
    solution: `function classInstanceProto(): boolean {
  class Foo {}
  const instance = new Foo()
  return Object.getPrototypeOf(instance) === Foo.prototype
}`,
    tests: [
      { description: 'class instance prototype is Foo.prototype', assertion:"expect(classInstanceProto()).toBe(true)" },
      { description: 'class prototype is an object', assertion:"class Bar {}; expect(typeof Bar.prototype).toBe('object')" },
      { description: 'instance inherits class methods', assertion:"class Baz { greet() { return 'hi' } }; const b = new Baz(); expect(b.greet()).toBe('hi')" },
      { description: 'prototype of Foo.prototype is Object.prototype', assertion:"class Qux {}; expect(Object.getPrototypeOf(Qux.prototype) === Object.prototype).toBe(true)" },
      { description: 'two instances share same prototype', assertion:"class A {}; const a1 = new A(); const a2 = new A(); expect(Object.getPrototypeOf(a1) === Object.getPrototypeOf(a2)).toBe(true)" },
    ],
    hints: [
      '`new Foo()` sets the instance prototype to `Foo.prototype`.',
    ],
    tags: ['Object', 'Object.getPrototypeOf', 'class', 'intermediate'],
    usageExample: {
      code: `// Get the prototype of an object
const arr = []
Object.getPrototypeOf(arr) === Array.prototype   // → true
Object.getPrototypeOf({}) === Object.prototype   // → true`,
      explanation: {
        en: 'Use Object.getPrototypeOf() to retrieve the prototype of an object, allowing you to inspect its inheritance chain.',
        es: 'Usa Object.getPrototypeOf() para obtener el prototipo de un objeto e inspeccionar su cadena de herencia.',
      },
    },
  },
  {
    slug: 'object-get-prototype-of-function',
    title: 'Object.getPrototypeOf() — function prototype',
    description: `## Object.getPrototypeOf() — functions

Functions are objects too. The prototype of a function is \`Function.prototype\`.

**Challenge:** Implement \`fnProtoIsFunctionProto()\` that returns whether the prototype of a function is \`Function.prototype\`.

\`\`\`ts
fnProtoIsFunctionProto() // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.getPrototypeOf',
    initialCode: `function fnProtoIsFunctionProto(): boolean {
  // Return true if Object.getPrototypeOf(() => {}) === Function.prototype
}`,
    solution: `function fnProtoIsFunctionProto(): boolean {
  return Object.getPrototypeOf(() => {}) === Function.prototype
}`,
    tests: [
      { description: 'function prototype is Function.prototype', assertion:"expect(fnProtoIsFunctionProto()).toBe(true)" },
      { description: 'Function.prototype has call method', assertion:"expect(typeof Function.prototype.call).toBe('function')" },
      { description: 'function is not Object.prototype', assertion:"expect(Object.getPrototypeOf(() => {}) === Object.prototype).toBe(false)" },
      { description: 'Function.prototype prototype is Object.prototype', assertion:"expect(Object.getPrototypeOf(Function.prototype) === Object.prototype).toBe(true)" },
      { description: 'named function same prototype', assertion:"function named() {}; expect(Object.getPrototypeOf(named) === Function.prototype).toBe(true)" },
    ],
    hints: [
      'Functions are objects whose `[[Prototype]]` is `Function.prototype`.',
    ],
    tags: ['Object', 'Object.getPrototypeOf', 'function', 'intermediate'],
    usageExample: {
      code: `// Get the prototype of an object
const arr = []
Object.getPrototypeOf(arr) === Array.prototype   // → true
Object.getPrototypeOf({}) === Object.prototype   // → true`,
      explanation: {
        en: 'Use Object.getPrototypeOf() to retrieve the prototype of an object, allowing you to inspect its inheritance chain.',
        es: 'Usa Object.getPrototypeOf() para obtener el prototipo de un objeto e inspeccionar su cadena de herencia.',
      },
    },
  },
]
