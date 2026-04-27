# Learning Path Feature Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a JavaScript Learning Path page based on roadmap.sh/javascript, including 6 new exercise topics (Variables, Operators, ControlFlow, TypeCoercion, StrictMode, Modules) and a `/learning-path` route showing per-topic progress.

**Architecture:** New exercise topic files follow existing patterns in `src/features/exercises/infrastructure/data/`. A new `src/features/learning-path/` feature directory holds the page config, hook, and components. The `/[locale]/learning-path` route renders the view. Navigation links added to Navbar and HomeView.

**Tech Stack:** Next.js (App Router), React, TypeScript, Redux Toolkit, next-intl, Tailwind CSS

---

## File Structure

### New Files
```
src/features/exercises/infrastructure/data/
  variables/
    let-const.ts          → variablesLetConstExercises (5 beginner)
    hoisting.ts           → variablesHoistingExercises (5 intermediate)
  operators/
    basics.ts             → operatorsBasicsExercises (5 beginner)
    modern.ts             → operatorsModernExercises (5 intermediate)
    advanced.ts           → operatorsAdvancedExercises (3 advanced)
  control-flow/
    conditionals.ts       → controlFlowConditionalsExercises (5 beginner)
    loops.ts              → controlFlowLoopsExercises (5 intermediate)
    advanced.ts           → controlFlowAdvancedExercises (3 advanced)
  type-coercion/
    equality.ts           → typeCoercionEqualityExercises (5 beginner)
    conversion.ts         → typeCoercionConversionExercises (5 intermediate)
  strict-mode/
    basics.ts             → strictModeBasicsExercises (3 beginner)
    edge-cases.ts         → strictModeEdgeCasesExercises (3 intermediate)
  modules/
    exports.ts            → modulesExportsExercises (3 beginner)
    patterns.ts           → modulesPatternsExercises (3 intermediate)
    dynamic.ts            → modulesDynamicExercises (3 advanced)

src/features/learning-path/
  infrastructure/data/
    learningPathConfig.ts  → learningPathSections (8 sections × N topics)
  presentation/
    hooks/
      useLearningPathProgress.ts
    components/
      TopicProgressCard.tsx
      LearningPathSection.tsx
      LearningPathView.tsx

src/app/[locale]/learning-path/
  page.tsx
```

### Modified Files
```
src/features/exercises/infrastructure/data/index.ts     — add 15 new imports
src/features/exercises/infrastructure/data/topicMeta.ts — add 6 topic descriptions
src/shared/components/Navbar.tsx                        — add "Learning Path" link
src/features/home/presentation/components/HomeView.tsx  — add Learning Path card
messages/en.json                                        — add learningPath translations
messages/es.json                                        — add learningPath translations
```

---

## Important Context

- **Exercise test assertions** are raw JS (NOT Babel-transpiled). Only user code is transpiled.
- **Supported matchers:** `toBe`, `toEqual`, `toStrictEqual`, `toBeTruthy`, `toBeFalsy`, `toContain`, `toHaveLength`, `toBeNull`, `toBeUndefined`, `toThrow`. **NO `.not` modifier. NO `toBeGreaterThan`. NO `toBeDefined`.**
- **builtIn field:** PascalCase, e.g., `'Variables'`, `'ControlFlow'`. topicMeta keys are lowercase (e.g., `'controlflow'`).
- **Navigation:** Import `Link` from `'@/i18n/navigation'` (NOT `next/link`).
- **Translations:** Use `useTranslations('learningPath')` in client components.

---


---

## Task 1: Variables exercises

**Files:**
- Create: `src/features/exercises/infrastructure/data/variables/let-const.ts`
- Create: `src/features/exercises/infrastructure/data/variables/hoisting.ts`

- [ ] **Step 1: Create `variables/let-const.ts`**

```typescript
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
```

- [ ] **Step 2: Create `variables/hoisting.ts`**

```typescript
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
```

- [ ] **Step 3: Commit**

```bash
git add src/features/exercises/infrastructure/data/variables/
git commit -m "feat: add Variables exercise topic (10 exercises, beginner+intermediate)"
```


---

## Task 2: Operators exercises

**Files:**
- Create: `src/features/exercises/infrastructure/data/operators/basics.ts`
- Create: `src/features/exercises/infrastructure/data/operators/modern.ts`
- Create: `src/features/exercises/infrastructure/data/operators/advanced.ts`

- [ ] **Step 1: Create `operators/basics.ts`** (5 beginner)

```typescript
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
```

- [ ] **Step 2: Create `operators/modern.ts`** (5 intermediate)

```typescript
import type { Exercise } from '@/shared/types/exercises'

export const operatorsModernExercises: Exercise[] = [
  {
    slug: 'operators-nullish-coalescing',
    title: 'Operators — ?? nullish coalescing',
    description: `## ?? only falls back for null/undefined\n\nUnlike \`||\`, which falls back for any falsy value, \`??\` only falls back when the left side is \`null\` or \`undefined\`. This means \`0\`, \`''\`, and \`false\` are **not** replaced.\n\n**Challenge:** Write \`withDefault(val)\` that returns \`val ?? 'default'\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Operators',
    initialCode: `function withDefault(val) {
  // return val ?? 'default'
}`,
    solution: `function withDefault(val) {
  return val ?? 'default'
}`,
    tests: [
      { description: 'null gets default', assertion: "expect(withDefault(null)).toBe('default')" },
      { description: 'undefined gets default', assertion: "expect(withDefault(undefined)).toBe('default')" },
      { description: '0 is preserved (not falsy-replaced)', assertion: "expect(withDefault(0)).toBe(0)" },
      { description: 'empty string is preserved', assertion: "expect(withDefault('')).toBe('')" },
      { description: 'false is preserved', assertion: "expect(withDefault(false)).toBe(false)" },
    ],
    hints: ['?? only triggers for null or undefined, not 0, false, or empty string'],
    tags: ['operators', 'nullish-coalescing', 'modern-js'],
  },
  {
    slug: 'operators-optional-chaining',
    title: 'Operators — ?. optional chaining',
    description: `## ?. safely navigates nested properties\n\n\`obj?.prop\` returns \`undefined\` instead of throwing if \`obj\` is \`null\` or \`undefined\`.\n\n**Challenge:** Write \`safeAccess(obj)\` that returns:\n- \`name\`: \`obj?.user?.name ?? 'anonymous'\`\n- \`city\`: \`obj?.user?.address?.city ?? 'unknown'\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Operators',
    initialCode: `function safeAccess(obj) {
  return {
    name: 'anonymous',
    city: 'unknown',
  }
}`,
    solution: `function safeAccess(obj) {
  return {
    name: obj?.user?.name ?? 'anonymous',
    city: obj?.user?.address?.city ?? 'unknown',
  }
}`,
    tests: [
      { description: 'returns name when present', assertion: "expect(safeAccess({ user: { name: 'Alice', address: { city: 'NYC' } } }).name).toBe('Alice')" },
      { description: 'returns city when present', assertion: "expect(safeAccess({ user: { name: 'Bob', address: { city: 'LA' } } }).city).toBe('LA')" },
      { description: 'returns anonymous for null input', assertion: "expect(safeAccess(null).name).toBe('anonymous')" },
      { description: 'returns unknown when city missing', assertion: "expect(safeAccess({ user: { name: 'Carol' } }).city).toBe('unknown')" },
    ],
    hints: ['Chain ?. for each level: obj?.user?.address?.city'],
    tags: ['operators', 'optional-chaining', 'modern-js'],
  },
  {
    slug: 'operators-spread',
    title: 'Operators — ... spread: merge arrays and objects',
    description: `## Spread operator expands iterables\n\n\`...\` spreads the elements of an array or properties of an object inline.\n\n**Challenge:** Write \`mergeAll(arr1, arr2, obj1, obj2)\` that returns:\n- \`arr\`: \`arr1\` and \`arr2\` merged into one array using spread\n- \`obj\`: \`obj1\` and \`obj2\` merged into one object using spread (obj2 properties win)`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Operators',
    initialCode: `function mergeAll(arr1, arr2, obj1, obj2) {
  return {
    arr: [],  // spread arr1 and arr2
    obj: {},  // spread obj1 and obj2
  }
}`,
    solution: `function mergeAll(arr1, arr2, obj1, obj2) {
  return {
    arr: [...arr1, ...arr2],
    obj: { ...obj1, ...obj2 },
  }
}`,
    tests: [
      { description: 'merges arrays', assertion: "expect(mergeAll([1,2],[3,4],{},{}).arr).toEqual([1,2,3,4])" },
      { description: 'merges objects', assertion: "expect(mergeAll([],[],{a:1},{b:2}).obj).toEqual({a:1,b:2})" },
      { description: 'obj2 overwrites obj1 on conflict', assertion: "expect(mergeAll([],[],{x:1},{x:99}).obj.x).toBe(99)" },
    ],
    hints: ['[...a, ...b] spreads both arrays', '{ ...a, ...b } merges both objects (later props win)'],
    tags: ['operators', 'spread', 'modern-js'],
  },
  {
    slug: 'operators-rest-params',
    title: 'Operators — ...rest parameters',
    description: `## Rest collects remaining arguments\n\nWhen \`...\` appears in a **function parameter**, it collects all remaining arguments into an array.\n\n**Challenge:** Write \`sumAll(first, ...rest)\` that returns the sum of \`first\` plus all elements of \`rest\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Operators',
    initialCode: `function sumAll(first, ...rest) {
  // sum first + all rest elements
}`,
    solution: `function sumAll(first, ...rest) {
  return rest.reduce((acc, n) => acc + n, first)
}`,
    tests: [
      { description: 'sumAll(1,2,3,4) is 10', assertion: "expect(sumAll(1,2,3,4)).toBe(10)" },
      { description: 'sumAll(5) is 5', assertion: "expect(sumAll(5)).toBe(5)" },
      { description: 'sumAll(0,1,2) is 3', assertion: "expect(sumAll(0,1,2)).toBe(3)" },
    ],
    hints: ['rest is an array — use .reduce() or a for loop'],
    tags: ['operators', 'rest', 'modern-js'],
  },
  {
    slug: 'operators-logical-assignment',
    title: 'Operators — &&=, ||=, ??= logical assignment',
    description: `## Logical assignment operators (ES2021)\n\n- \`a &&= b\` — assigns \`b\` only if \`a\` is truthy\n- \`a ||= b\` — assigns \`b\` only if \`a\` is falsy\n- \`a ??= b\` — assigns \`b\` only if \`a\` is null/undefined\n\n**Challenge:** Write \`logicalAssignment()\` that:\n1. \`let a = 1; a &&= 99\` → return a\n2. \`let b = 0; b ||= 42\` → return b\n3. \`let c = null; c ??= 'hello'\` → return c`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Operators',
    initialCode: `function logicalAssignment() {
  let a = 1
  // a &&= 99
  let b = 0
  // b ||= 42
  let c = null
  // c ??= 'hello'
  return { a, b, c }
}`,
    solution: `function logicalAssignment() {
  let a = 1
  a &&= 99
  let b = 0
  b ||= 42
  let c = null
  c ??= 'hello'
  return { a, b, c }
}`,
    tests: [
      { description: '&&= assigns when truthy', assertion: "expect(logicalAssignment().a).toBe(99)" },
      { description: '||= assigns when falsy', assertion: "expect(logicalAssignment().b).toBe(42)" },
      { description: '??= assigns when null', assertion: "expect(logicalAssignment().c).toBe('hello')" },
    ],
    hints: ['&&= only assigns if left side is truthy', '||= only assigns if left side is falsy', '??= only assigns if left side is null/undefined'],
    tags: ['operators', 'logical-assignment', 'es2021'],
  },
]
```

- [ ] **Step 3: Create `operators/advanced.ts`** (3 advanced)

```typescript
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
```

- [ ] **Step 4: Commit**

```bash
git add src/features/exercises/infrastructure/data/operators/
git commit -m "feat: add Operators exercise topic (13 exercises, beginner+intermediate+advanced)"
```


---

## Task 3: ControlFlow exercises

**Files:**
- Create: `src/features/exercises/infrastructure/data/control-flow/conditionals.ts`
- Create: `src/features/exercises/infrastructure/data/control-flow/loops.ts`
- Create: `src/features/exercises/infrastructure/data/control-flow/advanced.ts`

- [ ] **Step 1: Create `control-flow/conditionals.ts`** (5 beginner)

```typescript
import type { Exercise } from '@/shared/types/exercises'

export const controlFlowConditionalsExercises: Exercise[] = [
  {
    slug: 'control-flow-if-else',
    title: 'Control Flow — if / else if / else',
    description: `## if-else chains\n\nUse \`if\`, \`else if\`, and \`else\` to branch based on conditions.\n\n**Challenge:** Write \`grade(score)\` that returns:\n- \`'A'\` for score ≥ 90\n- \`'B'\` for score ≥ 80\n- \`'C'\` for score ≥ 70\n- \`'D'\` for score ≥ 60\n- \`'F'\` otherwise`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'ControlFlow',
    initialCode: `function grade(score) {
  // return 'A', 'B', 'C', 'D', or 'F'
}`,
    solution: `function grade(score) {
  if (score >= 90) return 'A'
  else if (score >= 80) return 'B'
  else if (score >= 70) return 'C'
  else if (score >= 60) return 'D'
  else return 'F'
}`,
    tests: [
      { description: '95 → A', assertion: "expect(grade(95)).toBe('A')" },
      { description: '85 → B', assertion: "expect(grade(85)).toBe('B')" },
      { description: '75 → C', assertion: "expect(grade(75)).toBe('C')" },
      { description: '65 → D', assertion: "expect(grade(65)).toBe('D')" },
      { description: '55 → F', assertion: "expect(grade(55)).toBe('F')" },
    ],
    hints: ['Check from highest to lowest — the first matching condition wins'],
    tags: ['control-flow', 'if-else'],
  },
  {
    slug: 'control-flow-switch',
    title: 'Control Flow — switch statement',
    description: `## switch matches exact values\n\nUse \`switch\` when you have many exact-value comparisons. Don't forget \`break\` between cases, or use \`return\` inside each case.\n\n**Challenge:** Write \`dayName(n)\` that returns the day of the week for n=0..6 (0=Sunday) or \`'Invalid'\` for other values.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'ControlFlow',
    initialCode: `function dayName(n) {
  switch (n) {
    // case 0: return 'Sunday'
    // ... etc
  }
}`,
    solution: `function dayName(n) {
  switch (n) {
    case 0: return 'Sunday'
    case 1: return 'Monday'
    case 2: return 'Tuesday'
    case 3: return 'Wednesday'
    case 4: return 'Thursday'
    case 5: return 'Friday'
    case 6: return 'Saturday'
    default: return 'Invalid'
  }
}`,
    tests: [
      { description: '0 → Sunday', assertion: "expect(dayName(0)).toBe('Sunday')" },
      { description: '5 → Friday', assertion: "expect(dayName(5)).toBe('Friday')" },
      { description: '6 → Saturday', assertion: "expect(dayName(6)).toBe('Saturday')" },
      { description: '7 → Invalid', assertion: "expect(dayName(7)).toBe('Invalid')" },
    ],
    hints: ['Use return inside each case to avoid needing break'],
    tags: ['control-flow', 'switch'],
  },
  {
    slug: 'control-flow-for-loop',
    title: 'Control Flow — for loop',
    description: `## for loop: counter-based iteration\n\nThe classic \`for\` loop gives you precise control: \`for (init; condition; update) { }\`.\n\n**Challenge:** Write \`sumTo(n)\` that returns the sum 1+2+...+n using a for loop.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'ControlFlow',
    initialCode: `function sumTo(n) {
  let sum = 0
  // for loop from 1 to n
  return sum
}`,
    solution: `function sumTo(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}`,
    tests: [
      { description: 'sumTo(5) = 15', assertion: "expect(sumTo(5)).toBe(15)" },
      { description: 'sumTo(10) = 55', assertion: "expect(sumTo(10)).toBe(55)" },
      { description: 'sumTo(1) = 1', assertion: "expect(sumTo(1)).toBe(1)" },
      { description: 'sumTo(0) = 0', assertion: "expect(sumTo(0)).toBe(0)" },
    ],
    hints: ['i <= n means include n itself in the sum'],
    tags: ['control-flow', 'for-loop'],
  },
  {
    slug: 'control-flow-while-loop',
    title: 'Control Flow — while loop',
    description: `## while loop: condition-based iteration\n\nA \`while\` loop keeps running as long as the condition is true. Use when you don't know the iteration count in advance.\n\n**Challenge:** Write \`countdown(n)\` that returns an array \`[n, n-1, ..., 1]\` using a while loop.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'ControlFlow',
    initialCode: `function countdown(n) {
  const result = []
  // while loop: push n down to 1
  return result
}`,
    solution: `function countdown(n) {
  const result = []
  while (n > 0) {
    result.push(n)
    n--
  }
  return result
}`,
    tests: [
      { description: 'countdown(5) returns [5,4,3,2,1]', assertion: "expect(countdown(5)).toEqual([5,4,3,2,1])" },
      { description: 'countdown(1) returns [1]', assertion: "expect(countdown(1)).toEqual([1])" },
      { description: 'countdown(0) returns []', assertion: "expect(countdown(0)).toEqual([])" },
    ],
    hints: ['Push n first, then decrement; stop when n reaches 0'],
    tags: ['control-flow', 'while-loop'],
  },
  {
    slug: 'control-flow-early-return',
    title: 'Control Flow — early return pattern',
    description: `## Early return for guard clauses\n\nReturning early from a function when a condition is met avoids deep nesting and makes code easier to read.\n\n**Challenge:** Write \`findFirst(arr, target)\` that:\n- Loops through \`arr\`\n- Returns the **index** of the first element equal to \`target\`\n- Returns \`-1\` if not found`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'ControlFlow',
    initialCode: `function findFirst(arr, target) {
  // loop and return index on match, return -1 at end
}`,
    solution: `function findFirst(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i
  }
  return -1
}`,
    tests: [
      { description: 'finds element at index 1', assertion: "expect(findFirst([1,2,3],2)).toBe(1)" },
      { description: 'returns -1 when not found', assertion: "expect(findFirst([1,2,3],5)).toBe(-1)" },
      { description: 'empty array returns -1', assertion: "expect(findFirst([],1)).toBe(-1)" },
      { description: 'returns first index for duplicates', assertion: "expect(findFirst([3,3,3],3)).toBe(0)" },
    ],
    hints: ['Return inside the loop immediately when you find a match'],
    tags: ['control-flow', 'early-return'],
  },
]
```

- [ ] **Step 2: Create `control-flow/loops.ts`** (5 intermediate)

```typescript
import type { Exercise } from '@/shared/types/exercises'

export const controlFlowLoopsExercises: Exercise[] = [
  {
    slug: 'control-flow-for-of',
    title: 'Control Flow — for...of: iterate over values',
    description: `## for...of iterates values of any iterable\n\nWorks with arrays, strings, Map, Set, and any iterable. Gives you the **value** directly, not the index.\n\n**Challenge:** Write \`sumArray(arr)\` that uses \`for...of\` to sum all numbers in \`arr\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'ControlFlow',
    initialCode: `function sumArray(arr) {
  let total = 0
  // for...of loop
  return total
}`,
    solution: `function sumArray(arr) {
  let total = 0
  for (const item of arr) {
    total += item
  }
  return total
}`,
    tests: [
      { description: 'sums [1,2,3,4,5] to 15', assertion: "expect(sumArray([1,2,3,4,5])).toBe(15)" },
      { description: 'empty array returns 0', assertion: "expect(sumArray([])).toBe(0)" },
      { description: 'handles negative numbers', assertion: "expect(sumArray([-1,1])).toBe(0)" },
    ],
    hints: ['for (const item of arr) gives you each element directly'],
    tags: ['control-flow', 'for-of'],
  },
  {
    slug: 'control-flow-for-in',
    title: 'Control Flow — for...in: iterate over object keys',
    description: `## for...in iterates enumerable property keys\n\n\`for...in\` iterates over all **enumerable string keys** of an object (own + inherited). Usually combined with \`hasOwnProperty\` for safety.\n\n**Challenge:** Write \`collectOwnKeys(obj)\` that returns a **sorted array** of the object's own enumerable keys using \`for...in\` + \`hasOwnProperty\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'ControlFlow',
    initialCode: `function collectOwnKeys(obj) {
  const keys = []
  for (const key in obj) {
    // only include own keys (not inherited)
    keys.push(key)
  }
  return keys.sort()
}`,
    solution: `function collectOwnKeys(obj) {
  const keys = []
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys.push(key)
    }
  }
  return keys.sort()
}`,
    tests: [
      { description: 'collects own keys sorted', assertion: "expect(collectOwnKeys({b:2,a:1,c:3})).toEqual(['a','b','c'])" },
      { description: 'empty object returns []', assertion: "expect(collectOwnKeys({})).toEqual([])" },
    ],
    hints: ['Use Object.prototype.hasOwnProperty.call(obj, key) to skip inherited properties'],
    tags: ['control-flow', 'for-in', 'object'],
  },
  {
    slug: 'control-flow-break-continue',
    title: 'Control Flow — break and continue',
    description: `## break exits the loop, continue skips the iteration\n\n- \`break\` exits the nearest enclosing loop immediately\n- \`continue\` skips to the next iteration\n\n**Challenge:** Write \`filterAndStop(arr, skipVal, stopVal)\` that:\n- Skips elements equal to \`skipVal\` (continue)\n- Stops collecting when it hits \`stopVal\` (break)\n- Returns all collected elements`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'ControlFlow',
    initialCode: `function filterAndStop(arr, skipVal, stopVal) {
  const result = []
  for (const item of arr) {
    // if item === stopVal, stop
    // if item === skipVal, skip
    result.push(item)
  }
  return result
}`,
    solution: `function filterAndStop(arr, skipVal, stopVal) {
  const result = []
  for (const item of arr) {
    if (item === stopVal) break
    if (item === skipVal) continue
    result.push(item)
  }
  return result
}`,
    tests: [
      { description: 'skips and stops correctly', assertion: "expect(filterAndStop([1,2,3,4,5], 2, 4)).toEqual([1,3])" },
      { description: 'stops before adding stop element', assertion: "expect(filterAndStop([1,2,3],99,2)).toEqual([1])" },
      { description: 'no skip or stop: returns all', assertion: "expect(filterAndStop([1,2,3],99,99)).toEqual([1,2,3])" },
    ],
    hints: ['Check stopVal BEFORE skipVal so break takes priority'],
    tags: ['control-flow', 'break', 'continue'],
  },
  {
    slug: 'control-flow-do-while',
    title: 'Control Flow — do...while: runs at least once',
    description: `## do...while always executes the body at least once\n\nThe condition is checked **after** the first execution, so the body always runs at least once — even if the condition starts false.\n\n**Challenge:** Write \`collectAtLeastOnce(shouldContinue)\` that:\n1. Pushes \`'ran'\` to a \`results\` array inside a \`do...while\`\n2. The while condition is \`shouldContinue\`\n3. Returns \`results.length\`\n\nShould return \`1\` even when \`shouldContinue\` is \`false\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'ControlFlow',
    initialCode: `function collectAtLeastOnce(shouldContinue) {
  const results = []
  // do...while (shouldContinue)
  return results.length
}`,
    solution: `function collectAtLeastOnce(shouldContinue) {
  const results = []
  do {
    results.push('ran')
    shouldContinue = false
  } while (shouldContinue)
  return results.length
}`,
    tests: [
      { description: 'runs at least once even with false', assertion: "expect(collectAtLeastOnce(false)).toBe(1)" },
      { description: 'runs at least once with true too', assertion: "expect(collectAtLeastOnce(true)).toBe(1)" },
    ],
    hints: ['The condition is checked AFTER the first run — it always runs at least once'],
    tags: ['control-flow', 'do-while'],
  },
  {
    slug: 'control-flow-short-circuit-control',
    title: 'Control Flow — short-circuit as control flow',
    description: `## && and || as control flow\n\n\`condition && action()\` is a common pattern: only call \`action()\` if \`condition\` is truthy. Widely used in React JSX but also useful in plain JS.\n\n**Challenge:** Write \`execute(condition, action)\` that:\n- If \`condition\` is truthy, calls \`action()\` and returns its result\n- If \`condition\` is falsy, does NOT call action and returns \`null\` (using \`condition && action() || null\` or an equivalent pattern)`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'ControlFlow',
    initialCode: `function execute(condition, action) {
  // call action() only if condition is truthy
  // return action()'s result or null
}`,
    solution: `function execute(condition, action) {
  return condition ? action() : null
}`,
    tests: [
      { description: 'calls action when condition is true', assertion: "expect(execute(true, () => 42)).toBe(42)" },
      { description: 'returns null when condition is false', assertion: "expect(execute(false, () => 42)).toBeNull()" },
      { description: 'does not call action when falsy', assertion: "let called=false; execute(0, ()=>{ called=true }); expect(called).toBe(false)" },
    ],
    hints: ['A ternary is the clearest way: condition ? action() : null'],
    tags: ['control-flow', 'short-circuit'],
  },
]
```

- [ ] **Step 3: Create `control-flow/advanced.ts`** (3 advanced)

```typescript
import type { Exercise } from '@/shared/types/exercises'

export const controlFlowAdvancedExercises: Exercise[] = [
  {
    slug: 'control-flow-switch-fallthrough',
    title: 'Control Flow — switch: intentional fallthrough',
    description: `## Fallthrough: multiple cases sharing one handler\n\nWhen you omit \`break\`, execution "falls through" to the next case. This is sometimes intentional — like grouping weekdays and weekend days.\n\n**Challenge:** Write \`getDayType(day)\` that returns:\n- \`'Weekday'\` for Monday through Friday\n- \`'Weekend'\` for Saturday and Sunday\n- \`'Unknown'\` for anything else\n\nUse fallthrough (empty cases) to group them.`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'ControlFlow',
    initialCode: `function getDayType(day) {
  switch (day) {
    // group Monday-Friday with fallthrough
    // group Saturday-Sunday with fallthrough
    default: return 'Unknown'
  }
}`,
    solution: `function getDayType(day) {
  switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
      return 'Weekday'
    case 'Saturday':
    case 'Sunday':
      return 'Weekend'
    default:
      return 'Unknown'
  }
}`,
    tests: [
      { description: 'Monday is Weekday', assertion: "expect(getDayType('Monday')).toBe('Weekday')" },
      { description: 'Friday is Weekday', assertion: "expect(getDayType('Friday')).toBe('Weekday')" },
      { description: 'Saturday is Weekend', assertion: "expect(getDayType('Saturday')).toBe('Weekend')" },
      { description: 'Sunday is Weekend', assertion: "expect(getDayType('Sunday')).toBe('Weekend')" },
      { description: 'Holiday is Unknown', assertion: "expect(getDayType('Holiday')).toBe('Unknown')" },
    ],
    hints: ['Empty cases with no break fall through to the next case with code'],
    tags: ['control-flow', 'switch', 'fallthrough'],
  },
  {
    slug: 'control-flow-nested-loops',
    title: 'Control Flow — nested loops: searching a matrix',
    description: `## Nested loops iterate over 2D structures\n\nA loop inside a loop visits every combination of indices. Break from the inner loop to stop early.\n\n**Challenge:** Write \`findInMatrix(matrix, target)\` that searches a 2D array and returns \`[row, col]\` of the first match, or \`null\` if not found.`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'ControlFlow',
    initialCode: `function findInMatrix(matrix, target) {
  // nested for loops, return [i, j] on match, null at end
}`,
    solution: `function findInMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) return [i, j]
    }
  }
  return null
}`,
    tests: [
      { description: 'finds element position', assertion: "expect(findInMatrix([[1,2],[3,4],[5,6]], 4)).toEqual([1,1])" },
      { description: 'finds in first row', assertion: "expect(findInMatrix([[1,2],[3,4]], 1)).toEqual([0,0])" },
      { description: 'returns null when not found', assertion: "expect(findInMatrix([[1,2],[3,4]], 9)).toBeNull()" },
    ],
    hints: ['Return [i, j] immediately when matrix[i][j] === target'],
    tags: ['control-flow', 'nested-loops', 'matrix'],
  },
  {
    slug: 'control-flow-generator',
    title: 'Control Flow — generator functions and yield',
    description: `## Generators produce values on demand\n\nA \`function*\` is a generator. It pauses at each \`yield\` and resumes when \`.next()\` is called. Use \`[...generator()]\` to collect all yielded values.\n\n**Challenge:** Write a generator \`range(start, end)\` that yields every integer from \`start\` to \`end\` (inclusive). Then write \`rangeToArray(start, end)\` that collects the generator's values into an array.`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'ControlFlow',
    initialCode: `function* range(start, end) {
  // yield each integer from start to end inclusive
}

function rangeToArray(start, end) {
  return [...range(start, end)]
}`,
    solution: `function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}

function rangeToArray(start, end) {
  return [...range(start, end)]
}`,
    tests: [
      { description: 'range(1,5) produces [1,2,3,4,5]', assertion: "expect(rangeToArray(1,5)).toEqual([1,2,3,4,5])" },
      { description: 'range(3,3) produces [3]', assertion: "expect(rangeToArray(3,3)).toEqual([3])" },
      { description: 'range(0,2) produces [0,1,2]', assertion: "expect(rangeToArray(0,2)).toEqual([0,1,2])" },
    ],
    hints: ['function* declares a generator', 'yield pauses and emits a value', 'Spread [...gen()] collects all values'],
    tags: ['control-flow', 'generator', 'yield'],
  },
]
```

- [ ] **Step 4: Commit**

```bash
git add src/features/exercises/infrastructure/data/control-flow/
git commit -m "feat: add ControlFlow exercise topic (13 exercises, beginner+intermediate+advanced)"
```


---

## Task 4: TypeCoercion exercises

**Files:**
- Create: `src/features/exercises/infrastructure/data/type-coercion/equality.ts`
- Create: `src/features/exercises/infrastructure/data/type-coercion/conversion.ts`

- [ ] **Step 1: Create `type-coercion/equality.ts`** (5 beginner)

```typescript
import type { Exercise } from '@/shared/types/exercises'

export const typeCoercionEqualityExercises: Exercise[] = [
  {
    slug: 'type-coercion-strict-equality',
    title: 'Type Coercion — strict equality (===) vs loose equality (==)',
    description: `## === checks type AND value; == coerces\n\n\`===\` never converts types. \`==\` coerces types before comparing — e.g., \`'5' == 5\` is \`true\` but \`'5' === 5\` is \`false\`.\n\n**Challenge:** Write \`strictCheck(a, b)\` returning \`true\` only if \`a\` and \`b\` are **strictly equal** (same type and value).`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypeCoercion',
    initialCode: `function strictCheck(a, b) {
  // use ===
}`,
    solution: `function strictCheck(a, b) {
  return a === b
}`,
    tests: [
      { description: '1 === 1 → true', assertion: "expect(strictCheck(1,1)).toBe(true)" },
      { description: "'5' === 5 → false (different types)", assertion: "expect(strictCheck('5',5)).toBe(false)" },
      { description: "null === null → true", assertion: "expect(strictCheck(null,null)).toBe(true)" },
      { description: "null === undefined → false", assertion: "expect(strictCheck(null,undefined)).toBe(false)" },
    ],
    hints: ['Always prefer === in production code to avoid surprising coercion bugs'],
    tags: ['type-coercion', 'equality'],
  },
  {
    slug: 'type-coercion-falsy-values',
    title: 'Type Coercion — identifying falsy values',
    description: `## The 8 falsy values in JavaScript\n\nThese values coerce to \`false\` in boolean context:\n\`false\`, \`0\`, \`-0\`, \`0n\`, \`''\`, \`null\`, \`undefined\`, \`NaN\`\n\nEverything else is truthy.\n\n**Challenge:** Write \`isFalsy(val)\` that returns \`true\` when \`val\` is falsy.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypeCoercion',
    initialCode: `function isFalsy(val) {
  return !val
}`,
    solution: `function isFalsy(val) {
  return !val
}`,
    tests: [
      { description: 'false is falsy', assertion: "expect(isFalsy(false)).toBe(true)" },
      { description: '0 is falsy', assertion: "expect(isFalsy(0)).toBe(true)" },
      { description: 'empty string is falsy', assertion: "expect(isFalsy('')).toBe(true)" },
      { description: 'null is falsy', assertion: "expect(isFalsy(null)).toBe(true)" },
      { description: '1 is truthy', assertion: "expect(isFalsy(1)).toBe(false)" },
      { description: "'hello' is truthy", assertion: "expect(isFalsy('hello')).toBe(false)" },
    ],
    hints: ['Simply return !val — the ! operator coerces to boolean'],
    tags: ['type-coercion', 'falsy', 'boolean'],
  },
  {
    slug: 'type-coercion-typeof',
    title: 'Type Coercion — typeof operator',
    description: `## typeof returns a string describing the primitive type\n\nReturns: \`'number'\`, \`'string'\`, \`'boolean'\`, \`'undefined'\`, \`'object'\` (for null too!), \`'function'\`, \`'symbol'\`, \`'bigint'\`.\n\n**Challenge:** Write \`getType(val)\` that returns the result of \`typeof val\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypeCoercion',
    initialCode: `function getType(val) {
  // return typeof val
}`,
    solution: `function getType(val) {
  return typeof val
}`,
    tests: [
      { description: 'number', assertion: "expect(getType(42)).toBe('number')" },
      { description: 'string', assertion: "expect(getType('hi')).toBe('string')" },
      { description: 'boolean', assertion: "expect(getType(true)).toBe('boolean')" },
      { description: 'undefined', assertion: "expect(getType(undefined)).toBe('undefined')" },
      { description: 'null → object (known quirk)', assertion: "expect(getType(null)).toBe('object')" },
      { description: 'function', assertion: "expect(getType(function(){})).toBe('function')" },
    ],
    hints: ['typeof null === "object" is a historical quirk of JavaScript'],
    tags: ['type-coercion', 'typeof'],
  },
  {
    slug: 'type-coercion-nan-check',
    title: 'Type Coercion — checking for NaN',
    description: `## NaN is the only value that is not equal to itself\n\n\`typeof NaN === 'number'\` but \`NaN !== NaN\`.\n\nThe correct way to check for NaN is \`Number.isNaN(val)\` (not the old \`isNaN()\` which coerces first).\n\n**Challenge:** Write \`isNotANumber(val)\` that returns \`true\` only for actual NaN (not for strings like \`'hello'\`).`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypeCoercion',
    initialCode: `function isNotANumber(val) {
  return Number.isNaN(val)
}`,
    solution: `function isNotANumber(val) {
  return Number.isNaN(val)
}`,
    tests: [
      { description: 'NaN is NaN', assertion: "expect(isNotANumber(NaN)).toBe(true)" },
      { description: '0/0 is NaN', assertion: "expect(isNotANumber(0/0)).toBe(true)" },
      { description: "'hello' is not NaN (Number.isNaN is strict)", assertion: "expect(isNotANumber('hello')).toBe(false)" },
      { description: '42 is not NaN', assertion: "expect(isNotANumber(42)).toBe(false)" },
    ],
    hints: ['Number.isNaN() only returns true for actual NaN, unlike global isNaN() which coerces first'],
    tags: ['type-coercion', 'NaN'],
  },
  {
    slug: 'type-coercion-equality-abstract',
    title: 'Type Coercion — loose equality rules',
    description: `## == Abstract Equality: key coercion rules\n\n1. \`null == undefined\` → true (and only these two equal each other with ==)\n2. \`number == string\` → string converted to number\n3. \`boolean == anything\` → boolean converted to number first\n4. Objects compared by reference\n\n**Challenge:** Write \`looselyEqual(a, b)\` that returns \`true\` if \`a == b\` (loose equality).`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypeCoercion',
    initialCode: `function looselyEqual(a, b) {
  return a == b
}`,
    solution: `function looselyEqual(a, b) {
  return a == b
}`,
    tests: [
      { description: 'null == undefined → true', assertion: "expect(looselyEqual(null, undefined)).toBe(true)" },
      { description: "'5' == 5 → true", assertion: "expect(looselyEqual('5', 5)).toBe(true)" },
      { description: "0 == false → true", assertion: "expect(looselyEqual(0, false)).toBe(true)" },
      { description: "'' == false → true", assertion: "expect(looselyEqual('', false)).toBe(true)" },
      { description: "1 == true → true", assertion: "expect(looselyEqual(1, true)).toBe(true)" },
      { description: "null == 0 → false", assertion: "expect(looselyEqual(null, 0)).toBe(false)" },
    ],
    hints: ['This exercise is to understand == behavior — prefer === in real code'],
    tags: ['type-coercion', 'equality', 'abstract-equality'],
  },
]
```

- [ ] **Step 2: Create `type-coercion/conversion.ts`** (5 intermediate)

```typescript
import type { Exercise } from '@/shared/types/exercises'

export const typeCoercionConversionExercises: Exercise[] = [
  {
    slug: 'type-coercion-to-number',
    title: 'Type Coercion — explicit number conversion',
    description: `## Converting to number\n\n- \`Number(val)\` — explicit, returns NaN for invalid values\n- \`parseInt(str, 10)\` — parses integer, ignores trailing non-digits\n- \`parseFloat(str)\` — parses float\n- \`+val\` — unary plus, same as Number()\n\n**Challenge:** Write \`toNumber(val)\` that converts \`val\` to a number using \`Number()\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'TypeCoercion',
    initialCode: `function toNumber(val) {
  return Number(val)
}`,
    solution: `function toNumber(val) {
  return Number(val)
}`,
    tests: [
      { description: "'42' → 42", assertion: "expect(toNumber('42')).toBe(42)" },
      { description: "true → 1", assertion: "expect(toNumber(true)).toBe(1)" },
      { description: "false → 0", assertion: "expect(toNumber(false)).toBe(0)" },
      { description: "null → 0", assertion: "expect(toNumber(null)).toBe(0)" },
      { description: "'hello' → NaN", assertion: "expect(Number.isNaN(toNumber('hello'))).toBe(true)" },
      { description: "'' → 0", assertion: "expect(toNumber('')).toBe(0)" },
    ],
    hints: ['Number(null) = 0 and Number("") = 0, but Number("abc") = NaN'],
    tags: ['type-coercion', 'to-number', 'Number'],
  },
  {
    slug: 'type-coercion-to-string',
    title: 'Type Coercion — explicit string conversion',
    description: `## Converting to string\n\n- \`String(val)\` — explicit, safe for all values\n- \`val.toString()\` — throws on null/undefined\n- Template literal \`\`\${val}\`\`` + "`" + `\` — implicit coercion to string\n\n**Challenge:** Write \`stringify(val)\` that converts \`val\` to a string using \`String()\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'TypeCoercion',
    initialCode: `function stringify(val) {
  return String(val)
}`,
    solution: `function stringify(val) {
  return String(val)
}`,
    tests: [
      { description: "42 → '42'", assertion: "expect(stringify(42)).toBe('42')" },
      { description: "true → 'true'", assertion: "expect(stringify(true)).toBe('true')" },
      { description: "null → 'null'", assertion: "expect(stringify(null)).toBe('null')" },
      { description: "undefined → 'undefined'", assertion: "expect(stringify(undefined)).toBe('undefined')" },
    ],
    hints: ['String() is safer than .toString() because it handles null and undefined'],
    tags: ['type-coercion', 'to-string', 'String'],
  },
  {
    slug: 'type-coercion-to-boolean',
    title: 'Type Coercion — explicit boolean conversion',
    description: `## Converting to boolean with Boolean() or !!\n\nBoth \`Boolean(val)\` and \`!!val\` convert to boolean using the same falsy rules.\n\n**Challenge:** Write \`toBool(val)\` that returns the boolean conversion of \`val\` using \`!!\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'TypeCoercion',
    initialCode: `function toBool(val) {
  return !!val
}`,
    solution: `function toBool(val) {
  return !!val
}`,
    tests: [
      { description: '1 → true', assertion: "expect(toBool(1)).toBe(true)" },
      { description: "0 → false", assertion: "expect(toBool(0)).toBe(false)" },
      { description: "'hello' → true", assertion: "expect(toBool('hello')).toBe(true)" },
      { description: "'' → false", assertion: "expect(toBool('')).toBe(false)" },
      { description: "[] → true (empty array is truthy!)", assertion: "expect(toBool([])).toBe(true)" },
      { description: "null → false", assertion: "expect(toBool(null)).toBe(false)" },
    ],
    hints: ['Empty arrays and objects are truthy — they are objects in memory'],
    tags: ['type-coercion', 'to-boolean', 'boolean'],
  },
  {
    slug: 'type-coercion-plus-operator',
    title: 'Type Coercion — the + operator overloading',
    description: `## + is both addition and concatenation\n\nIf either operand is a string, + performs string concatenation. Otherwise it does numeric addition.\n\n- \`1 + 2\` → 3\n- \`'1' + 2\` → '12'\n- \`1 + '2'\` → '12'\n- \`true + 1\` → 2\n- \`null + 1\` → 1\n\n**Challenge:** Write \`addValues(a, b)\` that returns \`a + b\`. Then write \`typeOfSum(a, b)\` that returns \`typeof (a + b)\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'TypeCoercion',
    initialCode: `function addValues(a, b) {
  return a + b
}

function typeOfSum(a, b) {
  return typeof (a + b)
}`,
    solution: `function addValues(a, b) {
  return a + b
}

function typeOfSum(a, b) {
  return typeof (a + b)
}`,
    tests: [
      { description: '1 + 2 = 3', assertion: "expect(addValues(1,2)).toBe(3)" },
      { description: "'1' + 2 = '12'", assertion: "expect(addValues('1',2)).toBe('12')" },
      { description: "true + 1 = 2", assertion: "expect(addValues(true,1)).toBe(2)" },
      { description: "typeof ('a' + 1) = 'string'", assertion: "expect(typeOfSum('a',1)).toBe('string')" },
      { description: "typeof (1 + 1) = 'number'", assertion: "expect(typeOfSum(1,1)).toBe('number')" },
    ],
    hints: ['The presence of ANY string operand turns + into concatenation'],
    tags: ['type-coercion', 'plus-operator', 'concatenation'],
  },
  {
    slug: 'type-coercion-comparison-coercion',
    title: 'Type Coercion — comparison coercion with < > <= >=',
    description: `## Comparison operators always convert to number (except string vs string)\n\nIf both operands are strings, lexicographic comparison. Otherwise, both are converted to numbers.\n\n- \`'10' > '9'\` → false (lexicographic: '1' < '9')\n- \`10 > '9'\` → true (number vs number after coercion)\n\n**Challenge:** Write \`compare(a, b)\` that returns \`'gt'\` if a > b, \`'lt'\` if a < b, \`'eq'\` if a === b (strict for the equality case).`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'TypeCoercion',
    initialCode: `function compare(a, b) {
  if (a > b) return 'gt'
  if (a < b) return 'lt'
  return 'eq'
}`,
    solution: `function compare(a, b) {
  if (a > b) return 'gt'
  if (a < b) return 'lt'
  return 'eq'
}`,
    tests: [
      { description: '10 > 9 → gt', assertion: "expect(compare(10,9)).toBe('gt')" },
      { description: "'10' < '9' → lt (lexicographic)', assertion: "expect(compare('10','9')).toBe('lt')" },
      { description: "10 > '9' → gt (coerced to number)", assertion: "expect(compare(10,'9')).toBe('gt')" },
      { description: '5 === 5 → eq', assertion: "expect(compare(5,5)).toBe('eq')" },
    ],
    hints: ['String vs string uses character code order; otherwise both become numbers'],
    tags: ['type-coercion', 'comparison'],
  },
]
```

- [ ] **Step 3: Commit**

```bash
git add src/features/exercises/infrastructure/data/type-coercion/
git commit -m "feat: add TypeCoercion exercise topic (10 exercises, beginner+intermediate)"
```

---

## Task 5: StrictMode exercises

**Files:**
- Create: `src/features/exercises/infrastructure/data/strict-mode/basics.ts`
- Create: `src/features/exercises/infrastructure/data/strict-mode/edge-cases.ts`

⚠️ **Important:** `eval()` is used for syntax-level strict mode checks (duplicate params, octal literals, `with` statement) because these throw at parse time under strict mode. Each test wraps `eval()` in a try/catch.

- [ ] **Step 1: Create `strict-mode/basics.ts`** (3 beginner)

```typescript
import type { Exercise } from '@/shared/types/exercises'

export const strictModeBasicsExercises: Exercise[] = [
  {
    slug: 'strict-mode-undeclared-variable',
    title: 'Strict Mode — undeclared variables throw',
    description: `## Strict mode prevents silent mistakes\n\n\`'use strict'\` at the top of a function body (or file) enables strict mode. In strict mode, assigning to an undeclared variable throws a \`ReferenceError\` instead of silently creating a global.\n\n**Challenge:** Write \`tryUndeclared()\` that:\n1. Creates a function with \`'use strict'\`\n2. Tries to assign to an undeclared variable \`x = 1\`\n3. Catches the error\n4. Returns \`true\` if a ReferenceError was thrown, \`false\` otherwise`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'StrictMode',
    initialCode: `function tryUndeclared() {
  function strictFn() {
    'use strict'
    x = 1 // undeclared
  }
  try {
    strictFn()
    return false
  } catch (e) {
    return e instanceof ReferenceError
  }
}`,
    solution: `function tryUndeclared() {
  function strictFn() {
    'use strict'
    x = 1
  }
  try {
    strictFn()
    return false
  } catch (e) {
    return e instanceof ReferenceError
  }
}`,
    tests: [
      { description: 'strict mode throws ReferenceError for undeclared var', assertion: "expect(tryUndeclared()).toBe(true)" },
    ],
    hints: ["'use strict' must be the first statement in the function body"],
    tags: ['strict-mode', 'undeclared-variable', 'ReferenceError'],
  },
  {
    slug: 'strict-mode-this-undefined',
    title: 'Strict Mode — this is undefined in regular functions',
    description: `## In strict mode, this is undefined in regular function calls\n\nIn non-strict mode, calling a regular function with \`fn()\` sets \`this\` to the global object (\`window\` or \`globalThis\`). In strict mode, \`this\` stays \`undefined\`.\n\n**Challenge:** Write \`getThisValue()\` that:\n1. Defines a strict mode function\n2. Returns the \`typeof this\` inside that function\n3. Call it and return the result`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'StrictMode',
    initialCode: `function getThisValue() {
  function strictFn() {
    'use strict'
    return typeof this
  }
  return strictFn()
}`,
    solution: `function getThisValue() {
  function strictFn() {
    'use strict'
    return typeof this
  }
  return strictFn()
}`,
    tests: [
      { description: 'this is undefined in strict mode functions', assertion: "expect(getThisValue()).toBe('undefined')" },
    ],
    hints: ["typeof undefined === 'undefined'"],
    tags: ['strict-mode', 'this', 'undefined'],
  },
  {
    slug: 'strict-mode-with-statement',
    title: 'Strict Mode — with statement is forbidden',
    description: `## with is not allowed in strict mode\n\nThe \`with\` statement was banned in strict mode because it makes scope unpredictable. Attempting to use \`with\` inside \`'use strict'\` code throws a \`SyntaxError\` at parse time.\n\n**Challenge:** Write \`withThrowsInStrict()\` that uses \`eval()\` to attempt running a \`with\` statement in strict mode, catches the error, and returns \`true\` if an error was thrown.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'StrictMode',
    initialCode: `function withThrowsInStrict() {
  try {
    eval('"use strict"; with({}) {}')
    return false
  } catch (e) {
    return true
  }
}`,
    solution: `function withThrowsInStrict() {
  try {
    eval('"use strict"; with({}) {}')
    return false
  } catch (e) {
    return true
  }
}`,
    tests: [
      { description: 'with statement throws in strict mode', assertion: "expect(withThrowsInStrict()).toBe(true)" },
    ],
    hints: ['eval() is used here because the with syntax itself causes a parse error under strict mode'],
    tags: ['strict-mode', 'with-statement', 'SyntaxError'],
  },
]
```

- [ ] **Step 2: Create `strict-mode/edge-cases.ts`** (3 intermediate)

```typescript
import type { Exercise } from '@/shared/types/exercises'

export const strictModeEdgeCasesExercises: Exercise[] = [
  {
    slug: 'strict-mode-duplicate-params',
    title: 'Strict Mode — duplicate function parameters forbidden',
    description: `## Duplicate parameter names are a SyntaxError in strict mode\n\nIn sloppy mode, \`function f(a, a)\` is valid (last \`a\` wins). In strict mode it's a \`SyntaxError\`.\n\n**Challenge:** Write \`duplicateParamsThrows()\` that uses \`eval()\` to attempt defining a function with duplicate parameter names under strict mode, catches the error, and returns \`true\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'StrictMode',
    initialCode: `function duplicateParamsThrows() {
  try {
    eval('"use strict"; (function f(a, a) {})')
    return false
  } catch (e) {
    return true
  }
}`,
    solution: `function duplicateParamsThrows() {
  try {
    eval('"use strict"; (function f(a, a) {})')
    return false
  } catch (e) {
    return true
  }
}`,
    tests: [
      { description: 'duplicate params throw SyntaxError in strict mode', assertion: "expect(duplicateParamsThrows()).toBe(true)" },
    ],
    hints: ['eval() triggers the parser which catches the duplicate param syntax error'],
    tags: ['strict-mode', 'duplicate-params', 'SyntaxError'],
  },
  {
    slug: 'strict-mode-octal-literal',
    title: 'Strict Mode — octal literals forbidden',
    description: `## Octal number literals (0123) are forbidden in strict mode\n\nOctal literals like \`0123\` (interpreted as 83 in decimal) are banned in strict mode. Use \`0o123\` instead (ES2015+ octal).\n\n**Challenge:** Write \`octalThrowsInStrict()\` that uses \`eval()\` to attempt using an old octal literal in strict mode and returns \`true\` if an error was thrown.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'StrictMode',
    initialCode: `function octalThrowsInStrict() {
  try {
    eval('"use strict"; var n = 0123')
    return false
  } catch (e) {
    return true
  }
}`,
    solution: `function octalThrowsInStrict() {
  try {
    eval('"use strict"; var n = 0123')
    return false
  } catch (e) {
    return true
  }
}`,
    tests: [
      { description: 'octal literals throw in strict mode', assertion: "expect(octalThrowsInStrict()).toBe(true)" },
    ],
    hints: ['0o123 is the modern octal syntax and is allowed everywhere'],
    tags: ['strict-mode', 'octal', 'SyntaxError'],
  },
  {
    slug: 'strict-mode-delete-variable',
    title: 'Strict Mode — deleting variables is forbidden',
    description: `## delete on a variable name is forbidden in strict mode\n\nIn sloppy mode, \`delete x\` on a variable returns \`false\` silently. In strict mode it's a \`SyntaxError\`.\n\n**Challenge:** Write \`deleteVarThrows()\` that uses \`eval()\` to attempt \`delete x\` (where x is a declared variable) in strict mode and returns \`true\` if an error was thrown.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'StrictMode',
    initialCode: `function deleteVarThrows() {
  try {
    eval('"use strict"; var x = 1; delete x')
    return false
  } catch (e) {
    return true
  }
}`,
    solution: `function deleteVarThrows() {
  try {
    eval('"use strict"; var x = 1; delete x')
    return false
  } catch (e) {
    return true
  }
}`,
    tests: [
      { description: 'deleting a variable throws in strict mode', assertion: "expect(deleteVarThrows()).toBe(true)" },
    ],
    hints: ['delete is only valid on object properties, not variable names'],
    tags: ['strict-mode', 'delete', 'SyntaxError'],
  },
]
```

- [ ] **Step 3: Commit**

```bash
git add src/features/exercises/infrastructure/data/strict-mode/
git commit -m "feat: add StrictMode exercise topic (6 exercises, beginner+intermediate)"
```

---

## Task 6: Modules exercises

**Files:**
- Create: `src/features/exercises/infrastructure/data/modules/exports.ts`
- Create: `src/features/exercises/infrastructure/data/modules/patterns.ts`
- Create: `src/features/exercises/infrastructure/data/modules/dynamic.ts`

⚠️ **Important:** Real `import`/`export` syntax cannot run in the sandbox (Function() scope). These exercises simulate module patterns (IIFE factories, namespaces) and explain ESM in descriptions but test the equivalent patterns.

- [ ] **Step 1: Create `modules/exports.ts`** (3 beginner)

```typescript
import type { Exercise } from '@/shared/types/exercises'

export const modulesExportsExercises: Exercise[] = [
  {
    slug: 'modules-named-export-simulation',
    title: 'Modules — named exports (IIFE simulation)',
    description: `## Named exports\n\nIn ESM you write:\n\`\`\`js\nexport function add(a, b) { return a + b }\nexport function multiply(a, b) { return a * b }\n\`\`\`\nAnd consumers do: \`import { add, multiply } from './math.js'\`\n\nThis sandbox simulates that by returning an object of named functions from a factory.\n\n**Challenge:** Write \`createMathModule()\` that returns an object with \`add(a,b)\` and \`multiply(a,b)\` methods.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Modules',
    initialCode: `function createMathModule() {
  return {
    add(a, b) { return a + b },
    // multiply...
  }
}`,
    solution: `function createMathModule() {
  return {
    add(a, b) { return a + b },
    multiply(a, b) { return a * b },
  }
}`,
    tests: [
      { description: 'add works', assertion: "const m=createMathModule(); expect(m.add(2,3)).toBe(5)" },
      { description: 'multiply works', assertion: "const m=createMathModule(); expect(m.multiply(3,4)).toBe(12)" },
    ],
    hints: ['Return an object with method shorthand syntax'],
    tags: ['modules', 'named-exports', 'IIFE'],
  },
  {
    slug: 'modules-default-export-simulation',
    title: 'Modules — default export (class simulation)',
    description: `## Default export\n\nIn ESM a module can have one default export:\n\`\`\`js\nexport default class Counter {\n  constructor() { this.count = 0 }\n  increment() { this.count++ }\n}\n\`\`\`\nConsumers: \`import Counter from './Counter.js'\`\n\nThis sandbox simulates it: \`createCounter()\` factory returns an object that behaves like the Counter class.\n\n**Challenge:** Write \`createCounter()\` that returns an object with \`count\` (starts at 0) and \`increment()\` / \`decrement()\` / \`reset()\` methods.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Modules',
    initialCode: `function createCounter() {
  return {
    count: 0,
    increment() { this.count++ },
    // decrement, reset
  }
}`,
    solution: `function createCounter() {
  return {
    count: 0,
    increment() { this.count++ },
    decrement() { this.count-- },
    reset() { this.count = 0 },
  }
}`,
    tests: [
      { description: 'starts at 0', assertion: "const c=createCounter(); expect(c.count).toBe(0)" },
      { description: 'increment adds 1', assertion: "const c=createCounter(); c.increment(); expect(c.count).toBe(1)" },
      { description: 'decrement subtracts 1', assertion: "const c=createCounter(); c.increment(); c.decrement(); expect(c.count).toBe(0)" },
      { description: 'reset returns to 0', assertion: "const c=createCounter(); c.increment(); c.increment(); c.reset(); expect(c.count).toBe(0)" },
    ],
    hints: ['Use this.count to track state on the returned object'],
    tags: ['modules', 'default-export', 'factory'],
  },
  {
    slug: 'modules-barrel-export',
    title: 'Modules — barrel exports (re-exporting)',
    description: `## Barrel files re-export from multiple modules\n\nA barrel file (\`index.js\`) collects and re-exports things from other modules:\n\`\`\`js\nexport { add, subtract } from './arithmetic.js'\nexport { format, parse } from './string.js'\n\`\`\`\n\nThis sandbox simulates it: \`createBarrel(moduleA, moduleB)\` merges both module objects into one.\n\n**Challenge:** Write \`createBarrel(moduleA, moduleB)\` that returns a single object containing all methods from both modules (spread both into a new object).`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Modules',
    initialCode: `function createBarrel(moduleA, moduleB) {
  return { ...moduleA, ...moduleB }
}`,
    solution: `function createBarrel(moduleA, moduleB) {
  return { ...moduleA, ...moduleB }
}`,
    tests: [
      { description: 'merges both modules', assertion: "const b=createBarrel({add:(a,b)=>a+b},{mul:(a,b)=>a*b}); expect(b.add(1,2)).toBe(3)" },
      { description: 'second module accessible too', assertion: "const b=createBarrel({add:(a,b)=>a+b},{mul:(a,b)=>a*b}); expect(b.mul(2,3)).toBe(6)" },
      { description: 'later module overwrites duplicate keys', assertion: "const b=createBarrel({x:1},{x:2}); expect(b.x).toBe(2)" },
    ],
    hints: ['Spread syntax merges objects: { ...a, ...b }'],
    tags: ['modules', 'barrel', 're-export'],
  },
]
```

- [ ] **Step 2: Create `modules/patterns.ts`** (3 intermediate)

```typescript
import type { Exercise } from '@/shared/types/exercises'

export const modulesPatternsExercises: Exercise[] = [
  {
    slug: 'modules-iife-module',
    title: 'Modules — IIFE module pattern',
    description: `## IIFE (Immediately Invoked Function Expression) for encapsulation\n\nBefore ESM, modules were written as IIFEs to create private scope:\n\`\`\`js\nconst myModule = (function() {\n  let _private = 0  // private\n  return { getCount() { return _private }, inc() { _private++ } }\n})()\n\`\`\`\n\n**Challenge:** Write a \`createPrivateCounter()\` IIFE-style factory where:\n- \`_count\` is private (in closure, not on the returned object)\n- Exposes \`increment()\`, \`decrement()\`, \`getCount()\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Modules',
    initialCode: `function createPrivateCounter() {
  let _count = 0
  return {
    increment() { _count++ },
    decrement() { _count-- },
    getCount() { return _count },
  }
}`,
    solution: `function createPrivateCounter() {
  let _count = 0
  return {
    increment() { _count++ },
    decrement() { _count-- },
    getCount() { return _count },
  }
}`,
    tests: [
      { description: 'starts at 0', assertion: "const c=createPrivateCounter(); expect(c.getCount()).toBe(0)" },
      { description: '_count is private (not on object)', assertion: "const c=createPrivateCounter(); expect(c._count).toBeUndefined()" },
      { description: 'increment works', assertion: "const c=createPrivateCounter(); c.increment(); c.increment(); expect(c.getCount()).toBe(2)" },
      { description: 'decrement works', assertion: "const c=createPrivateCounter(); c.increment(); c.decrement(); expect(c.getCount()).toBe(0)" },
    ],
    hints: ['The closure keeps _count alive and private even after the function returns'],
    tags: ['modules', 'IIFE', 'closure', 'encapsulation'],
  },
  {
    slug: 'modules-store-factory',
    title: 'Modules — store factory pattern',
    description: `## Store factory: a simple state management module\n\nA store factory is a function that returns an object managing private state — similar to how Redux, Zustand, and other state managers work internally.\n\n**Challenge:** Write \`createStore(initialState)\` that returns:\n- \`getState()\` — returns a shallow copy of the state\n- \`setState(updates)\` — merges \`updates\` into state (like Object.assign)\n- \`subscribe(listener)\` — registers a function called after every setState; returns an \`unsubscribe\` function`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Modules',
    initialCode: `function createStore(initialState) {
  let state = { ...initialState }
  const listeners = []
  
  return {
    getState() { return { ...state } },
    setState(updates) {
      state = { ...state, ...updates }
      listeners.forEach(fn => fn())
    },
    subscribe(listener) {
      listeners.push(listener)
      return function unsubscribe() {
        const idx = listeners.indexOf(listener)
        if (idx > -1) listeners.splice(idx, 1)
      }
    },
  }
}`,
    solution: `function createStore(initialState) {
  let state = { ...initialState }
  const listeners = []
  
  return {
    getState() { return { ...state } },
    setState(updates) {
      state = { ...state, ...updates }
      listeners.forEach(fn => fn())
    },
    subscribe(listener) {
      listeners.push(listener)
      return function unsubscribe() {
        const idx = listeners.indexOf(listener)
        if (idx > -1) listeners.splice(idx, 1)
      }
    },
  }
}`,
    tests: [
      { description: 'getState returns initial state', assertion: "const s=createStore({count:0}); expect(s.getState().count).toBe(0)" },
      { description: 'setState updates state', assertion: "const s=createStore({count:0}); s.setState({count:5}); expect(s.getState().count).toBe(5)" },
      { description: 'getState returns a copy', assertion: "const s=createStore({x:1}); const st=s.getState(); st.x=99; expect(s.getState().x).toBe(1)" },
      { description: 'subscribe listener is called on setState', assertion: "const s=createStore({n:0}); let called=false; s.subscribe(()=>{called=true}); s.setState({n:1}); expect(called).toBe(true)" },
      { description: 'unsubscribe stops notifications', assertion: "const s=createStore({n:0}); let count=0; const unsub=s.subscribe(()=>{count++}); s.setState({n:1}); unsub(); s.setState({n:2}); expect(count).toBe(1)" },
    ],
    hints: ['Return a shallow copy from getState to prevent external mutation of internal state'],
    tags: ['modules', 'store', 'factory', 'state-management'],
  },
  {
    slug: 'modules-namespace-reexport',
    title: 'Modules — namespace re-export simulation',
    description: `## Namespace import: import * as ns from './module'\n\nYou can import all named exports as a namespace object:\n\`\`\`js\nimport * as MathUtils from './math.js'\nMathUtils.add(1, 2)  // 3\n\`\`\`\n\nThis sandbox simulates it: a namespace factory wraps an object and adds a module name prefix for documentation.\n\n**Challenge:** Write \`createNamespace(name, exports)\` that returns the \`exports\` object unchanged (just the exports, the name is for display only).`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Modules',
    initialCode: `function createNamespace(name, exports) {
  return exports
}`,
    solution: `function createNamespace(name, exports) {
  return exports
}`,
    tests: [
      { description: 'all exports are accessible', assertion: "const ns=createNamespace('Math',{add:(a,b)=>a+b}); expect(ns.add(1,2)).toBe(3)" },
      { description: 'multiple exports work', assertion: "const ns=createNamespace('Utils',{double:x=>x*2, triple:x=>x*3}); expect(ns.double(5)).toBe(10)" },
      { description: 'triple export', assertion: "const ns=createNamespace('Utils',{double:x=>x*2, triple:x=>x*3}); expect(ns.triple(4)).toBe(12)" },
    ],
    hints: ['namespace import in ESM is like accessing properties of an object'],
    tags: ['modules', 'namespace', 're-export'],
  },
]
```

- [ ] **Step 3: Create `modules/dynamic.ts`** (3 advanced)

```typescript
import type { Exercise } from '@/shared/types/exercises'

export const modulesDynamicExercises: Exercise[] = [
  {
    slug: 'modules-lazy-init',
    title: 'Modules — lazy initialization pattern',
    description: `## Lazy initialization: create on first access\n\nA module can delay expensive initialization until the first time it's actually needed (lazy singleton pattern).\n\nIn real ESM:\n\`\`\`js\nlet _instance = null\nexport function getInstance() {\n  if (!_instance) _instance = new ExpensiveClass()\n  return _instance\n}\n\`\`\`\n\n**Challenge:** Write \`createLazyModule(factory)\` that:\n- Accepts a \`factory\` function (creates the expensive object)\n- Returns a \`getInstance()\` function that calls \`factory\` only on the first call\n- Subsequent calls return the cached instance (factory never called again)`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Modules',
    initialCode: `function createLazyModule(factory) {
  let instance = null
  return {
    getInstance() {
      if (!instance) instance = factory()
      return instance
    }
  }
}`,
    solution: `function createLazyModule(factory) {
  let instance = null
  return {
    getInstance() {
      if (!instance) instance = factory()
      return instance
    }
  }
}`,
    tests: [
      { description: 'returns value from factory', assertion: "const m=createLazyModule(()=>({x:42})); expect(m.getInstance().x).toBe(42)" },
      { description: 'returns same instance both times', assertion: "const m=createLazyModule(()=>({})); expect(m.getInstance()).toBe(m.getInstance())" },
      { description: 'factory called only once', assertion: "let calls=0; const m=createLazyModule(()=>{calls++;return{}}); m.getInstance(); m.getInstance(); expect(calls).toBe(1)" },
    ],
    hints: ['Cache the result in a closure variable after the first call'],
    tags: ['modules', 'lazy-init', 'singleton', 'closure'],
  },
  {
    slug: 'modules-plugin-system',
    title: 'Modules — plugin system',
    description: `## Plugin systems: extensible module registries\n\nMany libraries allow extending functionality via plugins registered at runtime — webpack, vite, rollup, babel all use this pattern.\n\n**Challenge:** Write \`createPluginSystem()\` that returns:\n- \`register(name, plugin)\` — registers a plugin object under a name\n- \`execute(name, ...args)\` — calls \`plugin.run(...args)\` and returns the result\n- \`list()\` — returns an array of registered plugin names (sorted)`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Modules',
    initialCode: `function createPluginSystem() {
  const plugins = {}
  return {
    register(name, plugin) { plugins[name] = plugin },
    execute(name, ...args) { return plugins[name].run(...args) },
    list() { return Object.keys(plugins).sort() },
  }
}`,
    solution: `function createPluginSystem() {
  const plugins = {}
  return {
    register(name, plugin) { plugins[name] = plugin },
    execute(name, ...args) { return plugins[name].run(...args) },
    list() { return Object.keys(plugins).sort() },
  }
}`,
    tests: [
      { description: 'registered plugin can be executed', assertion: "const ps=createPluginSystem(); ps.register('double',{run:x=>x*2}); expect(ps.execute('double',5)).toBe(10)" },
      { description: 'list returns sorted names', assertion: "const ps=createPluginSystem(); ps.register('c',{}); ps.register('a',{}); ps.register('b',{}); expect(ps.list()).toEqual(['a','b','c'])" },
      { description: 'multiple plugins work independently', assertion: "const ps=createPluginSystem(); ps.register('add',{run:(a,b)=>a+b}); ps.register('mul',{run:(a,b)=>a*b}); expect(ps.execute('add',2,3)).toBe(5)" },
    ],
    hints: ['Store plugins in a plain object keyed by name'],
    tags: ['modules', 'plugin-system', 'registry'],
  },
  {
    slug: 'modules-dynamic-import-simulation',
    title: 'Modules — dynamic import simulation',
    description: `## Dynamic import: load modules on demand\n\nIn ESM you can load a module lazily with a Promise:\n\`\`\`js\nasync function loadChart() {\n  const { Chart } = await import('./chart.js')\n  return new Chart()\n}\n\`\`\`\n\nThis sandbox simulates it: an async loader function that resolves to a module object after a small delay.\n\n**Challenge:** Write \`createDynamicLoader(moduleMap)\` that returns a \`load(name)\` async function which returns a Promise resolving to the module from \`moduleMap\`.`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Modules',
    initialCode: `function createDynamicLoader(moduleMap) {
  return {
    load(name) {
      return Promise.resolve(moduleMap[name])
    }
  }
}`,
    solution: `function createDynamicLoader(moduleMap) {
  return {
    load(name) {
      return Promise.resolve(moduleMap[name])
    }
  }
}`,
    tests: [
      { description: 'load resolves to the module', assertion: "const loader=createDynamicLoader({math:{add:(a,b)=>a+b}}); loader.load('math').then(m=>expect(m.add(1,2)).toBe(3))" },
      { description: 'load returns a Promise', assertion: "const loader=createDynamicLoader({x:{}}); expect(loader.load('x')).toBeTruthy()" },
    ],
    hints: ['Promise.resolve(value) creates a Promise that resolves immediately to value'],
    tags: ['modules', 'dynamic-import', 'Promise'],
  },
]
```

- [ ] **Step 4: Commit**

```bash
git add src/features/exercises/infrastructure/data/modules/
git commit -m "feat: add Modules exercise topic (9 exercises, beginner+intermediate+advanced)"
```


---

## Task 7: Wire up index.ts + topicMeta.ts

**Files:**
- Modify: `src/features/exercises/infrastructure/data/index.ts`
- Modify: `src/features/exercises/infrastructure/data/topicMeta.ts`

- [ ] **Step 1: Add imports and spreads to `data/index.ts`**

Add these imports at the top (grouped after the existing imports, before the `export const allExercises` line):

```typescript
// Variables exercises
import { variablesDeclarationExercises } from './variables/declaration'
import { variablesOperationsExercises } from './variables/operations'

// Operators exercises
import { operatorsArithmeticExercises } from './operators/arithmetic'
import { operatorsLogicalExercises } from './operators/logical'
import { operatorsBitwiseExercises } from './operators/bitwise'

// ControlFlow exercises
import { controlFlowConditionalsExercises } from './control-flow/conditionals'
import { controlFlowLoopsExercises } from './control-flow/loops'
import { controlFlowAdvancedExercises } from './control-flow/advanced'

// TypeCoercion exercises
import { typeCoercionEqualityExercises } from './type-coercion/equality'
import { typeCoercionConversionExercises } from './type-coercion/conversion'

// StrictMode exercises
import { strictModeBasicsExercises } from './strict-mode/basics'
import { strictModeEdgeCasesExercises } from './strict-mode/edge-cases'

// Modules exercises
import { modulesExportsExercises } from './modules/exports'
import { modulesPatternsExercises } from './modules/patterns'
import { modulesDynamicExercises } from './modules/dynamic'
```

Then add these spreads inside the `allExercises` array before the closing `]`:

```typescript
  // Variables exercises
  ...variablesDeclarationExercises,
  ...variablesOperationsExercises,
  // Operators exercises
  ...operatorsArithmeticExercises,
  ...operatorsLogicalExercises,
  ...operatorsBitwiseExercises,
  // ControlFlow exercises
  ...controlFlowConditionalsExercises,
  ...controlFlowLoopsExercises,
  ...controlFlowAdvancedExercises,
  // TypeCoercion exercises
  ...typeCoercionEqualityExercises,
  ...typeCoercionConversionExercises,
  // StrictMode exercises
  ...strictModeBasicsExercises,
  ...strictModeEdgeCasesExercises,
  // Modules exercises
  ...modulesExportsExercises,
  ...modulesPatternsExercises,
  ...modulesDynamicExercises,
```

- [ ] **Step 2: Add 6 topic entries to `topicMeta.ts`**

Append these entries to the exported object (before the final closing `}`):

```typescript
  variables: {
    description: {
      en: 'Variables are containers for storing data. JavaScript has three declaration keywords: var (function-scoped, hoisted), let (block-scoped, reassignable), and const (block-scoped, not reassignable). Understanding scope, hoisting, and temporal dead zones is fundamental to writing correct JavaScript.',
      es: 'Las variables son contenedores para almacenar datos. JavaScript tiene tres palabras clave de declaración: var (de ámbito de función, elevada), let (de ámbito de bloque, reasignable) y const (de ámbito de bloque, no reasignable). Entender el alcance, el hoisting y las zonas muertas temporales es fundamental para escribir JavaScript correcto.',
    },
  },
  operators: {
    description: {
      en: 'Operators perform operations on values. JavaScript includes arithmetic (+, -, *, /), comparison (===, !==), logical (&&, ||, !), assignment (=, +=), bitwise (&, |, ^), and special operators (typeof, instanceof, nullish coalescing ??, optional chaining ?.).',
      es: 'Los operadores realizan operaciones sobre valores. JavaScript incluye operadores aritméticos (+, -, *, /), de comparación (===, !==), lógicos (&&, ||, !), de asignación (=, +=), a nivel de bits (&, |, ^) y especiales (typeof, instanceof, coalescencia nula ??, encadenamiento opcional ?.).',
    },
  },
  controlflow: {
    description: {
      en: 'Control flow determines which code runs and when. JavaScript provides if/else/switch for conditionals, for/while/do-while/for-of/for-in for iteration, break/continue for loop control, and generators (function*) for pausable iteration.',
      es: 'El flujo de control determina qué código se ejecuta y cuándo. JavaScript ofrece if/else/switch para condicionales, for/while/do-while/for-of/for-in para iteración, break/continue para control de bucles, y generadores (function*) para iteración pausable.',
    },
  },
  typecoercion: {
    description: {
      en: 'Type coercion is the automatic or explicit conversion of values from one type to another. JavaScript performs implicit coercion in comparisons (==) and arithmetic. Understanding coercion — falsy/truthy values, the + operator, typeof, and NaN — prevents subtle bugs.',
      es: 'La coerción de tipos es la conversión automática o explícita de valores de un tipo a otro. JavaScript realiza coerción implícita en comparaciones (==) y aritmética. Entender la coerción — valores falsy/truthy, el operador +, typeof y NaN — evita errores sutiles.',
    },
  },
  strictmode: {
    description: {
      en: 'Strict mode ("use strict") is an opt-in JavaScript mode that catches common coding mistakes and throws errors for unsafe actions. It forbids undeclared variables, sets this to undefined in regular function calls, and bans certain syntax like with, duplicate parameters, and octal literals.',
      es: 'El modo estricto ("use strict") es un modo JavaScript de habilitación voluntaria que detecta errores comunes de programación y lanza errores para acciones inseguras. Prohíbe variables no declaradas, establece this como undefined en llamadas a funciones regulares, y prohíbe ciertas sintaxis como with, parámetros duplicados y literales octales.',
    },
  },
  modules: {
    description: {
      en: 'JavaScript modules (ESM) allow you to split code into reusable files with explicit imports and exports. Named exports share multiple values; default exports share one primary value. Dynamic import() loads modules on demand. These exercises use factory patterns to simulate module behavior in the sandbox.',
      es: 'Los módulos de JavaScript (ESM) permiten dividir el código en archivos reutilizables con importaciones y exportaciones explícitas. Las exportaciones con nombre comparten múltiples valores; las exportaciones por defecto comparten un valor primario. import() dinámico carga módulos bajo demanda. Estos ejercicios usan patrones de fábrica para simular el comportamiento de módulos en el sandbox.',
    },
  },
```

- [ ] **Step 3: Run TypeScript check**

```bash
npx tsc --noEmit 2>&1 | head -30
```

Expected: no errors related to the new files.

- [ ] **Step 4: Commit**

```bash
git add src/features/exercises/infrastructure/data/index.ts src/features/exercises/infrastructure/data/topicMeta.ts
git commit -m "feat: wire up 6 new exercise topics in index.ts and topicMeta.ts"
```

---

## Task 8: learningPathConfig.ts

**Files:**
- Create: `src/features/learning-path/infrastructure/data/learningPathConfig.ts`

- [ ] **Step 1: Create the config**

```typescript
export interface LearningPathTopic {
  key: string      // matches builtIn.toLowerCase(), used for URL /exercises/${key}
  label: string
  emoji: string
}

export interface LearningPathSection {
  id: string
  title: string
  emoji: string
  topics: LearningPathTopic[]
}

export const learningPathSections: LearningPathSection[] = [
  {
    id: 'fundamentals',
    title: 'Language Fundamentals',
    emoji: '🏗️',
    topics: [
      { key: 'variables', label: 'Variables', emoji: '📦' },
      { key: 'operators', label: 'Operators', emoji: '⚙️' },
      { key: 'controlflow', label: 'Control Flow', emoji: '🔀' },
      { key: 'typecoercion', label: 'Type Coercion', emoji: '🔄' },
      { key: 'strictmode', label: 'Strict Mode', emoji: '🔒' },
    ],
  },
  {
    id: 'functions',
    title: 'Functions & Scope',
    emoji: '🧩',
    topics: [
      { key: 'function', label: 'Functions', emoji: '🔧' },
      { key: 'closures', label: 'Closures', emoji: '🔐' },
      { key: 'functionalprogramming', label: 'Functional Programming', emoji: '♾️' },
    ],
  },
  {
    id: 'data-structures',
    title: 'Core Data Structures',
    emoji: '📚',
    topics: [
      { key: 'array', label: 'Array', emoji: '📋' },
      { key: 'string', label: 'String', emoji: '📝' },
      { key: 'object', label: 'Object', emoji: '🗂️' },
      { key: 'map', label: 'Map', emoji: '🗺️' },
      { key: 'set', label: 'Set', emoji: '🧮' },
    ],
  },
  {
    id: 'numbers-utils',
    title: 'Numbers & Utilities',
    emoji: '🔢',
    topics: [
      { key: 'number', label: 'Number', emoji: '🔢' },
      { key: 'math', label: 'Math', emoji: '📐' },
      { key: 'bigint', label: 'BigInt', emoji: '🔭' },
      { key: 'date', label: 'Date', emoji: '📅' },
      { key: 'json', label: 'JSON', emoji: '📄' },
      { key: 'regexp', label: 'RegExp', emoji: '🔍' },
    ],
  },
  {
    id: 'async',
    title: 'Async Programming',
    emoji: '⏳',
    topics: [
      { key: 'promise', label: 'Promise', emoji: '🤝' },
      { key: 'asyncpatterns', label: 'Async Patterns', emoji: '🔄' },
    ],
  },
  {
    id: 'oop',
    title: 'OOP & Prototypes',
    emoji: '🏛️',
    topics: [
      { key: 'prototypes', label: 'Prototypes', emoji: '🧬' },
    ],
  },
  {
    id: 'modules-arch',
    title: 'Modules & Architecture',
    emoji: '🏗️',
    topics: [
      { key: 'modules', label: 'Modules', emoji: '📦' },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced JavaScript',
    emoji: '🚀',
    topics: [
      { key: 'proxy', label: 'Proxy', emoji: '🪞' },
      { key: 'reflect', label: 'Reflect', emoji: '🔮' },
      { key: 'typescript', label: 'TypeScript', emoji: '🦾' },
    ],
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add src/features/learning-path/
git commit -m "feat: add learningPathConfig with 8 sections and all topics"
```

---

## Task 9: useLearningPathProgress hook

**Files:**
- Create: `src/features/learning-path/presentation/hooks/useLearningPathProgress.ts`

- [ ] **Step 1: Create the hook**

```typescript
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { allExercises } from '@/features/exercises/infrastructure/data'
import { learningPathSections } from '@/features/learning-path/infrastructure/data/learningPathConfig'

export interface TopicProgress {
  total: number
  completed: number
  pct: number
}

export function useLearningPathProgress(): Map<string, TopicProgress> {
  const progressState = useSelector((state: RootState) => state.progress.exercises)

  return useMemo(() => {
    const result = new Map<string, TopicProgress>()

    for (const section of learningPathSections) {
      for (const topic of section.topics) {
        const topicExercises = allExercises.filter(
          (ex) => ex.builtIn?.toLowerCase() === topic.key
        )
        const total = topicExercises.length
        const completed = topicExercises.filter(
          (ex) => progressState[ex.slug]?.status === 'completed'
        ).length
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0
        result.set(topic.key, { total, completed, pct })
      }
    }

    return result
  }, [progressState])
}
```

- [ ] **Step 2: Commit**

```bash
git add src/features/learning-path/presentation/hooks/
git commit -m "feat: add useLearningPathProgress hook"
```

---

## Task 10: Learning Path UI components

**Files:**
- Create: `src/features/learning-path/presentation/components/TopicProgressCard.tsx`
- Create: `src/features/learning-path/presentation/components/LearningPathSection.tsx`
- Create: `src/features/learning-path/presentation/components/LearningPathView.tsx`

- [ ] **Step 1: Create `TopicProgressCard.tsx`**

```tsx
'use client'
import { Link } from '@/i18n/navigation'
import type { LearningPathTopic } from '@/features/learning-path/infrastructure/data/learningPathConfig'
import type { TopicProgress } from '../hooks/useLearningPathProgress'

interface Props {
  topic: LearningPathTopic
  progress: TopicProgress
}

export function TopicProgressCard({ topic, progress }: Props) {
  const { total, completed, pct } = progress

  return (
    <Link
      href={`/exercises/${topic.key}`}
      className="block bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-emerald-600 transition-colors group"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{topic.emoji}</span>
        <span className="font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
          {topic.label}
        </span>
        <span className="ml-auto text-xs text-zinc-400">
          {completed}/{total}
        </span>
      </div>
      <div className="w-full bg-zinc-800 rounded-full h-2">
        <div
          className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-1 text-right text-xs text-zinc-500">{pct}%</div>
    </Link>
  )
}
```

- [ ] **Step 2: Create `LearningPathSection.tsx`**

```tsx
import { TopicProgressCard } from './TopicProgressCard'
import type { LearningPathSection as SectionType } from '@/features/learning-path/infrastructure/data/learningPathConfig'
import type { TopicProgress } from '../hooks/useLearningPathProgress'

interface Props {
  section: SectionType
  progressMap: Map<string, TopicProgress>
}

export function LearningPathSection({ section, progressMap }: Props) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-bold text-zinc-200 mb-4 flex items-center gap-2">
        <span>{section.emoji}</span>
        {section.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {section.topics.map((topic) => {
          const progress = progressMap.get(topic.key) ?? { total: 0, completed: 0, pct: 0 }
          return (
            <TopicProgressCard key={topic.key} topic={topic} progress={progress} />
          )
        })}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Create `LearningPathView.tsx`**

```tsx
'use client'
import { useLearningPathProgress } from '../hooks/useLearningPathProgress'
import { LearningPathSection } from './LearningPathSection'
import { learningPathSections } from '@/features/learning-path/infrastructure/data/learningPathConfig'

export function LearningPathView() {
  const progressMap = useLearningPathProgress()

  // Compute overall stats
  const allValues = Array.from(progressMap.values())
  const totalExercises = allValues.reduce((sum, p) => sum + p.total, 0)
  const totalCompleted = allValues.reduce((sum, p) => sum + p.completed, 0)
  const overallPct = totalExercises > 0 ? Math.round((totalCompleted / totalExercises) * 100) : 0

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">🗺️ JavaScript Learning Path</h1>
        <p className="text-zinc-400 mb-6">Based on roadmap.sh/javascript — from fundamentals to advanced topics</p>

        {/* Overall progress bar */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-zinc-300 font-medium">Overall Progress</span>
            <span className="text-emerald-400 font-bold">{totalCompleted}/{totalExercises} exercises</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-3">
            <div
              className="bg-emerald-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${overallPct}%` }}
            />
          </div>
          <div className="mt-1 text-right text-sm text-zinc-500">{overallPct}% complete</div>
        </div>
      </div>

      {/* Sections */}
      {learningPathSections.map((section) => (
        <LearningPathSection
          key={section.id}
          section={section}
          progressMap={progressMap}
        />
      ))}
    </div>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/features/learning-path/presentation/components/
git commit -m "feat: add LearningPath UI components (TopicProgressCard, LearningPathSection, LearningPathView)"
```

---

## Task 11: Learning Path page route

**Files:**
- Create: `src/app/[locale]/learning-path/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import { LearningPathView } from '@/features/learning-path/presentation/components/LearningPathView'

export default function LearningPathPage() {
  return <LearningPathView />
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/[locale]/learning-path/
git commit -m "feat: add /learning-path route"
```

---

## Task 12: i18n strings

**Files:**
- Modify: `messages/en.json`
- Modify: `messages/es.json`

- [ ] **Step 1: Add to `messages/en.json`**

Inside the top-level JSON object, add a new `"learningPath"` key:

```json
"learningPath": {
  "title": "JavaScript Learning Path",
  "subtitle": "Based on roadmap.sh/javascript",
  "overallProgress": "Overall Progress",
  "exercises": "exercises",
  "complete": "complete",
  "sections": {
    "fundamentals": "Language Fundamentals",
    "functions": "Functions & Scope",
    "dataStructures": "Core Data Structures",
    "numbersUtils": "Numbers & Utilities",
    "async": "Async Programming",
    "oop": "OOP & Prototypes",
    "modulesArch": "Modules & Architecture",
    "advanced": "Advanced JavaScript"
  }
}
```

Also add to `"nav"`:
```json
"learningPath": "Learning Path"
```

- [ ] **Step 2: Add to `messages/es.json`**

```json
"learningPath": {
  "title": "Ruta de Aprendizaje JavaScript",
  "subtitle": "Basado en roadmap.sh/javascript",
  "overallProgress": "Progreso General",
  "exercises": "ejercicios",
  "complete": "completado",
  "sections": {
    "fundamentals": "Fundamentos del Lenguaje",
    "functions": "Funciones y Ámbito",
    "dataStructures": "Estructuras de Datos Principales",
    "numbersUtils": "Números y Utilidades",
    "async": "Programación Asíncrona",
    "oop": "POO y Prototipos",
    "modulesArch": "Módulos y Arquitectura",
    "advanced": "JavaScript Avanzado"
  }
}
```

Also add to `"nav"`:
```json
"learningPath": "Ruta de Aprendizaje"
```

- [ ] **Step 3: Commit**

```bash
git add messages/
git commit -m "feat: add learningPath i18n strings (en + es)"
```

---

## Task 13: Navbar — add Learning Path link

**Files:**
- Modify: `src/shared/components/Navbar.tsx`

The Navbar has two nav sections: desktop (`hidden sm:flex`) and mobile (`sm:hidden`). Both need the link.

- [ ] **Step 1: Add to the desktop nav**

Find the desktop nav section (contains `hidden sm:flex`). Inside the list of navigation links, add:

```tsx
<Link href="/learning-path" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
  {t('nav.learningPath')}
</Link>
```

- [ ] **Step 2: Add to the mobile nav**

Find the mobile nav section (contains `sm:hidden`). Inside the dropdown/menu links, add:

```tsx
<Link href="/learning-path" className="block text-zinc-400 hover:text-zinc-100 transition-colors py-2">
  {t('nav.learningPath')}
</Link>
```

- [ ] **Step 3: Commit**

```bash
git add src/shared/components/Navbar.tsx
git commit -m "feat: add Learning Path link to Navbar (desktop + mobile)"
```

---

## Task 14: HomeView — add Learning Path card

**Files:**
- Modify: `src/features/home/presentation/components/HomeView.tsx`

- [ ] **Step 1: Add the Learning Path card**

In the hero/gamification area, add a new card alongside (or below) the existing exercise entry point. Import `Link` from `@/i18n/navigation` (already imported in most home view files).

```tsx
<Link
  href="/learning-path"
  className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 hover:border-emerald-600 rounded-xl p-5 transition-colors group"
>
  <span className="text-3xl">🗺️</span>
  <div>
    <div className="font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
      JavaScript Learning Path
    </div>
    <div className="text-sm text-zinc-400">
      Structured roadmap from fundamentals to advanced
    </div>
  </div>
  <span className="ml-auto text-zinc-600 group-hover:text-emerald-400 transition-colors">→</span>
</Link>
```

- [ ] **Step 2: Run build to check for errors**

```bash
npm run build 2>&1 | tail -20
```

Expected: build completes with 0 errors.

- [ ] **Step 3: Commit**

```bash
git add src/features/home/presentation/components/HomeView.tsx
git commit -m "feat: add Learning Path card to HomeView"
```

---

## Final verification

- [ ] Run `npx tsc --noEmit` — expect 0 errors
- [ ] Run `npm run build` — expect successful build
- [ ] Open `/learning-path` in browser — verify progress bars display correctly
- [ ] Navigate to an exercise, complete it, return to `/learning-path` — verify progress updates
- [ ] Verify all 6 new topics appear in the exercise sidebar when navigating to `/exercises/variables`, `/exercises/controlflow`, etc.
- [ ] Verify Navbar shows "Learning Path" link on desktop and mobile

