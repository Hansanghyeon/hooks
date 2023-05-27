import { pipe } from 'fp-ts/lib/function'
import * as R from 'fp-ts/lib/Record'
import { Ord } from 'fp-ts/string'
import { camelCase } from 'lodash'
import { useCallback, useState } from 'react'



// 모든 value의 Key를 카멜케이스로 변환하는 함수
// const camelizeKeys = <K extends Key>(value: { [key in K]: unknown }): { [key in K]: unknown } => {
//   const result: { [key in K]: unknown } = {} as { [key in K]: unknown }
//   for (const key in value) {
//     if (Object.prototype.hasOwnProperty.call(value, key)) {
//       result[camelCase(key)] = value[key]
//     }
//   }
//   return result
// }

type RecordObject = Record<string, unknown>;

function transformObjectKeys<T>(
  obj: RecordObject,
  transformFn: (key?: string) => T = <(v?: string) => T>camelCase
): RecordObject {
  return pipe(
    obj,
    R.reduceWithIndex(Ord)({}, (key, acc, value) => {
      const transformedKey = transformFn(key);
      const transformedValue =
        typeof value === 'object'
          ? transformObjectKeys(value as RecordObject, transformFn)
          : value;

      return {
        ...acc,
        [transformedKey as string]: transformedValue,
      };
    })
  );
}

export const useRemoveSpaceProgramming = <T extends RecordObject>(initialState: T): [T, (v: T) => void] => {
  const [value, setValue] = useState(transformObjectKeys(initialState))

  const setRemoveSpaceProgramming = useCallback(
    (tree: T) => setValue(tree),
    [setValue]
  )

  return [value as T, setRemoveSpaceProgramming]
}

export const useRSP = useRemoveSpaceProgramming
export default useRemoveSpaceProgramming