import type { Exercise } from '@/shared/types/exercises'

export const operatorsAdvancedExercises: Exercise[] = [
  {
    slug: 'operators-bitwise',
    title: 'Operators — bitwise: &, |, ^, ~, <<, >>',
    description: `## Bitwise operators work on 32-bit integers\n\n- \`&\` AND, \`|\` OR, \`^\` XOR, \`~\` NOT\n- \`<<\` left shift (×2 per shift), \`>>\` right shift (÷2 per shift)\n\n**Challenge:** Write \`bitwiseOps()\` returning an object with all six results:\n- \`and\`: 5 & 3, \`or\`: 5 | 3, \`xor\`: 5 ^ 3\n- \`not\`: ~5, \`left\`: 1 << 3, \`right\`: 16 >> 2`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Operators',
    initialCode: `function bitwiseOps() {
  return {
    and: 0,   // 5 & 3
    or: 0,    // 5 | 3
    xor: 0,   // 5 ^ 3
    not: 0,   // ~5
    left: 0,  // 1 << 3
    right: 0, // 16 >> 2
  }
}`,
    solution: `function bitwiseOps() {
  return {
    and: 5 & 3,
    or: 5 | 3,
    xor: 5 ^ 3,
    not: ~5,
    left: 1 << 3,
    right: 16 >> 2,
  }
}`,
    tests: [
      { description: '5&3 = 1 (101&011=001)', assertion: "expect(bitwiseOps().and).toBe(1)" },
      { description: '5|3 = 7 (101|011=111)', assertion: "expect(bitwiseOps().or).toBe(7)" },
      { description: '5^3 = 6 (101^011=110)', assertion: "expect(bitwiseOps().xor).toBe(6)" },
      { description: '~5 = -6 (bitwise NOT)', assertion: "expect(bitwiseOps().not).toBe(-6)" },
      { description: '1<<3 = 8', assertion: "expect(bitwiseOps().left).toBe(8)" },
      { description: '16>>2 = 4', assertion: "expect(bitwiseOps().right).toBe(4)" },
    ],
    hints: ['~n equals -(n+1) in two\'s complement', '1<<3 means 1×2³=8'],
    tags: ['operators', 'bitwise'],
  },
  {
    slug: 'operators-typeof',
    title: 'Operators — typeof and its quirks',
    description: `## typeof returns a string describing the type\n\nKnown quirks: \`typeof null === 'object'\` (historical bug), \`typeof []\` is also \`'object'\`, but \`typeof function(){}\` is \`'function'\`.\n\n**Challenge:** Write \`typeofValues()\` returning the typeof result for: a number, string, boolean, undefined, null, array, function, and Symbol.`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Operators',
    initialCode: `function typeofValues() {
  return {
    num: typeof 42,
    str: typeof 'hello',
    bool: typeof true,
    undef: typeof undefined,
    nul: typeof null,
    arr: typeof [],
    fn: typeof function(){},
    sym: typeof Symbol(),
  }
}`,
    solution: `function typeofValues() {
  return {
    num: typeof 42,
    str: typeof 'hello',
    bool: typeof true,
    undef: typeof undefined,
    nul: typeof null,
    arr: typeof [],
    fn: typeof function(){},
    sym: typeof Symbol(),
  }
}`,
    tests: [
      { description: 'typeof null is "object" (quirk)', assertion: "expect(typeofValues().nul).toBe('object')" },
      { description: 'typeof [] is "object"', assertion: "expect(typeofValues().arr).toBe('object')" },
      { description: 'typeof function is "function"', assertion: "expect(typeofValues().fn).toBe('function')" },
      { description: 'typeof Symbol() is "symbol"', assertion: "expect(typeofValues().sym).toBe('symbol')" },
    ],
    hints: ['typeof null === "object" is a famous JavaScript quirk from ES1'],
    tags: ['operators', 'typeof'],
  },
  {
    slug: 'operators-in-instanceof',
    title: 'Operators — in and instanceof',
    description: `## in checks property existence, instanceof checks prototype chain\n\n- \`'key' in obj\` → true if the object has the key (own or inherited)\n- \`obj instanceof Constructor\` → true if \`Constructor.prototype\` is in the prototype chain\n\n**Challenge:** Write \`checkMembership()\` that tests:\n- \`hasName\`: \`'name' in { name: 'Alice' }\`\n- \`hasFoo\`: \`'foo' in { name: 'Alice' }\`\n- \`isArray\`: \`[1,2,3] instanceof Array\`\n- \`isDate\`: \`new Date() instanceof Date\``,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Operators',
    initialCode: `function checkMembership() {
  const obj = { name: 'Alice' }
  const arr = [1, 2, 3]
  return {
    hasName: false,
    hasFoo: false,
    isArray: false,
    isDate: false,
  }
}`,
    solution: `function checkMembership() {
  const obj = { name: 'Alice' }
  const arr = [1, 2, 3]
  return {
    hasName: 'name' in obj,
    hasFoo: 'foo' in obj,
    isArray: arr instanceof Array,
    isDate: new Date() instanceof Date,
  }
}`,
    tests: [
      { description: '"name" in obj is true', assertion: "expect(checkMembership().hasName).toBe(true)" },
      { description: '"foo" in obj is false', assertion: "expect(checkMembership().hasFoo).toBe(false)" },
      { description: '[1,2,3] instanceof Array is true', assertion: "expect(checkMembership().isArray).toBe(true)" },
      { description: 'new Date() instanceof Date is true', assertion: "expect(checkMembership().isDate).toBe(true)" },
    ],
    hints: ['in checks for own AND inherited properties', 'instanceof traverses the prototype chain'],
    tags: ['operators', 'in', 'instanceof'],
  },
]
