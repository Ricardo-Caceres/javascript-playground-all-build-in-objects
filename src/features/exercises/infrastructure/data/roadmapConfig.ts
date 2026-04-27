/**
 * Curated roadmap configuration for JavaScript built-in topics.
 *
 * Each entry maps a topic name (lowercase) to an ordered list of method names
 * per difficulty level, sorted from most to least important. These lists guide
 * getRoadmapExercises() to surface the most relevant exercises first instead of
 * relying on alphabetical file order.
 *
 * Method names here correspond to the last segment of the exercise `method`
 * field (e.g. 'Array.prototype.map' → 'map', 'Object.keys' → 'keys').
 */

import type { Difficulty } from '@/shared/types/exercises'

export const roadmapConfig: Record<string, Record<Difficulty, string[]>> = {
  array: {
    beginner: [
      'map', 'filter', 'forEach', 'push', 'pop', 'includes', 'indexOf',
      'slice', 'sort', 'reverse', 'join', 'some', 'every', 'find', 'length',
    ],
    intermediate: [
      'reduce', 'splice', 'flat', 'flatMap', 'findIndex', 'concat', 'from',
      'fill', 'unshift', 'shift', 'at',
    ],
    advanced: [
      'reduceRight', 'findLast', 'findLastIndex', 'toSorted', 'toReversed',
      'toSpliced', 'entries', 'keys', 'values', 'copyWithin', 'isArray', 'of',
    ],
  },
  string: {
    beginner: [
      'includes', 'indexOf', 'slice', 'split', 'trim', 'toLowerCase', 'toUpperCase',
      'replace', 'startsWith', 'endsWith', 'charAt', 'length', 'repeat',
    ],
    intermediate: [
      'replaceAll', 'match', 'padStart', 'padEnd', 'substring', 'trimStart',
      'trimEnd', 'search', 'localeCompare',
    ],
    advanced: [
      'matchAll', 'normalize', 'raw', 'codePointAt', 'fromCodePoint',
      'fromCharCode', 'charCodeAt',
    ],
  },
  object: {
    beginner: [
      'keys', 'values', 'entries', 'assign', 'hasOwn', 'hasOwnProperty',
    ],
    intermediate: [
      'fromEntries', 'create', 'freeze', 'defineProperty', 'getPrototypeOf', 'groupBy',
    ],
    advanced: [
      'defineProperties', 'getOwnPropertyDescriptors', 'getOwnPropertyNames',
      'seal', 'preventExtensions', 'setPrototypeOf', 'getOwnPropertySymbols',
    ],
  },
  promise: {
    beginner: ['constructor', 'resolve', 'reject'],
    intermediate: ['all', 'allSettled', 'race'],
    advanced: ['any'],
  },
  map: {
    beginner: ['constructor', 'set', 'get', 'has', 'delete', 'size'],
    intermediate: ['forEach', 'keys', 'values', 'entries', 'clear'],
    advanced: [],
  },
  set: {
    beginner: ['constructor', 'add', 'has', 'delete', 'size'],
    intermediate: ['forEach', 'union', 'intersection', 'clear'],
    advanced: [
      'difference', 'symmetricDifference', 'isSubsetOf', 'isSupersetOf',
      'isDisjointFrom',
    ],
  },
  number: {
    beginner: ['parseInt', 'parseFloat', 'isNaN', 'isFinite', 'isInteger', 'toFixed'],
    intermediate: ['isSafeInteger', 'toPrecision', 'toExponential', 'toString'],
    advanced: [],
  },
  math: {
    beginner: ['abs', 'floor', 'ceil', 'round', 'max', 'min', 'sqrt', 'pow', 'random'],
    intermediate: ['trunc', 'sign', 'log', 'log2', 'log10', 'hypot', 'atan2'],
    advanced: ['sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'cbrt', 'clz32'],
  },
  json: {
    beginner: ['parse', 'stringify'],
    intermediate: [],
    advanced: [],
  },
  regexp: {
    beginner: ['constructor', 'test'],
    intermediate: ['exec', 'flags'],
    advanced: ['source', 'global', 'ignoreCase', 'multiline'],
  },
}
