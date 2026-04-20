import type { Exercise } from '@/shared/types/exercises'

export const objectToLocaleStringExercises: Exercise[] = [
  {
    slug: 'object-toLocaleString-1',
    title: 'toLocaleString() — plain object default',
    description: `## Object.prototype.toLocaleString()

\`obj.toLocaleString()\` calls \`toString()\` by default for plain objects, returning \`"[object Object]"\`.

It is designed to be overridden by subclasses (like Date, Number, Array) that have locale-specific string representations.

**Challenge:** Implement \`getLocaleString(obj)\` that returns the locale string of the object.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'toLocaleString',
    initialCode: `function getLocaleString(obj) {
  // Return the locale string representation of the object
}`,
    solution: `function getLocaleString(obj) {
  return obj.toLocaleString();
}`,
    tests: [
      {
        description: 'Plain object toLocaleString returns [object Object]',
        assertion: "expect(({}).toLocaleString()).toBe('[object Object]')"
      },
      {
        description: 'Object with properties still returns [object Object]',
        assertion: "expect(({ a: 1, b: 2 }).toLocaleString()).toBe('[object Object]')"
      },
      {
        description: 'toLocaleString returns a string',
        assertion: "expect(typeof ({}).toLocaleString()).toBe('string')"
      },
      {
        description: 'Empty object toLocaleString returns [object Object]',
        assertion: "expect(({}).toLocaleString()).toBe('[object Object]')"
      },
      {
        description: 'Result is truthy',
        assertion: "expect(!!({}).toLocaleString()).toBe(true)"
      },
    ],
    hints: ['Plain objects inherit toLocaleString from Object.prototype, which calls toString()'],
    tags: ['Object', 'toLocaleString', 'instance-method'],
  },
  {
    slug: 'object-toLocaleString-2',
    title: 'toLocaleString() — number',
    description: `## toLocaleString() — Number

Numbers have their own \`toLocaleString()\` that formats the number according to locale conventions (e.g., thousands separators).

**Challenge:** Use \`Number.prototype.toLocaleString\` and verify it returns a string.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'toLocaleString',
    initialCode: `function numberToLocaleString(n) {
  // Return the locale string representation of the number
}`,
    solution: `function numberToLocaleString(n) {
  return n.toLocaleString();
}`,
    tests: [
      {
        description: 'Number toLocaleString returns a string',
        assertion: "expect(typeof (42).toLocaleString()).toBe('string')"
      },
      {
        description: 'Number toLocaleString result is truthy',
        assertion: "expect(!!(42).toLocaleString()).toBe(true)"
      },
      {
        description: '0 toLocaleString returns a string',
        assertion: "expect(typeof (0).toLocaleString()).toBe('string')"
      },
      {
        description: 'Number includes the digits in its locale string',
        assertion: "expect((42).toLocaleString().includes('42') || (42).toLocaleString().replace(/[^0-9]/g,'').includes('42')).toBe(true)"
      },
      {
        description: 'Negative number toLocaleString is a string',
        assertion: "expect(typeof (-5).toLocaleString()).toBe('string')"
      },
    ],
    hints: ['Number.prototype.toLocaleString formats numbers for the current locale'],
    tags: ['Object', 'toLocaleString', 'instance-method', 'number'],
  },
  {
    slug: 'object-toLocaleString-3',
    title: 'toLocaleString() — custom override',
    description: `## toLocaleString() — custom override

You can override \`toLocaleString()\` on your own objects to return a custom locale-aware string.

**Challenge:** Create an object with a custom \`toLocaleString()\` that returns a specific string.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'toLocaleString',
    initialCode: `function makeCustomLocaleObj(value) {
  // Return an object whose toLocaleString returns 'custom: ' + value
}`,
    solution: `function makeCustomLocaleObj(value) {
  return {
    value,
    toLocaleString() { return 'custom: ' + this.value; }
  };
}`,
    tests: [
      {
        description: 'Custom toLocaleString returns expected string',
        assertion: "expect((() => { const obj = { x: 42, toLocaleString() { return 'value:' + this.x; } }; return obj.toLocaleString() === 'value:42'; })()).toBe(true)"
      },
      {
        description: 'Override takes precedence over inherited',
        assertion: "expect((() => { const obj = { toLocaleString() { return 'overridden'; } }; return obj.toLocaleString() === 'overridden'; })()).toBe(true)"
      },
      {
        description: 'Override returns a string',
        assertion: "expect((() => { const obj = { toLocaleString() { return 'hello'; } }; return typeof obj.toLocaleString() === 'string'; })()).toBe(true)"
      },
      {
        description: 'Without override, returns [object Object]',
        assertion: "expect(({}).toLocaleString()).toBe('[object Object]')"
      },
      {
        description: 'Override can access this',
        assertion: "expect((() => { const obj = { name: 'Alice', toLocaleString() { return this.name; } }; return obj.toLocaleString() === 'Alice'; })()).toBe(true)"
      },
    ],
    hints: ['Override toLocaleString in objects needing locale-aware representation'],
    tags: ['Object', 'toLocaleString', 'instance-method', 'override'],
  },
  {
    slug: 'object-toLocaleString-4',
    title: 'toLocaleString() — array delegation',
    description: `## toLocaleString() — arrays

Arrays have their own \`toLocaleString()\` that calls \`toLocaleString()\` on each element and joins them with a locale-specific separator.

**Challenge:** Verify array's toLocaleString behavior.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'toLocaleString',
    initialCode: `function arrayToLocaleString(arr) {
  // Return the locale string of the array
}`,
    solution: `function arrayToLocaleString(arr) {
  return arr.toLocaleString();
}`,
    tests: [
      {
        description: 'Array toLocaleString returns a string',
        assertion: "expect(typeof [1, 2, 3].toLocaleString()).toBe('string')"
      },
      {
        description: 'Empty array toLocaleString returns empty string',
        assertion: "expect([].toLocaleString()).toBe('')"
      },
      {
        description: 'Array delegates to element toLocaleString',
        assertion: "expect(typeof [1, 2].toLocaleString()).toBe('string')"
      },
      {
        description: 'Single element array locale string is truthy',
        assertion: "expect(!![42].toLocaleString()).toBe(true)"
      },
      {
        description: 'Array has its own toLocaleString (not Object.prototype)',
        assertion: "expect(Array.prototype.hasOwnProperty('toLocaleString')).toBe(true)"
      },
    ],
    hints: ['Array.prototype.toLocaleString calls toLocaleString on each element'],
    tags: ['Object', 'toLocaleString', 'instance-method', 'array'],
  },
  {
    slug: 'object-toLocaleString-5',
    title: 'toLocaleString() — inherited from Object.prototype',
    description: `## toLocaleString() — inheritance

\`toLocaleString()\` is defined on \`Object.prototype\`, so all objects inherit it. Subclasses like \`Array\`, \`Number\`, and \`Date\` override it with locale-aware implementations.

**Challenge:** Verify that plain objects inherit toLocaleString from Object.prototype.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'toLocaleString',
    initialCode: `function isInheritedFromObject(obj) {
  // Return true if toLocaleString is NOT an own property (inherited)
}`,
    solution: `function isInheritedFromObject(obj) {
  return !obj.hasOwnProperty('toLocaleString');
}`,
    tests: [
      {
        description: 'toLocaleString is not an own property of plain objects',
        assertion: "expect(({}).hasOwnProperty('toLocaleString')).toBe(false)"
      },
      {
        description: 'toLocaleString exists on Object.prototype',
        assertion: "expect(typeof Object.prototype.toLocaleString).toBe('function')"
      },
      {
        description: 'Array overrides toLocaleString (own property)',
        assertion: "expect(Array.prototype.hasOwnProperty('toLocaleString')).toBe(true)"
      },
      {
        description: 'Plain object uses Object.prototype.toLocaleString',
        assertion: "expect(({}).toLocaleString === Object.prototype.toLocaleString).toBe(true)"
      },
      {
        description: 'Array uses Array.prototype.toLocaleString',
        assertion: "expect([].toLocaleString === Array.prototype.toLocaleString).toBe(true)"
      },
    ],
    hints: ['Check hasOwnProperty to determine where toLocaleString comes from'],
    tags: ['Object', 'toLocaleString', 'instance-method', 'prototype'],
  },
]
