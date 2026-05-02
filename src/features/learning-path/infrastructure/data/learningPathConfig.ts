export interface LearningPathSection {
  topicKey: string;        // matches builtIn field on exercises (lowercase)
  title: string;
  description: string;
  order: number;           // display order, 1-based
  exerciseSlugs: {
    beginner: string[];
    intermediate: string[];
    advanced: string[];
  };
}

export const learningPath: LearningPathSection[] = [
  {
    topicKey: 'variables',
    title: 'Variables & Scope',
    description: 'Master let, const, var, hoisting, and block scope — the foundation of JavaScript.',
    order: 1,
    exerciseSlugs: {
      beginner: [
        'variables-let-reassign',
        'variables-const-object',
        'variables-block-scope',
        'variables-var-function-scope',
        'variables-destructuring',
      ],
      intermediate: [
        'variables-var-hoisting',
        'variables-function-hoisting',
        'variables-let-tdz',
        'variables-var-loop-closure',
        'variables-let-loop-closure',
      ],
      advanced: [],
    },
  },
  {
    topicKey: 'operators',
    title: 'Operators',
    description: 'Arithmetic, comparison, logical, nullish coalescing, and modern ES2021+ operators.',
    order: 2,
    exerciseSlugs: {
      beginner: [
        'operators-arithmetic',
        'operators-comparison',
        'operators-logical',
        'operators-ternary',
        'operators-compound-assignment',
      ],
      intermediate: [
        'operators-nullish-coalescing',
        'operators-optional-chaining',
        'operators-spread',
        'operators-rest-params',
        'operators-logical-assignment',
      ],
      advanced: [
        'operators-bitwise',
        'operators-typeof',
        'operators-in-instanceof',
      ],
    },
  },
  {
    topicKey: 'controlflow',
    title: 'Control Flow',
    description: 'if/else, switch, loops, break/continue, generators — how JavaScript makes decisions.',
    order: 3,
    exerciseSlugs: {
      beginner: [
        'controlflow-if-else',
        'controlflow-switch',
        'controlflow-for-loop',
        'controlflow-while-loop',
        'controlflow-early-return',
      ],
      intermediate: [
        'controlflow-for-of',
        'controlflow-for-in',
        'controlflow-break-continue',
        'controlflow-do-while',
        'controlflow-short-circuit',
      ],
      advanced: [
        'controlflow-switch-fallthrough',
        'controlflow-nested-loops',
        'controlflow-generators',
      ],
    },
  },
  {
    topicKey: 'typecoercion',
    title: 'Type Coercion',
    description: 'Understand implicit and explicit type conversion — one of JavaScript\'s most misunderstood features.',
    order: 4,
    exerciseSlugs: {
      beginner: [
        'typecoercion-loose-equality',
        'typecoercion-strict-equality',
        'typecoercion-abstract-comparison',
        'typecoercion-nullish-checks',
        'typecoercion-boolean-coercion',
      ],
      intermediate: [
        'typecoercion-string-conversion',
        'typecoercion-number-conversion',
        'typecoercion-addition-coercion',
        'typecoercion-object-coercion',
        'typecoercion-nan-behavior',
      ],
      advanced: [],
    },
  },
  {
    topicKey: 'strictmode',
    title: 'Strict Mode',
    description: "Opt into safer JavaScript with 'use strict' — prevents silent errors and bad patterns.",
    order: 5,
    exerciseSlugs: {
      beginner: [
        'strictmode-undeclared-variable',
        'strictmode-duplicate-params',
        'strictmode-with-statement',
        'strictmode-this-binding',
      ],
      intermediate: [
        'strictmode-octal-literals',
        'strictmode-delete-variable',
      ],
      advanced: [],
    },
  },
  {
    topicKey: 'modules',
    title: 'Modules',
    description: 'ES module system: named/default exports, dynamic import, and module patterns.',
    order: 6,
    exerciseSlugs: {
      beginner: [
        'modules-named-exports',
        'modules-default-export',
        'modules-re-export',
      ],
      intermediate: [
        'modules-module-pattern',
        'modules-singleton-pattern',
        'modules-circular-dependency',
      ],
      advanced: [
        'modules-lazy-loading',
        'modules-named-vs-default',
        'modules-tree-shaking',
      ],
    },
  },
  {
    topicKey: 'function',
    title: 'Functions',
    description: 'Function declarations, arrow functions, closures, and higher-order functions — mastering code organization.',
    order: 7,
    exerciseSlugs: {
      beginner: [
        'function-declaration',
        'function-expression',
        'function-arrow',
        'function-parameters',
        'function-return',
      ],
      intermediate: [
        'function-closure',
        'function-higher-order',
        'function-default-params',
        'function-rest-params',
        'function-callback',
      ],
      advanced: [
        'function-iife',
        'function-recursion',
        'function-memoization',
      ],
    },
  },
  {
    topicKey: 'object',
    title: 'Objects & Prototypes',
    description: 'Object creation, property access, prototype chain — understanding JavaScript\'s object model.',
    order: 8,
    exerciseSlugs: {
      beginner: [
        'object-literal',
        'object-property-access',
        'object-property-assignment',
        'object-keys',
        'object-values',
      ],
      intermediate: [
        'object-entries',
        'object-assign',
        'object-freeze',
        'object-prototype',
        'object-constructor',
      ],
      advanced: [
        'object-create',
        'object-property-descriptors',
        'object-seal',
      ],
    },
  },
  {
    topicKey: 'array',
    title: 'Arrays',
    description: 'Array methods, iteration, transformation — working with collections of data.',
    order: 9,
    exerciseSlugs: {
      beginner: [
        'array-creation',
        'array-access',
        'array-length',
        'array-map',
        'array-filter',
      ],
      intermediate: [
        'array-reduce',
        'array-find',
        'array-some-every',
        'array-slice',
        'array-concat',
      ],
      advanced: [
        'array-flat',
        'array-splice',
        'array-sort-custom',
      ],
    },
  },
  {
    topicKey: 'string',
    title: 'Strings',
    description: 'String methods, template literals, pattern matching — text manipulation in JavaScript.',
    order: 10,
    exerciseSlugs: {
      beginner: [
        'string-literals',
        'string-length',
        'string-indexing',
        'string-methods-basic',
        'string-case',
      ],
      intermediate: [
        'string-split-join',
        'string-substring',
        'string-includes',
        'string-template-literals',
        'string-replace',
      ],
      advanced: [
        'string-regexp',
        'string-normalization',
        'string-unicode',
      ],
    },
  },
  {
    topicKey: 'promise',
    title: 'Promises & Async',
    description: 'Promises, async/await, error handling — managing asynchronous operations.',
    order: 11,
    exerciseSlugs: {
      beginner: [
        'promise-creation',
        'promise-then',
        'promise-catch',
        'promise-resolve-reject',
        'async-await-basics',
      ],
      intermediate: [
        'promise-chaining',
        'promise-all',
        'promise-race',
        'async-await-error-handling',
        'async-await-loops',
      ],
      advanced: [
        'promise-allSettled',
        'promise-any',
        'promise-microtask-queue',
      ],
    },
  },
  {
    topicKey: 'error',
    title: 'Error Handling',
    description: 'Try/catch, error types, custom errors — robust error management.',
    order: 12,
    exerciseSlugs: {
      beginner: [
        'error-try-catch',
        'error-finally',
        'error-throwing',
        'error-types',
        'error-message',
      ],
      intermediate: [
        'error-custom-errors',
        'error-stack-trace',
        'error-propagation',
        'error-async-handling',
      ],
      advanced: [
        'error-retry-logic',
        'error-recovery-patterns',
      ],
    },
  },
  {
    topicKey: 'closures',
    title: 'Closures',
    description: 'Lexical scoping, closures, variable capture — advanced scope concepts.',
    order: 13,
    exerciseSlugs: {
      beginner: [
        'closures-basic',
        'closures-counter',
        'closures-factory',
        'closures-multiple-vars',
      ],
      intermediate: [
        'closures-data-privacy',
        'closures-module-pattern',
        'closures-loop-binding',
        'closures-memory-implications',
      ],
      advanced: [
        'closures-complex-scenarios',
        'closures-performance',
      ],
    },
  },
];
