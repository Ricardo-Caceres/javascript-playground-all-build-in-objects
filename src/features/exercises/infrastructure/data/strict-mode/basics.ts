import type { Exercise } from '@/shared/types/exercises'

export const strictModeBasicsExercises: Exercise[] = [
  {
    slug: 'strictmode-undeclared-variable',
    title: 'Undeclared Variables in Strict Mode',
    description: `## Undeclared Variables in Strict Mode\n\nIn strict mode, assigning to an undeclared variable throws a ReferenceError. Without strict mode, it silently creates a global variable.\n\n**Challenge:** Write \`testUndeclared()\` that:\n1. Uses \`eval\` to run code in strict mode that assigns to an undeclared variable\n2. Wraps it in try/catch\n3. Returns \`true\` if a ReferenceError is caught, \`false\` otherwise`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'StrictMode',
    initialCode: `function testUndeclared() {
  // Return true if strict mode prevents undeclared variable assignment
  // Hint: try assigning to an undeclared variable inside 'use strict'
  try {
    // your code here
  } catch (e) {
    return e instanceof ReferenceError;
  }
  return false;
}`,
    solution: `function testUndeclared() {
  try {
    eval('"use strict"; undeclaredVar = 42;');
    return false;
  } catch (e) {
    return e instanceof ReferenceError;
  }
}`,
    tests: [
      {
        description: 'Undeclared variable assignment throws ReferenceError in strict mode',
        assertion: 'expect(testUndeclared()).toBe(true)',
      },
    ],
    hints: ['Use eval() to run code in strict mode', 'Wrap the eval in try/catch to catch the ReferenceError'],
    tags: ['strict-mode', 'undeclared-variables', 'reference-error'],
  },
  {
    slug: 'strictmode-duplicate-params',
    title: 'Duplicate Parameters in Strict Mode',
    description: `## Duplicate Parameters in Strict Mode\n\nStrict mode forbids duplicate parameter names in functions. \`function f(a, a)\` throws a SyntaxError in strict mode.\n\n**Challenge:** Write \`testDuplicateParams()\` that:\n1. Uses \`eval\` to run a function with duplicate parameters in strict mode\n2. Wraps it in try/catch\n3. Returns \`true\` if an error is caught, \`false\` otherwise`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'StrictMode',
    initialCode: `function testDuplicateParams() {
  // Return true if strict mode throws for duplicate params
  try {
    // your code here
  } catch (e) {
    return true;
  }
  return false;
}`,
    solution: `function testDuplicateParams() {
  try {
    eval('"use strict"; (function(a, a) {})');
    return false;
  } catch (e) {
    return true;
  }
}`,
    tests: [
      {
        description: 'Duplicate parameters throw in strict mode',
        assertion: 'expect(testDuplicateParams()).toBe(true)',
      },
    ],
    hints: ['Use eval() to parse and execute the function with duplicate params in strict mode', 'Any error thrown means strict mode rejected it'],
    tags: ['strict-mode', 'duplicate-parameters', 'syntax-error'],
  },
  {
    slug: 'strictmode-with-statement',
    title: "The 'with' Statement",
    description: `## The 'with' Statement\n\nThe \`with\` statement is forbidden in strict mode. It throws a SyntaxError because it makes scope resolution unpredictable.\n\n**Challenge:** Write \`testWithStatement()\` that:\n1. Uses \`eval\` to run a \`with\` statement in strict mode\n2. Wraps it in try/catch\n3. Returns \`true\` if an error is caught, \`false\` otherwise`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'StrictMode',
    initialCode: `function testWithStatement() {
  // Return true if 'with' throws in strict mode
  try {
    // your code here
  } catch (e) {
    return true;
  }
  return false;
}`,
    solution: `function testWithStatement() {
  try {
    eval('"use strict"; with({}) {}');
    return false;
  } catch (e) {
    return true;
  }
}`,
    tests: [
      {
        description: "'with' statement throws SyntaxError in strict mode",
        assertion: 'expect(testWithStatement()).toBe(true)',
      },
    ],
    hints: ['The with statement is a syntax error in strict mode', 'Use eval() to trigger the parsing error at runtime'],
    tags: ['strict-mode', 'with-statement', 'syntax-error'],
  },
  {
    slug: 'strictmode-this-binding',
    title: 'this Binding in Strict Mode',
    description: `## this Binding in Strict Mode\n\nIn strict mode, \`this\` inside a regular function called without a context is \`undefined\` (not the global object). This prevents accidental global pollution.\n\n**Challenge:** Write \`getThisValue()\` that:\n1. Uses \`'use strict'\` directive at the top\n2. Returns the value of \`this\` in that strict mode function`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'StrictMode',
    initialCode: `function getThisValue() {
  'use strict';
  // Return the value of 'this' in strict mode function call
  return this;
}`,
    solution: `function getThisValue() {
  'use strict';
  return this;
}`,
    tests: [
      {
        description: 'this is undefined in strict mode function',
        assertion: 'expect(getThisValue()).toBeUndefined()',
      },
    ],
    hints: ['In strict mode, this is undefined in a regular function call', 'No need for eval here — just use use strict at function top'],
    tags: ['strict-mode', 'this-binding', 'undefined'],
  },
]
