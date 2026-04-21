import type { Exercise } from '@/shared/types/exercises'

export const trimStartExercises: Exercise[] = [
  {
    slug: 'string-trim-start-leading-spaces',
    title: 'String.prototype.trimStart() — leading spaces removed',
    description: `## String.prototype.trimStart()

\`str.trimStart()\` removes whitespace from the **start** (left side) of a string only.

**Challenge:** Implement \`trimLeft(str)\` that removes leading whitespace.

\`\`\`ts
trimLeft('   hello') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trimStart',
    initialCode: `function trimLeft(str: string): string {
  // Use str.trimStart()
}`,
    solution: `function trimLeft(str: string): string {
  return str.trimStart()
}`,
    tests: [
      { description: 'removes leading spaces', assertion: "expect(trimLeft('   hello')).toBe('hello')" },
      { description: 'multiple leading spaces', assertion: "expect(trimLeft('    hi')).toBe('hi')" },
      { description: 'only leading whitespace', assertion: "expect(trimLeft('   ')).toBe('')" },
      { description: 'no leading whitespace unchanged', assertion: "expect(trimLeft('hello')).toBe('hello')" },
      { description: 'leading spaces before world', assertion: "expect(trimLeft('   world')).toBe('world')" },
    ],
    hints: [
      '`trimStart()` only removes whitespace at the beginning of the string.',
    ],
    tags: ['String', 'String.prototype.trimStart', 'beginner'],
    usageExample: {
      code: `'  hello  '.trimStart()   // → 'hello  '
'   text'.trimStart()    // → 'text'
'hi'.trimStart()          // → 'hi'`,
      explanation: {
        en: "Use trimStart() to remove only leading whitespace from the beginning of a string, leaving trailing whitespace intact.",
        es: "Usa trimStart() para eliminar solo los espacios en blanco al inicio de una cadena, dejando intactos los del final.",
      },
    },
  },
  {
    slug: 'string-trim-start-trailing-preserved',
    title: 'String.prototype.trimStart() — trailing spaces preserved',
    description: `## String.prototype.trimStart() — Trailing Spaces Preserved

\`trimStart()\` does NOT touch trailing whitespace — only leading whitespace is removed.

**Challenge:** Implement \`trimStartOnly(str)\` that removes leading but preserves trailing whitespace.

\`\`\`ts
trimStartOnly('  hello  ') // → 'hello  '
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trimStart',
    initialCode: `function trimStartOnly(str: string): string {
  // Use str.trimStart() — trailing spaces are kept
}`,
    solution: `function trimStartOnly(str: string): string {
  return str.trimStart()
}`,
    tests: [
      { description: 'leading removed, trailing preserved', assertion: "expect(trimStartOnly('  hello  ')).toBe('hello  ')" },
      { description: 'trailing spaces still there', assertion: "expect(trimStartOnly('   hi   ').endsWith('   ')).toBe(true)" },
      { description: 'only leading spaces removed', assertion: "expect(trimStartOnly('  test  ')).toBe('test  ')" },
      { description: 'no leading, trailing kept', assertion: "expect(trimStartOnly('world  ')).toBe('world  ')" },
      { description: 'only leading becomes empty', assertion: "expect(trimStartOnly('   ')).toBe('')" },
    ],
    hints: [
      '`trimStart()` is asymmetric — it only affects the left side of the string.',
    ],
    tags: ['String', 'String.prototype.trimStart', 'beginner'],
    usageExample: {
      code: `'  hello  '.trimStart()   // → 'hello  '
'   text'.trimStart()    // → 'text'
'hi'.trimStart()          // → 'hi'`,
      explanation: {
        en: "Use trimStart() to remove only leading whitespace from the beginning of a string, leaving trailing whitespace intact.",
        es: "Usa trimStart() para eliminar solo los espacios en blanco al inicio de una cadena, dejando intactos los del final.",
      },
    },
  },
  {
    slug: 'string-trim-start-both-only-trailing-preserved',
    title: 'String.prototype.trimStart() — both ends → only trailing preserved',
    description: `## String.prototype.trimStart() — Only Leading Removed

When both leading and trailing whitespace exist, \`trimStart()\` leaves the trailing intact.

**Challenge:** Implement \`keepTrailing(str)\` using \`trimStart\`.

\`\`\`ts
keepTrailing('   hello   ') // → 'hello   '
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trimStart',
    initialCode: `function keepTrailing(str: string): string {
  // Use str.trimStart()
}`,
    solution: `function keepTrailing(str: string): string {
  return str.trimStart()
}`,
    tests: [
      { description: 'trailing preserved after trimStart', assertion: "expect(keepTrailing('   hello   ')).toBe('hello   ')" },
      { description: 'trailing spaces count correct', assertion: "expect(keepTrailing('  hi  ').endsWith('  ')).toBe(true)" },
      { description: 'no leading space after trimStart', assertion: "expect(keepTrailing('  abc  ').startsWith('a')).toBe(true)" },
      { description: 'only trailing remains', assertion: "expect(keepTrailing('  world  ')).toBe('world  ')" },
      { description: 'trailing tabs preserved', assertion: "expect(keepTrailing('\\ttest\\t')).toBe('test\\t')" },
    ],
    hints: [
      '`trimStart()` removes only the prefix whitespace, leaving the suffix intact.',
    ],
    tags: ['String', 'String.prototype.trimStart', 'beginner'],
    usageExample: {
      code: `'  hello  '.trimStart()   // → 'hello  '
'   text'.trimStart()    // → 'text'
'hi'.trimStart()          // → 'hi'`,
      explanation: {
        en: "Use trimStart() to remove only leading whitespace from the beginning of a string, leaving trailing whitespace intact.",
        es: "Usa trimStart() para eliminar solo los espacios en blanco al inicio de una cadena, dejando intactos los del final.",
      },
    },
  },
  {
    slug: 'string-trim-start-no-whitespace',
    title: 'String.prototype.trimStart() — no whitespace unchanged',
    description: `## String.prototype.trimStart() — Clean String

A string without leading whitespace is returned unchanged by \`trimStart()\`.

**Challenge:** Implement \`verifyTrimStart(str)\` using \`trimStart\`.

\`\`\`ts
verifyTrimStart('hello') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trimStart',
    initialCode: `function verifyTrimStart(str: string): string {
  // Use str.trimStart()
}`,
    solution: `function verifyTrimStart(str: string): string {
  return str.trimStart()
}`,
    tests: [
      { description: 'hello unchanged', assertion: "expect(verifyTrimStart('hello')).toBe('hello')" },
      { description: 'world unchanged', assertion: "expect(verifyTrimStart('world')).toBe('world')" },
      { description: 'abc unchanged', assertion: "expect(verifyTrimStart('abc')).toBe('abc')" },
      { description: 'empty unchanged', assertion: "expect(verifyTrimStart('')).toBe('')" },
      { description: 'internal spaces preserved', assertion: "expect(verifyTrimStart('hello world')).toBe('hello world')" },
    ],
    hints: [
      '`trimStart()` is a no-op when there is no leading whitespace.',
    ],
    tags: ['String', 'String.prototype.trimStart', 'beginner'],
    usageExample: {
      code: `'  hello  '.trimStart()   // → 'hello  '
'   text'.trimStart()    // → 'text'
'hi'.trimStart()          // → 'hi'`,
      explanation: {
        en: "Use trimStart() to remove only leading whitespace from the beginning of a string, leaving trailing whitespace intact.",
        es: "Usa trimStart() para eliminar solo los espacios en blanco al inicio de una cadena, dejando intactos los del final.",
      },
    },
  },
  {
    slug: 'string-trim-start-leading-tab',
    title: 'String.prototype.trimStart() — leading tab',
    description: `## String.prototype.trimStart() — Tab Character

\`trimStart()\` also removes leading tabs.

**Challenge:** Implement \`removeLeadingTab(str)\` that removes a leading tab.

\`\`\`ts
removeLeadingTab('\\thello') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trimStart',
    initialCode: `function removeLeadingTab(str: string): string {
  // Use str.trimStart()
}`,
    solution: `function removeLeadingTab(str: string): string {
  return str.trimStart()
}`,
    tests: [
      { description: 'removes leading tab', assertion: "expect(removeLeadingTab('\\thello')).toBe('hello')" },
      { description: 'removes multiple leading tabs', assertion: "expect(removeLeadingTab('\\t\\thi')).toBe('hi')" },
      { description: 'removes leading newline', assertion: "expect(removeLeadingTab('\\nhello')).toBe('hello')" },
      { description: 'trailing tab preserved', assertion: "expect(removeLeadingTab('hello\\t')).toBe('hello\\t')" },
      { description: 'no tab unchanged', assertion: "expect(removeLeadingTab('hello')).toBe('hello')" },
    ],
    hints: [
      '`trimStart()` removes all leading whitespace: spaces, tabs (`\\t`), and newlines (`\\n`).',
    ],
    tags: ['String', 'String.prototype.trimStart', 'whitespace', 'beginner'],
    usageExample: {
      code: `'  hello  '.trimStart()   // → 'hello  '
'   text'.trimStart()    // → 'text'
'hi'.trimStart()          // → 'hi'`,
      explanation: {
        en: "Use trimStart() to remove only leading whitespace from the beginning of a string, leaving trailing whitespace intact.",
        es: "Usa trimStart() para eliminar solo los espacios en blanco al inicio de una cadena, dejando intactos los del final.",
      },
    },
  },
]
