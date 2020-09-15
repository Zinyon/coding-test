// 2020.09.15
// 구간 구분하기
const SEC = 999;

function solution(lines) {
  let answer = 0;
  let logArr = [];
  let logPointArr = [];

  for (const line of lines) {
    const endTime = new Date(line.split(' ').slice(0, 2)).getTime();
    const T = line.split(' ').slice(2)[0].slice(0, -1) * 1000;
    const startTime = endTime - T + 1;

    logArr.push({ startTime, T, endTime });

    logPointArr.push(endTime);
    logPointArr.push(startTime);
  }

  for (const logPoint of logPointArr) {
    const startPoint = logPoint;
    const endPoint = logPoint + SEC;
    let count = 0;

    for (const log of logArr) {
      const { startTime, T, endTime } = log;

      if (
        (startTime >= startPoint && startTime <= endPoint) ||
        (endTime >= startPoint && endTime <= endPoint) ||
        (startTime <= startPoint && endTime >= endPoint)
      ) {
        count++;
      }
    }

    answer = Math.max(count, answer);
  }

  return answer;
}

const tests = [
  ['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s'],
  ['2016-09-15 01:00:04.002 2.0s', '2016-09-15 01:00:07.000 2s'],
  [
    '2016-09-15 20:59:57.421 0.351s',
    '2016-09-15 20:59:58.233 1.181s',
    '2016-09-15 20:59:58.299 0.8s',
    '2016-09-15 20:59:58.688 1.041s',
    '2016-09-15 20:59:59.591 1.412s',
    '2016-09-15 21:00:00.464 1.466s',
    '2016-09-15 21:00:00.741 1.581s',
    '2016-09-15 21:00:00.748 2.31s',
    '2016-09-15 21:00:00.966 0.381s',
    '2016-09-15 21:00:02.066 2.62s',
  ],
];

for (const test of tests) {
  console.log(solution(test));
}
