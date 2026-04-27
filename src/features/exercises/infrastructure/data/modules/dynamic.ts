import type { Exercise } from '@/shared/types/exercises'

export const modulesDynamicExercises: Exercise[] = [
  {
    slug: 'modules-lazy-loading',
    title: 'Lazy Loading with Dynamic Import',
    description:
      'Dynamic `import()` loads modules on demand: `const module = await import(\'./heavy\');`. This reduces initial bundle size. In the sandbox, simulate lazy loading with a factory function that defers computation.',
    difficulty: 'advanced',
    builtIn: 'Modules',
    category: 'static-method',
    initialCode: `function createLazyModule(factory: () => object) {
  let cached: object | null = null;
  return {
    // load() should call factory() on first access and cache the result
    load(): object {
      // your code here
    }
  };
}`,
    solution: `function createLazyModule(factory: () => object) {
  let cached: object | null = null;
  return {
    load(): object {
      if (!cached) {
        cached = factory();
      }
      return cached;
    }
  };
}`,
    hints: [
      'Use a closure to maintain the cached state',
      'Check if cached is null before calling the factory',
      'Call factory() only once, on first access',
      'Store the result in cached',
      'Return the cached value on subsequent calls',
    ],
    tests: [
      {
        description: 'Factory called on first load',
        assertion:
          "let calls = 0; const m = createLazyModule(() => { calls++; return { v: 1 }; }); m.load(); expect(calls).toBe(1)",
      },
      {
        description: 'Factory not called again on second load',
        assertion:
          "let calls2 = 0; const m2 = createLazyModule(() => { calls2++; return { v: 1 }; }); m2.load(); m2.load(); expect(calls2).toBe(1)",
      },
    ],
    tags: ['modules', 'lazy-loading', 'dynamic-import', 'caching'],
  },
  {
    slug: 'modules-named-vs-default',
    title: 'Named vs Default Imports',
    description:
      "Named imports: `import { foo, bar } from './module'` — import specific exports by name. Default import: `import myModule from './module'` — imports the default export, can be renamed. You can mix both: `import React, { useState } from 'react'`. Simulate by accessing properties vs the module object itself.",
    difficulty: 'advanced',
    builtIn: 'Modules',
    category: 'static-method',
    initialCode: `function createUtilsModule() {
  // Return an object with a 'default' function (multiply(a,b)) and named exports: add(a,b) and subtract(a,b)
  return {
    default: null as any, // replace with multiply function
    add: null as any,     // replace with add function
    subtract: null as any, // replace with subtract function
  };
}`,
    solution: `function createUtilsModule() {
  return {
    default: (a: number, b: number) => a * b,
    add: (a: number, b: number) => a + b,
    subtract: (a: number, b: number) => a - b,
  };
}`,
    hints: [
      'The default property should be the multiply function',
      'Add add and subtract as named exports',
      'multiply should return a * b',
      'add should return a + b',
      'subtract should return a - b',
    ],
    tests: [
      {
        description: 'Default export (multiply) works',
        assertion: 'expect(createUtilsModule().default(3, 4)).toBe(12)',
      },
      {
        description: 'Named export add works',
        assertion: 'expect(createUtilsModule().add(3, 4)).toBe(7)',
      },
      {
        description: 'Named export subtract works',
        assertion: 'expect(createUtilsModule().subtract(10, 3)).toBe(7)',
      },
    ],
    tags: ['modules', 'named-imports', 'default-import'],
  },
  {
    slug: 'modules-tree-shaking',
    title: 'Tree Shaking Friendly Exports',
    description:
      'Tree shaking removes unused exports from the bundle. Named exports are tree-shakeable; a default export of an object is not (bundler can\'t tell which properties are used). Prefer `export const foo = ...` over `export default { foo, bar }` for better tree shaking.',
    difficulty: 'advanced',
    builtIn: 'Modules',
    category: 'static-method',
    initialCode: `// Tree-shaking friendly: individual named exports
function createTreeShakeable() {
  // Return an object where each utility is a separate named property
  // Include: formatDate(d: Date) returning d.toISOString().split('T')[0]
  // And: formatCurrency(n: number) returning '$' + n.toFixed(2)
  return {};
}`,
    solution: `// Tree-shaking friendly: individual named exports
function createTreeShakeable() {
  return {
    formatDate: (d: Date) => d.toISOString().split('T')[0],
    formatCurrency: (n: number) => '$' + n.toFixed(2),
  };
}`,
    hints: [
      'Return an object with formatDate and formatCurrency properties',
      'formatDate should accept a Date and return the ISO date string (YYYY-MM-DD)',
      'Use d.toISOString().split(\'T\')[0] to extract the date part',
      'formatCurrency should accept a number and return formatted string with $',
      'Use n.toFixed(2) to format the currency to 2 decimal places',
    ],
    tests: [
      {
        description: 'formatDate formats correctly',
        assertion:
          "expect(createTreeShakeable().formatDate(new Date('2024-01-15'))).toBe('2024-01-15')",
      },
      {
        description: 'formatCurrency formats correctly',
        assertion: "expect(createTreeShakeable().formatCurrency(9.5)).toBe('$9.50')",
      },
    ],
    tags: ['modules', 'tree-shaking', 'bundle-optimization'],
  },
]
