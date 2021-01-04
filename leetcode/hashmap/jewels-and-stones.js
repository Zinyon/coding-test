/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function (jewels, stones) {
  const map = new Map();

  for (const stone of stones) {
    if (map.has(stone)) {
      map.set(stone, map.get(stone) + 1);
    } else {
      map.set(stone, 1);
    }
  }

  return jewels.split("").reduce((acc, jewel) => {
    return acc + (map.get(jewel) || 0);
  }, 0);
};
