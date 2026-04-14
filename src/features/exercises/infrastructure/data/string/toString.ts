import type { Exercise } from '@/shared/types/exercises'

export const stringToStringExercises: Exercise[] = [
  {
    slug: 'string-to-string-primitive',
    title: 'String.prototype.toString() — primitive string',
    description: `## String.prototype.toString()

\`str.toString()\` returns the string value. For a primitive string, it returns the same value.

**Challenge:** Implement \`stringValue(str)\` that calls \`.toString()\` and returns the result.

\`\`\`ts
stringValue('hello') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toString',
    initialCode: `function stringValue(str: string): string {
  // Use str.toString()
}`,
    solution: `function stringValue(str: string): string {
  return str.toString()
}`,
    tests: [
      { description: 'hello toString is hello', assertion: "expect(stringValue('hello')).toBe('hello')" },
      { description: 'world toString is world', assertion: "expect(stringValue('world')).toBe('world')" },
      { description: 'empty string toString is empty', assertion: "expect(stringValue('')).toBe('')" },
      { description: 'result equals original', assertion: "expect(stringValue('test')).toBe('test')" },
      { description: 'abc toString is abc', assertion: "expect(stringValue('abc')).toBe('abc')" },
    ],
    hints: [
      'For primitive strings, `toString()` simply returns the string itself.',
    ],
    tags: ['String', 'String.prototype.toString', 'beginner'],
  },
  {
    slug: 'string-to-string-object-vs-primitive',
    title: 'String.prototype.toString() — String object vs primitive',
    description: `## String.prototype.toString() — String Object

A \`String\` object created with \`new String("hello")\` is not strictly equal to the primitive \`"hello"\`, but \`.toString()\` returns the primitive value.

**Challenge:** Implement \`getPrimitive(strObj)\` that extracts the primitive string from a String object.

\`\`\`ts
getPrimitive(new String('hello')) // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.toString',
    initialCode: `function getPrimitive(strObj: String): string {
  // Use strObj.toString() to get the primitive string value
}`,
    solution: `function getPrimitive(strObj: String): string {
  return strObj.toString()
}`,
    tests: [
      { description: 'String object toString returns primitive', assertion: "expect(getPrimitive(new String('hello'))).toBe('hello')" },
      { description: 'String object is not strict equal to primitive', assertion: "expect(new String('hi') === 'hi').toBe(false)" },
      { description: 'but toString gives primitive', assertion: "expect(new String('hi').toString() === 'hi').toBe(true)" },
      { description: 'empty String object', assertion: "expect(getPrimitive(new String(''))).toBe('')" },
      { description: 'world String object', assertion: "expect(getPrimitive(new String('world'))).toBe('world')" },
    ],
    hints: [
      '`new String("hello") !== "hello"` — it is an object, not a primitive.',
      '`.toString()` unwraps the object back to a primitive string.',
    ],
    tags: ['String', 'String.prototype.toString', 'intermediate'],
  },
  {
    slug: 'string-to-string-same-as-valueof',
    title: 'String.prototype.toString() — returns same value as valueOf',
    description: `## String.prototype.toString() vs valueOf()

Both \`.toString()\` and \`.valueOf()\` return the primitive string value.

**Challenge:** Implement \`toStringEqualsValueOf(str)\` that checks if \`toString\` equals \`valueOf\`.

\`\`\`ts
toStringEqualsValueOf('hello') // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toString',
    initialCode: `function toStringEqualsValueOf(str: string): boolean {
  // Compare str.toString() === str.valueOf()
}`,
    solution: `function toStringEqualsValueOf(str: string): boolean {
  return str.toString() === str.valueOf()
}`,
    tests: [
      { description: 'toString equals valueOf for hello', assertion: "expect(toStringEqualsValueOf('hello')).toBe(true)" },
      { description: 'toString equals valueOf for empty', assertion: "expect(toStringEqualsValueOf('')).toBe(true)" },
      { description: 'toString equals valueOf for abc', assertion: "expect(toStringEqualsValueOf('abc')).toBe(true)" },
      { description: 'explicit check hello', assertion: "expect('hello'.toString()).toBe('hello'.valueOf())" },
      { description: 'toString equals valueOf for world', assertion: "expect(toStringEqualsValueOf('world')).toBe(true)" },
    ],
    hints: [
      'For strings, `toString()` and `valueOf()` both return the primitive string.',
    ],
    tags: ['String', 'String.prototype.toString', 'beginner'],
  },
  {
    slug: 'string-to-string-template-literal',
    title: 'String.prototype.toString() — in template literal',
    description: `## String.prototype.toString() — Template Literal

When you embed a value in a template literal, JavaScript calls \`.toString()\` implicitly.

**Challenge:** Implement \`wrapInGreeting(name)\` that returns \`'Hello, <name>!'\`.

\`\`\`ts
wrapInGreeting('World') // → 'Hello, World!'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toString',
    initialCode: `function wrapInGreeting(name: string): string {
  // Use a template literal: \`Hello, \${name.toString()}!\`
}`,
    solution: `function wrapInGreeting(name: string): string {
  return \`Hello, \${name.toString()}!\`
}`,
    tests: [
      { description: 'World becomes Hello, World!', assertion: "expect(wrapInGreeting('World')).toBe('Hello, World!')" },
      { description: 'Alice becomes Hello, Alice!', assertion: "expect(wrapInGreeting('Alice')).toBe('Hello, Alice!')" },
      { description: 'Bob becomes Hello, Bob!', assertion: "expect(wrapInGreeting('Bob')).toBe('Hello, Bob!')" },
      { description: 'result contains name', assertion: "expect(wrapInGreeting('Test')).toContain('Test')" },
      { description: 'result starts with Hello', assertion: "expect(wrapInGreeting('X').startsWith('Hello')).toBe(true)" },
    ],
    hints: [
      'Template literals automatically call `.toString()` on embedded values.',
    ],
    tags: ['String', 'String.prototype.toString', 'beginner'],
  },
  {
    slug: 'string-to-string-explicit-call',
    title: 'String.prototype.toString() — explicit call',
    description: `## String.prototype.toString() — Explicit Call

You can call \`.toString()\` explicitly to ensure you have a string primitive.

**Challenge:** Implement \`explicitToString(str)\` that calls \`toString\` and checks the type.

\`\`\`ts
explicitToString('42') // → 'string'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toString',
    initialCode: `function explicitToString(str: string): string {
  // Call str.toString() and return typeof the result
}`,
    solution: `function explicitToString(str: string): string {
  return typeof str.toString()
}`,
    tests: [
      { description: 'typeof toString result is string', assertion: "expect(explicitToString('42')).toBe('string')" },
      { description: 'typeof empty toString is string', assertion: "expect(explicitToString('')).toBe('string')" },
      { description: 'typeof hello toString is string', assertion: "expect(explicitToString('hello')).toBe('string')" },
      { description: 'toString of hello is hello', assertion: "expect('hello'.toString()).toBe('hello')" },
      { description: 'toString of 123 str is 123', assertion: "expect('123'.toString()).toBe('123')" },
    ],
    hints: [
      '`typeof str.toString()` is always `"string"` for string primitives.',
    ],
    tags: ['String', 'String.prototype.toString', 'beginner'],
  },
]
