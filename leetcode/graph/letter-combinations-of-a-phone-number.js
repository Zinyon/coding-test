/**
 * @param {string} digits
 * @return {string[]}
 */
const dics = {
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

//   a      b      c
// d e f  d e f  d e f

const letterCombinations = function (digits) {
  if (!digits) return [];
  const arr = [];

  dfs(0, "");

  function dfs(n, output) {
    if (n === digits.length) {
      arr.push(output);
      return;
    }
    for (let i = 0; i < dics[digits[n]].length; i++) {
      dfs(n + 1, output + dics[digits[n]][i]);
    }
  }

  return arr;
};

console.log(letterCombinations("2"));
