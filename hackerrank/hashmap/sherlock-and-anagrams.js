// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
// string 정렬과 map을 활용하여 구현
function sherlockAndAnagrams(s) {
  const map = {};

  // 100 * 100 = 10000
  for (let i = 1; i < s.length; i++) {
    for (let j = 0; i + j <= s.length; j++) {
      let target = s
        .substr(j, i)
        .split("")
        .sort((a, b) => (a > b ? -1 : 1))
        .join("");
      if (target in map) {
        map[target]++;
      } else {
        map[target] = 1;
      }
    }
  }

  return [...Object.values(map)].reduce((acc, val) => acc + sum(val - 1), 0);
}

function sum(n) {
  if (n === 0) return n;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}
