import type { Exercise } from '@/shared/types/exercises'

export const rawExercises: Exercise[] = [
  {
    slug: 'string-raw-basic',
    title: 'String.raw — basic tagged template',
    description: `## String.raw

\`String.raw\` is a tagged template literal function. It returns the raw string form where backslash escape sequences are NOT processed.

**Challenge:** Implement \`getRawPath()\` that uses \`String.raw\` to return the string \`C:\\\\Users\\\\name\` without double-escaping.

\`\`\`ts
getRawPath() // → 'C:\\Users\\name'
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.raw',
    initialCode: `function getRawPath(): string {
  // Use String.raw\`C:\\Users\\name\` — backslashes are literal
  return String.raw\`C:\\Users\\name\`
}`,
    solution: `function getRawPath(): string {
  return String.raw\`C:\\Users\\name\`
}`,
    tests: [
      { description: 'returns path with backslashes', assertion: "expect(getRawPath()).toBe('C:\\\\Users\\\\name')" },
      { description: 'result is a string', assertion: "expect(typeof getRawPath()).toBe('string')" },
      { description: 'contains backslash', assertion: "expect(getRawPath()).toContain('\\\\')" },
      { description: 'starts with C:', assertion: "expect(getRawPath().startsWith('C:')).toBe(true)" },
      { description: 'has correct length', assertion: "expect(getRawPath()).toHaveLength(12)" },
    ],
    hints: [
      'In `String.raw`, a single `\\` in the template source is preserved as `\\` in the output.',
    ],
    tags: ['String', 'String.raw', 'tagged template', 'backslash', 'beginner'],
  },
  {
    slug: 'string-raw-no-newline',
    title: 'String.raw — backslash-n not a newline',
    description: `## String.raw — Escape Sequences Not Interpreted

In a normal template literal, \`\\n\` becomes a newline. With \`String.raw\`, it stays as the two characters \`\\\` and \`n\`.

**Challenge:** Implement \`rawNewline()\` that returns the two-character string \`\\n\` (not an actual newline) using \`String.raw\`.

\`\`\`ts
rawNewline() // → '\\n'  (2 chars: backslash + n)
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.raw',
    initialCode: `function rawNewline(): string {
  // Use String.raw\`\\n\` so \\n is not treated as a newline
  return String.raw\`\\n\`
}`,
    solution: `function rawNewline(): string {
  return String.raw\`\\n\`
}`,
    tests: [
      { description: 'length is 2', assertion: "expect(rawNewline()).toHaveLength(2)" },
      { description: 'equals backslash-n', assertion: "expect(rawNewline()).toBe('\\\\n')" },
      { description: 'is not an actual newline', assertion: "expect(rawNewline()).toBe(String.raw`\\n`)" },
      { description: 'does not include newline char', assertion: "expect(rawNewline().includes('\\n')).toBe(false)" },
      { description: 'starts with backslash', assertion: "expect(rawNewline().charCodeAt(0)).toBe(92)" },
    ],
    hints: [
      '`String.raw\\`\\n\\`` → the 2-char string `\\n`, not a newline.',
      'The backslash character has char code 92.',
    ],
    tags: ['String', 'String.raw', 'escape sequences', 'beginner'],
  },
  {
    slug: 'string-raw-interpolation-still-works',
    title: 'String.raw — interpolation still works',
    description: `## String.raw — Expressions Are Still Interpolated

\`String.raw\` does not prevent \`\${expression}\` interpolation — only backslash escapes are raw.

**Challenge:** Implement \`rawWithName(name)\` that returns \`Hello, <name>!\\n\` (with a literal \`\\n\`) using \`String.raw\`.

\`\`\`ts
rawWithName('Alice') // → 'Hello, Alice!\\n'
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.raw',
    initialCode: `function rawWithName(name: string): string {
  // Use String.raw\`Hello, \${name}!\\n\`
  return String.raw\`Hello, \${name}!\\n\`
}`,
    solution: `function rawWithName(name: string): string {
  return String.raw\`Hello, \${name}!\\n\`
}`,
    tests: [
      { description: 'interpolates name', assertion: "expect(rawWithName('Alice')).toContain('Alice')" },
      { description: 'ends with literal \\n', assertion: "expect(rawWithName('Alice').endsWith('\\\\n')).toBe(true)" },
      { description: 'correct full string', assertion: "expect(rawWithName('Alice')).toBe('Hello, Alice!\\\\n')" },
      { description: 'works with different name', assertion: "expect(rawWithName('Bob')).toBe('Hello, Bob!\\\\n')" },
      { description: 'backslash-n is 2 chars', assertion: "expect(rawWithName('X').slice(-2)).toBe('\\\\n')" },
    ],
    hints: [
      '`${name}` still expands normally in `String.raw` — only escape sequences like `\\n` are left raw.',
    ],
    tags: ['String', 'String.raw', 'interpolation', 'intermediate'],
  },
  {
    slug: 'string-raw-vs-regular',
    title: 'String.raw — compare with regular template literal',
    description: `## String.raw vs Regular Template Literal

A regular template literal interprets \`\\t\` as a tab. \`String.raw\` keeps it as two characters.

**Challenge:** Implement \`regularHasTab()\` that returns \`true\` when a regular template \`\`\`\\t\`\`\` contains an actual tab character.

\`\`\`ts
regularHasTab() // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.raw',
    initialCode: `function regularHasTab(): boolean {
  const regular = \`\\t\`
  // Return true if regular contains a real tab (charCode 9)
}`,
    solution: `function regularHasTab(): boolean {
  const regular = \`\\t\`
  return regular.charCodeAt(0) === 9
}`,
    tests: [
      { description: 'regular template has tab char', assertion: "expect(regularHasTab()).toBe(true)" },
      { description: 'String.raw keeps backslash-t literal', assertion: "expect(String.raw`\\t`.length).toBe(2)" },
      { description: 'regular template \\t has length 1', assertion: "expect(`\\t`.length).toBe(1)" },
      { description: 'String.raw \\t first char is backslash', assertion: "expect(String.raw`\\t`.charCodeAt(0)).toBe(92)" },
      { description: 'String.raw \\t second char is t', assertion: "expect(String.raw`\\t`.charCodeAt(1)).toBe(116)" },
    ],
    hints: [
      'Tab char code is 9. Backslash char code is 92.',
    ],
    tags: ['String', 'String.raw', 'template literal', 'tab', 'intermediate'],
  },
  {
    slug: 'string-raw-unicode-escape',
    title: 'String.raw — unicode escape not interpreted',
    description: `## String.raw — Unicode Escapes Are Also Raw

In a regular template literal, \`\\u0041\` renders as \`A\`. In \`String.raw\`, it stays as 6 characters.

**Challenge:** Implement \`rawUnicode()\` that returns the 6-character string \`\\u0041\` using \`String.raw\`.

\`\`\`ts
rawUnicode() // → '\\u0041'  (6 chars)
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.raw',
    initialCode: `function rawUnicode(): string {
  // Use String.raw\`\\u0041\` so it is NOT converted to 'A'
  return String.raw\`\\u0041\`
}`,
    solution: `function rawUnicode(): string {
  return String.raw\`\\u0041\`
}`,
    tests: [
      { description: 'length is 6', assertion: "expect(rawUnicode()).toHaveLength(6)" },
      { description: 'equals literal string', assertion: "expect(rawUnicode()).toBe('\\\\u0041')" },
      { description: 'is not A', assertion: "expect(rawUnicode()).toBe(String.raw`\\u0041`)" },
      { description: 'starts with backslash', assertion: "expect(rawUnicode().startsWith('\\\\')).toBe(true)" },
      { description: 'contains u0041', assertion: "expect(rawUnicode()).toContain('u0041')" },
    ],
    hints: [
      '`String.raw\\`\\u0041\\`` → the 6-char string `\\u0041`, not `A`.',
    ],
    tags: ['String', 'String.raw', 'unicode escape', 'intermediate'],
  },
]
