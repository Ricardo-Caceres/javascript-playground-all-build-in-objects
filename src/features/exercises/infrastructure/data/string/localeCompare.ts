import type { Exercise } from '@/shared/types/exercises'

export const localeCompareExercises: Exercise[] = [
  {
    slug: 'string-locale-compare-equal',
    title: 'String.prototype.localeCompare() — equal strings return 0',
    description: `## String.prototype.localeCompare()

\`str.localeCompare(compareString)\` returns:
- \`0\` if the strings are equal
- a **negative** number if \`str\` comes before \`compareString\`
- a **positive** number if \`str\` comes after \`compareString\`

**Challenge:** Implement \`areEqual(a, b)\` that returns \`true\` when \`a.localeCompare(b) === 0\`.

\`\`\`ts
areEqual('abc', 'abc') // → true
areEqual('abc', 'def') // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.localeCompare',
    initialCode: `function areEqual(a: string, b: string): boolean {
  // Return true if a.localeCompare(b) === 0
}`,
    solution: `function areEqual(a: string, b: string): boolean {
  return a.localeCompare(b) === 0
}`,
    tests: [
      { description: 'abc equals abc', assertion: "expect(areEqual('abc', 'abc')).toBe(true)" },
      { description: 'abc does not equal def', assertion: "expect(areEqual('abc', 'def')).toBe(false)" },
      { description: 'empty equals empty', assertion: "expect(areEqual('', '')).toBe(true)" },
      { description: 'a does not equal b', assertion: "expect(areEqual('a', 'b')).toBe(false)" },
      { description: 'hello equals hello', assertion: "expect(areEqual('hello', 'hello')).toBe(true)" },
    ],
    hints: [
      '`.localeCompare()` returns `0` for equal strings.',
    ],
    tags: ['String', 'String.prototype.localeCompare', 'comparison', 'beginner'],
    usageExample: {
      code: `'apple'.localeCompare('banana')   // → negative
'banana'.localeCompare('apple')   // → positive
'abc'.localeCompare('abc')        // → 0`,
      explanation: {
        en: "Use localeCompare() to compare strings in a locale-aware way, returning negative, zero, or positive.",
        es: "Usa localeCompare() para comparar cadenas de forma adaptada al idioma, devolviendo negativo, cero o positivo.",
      },
    },
  },
  {
    slug: 'string-locale-compare-less-than',
    title: 'String.prototype.localeCompare() — less-than returns negative',
    description: `## String.prototype.localeCompare() — Less Than

When \`str\` sorts before \`compareString\`, the result is negative.

**Challenge:** Implement \`comesBefore(a, b)\` that returns \`true\` when \`a\` sorts before \`b\`.

\`\`\`ts
comesBefore('a', 'b') // → true
comesBefore('b', 'a') // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.localeCompare',
    initialCode: `function comesBefore(a: string, b: string): boolean {
  // Return true if a.localeCompare(b) < 0
}`,
    solution: `function comesBefore(a: string, b: string): boolean {
  return a.localeCompare(b) < 0
}`,
    tests: [
      { description: 'a comes before b', assertion: "expect(comesBefore('a', 'b')).toBe(true)" },
      { description: 'b does not come before a', assertion: "expect(comesBefore('b', 'a')).toBe(false)" },
      { description: 'apple before banana', assertion: "expect(comesBefore('apple', 'banana')).toBe(true)" },
      { description: 'z does not come before a', assertion: "expect(comesBefore('z', 'a')).toBe(false)" },
      { description: 'equal strings do not come before', assertion: "expect(comesBefore('abc', 'abc')).toBe(false)" },
    ],
    hints: [
      'A negative return value means the first string sorts before the second.',
    ],
    tags: ['String', 'String.prototype.localeCompare', 'sorting', 'beginner'],
    usageExample: {
      code: `'apple'.localeCompare('banana')   // → negative
'banana'.localeCompare('apple')   // → positive
'abc'.localeCompare('abc')        // → 0`,
      explanation: {
        en: "Use localeCompare() to compare strings in a locale-aware way, returning negative, zero, or positive.",
        es: "Usa localeCompare() para comparar cadenas de forma adaptada al idioma, devolviendo negativo, cero o positivo.",
      },
    },
  },
  {
    slug: 'string-locale-compare-greater-than',
    title: 'String.prototype.localeCompare() — greater-than returns positive',
    description: `## String.prototype.localeCompare() — Greater Than

When \`str\` sorts after \`compareString\`, the result is positive.

**Challenge:** Implement \`comesAfter(a, b)\` that returns \`true\` when \`a\` sorts after \`b\`.

\`\`\`ts
comesAfter('b', 'a') // → true
comesAfter('a', 'b') // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.localeCompare',
    initialCode: `function comesAfter(a: string, b: string): boolean {
  // Return true if a.localeCompare(b) > 0
}`,
    solution: `function comesAfter(a: string, b: string): boolean {
  return a.localeCompare(b) > 0
}`,
    tests: [
      { description: 'b comes after a', assertion: "expect(comesAfter('b', 'a')).toBe(true)" },
      { description: 'a does not come after b', assertion: "expect(comesAfter('a', 'b')).toBe(false)" },
      { description: 'banana after apple', assertion: "expect(comesAfter('banana', 'apple')).toBe(true)" },
      { description: 'equal strings do not come after', assertion: "expect(comesAfter('abc', 'abc')).toBe(false)" },
      { description: 'z comes after a', assertion: "expect(comesAfter('z', 'a')).toBe(true)" },
    ],
    hints: [
      'A positive return value means the first string sorts after the second.',
    ],
    tags: ['String', 'String.prototype.localeCompare', 'sorting', 'beginner'],
    usageExample: {
      code: `'apple'.localeCompare('banana')   // → negative
'banana'.localeCompare('apple')   // → positive
'abc'.localeCompare('abc')        // → 0`,
      explanation: {
        en: "Use localeCompare() to compare strings in a locale-aware way, returning negative, zero, or positive.",
        es: "Usa localeCompare() para comparar cadenas de forma adaptada al idioma, devolviendo negativo, cero o positivo.",
      },
    },
  },
  {
    slug: 'string-locale-compare-sort',
    title: 'String.prototype.localeCompare() — sort array of strings',
    description: `## String.prototype.localeCompare() — Sorting

Using \`.localeCompare\` as the comparator for \`.sort()\` produces locale-aware alphabetical order.

**Challenge:** Implement \`sortStrings(arr)\` that returns a new sorted array using \`.localeCompare\`.

\`\`\`ts
sortStrings(['banana', 'apple', 'cherry']) // → ['apple', 'banana', 'cherry']
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.localeCompare',
    initialCode: `function sortStrings(arr: string[]): string[] {
  // Return [...arr].sort((a, b) => a.localeCompare(b))
}`,
    solution: `function sortStrings(arr: string[]): string[] {
  return [...arr].sort((a, b) => a.localeCompare(b))
}`,
    tests: [
      { description: 'sorts three words', assertion: "expect(sortStrings(['banana', 'apple', 'cherry'])).toEqual(['apple', 'banana', 'cherry'])" },
      { description: 'already sorted stays sorted', assertion: "expect(sortStrings(['a', 'b', 'c'])).toEqual(['a', 'b', 'c'])" },
      { description: 'reverse sorted becomes sorted', assertion: "expect(sortStrings(['c', 'b', 'a'])).toEqual(['a', 'b', 'c'])" },
      { description: 'single element', assertion: "expect(sortStrings(['x'])).toEqual(['x'])" },
      { description: 'empty array', assertion: "expect(sortStrings([])).toEqual([])" },
    ],
    hints: [
      'Use `[...arr].sort((a, b) => a.localeCompare(b))` to avoid mutating the input.',
    ],
    tags: ['String', 'String.prototype.localeCompare', 'sort', 'intermediate'],
    usageExample: {
      code: `'apple'.localeCompare('banana')   // → negative
'banana'.localeCompare('apple')   // → positive
'abc'.localeCompare('abc')        // → 0`,
      explanation: {
        en: "Use localeCompare() to compare strings in a locale-aware way, returning negative, zero, or positive.",
        es: "Usa localeCompare() para comparar cadenas de forma adaptada al idioma, devolviendo negativo, cero o positivo.",
      },
    },
  },
  {
    slug: 'string-locale-compare-sign',
    title: 'String.prototype.localeCompare() — sign of result',
    description: `## String.prototype.localeCompare() — Result Sign

The exact number returned is implementation-defined, but the **sign** is specified: negative, zero, or positive.

**Challenge:** Implement \`compareSign(a, b)\` that returns \`-1\`, \`0\`, or \`1\` based on the sign of \`a.localeCompare(b)\`.

\`\`\`ts
compareSign('a', 'b') // → -1
compareSign('b', 'b') // → 0
compareSign('c', 'b') // → 1
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.localeCompare',
    initialCode: `function compareSign(a: string, b: string): -1 | 0 | 1 {
  // Normalize the result of a.localeCompare(b) to -1, 0, or 1
}`,
    solution: `function compareSign(a: string, b: string): -1 | 0 | 1 {
  const r = a.localeCompare(b)
  if (r < 0) return -1
  if (r > 0) return 1
  return 0
}`,
    tests: [
      { description: 'a before b is -1', assertion: "expect(compareSign('a', 'b')).toBe(-1)" },
      { description: 'b equals b is 0', assertion: "expect(compareSign('b', 'b')).toBe(0)" },
      { description: 'c after b is 1', assertion: "expect(compareSign('c', 'b')).toBe(1)" },
      { description: 'apple before banana is -1', assertion: "expect(compareSign('apple', 'banana')).toBe(-1)" },
      { description: 'z after a is 1', assertion: "expect(compareSign('z', 'a')).toBe(1)" },
    ],
    hints: [
      'Normalize with: `if (r < 0) return -1; if (r > 0) return 1; return 0`.',
    ],
    tags: ['String', 'String.prototype.localeCompare', 'comparison', 'intermediate'],
    usageExample: {
      code: `'apple'.localeCompare('banana')   // → negative
'banana'.localeCompare('apple')   // → positive
'abc'.localeCompare('abc')        // → 0`,
      explanation: {
        en: "Use localeCompare() to compare strings in a locale-aware way, returning negative, zero, or positive.",
        es: "Usa localeCompare() para comparar cadenas de forma adaptada al idioma, devolviendo negativo, cero o positivo.",
      },
    },
  },
]
