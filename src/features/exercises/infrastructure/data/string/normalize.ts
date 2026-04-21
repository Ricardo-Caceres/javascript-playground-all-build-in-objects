import type { Exercise } from '@/shared/types/exercises'

export const normalizeExercises: Exercise[] = [
  {
    slug: 'string-normalize-nfc-default',
    title: 'String.prototype.normalize() — NFC (default)',
    description: `## String.prototype.normalize()

\`str.normalize(form)\` returns the Unicode Normalization Form of the string.

- **NFC** (default): Canonical Decomposition, followed by Canonical Composition (precomposed form).
- \`'\\u00e9'\` is the precomposed é (NFC form).
- \`'\\u0065\\u0301'\` is decomposed (e + combining accent, NFD form).

**Challenge:** Implement \`toNFC(str)\` using \`.normalize('NFC')\`.

\`\`\`ts
toNFC('\\u0065\\u0301') // → '\\u00e9'  (é precomposed)
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.normalize',
    initialCode: `function toNFC(str: string): string {
  // Use str.normalize('NFC')
}`,
    solution: `function toNFC(str: string): string {
  return str.normalize('NFC')
}`,
    tests: [
      { description: 'decomposed e+accent becomes precomposed é', assertion: "expect(toNFC('\\u0065\\u0301')).toBe('\\u00e9')" },
      { description: 'NFC of precomposed é stays é', assertion: "expect(toNFC('\\u00e9')).toBe('\\u00e9')" },
      { description: 'NFC has length 1 for é', assertion: "expect(toNFC('\\u0065\\u0301')).toHaveLength(1)" },
      { description: 'normal ASCII unchanged', assertion: "expect(toNFC('hello')).toBe('hello')" },
      { description: 'result equals precomposed form', assertion: "expect(toNFC('\\u0065\\u0301') === '\\u00e9').toBe(true)" },
    ],
    hints: [
      '`\\u00e9` is precomposed é. `\\u0065\\u0301` is e followed by a combining acute accent.',
    ],
    tags: ['String', 'String.prototype.normalize', 'NFC', 'Unicode', 'intermediate'],
    usageExample: {
      code: `const e1 = '\u00e9'           // é precomposed
const e2 = '\u0065\u0301'    // e + combining accent
e2.normalize('NFC') === e1    // → true`,
      explanation: {
        en: "Use normalize() to convert a string to a Unicode normal form, useful for comparing visually identical strings.",
        es: "Usa normalize() para convertir una cadena a una forma normal Unicode, útil para comparar cadenas visualmente idénticas.",
      },
    },
  },
  {
    slug: 'string-normalize-nfd',
    title: 'String.prototype.normalize() — NFD (decomposed)',
    description: `## String.prototype.normalize() — NFD

**NFD** (Canonical Decomposition): decomposes precomposed characters into base + combining marks.

\`'\\u00e9'.normalize('NFD')\` → \`'\\u0065\\u0301'\` (2 code units).

**Challenge:** Implement \`toNFD(str)\` using \`.normalize('NFD')\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.normalize',
    initialCode: `function toNFD(str: string): string {
  // Use str.normalize('NFD')
}`,
    solution: `function toNFD(str: string): string {
  return str.normalize('NFD')
}`,
    tests: [
      { description: 'precomposed é becomes decomposed', assertion: "expect(toNFD('\\u00e9')).toBe('\\u0065\\u0301')" },
      { description: 'NFD has length 2 for é', assertion: "expect(toNFD('\\u00e9')).toHaveLength(2)" },
      { description: 'decomposed stays decomposed', assertion: "expect(toNFD('\\u0065\\u0301')).toBe('\\u0065\\u0301')" },
      { description: 'ASCII unchanged', assertion: "expect(toNFD('abc')).toBe('abc')" },
      { description: 'NFC and NFD of e differ in length', assertion: "expect(toNFD('\\u00e9').length > '\\u00e9'.normalize('NFC').length).toBe(true)" },
    ],
    hints: [
      'NFD splits precomposed characters into their base character + combining diacritic marks.',
    ],
    tags: ['String', 'String.prototype.normalize', 'NFD', 'Unicode', 'intermediate'],
    usageExample: {
      code: `const e1 = '\u00e9'           // é precomposed
const e2 = '\u0065\u0301'    // e + combining accent
e2.normalize('NFC') === e1    // → true`,
      explanation: {
        en: "Use normalize() to convert a string to a Unicode normal form, useful for comparing visually identical strings.",
        es: "Usa normalize() para convertir una cadena a una forma normal Unicode, útil para comparar cadenas visualmente idénticas.",
      },
    },
  },
  {
    slug: 'string-normalize-nfkc',
    title: 'String.prototype.normalize() — NFKC',
    description: `## String.prototype.normalize() — NFKC

**NFKC** (Compatibility Decomposition + Canonical Composition): also maps compatibility characters to their canonical equivalents.

For example, the full-width digit \`'\\uFF10'\` (０) normalizes to \`'0'\` under NFKC.

**Challenge:** Implement \`toNFKC(str)\` using \`.normalize('NFKC')\`.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'String',
    method: 'String.prototype.normalize',
    initialCode: `function toNFKC(str: string): string {
  // Use str.normalize('NFKC')
}`,
    solution: `function toNFKC(str: string): string {
  return str.normalize('NFKC')
}`,
    tests: [
      { description: 'full-width 0 (\\uFF10) becomes 0', assertion: "expect(toNFKC('\\uFF10')).toBe('0')" },
      { description: 'full-width A (\\uFF21) becomes A', assertion: "expect(toNFKC('\\uFF21')).toBe('A')" },
      { description: 'ASCII unchanged', assertion: "expect(toNFKC('hello')).toBe('hello')" },
      { description: 'superscript 2 (\\u00B2) becomes 2', assertion: "expect(toNFKC('\\u00B2')).toBe('2')" },
      { description: 'result is a string', assertion: "expect(typeof toNFKC('abc')).toBe('string')" },
    ],
    hints: [
      'NFKC converts compatibility variants (full-width, superscripts, etc.) to their ASCII equivalents.',
    ],
    tags: ['String', 'String.prototype.normalize', 'NFKC', 'Unicode', 'advanced'],
    usageExample: {
      code: `const e1 = '\u00e9'           // é precomposed
const e2 = '\u0065\u0301'    // e + combining accent
e2.normalize('NFC') === e1    // → true`,
      explanation: {
        en: "Use normalize() to convert a string to a Unicode normal form, useful for comparing visually identical strings.",
        es: "Usa normalize() para convertir una cadena a una forma normal Unicode, útil para comparar cadenas visualmente idénticas.",
      },
    },
  },
  {
    slug: 'string-normalize-nfkd',
    title: 'String.prototype.normalize() — NFKD',
    description: `## String.prototype.normalize() — NFKD

**NFKD** (Compatibility Decomposition): like NFD but also decomposes compatibility characters.

**Challenge:** Implement \`toNFKD(str)\` using \`.normalize('NFKD')\`.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'String',
    method: 'String.prototype.normalize',
    initialCode: `function toNFKD(str: string): string {
  // Use str.normalize('NFKD')
}`,
    solution: `function toNFKD(str: string): string {
  return str.normalize('NFKD')
}`,
    tests: [
      { description: 'full-width 0 becomes 0', assertion: "expect(toNFKD('\\uFF10')).toBe('0')" },
      { description: 'ASCII unchanged', assertion: "expect(toNFKD('abc')).toBe('abc')" },
      { description: 'precomposed é decomposes', assertion: "expect(toNFKD('\\u00e9')).toBe('\\u0065\\u0301')" },
      { description: 'result is a string', assertion: "expect(typeof toNFKD('test')).toBe('string')" },
      { description: 'superscript 3 (\\u00B3) becomes 3', assertion: "expect(toNFKD('\\u00B3')).toBe('3')" },
    ],
    hints: [
      'NFKD = NFKC but without the final composition step.',
    ],
    tags: ['String', 'String.prototype.normalize', 'NFKD', 'Unicode', 'advanced'],
    usageExample: {
      code: `const e1 = '\u00e9'           // é precomposed
const e2 = '\u0065\u0301'    // e + combining accent
e2.normalize('NFC') === e1    // → true`,
      explanation: {
        en: "Use normalize() to convert a string to a Unicode normal form, useful for comparing visually identical strings.",
        es: "Usa normalize() para convertir una cadena a una forma normal Unicode, útil para comparar cadenas visualmente idénticas.",
      },
    },
  },
  {
    slug: 'string-normalize-compare',
    title: 'String.prototype.normalize() — compare normalized strings',
    description: `## String.prototype.normalize() — Comparison

Two strings that look identical but use different Unicode representations will NOT be \`===\` equal unless both are normalized to the same form.

**Challenge:** Implement \`normalizedEqual(a, b)\` that returns \`true\` when both strings are NFC-equal.

\`\`\`ts
normalizedEqual('\\u00e9', '\\u0065\\u0301') // → true (same visual, different encoding)
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.normalize',
    initialCode: `function normalizedEqual(a: string, b: string): boolean {
  // Normalize both to NFC and compare
}`,
    solution: `function normalizedEqual(a: string, b: string): boolean {
  return a.normalize('NFC') === b.normalize('NFC')
}`,
    tests: [
      { description: 'precomposed and decomposed é are equal', assertion: "expect(normalizedEqual('\\u00e9', '\\u0065\\u0301')).toBe(true)" },
      { description: 'different chars are not equal', assertion: "expect(normalizedEqual('a', 'b')).toBe(false)" },
      { description: 'same string is equal', assertion: "expect(normalizedEqual('hello', 'hello')).toBe(true)" },
      { description: 'raw comparison would fail', assertion: "expect('\\u00e9' === '\\u0065\\u0301').toBe(false)" },
      { description: 'normalized comparison succeeds', assertion: "expect('\\u00e9'.normalize('NFC') === '\\u0065\\u0301'.normalize('NFC')).toBe(true)" },
    ],
    hints: [
      'Without normalization, `"\\u00e9" !== "\\u0065\\u0301"` even though they look the same.',
    ],
    tags: ['String', 'String.prototype.normalize', 'NFC', 'comparison', 'intermediate'],
    usageExample: {
      code: `const e1 = '\u00e9'           // é precomposed
const e2 = '\u0065\u0301'    // e + combining accent
e2.normalize('NFC') === e1    // → true`,
      explanation: {
        en: "Use normalize() to convert a string to a Unicode normal form, useful for comparing visually identical strings.",
        es: "Usa normalize() para convertir una cadena a una forma normal Unicode, útil para comparar cadenas visualmente idénticas.",
      },
    },
  },
]
