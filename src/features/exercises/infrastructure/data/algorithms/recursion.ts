import type { Exercise } from '@/shared/types/exercises'

export const algoRecursionExercises: Exercise[] = [
  {
    slug: 'algo-recursion-1',
    title: 'Factorial',
    description: `## Factorial

Factorial of a number n (written as n!) is the product of all positive integers less than or equal to n.

\`\`\`
5! = 5 × 4 × 3 × 2 × 1 = 120
0! = 1 (by definition)
\`\`\`

This is a classic example of recursion: the base case is n ≤ 1, and the recursive case is n × factorial(n-1).

\`\`\`ts
function factorial(n: number): number {
  // Return n!
}

factorial(5) // 120
factorial(0) // 1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Algorithms',
    initialCode: `function factorial(n: number): number {
  // Return the factorial of n
  // Use recursion
}`,
    solution: `function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1)
}`,
    tests: [
      { description: 'factorial of 5 is 120', assertion: `expect(factorial(5)).toBe(120)` },
      { description: 'factorial of 0 is 1', assertion: `expect(factorial(0)).toBe(1)` },
      { description: 'factorial of 1 is 1', assertion: `expect(factorial(1)).toBe(1)` },
      { description: 'factorial of 3 is 6', assertion: `expect(factorial(3)).toBe(6)` },
      { description: 'factorial of 10 is 3628800', assertion: `expect(factorial(10)).toBe(3628800)` },
    ],
    hints: [
      'Base case: if n ≤ 1, return 1.',
      'Recursive case: return n × factorial(n - 1).',
      'Use the ternary operator for conciseness.',
    ],
    tags: ['recursion', 'factorial', 'base-case', 'mathematical'],
    usageExample: {
      code: `function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
factorial(5); // 120`,
      explanation: {
        en: "Factorial uses recursion: multiply n by factorial(n-1) until the base case n<=1.",
        es: "El factorial usa recursión: multiplica n por factorial(n-1) hasta el caso base n<=1.",
      },
    },
  },
  {
    slug: 'algo-recursion-2',
    title: 'Fibonacci',
    description: `## Fibonacci Sequence

The Fibonacci sequence is a series where each number is the sum of the two preceding ones:
\`\`\`
0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
fib(0) = 0
fib(1) = 1
fib(n) = fib(n-1) + fib(n-2) for n > 1
\`\`\`

This is a classic recursive problem.

\`\`\`ts
function fib(n: number): number {
  // Return the nth Fibonacci number
}

fib(7) // 13
fib(0) // 0
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Algorithms',
    initialCode: `function fib(n: number): number {
  // Return the nth Fibonacci number
  // Use recursion
}`,
    solution: `function fib(n: number): number {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}`,
    tests: [
      { description: 'fib(0) is 0', assertion: `expect(fib(0)).toBe(0)` },
      { description: 'fib(1) is 1', assertion: `expect(fib(1)).toBe(1)` },
      { description: 'fib(7) is 13', assertion: `expect(fib(7)).toBe(13)` },
      { description: 'fib(5) is 5', assertion: `expect(fib(5)).toBe(5)` },
      { description: 'fib(6) is 8', assertion: `expect(fib(6)).toBe(8)` },
    ],
    hints: [
      'Base cases: fib(0) = 0, fib(1) = 1.',
      'Recursive case: fib(n) = fib(n-1) + fib(n-2).',
      'Use the ternary operator for conciseness.',
      'Note: This naive implementation is exponential in time complexity (O(2^n)). For large n, consider memoization.',
    ],
    tags: ['recursion', 'fibonacci', 'sequence', 'mathematical'],
    usageExample: {
      code: `function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
fib(6); // 8`,
      explanation: {
        en: "The Fibonacci sequence adds the two previous values; base cases are 0 and 1.",
        es: "La secuencia Fibonacci suma los dos valores anteriores; los casos base son 0 y 1.",
      },
    },
  },
  {
    slug: 'algo-recursion-3',
    title: 'Flatten Nested Array',
    description: `## Flatten Nested Array

Flattening is the process of converting a nested (multi-dimensional) array into a single-dimensional array. Recursion makes this elegant: if an element is an array, recursively flatten it; otherwise, add it to the result.

\`\`\`ts
function flatten(arr: any[]): any[] {
  // Return a flattened version of the nested array
}

flatten([1, [2, [3]]]) // [1, 2, 3]
flatten([1, [2, 3], 4]) // [1, 2, 3, 4]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Algorithms',
    initialCode: `function flatten(arr: any[]): any[] {
  // Recursively flatten a nested array
  // Return a single-dimensional array
}`,
    solution: `function flatten(arr: any[]): any[] {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val)
  }, [])
}`,
    tests: [
      { description: 'flattens [1, [2, [3]]] to [1, 2, 3]', assertion: `expect(flatten([1, [2, [3]]])).toEqual([1, 2, 3])` },
      { description: 'flattens [1, [2, 3], 4] to [1, 2, 3, 4]', assertion: `expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4])` },
      { description: 'handles already flat array', assertion: `expect(flatten([1, 2, 3])).toEqual([1, 2, 3])` },
      { description: 'handles empty array', assertion: `expect(flatten([])).toEqual([])` },
      { description: 'flattens deeply nested array', assertion: `expect(flatten([[[1]], [[2, 3]]])).toEqual([1, 2, 3])` },
    ],
    hints: [
      'Use `reduce()` to build the result array.',
      'For each element, check if it\'s an array using `Array.isArray(val)`.',
      'If it\'s an array, recursively flatten it.',
      'If not, add it to the result using `concat()`.',
    ],
    tags: ['recursion', 'flatten', 'nested-array', 'reduce'],
    usageExample: {
      code: `function flatten(arr) {
  return arr.reduce((acc, v) =>
    acc.concat(Array.isArray(v) ? flatten(v) : v), []);
}
flatten([1, [2, [3]]]); // [1, 2, 3]`,
      explanation: {
        en: "Recursively flatten nested arrays by checking each element with Array.isArray.",
        es: "Aplana arrays anidados recursivamente verificando cada elemento con Array.isArray.",
      },
    },
  },
  {
    slug: 'algo-recursion-4',
    title: 'Power Function',
    description: `## Power Function

Calculate base raised to the power of exponent using recursion.

\`\`\`
power(2, 10) = 2^10 = 1024
power(3, 3) = 3^3 = 27
power(5, 0) = 1 (any number to the power 0 is 1)
\`\`\`

Recursive definition:
- Base case: if exponent is 0, return 1
- Recursive case: return base × power(base, exponent - 1)

\`\`\`ts
function power(base: number, exponent: number): number {
  // Return base^exponent
}

power(2, 10) // 1024
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Algorithms',
    initialCode: `function power(base: number, exponent: number): number {
  // Return base raised to the power of exponent
  // Use recursion
}`,
    solution: `function power(base: number, exponent: number): number {
  return exponent === 0 ? 1 : base * power(base, exponent - 1)
}`,
    tests: [
      { description: 'power(2, 10) is 1024', assertion: `expect(power(2, 10)).toBe(1024)` },
      { description: 'power(3, 3) is 27', assertion: `expect(power(3, 3)).toBe(27)` },
      { description: 'power(5, 0) is 1', assertion: `expect(power(5, 0)).toBe(1)` },
      { description: 'power(2, 5) is 32', assertion: `expect(power(2, 5)).toBe(32)` },
      { description: 'power(10, 3) is 1000', assertion: `expect(power(10, 3)).toBe(1000)` },
    ],
    hints: [
      'Base case: if exponent is 0, return 1.',
      'Recursive case: return base × power(base, exponent - 1).',
      'Use the ternary operator for conciseness.',
    ],
    tags: ['recursion', 'power', 'exponent', 'mathematical'],
    usageExample: {
      code: `function power(base, exp) {
  return exp === 0 ? 1 : base * power(base, exp - 1);
}
power(2, 10); // 1024`,
      explanation: {
        en: "Compute exponentiation recursively: multiply base by itself exp times.",
        es: "Calcula la exponenciación recursivamente: multiplica la base por sí misma exp veces.",
      },
    },
  },
  {
    slug: 'algo-recursion-5',
    title: 'Recursive Palindrome Check',
    description: `## Recursive Palindrome Check

A palindrome is a string that reads the same forwards and backwards (ignoring spaces and punctuation in real applications).

\`\`\`
"racecar" is a palindrome
"hello" is not a palindrome
"a" is a palindrome
"" is a palindrome
\`\`\`

Use recursion: if the first and last characters match, recursively check the middle substring.

\`\`\`ts
function isPalindrome(s: string): boolean {
  // Return true if s is a palindrome
}

isPalindrome('racecar') // true
isPalindrome('hello') // false
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Algorithms',
    initialCode: `function isPalindrome(s: string): boolean {
  // Return true if s is a palindrome
  // Use recursion
}`,
    solution: `function isPalindrome(s: string): boolean {
  return s.length <= 1 || (s[0] === s[s.length - 1] && isPalindrome(s.slice(1, -1)))
}`,
    tests: [
      { description: 'racecar is a palindrome', assertion: `expect(isPalindrome('racecar')).toBe(true)` },
      { description: 'hello is not a palindrome', assertion: `expect(isPalindrome('hello')).toBe(false)` },
      { description: 'a is a palindrome', assertion: `expect(isPalindrome('a')).toBe(true)` },
      { description: 'empty string is a palindrome', assertion: `expect(isPalindrome('')).toBe(true)` },
      { description: 'noon is a palindrome', assertion: `expect(isPalindrome('noon')).toBe(true)` },
    ],
    hints: [
      'Base case: if length ≤ 1, return true.',
      'Check if the first and last characters match.',
      'If they match, recursively check the substring without first and last characters using `slice(1, -1)`.',
      'Use `&&` to combine conditions: first check matches AND recursive check.',
    ],
    tags: ['recursion', 'palindrome', 'string-manipulation', 'logical-operators'],
    usageExample: {
      code: `function isPalindrome(s) {
  if (s.length <= 1) return true;
  return s[0] === s[s.length - 1] && isPalindrome(s.slice(1, -1));
}
isPalindrome('racecar'); // true`,
      explanation: {
        en: "Check palindromes recursively by comparing outer characters and moving inward.",
        es: "Comprueba palíndromos recursivamente comparando caracteres externos y avanzando hacia adentro.",
      },
    },
  },
]
