const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];
const STRAIGHT = 100;
const CORNER = 500;

function solution(board) {
  // bfs 돌면서 최소비용을 갱신, 중간에 최소비용보다 크면 종료.
  // 직선, 코너 구분
  let answer = [];
  const xLen = board.length;
  const yLen = board[0].length;

  const bfs = (dir) => {
    let queue = [];
    let check = Array.from(Array(xLen), () => new Array(yLen).fill(0));

    queue.push({ x: 0, y: 0, dir, cost: 0 });

    while (queue.length !== 0) {
      const { x, y, dir, cost } = queue.shift();

      if (x === xLen - 1 && y === yLen - 1) {
        answer.push(cost);
      }

      for (let i = 0; i < 4; i++) {
        // 후진방향이면 pass
        if (dir + 2 === i) continue;

        const [newX, newY, newDir] = [x + dx[i], y + dy[i], i];
        let newCost = dir === i ? cost + STRAIGHT : cost + CORNER + STRAIGHT;

        if (newX < 0 || newX >= xLen || newY < 0 || newY >= yLen) continue;
        if (board[newX][newY] === 1) continue;

        if (!check[newX][newY] || check[newX][newY] > newCost) {
          check[newX][newY] = newCost;
          queue.push({ x: newX, y: newY, dir: newDir, cost: newCost });
        }
      }
    }
  };

  bfs(3);
  bfs(2);

  return Math.min(...answer);
}

const tests = [
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
  ],
];

const answers = [900, 3800, 2100, 3200];

for (const test of tests) {
  console.log(solution(test));
}
