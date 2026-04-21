import type { Exercise } from '@/shared/types/exercises'

export const regexpGlobalExercises: Exercise[] = [
  {
    slug: 'regexp-global-1',
    title: 'RegExp global — g flag set',
    description: `## RegExp.prototype.global\n\nThe \`global\` property is true when the 'g' flag is set.\n\n**Challenge:** Verify that \`/hi/g.global\` equals true.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    method: 'global',
    initialCode: `// Use /hi/g.global\n`,
    solution: `/hi/g.global`,
    tests: [
      { description: 'result equals true', assertion:'expect(result).toBe(true)' },
      { description: 'global is boolean', assertion:"expect(typeof result).toBe('boolean')" },
      { description: 'result is truthy', assertion:'expect(result).toBeTruthy()' },
      { description: '/hi/g has global flag', assertion:'expect(/hi/g.flags.includes(\'g\')).toBe(true)' },
      { description: "new RegExp('hi','g').global is true", assertion:"expect(new RegExp('hi','g').global).toBe(true)" },
    ],
    hints: ['The global flag g allows matching all occurrences, not just the first'],
    tags: ['RegExp', 'global', 'property'],
    usageExample: {
      code: `const re = /a/g
console.log(re.global) // → true
const re2 = /a/
console.log(re2.global) // → false`,
      explanation: {
        en: "Read RegExp.global to check whether the 'g' flag is set on the regular expression.",
        es: "Lee RegExp.global para verificar si la bandera 'g' está activada en la expresión regular.",
      },
    },
  },
  {
    slug: 'regexp-global-2',
    title: 'RegExp global — no g flag',
    description: `## RegExp.prototype.global\n\nThe \`global\` property is false when the 'g' flag is not set.\n\n**Challenge:** Verify that \`/hi/.global\` equals false.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    method: 'global',
    initialCode: `// Use /hi/.global\n`,
    solution: `/hi/.global`,
    tests: [
      { description: 'result equals false', assertion:'expect(result).toBe(false)' },
      { description: 'global is boolean', assertion:"expect(typeof result).toBe('boolean')" },
      { description: 'result is falsy', assertion:'expect(result).toBeFalsy()' },
      { description: "/hi/.flags does not include 'g'", assertion:"expect(/hi/.flags.includes('g')).toBe(false)" },
      { description: "new RegExp('hi').global is false", assertion:"expect(new RegExp('hi').global).toBe(false)" },
    ],
    hints: ['Without the g flag, global returns false'],
    tags: ['RegExp', 'global', 'property'],
    usageExample: {
      code: `const re = /a/g
console.log(re.global) // → true
const re2 = /a/
console.log(re2.global) // → false`,
      explanation: {
        en: "Read RegExp.global to check whether the 'g' flag is set on the regular expression.",
        es: "Lee RegExp.global para verificar si la bandera 'g' está activada en la expresión regular.",
      },
    },
  },
  {
    slug: 'regexp-global-3',
    title: 'RegExp global — typeof',
    description: `## RegExp.prototype.global\n\nThe \`global\` property always returns a boolean.\n\n**Challenge:** Verify that \`typeof /hi/g.global\` is 'boolean'.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    method: 'global',
    initialCode: `// Use typeof /hi/g.global\n`,
    solution: `typeof /hi/g.global`,
    tests: [
      { description: "typeof result is 'boolean'", assertion:"expect(typeof result).toBe('boolean')" },
      { description: "typeof result is 'boolean'", assertion:"expect(typeof result).toBe('boolean')" },
      { description: 'result is not null', assertion:'expect(result !== null).toBe(true)' },
      { description: 'result is not undefined', assertion:'expect(result !== undefined).toBe(true)' },
      { description: 'result equals true', assertion:'expect(result).toBe(true)' },
    ],
    hints: ['global is always a boolean — either true or false'],
    tags: ['RegExp', 'global', 'typeof'],
    usageExample: {
      code: `const re = /a/g
console.log(re.global) // → true
const re2 = /a/
console.log(re2.global) // → false`,
      explanation: {
        en: "Read RegExp.global to check whether the 'g' flag is set on the regular expression.",
        es: "Lee RegExp.global para verificar si la bandera 'g' está activada en la expresión regular.",
      },
    },
  },
  {
    slug: 'regexp-global-4',
    title: 'RegExp global — gi flags',
    description: `## RegExp.prototype.global\n\nWith both g and i flags, \`global\` is still true.\n\n**Challenge:** Verify that \`/hello/gi.global\` equals true.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    method: 'global',
    initialCode: `// Use /hello/gi.global\n`,
    solution: `/hello/gi.global`,
    tests: [
      { description: 'result equals true', assertion:'expect(result).toBe(true)' },
      { description: '/hello/gi.ignoreCase equals true', assertion:'expect(/hello/gi.ignoreCase).toBe(true)' },
      { description: "flags includes 'g'", assertion:"expect(/hello/gi.flags.includes('g')).toBe(true)" },
      { description: 'global is boolean', assertion:"expect(typeof result).toBe('boolean')" },
      { description: '/hello/i.global is false', assertion:'expect(/hello/i.global).toBe(false)' },
    ],
    hints: ['global checks only for the g flag, regardless of other flags'],
    tags: ['RegExp', 'global', 'flags'],
    usageExample: {
      code: `const re = /a/g
console.log(re.global) // → true
const re2 = /a/
console.log(re2.global) // → false`,
      explanation: {
        en: "Read RegExp.global to check whether the 'g' flag is set on the regular expression.",
        es: "Lee RegExp.global para verificar si la bandera 'g' está activada en la expresión regular.",
      },
    },
  },
  {
    slug: 'regexp-global-5',
    title: 'RegExp global — result is boolean',
    description: `## RegExp.prototype.global\n\nThe \`global\` property always returns a boolean value.\n\n**Challenge:** Confirm that \`/pattern/g.global\` is strictly equal to \`true\`.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    method: 'global',
    initialCode: `// Check /pattern/g.global === true\n`,
    solution: `/pattern/g.global === true`,
    tests: [
      { description: 'result', assertion:'expect(result).toBe(true)' },
      { description: '/pattern/.global === false', assertion:'expect(/pattern/.global === false).toBe(true)' },
      { description: 'global is strictly boolean true', assertion:'expect(/pattern/g.global).toBe(true)' },
      { description: 'no-g global is strictly boolean false', assertion:'expect(/pattern/.global).toBe(false)' },
      { description: 'global is not a string', assertion:"expect(typeof /pattern/g.global === 'boolean').toBe(true)" },
    ],
    hints: ['global returns a strict boolean, not a truthy/falsy value'],
    tags: ['RegExp', 'global', 'boolean'],
    usageExample: {
      code: `const re = /a/g
console.log(re.global) // → true
const re2 = /a/
console.log(re2.global) // → false`,
      explanation: {
        en: "Read RegExp.global to check whether the 'g' flag is set on the regular expression.",
        es: "Lee RegExp.global para verificar si la bandera 'g' está activada en la expresión regular.",
      },
    },
  },
]
