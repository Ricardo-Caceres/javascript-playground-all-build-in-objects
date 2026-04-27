import type { Exercise } from '@/shared/types/exercises'

export const modulesExportsExercises: Exercise[] = [
  {
    slug: 'modules-named-exports',
    title: 'Named Exports',
    description:
      "In ES modules, named exports let you export multiple values from a file: `export const PI = 3.14;` and `export function add(a, b) { return a + b; }`. Consumers import them by name: `import { PI, add } from './math';`. In this sandbox, simulate a module using an object that represents the module's public API.",
    difficulty: 'beginner',
    builtIn: 'Modules',
    category: 'static-method',
    initialCode: `function createMathModule() {
  // Return an object simulating named exports: PI (3.14159) and add(a, b)
  return {
    // your code here
  };
}`,
    solution: `function createMathModule() {
  return {
    PI: 3.14159,
    add: (a: number, b: number) => a + b,
  };
}`,
    hints: [
      'Return an object with properties PI and add',
      'PI should be 3.14159',
      'add should be a function that takes two numbers and returns their sum',
    ],
    tests: [
      {
        description: 'Module exports PI constant',
        assertion: 'expect(createMathModule().PI).toBe(3.14159)',
      },
      {
        description: 'Module exports add function',
        assertion: 'expect(createMathModule().add(2, 3)).toBe(5)',
      },
    ],
    tags: ['modules', 'exports', 'named-exports'],
  },
  {
    slug: 'modules-default-export',
    title: 'Default Export',
    description:
      "A module can have one default export: `export default function greet(name) { ... }`. Consumers import it without braces: `import greet from './greet';`. The imported name can be anything. Simulate a default export as a factory function returning the main export.",
    difficulty: 'beginner',
    builtIn: 'Modules',
    category: 'static-method',
    initialCode: `function createGreetModule() {
  // Return a greet function as the 'default export'
  // greet(name) should return 'Hello, {name}!'
}`,
    solution: `function createGreetModule() {
  return function greet(name: string) {
    return \`Hello, \${name}!\`;
  };
}`,
    hints: [
      'Return a function from createGreetModule',
      'The function should accept a name parameter',
      'Return a string in the format "Hello, {name}!"',
    ],
    tests: [
      {
        description: 'Default export is a function',
        assertion: "expect(typeof createGreetModule()).toBe('function')",
      },
      {
        description: "Greet function returns correct string",
        assertion: "expect(createGreetModule()('World')).toBe('Hello, World!')",
      },
    ],
    tags: ['modules', 'exports', 'default-export'],
  },
  {
    slug: 'modules-re-export',
    title: 'Re-exporting',
    description:
      "Modules can re-export from other modules: `export { add } from './math';` or `export * from './utils';`. This creates a barrel file that aggregates exports. Simulate by composing two module objects into one.",
    difficulty: 'beginner',
    builtIn: 'Modules',
    category: 'static-method',
    initialCode: `function createMathModule() {
  return { add: (a: number, b: number) => a + b };
}
function createStringModule() {
  return { capitalize: (s: string) => s.charAt(0).toUpperCase() + s.slice(1) };
}
function createBarrelModule() {
  // Re-export everything from both modules into one object
}`,
    solution: `function createMathModule() {
  return { add: (a: number, b: number) => a + b };
}
function createStringModule() {
  return { capitalize: (s: string) => s.charAt(0).toUpperCase() + s.slice(1) };
}
function createBarrelModule() {
  return { ...createMathModule(), ...createStringModule() };
}`,
    hints: [
      'Use the spread operator (...) to combine objects',
      'Call createMathModule() and createStringModule() inside createBarrelModule',
      'Spread both module objects into the returned object',
    ],
    tests: [
      {
        description: 'Barrel exports add from math module',
        assertion: 'expect(createBarrelModule().add(1, 2)).toBe(3)',
      },
      {
        description: 'Barrel exports capitalize from string module',
        assertion: "expect(createBarrelModule().capitalize('hello')).toBe('Hello')",
      },
    ],
    tags: ['modules', 'exports', 're-export'],
  },
]
