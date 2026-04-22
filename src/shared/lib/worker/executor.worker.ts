import * as ReduxToolkit from '@reduxjs/toolkit'
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
      // transform-block-scoping converts const/let to var so user-declared
      // variables are accessible outside the eval() call below
      plugins: ["transform-block-scoping"],
      filename: "exercise.ts",
    })
    const transpiled = transpileResult.code ?? ""

    const { describe, it, expect, getResults } = createTestFramework()

    const testBlock = tests
      .map((t) => `it(${JSON.stringify(t.description)}, () => { ${t.assertion} })`)
      .join("\n")

    // Capture the last expression of user code as `result` using eval().
    // In non-strict mode, var/function declarations inside eval() are hoisted
    // into the outer new Function scope, so function exercises still work.
    // eslint-disable-next-line no-new-func
    const runner = new Function(
      "describe",
      "it",
      "expect",
      "ReduxToolkit",
      `eval(${JSON.stringify(transpiled)});\nvar result = undefined;\n${testBlock}`,
    )
    runner(describe, it, expect, ReduxToolkit)

    return { results: getResults() }
  } catch (err) {
    return {
      results: [],
      runtimeError: (err as Error).message,
    }
  }
}
