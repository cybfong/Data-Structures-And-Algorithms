// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Resource : https://leetcode.com/problems/two-sum/description/

const twoSum = (input, target) => {
  const map = new Map();
  const result = new Array();

  // console.log(input, target);

  // O(n)
  for (let i = 0; i < input.length; i++) {
    const tmp = target - input[i];
    // console.log(tmp);

    if (!map.size) {
      map.set(tmp, i);
    } else {
      // try and find if compliment exist
      if (map.has(input[i])) {
        result.push(map.get(input[i]), i);
      } else {
        map.set(tmp, i);
      }
    }
  }

  // console.log(map);
  // console.log(result);
  return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
