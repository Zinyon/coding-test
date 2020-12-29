class Solution:
    def productExceptSelf(self, nums: [int]) -> [int]:
        output = []

        p = 1
        for i in range(0, len(nums)):
            output.append(p)
            p = p*nums[i]

        p = 1
        for i in range(len(nums)-1, 0-1, -1):
            output[i] = output[i]*p
            p = p*nums[i]
        return output


s = Solution()
print(s.productExceptSelf([1, 2, 3, 4]))
# 1  1  2  6
# 24   12  4  1
