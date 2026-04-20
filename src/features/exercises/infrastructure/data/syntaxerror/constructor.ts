import type { Exercise } from '@/shared/types/exercises'

export const syntaxErrorExercises: Exercise[] = [
  {
    slug: 'syntaxerror-constructor-1',
    title: 'SyntaxError — instanceof check',
    description: `## SyntaxError Constructor\n\n\`new SyntaxError('bad syntax')\` creates a SyntaxError instance.\n\n**Challenge:** Verify that a new SyntaxError is an instance of SyntaxError.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'SyntaxError',
    initialCode: `const err = new SyntaxError('bad syntax')\n`,
    solution: `new SyntaxError('bad syntax') instanceof SyntaxError`,
    tests: [
      { description: 'instanceof SyntaxError is truthy', assertion:"expect(result).toBeTruthy()" },
      { description: 'instanceof SyntaxError is true', assertion:"expect(new SyntaxError('x') instanceof SyntaxError).toBe(true)" },
      { description: 'is an object', assertion:"expect(typeof new SyntaxError('x')).toBe('object')" },
      { description: 'is not null', assertion:"expect(new SyntaxError('x') !== null).toBe(true)" },
      { description: 'is truthy', assertion:"expect(new SyntaxError('x')).toBeTruthy()" },
    ],
    hints: ['Use new SyntaxError(message) to create a SyntaxError instance.'],
    tags: ['syntaxerror', 'constructor', 'instanceof'],
  },
  {
    slug: 'syntaxerror-constructor-2',
    title: 'SyntaxError — also an Error',
    description: `## SyntaxError extends Error\n\nSyntaxError extends the built-in Error class.\n\n**Challenge:** Verify that a SyntaxError is also an instance of Error.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'SyntaxError',
    initialCode: `const err = new SyntaxError()\n`,
    solution: `new SyntaxError() instanceof Error`,
    tests: [
      { description: 'instanceof Error is true', assertion:"expect(result).toBe(true)" },
      { description: 'instanceof SyntaxError is true', assertion:"expect(new SyntaxError() instanceof SyntaxError).toBe(true)" },
      { description: 'instanceof Object is true', assertion:"expect(new SyntaxError() instanceof Object).toBe(true)" },
      { description: 'is truthy', assertion:"expect(new SyntaxError()).toBeTruthy()" },
      { description: 'is an object', assertion:"expect(typeof new SyntaxError()).toBe('object')" },
    ],
    hints: ['SyntaxError inherits from Error in the prototype chain.'],
    tags: ['syntaxerror', 'constructor', 'instanceof', 'error'],
  },
  {
    slug: 'syntaxerror-constructor-3',
    title: 'SyntaxError — .message property',
    description: `## SyntaxError Message\n\nThe message passed to \`new SyntaxError(message)\` is stored in \`.message\`.\n\n**Challenge:** Verify the \`.message\` property.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'SyntaxError',
    initialCode: `const err = new SyntaxError('unexpected token')\n`,
    solution: `new SyntaxError('unexpected token').message`,
    tests: [
      { description: "message is 'unexpected token'", assertion:"expect(result).toBe('unexpected token')" },
      { description: 'message matches input', assertion:"expect(new SyntaxError('hello').message).toBe('hello')" },
      { description: 'message is a string', assertion:"expect(typeof new SyntaxError('x').message).toBe('string')" },
      { description: 'message is accessible', assertion:"expect(new SyntaxError('test').message).toBeTruthy()" },
      { description: 'empty message is empty string', assertion:"expect(new SyntaxError('').message).toBe('')" },
    ],
    hints: ['The message is stored in the .message property.'],
    tags: ['syntaxerror', 'constructor', 'message'],
  },
  {
    slug: 'syntaxerror-constructor-4',
    title: 'SyntaxError — .name property',
    description: `## SyntaxError Name\n\nEvery SyntaxError has a \`.name\` property equal to \`'SyntaxError'\`.\n\n**Challenge:** Verify the \`.name\` property.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'SyntaxError',
    initialCode: `const err = new SyntaxError()\n`,
    solution: `new SyntaxError().name`,
    tests: [
      { description: "name is 'SyntaxError'", assertion:"expect(result).toBe('SyntaxError')" },
      { description: 'name is a string', assertion:"expect(typeof result).toBe('string')" },
      { description: 'name is truthy', assertion:"expect(result).toBeTruthy()" },
      { description: 'name does not equal Error', assertion:"expect(result !== 'Error').toBe(true)" },
      { description: 'name is consistent', assertion:"expect(new SyntaxError('x').name).toBe('SyntaxError')" },
    ],
    hints: ['Error subtypes have a .name property matching their constructor name.'],
    tags: ['syntaxerror', 'constructor', 'name'],
  },
  {
    slug: 'syntaxerror-constructor-5',
    title: 'SyntaxError — catching from JSON.parse',
    description: `## Catching SyntaxError\n\nParsing invalid JSON with \`JSON.parse\` throws a SyntaxError.\n\n**Challenge:** Catch the SyntaxError and verify it is an instance of SyntaxError.`,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'SyntaxError',
    initialCode: `function badJson() {
  try {
    // Parse invalid JSON to trigger a SyntaxError
  } catch (e) {
    return e instanceof SyntaxError;
  }
}`,
    solution: `function badJson() {
  try {
    JSON.parse('{bad}');
  } catch (e) {
    return e instanceof SyntaxError;
  }
}`,
    tests: [
      { description: 'returns true when SyntaxError is caught', assertion:"function badJson() { try { JSON.parse('{bad}'); } catch(e) { return e instanceof SyntaxError; } } expect(badJson()).toBe(true)" },
      { description: 'function returns a boolean', assertion:"function badJson2() { try { JSON.parse('{bad}'); } catch(e) { return e instanceof SyntaxError; } } expect(typeof badJson2()).toBe('boolean')" },
      { description: 'caught error is also an Error', assertion:"function badJson3() { try { JSON.parse('{bad}'); } catch(e) { return e instanceof Error; } } expect(badJson3()).toBe(true)" },
      { description: 'caught error has name SyntaxError', assertion:"function badJson4() { try { JSON.parse('{bad}'); } catch(e) { return e.name; } } expect(badJson4()).toBe('SyntaxError')" },
      { description: 'throws when parsing invalid JSON', assertion:"expect(() => { JSON.parse('{bad}'); }).toThrow(SyntaxError)" },
    ],
    hints: ['JSON.parse throws a SyntaxError when given invalid JSON input.'],
    tags: ['syntaxerror', 'constructor', 'throw', 'catch', 'json'],
  },
]
