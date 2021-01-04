/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
// 어려움..
const findItinerary = function (tickets) {
  const map = {};
  for (const ticket of tickets) {
    const [from, to] = ticket;
    if (from in map) {
      map[from].push(to);
    } else {
      map[from] = [to];
    }
  }

  for (const key of Object.keys(map)) {
    map[key].sort((t1, t2) => {
      return t1 < t2 ? -1 : 1;
    });
  }

  const start = "JFK";
  const result = [];

  function dfs(a) {
    while (a in map && map[a].length !== 0) {
      dfs(map[a].shift());
    }
    result.push(a);
  }

  dfs(start);
  return result.reverse();
};

console.log(
  findItinerary([
    ["JFK", "KUL"],
    ["JFK", "NRT"],
    ["NRT", "JFK"],
  ])
);
