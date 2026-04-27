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
