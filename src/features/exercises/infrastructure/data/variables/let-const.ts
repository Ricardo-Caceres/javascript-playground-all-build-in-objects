import type { Exercise } from '@/shared/types/exercises'

export const variablesLetConstExercises: Exercise[] = [
  {
    slug: 'variables-let-reassign',
    title: 'Variables — let: mutable binding',
    description: `## let allows reassignment\n\nUnlike \`const\`, a variable declared with \`let\` can be reassigned after its initial declaration.\n\n**Challenge:** Write \`letReassign()\` that:\n1. Declares \`score\` with \`let\`, set to 0\n2. Reassigns it to 100\n3. Returns \`score\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Variables',
    initialCode: `function letReassign() {
  // Declare score with let, set to 0, then reassign to 100, return it
}`,
    solution: `function letReassign() {
  let score = 0
  score = 100
  return score
}`,
    tests: [
      { description: 'returns 100 after reassignment', assertion: "expect(letReassign()).toBe(100)" },
      { description: 'returns a number', assertion: "expect(typeof letReassign()).toBe('number')" },
    ],
    hints: ['Declare with let, then use = to reassign on a separate line'],
    tags: ['variables', 'let', 'reassignment'],
  },
  {
    slug: 'variables-const-object',
    title: 'Variables — const: object properties are mutable',
    description: `## const prevents rebinding, not mutation\n\nA \`const\` variable cannot be reassigned to a new value, but if it holds an object or array, you can still modify its properties/elements.\n\n**Challenge:** Write \`constObject()\` that:\n1. Declares \`obj\` with \`const\`: \`{ count: 0 }\`\n2. Sets \`obj.count = 42\`\n3. Returns \`obj.count\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Variables',
    initialCode: `function constObject() {
  // Declare obj with const, mutate obj.count, return obj.count
}`,
    solution: `function constObject() {
  const obj = { count: 0 }
  obj.count = 42
  return obj.count
}`,
    tests: [
      { description: 'returns 42 after mutation', assertion: "expect(constObject()).toBe(42)" },
    ],
    hints: ['const prevents reassigning the variable itself, not changing its properties'],
    tags: ['variables', 'const', 'mutation'],
  },
  {
    slug: 'variables-block-scope',
    title: 'Variables — let: block-scoped',
    description: `## let is block-scoped\n\nA \`let\` variable is only accessible within the block \`{ }\` where it was declared. A new \`let x\` inside a block creates a separate variable.\n\n**Challenge:** Write \`blockScope()\` that:\n1. Declares \`let x = 'outer'\`\n2. Opens a block \`{ }\` and declares \`let x = 'inner'\` inside it\n3. Returns \`x\` (should be \`'outer'\` — the block's x doesn't escape)`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Variables',
    initialCode: `function blockScope() {
  let x = 'outer'
  // Create a block with its own let x = 'inner'
  return x
}`,
    solution: `function blockScope() {
  let x = 'outer'
  {
    let x = 'inner'
  }
  return x
}`,
    tests: [
      { description: 'outer x is unchanged', assertion: "expect(blockScope()).toBe('outer')" },
    ],
    hints: ['let is confined to the { } block where it was declared'],
    tags: ['variables', 'let', 'block-scope'],
  },
  {
    slug: 'variables-var-function-scope',
    title: 'Variables — var: function-scoped (not block-scoped)',
    description: `## var is function-scoped\n\nUnlike \`let\`/\`const\`, a \`var\` declaration is scoped to the nearest function, not to the nearest block. It leaks out of \`if\`/\`for\`/\`while\` blocks.\n\n**Challenge:** Write \`varFunctionScope()\` that:\n1. Declares \`var leaked = 'yes'\` inside an \`if (true) { }\` block\n2. Returns \`leaked\` from outside the block (it should still be accessible)`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Variables',
    initialCode: `function varFunctionScope() {
  if (true) {
    // declare var leaked = 'yes' here
  }
  // return leaked here — var leaks out of the block
}`,
    solution: `function varFunctionScope() {
  if (true) {
    var leaked = 'yes'
  }
  return leaked
}`,
    tests: [
      { description: 'var is accessible outside the block', assertion: "expect(varFunctionScope()).toBe('yes')" },
    ],
    hints: ['var declarations are hoisted to the containing function, not the block'],
    tags: ['variables', 'var', 'function-scope'],
  },
  {
    slug: 'variables-destructuring',
    title: 'Variables — destructuring assignment',
    description: `## Destructuring\n\nDestructuring lets you unpack values from arrays or objects into named variables.\n\n**Challenge:** Write \`destructureArray()\` that:\n1. Destructures \`[1, 2, 3, 4, 5]\` into \`a\`, \`b\`, and \`rest\` (remaining elements)\n2. Returns \`{ a, b, rest }\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Variables',
    initialCode: `function destructureArray() {
  // Destructure [1, 2, 3, 4, 5] into a, b, ...rest
  // return { a, b, rest }
}`,
    solution: `function destructureArray() {
  const [a, b, ...rest] = [1, 2, 3, 4, 5]
  return { a, b, rest }
}`,
    tests: [
      { description: 'a is 1', assertion: "expect(destructureArray().a).toBe(1)" },
      { description: 'b is 2', assertion: "expect(destructureArray().b).toBe(2)" },
      { description: 'rest contains remaining elements', assertion: "expect(destructureArray().rest).toEqual([3, 4, 5])" },
    ],
    hints: ['Use [a, b, ...rest] = array syntax', 'The ...rest collects all remaining elements into an array'],
    tags: ['variables', 'destructuring', 'rest'],
  },
]
