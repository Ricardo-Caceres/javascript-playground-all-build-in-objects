import type { Exercise } from '@/shared/types/exercises'

export const includesExercises: Exercise[] = [
  {
    slug: 'array-includes-basic',
    title: 'Array.prototype.includes() — check for a value',
    description: `## Array.prototype.includes()

\`Array.prototype.includes(value, fromIndex?)\` returns \`true\` if the array contains \`value\`, using the **SameValueZero** algorithm (like \`===\` but also handles \`NaN\`).

**Challenge:** Implement \`hasValue(arr, val)\` that returns \`arr.includes(val)\`.

\`\`\`ts
hasValue([1, 2, 3], 2) // → true
hasValue([1, 2, 3], 5) // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.includes',
    initialCode: `function hasValue(arr: number[], val: number): boolean {
  // Use arr.includes(val)
}`,
    solution: `function hasValue(arr: number[], val: number): boolean {
  return arr.includes(val)
}`,
    tests: [
      { description: 'returns true when value exists', assertion: "expect(hasValue([1, 2, 3], 2)).toBe(true)" },
      { description: 'returns false when value absent', assertion: "expect(hasValue([1, 2, 3], 5)).toBe(false)" },
      { description: 'empty array returns false', assertion: "expect(hasValue([], 1)).toBe(false)" },
      { description: 'finds first element', assertion: "expect(hasValue([1, 2, 3], 1)).toBe(true)" },
      { description: 'finds last element', assertion: "expect(hasValue([1, 2, 3], 3)).toBe(true)" },
    ],
    hints: [
      '`includes()` returns a boolean — true or false.',
      'It uses SameValueZero comparison, similar to `===`, but also handles `NaN`.',
    ],
    tags: ['Array', 'Array.prototype.includes', 'search', 'beginner'],
    usageExample: {
      code: `const fruits = ['apple', 'banana', 'cherry']
fruits.includes('banana')  // → true
fruits.includes('grape')   // → false`,
      explanation: {
        en: 'Use includes() to check whether a specific value exists in an array.',
        es: 'Usa includes() para comprobar si un valor específico existe en un array.',
      },
    },
  },
  {
    slug: 'array-includes-string',
    title: 'Array.prototype.includes() — check for a word',
    description: `## Array.prototype.includes() — strings

\`includes()\` works with any element type. It is the cleanest way to check if a string exists in an array of strings.

**Challenge:** Implement \`hasWord(words, word)\` that returns \`true\` if \`word\` is in the \`words\` array.

\`\`\`ts
hasWord(['hello', 'world'], 'world') // → true
hasWord(['hello', 'world'], 'foo')   // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.includes',
    initialCode: `function hasWord(words: string[], word: string): boolean {
  // Use words.includes(word)
}`,
    solution: `function hasWord(words: string[], word: string): boolean {
  return words.includes(word)
}`,
    tests: [
      { description: 'finds existing word', assertion: "expect(hasWord(['hello', 'world'], 'world')).toBe(true)" },
      { description: 'returns false for absent word', assertion: "expect(hasWord(['hello', 'world'], 'foo')).toBe(false)" },
      { description: 'case-sensitive match', assertion: "expect(hasWord(['Hello'], 'hello')).toBe(false)" },
      { description: 'empty array returns false', assertion: "expect(hasWord([], 'a')).toBe(false)" },
      { description: 'single word array', assertion: "expect(hasWord(['match'], 'match')).toBe(true)" },
    ],
    hints: [
      '`includes()` is case-sensitive — `"Hello" !== "hello"`.',
      'This is simpler and more readable than `words.indexOf(word) !== -1`.',
    ],
    tags: ['Array', 'Array.prototype.includes', 'string', 'beginner'],
    usageExample: {
      code: `const colors = ['red', 'green', 'blue']
colors.includes('green')  // → true
colors.includes('yellow') // → false`,
      explanation: {
        en: 'Use includes() for a readable boolean check instead of indexOf() !== -1.',
        es: 'Usa includes() para una comprobación booleana legible en lugar de indexOf() !== -1.',
      },
    },
  },
  {
    slug: 'array-includes-nan',
    title: 'Array.prototype.includes() — finding NaN',
    description: `## Array.prototype.includes() — SameValueZero

Unlike \`indexOf\`, which uses strict equality (\`===\`), \`includes()\` uses **SameValueZero**, which correctly identifies \`NaN\` as equal to itself. So \`[NaN].includes(NaN)\` returns \`true\`.

**Challenge:** Implement \`hasNaN(arr)\` that returns \`arr.includes(NaN)\`.

\`\`\`ts
hasNaN([1, NaN, 3]) // → true
hasNaN([1, 2, 3])   // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.includes',
    initialCode: `function hasNaN(arr: number[]): boolean {
  // Use arr.includes(NaN) — includes correctly finds NaN, unlike indexOf
}`,
    solution: `function hasNaN(arr: number[]): boolean {
  return arr.includes(NaN)
}`,
    tests: [
      { description: 'finds NaN in array', assertion: "expect(hasNaN([1, NaN, 3])).toBe(true)" },
      { description: 'returns false when no NaN', assertion: "expect(hasNaN([1, 2, 3])).toBe(false)" },
      { description: 'empty array returns false', assertion: "expect(hasNaN([])).toBe(false)" },
      { description: 'array of all NaN returns true', assertion: "expect(hasNaN([NaN, NaN])).toBe(true)" },
      { description: 'indexOf would fail but includes succeeds', assertion: "expect([NaN].includes(NaN)).toBe(true)" },
    ],
    hints: [
      '`NaN === NaN` is `false` in JavaScript, so `indexOf` cannot find it.',
      '`includes()` uses SameValueZero, which treats `NaN` as equal to `NaN`.',
    ],
    tags: ['Array', 'Array.prototype.includes', 'NaN', 'SameValueZero', 'intermediate'],
    usageExample: {
      code: `const arr = [1, NaN, 3]
arr.includes(NaN)  // → true  (uses SameValueZero)
arr.indexOf(NaN)  // → -1   (does not find NaN)`,
      explanation: {
        en: 'Use includes() to check for NaN — unlike indexOf(), it handles NaN correctly.',
        es: 'Usa includes() para comprobar NaN; a diferencia de indexOf(), lo maneja correctamente.',
      },
    },
  },
  {
    slug: 'array-includes-from-index',
    title: 'Array.prototype.includes() — search from index',
    description: `## Array.prototype.includes() — fromIndex

The optional second argument \`fromIndex\` specifies where to start searching. This allows you to skip earlier occurrences.

**Challenge:** Implement \`hasAfter(arr, val, from)\` that uses \`arr.includes(val, from)\` to check for \`val\` starting at index \`from\`.

\`\`\`ts
hasAfter([1, 2, 3, 2, 1], 2, 2) // → true  (found at index 3)
hasAfter([1, 2, 3, 2, 1], 2, 4) // → false (no 2 at index >= 4)
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.includes',
    initialCode: `function hasAfter(arr: number[], val: number, from: number): boolean {
  // Use arr.includes(val, from) to search starting at index from
}`,
    solution: `function hasAfter(arr: number[], val: number, from: number): boolean {
  return arr.includes(val, from)
}`,
    tests: [
      { description: 'finds value after given index', assertion: "expect(hasAfter([1, 2, 3, 2, 1], 2, 2)).toBe(true)" },
      { description: 'returns false when not found after index', assertion: "expect(hasAfter([1, 2, 3, 2, 1], 2, 4)).toBe(false)" },
      { description: 'fromIndex 0 searches whole array', assertion: "expect(hasAfter([1, 2, 3], 1, 0)).toBe(true)" },
      { description: 'fromIndex beyond length returns false', assertion: "expect(hasAfter([1, 2, 3], 1, 10)).toBe(false)" },
      { description: 'empty array returns false', assertion: "expect(hasAfter([], 1, 0)).toBe(false)" },
    ],
    hints: [
      '`includes(val, from)` starts searching at index `from` and goes to the end.',
      'Elements before `from` are ignored even if they match.',
    ],
    tags: ['Array', 'Array.prototype.includes', 'fromIndex', 'intermediate'],
    usageExample: {
      code: `const arr = [1, 2, 3, 1, 2]
arr.includes(1, 2)  // → true  (starts searching at index 2)`,
      explanation: {
        en: 'Pass a second argument to includes() to start the search from a specific index.',
        es: 'Pasa un segundo argumento a includes() para comenzar la búsqueda desde un índice específico.',
      },
    },
  },
  {
    slug: 'array-includes-vs-indexof',
    title: 'Array.prototype.includes() — finding null',
    description: `## Array.prototype.includes() — vs indexOf

Both \`includes()\` and \`indexOf()\` can find \`null\`. However, \`includes()\` returns a clean boolean, while \`indexOf\` returns a number that must be checked against \`-1\`. Use \`includes()\` when you only need to know *if* a value is present.

**Challenge:** Implement \`containsNull(arr)\` that returns \`true\` if the array contains \`null\` using \`arr.includes(null)\`.

\`\`\`ts
containsNull([1, null, 3]) // → true
containsNull([1, 2, 3])    // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.includes',
    initialCode: `function containsNull(arr: unknown[]): boolean {
  // Use arr.includes(null) — cleaner than checking indexOf !== -1
}`,
    solution: `function containsNull(arr: unknown[]): boolean {
  return arr.includes(null)
}`,
    tests: [
      { description: 'finds null in array', assertion: "expect(containsNull([1, null, 3])).toBe(true)" },
      { description: 'returns false when no null', assertion: "expect(containsNull([1, 2, 3])).toBe(false)" },
      { description: 'empty array returns false', assertion: "expect(containsNull([])).toBe(false)" },
      { description: 'does not confuse undefined with null', assertion: "expect(containsNull([undefined])).toBe(false)" },
      { description: 'null at start found', assertion: "expect(containsNull([null, 1, 2])).toBe(true)" },
    ],
    hints: [
      '`null` and `undefined` are distinct values — `includes(null)` does not match `undefined`.',
      '`includes()` is preferred over `indexOf(x) !== -1` when you only need a boolean.',
    ],
    tags: ['Array', 'Array.prototype.includes', 'null', 'intermediate'],
    usageExample: {
      code: `const arr = [1, 2, 3]
// verbose:
arr.indexOf(2) !== -1  // → true
// cleaner:
arr.includes(2)        // → true`,
      explanation: {
        en: 'Prefer includes() over indexOf() !== -1 when you only need a boolean result.',
        es: 'Prefiere includes() sobre indexOf() !== -1 cuando solo necesitas un resultado booleano.',
      },
    },
  },
]
