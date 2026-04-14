export interface ExerciseProgress {
  status: 'not-started' | 'attempted' | 'completed'
  attempts: number
  lastCode: string
  completedAt?: string
}

export interface ProgressState {
  exercises: Record<string, ExerciseProgress>
}
