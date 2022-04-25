/* Problem
	Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
	and nums[i] + nums[j] + nums[k] == 0.
*/

// Time Complexity O(n^2)
// Approach: Fix one item and convert the problem into 2sum

var threeSum = function (nums) {
  if (!nums || nums.length < 3) {
    return res
  }
  let res = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    let a = nums[i]
    if (i - 1 >= 0 && nums[i] === nums[i - 1]) continue

    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      let b = nums[l]
      let c = nums[r]
      let sum = a + b + c
      if (sum < 0) {
        l = l + 1
      } else if (sum > 0) {
        r = r - 1
      } else {
        res.push([a, b, c])
        while (l < r && nums[l] === b) {
          l = l + 1
        }
        while (l < r && nums[r] === c) {
          r = r - 1
        }
      }
    }
  }
  return res
}

const arr = [-1, 0, 1, 2, -1, -4]
const results = threeSum(arr)
console.log(results)
