# import itertools
# 틀린 답
# class Solution:
#     def threeSum(self, nums: [int]) -> [[int]]:
#         if len(nums) < 3:
#             return []

#         answer = set()
#         for left in range(len(nums)-2):
#             for right in range(len(nums)-1, left+1, -1):
#                 sum = nums[left]+nums[right]
#                 for middle in range(left+1, right):
#                     if sum+nums[middle] == 0:
#                         answer.add(
#                             tuple(sorted([nums[left], nums[middle], nums[right]])))

#         return [list(t)for t in list(answer)]

# 파이썬 알고리즘 인터뷰 책 참고
class Solution:
    def threeSum(self, nums: [int]) -> [[int]]:
        if len(nums) < 3:
            return []

        answer = []
        nums.sort()

        for i in range(len(nums)-2):
            if i > 0 and nums[i] == nums[i-1]:
                continue

            left, right = i+1, len(nums)-1
            while left < right:
                sum = nums[i]+nums[left]+nums[right]

                if sum < 0:
                    left += 1
                elif sum > 0:
                    right -= 1
                else:
                    answer.append([nums[i], nums[left], nums[right]])

                    while left < right and nums[left] == nums[left+1]:
                        left += 1
                    while left < right and nums[right] == nums[right-1]:
                        right -= 1
                    left += 1
                    right -= 1

        return answer


nums = [-1, 0, 1, 2, -1, -4]
s = Solution()
print(s.threeSum(nums))
