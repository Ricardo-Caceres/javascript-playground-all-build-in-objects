'use client'

import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WorkerEngine } from '@/shared/lib/worker/workerEngine'
import { updateProgress } from '@/features/progress/presentation/store/progressSlice'
import type { Exercise, RunResult } from '@/shared/types/exercises'
import type { AppDispatch, RootState } from '@/shared/lib/store'

export function useExerciseRunner(exercise: Exercise) {
  const dispatch = useDispatch<AppDispatch>()
  const savedProgress = useSelector(
    (state: RootState) => state.progress.exercises[exercise.slug],
  )

  const [code, setCode] = useState<string>(
    savedProgress?.lastCode ?? exercise.initialCode,
  )
  const [isRunning, setIsRunning] = useState(false)
  const [runResult, setRunResult] = useState<RunResult | null>(null)
  const engineRef = useRef<WorkerEngine | null>(null)

  useEffect(() => {
    engineRef.current = new WorkerEngine()
    return () => {
      engineRef.current?.terminate()
    }
  }, [])

  const run = async () => {
    if (!engineRef.current) return
    setIsRunning(true)
    try {
      const result = await engineRef.current.run(code, exercise.tests)
      setRunResult(result)
      const allPassed =
        result.results.length > 0 && result.results.every((r) => r.passed)
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
  }

  const reset = () => {
    setCode(exercise.initialCode)
    setRunResult(null)
  }

  return { code, setCode, run, reset, isRunning, runResult }
}
