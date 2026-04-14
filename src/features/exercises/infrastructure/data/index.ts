import type { Exercise } from '@/shared/types/exercises'
import { arrayFromString } from './array/demo'
import { constructorExercises } from './array/constructor'
import { staticSpeciesExercises } from './array/static-species'
import { fromExercises } from './array/from'
import { fromAsyncExercises } from './array/fromAsync'
import { isArrayExercises } from './array/isArray'
import { ofExercises } from './array/of'
import { atExercises } from './array/at'
import { concatExercises } from './array/concat'
import { copyWithinExercises } from './array/copyWithin'
import { entriesExercises } from './array/entries'
import { everyExercises } from './array/every'
import { fillExercises } from './array/fill'
import { filterExercises } from './array/filter'
import { findExercises } from './array/find'
import { findIndexExercises } from './array/findIndex'
import { findLastExercises } from './array/findLast'
import { findLastIndexExercises } from './array/findLastIndex'
import { flatExercises } from './array/flat'
import { flatMapExercises } from './array/flatMap'
import { forEachExercises } from './array/forEach'
import { includesExercises } from './array/includes'
import { indexOfExercises } from './array/indexOf'
import { joinExercises } from './array/join'
import { keysExercises } from './array/keys'
import { lastIndexOfExercises } from './array/lastIndexOf'
import { lengthExercises } from './array/length'
import { mapExercises } from './array/map'
import { popExercises } from './array/pop'
import { pushExercises } from './array/push'
import { reduceExercises } from './array/reduce'
import { reduceRightExercises } from './array/reduceRight'
import { reverseExercises } from './array/reverse'
import { shiftExercises } from './array/shift'
import { sliceExercises } from './array/slice'
import { someExercises } from './array/some'
import { sortExercises } from './array/sort'
import { spliceExercises } from './array/splice'
import { toReversedExercises } from './array/toReversed'
import { toSortedExercises } from './array/toSorted'
import { toSplicedExercises } from './array/toSpliced'
import { toStringExercises } from './array/toString'
import { unshiftExercises } from './array/unshift'
import { valuesExercises } from './array/values'
import { withExercises } from './array/with'
import { toLocaleStringExercises } from './array/toLocaleString'

export const allExercises: Exercise[] = [
  arrayFromString,
  ...constructorExercises,
  ...staticSpeciesExercises,
  ...fromExercises,
  ...fromAsyncExercises,
  ...isArrayExercises,
  ...ofExercises,
  ...atExercises,
  ...concatExercises,
  ...copyWithinExercises,
  ...entriesExercises,
  ...everyExercises,
  ...fillExercises,
  ...filterExercises,
  ...findExercises,
  ...findIndexExercises,
  ...findLastExercises,
  ...findLastIndexExercises,
  ...flatExercises,
  ...flatMapExercises,
  ...forEachExercises,
  ...includesExercises,
  ...indexOfExercises,
  ...joinExercises,
  ...keysExercises,
  ...lastIndexOfExercises,
  ...lengthExercises,
  ...mapExercises,
  ...popExercises,
  ...pushExercises,
  ...reduceExercises,
  ...reduceRightExercises,
  ...reverseExercises,
  ...shiftExercises,
  ...sliceExercises,
  ...someExercises,
  ...sortExercises,
  ...spliceExercises,
  ...toReversedExercises,
  ...toSortedExercises,
  ...toSplicedExercises,
  ...toStringExercises,
  ...unshiftExercises,
  ...valuesExercises,
  ...withExercises,
  ...toLocaleStringExercises,
]
