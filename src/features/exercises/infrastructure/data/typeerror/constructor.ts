import type { Exercise } from '@/shared/types/exercises'

export const typeErrorExercises: Exercise[] = [
  {
    slug: 'typeerror-constructor-1',
    title: 'TypeError — instanceof check',
    description: `## TypeError Constructor\n\n\`new TypeError('msg')\` creates a TypeError instance.\n\n**Challenge:** Verify that a new TypeError is an instance of TypeError.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'TypeError',
    initialCode: `const err = new TypeError('bad type')\n`,
    solution: `new TypeError('bad type') instanceof TypeError`,
    tests: [
      { description: 'instanceof TypeError is truthy', assertion:"expect(result).toBeTruthy()" },
      { description: 'instanceof TypeError is true', assertion:"expect(new TypeError('x') instanceof TypeError).toBe(true)" },
      { description: 'is an object', assertion:"expect(typeof new TypeError('x')).toBe('object')" },
      { description: 'is not null', assertion:"expect(new TypeError('x') !== null).toBe(true)" },
      { description: 'is truthy', assertion:"expect(new TypeError('x')).toBeTruthy()" },
    ],
    hints: ['Use new TypeError(message) to create a TypeError instance.'],
    tags: ['typeerror', 'constructor', 'instanceof'],
    usageExample: {
      code: `null.toString()  // throws TypeError: Cannot read properties of null`,
      explanation: {
        en: "TypeError is thrown when an operation is applied to a value of the wrong type.",
        es: "TypeError se lanza cuando se aplica una operación a un valor de tipo incorrecto.",
      },
    },
  },
  {
    slug: 'typeerror-constructor-2',
    title: 'TypeError — also an Error',
    description: `## TypeError extends Error\n\nTypeError extends the built-in Error class.\n\n**Challenge:** Verify that a TypeError is also an instance of Error.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'TypeError',
    initialCode: `const err = new TypeError()\n`,
    solution: `new TypeError() instanceof Error`,
    tests: [
      { description: 'instanceof Error is true', assertion:"expect(result).toBe(true)" },
      { description: 'instanceof TypeError is true', assertion:"expect(new TypeError() instanceof TypeError).toBe(true)" },
      { description: 'instanceof Object is true', assertion:"expect(new TypeError() instanceof Object).toBe(true)" },
      { description: 'is truthy', assertion:"expect(new TypeError()).toBeTruthy()" },
      { description: 'is an object', assertion:"expect(typeof new TypeError()).toBe('object')" },
    ],
    hints: ['TypeError inherits from Error in the prototype chain.'],
    tags: ['typeerror', 'constructor', 'instanceof', 'error'],
    usageExample: {
      code: `new TypeError('Not a function').message  // → 'Not a function'`,
      explanation: {
        en: "Create a TypeError manually to signal that the wrong type of argument was passed.",
        es: "Crea un TypeError manualmente para señalar que se pasó un argumento del tipo incorrecto.",
      },
    },
  },
  {
    slug: 'typeerror-constructor-3',
    title: 'TypeError — .message property',
    description: `## TypeError Message\n\nThe message passed to \`new TypeError(message)\` is stored in \`.message\`.\n\n**Challenge:** Verify the \`.message\` property.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'TypeError',
    initialCode: `const err = new TypeError('bad type')\n`,
    solution: `new TypeError('bad type').message`,
    tests: [
      { description: "message is 'bad type'", assertion:"expect(result).toBe('bad type')" },
      { description: 'message matches input', assertion:"expect(new TypeError('hello').message).toBe('hello')" },
      { description: 'message is a string', assertion:"expect(typeof new TypeError('x').message).toBe('string')" },
      { description: 'message is accessible', assertion:"expect(new TypeError('test').message).toBeTruthy()" },
      { description: 'empty message is empty string', assertion:"expect(new TypeError('').message).toBe('')" },
    ],
    hints: ['The message is stored in the .message property.'],
    tags: ['typeerror', 'constructor', 'message'],
    usageExample: {
      code: `new TypeError('oops').name  // → 'TypeError'`,
      explanation: {
        en: "The name property of a TypeError is always 'TypeError'.",
        es: "La propiedad name de un TypeError siempre es 'TypeError'.",
      },
    },
  },
  {
    slug: 'typeerror-constructor-4',
    title: 'TypeError — .name property',
    description: `## TypeError Name\n\nEvery TypeError has a \`.name\` property equal to \`'TypeError'\`.\n\n**Challenge:** Verify the \`.name\` property.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'TypeError',
    initialCode: `const err = new TypeError()\n`,
    solution: `new TypeError().name`,
    tests: [
      { description: "name is 'TypeError'", assertion:"expect(result).toBe('TypeError')" },
      { description: 'name is a string', assertion:"expect(typeof result).toBe('string')" },
      { description: 'name is truthy', assertion:"expect(result).toBeTruthy()" },
      { description: 'name does not equal Error', assertion:"expect(result !== 'Error').toBe(true)" },
      { description: 'name is consistent', assertion:"expect(new TypeError('x').name).toBe('TypeError')" },
    ],
    hints: ['Error subtypes have a .name property matching their constructor name.'],
    tags: ['typeerror', 'constructor', 'name'],
    usageExample: {
      code: `new TypeError() instanceof Error  // → true`,
      explanation: {
        en: "TypeError is a subtype of Error and shares all standard error properties.",
        es: "TypeError es un subtipo de Error y comparte todas las propiedades estándar de error.",
      },
    },
  },
  {
    slug: 'typeerror-constructor-5',
    title: 'TypeError — throwing and catching',
    description: `## Catching TypeError\n\nAccessing a property on \`null\` throws a TypeError at runtime.\n\n**Challenge:** Catch the TypeError and verify it is an instance of TypeError.`,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'TypeError',
    initialCode: `function getType() {
  try {
    // Access a property on null to trigger a TypeError
  } catch (e) {
    return e instanceof TypeError;
  }
}`,
    solution: `function getType() {
  try {
    (null as any).property;
  } catch (e) {
    return e instanceof TypeError;
  }
}`,
    tests: [
      { description: 'returns true when TypeError is caught', assertion:"function getType() { try { (null).property; } catch(e) { return e instanceof TypeError; } } expect(getType()).toBe(true)" },
      { description: 'function returns a boolean', assertion:"function getType2() { try { (null).x; } catch(e) { return e instanceof TypeError; } } expect(typeof getType2()).toBe('boolean')" },
      { description: 'caught error is also an Error', assertion:"function getType3() { try { (null).x; } catch(e) { return e instanceof Error; } } expect(getType3()).toBe(true)" },
      { description: 'caught error has name TypeError', assertion:"function getType4() { try { (null).x; } catch(e) { return e.name; } } expect(getType4()).toBe('TypeError')" },
      { description: 'throws when accessing property on null', assertion:"expect(() => { (null).property; }).toThrow(TypeError)" },
    ],
    hints: ['Accessing a property on null or undefined throws a TypeError.'],
    tags: ['typeerror', 'constructor', 'throw', 'catch'],
    usageExample: {
      code: `undefined()  // throws TypeError: undefined is not a function`,
      explanation: {
        en: "Calling something that is not a function throws a TypeError.",
        es: "Llamar a algo que no es una función lanza un TypeError.",
      },
    },
  },
]
