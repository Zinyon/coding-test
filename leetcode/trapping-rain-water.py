class Solution:

    def trap(self, height: [int]) -> int:
        trapCount = 0
        idx = 1
        while idx < len(height)-1:
            highest = self.findHighest(idx, height)
            if highest <= height[idx]:
                idx += 1
                continue
            trapCount += highest-height[idx]
            idx += 1

        return trapCount

    def findHighest(self, idx: int, height: [int]) -> int:
        maxLeft = 0
        if idx == 1:
            maxLeft = height[0]
        elif idx > 1:
            maxLeft = max(height[0:idx])
        maxRight = 0
        if idx == len(height)-2:
            maxRight = height[len(height)-1]
        else:
            maxRight = max(height[idx+1:])
        return min([maxLeft, maxRight])


input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
output = 6
s = Solution()
print(s.trap([4, 2, 0, 3, 2, 5]))

# two pointer


def trap(self, height: List[int]) -> int:
    if not height:
        return 0

    volume = 0
    left, right = 0, len(height)-1
    left_max, right_max = height[left], height[right]

    while left < right:
        left_max, right_max = max(height[left], left_max), max(
            height[right], right_max)

        if left_max <= right_max:
            volume += left_max-height[left]
            left += 1
        else:
            volume += right_max-height[right]
            right -= 1

    return volume
