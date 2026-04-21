import type { Exercise } from '@/shared/types/exercises'

export const rangeErrorExercises: Exercise[] = [
  {
    slug: 'rangeerror-constructor-1',
    title: 'RangeError — instanceof check',
    description: `## RangeError Constructor\n\n\`new RangeError('out of range')\` creates a RangeError instance.\n\n**Challenge:** Verify that a new RangeError is an instance of RangeError.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'RangeError',
    initialCode: `const err = new RangeError('out of range')\n`,
    solution: `new RangeError('out of range') instanceof RangeError`,
    tests: [
      { description: 'instanceof RangeError is truthy', assertion:"expect(result).toBeTruthy()" },
      { description: 'instanceof RangeError is true', assertion:"expect(new RangeError('x') instanceof RangeError).toBe(true)" },
      { description: 'is an object', assertion:"expect(typeof new RangeError('x')).toBe('object')" },
      { description: 'is not null', assertion:"expect(new RangeError('x') !== null).toBe(true)" },
      { description: 'is truthy', assertion:"expect(new RangeError('x')).toBeTruthy()" },
    ],
    hints: ['Use new RangeError(message) to create a RangeError instance.'],
    tags: ['rangeerror', 'constructor', 'instanceof'],
    usageExample: {
      code: `new Array(-1)  // throws RangeError: Invalid array length`,
      explanation: {
        en: "RangeError is thrown when a value is not within the allowed range.",
        es: "RangeError se lanza cuando un valor no está dentro del rango permitido.",
      },
    },
  },
  {
    slug: 'rangeerror-constructor-2',
    title: 'RangeError — also an Error',
    description: `## RangeError extends Error\n\nRangeError extends the built-in Error class.\n\n**Challenge:** Verify that a RangeError is also an instance of Error.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'RangeError',
    initialCode: `const err = new RangeError()\n`,
    solution: `new RangeError() instanceof Error`,
    tests: [
      { description: 'instanceof Error is true', assertion:"expect(result).toBe(true)" },
      { description: 'instanceof RangeError is true', assertion:"expect(new RangeError() instanceof RangeError).toBe(true)" },
      { description: 'instanceof Object is true', assertion:"expect(new RangeError() instanceof Object).toBe(true)" },
      { description: 'is truthy', assertion:"expect(new RangeError()).toBeTruthy()" },
      { description: 'is an object', assertion:"expect(typeof new RangeError()).toBe('object')" },
    ],
    hints: ['RangeError inherits from Error in the prototype chain.'],
    tags: ['rangeerror', 'constructor', 'instanceof', 'error'],
    usageExample: {
      code: `new RangeError('Value out of range').message  // → 'Value out of range'`,
      explanation: {
        en: "You can create a RangeError manually to signal out-of-range values.",
        es: "Puedes crear un RangeError manualmente para señalar valores fuera de rango.",
      },
    },
  },
  {
    slug: 'rangeerror-constructor-3',
    title: 'RangeError — .message property',
    description: `## RangeError Message\n\nThe message passed to \`new RangeError(message)\` is stored in \`.message\`.\n\n**Challenge:** Verify the \`.message\` property.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'RangeError',
    initialCode: `const err = new RangeError('bad range')\n`,
    solution: `new RangeError('bad range').message`,
    tests: [
      { description: "message is 'bad range'", assertion:"expect(result).toBe('bad range')" },
      { description: 'message matches input', assertion:"expect(new RangeError('hello').message).toBe('hello')" },
      { description: 'message is a string', assertion:"expect(typeof new RangeError('x').message).toBe('string')" },
      { description: 'message is accessible', assertion:"expect(new RangeError('test').message).toBeTruthy()" },
      { description: 'empty message is empty string', assertion:"expect(new RangeError('').message).toBe('')" },
    ],
    hints: ['The message is stored in the .message property.'],
    tags: ['rangeerror', 'constructor', 'message'],
    usageExample: {
      code: `new RangeError('oops').name  // → 'RangeError'`,
      explanation: {
        en: "The name property of a RangeError is always 'RangeError'.",
        es: "La propiedad name de un RangeError siempre es 'RangeError'.",
      },
    },
  },
  {
    slug: 'rangeerror-constructor-4',
    title: 'RangeError — .name property',
    description: `## RangeError Name\n\nEvery RangeError has a \`.name\` property equal to \`'RangeError'\`.\n\n**Challenge:** Verify the \`.name\` property.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'RangeError',
    initialCode: `const err = new RangeError()\n`,
    solution: `new RangeError().name`,
    tests: [
      { description: "name is 'RangeError'", assertion:"expect(result).toBe('RangeError')" },
      { description: 'name is a string', assertion:"expect(typeof result).toBe('string')" },
      { description: 'name is truthy', assertion:"expect(result).toBeTruthy()" },
      { description: 'name does not equal Error', assertion:"expect(result !== 'Error').toBe(true)" },
      { description: 'name is consistent', assertion:"expect(new RangeError('x').name).toBe('RangeError')" },
    ],
    hints: ['Error subtypes have a .name property matching their constructor name.'],
    tags: ['rangeerror', 'constructor', 'name'],
    usageExample: {
      code: `new RangeError() instanceof Error  // → true`,
      explanation: {
        en: "RangeError extends Error and has all standard error properties.",
        es: "RangeError extiende Error y tiene todas las propiedades estándar de error.",
      },
    },
  },
  {
    slug: 'rangeerror-constructor-5',
    title: 'RangeError — catching from built-in',
    description: `## Catching RangeError\n\nCreating an array with a negative length throws a RangeError.\n\n**Challenge:** Catch the RangeError and verify it is an instance of RangeError.`,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'RangeError',
    initialCode: `function badArray() {
  try {
    // Create an array with an invalid length to trigger a RangeError
  } catch (e) {
    return e instanceof RangeError;
  }
}`,
    solution: `function badArray() {
  try {
    new Array(-1);
  } catch (e) {
    return e instanceof RangeError;
  }
}`,
    tests: [
      { description: 'returns true when RangeError is caught', assertion:"function badArray() { try { new Array(-1); } catch(e) { return e instanceof RangeError; } } expect(badArray()).toBe(true)" },
      { description: 'function returns a boolean', assertion:"function badArray2() { try { new Array(-1); } catch(e) { return e instanceof RangeError; } } expect(typeof badArray2()).toBe('boolean')" },
      { description: 'caught error is also an Error', assertion:"function badArray3() { try { new Array(-1); } catch(e) { return e instanceof Error; } } expect(badArray3()).toBe(true)" },
      { description: 'caught error has name RangeError', assertion:"function badArray4() { try { new Array(-1); } catch(e) { return e.name; } } expect(badArray4()).toBe('RangeError')" },
      { description: 'throws when creating array with negative length', assertion:"expect(() => { new Array(-1); }).toThrow(RangeError)" },
    ],
    hints: ['new Array(-1) throws a RangeError because -1 is not a valid array length.'],
    tags: ['rangeerror', 'constructor', 'throw', 'catch'],
    usageExample: {
      code: `(1.5).toFixed(200)  // throws RangeError: toFixed() digits argument must be between 0 and 100`,
      explanation: {
        en: "toFixed() throws a RangeError when the number of decimal places is out of range.",
        es: "toFixed() lanza un RangeError cuando el número de decimales está fuera de rango.",
      },
    },
  },
]
