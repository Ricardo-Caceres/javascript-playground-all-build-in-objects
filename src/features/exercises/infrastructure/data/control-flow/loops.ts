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
