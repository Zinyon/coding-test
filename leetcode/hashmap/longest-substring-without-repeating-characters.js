/**
 * @param {string} s
 * @return {number}
 */
// 슬라이딩 윈도우, 투포인터
const lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let start = 0;
  let strMap = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in strMap && start <= strMap[s[i]]) {
      start = strMap[s[i]] + 1;
    } else {
      maxLen = Math.max(maxLen, i - start + 1);
    }
    strMap[s[i]] = i;
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
