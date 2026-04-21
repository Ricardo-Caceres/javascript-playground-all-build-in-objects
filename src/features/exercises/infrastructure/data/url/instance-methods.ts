import type { Exercise } from '@/shared/types/exercises'

export const urlInstanceMethodsExercises: Exercise[] = [
  {
    slug: 'url-instance-method-1',
    title: 'URL#toString() — equals href',
    description: `## URL#toString()\n\n\`url.toString()\` returns the serialized URL, identical to \`url.href\`.\n\n**Challenge:** Verify that \`toString()\` output equals \`href\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'URL',
    initialCode: `const u = new URL('https://a.com/p')\n// compare u.toString() and u.href\n`,
    solution: `new URL('https://a.com/p').toString() === new URL('https://a.com/p').href`,
    tests: [
      { description: 'toString equals href', assertion:"expect(new URL('https://a.com/p').toString()).toBe(new URL('https://a.com/p').href)" },
      { description: 'toString returns full URL', assertion:"expect(new URL('https://a.com/p').toString()).toContain('https://a.com')" },
      { description: 'toString is a function', assertion:"expect(typeof new URL('https://a.com').toString).toBe('function')" },
      { description: 'toString returns a string', assertion:"expect(typeof new URL('https://a.com').toString()).toBe('string')" },
      { description: 'toString includes pathname', assertion:"expect(new URL('https://a.com/mypath').toString()).toContain('/mypath')" },
    ],
    hints: ['url.toString() and url.href both return the serialized URL'],
    tags: ['URL', 'instance-method', 'toString'],
    usageExample: {
      code: `const u = new URL('https://example.com/path')
u.toString()  // → 'https://example.com/path'`,
      explanation: {
        en: "toString() returns the full serialized URL string.",
        es: "toString() devuelve la cadena URL serializada completa.",
      },
    },
  },
  {
    slug: 'url-instance-method-2',
    title: 'URL#toString() — reflects property changes',
    description: `## URL#toString() — after mutation\n\nChanging a URL property (e.g. \`pathname\`) updates the serialized URL returned by \`toString()\`.\n\n**Challenge:** Change \`pathname\` and verify \`toString()\` reflects the change.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'URL',
    initialCode: `const u = new URL('https://a.com/old')\nu.pathname = '/new'\n// check u.toString()\n`,
    solution: `const u = new URL('https://a.com/old'); u.pathname = '/new'; u.toString()`,
    tests: [
      { description: 'toString after pathname change', assertion:"const u=new URL('https://a.com/old'); u.pathname='/new'; expect(u.toString()).toContain('/new')" },
      { description: 'old pathname not in result', assertion:"const u2=new URL('https://a.com/old'); u2.pathname='/new'; expect(u2.toString().includes('/old')).toBe(false)" },
      { description: 'hostname still present', assertion:"const u3=new URL('https://a.com/old'); u3.pathname='/new'; expect(u3.toString()).toContain('a.com')" },
      { description: 'protocol still present', assertion:"const u4=new URL('https://a.com/old'); u4.pathname='/new'; expect(u4.toString()).toContain('https:')" },
      { description: 'href equals toString after mutation', assertion:"const u5=new URL('https://a.com/old'); u5.pathname='/new'; expect(u5.toString()).toBe(u5.href)" },
    ],
    hints: ['URL properties are mutable — setting them updates the URL'],
    tags: ['URL', 'instance-method', 'toString', 'mutation'],
    usageExample: {
      code: `const u = new URL('https://example.com/?q=1')
u.toJSON() === u.href  // → true`,
      explanation: {
        en: "toJSON() returns the same string as href, used during JSON.stringify().",
        es: "toJSON() devuelve la misma cadena que href, usada durante JSON.stringify().",
      },
    },
  },
  {
    slug: 'url-instance-method-3',
    title: 'URL#toJSON() — returns a string',
    description: `## URL#toJSON()\n\n\`url.toJSON()\` returns the serialized URL as a string (same as \`href\`).\n\n**Challenge:** Verify the return type of \`toJSON()\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'URL',
    initialCode: `const u = new URL('https://a.com')\n// check typeof u.toJSON()\n`,
    solution: `typeof new URL('https://a.com').toJSON()`,
    tests: [
      { description: 'toJSON returns string', assertion:"expect(result).toBe('string')" },
      { description: 'toJSON is a function', assertion:"expect(typeof new URL('https://a.com').toJSON).toBe('function')" },
      { description: 'toJSON result is truthy', assertion:"expect(new URL('https://a.com').toJSON()).toBeTruthy()" },
      { description: 'toJSON contains hostname', assertion:"expect(new URL('https://example.com').toJSON()).toContain('example.com')" },
      { description: 'toJSON contains protocol', assertion:"expect(new URL('https://example.com').toJSON()).toContain('https:')" },
    ],
    hints: ['toJSON is used when JSON.stringify serializes a URL object'],
    tags: ['URL', 'instance-method', 'toJSON'],
    usageExample: {
      code: `const u = new URL('https://example.com')
u.pathname = '/new'
u.href  // → 'https://example.com/new'`,
      explanation: {
        en: "Setting properties like pathname updates the URL in-place.",
        es: "Establecer propiedades como pathname actualiza la URL en su lugar.",
      },
    },
  },
  {
    slug: 'url-instance-method-4',
    title: 'URL#toJSON() — equals href',
    description: `## URL#toJSON() — equals href\n\n\`url.toJSON()\` returns the same string as \`url.href\`.\n\n**Challenge:** Confirm \`toJSON()\` is equal to \`href\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'URL',
    initialCode: `const u = new URL('https://a.com/path?q=1')\n// compare u.toJSON() and u.href\n`,
    solution: `const u = new URL('https://a.com/path?q=1'); u.toJSON() === u.href`,
    tests: [
      { description: 'toJSON equals href', assertion:"const u=new URL('https://a.com'); expect(u.toJSON()).toBe(u.href)" },
      { description: 'toJSON equals href with path', assertion:"const u2=new URL('https://a.com/path'); expect(u2.toJSON()).toBe(u2.href)" },
      { description: 'toJSON equals href with query', assertion:"const u3=new URL('https://a.com?q=1'); expect(u3.toJSON()).toBe(u3.href)" },
      { description: 'toJSON equals toString', assertion:"const u4=new URL('https://a.com'); expect(u4.toJSON()).toBe(u4.toString())" },
      { description: 'toJSON after mutation equals href', assertion:"const u5=new URL('https://a.com/old'); u5.pathname='/new'; expect(u5.toJSON()).toBe(u5.href)" },
    ],
    hints: ['Both toJSON() and href return the fully serialized URL'],
    tags: ['URL', 'instance-method', 'toJSON', 'href'],
    usageExample: {
      code: `const u = new URL('https://example.com?a=1')
u.searchParams.delete('a')
u.href  // → 'https://example.com'`,
      explanation: {
        en: "Modifying searchParams automatically updates the URL's search string.",
        es: "Modificar searchParams actualiza automáticamente la cadena de búsqueda de la URL.",
      },
    },
  },
  {
    slug: 'url-instance-method-5',
    title: 'URL#toJSON() — used by JSON.stringify()',
    description: `## URL#toJSON() — JSON serialization\n\n\`JSON.stringify()\` calls \`toJSON()\` on objects that have it. This means a URL inside an object serializes to its string form automatically.\n\n**Challenge:** Verify that \`JSON.stringify({ endpoint: url })\` serializes the URL correctly.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'URL',
    initialCode: `const url = new URL('https://example.com/path')\nconst obj = { endpoint: url }\n// JSON.stringify calls toJSON() on URL\nJSON.stringify(obj)\n`,
    solution: `const url = new URL('https://example.com/path'); JSON.stringify({ endpoint: url })`,
    tests: [
      { description: 'JSON.stringify serializes URL to string', assertion:"const url=new URL('https://example.com/path'); expect(JSON.stringify({endpoint:url})).toBe('{\"endpoint\":\"https://example.com/path\"}')" },
      { description: 'toJSON called by JSON.stringify', assertion:"const url2=new URL('https://a.com'); expect(JSON.parse(JSON.stringify({u:url2})).u).toBe('https://a.com/')" },
      { description: 'serialized value equals href', assertion:"const url3=new URL('https://example.com/path'); expect(JSON.parse(JSON.stringify({u:url3})).u).toBe(url3.href)" },
      { description: 'URL array serializes correctly', assertion:"const urls=[new URL('https://a.com'),new URL('https://b.com')]; const parsed=JSON.parse(JSON.stringify(urls)); expect(parsed[0]).toBe('https://a.com/')" },
      { description: 'toJSON returns the href string', assertion:"expect(new URL('https://example.com/path').toJSON()).toBe('https://example.com/path')" },
    ],
    hints: ['JSON.stringify automatically calls toJSON() — URL serializes as its href string'],
    tags: ['URL', 'instance-method', 'toJSON', 'JSON.stringify'],
    usageExample: {
      code: `new URL('https://a.com').href  // → 'https://a.com/'`,
      explanation: {
        en: "href returns the full normalized URL string including trailing slash.",
        es: "href devuelve la cadena URL normalizada completa incluyendo la barra final.",
      },
    },
  },
]
