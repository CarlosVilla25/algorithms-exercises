/**
 * @function removeDuplicates
 * @description removes duplicates from a sorted array in-place uch that each unique element appears only once.
 * The relative order of the elements is preserved. Returns the numberof unique elements in the array.
 *
 * This function modifies the original array by placing the unique elements at the beginning.
 * The elements beyond the returned count are not important.
 *
 * @param {number[]} nums - A sorted array of integers (non-decreasing order)
 * @returns {number} The number of unique elements in the array
 *
 */

export function removeDuplicates(nums: number[]): number {
  let uniqueCount = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueCount]) {
      uniqueCount++
      nums[uniqueCount] = nums[i]
    }
  }

  return uniqueCount + 1
}
