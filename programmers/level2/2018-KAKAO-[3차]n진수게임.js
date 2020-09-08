function solution(n, t, m, p) {
  let num = 0;
  let arr = [];
  let answer = "";

  while (arr.length <= p - 1 + (t - 1) * m) {
    arr.push(...num.toString(n).split(""));
    num++;
  }

  for (let i = 0; i < t; i++) {
    answer += arr[p - 1 + i * m].toUpperCase();
  }

  return answer;
}
