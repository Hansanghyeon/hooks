import { pipe } from 'fp-ts/lib/function'
import * as R from 'fp-ts/lib/Record'
import { Ord } from 'fp-ts/string'
import { camelCase } from 'lodash'
import { useCallback, useState } from 'react'

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
export const useObj2KeyMap = useRemoveSpaceProgramming
export const obj2keyMap = transformObjectKeys