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
];
