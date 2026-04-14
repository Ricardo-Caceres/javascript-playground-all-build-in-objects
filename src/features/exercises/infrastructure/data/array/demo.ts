import type { Exercise } from '@/shared/types/exercises'

export const arrayFromString: Exercise = {
  slug: 'array-from-string',
  title: 'Array.from() — convert a string to chars',
  description: `## Array.from()

\`Array.from()\` creates a new array from an iterable or array-like object.
Since strings are iterable in JavaScript, you can use \`Array.from()\` to split them into individual characters.

**Challenge:** Implement \`stringToChars\` using \`Array.from()\` to convert a string into an array of its characters.

\`\`\`ts
stringToChars('hello') // → ['h', 'e', 'l', 'l', 'o']
stringToChars('')      // → []
\`\`\``,
  category: 'static-method',
  difficulty: 'beginner',
  builtIn: 'Array',
  method: 'Array.from',
  initialCode: `function stringToChars(str: string): string[] {
  // Use Array.from() to convert the string into an array of characters
}`,
  solution: `function stringToChars(str: string): string[] {
  return Array.from(str)
}`,
  tests: [
    {
      description: "stringToChars('hello') returns ['h','e','l','l','o']",
      assertion: "expect(stringToChars('hello')).toEqual(['h', 'e', 'l', 'l', 'o'])",
    },
    {
      description: 'empty string returns empty array',
      assertion: "expect(stringToChars('')).toEqual([])",
    },
    {
      description: 'single character returns single-element array',
      assertion: "expect(stringToChars('a')).toEqual(['a'])",
    },
    {
      description: 'special characters are preserved',
      assertion: "expect(stringToChars('!@#')).toEqual(['!', '@', '#'])",
    },
    {
      description: 'result has correct length',
      assertion: "expect(stringToChars('world')).toHaveLength(5)",
    },
  ],
  hints: [
    'Strings are iterable — Array.from() works on any iterable.',
    'Array.from(someString) iterates over each character.',
  ],
  tags: ['Array', 'Array.from', 'string', 'iterable', 'static-method'],
}
