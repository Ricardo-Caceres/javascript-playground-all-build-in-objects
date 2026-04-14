'use client'

import { useDispatch, useSelector } from 'react-redux'
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from '@/features/redux-legacy/presentation/store/actions'
import type { LegacyRootState } from '@/features/redux-legacy/presentation/store/reducers'
import { selectLegacyCounterValue } from '@/features/redux-legacy/presentation/store/selectors'

export default function LegacyReduxDemo() {
  const dispatch = useDispatch()
  const counter = useSelector((state: LegacyRootState) =>
    selectLegacyCounterValue(state),
  )

  return (
    <section className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Redux legacy
        </span>
        <h1 className="text-3xl font-semibold text-zinc-950">
          Store con acciones, reducers y selectors separados
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-zinc-600">
          Esta versión usa action types, action creators y reducers manuales con
          {' '}legacy_createStore. Sirve para visualizar la separación clásica de Redux.
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
            onClick={() => dispatch(incrementCounter())}
            type="button"
          >
            Incrementar
          </button>
          <button
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950"
            onClick={() => dispatch(decrementCounter())}
            type="button"
          >
            Decrementar
          </button>
          <button
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950"
            onClick={() => dispatch(resetCounter())}
            type="button"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid gap-3 text-sm text-zinc-600 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-4">
          <p className="font-medium text-zinc-950">Piezas clave</p>
          <p>actions</p>
          <p>action-types</p>
          <p>reducers</p>
          <p>selectors</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-4">
          <p className="font-medium text-zinc-950">Store</p>
          <p>legacy_createStore</p>
          <p>combineReducers</p>
          <p>Provider por página</p>
        </div>
      </div>
    </section>
  )
}
