import { containsDuplicate } from '../containsDuplicate'

describe('containsDuplicate', () => {
  test.each([
    { arr: [1, 2, 3, 1], expected: true },
    { arr: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], expected: true },
    { arr: [1, 2, 3, 4, 5], expected: false }
  ])('should return $expected for $arr', ({ arr, expected }) => {
    expect(containsDuplicate(arr)).toBe(expected)
  })
})
