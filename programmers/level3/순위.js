// A가 B를 이기면 A에게 이긴 사람들은 모두 B에게 이긴다.' 를 도출해내는 것이 핵심!
function solution(n, results) {
  const boards = Array.from(Array(n), () => Array(n).fill(0));

  for (const [winner, loser] of results) {
    boards[winner - 1][loser - 1] = 1;
    boards[loser - 1][winner - 1] = -1;
  }

  for (let i = 0; i < boards.length; i++) {
    const win = [];
    const lose = [];
    for (let j = 0; j < boards[i].length; j++) {
      if (boards[i][j] === 0) continue;
      if (boards[i][j] === 1) win.push(j);
      else if (boards[i][j] === -1) lose.push(j);
    }

    for (const w of win) {
      for (const l of lose) {
        boards[l][w] = 1;
        boards[w][l] = -1;
      }
    }
  }
  return boards.filter((board) => board.filter((b) => b === 0).length === 1).length;
}
