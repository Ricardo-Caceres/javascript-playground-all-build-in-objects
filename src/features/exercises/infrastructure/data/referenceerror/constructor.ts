import type { Exercise } from '@/shared/types/exercises'

export const referenceErrorExercises: Exercise[] = [
  {
    slug: 'referenceerror-constructor-1',
    title: 'ReferenceError — instanceof check',
    description: `## ReferenceError Constructor\n\n\`new ReferenceError('not defined')\` creates a ReferenceError instance.\n\n**Challenge:** Verify that a new ReferenceError is an instance of ReferenceError.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'ReferenceError',
    initialCode: `const err = new ReferenceError('not defined')\n`,
    solution: `new ReferenceError('not defined') instanceof ReferenceError`,
    tests: [
      { description: 'instanceof ReferenceError is truthy', assertion:"expect(result).toBeTruthy()" },
      { description: 'instanceof ReferenceError is true', assertion:"expect(new ReferenceError('x') instanceof ReferenceError).toBe(true)" },
      { description: 'is an object', assertion:"expect(typeof new ReferenceError('x')).toBe('object')" },
      { description: 'is not null', assertion:"expect(new ReferenceError('x') !== null).toBe(true)" },
      { description: 'is truthy', assertion:"expect(new ReferenceError('x')).toBeTruthy()" },
    ],
    hints: ['Use new ReferenceError(message) to create a ReferenceError instance.'],
    tags: ['referenceerror', 'constructor', 'instanceof'],
    usageExample: {
      code: `try {
  console.log(undeclaredVar)
} catch (e) {
  e instanceof ReferenceError  // → true
}`,
      explanation: {
        en: "ReferenceError is thrown when you try to access a variable that has not been declared.",
        es: "ReferenceError se lanza cuando intentas acceder a una variable que no ha sido declarada.",
      },
    },
  },
  {
    slug: 'referenceerror-constructor-2',
    title: 'ReferenceError — also an Error',
    description: `## ReferenceError extends Error\n\nReferenceError extends the built-in Error class.\n\n**Challenge:** Verify that a ReferenceError is also an instance of Error.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'ReferenceError',
    initialCode: `const err = new ReferenceError()\n`,
    solution: `new ReferenceError() instanceof Error`,
    tests: [
      { description: 'instanceof Error is true', assertion:"expect(result).toBe(true)" },
      { description: 'instanceof ReferenceError is true', assertion:"expect(new ReferenceError() instanceof ReferenceError).toBe(true)" },
      { description: 'instanceof Object is true', assertion:"expect(new ReferenceError() instanceof Object).toBe(true)" },
      { description: 'is truthy', assertion:"expect(new ReferenceError()).toBeTruthy()" },
      { description: 'is an object', assertion:"expect(typeof new ReferenceError()).toBe('object')" },
    ],
    hints: ['ReferenceError inherits from Error in the prototype chain.'],
    tags: ['referenceerror', 'constructor', 'instanceof', 'error'],
    usageExample: {
      code: `new ReferenceError('x is not defined').message  // → 'x is not defined'`,
      explanation: {
        en: "You can create a ReferenceError manually to signal missing variable access.",
        es: "Puedes crear un ReferenceError manualmente para señalar el acceso a una variable faltante.",
      },
    },
  },
  {
    slug: 'referenceerror-constructor-3',
    title: 'ReferenceError — .message property',
    description: `## ReferenceError Message\n\nThe message passed to \`new ReferenceError(message)\` is stored in \`.message\`.\n\n**Challenge:** Verify the \`.message\` property.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'ReferenceError',
    initialCode: `const err = new ReferenceError('x is not defined')\n`,
    solution: `new ReferenceError('x is not defined').message`,
    tests: [
      { description: "message is 'x is not defined'", assertion:"expect(result).toBe('x is not defined')" },
      { description: 'message matches input', assertion:"expect(new ReferenceError('hello').message).toBe('hello')" },
      { description: 'message is a string', assertion:"expect(typeof new ReferenceError('x').message).toBe('string')" },
      { description: 'message is accessible', assertion:"expect(new ReferenceError('test').message).toBeTruthy()" },
      { description: 'empty message is empty string', assertion:"expect(new ReferenceError('').message).toBe('')" },
    ],
    hints: ['The message is stored in the .message property.'],
    tags: ['referenceerror', 'constructor', 'message'],
    usageExample: {
      code: `new ReferenceError('oops').name  // → 'ReferenceError'`,
      explanation: {
        en: "The name property of a ReferenceError is always 'ReferenceError'.",
        es: "La propiedad name de un ReferenceError siempre es 'ReferenceError'.",
      },
    },
  },
  {
    slug: 'referenceerror-constructor-4',
    title: 'ReferenceError — .name property',
    description: `## ReferenceError Name\n\nEvery ReferenceError has a \`.name\` property equal to \`'ReferenceError'\`.\n\n**Challenge:** Verify the \`.name\` property.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'ReferenceError',
    initialCode: `const err = new ReferenceError()\n`,
    solution: `new ReferenceError().name`,
    tests: [
      { description: "name is 'ReferenceError'", assertion:"expect(result).toBe('ReferenceError')" },
      { description: 'name is a string', assertion:"expect(typeof result).toBe('string')" },
      { description: 'name is truthy', assertion:"expect(result).toBeTruthy()" },
      { description: 'name does not equal Error', assertion:"expect(result !== 'Error').toBe(true)" },
      { description: 'name is consistent', assertion:"expect(new ReferenceError('x').name).toBe('ReferenceError')" },
    ],
    hints: ['Error subtypes have a .name property matching their constructor name.'],
    tags: ['referenceerror', 'constructor', 'name'],
    usageExample: {
      code: `new ReferenceError() instanceof Error  // → true`,
      explanation: {
        en: "ReferenceError is a subtype of Error and inherits all standard error properties.",
        es: "ReferenceError es un subtipo de Error y hereda todas las propiedades estándar de error.",
      },
    },
  },
  {
    slug: 'referenceerror-constructor-5',
    title: 'ReferenceError — throw and catch',
    description: `## Catching ReferenceError\n\nYou can manually throw and catch a ReferenceError.\n\n**Challenge:** Throw a ReferenceError and return its \`.name\` from the catch block.`,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'ReferenceError',
    initialCode: `function throwRef() {
  try {
    // Throw a ReferenceError manually
  } catch (e) {
    return (e as ReferenceError).name;
  }
}`,
    solution: `function throwRef() {
  try {
    throw new ReferenceError('test');
  } catch (e) {
    return (e as ReferenceError).name;
  }
}`,
    tests: [
      { description: "returns 'ReferenceError'", assertion:"function throwRef() { try { throw new ReferenceError('test'); } catch(e) { return e.name; } } expect(throwRef()).toBe('ReferenceError')" },
      { description: 'caught error is a ReferenceError', assertion:"function throwRef2() { try { throw new ReferenceError('test'); } catch(e) { return e instanceof ReferenceError; } } expect(throwRef2()).toBe(true)" },
      { description: 'caught error is also an Error', assertion:"function throwRef3() { try { throw new ReferenceError('test'); } catch(e) { return e instanceof Error; } } expect(throwRef3()).toBe(true)" },
      { description: 'caught error has a message', assertion:"function throwRef4() { try { throw new ReferenceError('test'); } catch(e) { return e.message; } } expect(throwRef4()).toBe('test')" },
      { description: 'throws a ReferenceError', assertion:"expect(() => { throw new ReferenceError('test'); }).toThrow(ReferenceError)" },
    ],
    hints: ['Use throw new ReferenceError(message) to manually throw a ReferenceError.'],
    tags: ['referenceerror', 'constructor', 'throw', 'catch'],
    usageExample: {
      code: `try {
  null.property
} catch (e) {
  // this is a TypeError, not ReferenceError
  e instanceof TypeError  // → true
}`,
      explanation: {
        en: "Distinguish ReferenceError (undeclared variable) from TypeError (wrong type operation).",
        es: "Distingue ReferenceError (variable no declarada) de TypeError (operación de tipo incorrecto).",
      },
    },
  },
]
