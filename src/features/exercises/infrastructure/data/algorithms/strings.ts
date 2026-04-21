import type { Exercise } from '@/shared/types/exercises'

export const algoStringsExercises: Exercise[] = [
  {
    slug: 'algo-string-1',
    title: 'Anagram Check',
    description: `## Anagram Check

Two strings are anagrams if they contain the same characters in a different order (ignoring case and spaces).

\`\`\`
"listen" and "silent" are anagrams
"hello" and "world" are not anagrams
\`\`\`

Algorithm:
1. Normalize both strings (lowercase, remove spaces)
2. Sort characters in both strings
3. Compare the sorted strings

\`\`\`ts
function isAnagram(str1: string, str2: string): boolean {
  // Return true if str1 and str2 are anagrams
}

isAnagram('listen', 'silent') // true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Algorithms',
    initialCode: `function isAnagram(str1: string, str2: string): boolean {
  // Return true if str1 and str2 are anagrams
  // Compare sorted characters
}`,
    solution: `function isAnagram(str1: string, str2: string): boolean {
  const normalize = (s: string) => s.toLowerCase().split('').sort().join('')
  return normalize(str1) === normalize(str2)
}`,
    tests: [
      { description: 'listen and silent are anagrams', assertion: `expect(isAnagram('listen', 'silent')).toBe(true)` },
      { description: 'hello and world are not anagrams', assertion: `expect(isAnagram('hello', 'world')).toBe(false)` },
      { description: 'case-insensitive', assertion: `expect(isAnagram('Listen', 'SILENT')).toBe(true)` },
      { description: 'empty strings are anagrams', assertion: `expect(isAnagram('', '')).toBe(true)` },
      { description: 'same string is an anagram of itself', assertion: `expect(isAnagram('abc', 'abc')).toBe(true)` },
    ],
    hints: [
      'Convert both strings to lowercase for case-insensitive comparison.',
      'Use split("") to convert string to array of characters.',
      'Use sort() to sort the characters.',
      'Use join("") to convert back to string.',
      'Compare the two sorted strings.',
    ],
    tags: ['strings', 'anagram', 'character-sorting', 'normalization'],
    usageExample: {
      code: `function isAnagram(a, b) {
  const sort = s => s.split('').sort().join('');
  return sort(a) === sort(b);
}
isAnagram('listen', 'silent'); // true`,
      explanation: {
        en: "Check if two strings are anagrams by sorting their characters and comparing.",
        es: "Comprueba si dos cadenas son anagramas ordenando sus caracteres y comparando.",
      },
    },
  },
  {
    slug: 'algo-string-2',
    title: 'Reverse Words',
    description: `## Reverse Words

Reverse the order of words in a string while keeping each word intact.

\`\`\`
"hello world" → "world hello"
"JavaScript is fun" → "fun is JavaScript"
\`\`\`

Algorithm:
1. Split the string into words
2. Reverse the array of words
3. Join them back together

\`\`\`ts
function reverseWords(s: string): string {
  // Reverse the order of words in s
}

reverseWords('hello world') // "world hello"
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Algorithms',
    initialCode: `function reverseWords(s: string): string {
  // Reverse the order of words in the string
  // Keep each word intact
}`,
    solution: `function reverseWords(s: string): string {
  return s.split(' ').reverse().join(' ')
}`,
    tests: [
      { description: 'reverses words in a sentence', assertion: `expect(reverseWords('hello world')).toBe('world hello')` },
      { description: 'reverses three words', assertion: `expect(reverseWords('JavaScript is fun')).toBe('fun is JavaScript')` },
      { description: 'single word remains unchanged', assertion: `expect(reverseWords('hello')).toBe('hello')` },
      { description: 'empty string remains empty', assertion: `expect(reverseWords('')).toBe('')` },
      { description: 'works with two words', assertion: `expect(reverseWords('foo bar')).toBe('bar foo')` },
    ],
    hints: [
      'Use split(" ") to split by spaces.',
      'Use reverse() to reverse the array.',
      'Use join(" ") to join with spaces.',
      'This can be done in one line.',
    ],
    tags: ['strings', 'word-reversal', 'split-join', 'array-methods'],
    usageExample: {
      code: `function reverseWords(s) {
  return s.split(' ').reverse().join(' ');
}
reverseWords('Hello World'); // 'World Hello'`,
      explanation: {
        en: "Reverse word order by splitting on spaces, reversing the array, and joining back.",
        es: "Invierte el orden de palabras dividiendo por espacios, invirtiendo y uniendo de nuevo.",
      },
    },
  },
  {
    slug: 'algo-string-3',
    title: 'Count Vowels',
    description: `## Count Vowels

Count the number of vowel characters (a, e, i, o, u) in a string, case-insensitive.

\`\`\`
"hello" has 2 vowels: e, o
"aeiou" has 5 vowels
"xyz" has 0 vowels
\`\`\`

Algorithm:
1. Use a regular expression to match vowels
2. Count the matches

\`\`\`ts
function countVowels(s: string): number {
  // Return the count of vowels in s
}

countVowels('hello') // 2
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Algorithms',
    initialCode: `function countVowels(s: string): number {
  // Return the count of vowels in the string
  // Case-insensitive
}`,
    solution: `function countVowels(s: string): number {
  return (s.match(/[aeiou]/gi) || []).length
}`,
    tests: [
      { description: 'hello has 2 vowels', assertion: `expect(countVowels('hello')).toBe(2)` },
      { description: 'aeiou has 5 vowels', assertion: `expect(countVowels('aeiou')).toBe(5)` },
      { description: 'xyz has 0 vowels', assertion: `expect(countVowels('xyz')).toBe(0)` },
      { description: 'case-insensitive', assertion: `expect(countVowels('HELLO')).toBe(2)` },
      { description: 'empty string has 0 vowels', assertion: `expect(countVowels('')).toBe(0)` },
    ],
    hints: [
      'Use a regex pattern `/[aeiou]/gi` to match vowels.',
      'The `g` flag finds all matches (not just the first).',
      'The `i` flag makes it case-insensitive.',
      'Use `match()` to find all matches.',
      'Handle the case where `match()` returns null with `|| []`.',
    ],
    tags: ['strings', 'vowel-counting', 'regex', 'pattern-matching'],
    usageExample: {
      code: `function countVowels(s) {
  return (s.match(/[aeiou]/gi) || []).length;
}
countVowels('Hello World'); // 3`,
      explanation: {
        en: "Count vowels using a regex match that captures all vowels case-insensitively.",
        es: "Cuenta vocales con una coincidencia regex que captura todas las vocales sin distinción de mayúsculas.",
      },
    },
  },
  {
    slug: 'algo-string-4',
    title: 'CamelCase to Snake Case',
    description: `## CamelCase to Snake Case

Convert camelCase strings to snake_case.

\`\`\`
"helloWorld" → "hello_world"
"firstName" → "first_name"
"myVariableName" → "my_variable_name"
\`\`\`

Algorithm:
1. Find uppercase letters
2. Replace each with underscore + lowercase version

\`\`\`ts
function toSnakeCase(s: string): string {
  // Convert camelCase to snake_case
}

toSnakeCase('helloWorld') // "hello_world"
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Algorithms',
    initialCode: `function toSnakeCase(s: string): string {
  // Convert camelCase to snake_case
  // Find uppercase letters and insert underscore before them
}`,
    solution: `function toSnakeCase(s: string): string {
  return s.replace(/([A-Z])/g, m => '_' + m.toLowerCase())
}`,
    tests: [
      { description: 'helloWorld becomes hello_world', assertion: `expect(toSnakeCase('helloWorld')).toBe('hello_world')` },
      { description: 'firstName becomes first_name', assertion: `expect(toSnakeCase('firstName')).toBe('first_name')` },
      { description: 'myVariableName becomes my_variable_name', assertion: `expect(toSnakeCase('myVariableName')).toBe('my_variable_name')` },
      { description: 'lowercase remains unchanged', assertion: `expect(toSnakeCase('hello')).toBe('hello')` },
      { description: 'already snake_case with uppercase stays same', assertion: `expect(toSnakeCase('alreadySnakeCase')).toBe('already_snake_case')` },
    ],
    hints: [
      'Use replace() with a regex pattern.',
      'Pattern /([A-Z])/g matches uppercase letters.',
      'The replacement function receives the match (m).',
      'Return "_" + m.toLowerCase() to insert underscore and lowercase.',
    ],
    tags: ['strings', 'case-conversion', 'regex-replace', 'naming-conventions'],
    usageExample: {
      code: `function toSnakeCase(s) {
  return s.replace(/([A-Z])/g, '_$1').toLowerCase();
}
toSnakeCase('camelCaseString'); // 'camel_case_string'`,
      explanation: {
        en: "Convert camelCase to snake_case by inserting underscores before capital letters.",
        es: "Convierte camelCase a snake_case insertando guiones bajos antes de las letras mayúsculas.",
      },
    },
  },
  {
    slug: 'algo-string-5',
    title: 'Longest Common Prefix',
    description: `## Longest Common Prefix

Find the longest common prefix among an array of strings. A prefix is a substring that appears at the start of multiple strings.

\`\`\`
["flower", "flow", "flight"] → "fl"
["dog", "racecar", "car"] → ""
["interspecies", "interstellar", "interstate"] → "inters"
\`\`\`

Algorithm:
1. Start with the first string as the prefix
2. For each string, truncate the prefix until it matches the start of that string

\`\`\`ts
function longestCommonPrefix(strs: string[]): string {
  // Return the longest common prefix
}

longestCommonPrefix(['flower', 'flow', 'flight']) // "fl"
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Algorithms',
    initialCode: `function longestCommonPrefix(strs: string[]): string {
  // Find the longest common prefix among strings
  // Trim prefix until it matches all strings
}`,
    solution: `function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ''
  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1)
      if (prefix === '') return ''
    }
  }
  return prefix
}`,
    tests: [
      { description: 'finds fl from flower flow flight', assertion: `expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')` },
      { description: 'returns empty string when no common prefix', assertion: `expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')` },
      { description: 'returns inters for interspecies interstellar interstate', assertion: `expect(longestCommonPrefix(['interspecies', 'interstellar', 'interstate'])).toBe('inters')` },
      { description: 'single string returns itself', assertion: `expect(longestCommonPrefix(['hello'])).toBe('hello')` },
      { description: 'identical strings return the string', assertion: `expect(longestCommonPrefix(['abc', 'abc', 'abc'])).toBe('abc')` },
    ],
    hints: [
      'Start with the first string as the prefix.',
      'For each subsequent string, check if it starts with the prefix.',
      'If not, trim the last character from the prefix using `slice(0, -1)`.',
      'Repeat until the prefix matches all strings or becomes empty.',
      'Use `startsWith()` to check prefix match.',
    ],
    tags: ['strings', 'prefix', 'algorithm', 'string-comparison'],
    usageExample: {
      code: `function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  let prefix = strs[0];
  for (const s of strs) while (!s.startsWith(prefix)) prefix = prefix.slice(0, -1);
  return prefix;
}
longestCommonPrefix(['flower', 'flow', 'flight']); // 'fl'`,
      explanation: {
        en: "Find the longest common prefix by progressively trimming the candidate string.",
        es: "Encuentra el prefijo común más largo recortando progresivamente la cadena candidata.",
      },
    },
  },
]
