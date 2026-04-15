'use client'

import { useRef, useEffect, useCallback } from 'react'
import type { TestResult } from '@/shared/types/exercises'

interface Props {
  results: TestResult[]
}

export function TestPanel({ results }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const allPassed = results.every((r) => r.passed)
  const passCount = results.filter((r) => r.passed).length

  // Auto-scroll to top when results change
  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0 })
  }, [results])

  const copyError = useCallback((error: string) => {
    navigator.clipboard.writeText(error).catch(() => {})
  }, [])

  return (
    <div
      ref={panelRef}
      className="max-h-64 overflow-y-auto border-t border-zinc-800 bg-zinc-900"
    >
      {/* Summary banner */}
      {allPassed ? (
        <div className="sticky top-0 flex items-center gap-2 border-b border-emerald-800/50 bg-emerald-950/80 px-4 py-2 backdrop-blur">
          <span className="text-emerald-400">✓</span>
          <span className="text-sm font-semibold text-emerald-300">
            All {results.length} tests passed!
          </span>
        </div>
      ) : (
        <div className="sticky top-0 flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/90 px-4 py-2 backdrop-blur">
          <span className="text-xs text-zinc-500">
            {passCount}/{results.length} passing
          </span>
        </div>
      )}

      {/* Individual results */}
      <ul className="divide-y divide-zinc-800">
        {results.map((r, i) => (
          <li key={i} className="px-4 py-3">
            <div className="flex items-start gap-3">
              <span
                className={`mt-0.5 shrink-0 font-mono text-xs ${
                  r.passed ? 'text-emerald-500' : 'text-red-500'
                }`}
              >
                {i + 1}. {r.passed ? '✓' : '✗'}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-zinc-300">{r.description}</p>
                {!r.passed && r.error && (
                  <div className="mt-1 flex items-start justify-between gap-2">
                    <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-xs text-red-400">
                      {r.error}
                    </pre>
                    <button
                      type="button"
                      onClick={() => copyError(r.error!)}
                      className="shrink-0 rounded border border-zinc-700 px-2 py-0.5 text-xs text-zinc-500 transition-colors hover:border-zinc-500 hover:text-zinc-300"
                      aria-label="Copy error"
                    >
                      Copy
                    </button>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
