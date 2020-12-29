class Solution:
    def arrayPairSum(self, nums: [int]) -> int:
        sum = 0
        nums.sort()
        for i, n in enumerate(nums):
            if i % 2 == 0:
                sum += n

        return sum


s = Solution()
print(s.arrayPairSum([1, 4, 3, 2]))
print(s.arrayPairSum([6, 2, 6, 5, 1, 2]))
