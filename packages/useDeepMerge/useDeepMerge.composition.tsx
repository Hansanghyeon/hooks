import { useDeepMerge } from './useDeepMerge'

function Composition() {
  const [result] = useDeepMerge(
    {
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
    }
  )
  return <pre>{JSON.stringify(result)}</pre>
}

export default Composition