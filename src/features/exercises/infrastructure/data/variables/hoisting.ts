import type { Exercise } from '@/shared/types/exercises'

export const variablesHoistingExercises: Exercise[] = [
  {
    slug: 'variables-var-hoisting',
    title: 'Variables — var hoisting: undefined before declaration',
    description: `## var is hoisted with value undefined\n\nWhen JavaScript sees a \`var\` declaration anywhere in a function, it "hoists" the declaration to the top of the function — but **not** the assignment. Accessing the variable before the assignment returns \`undefined\`.\n\n**Challenge:** Write \`varHoisting()\` that:\n1. Captures \`typeof hoisted\` before the declaration line\n2. Declares \`var hoisted = 'later'\`\n3. Returns the captured typeof result`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Variables',
    initialCode: `function varHoisting() {
  // capture typeof hoisted BEFORE the var declaration
  // then declare: var hoisted = 'later'
  // return the captured result
}`,
    solution: `function varHoisting() {
  const result = typeof hoisted
  var hoisted = 'later'
  return result
}`,
    tests: [
      { description: 'typeof hoisted before declaration is "undefined"', assertion: "expect(varHoisting()).toBe('undefined')" },
    ],
    hints: ['var is hoisted to the top of the function but without its assigned value'],
    tags: ['variables', 'var', 'hoisting'],
  },
  {
    slug: 'variables-function-hoisting',
    title: 'Variables — function declaration hoisting',
    description: `## Function declarations are fully hoisted\n\nUnlike \`var\` (which hoists with \`undefined\`), a **function declaration** is fully hoisted — you can call it before the line where it appears in the source.\n\n**Challenge:** Write \`functionHoisting()\` that:\n1. Calls \`greet()\` before its declaration\n2. Declares \`function greet() { return 'hoisted!' }\` after the call\n3. Returns the result of the early call`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Variables',
    initialCode: `function functionHoisting() {
  // Call greet() here, BEFORE its declaration below
  // function greet() { return 'hoisted!' }
}`,
    solution: `function functionHoisting() {
  const result = greet()
  function greet() { return 'hoisted!' }
  return result
}`,
    tests: [
      { description: 'calling before declaration works', assertion: "expect(functionHoisting()).toBe('hoisted!')" },
    ],
    hints: ['Function declarations (not expressions) are fully hoisted with their body'],
    tags: ['variables', 'hoisting', 'function-declaration'],
  },
  {
    slug: 'variables-let-tdz',
    title: 'Variables — let temporal dead zone (TDZ)',
    description: `## let has a Temporal Dead Zone\n\nLike \`var\`, \`let\` is hoisted to the top of its block — but unlike \`var\`, accessing it before the declaration line throws a **ReferenceError**. The period between the start of the block and the declaration line is called the Temporal Dead Zone (TDZ).\n\n**Challenge:** Write \`letTDZ()\` that:\n1. Uses \`eval\` to run a function that accesses \`x\` before declaring it with \`let\`\n2. Wraps the eval in try/catch\n3. Returns \`'ReferenceError'\` if the error is caught, or \`'no error'\` otherwise`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Variables',
    initialCode: `function letTDZ() {
  try {
    // eval('(function(){ return x; let x = 1 })()')
    return 'no error'
  } catch (e) {
    return 'ReferenceError'
  }
}`,
    solution: `function letTDZ() {
  try {
    eval('(function(){ return x; let x = 1 })()')
    return 'no error'
  } catch (e) {
    return 'ReferenceError'
  }
}`,
    tests: [
      { description: 'accessing let before declaration throws ReferenceError', assertion: "expect(letTDZ()).toBe('ReferenceError')" },
    ],
    hints: ['The eval trick forces a runtime TDZ error that can be caught'],
    tags: ['variables', 'let', 'tdz', 'temporal-dead-zone'],
  },
  {
    slug: 'variables-var-loop-closure',
    title: 'Variables — var in loop closures (the classic gotcha)',
    description: `## var in loops: all closures share the same binding\n\nWhen you create closures inside a \`for\` loop with \`var\`, all closures share **one** binding. By the time they run, \`i\` is already at its final value.\n\n**Challenge:** Write \`varLoopClosure()\` that:\n1. Creates an array \`fns\`\n2. Uses a \`for (var i = 0; i < 3; i++)\` loop and pushes \`() => i\` to \`fns\`\n3. Returns \`fns[0]()\` — this returns the **final** value of \`i\` (3), not 0`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Variables',
    initialCode: `function varLoopClosure() {
  const fns = []
  // for loop with var i, push () => i to fns
  return fns[0]()
}`,
    solution: `function varLoopClosure() {
  const fns = []
  for (var i = 0; i < 3; i++) {
    fns.push(() => i)
  }
  return fns[0]()
}`,
    tests: [
      { description: 'fns[0]() returns 3 (final var value)', assertion: "expect(varLoopClosure()).toBe(3)" },
    ],
    hints: ['var has function scope — all closures point to the same i', 'After the loop, i === 3'],
    tags: ['variables', 'var', 'closure', 'loop'],
  },
  {
    slug: 'variables-let-loop-closure',
    title: 'Variables — let in loop closures (per-iteration binding)',
    description: `## let in loops: each iteration gets a fresh binding\n\nWhen you use \`let\` in a \`for\` loop, JavaScript creates a **new binding** for each iteration. Closures created inside the loop each capture their own copy of \`i\`.\n\n**Challenge:** Write \`letLoopClosure()\` that:\n1. Creates an array \`fns\`\n2. Uses a \`for (let i = 0; i < 3; i++)\` loop and pushes \`() => i\` to \`fns\`\n3. Returns \`fns[0]()\` — this returns \`0\` (the iteration-specific binding)`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Variables',
    initialCode: `function letLoopClosure() {
  const fns = []
  // for loop with let i, push () => i to fns
  return fns[0]()
}`,
    solution: `function letLoopClosure() {
  const fns = []
  for (let i = 0; i < 3; i++) {
    fns.push(() => i)
  }
  return fns[0]()
}`,
    tests: [
      { description: 'fns[0]() returns 0 (per-iteration let binding)', assertion: "expect(letLoopClosure()).toBe(0)" },
      { description: 'fns[2]() returns 2', assertion: "const fns=[]; for(let i=0;i<3;i++){fns.push(()=>i)}; expect(fns[2]()).toBe(2)" },
    ],
    hints: ['let creates a new scope per iteration — each closure captures its own i'],
    tags: ['variables', 'let', 'closure', 'loop'],
  },
]
