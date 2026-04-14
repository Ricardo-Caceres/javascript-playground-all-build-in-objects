import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/shared/lib/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
