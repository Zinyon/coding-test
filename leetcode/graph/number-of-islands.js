/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  if (!grid || grid.length === 0) return 0;

  let num = 0;

  const xLen = grid.length;
  const yLen = grid[0].length;

  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        num++;
      }
    }
  }

  function dfs(x, y) {
    if (x >= xLen || y >= yLen || x < 0 || y < 0) return;
    if (grid[x][y] !== "1") return;

    grid[x][y] = 0;

    for (let i = 0; i < 4; i++) {
      dfs(x + dx[i], y + dy[i]);
    }
  }

  return num;
};

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(grid));
