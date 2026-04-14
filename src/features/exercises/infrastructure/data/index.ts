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

// Number exercises
import { numberConstructorExercises } from './number/constructor'
import { numberEpsilonExercises } from './number/epsilon'
import { maxSafeIntegerExercises } from './number/maxSafeInteger'
import { maxValueExercises } from './number/maxValue'
import { minSafeIntegerExercises } from './number/minSafeInteger'
import { minValueExercises } from './number/minValue'
import { numberNaNExercises } from './number/numberNaN'
import { negativeInfinityExercises } from './number/negativeInfinity'
import { positiveInfinityExercises } from './number/positiveInfinity'
import { numberIsFiniteExercises } from './number/isFinite'
import { isIntegerExercises } from './number/isInteger'
import { numberIsNaNExercises } from './number/isNaN'
import { isSafeIntegerExercises } from './number/isSafeInteger'
import { numberParseFloatExercises } from './number/parseFloat'
import { numberParseIntExercises } from './number/parseInt'
import { toExponentialExercises } from './number/toExponential'
import { toFixedExercises } from './number/toFixed'
import { numberToLocaleStringExercises } from './number/numberToLocaleString'
import { toPrecisionExercises } from './number/toPrecision'
import { numberToStringExercises } from './number/numberToString'
import { numberValueOfExercises } from './number/numberValueOf'
// Math exercises
import { mathEExercises } from './math/e'
import { mathLn2Exercises } from './math/ln2'
import { mathLn10Exercises } from './math/ln10'
import { mathLog2EExercises } from './math/log2e'
import { mathLog10EExercises } from './math/log10e'
import { mathPiExercises } from './math/pi'
import { mathSqrt1_2Exercises } from './math/sqrt1_2'
import { mathSqrt2Exercises } from './math/sqrt2'
import { mathAbsExercises } from './math/abs'
import { mathAcosExercises } from './math/acos'
import { mathAcoshExercises } from './math/acosh'
import { mathAsinExercises } from './math/asin'
import { mathAsinhExercises } from './math/asinh'
import { mathAtanExercises } from './math/atan'
import { mathAtanhExercises } from './math/atanh'
import { mathAtan2Exercises } from './math/atan2'
import { mathCbrtExercises } from './math/cbrt'
import { mathCeilExercises } from './math/ceil'
import { mathClz32Exercises } from './math/clz32'
import { mathCosExercises } from './math/cos'
import { mathCoshExercises } from './math/cosh'
import { mathExpExercises } from './math/exp'
import { mathExpm1Exercises } from './math/expm1'
import { mathFloorExercises } from './math/floor'
import { mathFroundExercises } from './math/fround'
import { mathHypotExercises } from './math/hypot'
import { mathImulExercises } from './math/imul'
import { mathLogExercises } from './math/log'
import { mathLog1pExercises } from './math/log1p'
import { mathLog2Exercises } from './math/log2'
import { mathLog10Exercises } from './math/log10'
import { mathMaxExercises } from './math/max'
import { mathMinExercises } from './math/min'
import { mathPowExercises } from './math/pow'
import { mathRandomExercises } from './math/random'
import { mathRoundExercises } from './math/round'
import { mathSignExercises } from './math/sign'
import { mathSinExercises } from './math/sin'
import { mathSinhExercises } from './math/sinh'
import { mathSqrtExercises } from './math/sqrt'
import { mathTanExercises } from './math/tan'
import { mathTanhExercises } from './math/tanh'
import { mathTruncExercises } from './math/trunc'
// Date exercises
import { dateConstructorExercises } from './date/constructor'
import { dateNowExercises } from './date/now'
import { dateParsExercises } from './date/parse'
import { dateUTCExercises } from './date/utc'
import { dateGetFullYearExercises } from './date/getFullYear'
import { dateGetMonthExercises } from './date/getMonth'
import { dateGetDateExercises } from './date/getDate'
import { dateGetDayExercises } from './date/getDay'
import { dateGetHoursExercises } from './date/getHours'
import { dateGetMinutesExercises } from './date/getMinutes'
import { dateGetSecondsExercises } from './date/getSeconds'
import { dateGetMillisecondsExercises } from './date/getMilliseconds'
import { dateGetTimeExercises } from './date/getTime'
import { dateGetUTCFullYearExercises } from './date/getUTCFullYear'
import { dateGetUTCMonthExercises } from './date/getUTCMonth'
import { dateGetUTCDateExercises } from './date/getUTCDate'
import { dateSetFullYearExercises } from './date/setFullYear'
import { dateSetMonthExercises } from './date/setMonth'
import { dateSetDateExercises } from './date/setDate'
import { dateToISOStringExercises } from './date/toISOString'
import { dateToDateStringExercises } from './date/toDateString'
import { dateToUTCStringExercises } from './date/toUTCString'
import { dateToJSONExercises } from './date/toJSON'
import { dateValueOfExercises } from './date/dateValueOf'
// RegExp exercises
import { regexpConstructorExercises } from './regexp/constructor'
import { regexpSourceExercises } from './regexp/source'
import { regexpFlagsExercises } from './regexp/flags'
import { regexpGlobalExercises } from './regexp/global'
import { regexpIgnoreCaseExercises } from './regexp/ignoreCase'
import { regexpMultilineExercises } from './regexp/multiline'
import { regexpTestExercises } from './regexp/test'
import { regexpExecExercises } from './regexp/exec'
import { regexpToStringExercises } from './regexp/regexpToString'
// Map exercises
import { mapConstructorExercises } from './map/constructor'
import { mapSizeExercises } from './map/size'
import { mapSetExercises } from './map/set'
import { mapGetExercises } from './map/get'
import { mapHasExercises } from './map/has'
import { mapDeleteExercises } from './map/delete'
import { mapClearExercises } from './map/clear'
import { mapKeysExercises } from './map/keys'
import { mapValuesExercises } from './map/values'
import { mapEntriesExercises } from './map/entries'
import { mapForEachExercises } from './map/forEach'
// Set exercises
import { setConstructorExercises } from './set/constructor'
import { setSizeExercises } from './set/size'
import { setAddExercises } from './set/add'
import { setHasExercises } from './set/has'
import { setDeleteExercises } from './set/delete'
import { setClearExercises } from './set/clear'
import { setValuesExercises } from './set/values'
import { setKeysExercises } from './set/keys'
import { setEntriesExercises } from './set/entries'
import { setForEachExercises } from './set/forEach'
import { setUnionExercises } from './set/union'
import { setIntersectionExercises } from './set/intersection'
import { setDifferenceExercises } from './set/difference'
import { setSymmetricDifferenceExercises } from './set/symmetricDifference'
import { setIsSubsetOfExercises } from './set/isSubsetOf'
import { setIsSupersetOfExercises } from './set/isSupersetOf'
import { setIsDisjointFromExercises } from './set/isDisjointFrom'

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
  // Number exercises
  ...numberConstructorExercises,
  ...numberEpsilonExercises,
  ...maxSafeIntegerExercises,
  ...maxValueExercises,
  ...minSafeIntegerExercises,
  ...minValueExercises,
  ...numberNaNExercises,
  ...negativeInfinityExercises,
  ...positiveInfinityExercises,
  ...numberIsFiniteExercises,
  ...isIntegerExercises,
  ...numberIsNaNExercises,
  ...isSafeIntegerExercises,
  ...numberParseFloatExercises,
  ...numberParseIntExercises,
  ...toExponentialExercises,
  ...toFixedExercises,
  ...numberToLocaleStringExercises,
  ...toPrecisionExercises,
  ...numberToStringExercises,
  ...numberValueOfExercises,
  // Math exercises
  ...mathEExercises,
  ...mathLn2Exercises,
  ...mathLn10Exercises,
  ...mathLog2EExercises,
  ...mathLog10EExercises,
  ...mathPiExercises,
  ...mathSqrt1_2Exercises,
  ...mathSqrt2Exercises,
  ...mathAbsExercises,
  ...mathAcosExercises,
  ...mathAcoshExercises,
  ...mathAsinExercises,
  ...mathAsinhExercises,
  ...mathAtanExercises,
  ...mathAtanhExercises,
  ...mathAtan2Exercises,
  ...mathCbrtExercises,
  ...mathCeilExercises,
  ...mathClz32Exercises,
  ...mathCosExercises,
  ...mathCoshExercises,
  ...mathExpExercises,
  ...mathExpm1Exercises,
  ...mathFloorExercises,
  ...mathFroundExercises,
  ...mathHypotExercises,
  ...mathImulExercises,
  ...mathLogExercises,
  ...mathLog1pExercises,
  ...mathLog2Exercises,
  ...mathLog10Exercises,
  ...mathMaxExercises,
  ...mathMinExercises,
  ...mathPowExercises,
  ...mathRandomExercises,
  ...mathRoundExercises,
  ...mathSignExercises,
  ...mathSinExercises,
  ...mathSinhExercises,
  ...mathSqrtExercises,
  ...mathTanExercises,
  ...mathTanhExercises,
  ...mathTruncExercises,
  // Date exercises
  ...dateConstructorExercises,
  ...dateNowExercises,
  ...dateParsExercises,
  ...dateUTCExercises,
  ...dateGetFullYearExercises,
  ...dateGetMonthExercises,
  ...dateGetDateExercises,
  ...dateGetDayExercises,
  ...dateGetHoursExercises,
  ...dateGetMinutesExercises,
  ...dateGetSecondsExercises,
  ...dateGetMillisecondsExercises,
  ...dateGetTimeExercises,
  ...dateGetUTCFullYearExercises,
  ...dateGetUTCMonthExercises,
  ...dateGetUTCDateExercises,
  ...dateSetFullYearExercises,
  ...dateSetMonthExercises,
  ...dateSetDateExercises,
  ...dateToISOStringExercises,
  ...dateToDateStringExercises,
  ...dateToUTCStringExercises,
  ...dateToJSONExercises,
  ...dateValueOfExercises,
  // RegExp exercises
  ...regexpConstructorExercises,
  ...regexpSourceExercises,
  ...regexpFlagsExercises,
  ...regexpGlobalExercises,
  ...regexpIgnoreCaseExercises,
  ...regexpMultilineExercises,
  ...regexpTestExercises,
  ...regexpExecExercises,
  ...regexpToStringExercises,
  // Map exercises
  ...mapConstructorExercises,
  ...mapSizeExercises,
  ...mapSetExercises,
  ...mapGetExercises,
  ...mapHasExercises,
  ...mapDeleteExercises,
  ...mapClearExercises,
  ...mapKeysExercises,
  ...mapValuesExercises,
  ...mapEntriesExercises,
  ...mapForEachExercises,
  // Set exercises
  ...setConstructorExercises,
  ...setSizeExercises,
  ...setAddExercises,
  ...setHasExercises,
  ...setDeleteExercises,
  ...setClearExercises,
  ...setValuesExercises,
  ...setKeysExercises,
  ...setEntriesExercises,
  ...setForEachExercises,
  ...setUnionExercises,
  ...setIntersectionExercises,
  ...setDifferenceExercises,
  ...setSymmetricDifferenceExercises,
  ...setIsSubsetOfExercises,
  ...setIsSupersetOfExercises,
  ...setIsDisjointFromExercises,
]
