from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs: [str]) -> [[str]]:
        words_dict = defaultdict(list)
        for word in strs:
            words_dict["".join(sorted(word))].append(word)

        return words_dict.values()


strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
s = Solution()
print(s.groupAnagrams(strs))
