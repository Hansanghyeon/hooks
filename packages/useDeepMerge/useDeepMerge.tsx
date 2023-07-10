import { useCallback, useState } from "react"
import { pipe } from 'fp-ts/function'

const isObject = (obj: any): obj is Record<string, any> =>
  obj !== null && typeof obj === 'object';

export const deepMerge =
  <T extends Record<string, any>>(source: T) =>
  (target: T): T => {
    let output: Partial<T> = Object.assign({}, source);

    if (isObject(source) && isObject(target)) {
      if (Array.isArray(source) && Array.isArray(target)) {
        output = [...source, ...target] as unknown as T;
      } else {
        Object.keys(target).forEach((key) => {
          if (
            isObject(source[key as keyof typeof source]) &&
            isObject(target[key as keyof typeof target])
          ) {
            output[key as keyof T] = deepMerge(
              source[key as keyof typeof source]
            )(target[key as keyof typeof target]);
          } else {
            output[key as keyof T] = target[key as keyof typeof target];
          }
        });
      }
    }

    return output as T;
  };


export const useDeepMerge = <T extends Record<string, any>>(obj: T, merge: Record<string, any>) => {
  const [value, setValue] = useState(pipe(obj, deepMerge(merge)))

  const setDeppMerge = useCallback(
    (tree: T) => setValue(tree),
    [setValue]
  )

  return [value, setDeppMerge]
}
