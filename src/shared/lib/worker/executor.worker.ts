import * as Babel from "@babel/standalone"
import { createTestFramework } from "./testFramework"
import type { TestCase, RunResult } from "@/shared/types/exercises"

interface WorkerInput {
  code: string
  tests: TestCase[]
}

declare const self: {
  onmessage: ((event: MessageEvent<WorkerInput>) => void) | null
  postMessage(data: RunResult): void
}

self.onmessage = (event: MessageEvent<WorkerInput>) => {
  const { code, tests } = event.data
  const result = executeCode(code, tests)
  self.postMessage(result)
}

function executeCode(code: string, tests: TestCase[]): RunResult {
  try {
    const transpileResult = Babel.transform(code, {
      presets: ["typescript"],
      filename: "exercise.ts",
    })
    const transpiled = transpileResult.code ?? ""

    const { describe, it, expect, getResults } = createTestFramework()

    const testBlock = tests
      .map((t) => `it(${JSON.stringify(t.description)}, () => { ${t.assertion} })`)
      .join("\n")

    // eslint-disable-next-line no-new-func
    const runner = new Function("describe", "it", "expect", `${transpiled}\n${testBlock}`)
    runner(describe, it, expect)

    return { results: getResults() }
  } catch (err) {
    return {
      results: [],
      runtimeError: (err as Error).message,
    }
  }
}
