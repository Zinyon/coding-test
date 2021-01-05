function solution(operations) {
  let queue = [];

  for (const operation of operations) {
    const [a, b] = operation.split(" ");

    if (a === "I") {
      queue.push(+b);
      queue.sort((a, b) => a - b);
    } else if (a === "D") {
      if (b === "1") {
        queue.pop();
      } else {
        queue.shift();
      }
    }
  }

  if (queue.length === 0) {
    return [0, 0];
  }

  return [Math.max(...queue), Math.min(...queue)];
}
