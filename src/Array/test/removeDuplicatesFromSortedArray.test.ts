import { removeDuplicates } from '../removeDuplicatesFromSortedArray'

describe('removeDuplicates', () => {
  test.each([
    { arr: [1, 1, 2], expected: 2 },
    { arr: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: 5 }
  ])('should return $expected for $arr', ({ arr, expected }) => {
    expect(removeDuplicates(arr)).toBe(expected)
  })
})
