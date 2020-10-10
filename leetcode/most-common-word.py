import collections
import re


class Solution:
    def mostCommonWord(self, paragraph: str, banned: [str]) -> str:
        paragraphList = [word for word in re.split(
            r'[\!\?\'\,\;\.\s]\s*', paragraph.lower()) if word not in banned]

        counter = collections.Counter(paragraphList)

        return counter.most_common(1)[0][0]


paragraph = "a, a, a, a, b,b,b,c, c"
banned = ["a"]

solution = Solution()
print(solution.mostCommonWord(paragraph, banned))
