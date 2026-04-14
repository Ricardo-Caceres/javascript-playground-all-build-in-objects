'use client'

import { useDispatch, useSelector } from 'react-redux'
import type {
  ToolkitAppDispatch,
  ToolkitRootState,
} from '@/features/redux-toolkit/infrastructure/store'
import { selectToolkitCounterValue } from '@/features/redux-toolkit/presentation/store/selectors'
import { toolkitCounterActions } from '@/features/redux-toolkit/presentation/store/slices'
import { simulateToolkitSync } from '@/features/redux-toolkit/presentation/store/thunks'

export default function ReduxToolkitDemo() {
  const dispatch = useDispatch<ToolkitAppDispatch>()
  const counter = useSelector((state: ToolkitRootState) =>
    selectToolkitCounterValue(state),
  )

  return (
    <section className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Redux Toolkit
        </span>
        <h1 className="text-3xl font-semibold text-zinc-950">
          Store con slices, thunks y configureStore
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-zinc-600">
          Esta versión concentra la lógica en slices y reduce boilerplate. También
          deja preparado el espacio para thunks, selectors memoizados y listeners.
        </p>
      </div>

      <div className="grid gap-4 rounded-2xl bg-zinc-50 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="text-sm text-zinc-500">Valor actual</p>
          <p className="text-5xl font-semibold text-zinc-950">{counter}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white"
            onClick={() => dispatch(toolkitCounterActions.increment())}
            type="button"
          >
            Incrementar
          </button>
          <button
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950"
            onClick={() => dispatch(toolkitCounterActions.decrement())}
            type="button"
          >
            Decrementar
          </button>
          <button
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950"
            onClick={() => dispatch(toolkitCounterActions.reset())}
            type="button"
          >
            Reset
          </button>
          <button
            className="rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700"
            onClick={() => dispatch(simulateToolkitSync())}
            type="button"
          >
            Async +10
          </button>
        </div>
      </div>

      <div className="grid gap-3 text-sm text-zinc-600 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-4">
          <p className="font-medium text-zinc-950">Piezas clave</p>
          <p>slices</p>
          <p>selectors</p>
          <p>thunks</p>
          <p>listeners</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-4">
          <p className="font-medium text-zinc-950">Store</p>
          <p>configureStore</p>
          <p>Immer incluido</p>
          <p>Provider por página</p>
        </div>
      </div>
    </section>
  )
}
