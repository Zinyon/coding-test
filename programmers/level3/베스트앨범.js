// 해시맵 문제
function solution(genres, plays) {
  const genreMap = {};

  for (let i = 0; i < genres.length; i++) {
    if (genres[i] in genreMap) {
      genreMap[genres[i]].push({ idx: i, count: plays[i] });
    } else {
      genreMap[genres[i]] = [{ idx: i, count: plays[i] }];
    }
  }

  // Object.fromEntries
  const genreMapSorted = Object.fromEntries(
    Object.entries(genreMap).sort(([, a], [, b]) => {
      return (
        b.reduce((acc, cur) => acc + cur.count, 0) - a.reduce((acc, cur) => acc + cur.count, 0)
      );
    })
  );

  Object.entries(genreMapSorted).forEach((genre) => {
    genre[1].sort((a, b) => {
      if (b.count < a.count) return -1;
      else if (b.count === a.count) {
        return a.idx - b.idx;
      } else return 1;
    });
  });

  const result = [];

  for (const genre of Object.values(genreMapSorted)) {
    result.push(genre.shift().idx);
    if (genre.length > 0) {
      result.push(genre.shift().idx);
    }
  }

  return result;
}
