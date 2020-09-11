function solution(gems) {
  let l = 0;
  let r = 0;
  let dist = Infinity;
  let answer = [];

  const numOfGems = new Set(gems).size;
  const map = new Map();

  map.set(gems[0], 1);

  while (l >= 0 && r < gems.length && l <= r) {
    // 하나 이상씩 포함
    if (map.size === numOfGems) {
      if (dist > r - l) {
        dist = r - l;
        answer = [l + 1, r + 1];
      }
      map.set(gems[l], map.get(gems[l]) - 1);
      if (map.get(gems[l]) === 0) {
        map.delete(gems[l]);
      }
      l++;
    }
    // 물건이 부족함
    else {
      r++;
      if (map.has(gems[r])) {
        map.set(gems[r], map.get(gems[r]) + 1);
      } else map.set(gems[r], 1);
    }
  }

  return answer;
}

const test1 = [
  "DIA",
  "RUBY",
  "RUBY",
  "DIA",
  "DIA",
  "EMERALD",
  "SAPPHIRE",
  "DIA",
];
const test2 = ["AA", "AB", "AC", "AA", "AC"];
const test3 = ["XYZ", "XYZ", "XYZ"];
const test4 = ["ZZZ", "YYY", "NNNN", "YYY", "BBB"];
console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));
console.log(solution(test4));
