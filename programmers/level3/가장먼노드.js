function solution(n, edge) {
  const graph = Array(n + 1)
    .fill(0)
    .map((_) => new Array());

  for (const [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const queue = [];
  const visit = Array(n + 1).fill(false);
  const minDist = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

  queue.push(1);
  minDist[0] = 0;
  minDist[1] = 0;

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const start = queue.shift();

      for (const node of graph[start]) {
        if (visit[node]) continue;
        queue.push(node);
        visit[node] = true;

        minDist[node] = minDist[node] > minDist[start] + 1 ? minDist[start] + 1 : minDist[node];
      }
    }
  }

  return minDist.filter((dist) => dist === Math.max(...minDist)).length;
}
