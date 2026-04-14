// src/shared/types/exercises.ts

export type ExerciseCategory =
  | 'constructor'
  | 'static-property'
  | 'static-method'
  | 'instance-method'
  | 'instance-property'
  | 'inheritance'

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
