class Solution:
    def longestPalindrome(self, s: str) -> str:
        palindromeList = []

        for i in range(0, len(s)):
            j = len(s)
            while j > i:
                candidate = s[i:j]
                if candidate == candidate[::-1]:
                    break
                else:
                    j -= 1
            palindromeList.append(s[i:j])
        return max(palindromeList, key=len)


s = "babad"
solution = Solution()
print(solution.longestPalindrome(s))
