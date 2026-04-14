import { createAsyncThunk } from '@reduxjs/toolkit'

export const simulateToolkitSync = createAsyncThunk(
  'toolkit-counter/simulate-sync',
  async () => {
    await Promise.resolve()
    return true
  },
)
