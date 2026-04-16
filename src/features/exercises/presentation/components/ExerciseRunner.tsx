'use client'

import { useRef, useEffect, useCallback, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import type { AppDispatch, RootState } from '@/shared/lib/store'
import type { Exercise, TestResult } from '@/shared/types/exercises'
import { WorkerEngine } from '@/shared/lib/worker/workerEngine'
import { updateProgress } from '@/features/progress/presentation/store/progressSlice'
import { TestPanel } from './TestPanel'
import { useExerciseNavigation } from '../hooks/useExerciseNavigation'
import { TimedModeToggle } from './TimedModeToggle'
import { CountdownTimer }  from './CountdownTimer'
import { XP_TABLE }        from '@/features/gamification/domain/entities'

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
  const isRunningRef = useRef(false)

  const { prevSlug, nextSlug, currentIndex, total } = useExerciseNavigation(
    objectName,
    exercise.slug,
  )

  const BASE_MINS: Record<string, number> = { beginner: 10, intermediate: 15, advanced: 20 }
  const totalSeconds = useMemo(() => {
    const base  = BASE_MINS[exercise.difficulty] ?? 15
    const extra = Math.min(5, Math.floor((exercise.initialCode ?? '').length / 100))
    return (base + extra) * 60
  }, [exercise])

  const [timedMode,    setTimedMode]    = useState(false)
  const [timerActive,  setTimerActive]  = useState(false)
  const [timeLeft,     setTimeLeft]     = useState(totalSeconds)
  const [timerExpired, setTimerExpired] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Start / reset timer when timed mode is toggled
  useEffect(() => {
    if (timedMode && !timerActive) {
      setTimeLeft(totalSeconds)
      setTimerExpired(false)
      setTimerActive(true)
    }
    if (!timedMode) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      setTimerActive(false)
      setTimeLeft(totalSeconds)
      setTimerExpired(false)
    }
  }, [timedMode, totalSeconds])

  // Countdown tick
  useEffect(() => {
    if (!timerActive) return
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!)
          setTimerExpired(true)
          setTimerActive(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current!)
  }, [timerActive])

  useEffect(() => {
    engineRef.current = new WorkerEngine()
    return () => {
      engineRef.current?.terminate()
    }
  }, [])

  const run = useCallback(async () => {
    if (!engineRef.current || isRunningRef.current) return
    isRunningRef.current = true
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
        const allPassed = result.results.length > 0 && result.results.every((r) => r.passed)
        const baseXp = XP_TABLE[exercise.difficulty] ?? 10
        const timedBonus = allPassed && timedMode && timeLeft > 0
          ? Math.round(baseXp * 0.5 * (timeLeft / totalSeconds))
          : 0
        dispatch(
          updateProgress({
            slug: exercise.slug,
            status: allPassed ? 'completed' : 'attempted',
            lastCode: code,
            timedBonus,
          }),
        )
        if (allPassed && timedMode) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          setTimerActive(false)
        }
      }
    } finally {
      isRunningRef.current = false
      setIsRunning(false)
    }
  }, [code, exercise, dispatch, timedMode, timeLeft, totalSeconds])

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

      {/* Timed mode controls */}
      <div className="flex items-center gap-3 border-b border-zinc-800 px-4 py-1.5">
        <TimedModeToggle
          enabled={timedMode}
          onToggle={() => setTimedMode((v) => !v)}
          disabled={timerExpired}
        />
        {timedMode && (
          <CountdownTimer timeLeft={timeLeft} total={totalSeconds} />
        )}
        {timerExpired && (
          <span className="text-red-400 text-xs">Time&apos;s up! Solve freely (no bonus).</span>
        )}
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
            {isRunning ? 'Running…' : 'Run ⌘/Ctrl↵'}
          </button>
        </div>
      </div>

      {/* Test results */}
      {results.length > 0 && <TestPanel results={results} />}
    </div>
  )
}
