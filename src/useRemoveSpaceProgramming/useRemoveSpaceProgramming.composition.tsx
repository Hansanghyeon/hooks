import { useRSP } from './useRemoveSpaceProgramming'

export default function () {
  const [result, setResult] = useRSP({
    camel_case: 'camelCase',
    snake_case: 'snake_case',
    PascalCase: 'PascalCase',
    'kebab-case': 'kebab-case',
    depth_test: {
      test_1: 'test',
      test_2: 'test2',
      test_3: 'test3'
    }
  })
  return <div>{JSON.stringify(result)}</div>
}
