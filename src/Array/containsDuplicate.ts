export function containsDuplicate(nums: number[]): boolean {
  const seen: Record<number, boolean> = {}

  for (let num of nums) {
    if (seen[num]) return true
    seen[num] = true
  }

  return false
}
