import { renderHook } from '@testing-library/react'
import { useRemoveSpaceProgramming } from './useRemoveSpaceProgramming';
import { describe, expect, it } from 'vitest';

describe('useRemoveSpaceProgramming hook', () => {
  it('객체의 키를 카멜케이스로 변경한다.', () => {
    const { result } = renderHook(() => useRemoveSpaceProgramming({
      camel_case: 'camelCase',
      snake_case: 'snake_case',
      PascalCase: 'PascalCase',
      'kebab-case': 'kebab-case',
      depth_test: {
        test_1: 'test',
        test_2: 'test2',
        test_3: 'test3'
      }
    }));
    expect(result.current[0]).toStrictEqual({
      camelCase: 'camelCase',
      snakeCase: 'snake_case',
      pascalCase: 'PascalCase',
      kebabCase: 'kebab-case',
      depthTest: {
        test1: 'test',
        test2: 'test2',
        test3: 'test3'
      }
    });
  });
});