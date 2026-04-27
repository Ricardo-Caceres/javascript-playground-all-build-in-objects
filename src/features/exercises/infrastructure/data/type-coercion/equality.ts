import type { Exercise } from '@/shared/types/exercises'

export const typeCoercionEqualityExercises: Exercise[] = [
  {
    slug: 'typecoercion-loose-equality',
    title: 'Loose Equality (==)',
    description: `## Loose Equality (==)

The \`==\` operator coerces types before comparing values.

- \`1 == '1'\` is \`true\` (number compared to string, string is coerced to number)
- \`0 == false\` is \`true\` (both coerce to 0)
- \`null == undefined\` is \`true\` (special case in loose equality)

**Challenge:** Return an object with three boolean properties showing the results of loose equality comparisons.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypeCoercion',
    initialCode: `function looseEquality() {
  return {
    numStr: 1 == '1',
    zeroFalse: 0 == false,
    nullUndef: null == undefined
  }
}`,
    solution: `function looseEquality() {
  return {
    numStr: 1 == '1',
    zeroFalse: 0 == false,
    nullUndef: null == undefined
  }
}`,
    tests: [
      { description: 'numStr: 1 == "1" is true', assertion: 'expect(result.numStr).toBe(true)' },
      { description: 'zeroFalse: 0 == false is true', assertion: 'expect(result.zeroFalse).toBe(true)' },
      { description: 'nullUndef: null == undefined is true', assertion: 'expect(result.nullUndef).toBe(true)' },
    ],
    hints: [
      'Loose equality (==) coerces operands to the same type before comparing.',
      'Different types can still be equal with ==: 1 == "1" is true.',
      'null == undefined is a special case that returns true.',
    ],
    tags: ['type-coercion', 'equality', 'loose-equality'],
  },
  {
    slug: 'typecoercion-strict-equality',
    title: 'Strict Equality (===)',
    description: `## Strict Equality (===)

The \`===\` operator does NOT coerce types. Values must have the same type and value.

- \`1 === '1'\` is \`false\` (different types)
- \`0 === false\` is \`false\` (number vs boolean)
- \`null === undefined\` is \`false\` (different types, no coercion)

**Challenge:** Return an object with three boolean properties showing the results of strict equality comparisons.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypeCoercion',
    initialCode: `function strictEquality() {
  return {
    numStr: 1 === '1',
    zeroFalse: 0 === false,
    nullUndef: null === undefined
  }
}`,
    solution: `function strictEquality() {
  return {
    numStr: 1 === '1',
    zeroFalse: 0 === false,
    nullUndef: null === undefined
  }
}`,
    tests: [
      { description: 'numStr: 1 === "1" is false', assertion: 'expect(result.numStr).toBe(false)' },
      { description: 'zeroFalse: 0 === false is false', assertion: 'expect(result.zeroFalse).toBe(false)' },
      { description: 'nullUndef: null === undefined is false', assertion: 'expect(result.nullUndef).toBe(false)' },
    ],
    hints: [
      'Strict equality (===) does NOT coerce types.',
      'Both the type and value must be identical for === to return true.',
      'null and undefined are different types, so they are not strictly equal.',
    ],
    tags: ['type-coercion', 'equality', 'strict-equality'],
  },
  {
    slug: 'typecoercion-abstract-comparison',
    title: 'Abstract Relational Comparison',
    description: `Relational operators (<, >, <=, >=) behave differently depending on operand types. When at least one operand is a number, both are coerced to numbers. When both operands are strings, comparison is lexicographic (character by character) — no number coercion occurs. This is why '10' > '9' is false (lexicographic: '1' < '9') but '10' > 9 is true (numeric: 10 > 9).`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypeCoercion',
    initialCode: `function abstractComparison() {
  return {
    strStr: '10' > '9',
    strNum: '10' > 9
  }
}`,
    solution: `function abstractComparison() {
  return {
    strStr: '10' > '9',
    strNum: '10' > 9
  }
}`,
    tests: [
      { description: 'strStr: "10" > "9" is false (lexicographic)', assertion: 'expect(result.strStr).toBe(false)' },
      { description: 'strNum: "10" > 9 is true (numeric coercion)', assertion: 'expect(result.strNum).toBe(true)' },
    ],
    hints: [
      'When both operands are strings, comparison is lexicographic (character by character).',
      'When at least one operand is a number, both are coerced to numbers.',
      '"10" as a string starts with "1" which is less than "9" lexicographically.',
    ],
    tags: ['type-coercion', 'comparison', 'relational-operators'],
  },
  {
    slug: 'typecoercion-nullish-checks',
    title: 'Null and Undefined Coercion',
    description: `## Null and Undefined Type Coercion

- \`null\` coerces to \`0\` in numeric context: \`+null\` is \`0\`
- \`undefined\` coerces to \`NaN\` in numeric context: \`+undefined\` is \`NaN\`
- Both \`null\` and \`undefined\` are falsy: \`!null\` is \`true\`, \`!undefined\` is \`true\`

**Challenge:** Return an object showing numeric and boolean coercion of null and undefined.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypeCoercion',
    initialCode: `function nullishCoercion() {
  return {
    nullNum: +null,
    undefNum: +undefined,
    nullFalsy: !null,
    undefFalsy: !undefined
  }
}`,
    solution: `function nullishCoercion() {
  return {
    nullNum: +null,
    undefNum: +undefined,
    nullFalsy: !null,
    undefFalsy: !undefined
  }
}`,
    tests: [
      { description: 'nullNum: +null is 0', assertion: 'expect(result.nullNum).toBe(0)' },
      { description: 'undefNum: +undefined is NaN', assertion: 'expect(Number.isNaN(result.undefNum)).toBe(true)' },
      { description: 'nullFalsy: !null is true', assertion: 'expect(result.nullFalsy).toBe(true)' },
      { description: 'undefFalsy: !undefined is true', assertion: 'expect(result.undefFalsy).toBe(true)' },
    ],
    hints: [
      'The unary + operator coerces to number.',
      'null coerces to 0, but undefined coerces to NaN.',
      'Use Number.isNaN() to check for NaN.',
      'Both null and undefined are falsy values.',
    ],
    tags: ['type-coercion', 'null', 'undefined', 'falsy'],
  },
  {
    slug: 'typecoercion-boolean-coercion',
    title: 'Boolean Coercion (Truthy/Falsy)',
    description: `## Boolean Coercion: Truthy and Falsy

**Falsy values:** \`false\`, \`0\`, \`''\` (empty string), \`null\`, \`undefined\`, \`NaN\`

Everything else is truthy, including:
- Non-zero numbers: \`1\`, \`-1\`, \`0.1\`
- Non-empty strings: \`'0'\`, \`'false'\`
- Empty arrays: \`[]\`
- Empty objects: \`{}\`

\`Boolean(value)\` converts to explicit boolean.

**Challenge:** Convert values to boolean using \`Boolean()\` and observe truthy/falsy behavior.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypeCoercion',
    initialCode: `function booleanCoercion() {
  return {
    zero: Boolean(0),
    emptyStr: Boolean(''),
    emptyArr: Boolean([]),
    emptyObj: Boolean({})
  }
}`,
    solution: `function booleanCoercion() {
  return {
    zero: Boolean(0),
    emptyStr: Boolean(''),
    emptyArr: Boolean([]),
    emptyObj: Boolean({})
  }
}`,
    tests: [
      { description: 'zero: Boolean(0) is false', assertion: 'expect(result.zero).toBe(false)' },
      { description: 'emptyStr: Boolean("") is false', assertion: 'expect(result.emptyStr).toBe(false)' },
      { description: 'emptyArr: Boolean([]) is true', assertion: 'expect(result.emptyArr).toBe(true)' },
      { description: 'emptyObj: Boolean({}) is true', assertion: 'expect(result.emptyObj).toBe(true)' },
    ],
    hints: [
      'Falsy: false, 0, "", null, undefined, NaN',
      'Empty arrays and objects are truthy, not falsy.',
      'Only the 6 falsy values coerce to false; everything else is truthy.',
    ],
    tags: ['type-coercion', 'boolean', 'truthy-falsy'],
  },
]
