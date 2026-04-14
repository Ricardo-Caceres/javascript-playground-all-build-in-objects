import type { TestResult } from '@/shared/types/exercises'

interface Matchers {
  toBe(expected: unknown): void
  toEqual(expected: unknown): void
  toStrictEqual(expected: unknown): void
  toBeTruthy(): void
  toBeFalsy(): void
  toContain(item: unknown): void
  toHaveLength(length: number): void
  toBeNull(): void
  toBeUndefined(): void
  toThrow(message?: string): void
}

export interface TestFramework {
  describe: (name: string, fn: () => void) => void
  it: (description: string, fn: () => void) => void
  expect: (actual: unknown) => Matchers
  getResults: () => TestResult[]
}

export function createTestFramework(): TestFramework {
  const results: TestResult[] = []

  const makeMatchers = (actual: unknown): Matchers => ({
    toBe(expected: unknown) {
      if (!Object.is(actual, expected)) {
        throw new Error(`Expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`)
      }
    },
    toEqual(expected: unknown) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}`)
      }
    },
    toStrictEqual(expected: unknown) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(
          `Expected ${JSON.stringify(actual)} to strictly equal ${JSON.stringify(expected)}`,
        )
      }
    },
    toBeTruthy() {
      if (!actual) throw new Error(`Expected ${JSON.stringify(actual)} to be truthy`)
    },
    toBeFalsy() {
      if (actual) throw new Error(`Expected ${JSON.stringify(actual)} to be falsy`)
    },
    toContain(item: unknown) {
      if (Array.isArray(actual)) {
        if (!actual.includes(item)) {
          throw new Error(`Expected array to contain ${JSON.stringify(item)}`)
        }
      } else if (typeof actual === 'string') {
        if (!actual.includes(String(item))) {
          throw new Error(`Expected string to contain ${JSON.stringify(item)}`)
        }
      } else {
        throw new Error('toContain can only be used with arrays or strings')
      }
    },
    toHaveLength(length: number) {
      const actual_ = actual as { length?: number }
      if (actual_?.length !== length) {
        throw new Error(`Expected length ${actual_?.length} to be ${length}`)
      }
    },
    toBeNull() {
      if (actual !== null) throw new Error(`Expected ${JSON.stringify(actual)} to be null`)
    },
    toBeUndefined() {
      if (actual !== undefined) {
        throw new Error(`Expected ${JSON.stringify(actual)} to be undefined`)
      }
    },
    toThrow(message?: string) {
      if (typeof actual !== 'function') throw new Error('toThrow requires a function argument')
      let threw = false
      try {
        ;(actual as () => void)()
      } catch (err) {
        threw = true
        if (message && !(err as Error).message?.includes(message)) {
          throw new Error(
            `Expected error message to include "${message}" but got "${(err as Error).message}"`,
          )
        }
      }
      if (!threw) throw new Error('Expected function to throw, but it did not')
    },
  })

  const it = (description: string, fn: () => void) => {
    try {
      fn()
      results.push({ description, passed: true })
    } catch (err) {
      results.push({ description, passed: false, error: (err as Error).message })
    }
  }

  const describe = (_name: string, fn: () => void) => {
    fn()
  }

  return {
    describe,
    it,
    expect: makeMatchers,
    getResults: () => [...results],
  }
}
