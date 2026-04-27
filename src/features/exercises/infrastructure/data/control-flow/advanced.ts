import type { Exercise } from '@/shared/types/exercises'

export const controlFlowAdvancedExercises: Exercise[] = [
  {
    slug: 'controlflow-switch-fallthrough',
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
    slug: 'controlflow-nested-loops',
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
    slug: 'controlflow-generators',
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
