import type { Exercise } from '@/shared/types/exercises'

export const hasOwnPropertyExercises: Exercise[] = [
  {
    slug: 'object-hasOwnProperty-1',
    title: 'hasOwnProperty() — basics',
    description: `## Object.prototype.hasOwnProperty()

\`obj.hasOwnProperty(key)\` returns \`true\` if the object has the specified key as its **own** (not inherited) property.

**Challenge:** Implement \`isOwnProperty(obj, key)\` that returns whether the key is an own property of the object.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'hasOwnProperty',
    initialCode: `function isOwnProperty(obj, key) {
  // Return true if key is an own property of obj
}`,
    solution: `function isOwnProperty(obj, key) {
  return obj.hasOwnProperty(key);
}`,
    tests: [
      {
        description: 'Returns true for own property',
        assertion: "expect({ a: 1 }.hasOwnProperty('a')).toBe(true)"
      },
      {
        description: 'Returns false for missing property',
        assertion: "expect({ a: 1 }.hasOwnProperty('b')).toBe(false)"
      },
      {
        description: 'Returns false for inherited property',
        assertion: "(() => { const proto = { inherited: 1 }; const obj = Object.create(proto); return obj.hasOwnProperty('inherited') === false; })()"
      },
      {
        description: 'Returns true for own property even when shadowing inherited',
        assertion: "(() => { const proto = { x: 1 }; const obj = Object.create(proto); obj.x = 99; return obj.hasOwnProperty('x'); })()"
      },
      {
        description: 'Returns false after delete',
        assertion: "(() => { const obj = { a: 1 }; delete obj.a; return obj.hasOwnProperty('a') === false; })()"
      },
    ],
    hints: ['hasOwnProperty does not traverse the prototype chain'],
    tags: ['Object', 'hasOwnProperty', 'instance-method', 'own'],
  },
  {
    slug: 'object-hasOwnProperty-2',
    title: 'hasOwnProperty() — vs inherited',
    description: `## hasOwnProperty() — own vs inherited

The key difference between \`hasOwnProperty()\` and the \`in\` operator is that \`in\` checks the entire prototype chain, while \`hasOwnProperty()\` only checks the object itself.

**Challenge:** Show the difference between \`in\` and \`hasOwnProperty()\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'hasOwnProperty',
    initialCode: `function ownVsInherited(obj, key) {
  // Return object with { inChain, isOwn } showing the difference
}`,
    solution: `function ownVsInherited(obj, key) {
  return { inChain: key in obj, isOwn: obj.hasOwnProperty(key) };
}`,
    tests: [
      {
        description: 'toString is in Object prototype chain but not own',
        assertion: "expect(({}).hasOwnProperty('toString')).toBe(false)"
      },
      {
        description: 'in operator finds inherited properties',
        assertion: "expect('toString' in {}).toBe(true)"
      },
      {
        description: 'Own property returns true for both',
        assertion: "(() => { const obj = { a: 1 }; return obj.hasOwnProperty('a') && ('a' in obj); })()"
      },
      {
        description: 'Inherited property: in=true, hasOwnProperty=false',
        assertion: "(() => { const proto = { x: 1 }; const obj = Object.create(proto); return ('x' in obj) && !obj.hasOwnProperty('x'); })()"
      },
      {
        description: 'Missing property: both false',
        assertion: "(() => { const obj = { a: 1 }; return !('z' in obj) && !obj.hasOwnProperty('z'); })()"
      },
    ],
    hints: ['hasOwnProperty checks only own props; in checks the full prototype chain'],
    tags: ['Object', 'hasOwnProperty', 'instance-method', 'prototype', 'in'],
  },
  {
    slug: 'object-hasOwnProperty-3',
    title: 'hasOwnProperty() — inherited from Object.prototype',
    description: `## hasOwnProperty() — checking Object.prototype methods

Standard methods like \`toString\`, \`valueOf\`, and \`hasOwnProperty\` itself come from \`Object.prototype\`. They are NOT own properties of plain objects.

**Challenge:** Verify that standard Object.prototype methods are not own properties of plain objects.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'hasOwnProperty',
    initialCode: `function isNotOwnPrototypeMethod(obj, methodName) {
  // Return true if the method is NOT an own property of obj
}`,
    solution: `function isNotOwnPrototypeMethod(obj, methodName) {
  return !obj.hasOwnProperty(methodName);
}`,
    tests: [
      {
        description: 'hasOwnProperty itself is not own',
        assertion: "expect(({}).hasOwnProperty('hasOwnProperty')).toBe(false)"
      },
      {
        description: 'toString is not own',
        assertion: "expect(({}).hasOwnProperty('toString')).toBe(false)"
      },
      {
        description: 'valueOf is not own',
        assertion: "expect(({}).hasOwnProperty('valueOf')).toBe(false)"
      },
      {
        description: 'Custom added method is own',
        assertion: "(() => { const obj = { fn() {} }; return obj.hasOwnProperty('fn'); })()"
      },
      {
        description: 'Object.prototype.hasOwnProperty.call is safer',
        assertion: "expect(Object.prototype.hasOwnProperty.call({ a: 1 }, 'a')).toBe(true)"
      },
    ],
    hints: ['Object.prototype methods are inherited by all plain objects'],
    tags: ['Object', 'hasOwnProperty', 'instance-method', 'Object.prototype'],
  },
  {
    slug: 'object-hasOwnProperty-4',
    title: 'hasOwnProperty() — after delete',
    description: `## hasOwnProperty() — after delete

Once a property is deleted with the \`delete\` operator, \`hasOwnProperty()\` returns \`false\` for it.

**Challenge:** Delete a property and verify it's gone using \`hasOwnProperty()\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'hasOwnProperty',
    initialCode: `function deleteAndCheck(obj, key) {
  // Delete the key and return whether it is still an own property
}`,
    solution: `function deleteAndCheck(obj, key) {
  delete obj[key];
  return obj.hasOwnProperty(key);
}`,
    tests: [
      {
        description: 'hasOwnProperty is false after delete',
        assertion: "(() => { const obj = { a: 1 }; delete obj.a; return obj.hasOwnProperty('a') === false; })()"
      },
      {
        description: 'hasOwnProperty is true before delete',
        assertion: "expect({ a: 1 }.hasOwnProperty('a')).toBe(true)"
      },
      {
        description: 'Deleting inherited does not affect own',
        assertion: "(() => { const proto = { b: 2 }; const obj = Object.create(proto); obj.a = 1; delete proto.b; return obj.hasOwnProperty('a'); })()"
      },
      {
        description: 'After delete, value is undefined',
        assertion: "(() => { const obj = { a: 1 }; delete obj.a; return obj.a === undefined; })()"
      },
      {
        description: 'Can re-add property after delete',
        assertion: "(() => { const obj = { a: 1 }; delete obj.a; obj.a = 99; return obj.hasOwnProperty('a') && obj.a === 99; })()"
      },
    ],
    hints: ['delete removes the property from the object entirely'],
    tags: ['Object', 'hasOwnProperty', 'instance-method', 'delete'],
  },
  {
    slug: 'object-hasOwnProperty-5',
    title: 'hasOwnProperty() — safe null-prototype usage',
    description: `## hasOwnProperty() — safe usage pattern

Objects with a \`null\` prototype (e.g., from \`Object.create(null)\`) don't have \`hasOwnProperty\`. Use \`Object.prototype.hasOwnProperty.call(obj, key)\` as the safe pattern.

**Challenge:** Implement \`safeHasOwnProperty(obj, key)\` using the safe call pattern.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'hasOwnProperty',
    initialCode: `function safeHasOwnProperty(obj, key) {
  // Use Object.prototype.hasOwnProperty.call for safety
}`,
    solution: `function safeHasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}`,
    tests: [
      {
        description: 'Safe call works on plain object',
        assertion: "expect(Object.prototype.hasOwnProperty.call({ a: 1 }, 'a')).toBe(true)"
      },
      {
        description: 'Safe call works on null-prototype object',
        assertion: "(() => { const obj = Object.create(null); obj.a = 1; return Object.prototype.hasOwnProperty.call(obj, 'a'); })()"
      },
      {
        description: 'Null-prototype objects lack hasOwnProperty method',
        assertion: "(() => { const obj = Object.create(null); return typeof obj.hasOwnProperty === 'undefined'; })()"
      },
      {
        description: 'Object.hasOwn is the modern alternative',
        assertion: "expect(Object.hasOwn({ a: 1 }, 'a')).toBe(true)"
      },
      {
        description: 'Safe call returns false for inherited',
        assertion: "(() => { const proto = { x: 1 }; const obj = Object.create(proto); return Object.prototype.hasOwnProperty.call(obj, 'x') === false; })()"
      },
    ],
    hints: ['Use Object.hasOwn() (ES2022+) or Object.prototype.hasOwnProperty.call() for safety'],
    tags: ['Object', 'hasOwnProperty', 'instance-method', 'null-prototype', 'safe'],
  },
]
