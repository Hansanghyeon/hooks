import { renderHook } from '@testing-library/react'
import { useDeepMerge } from './useDeepMerge';
import { describe, expect, it } from 'vitest';

type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type User = {
  name: string;
  score: number | null;
  address: Address;
  emails: string[];
  hobbies: string[];
  another?: string;
};

describe('useDeepMerge hook', () => {
  it('Object assign을 사용한 병합', () => {
    const user = {
      name: 'John Doe',
      score: 5,
      address: {
        street: '123 Main Street',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
      },
      emails: ['john.doe@example.com'],
      hobbies: ['reading', 'traveling'],
    }

    const otherDate = {
      another: 'anotherValue',
    }

    const result = Object.assign(user, otherDate);

    expect(result).toStrictEqual({
      name: 'John Doe',
      score: 5,
      address: {
        street: '123 Main Street',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
      },
      emails: ['john.doe@example.com'],
      hobbies: ['reading', 'traveling'],
      another: 'anotherValue',
    })
  })
  it('두 객체를 병합한다.', () => {
    const { result } = renderHook(() => useDeepMerge<User>({
      name: 'John Doe',
      score: 5,
      address: {
        street: '123 Main Street',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
      },
      emails: ['john.doe@example.com'],
      hobbies: ['reading', 'traveling'],
    }, {
      another: 'anotherValue',
    }));

    expect(result.current[0]).toStrictEqual({
      name: 'John Doe',
      score: 5,
      address: {
        street: '123 Main Street',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
      },
      emails: ['john.doe@example.com'],
      hobbies: ['reading', 'traveling'],
      another: 'anotherValue',
    });
  });
});