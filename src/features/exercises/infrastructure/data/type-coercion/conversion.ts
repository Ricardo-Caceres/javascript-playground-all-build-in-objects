import type { Exercise } from '@/shared/types/exercises'

export const typeCoercionConversionExercises: Exercise[] = [
  {
    slug: 'typecoercion-string-conversion',
    title: 'Explicit String Conversion',
    description: `## String Conversion

Multiple ways to convert values to strings:
- \`String(value)\` - explicit conversion
- \`.toString()\` - method on objects and primitives
- Template literals: \\\`\${value}\\\`

Key conversions:
- \`String(null)\` is \`'null'\`
- \`String(undefined)\` is \`'undefined'\`
- \`String(true)\` is \`'true'\`
- \`String(42)\` is \`'42'\`

**Challenge:** Convert null, undefined, a boolean, and a number to strings.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'TypeCoercion',
    initialCode: `function toStringConversion() {
  return {
    nullStr: String(null),
    undefStr: String(undefined),
    boolStr: String(true),
    numStr: String(42)
  }
}`,
    solution: `function toStringConversion() {
  return {
    nullStr: String(null),
    undefStr: String(undefined),
    boolStr: String(true),
    numStr: String(42)
  }
}`,
    tests: [
      { description: 'nullStr: String(null) is "null"', assertion: "expect(result.nullStr).toBe('null')" },
      { description: 'undefStr: String(undefined) is "undefined"', assertion: "expect(result.undefStr).toBe('undefined')" },
      { description: 'boolStr: String(true) is "true"', assertion: "expect(result.boolStr).toBe('true')" },
      { description: 'numStr: String(42) is "42"', assertion: "expect(result.numStr).toBe('42')" },
    ],
    hints: [
      'String() converts any value to a string representation.',
      'null becomes the string "null", not an empty string.',
      'undefined becomes the string "undefined".',
      'Booleans become "true" or "false".',
    ],
    tags: ['type-coercion', 'string', 'conversion'],
  },
  {
    slug: 'typecoercion-number-conversion',
    title: 'Explicit Number Conversion',
    description: `## Number Conversion

Convert values to numbers using:
- \`Number(value)\` - explicit conversion
- \`+value\` - unary plus operator
- \`parseInt(string, radix)\` - parse integer
- \`parseFloat(string)\` - parse floating point

Key conversions:
- \`Number('')\` is \`0\` (empty string coerces to 0)
- \`Number('  3  ')\` is \`3\` (whitespace is trimmed)
- \`Number('abc')\` is \`NaN\` (non-numeric string)

**Challenge:** Convert empty string, a spaced number, and a non-numeric string to numbers.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'TypeCoercion',
    initialCode: `function toNumberConversion() {
  return {
    emptyStr: Number(''),
    spacedNum: Number('  3  '),
    str: Number('abc')
  }
}`,
    solution: `function toNumberConversion() {
  return {
    emptyStr: Number(''),
    spacedNum: Number('  3  '),
    str: Number('abc')
  }
}`,
    tests: [
      { description: 'emptyStr: Number("") is 0', assertion: 'expect(result.emptyStr).toBe(0)' },
      { description: 'spacedNum: Number("  3  ") is 3', assertion: 'expect(result.spacedNum).toBe(3)' },
      { description: 'str: Number("abc") is NaN', assertion: 'expect(Number.isNaN(result.str)).toBe(true)' },
    ],
    hints: [
      'Empty strings coerce to 0.',
      'Number() trims whitespace before parsing.',
      'Non-numeric strings result in NaN, not a SyntaxError.',
      'Use Number.isNaN() to check for NaN values.',
    ],
    tags: ['type-coercion', 'number', 'conversion'],
  },
  {
    slug: 'typecoercion-addition-coercion',
    title: 'Addition Operator Coercion',
    description: `## Addition Operator (+ ) Coercion

The \`+\` operator has dual behavior:
- **Addition:** if both operands are numbers, add numerically
- **Concatenation:** if either operand is a string, convert both to strings and concatenate

Examples:
- \`1 + '2'\` is \`'12'\` (string concatenation, not addition)
- \`1 + 2 + '3'\` is \`'33'\` (left-to-right: 1+2=3, then 3+'3'='33')
- \`'1' + 2 + 3\` is \`'123'\` (left-to-right: '1'+2='12', then '12'+3='123')

**Challenge:** Demonstrate the order of operations with + operator.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'TypeCoercion',
    initialCode: `function additionCoercion() {
  return {
    numStr: 1 + '2',
    numNumStr: 1 + 2 + '3',
    strNumNum: '1' + 2 + 3
  }
}`,
    solution: `function additionCoercion() {
  return {
    numStr: 1 + '2',
    numNumStr: 1 + 2 + '3',
    strNumNum: '1' + 2 + 3
  }
}`,
    tests: [
      { description: 'numStr: 1 + "2" is "12"', assertion: 'expect(result.numStr).toBe("12")' },
      { description: 'numNumStr: 1 + 2 + "3" is "33"', assertion: 'expect(result.numNumStr).toBe("33")' },
      { description: 'strNumNum: "1" + 2 + 3 is "123"', assertion: 'expect(result.strNumNum).toBe("123")' },
    ],
    hints: [
      'If either operand is a string, the result is concatenation (string).',
      'Operations are evaluated left-to-right.',
      '1 + 2 = 3 (both numbers), then 3 + "3" = "33" (concatenation).',
      '"1" + 2 = "12" (concatenation), then "12" + 3 = "123" (concatenation).',
    ],
    tags: ['type-coercion', 'addition', 'operator'],
  },
  {
    slug: 'typecoercion-object-coercion',
    title: 'Object to Primitive Coercion',
    description: `## Object to Primitive Coercion

Objects coerce to primitives via:
1. \`valueOf()\` - returns primitive value if applicable
2. \`toString()\` - returns string representation

Examples:
- \`[] + []\` is \`''\` (both coerce to '', concatenate to '')
- \`[] + {}\` is \`'[object Object]'\` ([] becomes '', {} becomes '[object Object]')
- \`({}) + []\` is \`'[object Object]'\` (same, with explicit parentheses for clarity)

**Challenge:** Observe object-to-primitive coercion with the + operator.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'TypeCoercion',
    initialCode: `function objectCoercion() {
  return {
    arrArr: [] + [],
    arrObj: [] + {},
    objArr: ({}) + []
  }
}`,
    solution: `function objectCoercion() {
  return {
    arrArr: [] + [],
    arrObj: [] + {},
    objArr: ({}) + []
  }
}`,
    tests: [
      { description: 'arrArr: [] + [] is ""', assertion: 'expect(result.arrArr).toBe("")' },
      { description: 'arrObj: [] + {} is "[object Object]"', assertion: 'expect(result.arrObj).toBe("[object Object]")' },
      { description: 'objArr: ({}) + [] is "[object Object]"', assertion: 'expect(result.objArr).toBe("[object Object]")' },
    ],
    hints: [
      'Arrays coerce to strings via toString(), which produces a comma-separated list of elements.',
      'Empty arrays [] have no elements, so toString() returns an empty string.',
      'Objects coerce to "[object Object]" by default.',
      'The + operator causes both operands to be converted to strings when at least one is already a string.',
    ],
    tags: ['type-coercion', 'object', 'array', 'primitive'],
  },
  {
    slug: 'typecoercion-nan-behavior',
    title: 'NaN Behavior',
    description: `## NaN (Not a Number)

\`NaN\` is a special numeric value resulting from invalid operations:
- \`Number('abc')\` is \`NaN\`
- \`parseInt('x')\` is \`NaN\`
- \`0 / 0\` is \`NaN\`

**Important:** \`NaN !== NaN\` — NaN is the only value not equal to itself!

- Use \`Number.isNaN(x)\` to reliably check for NaN
- \`typeof NaN\` is \`'number'\` (quirk of JavaScript)

**Challenge:** Verify NaN's unique behavior.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'TypeCoercion',
    initialCode: `function nanBehavior() {
  return {
    selfEqual: NaN === NaN,
    isNaNCheck: Number.isNaN(NaN),
    typeofNaN: typeof NaN
  }
}`,
    solution: `function nanBehavior() {
  return {
    selfEqual: NaN === NaN,
    isNaNCheck: Number.isNaN(NaN),
    typeofNaN: typeof NaN
  }
}`,
    tests: [
      { description: 'selfEqual: NaN === NaN is false', assertion: 'expect(result.selfEqual).toBe(false)' },
      { description: 'isNaNCheck: Number.isNaN(NaN) is true', assertion: 'expect(result.isNaNCheck).toBe(true)' },
      { description: 'typeofNaN: typeof NaN is "number"', assertion: 'expect(result.typeofNaN).toBe("number")' },
    ],
    hints: [
      'NaN is a special numeric value that does not equal itself.',
      'Always use Number.isNaN() to check for NaN, not === or the global isNaN().',
      'typeof NaN returns "number", which is technically correct but unintuitive.',
      'NaN stands for "Not a Number" but its type is still "number".',
    ],
    tags: ['type-coercion', 'nan', 'number'],
  },
]
