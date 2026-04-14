import type { Exercise } from '@/shared/types/exercises'

export const endsWithExercises: Exercise[] = [
  {
    slug: 'string-ends-with-basic',
    title: 'String.prototype.endsWith() — basic match',
    description: `## String.prototype.endsWith()

\`str.endsWith(searchString)\` returns \`true\` if the string ends with the given suffix.

**Challenge:** Implement \`endsWithPeriod(str)\` that returns \`true\` when \`str\` ends with \`'.'\`.

\`\`\`ts
endsWithPeriod('Hello.') // → true
endsWithPeriod('Hello!')  // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.endsWith',
    initialCode: `function endsWithPeriod(str: string): boolean {
  // Use str.endsWith('.')
}`,
    solution: `function endsWithPeriod(str: string): boolean {
  return str.endsWith('.')
}`,
    tests: [
      { description: 'Hello. ends with .', assertion: "expect(endsWithPeriod('Hello.')).toBe(true)" },
      { description: 'Hello! does not', assertion: "expect(endsWithPeriod('Hello!')).toBe(false)" },
      { description: 'single dot ends with .', assertion: "expect(endsWithPeriod('.')).toBe(true)" },
      { description: 'empty string does not', assertion: "expect(endsWithPeriod('')).toBe(false)" },
      { description: 'dot in middle does not count', assertion: "expect(endsWithPeriod('a.b')).toBe(false)" },
    ],
    hints: [
      '`.endsWith()` only checks the very end of the string.',
    ],
    tags: ['String', 'String.prototype.endsWith', 'beginner'],
  },
  {
    slug: 'string-ends-with-no-match',
    title: 'String.prototype.endsWith() — no match',
    description: `## String.prototype.endsWith() — No Match

**Challenge:** Implement \`hasExtension(filename, ext)\` that checks if a filename ends with the given extension.

\`\`\`ts
hasExtension('photo.jpg', '.jpg') // → true
hasExtension('photo.png', '.jpg') // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.endsWith',
    initialCode: `function hasExtension(filename: string, ext: string): boolean {
  // Use filename.endsWith(ext)
}`,
    solution: `function hasExtension(filename: string, ext: string): boolean {
  return filename.endsWith(ext)
}`,
    tests: [
      { description: '.jpg matches', assertion: "expect(hasExtension('photo.jpg', '.jpg')).toBe(true)" },
      { description: '.png does not match .jpg', assertion: "expect(hasExtension('photo.png', '.jpg')).toBe(false)" },
      { description: '.ts matches', assertion: "expect(hasExtension('index.ts', '.ts')).toBe(true)" },
      { description: '.tsx does not match .ts', assertion: "expect(hasExtension('App.tsx', '.ts')).toBe(false)" },
      { description: '.json matches', assertion: "expect(hasExtension('package.json', '.json')).toBe(true)" },
    ],
    hints: [
      'Include the dot in the extension string for a precise match.',
    ],
    tags: ['String', 'String.prototype.endsWith', 'beginner'],
  },
  {
    slug: 'string-ends-with-case-sensitive',
    title: 'String.prototype.endsWith() — case-sensitive',
    description: `## String.prototype.endsWith() — Case Sensitivity

\`.endsWith()\` is case-sensitive: \`'Hello'.endsWith('o')\` → \`true\` but \`'Hello'.endsWith('O')\` → \`false\`.

**Challenge:** Implement \`endsWithO(str)\` that checks if \`str\` ends with lowercase \`'o'\`.

\`\`\`ts
endsWithO('hello') // → true
endsWithO('hellO') // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.endsWith',
    initialCode: `function endsWithO(str: string): boolean {
  // Use str.endsWith('o') — case-sensitive
}`,
    solution: `function endsWithO(str: string): boolean {
  return str.endsWith('o')
}`,
    tests: [
      { description: 'hello ends with o', assertion: "expect(endsWithO('hello')).toBe(true)" },
      { description: 'hellO does not', assertion: "expect(endsWithO('hellO')).toBe(false)" },
      { description: 'HELLO does not', assertion: "expect(endsWithO('HELLO')).toBe(false)" },
      { description: 'yo ends with o', assertion: "expect(endsWithO('yo')).toBe(true)" },
      { description: 'hi does not', assertion: "expect(endsWithO('hi')).toBe(false)" },
    ],
    hints: [
      '`.endsWith()` performs a case-sensitive comparison.',
    ],
    tags: ['String', 'String.prototype.endsWith', 'case-sensitive', 'beginner'],
  },
  {
    slug: 'string-ends-with-end-position',
    title: 'String.prototype.endsWith() — endPosition parameter',
    description: `## String.prototype.endsWith() — endPosition

The optional second argument \`endPosition\` treats the string as if it only goes up to that index.

\`\`\`ts
'Hello World'.endsWith('Hello', 5) // → true
\`\`\`

**Challenge:** Implement \`endsWithHello(str)\` that checks if the first 5 characters end with \`'Hello'\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.endsWith',
    initialCode: `function endsWithHello(str: string): boolean {
  // Use str.endsWith('Hello', 5)
}`,
    solution: `function endsWithHello(str: string): boolean {
  return str.endsWith('Hello', 5)
}`,
    tests: [
      { description: 'Hello World ends with Hello at 5', assertion: "expect(endsWithHello('Hello World')).toBe(true)" },
      { description: 'Hello ends with Hello at 5', assertion: "expect(endsWithHello('Hello')).toBe(true)" },
      { description: 'World does not', assertion: "expect(endsWithHello('World')).toBe(false)" },
      { description: 'HiHello does not (first 5 is HiHel)', assertion: "expect(endsWithHello('HiHello')).toBe(false)" },
      { description: 'empty string does not', assertion: "expect(endsWithHello('')).toBe(false)" },
    ],
    hints: [
      '`str.endsWith(search, endPos)` considers only `str.slice(0, endPos)`.',
    ],
    tags: ['String', 'String.prototype.endsWith', 'endPosition', 'intermediate'],
  },
  {
    slug: 'string-ends-with-empty-suffix',
    title: 'String.prototype.endsWith() — empty string suffix',
    description: `## String.prototype.endsWith() — Empty Suffix

Every string ends with the empty string \`''\`.

**Challenge:** Implement \`endsWithEmpty(str)\` that returns \`str.endsWith('')\`.

\`\`\`ts
endsWithEmpty('anything') // → true
endsWithEmpty('')          // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.endsWith',
    initialCode: `function endsWithEmpty(str: string): boolean {
  // Use str.endsWith('')
}`,
    solution: `function endsWithEmpty(str: string): boolean {
  return str.endsWith('')
}`,
    tests: [
      { description: 'any string ends with empty', assertion: "expect(endsWithEmpty('hello')).toBe(true)" },
      { description: 'empty ends with empty', assertion: "expect(endsWithEmpty('')).toBe(true)" },
      { description: 'space ends with empty', assertion: "expect(endsWithEmpty(' ')).toBe(true)" },
      { description: 'abc ends with empty', assertion: "expect(endsWithEmpty('abc')).toBe(true)" },
      { description: '123 ends with empty', assertion: "expect(endsWithEmpty('123')).toBe(true)" },
    ],
    hints: [
      'The empty string is a suffix of every string.',
    ],
    tags: ['String', 'String.prototype.endsWith', 'empty string', 'beginner'],
  },
]
