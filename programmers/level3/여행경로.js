// dfs
function solution(tickets) {
  const answer = [];

  const ticketMap = {};
  for (const [from, to] of tickets) {
    if (from in ticketMap) {
      ticketMap[from].push(to);
    } else {
      ticketMap[from] = [to];
    }
  }

  for (const key of Object.keys(ticketMap)) {
    ticketMap[key].sort((a, b) => {
      return a < b ? -1 : 1;
    });
  }

  const start = "ICN";

  dfs(start);

  function dfs(start) {
    while (start in ticketMap && ticketMap[start].length !== 0) {
      dfs(ticketMap[start].shift());
    }
    answer.push(start);
  }

  return answer.reverse();
}
