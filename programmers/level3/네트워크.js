function solution(n, computers) {
  let count = 0;
  let visit = Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (visit[i]) continue;
    // 각 노드별로 dfs
    dfs(n, i);
    count++;
  }

  function dfs(n, idx) {
    visit[idx] = true;

    for (let i = 0; i < n; i++) {
      // 자기자신
      if (i === idx) continue;
      // 방문한 노드
      if (visit[i]) continue;
      // 연결되있지 않은 노드
      if (computers[idx][i] === 0) continue;
      // 연결되있으면 계속해서 탐색
      dfs(n, i);
    }
  }

  return count;
}

let n = 3;
let computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
let result = 2;
console.log(solution(n, computers));

n = 3;
computers = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
];
result = 1;
console.log(solution(n, computers));
