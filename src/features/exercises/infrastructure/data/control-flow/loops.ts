import type { Exercise } from '@/shared/types/exercises'

export const controlFlowLoopsExercises: Exercise[] = [
  {
    slug: 'controlflow-for-of',
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
    slug: 'controlflow-for-in',
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
    slug: 'controlflow-break-continue',
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
    slug: 'controlflow-do-while',
    title: 'do...while Loop',
    description: 'A `do...while` loop executes its body at least once before checking the condition. Use it when you need guaranteed first execution. Example: prompting a user until they enter valid input.',
    difficulty: 'intermediate' as const,
    builtIn: 'ControlFlow' as const,
    category: 'static-method' as const,
    initialCode: `function collectUntilLimit(limit: number): number[] {
  const results: number[] = [];
  let count = 0;
  // Use a do...while loop to collect count values until count >= limit
  // Push count to results before incrementing
  return results;
}`,
    solution: `function collectUntilLimit(limit: number): number[] {
  const results: number[] = [];
  let count = 0;
  do {
    results.push(count);
    count++;
  } while (count < limit);
  return results;
}`,
    hints: [
      'do { ... } while (condition) — body runs first, then condition is checked',
      'Push count to results, then increment count',
      'The loop continues while count < limit',
    ],
    tests: [
      {
        description: 'Always executes at least once (limit=0 still runs body once)',
        assertion: `expect(collectUntilLimit(0)).toHaveLength(1)`,
      },
      {
        description: 'Collects correct values up to limit',
        assertion: `expect(collectUntilLimit(3)).toEqual([0, 1, 2])`,
      },
      {
        description: 'Limit of 1 runs exactly once',
        assertion: `expect(collectUntilLimit(1)).toEqual([0])`,
      },
    ],
    tags: ['control-flow', 'do-while'],
  },
  {
    slug: 'controlflow-short-circuit',
    title: 'Control Flow — short-circuit as control flow',
    description: 'Short-circuit evaluation controls flow using `&&` and `||`. With `&&`, the right side only evaluates if the left is truthy. With `||`, the right side only evaluates if the left is falsy. This enables concise conditional execution: `isValid && process(data)` calls `process` only when valid. Note: avoid chaining `condition && fn() || fallback` — if `fn()` returns a falsy value, `fallback` is incorrectly returned. Use a ternary for that pattern instead.',
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
