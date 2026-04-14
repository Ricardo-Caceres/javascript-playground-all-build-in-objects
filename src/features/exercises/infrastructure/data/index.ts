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

// String exercises
import { stringConstructorExercises } from './string/constructor'
import { fromCharCodeExercises } from './string/fromCharCode'
import { fromCodePointExercises } from './string/fromCodePoint'
import { rawExercises } from './string/raw'
import { stringAtExercises } from './string/at'
import { charAtExercises } from './string/charAt'
import { charCodeAtExercises } from './string/charCodeAt'
import { codePointAtExercises } from './string/codePointAt'
import { stringConcatExercises } from './string/concat'
import { endsWithExercises } from './string/endsWith'
import { stringIncludesExercises } from './string/includes'
import { stringIndexOfExercises } from './string/indexOf'
import { isWellFormedExercises } from './string/isWellFormed'
import { stringLastIndexOfExercises } from './string/lastIndexOf'
import { localeCompareExercises } from './string/localeCompare'
import { matchExercises } from './string/match'
import { matchAllExercises } from './string/matchAll'
import { normalizeExercises } from './string/normalize'
import { padEndExercises } from './string/padEnd'
import { padStartExercises } from './string/padStart'
import { repeatExercises } from './string/repeat'
import { replaceExercises } from './string/replace'
import { replaceAllExercises } from './string/replaceAll'
import { searchExercises } from './string/search'
import { stringSliceExercises } from './string/slice'
import { splitExercises } from './string/split'
import { startsWithExercises } from './string/startsWith'
import { substringExercises } from './string/substring'
import { toLocaleLowerCaseExercises } from './string/toLocaleLowerCase'
import { toLocaleUpperCaseExercises } from './string/toLocaleUpperCase'
import { toLowerCaseExercises } from './string/toLowerCase'
import { stringToStringExercises } from './string/toString'
import { toUpperCaseExercises } from './string/toUpperCase'
import { toWellFormedExercises } from './string/toWellFormed'
import { trimExercises } from './string/trim'
import { trimEndExercises } from './string/trimEnd'
import { trimStartExercises } from './string/trimStart'
import { valueOfExercises } from './string/valueOf'
import { stringLengthExercises } from './string/length'

// Object exercises
import { objectConstructorExercises } from './object/constructor'
import { assignExercises } from './object/assign'
import { createExercises } from './object/create'
import { definePropertiesExercises } from './object/defineProperties'
import { definePropertyExercises } from './object/defineProperty'
import { objectEntriesExercises } from './object/entries'
import { freezeExercises } from './object/freeze'
import { fromEntriesExercises } from './object/fromEntries'
import { getOwnPropertyDescriptorExercises } from './object/getOwnPropertyDescriptor'
import { getOwnPropertyDescriptorsExercises } from './object/getOwnPropertyDescriptors'
import { getOwnPropertyNamesExercises } from './object/getOwnPropertyNames'
import { getOwnPropertySymbolsExercises } from './object/getOwnPropertySymbols'
import { getPrototypeOfExercises } from './object/getPrototypeOf'
import { groupByExercises } from './object/groupBy'
import { hasOwnExercises } from './object/hasOwn'
import { objectIsExercises } from './object/is'
import { isExtensibleExercises } from './object/isExtensible'
import { isFrozenExercises } from './object/isFrozen'
import { isSealedExercises } from './object/isSealed'
import { objectKeysExercises } from './object/keys'
import { preventExtensionsExercises } from './object/preventExtensions'
import { sealExercises } from './object/seal'
import { setPrototypeOfExercises } from './object/setPrototypeOf'
import { objectValuesExercises } from './object/values'
import { hasOwnPropertyExercises } from './object/hasOwnProperty'
import { isPrototypeOfExercises } from './object/isPrototypeOf'
import { propertyIsEnumerableExercises } from './object/propertyIsEnumerable'
import { objectToLocaleStringExercises } from './object/toLocaleString'
import { objectToStringExercises } from './object/toString'
import { objectValueOfExercises } from './object/valueOf'

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
  // String exercises
  ...stringConstructorExercises,
  ...fromCharCodeExercises,
  ...fromCodePointExercises,
  ...rawExercises,
  ...stringAtExercises,
  ...charAtExercises,
  ...charCodeAtExercises,
  ...codePointAtExercises,
  ...stringConcatExercises,
  ...endsWithExercises,
  ...stringIncludesExercises,
  ...stringIndexOfExercises,
  ...isWellFormedExercises,
  ...stringLastIndexOfExercises,
  ...localeCompareExercises,
  ...matchExercises,
  ...matchAllExercises,
  ...normalizeExercises,
  ...padEndExercises,
  ...padStartExercises,
  ...repeatExercises,
  ...replaceExercises,
  ...replaceAllExercises,
  ...searchExercises,
  ...stringSliceExercises,
  ...splitExercises,
  ...startsWithExercises,
  ...substringExercises,
  ...toLocaleLowerCaseExercises,
  ...toLocaleUpperCaseExercises,
  ...toLowerCaseExercises,
  ...stringToStringExercises,
  ...toUpperCaseExercises,
  ...toWellFormedExercises,
  ...trimExercises,
  ...trimEndExercises,
  ...trimStartExercises,
  ...valueOfExercises,
  ...stringLengthExercises,
  // Object exercises
  ...objectConstructorExercises,
  ...assignExercises,
  ...createExercises,
  ...definePropertiesExercises,
  ...definePropertyExercises,
  ...objectEntriesExercises,
  ...freezeExercises,
  ...fromEntriesExercises,
  ...getOwnPropertyDescriptorExercises,
  ...getOwnPropertyDescriptorsExercises,
  ...getOwnPropertyNamesExercises,
  ...getOwnPropertySymbolsExercises,
  ...getPrototypeOfExercises,
  ...groupByExercises,
  ...hasOwnExercises,
  ...objectIsExercises,
  ...isExtensibleExercises,
  ...isFrozenExercises,
  ...isSealedExercises,
  ...objectKeysExercises,
  ...preventExtensionsExercises,
  ...sealExercises,
  ...setPrototypeOfExercises,
  ...objectValuesExercises,
  ...hasOwnPropertyExercises,
  ...isPrototypeOfExercises,
  ...propertyIsEnumerableExercises,
  ...objectToLocaleStringExercises,
  ...objectToStringExercises,
  ...objectValueOfExercises,
]
