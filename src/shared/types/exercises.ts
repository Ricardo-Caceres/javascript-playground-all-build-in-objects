// src/shared/types/exercises.ts

export interface TopicMeta {
  description: {
    en: string
    es: string
  }
}

export interface UsageExample {
  /** Plain JS/TS code snippet illustrating basic usage */
  code: string
  explanation: {
    en: string
    es: string
  }
}

export type ExerciseCategory =
  | 'constructor'
  | 'static-property'
  | 'static-method'
  | 'instance-method'
  | 'instance-property'
  | 'inheritance'
  | 'type-guard'
  | 'generic'
  | 'utility-type'

export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export interface TestCase {
  description: string
  /** Inline JS/TS expression using the `expect()` API, e.g. `expect(fn('a')).toEqual(['a'])` */
  assertion: string
}

export interface Exercise {
  slug: string
  title: string
  description: string
  category: ExerciseCategory
  difficulty: Difficulty
  builtIn: string      // e.g. 'Array'
  method?: string      // e.g. 'Array.from'
  initialCode: string
  solution: string
  tests: TestCase[]
  hints?: string[]
  tags: string[]
  usageExample?: UsageExample
}

export interface TestResult {
  description: string
  passed: boolean
  error?: string
}

export interface RunResult {
  results: TestResult[]
  runtimeError?: string
}
