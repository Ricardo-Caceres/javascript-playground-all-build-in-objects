'use client'

import { useRef, useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import type { AppDispatch, RootState } from '@/shared/lib/store'
import type { Exercise, TestResult } from '@/shared/types/exercises'
import { WorkerEngine } from '@/shared/lib/worker/workerEngine'
import { updateProgress } from '@/features/progress/presentation/store/progressSlice'
import { TestPanel } from './TestPanel'
import { useExerciseNavigation } from '../hooks/useExerciseNavigation'

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

interface Props {
  exercise: Exercise
  objectName: string
}

export function ExerciseRunner({ exercise, objectName }: Props) {
  const dispatch = useDispatch<AppDispatch>()
  const savedProgress = useSelector(
    (state: RootState) => state.progress.exercises[exercise.slug],
  )

  const [code, setCode] = useState<string>(
    savedProgress?.lastCode ?? exercise.initialCode,
  )
  const [results, setResults] = useState<TestResult[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const engineRef = useRef<WorkerEngine | null>(null)
  // Stable ref so the keydown listener never captures a stale `run`
  const runRef = useRef<() => void>(() => {})

  const { prevSlug, nextSlug, currentIndex, total } = useExerciseNavigation(
    objectName,
    exercise.slug,
  )

  useEffect(() => {
    engineRef.current = new WorkerEngine()
    return () => {
      engineRef.current?.terminate()
    }
  }, [])

  const run = useCallback(async () => {
    if (!engineRef.current) return
    setIsRunning(true)
    try {
      const result = await engineRef.current.run(code, exercise.tests)
      if (result.runtimeError) {
        setResults([
          {
            passed: false,
            description: 'Runtime error',
            error: result.runtimeError,
          },
        ])
      } else {
        setResults(result.results)
      }
      const allPassed = result.results.length > 0 && result.results.every((r) => r.passed)
      dispatch(
        updateProgress({
          slug: exercise.slug,
          status: allPassed ? 'completed' : 'attempted',
          lastCode: code,
        }),
      )
    } finally {
      setIsRunning(false)
    }
  }, [code, exercise, dispatch])

  // Update ref whenever `run` changes
  useEffect(() => {
    runRef.current = run
  }, [run])

  // ⌘+Enter / Ctrl+Enter keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        runRef.current()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, []) // empty deps — uses runRef to avoid stale closures

  const reset = useCallback(() => {
    setCode(exercise.initialCode)
    setResults([])
  }, [exercise.initialCode])

  return (
    <div className="flex h-full flex-col bg-zinc-950">
      {/* Top bar: exercise title + N/M counter */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
        <h2 className="truncate text-sm font-semibold text-zinc-200">{exercise.title}</h2>
        <span className="shrink-0 font-mono text-xs text-zinc-600">
          {currentIndex}/{total}
        </span>
      </div>

      {/* Monaco editor */}
      <div className="min-h-0 flex-1">
        <MonacoEditor
          height="100%"
          language="typescript"
          theme="vs-dark"
          value={code}
          onChange={(v) => setCode(v ?? '')}
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

      {/* Action bar */}
      <div className="flex items-center justify-between border-t border-zinc-800 bg-zinc-900 px-4 py-2">
        {/* Prev / Next */}
        <div className="flex items-center gap-2">
          {prevSlug ? (
            <Link
              href={`/exercises/${objectName.toLowerCase()}/${prevSlug}`}
              className="rounded border border-zinc-700 px-2 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              ← Prev
            </Link>
          ) : (
            <span className="cursor-not-allowed rounded border border-zinc-800 px-2 py-1 text-xs text-zinc-700">
              ← Prev
            </span>
          )}
          {nextSlug ? (
            <Link
              href={`/exercises/${objectName.toLowerCase()}/${nextSlug}`}
              className="rounded border border-zinc-700 px-2 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              Next →
            </Link>
          ) : (
            <span className="cursor-not-allowed rounded border border-zinc-800 px-2 py-1 text-xs text-zinc-700">
              Next →
            </span>
          )}
        </div>

        {/* Run / Reset */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={reset}
            className="rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={run}
            disabled={isRunning}
            className="rounded bg-emerald-700 px-4 py-1 text-xs font-semibold text-white transition-colors hover:bg-emerald-600 disabled:opacity-50"
          >
            {isRunning ? 'Running…' : 'Run ⌘↵'}
          </button>
        </div>
      </div>

      {/* Test results */}
      {results.length > 0 && <TestPanel results={results} />}
    </div>
  )
}
