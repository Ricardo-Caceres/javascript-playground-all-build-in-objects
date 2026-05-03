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
  // === FUNDAMENTALS ===
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
    topicKey: 'boolean',
    title: 'Data Types - Boolean',
    description: 'Working with boolean values and truthiness — fundamental to conditional logic.',
    order: 2,
    exerciseSlugs: {
      beginner: [
        'boolean-basic',
        'boolean-creation',
        'boolean-comparison',
        'boolean-logical',
      ],
      intermediate: [
        'boolean-truthy-falsy',
        'boolean-conversion',
      ],
      advanced: [],
    },
  },
  {
    topicKey: 'number',
    title: 'Data Types - Numbers',
    description: 'Numeric operations, special values (NaN, Infinity), and precision — handling numbers correctly.',
    order: 3,
    exerciseSlugs: {
      beginner: [
        'number-creation',
        'number-arithmetic',
        'number-methods-basic',
        'number-parsing',
        'number-checks',
      ],
      intermediate: [
        'number-precision',
        'number-conversion',
        'number-special-values',
      ],
      advanced: [
        'number-bitwise',
        'number-rounding-advanced',
      ],
    },
  },
  {
    topicKey: 'bigint',
    title: 'Data Types - BigInt',
    description: 'Arbitrary-precision integers — working with numbers beyond JavaScript\'s safe integer limit.',
    order: 4,
    exerciseSlugs: {
      beginner: [
        'bigint-creation',
        'bigint-basic-operations',
        'bigint-comparison',
      ],
      intermediate: [
        'bigint-conversions',
        'bigint-type-checking',
      ],
      advanced: [],
    },
  },
  {
    topicKey: 'operators',
    title: 'Operators',
    description: 'Arithmetic, comparison, logical, nullish coalescing, and modern ES2021+ operators.',
    order: 5,
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
    topicKey: 'typecoercion',
    title: 'Type Coercion',
    description: 'Understand implicit and explicit type conversion — one of JavaScript\'s most misunderstood features.',
    order: 6,
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
    topicKey: 'controlflow',
    title: 'Control Flow',
    description: 'if/else, switch, loops, break/continue, generators — how JavaScript makes decisions.',
    order: 7,
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

  // === FUNCTIONS ===
  {
    topicKey: 'function',
    title: 'Functions',
    description: 'Function declarations, arrow functions, closures, and higher-order functions — mastering code organization.',
    order: 8,
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
    topicKey: 'closures',
    title: 'Closures',
    description: 'Lexical scoping, closures, variable capture — advanced scope concepts.',
    order: 9,
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

  // === OBJECTS & ARRAYS ===
  {
    topicKey: 'object',
    title: 'Objects & Prototypes',
    description: 'Object creation, property access, prototype chain — understanding JavaScript\'s object model.',
    order: 10,
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
    topicKey: 'prototypes',
    title: 'Prototypes & Inheritance',
    description: 'Prototype chain, inheritance patterns, Object.create — deep dive into object inheritance.',
    order: 11,
    exerciseSlugs: {
      beginner: [
        'prototypes-basic',
        'prototypes-chain',
        'prototypes-method-lookup',
      ],
      intermediate: [
        'prototypes-constructor-functions',
        'prototypes-object-create',
        'prototypes-instanceof',
      ],
      advanced: [
        'prototypes-deep-chain',
        'prototypes-es6-classes',
        'prototypes-mixins',
      ],
    },
  },
  {
    topicKey: 'array',
    title: 'Arrays',
    description: 'Array methods, iteration, transformation — working with collections of data.',
    order: 12,
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
    order: 13,
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
    topicKey: 'destructuring',
    title: 'Destructuring',
    description: 'Array and object destructuring — extracting values efficiently from complex data structures.',
    order: 14,
    exerciseSlugs: {
      beginner: [
        'destructuring-array-basic',
        'destructuring-object-basic',
        'destructuring-with-defaults',
      ],
      intermediate: [
        'destructuring-nested',
        'destructuring-rest-element',
        'destructuring-renaming',
      ],
      advanced: [
        'destructuring-complex-patterns',
        'destructuring-function-params',
      ],
    },
  },

  // === MODERN JAVASCRIPT ===
  {
    topicKey: 'strictmode',
    title: 'Strict Mode',
    description: "Opt into safer JavaScript with 'use strict' — prevents silent errors and bad patterns.",
    order: 15,
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
    topicKey: 'promise',
    title: 'Promises & Async',
    description: 'Promises, async/await, error handling — managing asynchronous operations.',
    order: 16,
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
    topicKey: 'asyncpatterns',
    title: 'Advanced Async Patterns',
    description: 'Async iterators, generators, and patterns — mastering complex asynchronous flows.',
    order: 17,
    exerciseSlugs: {
      beginner: [
        'asyncpatterns-generator-basics',
        'asyncpatterns-generator-yield',
      ],
      intermediate: [
        'asyncpatterns-async-generator',
        'asyncpatterns-for-await-of',
        'asyncpatterns-iterable-protocol',
      ],
      advanced: [
        'asyncpatterns-complex-flows',
        'asyncpatterns-backpressure',
      ],
    },
  },
  {
    topicKey: 'error',
    title: 'Error Handling',
    description: 'Try/catch, error types, custom errors — robust error management.',
    order: 18,
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

  // === ES6+ FEATURES ===
  {
    topicKey: 'modules',
    title: 'Modules',
    description: 'ES module system: named/default exports, dynamic import, and module patterns.',
    order: 19,
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
    topicKey: 'symbol',
    title: 'Symbols',
    description: 'Creating unique and immutable symbols — advanced identity and privacy patterns.',
    order: 20,
    exerciseSlugs: {
      beginner: [
        'symbol-creation',
        'symbol-uniqueness',
        'symbol-for',
      ],
      intermediate: [
        'symbol-registry',
        'symbol-well-known-symbols',
      ],
      advanced: [
        'symbol-private-fields',
        'symbol-iterator-protocol',
      ],
    },
  },
  {
    topicKey: 'generator',
    title: 'Generators & Iterators',
    description: 'Generator functions, iterators, and the iterable protocol — advanced iteration patterns.',
    order: 21,
    exerciseSlugs: {
      beginner: [
        'generator-function-basics',
        'generator-yield',
        'generator-next',
      ],
      intermediate: [
        'generator-delegation',
        'generator-return',
        'generator-throw',
      ],
      advanced: [
        'generator-state-machines',
        'generator-coroutines',
      ],
    },
  },
  {
    topicKey: 'regex',
    title: 'Regular Expressions',
    description: 'Pattern matching with regex — powerful text search and validation.',
    order: 22,
    exerciseSlugs: {
      beginner: [
        'regex-basic-patterns',
        'regex-character-classes',
        'regex-quantifiers',
      ],
      intermediate: [
        'regex-groups-capturing',
        'regex-flags',
        'regex-methods',
      ],
      advanced: [
        'regex-lookahead-lookbehind',
        'regex-performance',
        'regex-unicode',
      ],
    },
  },
  {
    topicKey: 'json',
    title: 'JSON',
    description: 'JSON serialization and parsing — working with structured data.',
    order: 23,
    exerciseSlugs: {
      beginner: [
        'json-stringify',
        'json-parse',
        'json-formatting',
      ],
      intermediate: [
        'json-replacer-reviver',
        'json-circular-references',
      ],
      advanced: [
        'json-stream-parsing',
        'json-performance',
      ],
    },
  },

  // === COLLECTIONS ===
  {
    topicKey: 'map',
    title: 'Map & Set',
    description: 'Map and Set collections — better alternatives to objects and arrays for specific use cases.',
    order: 24,
    exerciseSlugs: {
      beginner: [
        'map-creation',
        'map-set-get',
        'map-has-delete',
        'set-creation',
        'set-add-has',
      ],
      intermediate: [
        'map-iteration',
        'set-operations',
        'map-weakmap-differences',
      ],
      advanced: [
        'map-performance-vs-object',
        'set-set-operations',
        'weakmap-use-cases',
      ],
    },
  },
  {
    topicKey: 'weakmap',
    title: 'WeakMap & WeakSet',
    description: 'Weak references for garbage collection — memory-efficient data structures.',
    order: 25,
    exerciseSlugs: {
      beginner: [
        'weakmap-creation',
        'weakmap-set-get',
        'weakset-creation',
      ],
      intermediate: [
        'weakmap-private-data',
        'weakset-membership',
      ],
      advanced: [
        'weakmap-gc-behavior',
        'weakmap-edge-cases',
      ],
    },
  },
  {
    topicKey: 'proxy',
    title: 'Proxies & Reflect',
    description: 'Metaprogramming with proxies — intercept and customize operations on objects.',
    order: 26,
    exerciseSlugs: {
      beginner: [
        'proxy-basic-handler',
        'proxy-get-set-traps',
      ],
      intermediate: [
        'proxy-has-delete-traps',
        'proxy-validation',
        'proxy-logging',
      ],
      advanced: [
        'proxy-revocable',
        'proxy-performance-implications',
        'reflect-api-integration',
      ],
    },
  },
  {
    topicKey: 'reflect',
    title: 'Reflect API',
    description: 'Metaprogramming with Reflect — cleaner way to manipulate objects.',
    order: 27,
    exerciseSlugs: {
      beginner: [
        'reflect-get-set',
        'reflect-has',
        'reflect-delete',
      ],
      intermediate: [
        'reflect-keys-enumerate',
        'reflect-apply-construct',
      ],
      advanced: [
        'reflect-with-proxy',
        'reflect-advanced-patterns',
      ],
    },
  },

  // === BUILT-IN OBJECTS & APIs ===
  {
    topicKey: 'math',
    title: 'Math Object',
    description: 'Mathematical functions and constants — performing calculations and random operations.',
    order: 28,
    exerciseSlugs: {
      beginner: [
        'math-rounding',
        'math-basic-operations',
        'math-random',
      ],
      intermediate: [
        'math-trigonometry',
        'math-logarithms',
      ],
      advanced: [
        'math-edge-cases',
        'math-performance',
      ],
    },
  },
  {
    topicKey: 'date',
    title: 'Date & Time',
    description: 'Working with dates and timezones — managing temporal data.',
    order: 29,
    exerciseSlugs: {
      beginner: [
        'date-creation',
        'date-getters',
        'date-formatting',
      ],
      intermediate: [
        'date-arithmetic',
        'date-parsing',
        'date-timezones',
      ],
      advanced: [
        'date-epoch-calculations',
        'date-edge-cases',
      ],
    },
  },
  {
    topicKey: 'url',
    title: 'URL & URLSearchParams',
    description: 'Working with URLs and query parameters — parsing and manipulating URLs.',
    order: 30,
    exerciseSlugs: {
      beginner: [
        'url-parsing',
        'url-properties',
        'urlsearchparams-creation',
      ],
      intermediate: [
        'urlsearchparams-manipulation',
        'url-relative-parsing',
      ],
      advanced: [
        'url-encoding-decoding',
        'urlsearchparams-iteration',
      ],
    },
  },

  // === ADVANCED CONCEPTS ===
  {
    topicKey: 'designpatterns',
    title: 'Design Patterns',
    description: 'Common JavaScript design patterns — proven solutions to recurring problems.',
    order: 31,
    exerciseSlugs: {
      beginner: [
        'designpatterns-singleton',
        'designpatterns-factory',
        'designpatterns-observer',
      ],
      intermediate: [
        'designpatterns-strategy',
        'designpatterns-decorator',
        'designpatterns-adapter',
      ],
      advanced: [
        'designpatterns-composite',
        'designpatterns-chain-of-responsibility',
      ],
    },
  },
  {
    topicKey: 'functionalprogramming',
    title: 'Functional Programming',
    description: 'Functional paradigms in JavaScript — pure functions, immutability, composition.',
    order: 32,
    exerciseSlugs: {
      beginner: [
        'functionalprogramming-pure-functions',
        'functionalprogramming-immutability',
        'functionalprogramming-first-class',
      ],
      intermediate: [
        'functionalprogramming-composition',
        'functionalprogramming-currying',
        'functionalprogramming-partial-application',
      ],
      advanced: [
        'functionalprogramming-transducers',
        'functionalprogramming-monads',
      ],
    },
  },
  {
    topicKey: 'algorithms',
    title: 'Algorithms',
    description: 'Core algorithms — sorting, searching, and graph traversal.',
    order: 33,
    exerciseSlugs: {
      beginner: [
        'algorithms-bubble-sort',
        'algorithms-linear-search',
        'algorithms-array-iteration',
      ],
      intermediate: [
        'algorithms-quick-sort',
        'algorithms-binary-search',
        'algorithms-recursion',
      ],
      advanced: [
        'algorithms-graph-traversal',
        'algorithms-dynamic-programming',
        'algorithms-complexity-analysis',
      ],
    },
  },
  {
    topicKey: 'typedarrays',
    title: 'TypedArrays & Buffers',
    description: 'Low-level binary data handling — working with ArrayBuffer and typed arrays.',
    order: 34,
    exerciseSlugs: {
      beginner: [
        'typedarrays-creation',
        'typedarrays-int8array',
        'typedarrays-uint8array',
      ],
      intermediate: [
        'typedarrays-dataview',
        'typedarrays-buffer-slicing',
      ],
      advanced: [
        'typedarrays-shared-buffers',
        'typedarrays-performance',
      ],
    },
  },
];
