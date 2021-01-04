function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  let answer = 0;

  const queue = [begin];

  while (queue.length !== 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const word = queue.shift();
      if (word === target) return answer;
      const list = getChangableWords(word, words);
      queue.push(...list);
    }
    answer++;
  }

  return answer;
}

function getChangableWords(begin, words) {
  const size = begin.length;
  const result = [];

  for (const word of words) {
    let count = 0;
    for (let i = 0; i < size; i++) {
      if (begin[i] === word[i]) continue;
      count++;
      if (count >= 2) break;
    }
    if (count === 1) result.push(word);
  }

  return result;
}
