import type { Exercise } from '@/shared/types/exercises'

export const joinExercises: Exercise[] = [
  {
    slug: 'array-join-basic',
    title: 'Array.prototype.join() — join with comma-space',
    description: `## Array.prototype.join()

\`Array.prototype.join(separator?)\` joins all elements of an array into a single string, separated by the given \`separator\`. The default separator is a comma (\`,\`).

**Challenge:** Implement \`joinWithComma(arr)\` that joins the array with \`', '\` (comma followed by space).

\`\`\`ts
joinWithComma(['a', 'b', 'c']) // → 'a, b, c'
joinWithComma(['one'])         // → 'one'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.join',
    initialCode: `function joinWithComma(arr: string[]): string {
  // Use arr.join(', ')
}`,
    solution: `function joinWithComma(arr: string[]): string {
  return arr.join(', ')
}`,
    tests: [
      { description: "joins ['a','b','c'] with ', '", assertion: "expect(joinWithComma(['a', 'b', 'c'])).toBe('a, b, c')" },
      { description: 'single element no separator', assertion: "expect(joinWithComma(['one'])).toBe('one')" },
      { description: 'empty array returns empty string', assertion: "expect(joinWithComma([])).toBe('')" },
      { description: 'two elements', assertion: "expect(joinWithComma(['hello', 'world'])).toBe('hello, world')" },
      { description: 'returns a string', assertion: "expect(typeof joinWithComma(['a'])).toBe('string')" },
    ],
    hints: [
      '`join(\', \')` uses comma+space as the separator between elements.',
      'An empty array joined returns an empty string `""`.',
    ],
    tags: ['Array', 'Array.prototype.join', 'string', 'beginner'],
    usageExample: {
      code: `const words = ['Hello', 'World']
words.join(' ')  // → 'Hello World'`,
      explanation: {
        en: 'Use join() to concatenate all array elements into a single string with a separator.',
        es: 'Usa join() para concatenar todos los elementos del array en una sola cadena con un separador.',
      },
    },
  },
  {
    slug: 'array-join-custom-sep',
    title: 'Array.prototype.join() — custom separator',
    description: `## Array.prototype.join() — any separator

\`join()\` accepts any string as the separator, including empty string, spaces, or multi-character strings.

**Challenge:** Implement \`joinWith(arr, sep)\` that joins the array using the given separator.

\`\`\`ts
joinWith(['a', 'b', 'c'], '-') // → 'a-b-c'
joinWith(['a', 'b', 'c'], '')  // → 'abc'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.join',
    initialCode: `function joinWith(arr: string[], sep: string): string {
  // Use arr.join(sep)
}`,
    solution: `function joinWith(arr: string[], sep: string): string {
  return arr.join(sep)
}`,
    tests: [
      { description: "joins with '-'", assertion: "expect(joinWith(['a', 'b', 'c'], '-')).toBe('a-b-c')" },
      { description: "joins with empty string", assertion: "expect(joinWith(['a', 'b', 'c'], '')).toBe('abc')" },
      { description: "joins with space", assertion: "expect(joinWith(['hello', 'world'], ' ')).toBe('hello world')" },
      { description: 'empty array returns empty string', assertion: "expect(joinWith([], '-')).toBe('')" },
      { description: "joins with multi-char separator", assertion: "expect(joinWith(['a', 'b'], ' | ')).toBe('a | b')" },
    ],
    hints: [
      '`join(\'\')` concatenates all elements with no separator between them.',
      'The separator only appears *between* elements, not before the first or after the last.',
    ],
    tags: ['Array', 'Array.prototype.join', 'separator', 'beginner'],
    usageExample: {
      code: `const nums = [1, 2, 3]
nums.join(' - ')  // → '1 - 2 - 3'
nums.join('')     // → '123'`,
      explanation: {
        en: 'Pass any string as the separator to join() to control how elements are delimited.',
        es: 'Pasa cualquier cadena como separador a join() para controlar cómo se delimitan los elementos.',
      },
    },
  },
  {
    slug: 'array-join-path',
    title: 'Array.prototype.join() — build a file path',
    description: `## Array.prototype.join() — building paths

Joining path segments with \`'/'\` is a classic use case for \`join()\`.

**Challenge:** Implement \`buildPath(parts)\` that joins path segments with \`'/'\`.

\`\`\`ts
buildPath(['usr', 'local', 'bin']) // → 'usr/local/bin'
buildPath(['src', 'index.ts'])     // → 'src/index.ts'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.join',
    initialCode: `function buildPath(parts: string[]): string {
  // Use parts.join('/') to create a path
}`,
    solution: `function buildPath(parts: string[]): string {
  return parts.join('/')
}`,
    tests: [
      { description: "builds path 'usr/local/bin'", assertion: "expect(buildPath(['usr', 'local', 'bin'])).toBe('usr/local/bin')" },
      { description: "builds 'src/index.ts'", assertion: "expect(buildPath(['src', 'index.ts'])).toBe('src/index.ts')" },
      { description: 'empty array returns empty string', assertion: "expect(buildPath([])).toBe('')" },
      { description: 'single part no slash', assertion: "expect(buildPath(['root'])).toBe('root')" },
      { description: 'two parts joined with slash', assertion: "expect(buildPath(['a', 'b'])).toBe('a/b')" },
    ],
    hints: [
      '`join(\'/\')` places a single `/` between each segment.',
      'For absolute paths, prepend `/` to the result: `\'/\' + parts.join(\'/\')`.',
    ],
    tags: ['Array', 'Array.prototype.join', 'path', 'intermediate'],
    usageExample: {
      code: `const parts = ['usr', 'local', 'bin']
parts.join('/')  // → 'usr/local/bin'`,
      explanation: {
        en: "Use join('/') to construct file paths from an array of path segments.",
        es: "Usa join('/') para construir rutas de archivo a partir de un array de segmentos de ruta.",
      },
    },
  },
  {
    slug: 'array-join-default',
    title: 'Array.prototype.join() — default separator',
    description: `## Array.prototype.join() — default comma separator

When called with no arguments, \`join()\` uses a comma (\`,\`) as the separator — with no space.

**Challenge:** Implement \`joinDefault(arr)\` that calls \`arr.join()\` with no separator argument.

\`\`\`ts
joinDefault([1, 2, 3]) // → '1,2,3'
joinDefault([])        // → ''
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.join',
    initialCode: `function joinDefault(arr: number[]): string {
  // Use arr.join() with no arguments
}`,
    solution: `function joinDefault(arr: number[]): string {
  return arr.join()
}`,
    tests: [
      { description: 'joins numbers with default comma', assertion: "expect(joinDefault([1, 2, 3])).toBe('1,2,3')" },
      { description: 'empty array returns empty string', assertion: "expect(joinDefault([])).toBe('')" },
      { description: 'single element no comma', assertion: "expect(joinDefault([5])).toBe('5')" },
      { description: 'numbers are converted to strings', assertion: "expect(typeof joinDefault([1, 2])).toBe('string')" },
      { description: 'default is comma not comma-space', assertion: "expect(joinDefault([1, 2])).toBe('1,2')" },
    ],
    hints: [
      'The default separator is `","` — no space included.',
      'Number elements are converted to strings via `.toString()` before joining.',
    ],
    tags: ['Array', 'Array.prototype.join', 'default', 'beginner'],
    usageExample: {
      code: `const arr = [1, 2, 3]
arr.join()    // → '1,2,3'  (default separator is ',')
arr.toString() // → '1,2,3'  (same result)`,
      explanation: {
        en: 'Calling join() without arguments uses a comma as the default separator.',
        es: 'Llamar a join() sin argumentos usa una coma como separador predeterminado.',
      },
    },
  },
  {
    slug: 'array-join-html',
    title: 'Array.prototype.join() — build an HTML list',
    description: `## Array.prototype.join() — HTML generation

\`join()\` is handy for generating HTML markup by wrapping elements and joining them with a newline or other separator.

**Challenge:** Implement \`createList(items)\` that wraps each item in \`<li>\` tags and joins them with \`'\\n'\`.

\`\`\`ts
createList(['apples', 'bananas']) // → '<li>apples</li>\\n<li>bananas</li>'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.join',
    initialCode: `function createList(items: string[]): string {
  // Map items to <li>item</li> strings then join with '\\n'
}`,
    solution: `function createList(items: string[]): string {
  return items.map(item => \`<li>\${item}</li>\`).join('\\n')
}`,
    tests: [
      { description: 'wraps items in li tags joined with newline', assertion: "expect(createList(['apples', 'bananas'])).toBe('<li>apples</li>\\n<li>bananas</li>')" },
      { description: 'empty array returns empty string', assertion: "expect(createList([])).toBe('')" },
      { description: 'single item no newline', assertion: "expect(createList(['one'])).toBe('<li>one</li>')" },
      { description: 'three items joined correctly', assertion: "expect(createList(['a','b','c']).split('\\n')).toHaveLength(3)" },
      { description: 'each item has li tags', assertion: "expect(createList(['x'])).toContain('<li>')" },
    ],
    hints: [
      'First `map` each item to `<li>item</li>`, then `join` the resulting array.',
      'Template literals make it easy to wrap values: `` `<li>${item}</li>` ``.',
    ],
    tags: ['Array', 'Array.prototype.join', 'HTML', 'template', 'intermediate'],
    usageExample: {
      code: `const items = ['<li>one</li>', '<li>two</li>', '<li>three</li>']
items.join('\\n')  // → HTML list content joined with newlines`,
      explanation: {
        en: 'Use join() to assemble HTML snippets from an array of strings.',
        es: 'Usa join() para ensamblar fragmentos HTML a partir de un array de cadenas.',
      },
    },
  },
]
