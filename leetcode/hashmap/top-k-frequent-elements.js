/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const map = {};

  nums.forEach((num) => {
    map[num] = num in map ? map[num] + 1 : 1;
  });

  return Object.keys(nums).filter((num) => map[num] >= k);
};
