import type { Exercise } from '@/shared/types/exercises'

export const operatorsBasicsExercises: Exercise[] = [
  {
    slug: 'operators-arithmetic',
    title: 'Operators — arithmetic: +, -, *, /, %, **',
    description: `## Arithmetic operators\n\nJavaScript supports the usual arithmetic operators. \`%\` is remainder (not modulo), and \`**\` is exponentiation.\n\n**Challenge:** Write \`arithmetic(a, b)\` that returns an object with properties \`add\`, \`sub\`, \`mul\`, \`div\`, \`mod\`, \`pow\` representing each operation.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Operators',
    initialCode: `function arithmetic(a, b) {
  return {
    add: 0,  // a + b
    sub: 0,  // a - b
    mul: 0,  // a * b
    div: 0,  // a / b
    mod: 0,  // a % b
    pow: 0,  // a ** b
  }
}`,
    solution: `function arithmetic(a, b) {
  return {
    add: a + b,
    sub: a - b,
    mul: a * b,
    div: a / b,
    mod: a % b,
    pow: a ** b,
  }
}`,
    tests: [
      { description: 'add(10,3) is 13', assertion: "expect(arithmetic(10,3).add).toBe(13)" },
      { description: 'sub(10,3) is 7', assertion: "expect(arithmetic(10,3).sub).toBe(7)" },
      { description: 'mod(10,3) is 1', assertion: "expect(arithmetic(10,3).mod).toBe(1)" },
      { description: 'pow(2,3) is 8', assertion: "expect(arithmetic(2,3).pow).toBe(8)" },
    ],
    hints: ['** is the exponentiation operator (ES2016)'],
    tags: ['operators', 'arithmetic'],
  },
  {
    slug: 'operators-comparison',
    title: 'Operators — strict (===) vs loose (==) equality',
    description: `## Strict vs loose equality\n\n\`===\` checks value AND type — no coercion. \`==\` coerces types before comparing.\n\n**Challenge:** Write \`compareEquality()\` returning an object with:\n- \`strictNumStr\`: \`1 === '1'\`\n- \`looseNumStr\`: \`1 == '1'\`\n- \`strictNullUndef\`: \`null === undefined\`\n- \`looseNullUndef\`: \`null == undefined\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Operators',
    initialCode: `function compareEquality() {
  return {
    strictNumStr: null,
    looseNumStr: null,
    strictNullUndef: null,
    looseNullUndef: null,
  }
}`,
    solution: `function compareEquality() {
  return {
    strictNumStr: 1 === '1',
    looseNumStr: 1 == '1',
    strictNullUndef: null === undefined,
    looseNullUndef: null == undefined,
  }
}`,
    tests: [
      { description: '1 === "1" is false', assertion: "expect(compareEquality().strictNumStr).toBe(false)" },
      { description: '1 == "1" is true', assertion: "expect(compareEquality().looseNumStr).toBe(true)" },
      { description: 'null === undefined is false', assertion: "expect(compareEquality().strictNullUndef).toBe(false)" },
      { description: 'null == undefined is true', assertion: "expect(compareEquality().looseNullUndef).toBe(true)" },
    ],
    hints: ['null and undefined are only == to each other (and themselves), not to 0 or false'],
    tags: ['operators', 'equality', 'strict', 'loose'],
  },
  {
    slug: 'operators-logical',
    title: 'Operators — logical &&, ||, ! and short-circuit',
    description: `## Logical operators return values, not just booleans\n\n\`&&\` returns the first falsy value or the last value. \`||\` returns the first truthy value or the last value. This enables short-circuit evaluation.\n\n**Challenge:** Write \`shortCircuit()\` returning:\n- \`and\`: result of \`null && 'never'\`\n- \`or\`: result of \`null || 'fallback'\`\n- \`notEmpty\`: result of \`!''\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Operators',
    initialCode: `function shortCircuit() {
  return {
    and: null, // null && 'never'
    or: null,  // null || 'fallback'
    notEmpty: null, // !''
  }
}`,
    solution: `function shortCircuit() {
  return {
    and: null && 'never',
    or: null || 'fallback',
    notEmpty: !'',
  }
}`,
    tests: [
      { description: 'null && "never" is null', assertion: "expect(shortCircuit().and).toBeNull()" },
      { description: 'null || "fallback" is "fallback"', assertion: "expect(shortCircuit().or).toBe('fallback')" },
      { description: '!"" is true', assertion: "expect(shortCircuit().notEmpty).toBe(true)" },
    ],
    hints: ['&& stops and returns the first falsy value', '|| stops and returns the first truthy value'],
    tags: ['operators', 'logical', 'short-circuit'],
  },
  {
    slug: 'operators-ternary',
    title: 'Operators — ternary: condition ? a : b',
    description: `## Ternary operator\n\nThe ternary operator is a one-line if-else: \`condition ? valueIfTrue : valueIfFalse\`.\n\n**Challenge:** Write \`classify(n)\` that returns:\n- \`'positive'\` if n > 0\n- \`'negative'\` if n < 0\n- \`'zero'\` if n === 0\n\nUse nested ternaries.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Operators',
    initialCode: `function classify(n) {
  // Use nested ternaries
}`,
    solution: `function classify(n) {
  return n > 0 ? 'positive' : n < 0 ? 'negative' : 'zero'
}`,
    tests: [
      { description: 'positive for 5', assertion: "expect(classify(5)).toBe('positive')" },
      { description: 'negative for -3', assertion: "expect(classify(-3)).toBe('negative')" },
      { description: 'zero for 0', assertion: "expect(classify(0)).toBe('zero')" },
    ],
    hints: ['Ternaries can be nested: a ? b : c ? d : e'],
    tags: ['operators', 'ternary'],
  },
  {
    slug: 'operators-compound-assignment',
    title: 'Operators — compound assignment: +=, -=, *=, /=',
    description: `## Compound assignment operators\n\n\`x += 5\` is shorthand for \`x = x + 5\`. Applies to \`-=\`, \`*=\`, \`/=\`, \`%=\`, \`**=\`.\n\n**Challenge:** Write \`compoundAssignment(x)\` that:\n1. Does \`x += 10\`\n2. Then \`x -= 3\`\n3. Then \`x *= 2\`\n4. Then \`x /= 2\`\n5. Returns \`x\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Operators',
    initialCode: `function compoundAssignment(x) {
  // Apply +=10, -=3, *=2, /=2 in sequence
  return x
}`,
    solution: `function compoundAssignment(x) {
  x += 10
  x -= 3
  x *= 2
  x /= 2
  return x
}`,
    tests: [
      { description: 'compoundAssignment(0) returns 7', assertion: "expect(compoundAssignment(0)).toBe(7)" },
      { description: 'compoundAssignment(3) returns 10', assertion: "expect(compoundAssignment(3)).toBe(10)" },
    ],
    hints: ['Work through: (x+10-3)*2/2 = x+7'],
    tags: ['operators', 'compound-assignment'],
  },
]
