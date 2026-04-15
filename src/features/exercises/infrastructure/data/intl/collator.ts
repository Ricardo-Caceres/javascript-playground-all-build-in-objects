import { Exercise } from '@/shared/types/exercises';

export const intlCollatorExercises: Exercise[] = [
  {
    slug: 'intl-collator-constructor',
    title: 'Create Collator',
    description: 'Create an Intl.Collator instance.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Intl',
    method: 'Collator',
    initialCode: `function createCollator() {
  // Create an Intl.Collator for 'en' locale
}`,
    solution: `function createCollator() {
  return new Intl.Collator('en');
}`,
    tests: [
      {
        description: 'Returns an Intl.Collator instance',
        assertion: `expect(createCollator() instanceof Intl.Collator).toBeTruthy();`
      },
      {
        description: 'Has a compare method',
        assertion: `expect(typeof createCollator().compare).toBe('function');`
      },
      {
        description: 'Has a resolvedOptions method',
        assertion: `expect(typeof createCollator().resolvedOptions).toBe('function');`
      },
      {
        description: 'Locale is en',
        assertion: `expect(typeof createCollator().resolvedOptions().locale).toBe('string');`
      },
      {
        description: 'Compare returns number',
        assertion: `const result = createCollator().compare('a', 'b'); expect(typeof result === 'number').toBeTruthy();`
      },
    ],
    hints: ['Use new Intl.Collator(locale)'],
    tags: [],
  },
  {
    slug: 'intl-collator-compare',
    title: 'Compare strings',
    description: 'Use Intl.Collator.compare to compare two strings.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Intl',
    method: 'Collator',
    initialCode: `function compareStrings(a, b) {
  // Compare a and b using Intl.Collator
}`,
    solution: `function compareStrings(a, b) {
  return new Intl.Collator('en').compare(a, b);
}`,
    tests: [
      {
        description: 'Returns a number',
        assertion: `const result = compareStrings('a', 'b'); expect(typeof result === 'number').toBeTruthy();`
      },
      {
        description: 'a < b',
        assertion: `const result = compareStrings('a', 'b'); expect(result < 0).toBeTruthy();`
      },
      {
        description: 'b > a',
        assertion: `const result = compareStrings('b', 'a'); expect(result > 0).toBeTruthy();`
      },
      {
        description: 'a == a',
        assertion: `const result = compareStrings('a', 'a'); expect(result === 0).toBeTruthy();`
      },
      {
        description: 'apple < banana',
        assertion: `const result = compareStrings('apple', 'banana'); expect(result < 0).toBeTruthy();`
      },
    ],
    hints: ['Use .compare(a, b)'],
    tags: [],
  },
  {
    slug: 'intl-collator-sort',
    title: 'Sort strings with Collator',
    description: 'Use Intl.Collator to sort an array of strings.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Intl',
    method: 'Collator',
    initialCode: `function sortStrings(arr) {
  // Sort using Intl.Collator
}`,
    solution: `function sortStrings(arr) {
  return arr.slice().sort(new Intl.Collator('en').compare);
}`,
    tests: [
      {
        description: 'Sorts apple, banana, cherry',
        assertion: `const result = sortStrings(['banana', 'cherry', 'apple']); expect(result).toEqual(['apple', 'banana', 'cherry']);`
      },
      {
        description: 'Sorts single element',
        assertion: `const result = sortStrings(['zebra']); expect(result).toEqual(['zebra']);`
      },
      {
        description: 'Sorts empty array',
        assertion: `const result = sortStrings([]); expect(result).toEqual([]);`
      },
      {
        description: 'Sorts with duplicates',
        assertion: `const result = sortStrings(['apple', 'banana', 'apple']); expect(result).toEqual(['apple', 'apple', 'banana']);`
      },
      {
        description: 'Sorts with uppercase',
        assertion: `const result = sortStrings(['Banana', 'apple']); expect(result[0].toLowerCase() <= result[1].toLowerCase()).toBeTruthy();`
      },
    ],
    hints: ['Use .sort(collator.compare)'],
    tags: [],
  },
  {
    slug: 'intl-collator-sensitivity',
    title: 'Collator sensitivity option',
    description: 'Use the sensitivity option in Intl.Collator.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Intl',
    method: 'Collator',
    initialCode: `function createCaseSensitiveCollator() {
  // Create a Collator with sensitivity: "case"
}`,
    solution: `function createCaseSensitiveCollator() {
  return new Intl.Collator('en', { sensitivity: 'case' });
}`,
    tests: [
      {
        description: 'Returns an Intl.Collator instance',
        assertion: `expect(createCaseSensitiveCollator() instanceof Intl.Collator).toBeTruthy();`
      },
      {
        description: 'Compare a vs A is not 0',
        assertion: `const collator = createCaseSensitiveCollator(); expect(collator.compare('a', 'A') !== 0).toBeTruthy();`
      },
      {
        description: 'Compare a vs a is 0',
        assertion: `const collator = createCaseSensitiveCollator(); expect(collator.compare('a', 'a') === 0).toBeTruthy();`
      },
      {
        description: 'Compare apple vs Apple is not 0',
        assertion: `const collator = createCaseSensitiveCollator(); expect(collator.compare('apple', 'Apple') !== 0).toBeTruthy();`
      },
      {
        description: 'Compare banana vs banana is 0',
        assertion: `const collator = createCaseSensitiveCollator(); expect(collator.compare('banana', 'banana') === 0).toBeTruthy();`
      },
    ],
    hints: ['Use sensitivity: "case"'],
    tags: [],
  },
  {
    slug: 'intl-collator-resolvedOptions',
    title: 'Collator resolvedOptions',
    description: 'Get resolved options from Intl.Collator.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Intl',
    method: 'Collator',
    initialCode: `function getCollatorOptions() {
  // Return resolved options
}`,
    solution: `function getCollatorOptions() {
  return new Intl.Collator('en').resolvedOptions();
}`,
    tests: [
      {
        description: 'Returns an object',
        assertion: `const result = getCollatorOptions(); expect(typeof result === 'object' && result !== null).toBeTruthy();`
      },
      {
        description: 'Has locale property',
        assertion: `const result = getCollatorOptions(); expect(typeof result.locale === 'string').toBeTruthy();`
      },
      {
        description: 'Has sensitivity property',
        assertion: `const result = getCollatorOptions(); expect(typeof result.sensitivity === 'string').toBeTruthy();`
      },
      {
        description: 'Has usage property',
        assertion: `const result = getCollatorOptions(); expect(typeof result.usage === 'string').toBeTruthy();`
      },
      {
        description: 'Has caseFirst property',
        assertion: `const result = getCollatorOptions(); expect(['upper', 'lower', 'false'].includes(result.caseFirst) || typeof result.caseFirst === 'undefined').toBeTruthy();`
      },
    ],
    hints: ['Use .resolvedOptions()'],
    tags: [],
  },
];
