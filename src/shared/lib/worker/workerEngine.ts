import type { TestCase, RunResult } from '@/shared/types/exercises'

const TIMEOUT_MS = 5000

export class WorkerEngine {
  private worker: Worker

  constructor() {
    this.worker = this.createWorker()
  }

  run(code: string, tests: TestCase[]): Promise<RunResult> {
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        this.reset()
        resolve({
          results: [],
          runtimeError: 'Execution timed out (5 second limit). Check for infinite loops.',
        })
      }, TIMEOUT_MS)

      const messageHandler = (event: MessageEvent<RunResult>) => {
        clearTimeout(timeout)
        this.worker.removeEventListener('message', messageHandler)
        this.worker.removeEventListener('error', errorHandler)
        resolve(event.data)
      }

      const errorHandler = (event: ErrorEvent) => {
        clearTimeout(timeout)
        this.worker.removeEventListener('message', messageHandler)
        this.worker.removeEventListener('error', errorHandler)
        resolve({ results: [], runtimeError: event.message })
      }

      this.worker.addEventListener('message', messageHandler)
      this.worker.addEventListener('error', errorHandler)
      this.worker.postMessage({ code, tests })
    })
  }

  /** Terminates the current worker and spawns a fresh one (used after timeout). */
  private reset() {
    this.worker.terminate()
    this.worker = this.createWorker()
  }

  private createWorker(): Worker {
    return new Worker(new URL('./executor.worker.ts', import.meta.url), { type: 'module' })
  }

  terminate() {
    this.worker.terminate()
  }
}
