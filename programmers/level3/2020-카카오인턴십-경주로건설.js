const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];
const STRAIGHT = 100;
const CORNER = 500;

function solution(board) {
  // bfs 돌면서 최소비용을 갱신, 중간에 최소비용보다 크면 종료.
  // 직선, 코너 구분
  let minCost = Infinity;
  const xLen = board.length;
  const yLen = board[0].length;

  const bfs = () => {
    let queue = [];
    let map = [...board];

    // dir: 0 1 2 3
    let car = { x: 0, y: 0, dir: undefined, cost: 0 };

    queue.push(car);
    map[0][0] = 1;

    while (queue.length !== 0) {
      console.log(queue);
      let { x, y, dir, cost } = queue.shift();

      if (cost > minCost) continue;

      if (x === xLen - 1 && y === yLen - 1) {
        minCost = Math.min(minCost, cost);
        console.log(minCost);
        continue;
      }

      for (let i = 0; i < 4; i++) {
        let [newX, newY] = [x + dx[i], y + dy[i]];

        // board 밖으로 벗어나면 pass
        if (newX < 0 || newX > xLen - 1 || newY < 0 || newY > yLen - 1)
          continue;
        // 막혀있으면 pass
        if (board[newX][newY] === 1) continue;

        // 이전 방향으로 돌아가면 pass
        // if (
        //   (dir === 0 && i === 1) ||
        //   (dir === 1 && i === 0) ||
        //   (dir === 2 && i === 3) ||
        //   (dir === 3 && i === 2)
        // )
        //   continue;

        let newDir = i;

        // 비용 계산 : 출발지점이거나 방향이 같으면 직선, 그렇지 않으면 CORNER
        let newCost =
          cost +
          (dir === undefined || (dir + newDir) % 2 === 0
            ? STRAIGHT
            : CORNER + STRAIGHT);

        // 합계비용이 최소비용을 넘어서면 pass
        if (map[newX][newY] === 0 && map[newX][newY] >= newCost) {
          map[newX][newY] = newCost;
          queue.push({ x: newX, y: newY, dir: newDir, cost: newCost });
        }
      }
    }
  };

  bfs();

  return minCost;
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

// for (const test of tests) {
//   console.log(solution(test));
// }
console.log(solution(tests[1]));
