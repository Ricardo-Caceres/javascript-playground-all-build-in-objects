import type { Exercise } from '@/shared/types/exercises'

export const objectValueOfExercises: Exercise[] = [
  {
    slug: 'object-valueOf-1',
    title: 'valueOf() — plain object',
    description: `## Object.prototype.valueOf()

\`obj.valueOf()\` returns the primitive value of the specified object. For plain objects, it returns the object itself (since there is no primitive equivalent).

**Challenge:** Implement \`getValueOf(obj)\` that returns the valueOf result.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'valueOf',
    initialCode: `function getValueOf(obj) {
  // Return the valueOf result
}`,
    solution: `function getValueOf(obj) {
  return obj.valueOf();
}`,
    tests: [
      {
        description: 'Plain object valueOf returns the object itself',
        assertion: "(() => { const obj = { a: 1 }; return obj.valueOf() === obj; })()"
      },
      {
        description: 'Empty object valueOf returns itself',
        assertion: "(() => { const obj = {}; return obj.valueOf() === obj; })()"
      },
      {
        description: 'valueOf is inherited from Object.prototype',
        assertion: "expect(({}).valueOf === Object.prototype.valueOf).toBe(true)"
      },
      {
        description: 'valueOf result is an object for plain objects',
        assertion: "expect(typeof ({}).valueOf()).toBe('object')"
      },
      {
        description: 'valueOf returns the same reference, not a copy',
        assertion: "(() => { const obj = { x: 1 }; const v = obj.valueOf(); v.x = 99; return obj.x === 99; })()"
      },
    ],
    hints: ['For plain objects, valueOf returns the object itself; subclasses override it to return primitives'],
    tags: ['Object', 'valueOf', 'instance-method'],
  },
  {
    slug: 'object-valueOf-2',
    title: 'valueOf() — Number valueOf',
    description: `## valueOf() — Number

Number objects have a \`valueOf()\` that returns the wrapped primitive number value.

**Challenge:** Verify that Number's valueOf returns a number primitive.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'valueOf',
    initialCode: `function getNumberValue(numObj) {
  // Return the primitive number from a Number object
}`,
    solution: `function getNumberValue(numObj) {
  return numObj.valueOf();
}`,
    tests: [
      {
        description: 'Number object valueOf returns number primitive',
        assertion: "expect(new Number(42).valueOf()).toBe(42)"
      },
      {
        description: 'Number primitive valueOf returns itself',
        assertion: "expect((7).valueOf()).toBe(7)"
      },
      {
        description: 'typeof Number object valueOf is number',
        assertion: "expect(typeof new Number(5).valueOf()).toBe('number')"
      },
      {
        description: 'Number valueOf used in arithmetic',
        assertion: "expect(new Number(3).valueOf() + 4).toBe(7)"
      },
      {
        description: 'Zero Number object valueOf',
        assertion: "expect(new Number(0).valueOf()).toBe(0)"
      },
    ],
    hints: ['Number.prototype.valueOf unwraps the wrapped number object to its primitive'],
    tags: ['Object', 'valueOf', 'instance-method', 'number'],
  },
  {
    slug: 'object-valueOf-3',
    title: 'valueOf() — Boolean valueOf',
    description: `## valueOf() — Boolean

Boolean wrapper objects have a \`valueOf()\` that returns the wrapped primitive boolean value.

**Challenge:** Verify that Boolean's valueOf returns a boolean primitive.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'valueOf',
    initialCode: `function getBooleanValue(boolObj) {
  // Return the primitive boolean from a Boolean wrapper object
}`,
    solution: `function getBooleanValue(boolObj) {
  return boolObj.valueOf();
}`,
    tests: [
      {
        description: 'Boolean object valueOf returns primitive true',
        assertion: "expect(new Boolean(true).valueOf()).toBe(true)"
      },
      {
        description: 'Boolean object valueOf returns primitive false',
        assertion: "expect(new Boolean(false).valueOf()).toBe(false)"
      },
      {
        description: 'typeof Boolean valueOf result is boolean',
        assertion: "expect(typeof new Boolean(true).valueOf()).toBe('boolean')"
      },
      {
        description: 'Boolean object itself is truthy (wrapper is object)',
        assertion: "expect(!!new Boolean(false)).toBe(true)"
      },
      {
        description: 'But valueOf of false Boolean is falsy',
        assertion: "expect(!!new Boolean(false).valueOf()).toBe(false)"
      },
    ],
    hints: ['Boolean wrapper objects are always truthy; use valueOf to get the primitive'],
    tags: ['Object', 'valueOf', 'instance-method', 'boolean'],
  },
  {
    slug: 'object-valueOf-4',
    title: 'valueOf() — custom valueOf override',
    description: `## valueOf() — custom override

You can override \`valueOf()\` in your own objects to control how they convert to primitives, especially in arithmetic operations.

**Challenge:** Create an object with a custom \`valueOf()\` that returns a specific number.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'valueOf',
    initialCode: `function makeNumericObject(n) {
  // Return an object whose valueOf returns the number n
}`,
    solution: `function makeNumericObject(n) {
  return {
    n,
    valueOf() { return this.n; }
  };
}`,
    tests: [
      {
        description: 'Custom valueOf returns the specified value',
        assertion: "(() => { const obj = { v: 5, valueOf() { return this.v; } }; return obj.valueOf() === 5; })()"
      },
      {
        description: 'Custom valueOf is called in arithmetic',
        assertion: "(() => { const obj = { v: 10, valueOf() { return this.v; } }; return obj + 5 === 15; })()"
      },
      {
        description: 'Custom valueOf is called in comparison',
        assertion: "(() => { const obj = { v: 3, valueOf() { return this.v; } }; return obj < 5; })()"
      },
      {
        description: 'Override takes precedence over Object.prototype.valueOf',
        assertion: "(() => { const obj = { valueOf() { return 42; } }; return obj.valueOf() !== obj; })()"
      },
      {
        description: 'Without override, plain object valueOf returns itself',
        assertion: "(() => { const obj = {}; return obj.valueOf() === obj; })()"
      },
    ],
    hints: ['Override valueOf to control how an object converts to a primitive in arithmetic or comparisons'],
    tags: ['Object', 'valueOf', 'instance-method', 'override'],
  },
  {
    slug: 'object-valueOf-5',
    title: 'valueOf() — implicit conversion in arithmetic',
    description: `## valueOf() — implicit type coercion

When an object is used in arithmetic (like \`+\`, \`-\`, \`*\`), JavaScript automatically calls \`valueOf()\` to convert it to a primitive. You can leverage this by overriding \`valueOf()\`.

**Challenge:** Show how a custom valueOf is implicitly called in arithmetic.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'valueOf',
    initialCode: `function makeCounter(start) {
  // Return an object with a count property and valueOf that returns count
}`,
    solution: `function makeCounter(start) {
  return {
    count: start,
    valueOf() { return this.count; }
  };
}`,
    tests: [
      {
        description: 'valueOf called implicitly in addition',
        assertion: "(() => { const obj = { valueOf() { return 7; } }; return obj + 3 === 10; })()"
      },
      {
        description: 'valueOf called implicitly in multiplication',
        assertion: "(() => { const obj = { valueOf() { return 4; } }; return obj * 2 === 8; })()"
      },
      {
        description: 'valueOf called in comparison',
        assertion: "(() => { const obj = { valueOf() { return 100; } }; return obj > 50; })()"
      },
      {
        description: 'Plain object valueOf returns object (NaN in arithmetic)',
        assertion: "expect(typeof ({} + 1)).toBe('string')"
      },
      {
        description: 'Custom valueOf allows numeric coercion',
        assertion: "(() => { const obj = { valueOf() { return 5; } }; return Number(obj) === 5; })()"
      },
    ],
    hints: ['JavaScript uses valueOf for type coercion in arithmetic and comparison contexts'],
    tags: ['Object', 'valueOf', 'instance-method', 'coercion', 'arithmetic'],
  },
]
