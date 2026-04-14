'use client'

import dynamic from 'next/dynamic'
import { useExerciseRunner } from '../hooks/useExerciseRunner'
import { TestPanel } from './TestPanel'
import type { Exercise } from '@/shared/types/exercises'

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

interface ExerciseRunnerProps {
  exercise: Exercise
}

export function ExerciseRunner({ exercise }: ExerciseRunnerProps) {
  const { code, setCode, run, reset, isRunning, runResult } = useExerciseRunner(exercise)

  return (
    <div className="flex h-full flex-col">
      <div className="min-h-0 flex-1">
        <MonacoEditor
          language="typescript"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value ?? '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            padding: { top: 16, bottom: 16 },
            fontFamily: 'var(--font-geist-mono), monospace',
          }}
        />
      </div>

      <div className="flex items-center gap-3 border-t border-zinc-700 bg-zinc-900 px-4 py-3">
        <button
          onClick={run}
          disabled={isRunning}
          className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isRunning ? 'Running…' : '▶ Run Tests'}
        </button>
        <button
          onClick={reset}
          className="rounded-lg border border-zinc-600 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-400 hover:text-zinc-200"
        >
          Reset
        </button>
      </div>

      {runResult && <TestPanel result={runResult} />}
    </div>
  )
}
