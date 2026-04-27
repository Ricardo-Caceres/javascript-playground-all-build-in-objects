import type { Exercise } from '@/shared/types/exercises'

export const strictModeEdgeCasesExercises: Exercise[] = [
  {
    slug: 'strictmode-octal-literals',
    title: 'Octal Literals in Strict Mode',
    description: `## Octal Literals in Strict Mode\n\nStrict mode forbids octal literals (e.g. \`010\` which is \`8\` in decimal). Use \`0o10\` (ES6 syntax) instead. The old octal syntax throws a SyntaxError in strict mode.\n\n**Challenge:** Write \`testOctalLiteral()\` that:\n1. Uses \`eval\` to run code with old octal syntax (\`010\`) in strict mode\n2. Wraps it in try/catch\n3. Returns \`true\` if an error is caught, \`false\` otherwise`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'StrictMode',
    initialCode: `function testOctalLiteral() {
  // Return true if strict mode rejects old octal syntax (010)
  try {
    // your code here
  } catch (e) {
    return true;
  }
  return false;
}`,
    solution: `function testOctalLiteral() {
  try {
    eval('"use strict"; var n = 010;');
    return false;
  } catch (e) {
    return true;
  }
}`,
    tests: [
      {
        description: 'Octal literals throw SyntaxError in strict mode',
        assertion: 'expect(testOctalLiteral()).toBe(true)',
      },
    ],
    hints: ['Old octal syntax (010) is forbidden in strict mode', 'Use 0o10 (ES6) syntax instead', 'eval() will throw at parse time'],
    tags: ['strict-mode', 'octal-literals', 'syntax-error'],
  },
  {
    slug: 'strictmode-delete-variable',
    title: 'Deleting Variables in Strict Mode',
    description: `## Deleting Variables in Strict Mode\n\nStrict mode forbids using \`delete\` on variables, function names, or function parameters. \`delete myVar\` throws a SyntaxError in strict mode.\n\n**Challenge:** Write \`testDeleteVariable()\` that:\n1. Uses \`eval\` to run code that deletes a variable in strict mode\n2. Wraps it in try/catch\n3. Returns \`true\` if an error is caught, \`false\` otherwise`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'StrictMode',
    initialCode: `function testDeleteVariable() {
  // Return true if deleting a variable throws in strict mode
  try {
    // your code here
  } catch (e) {
    return true;
  }
  return false;
}`,
    solution: `function testDeleteVariable() {
  try {
    eval('"use strict"; var x = 1; delete x;');
    return false;
  } catch (e) {
    return true;
  }
}`,
    tests: [
      {
        description: 'Deleting a variable throws SyntaxError in strict mode',
        assertion: 'expect(testDeleteVariable()).toBe(true)',
      },
    ],
    hints: ['delete on variables is forbidden in strict mode', 'delete works on object properties, but not variable declarations', 'Use eval() to trigger the error'],
    tags: ['strict-mode', 'delete', 'syntax-error'],
  },
]
