'use client'

import type { RunResult } from '@/shared/types/exercises'

interface TestPanelProps {
  result: RunResult
}

export function TestPanel({ result }: TestPanelProps) {
  const { results, runtimeError } = result
  const passedCount = results.filter((r) => r.passed).length
  const totalCount = results.length

  if (runtimeError) {
    return (
      <div className="border-t border-red-800 bg-red-950/60 p-4">
        <p className="text-sm font-semibold text-red-400">⚠ Runtime Error</p>
        <pre className="mt-2 overflow-auto text-xs text-red-300">{runtimeError}</pre>
      </div>
    )
  }

  return (
    <div className="border-t border-zinc-700 bg-zinc-900/80 p-4">
      <p className="mb-3 text-sm font-semibold text-zinc-300">
        Tests:{' '}
        <span className={passedCount === totalCount ? 'text-emerald-400' : 'text-amber-400'}>
          {passedCount}/{totalCount} passed
        </span>
      </p>
      <ul className="space-y-2">
        {results.map((r, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span
              className={`mt-0.5 shrink-0 font-mono font-bold ${
                r.passed ? 'text-emerald-400' : 'text-red-400'
              }`}
            >
              {r.passed ? '✓' : '✗'}
            </span>
            <div className="min-w-0">
              <span className="text-zinc-300">{r.description}</span>
              {r.error && (
                <pre className="mt-1 overflow-auto whitespace-pre-wrap text-xs text-red-400">
                  {r.error}
                </pre>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
