import type { Exercise } from '@/shared/types/exercises'

export const valueOfExercises: Exercise[] = [
  {
    slug: 'string-value-of-primitive',
    title: 'String.prototype.valueOf() — returns primitive string',
    description: `## String.prototype.valueOf()

\`str.valueOf()\` returns the primitive string value of a String object or primitive.

**Challenge:** Implement \`getValueOf(str)\` that calls \`.valueOf()\` and returns the result.

\`\`\`ts
getValueOf('hello') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.valueOf',
    initialCode: `function getValueOf(str: string): string {
  // Use str.valueOf()
}`,
    solution: `function getValueOf(str: string): string {
  return str.valueOf()
}`,
    tests: [
      { description: 'hello valueOf is hello', assertion: "expect(getValueOf('hello')).toBe('hello')" },
      { description: 'world valueOf is world', assertion: "expect(getValueOf('world')).toBe('world')" },
      { description: 'empty valueOf is empty', assertion: "expect(getValueOf('')).toBe('')" },
      { description: 'abc valueOf is abc', assertion: "expect(getValueOf('abc')).toBe('abc')" },
      { description: 'result equals original', assertion: "expect(getValueOf('test')).toBe('test')" },
    ],
    hints: [
      'For a primitive string, `valueOf()` returns the string itself.',
    ],
    tags: ['String', 'String.prototype.valueOf', 'beginner'],
  },
  {
    slug: 'string-value-of-same-as-tostring',
    title: 'String.prototype.valueOf() — same as toString()',
    description: `## String.prototype.valueOf() vs toString()

For strings, \`valueOf()\` and \`toString()\` return the same value.

**Challenge:** Implement \`valueOfEqualsToString(str)\` that checks if they are equal.

\`\`\`ts
valueOfEqualsToString('hello') // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.valueOf',
    initialCode: `function valueOfEqualsToString(str: string): boolean {
  // Compare str.valueOf() === str.toString()
}`,
    solution: `function valueOfEqualsToString(str: string): boolean {
  return str.valueOf() === str.toString()
}`,
    tests: [
      { description: 'hello valueOf equals toString', assertion: "expect(valueOfEqualsToString('hello')).toBe(true)" },
      { description: 'empty string valueOf equals toString', assertion: "expect(valueOfEqualsToString('')).toBe(true)" },
      { description: 'abc valueOf equals toString', assertion: "expect(valueOfEqualsToString('abc')).toBe(true)" },
      { description: 'explicit check on hello', assertion: "expect('hello'.valueOf()).toBe('hello'.toString())" },
      { description: 'world valueOf equals toString', assertion: "expect(valueOfEqualsToString('world')).toBe(true)" },
    ],
    hints: [
      'For string primitives, `valueOf()` and `toString()` are equivalent.',
    ],
    tags: ['String', 'String.prototype.valueOf', 'beginner'],
  },
  {
    slug: 'string-value-of-object-primitive',
    title: 'String.prototype.valueOf() — String object primitive value',
    description: `## String.prototype.valueOf() — String Object

A \`String\` object wraps a primitive. \`valueOf()\` unwraps it to a primitive.

**Challenge:** Implement \`objectValueOf(strObj)\` that extracts the primitive from a String object.

\`\`\`ts
objectValueOf(new String('hello')) // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.valueOf',
    initialCode: `function objectValueOf(strObj: String): string {
  // Use strObj.valueOf() to extract the primitive
}`,
    solution: `function objectValueOf(strObj: String): string {
  return strObj.valueOf()
}`,
    tests: [
      { description: 'String object valueOf is primitive', assertion: "expect(objectValueOf(new String('hello'))).toBe('hello')" },
      { description: 'valueOf result type is string', assertion: "expect(typeof new String('hi').valueOf()).toBe('string')" },
      { description: 'String object not strictly equal to primitive', assertion: "expect(new String('x') === 'x').toBe(false)" },
      { description: 'but valueOf gives strict equal', assertion: "expect(new String('x').valueOf() === 'x').toBe(true)" },
      { description: 'empty String object valueOf', assertion: "expect(objectValueOf(new String(''))).toBe('')" },
    ],
    hints: [
      '`new String("hello").valueOf()` returns the primitive `"hello"`.',
    ],
    tags: ['String', 'String.prototype.valueOf', 'intermediate'],
  },
  {
    slug: 'string-value-of-arithmetic',
    title: 'String.prototype.valueOf() — in arithmetic context',
    description: `## String.prototype.valueOf() — Arithmetic

JavaScript calls \`valueOf()\` implicitly when an object is used in an arithmetic expression.

**Challenge:** Implement \`strLength(str)\` that returns the number of characters using \`valueOf()\`.

\`\`\`ts
strLength('hello') // → 5
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.valueOf',
    initialCode: `function strLength(str: string): number {
  // Use str.valueOf().length
}`,
    solution: `function strLength(str: string): number {
  return str.valueOf().length
}`,
    tests: [
      { description: 'hello has length 5', assertion: "expect(strLength('hello')).toBe(5)" },
      { description: 'empty has length 0', assertion: "expect(strLength('')).toBe(0)" },
      { description: 'abc has length 3', assertion: "expect(strLength('abc')).toBe(3)" },
      { description: 'world has length 5', assertion: "expect(strLength('world')).toBe(5)" },
      { description: 'hi has length 2', assertion: "expect(strLength('hi')).toBe(2)" },
    ],
    hints: [
      '`str.valueOf()` returns the string itself, so `.valueOf().length` is the same as `.length`.',
    ],
    tags: ['String', 'String.prototype.valueOf', 'beginner'],
  },
  {
    slug: 'string-value-of-empty',
    title: 'String.prototype.valueOf() — empty string valueOf',
    description: `## String.prototype.valueOf() — Empty String

Calling \`valueOf()\` on an empty string returns an empty string.

**Challenge:** Implement \`emptyValueOf()\` that calls \`valueOf\` on an empty string.

\`\`\`ts
emptyValueOf() // → ''
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.valueOf',
    initialCode: `function emptyValueOf(): string {
  // Use ''.valueOf()
}`,
    solution: `function emptyValueOf(): string {
  return ''.valueOf()
}`,
    tests: [
      { description: 'empty valueOf returns empty', assertion: "expect(emptyValueOf()).toBe('')" },
      { description: 'empty valueOf is falsy', assertion: "expect(emptyValueOf()).toBeFalsy()" },
      { description: 'empty valueOf has length 0', assertion: "expect(emptyValueOf()).toHaveLength(0)" },
      { description: 'direct empty valueOf', assertion: "expect(''.valueOf()).toBe('')" },
      { description: 'result equals empty string', assertion: "expect(emptyValueOf() === '').toBe(true)" },
    ],
    hints: [
      '`"".valueOf()` returns `""` — the primitive empty string.',
    ],
    tags: ['String', 'String.prototype.valueOf', 'beginner'],
  },
]
