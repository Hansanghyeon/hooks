import { useCallback, useState } from 'react'
import * as R from 'fp-ts/Record'
import { camelCase } from 'lodash'

type Key = string
type Value = unknown

/**
 * Record 유틸리티 타입에서 제공하는 mapWithIndex 함수를 사용하여
 * Record의 키를 camelCase로 변환하고 새로운 Record를 반환하는 함수입니다.
 * fn의 기본값을 lodash의 camelCase로 설정했습니다.
 */
const convertKeys = <T extends Record<Key, Value>>(
  record: T,
  fn: (obj?: string) => string
): Record<Key, Value> =>
  R.mapWithIndex((key, value) => ({ [fn(key)]: value }))(record)

const useRemoveSpaceProgramming = <T extends Record<Key, Value>>(
  initialState: T,
  fn: (record?: string) => string = camelCase
): [T, (record: T) => void] => {
  const [state, setState] = useState(<T>convertKeys(initialState, fn))

  const setStateWithCamelCase = useCallback(
    (record: T) => setState(<T>convertKeys(record, fn)),
    [setState, fn]
  )

  return [state, setStateWithCamelCase]
}

export const useRSP = useRemoveSpaceProgramming

export default useRemoveSpaceProgramming

