import type { Exercise } from '@/shared/types/exercises'

export const numberValueOfExercises: Exercise[] = [
  {
    slug: 'number-value-of-1',
    title: 'valueOf() — new Number(42).valueOf() === 42',
    description: `## Number.prototype.valueOf()

\`numObj.valueOf()\` returns the primitive numeric value wrapped by a \`Number\` object.

\`\`\`ts
new Number(42).valueOf()  // → 42
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'valueOf',
    initialCode: `const obj = new Number(42)
const primitive = obj.valueOf()`,
    solution: `const obj = new Number(42)
const primitive = obj.valueOf()`,
    tests: [
      { description: 'new Number(42).valueOf() === 42', assertion: 'expect(new Number(42).valueOf()).toBe(42)' },
      { description: 'new Number(0).valueOf() === 0', assertion: 'expect(new Number(0).valueOf()).toBe(0)' },
      { description: 'new Number(-5).valueOf() === -5', assertion: 'expect(new Number(-5).valueOf()).toBe(-5)' },
      { description: 'valueOf returns primitive', assertion: "expect(typeof new Number(42).valueOf()).toBe('number')" },
      { description: 'new Number(3.14).valueOf() === 3.14', assertion: 'expect(new Number(3.14).valueOf()).toBe(3.14)' },
    ],
    hints: ['`valueOf()` unwraps the `Number` object to get the primitive value.'],
    tags: ['Number', 'valueOf', 'instance-method', 'intermediate'],
    usageExample: {
      code: `// Retrieve the primitive numeric value
const n = new Number(42)
n.valueOf()          // → 42
typeof n.valueOf()   // → 'number'`,
      explanation: {
        en: 'Use valueOf() on a Number object to extract the underlying primitive number value, which JavaScript also calls automatically in numeric expressions.',
        es: 'Usa valueOf() en un objeto Number para extraer el valor numérico primitivo subyacente, que JavaScript también llama automáticamente en expresiones numéricas.',
      },
    },
  },
  {
    slug: 'number-value-of-2',
    title: 'valueOf() — typeof new Number() is object, valueOf is number',
    description: `## typeof vs valueOf

\`typeof new Number(42)\` is \`'object'\`, but \`typeof new Number(42).valueOf()\` is \`'number'\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'valueOf',
    initialCode: `const obj = new Number(42)
const objType = typeof obj
const valType = typeof obj.valueOf()`,
    solution: `const obj = new Number(42)
const objType = typeof obj
const valType = typeof obj.valueOf()`,
    tests: [
      { description: 'typeof new Number(42) is object', assertion: "expect(typeof new Number(42)).toBe('object')" },
      { description: 'typeof new Number(42).valueOf() is number', assertion: "expect(typeof new Number(42).valueOf()).toBe('number')" },
      { description: 'object and primitive differ', assertion: 'expect(typeof new Number(42) !== typeof new Number(42).valueOf()).toBe(true)' },
      { description: 'valueOf gives primitive', assertion: 'expect(new Number(5).valueOf() === 5).toBe(true)' },
      { description: 'object strict !== primitive', assertion: 'expect(new Number(5) === 5).toBe(false)' },
    ],
    hints: ['`new Number()` wraps the value in an object; `valueOf()` retrieves the primitive.'],
    tags: ['Number', 'valueOf', 'typeof', 'intermediate'],
    usageExample: {
      code: `// Retrieve the primitive numeric value
const n = new Number(42)
n.valueOf()          // → 42
typeof n.valueOf()   // → 'number'`,
      explanation: {
        en: 'Use valueOf() on a Number object to extract the underlying primitive number value, which JavaScript also calls automatically in numeric expressions.',
        es: 'Usa valueOf() en un objeto Number para extraer el valor numérico primitivo subyacente, que JavaScript también llama automáticamente en expresiones numéricas.',
      },
    },
  },
  {
    slug: 'number-value-of-3',
    title: 'valueOf() — primitive number.valueOf() === itself',
    description: `## valueOf() on a Primitive

Calling \`valueOf()\` on a primitive number returns the number itself (autoboxing handles the call).`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'valueOf',
    initialCode: `const result = (42).valueOf()`,
    solution: `const result = (42).valueOf()`,
    tests: [
      { description: '(42).valueOf() === 42', assertion: 'expect((42).valueOf()).toBe(42)' },
      { description: '(0).valueOf() === 0', assertion: 'expect((0).valueOf()).toBe(0)' },
      { description: '(-3.14).valueOf() === -3.14', assertion: 'expect((-3.14).valueOf()).toBe(-3.14)' },
      { description: 'typeof result is number', assertion: "expect(typeof (42).valueOf()).toBe('number')" },
      { description: '(100).valueOf() === 100', assertion: 'expect((100).valueOf()).toBe(100)' },
    ],
    hints: ['Autoboxing converts a primitive number to a `Number` object temporarily to call the method.'],
    tags: ['Number', 'valueOf', 'primitive', 'beginner'],
    usageExample: {
      code: `// Retrieve the primitive numeric value
const n = new Number(42)
n.valueOf()          // → 42
typeof n.valueOf()   // → 'number'`,
      explanation: {
        en: 'Use valueOf() on a Number object to extract the underlying primitive number value, which JavaScript also calls automatically in numeric expressions.',
        es: 'Usa valueOf() en un objeto Number para extraer el valor numérico primitivo subyacente, que JavaScript también llama automáticamente en expresiones numéricas.',
      },
    },
  },
  {
    slug: 'number-value-of-4',
    title: 'valueOf() — used implicitly in arithmetic',
    description: `## valueOf() in Arithmetic

When a \`Number\` object is used in arithmetic, JavaScript calls \`valueOf()\` implicitly.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'valueOf',
    initialCode: `const obj = new Number(10)
const sum = (obj as unknown as number) + 5`,
    solution: `const obj = new Number(10)
const sum = (obj as unknown as number) + 5`,
    tests: [
      { description: 'Number object in addition', assertion: 'expect(new Number(10) + 5).toBe(15)' },
      { description: 'Number object in multiplication', assertion: 'expect(new Number(4) * 3).toBe(12)' },
      { description: 'Number object in subtraction', assertion: 'expect(new Number(10) - 3).toBe(7)' },
      { description: 'Number object in division', assertion: 'expect(new Number(20) / 4).toBe(5)' },
      { description: 'valueOf explicitly', assertion: 'expect(new Number(7).valueOf() + 1).toBe(8)' },
    ],
    hints: ['JavaScript implicitly calls `valueOf()` when a `Number` object is used in numeric operations.'],
    tags: ['Number', 'valueOf', 'arithmetic', 'intermediate'],
    usageExample: {
      code: `// Retrieve the primitive numeric value
const n = new Number(42)
n.valueOf()          // → 42
typeof n.valueOf()   // → 'number'`,
      explanation: {
        en: 'Use valueOf() on a Number object to extract the underlying primitive number value, which JavaScript also calls automatically in numeric expressions.',
        es: 'Usa valueOf() en un objeto Number para extraer el valor numérico primitivo subyacente, que JavaScript también llama automáticamente en expresiones numéricas.',
      },
    },
  },
  {
    slug: 'number-value-of-5',
    title: 'valueOf() — comparison with primitive',
    description: `## valueOf() and Comparison

A \`Number\` object loosely equals its primitive value because \`==\` calls \`valueOf()\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'valueOf',
    initialCode: `const obj = new Number(5)
const primitive = 5`,
    solution: `const obj = new Number(5)
const primitive = 5`,
    tests: [
      { description: 'new Number(5) == 5 (loose)', assertion: 'expect(new Number(5) == 5).toBe(true)' },
      { description: 'new Number(5) !== 5 (strict)', assertion: 'expect(new Number(5) === 5).toBe(false)' },
      { description: 'valueOf bridges the gap', assertion: 'expect(new Number(5).valueOf() === 5).toBe(true)' },
      { description: 'new Number(0) == false', assertion: 'expect(new Number(0) == false).toBe(true)' },
      { description: 'new Number(1) == true', assertion: 'expect(new Number(1) == true).toBe(true)' },
    ],
    hints: ['Loose equality (`==`) triggers `valueOf()` on objects; strict equality (`===`) does not.'],
    tags: ['Number', 'valueOf', 'comparison', 'intermediate'],
    usageExample: {
      code: `// Retrieve the primitive numeric value
const n = new Number(42)
n.valueOf()          // → 42
typeof n.valueOf()   // → 'number'`,
      explanation: {
        en: 'Use valueOf() on a Number object to extract the underlying primitive number value, which JavaScript also calls automatically in numeric expressions.',
        es: 'Usa valueOf() en un objeto Number para extraer el valor numérico primitivo subyacente, que JavaScript también llama automáticamente en expresiones numéricas.',
      },
    },
  },
]
