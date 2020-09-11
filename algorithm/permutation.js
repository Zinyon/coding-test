/*
 * 		   1 		       2 		       3
 *    1    2    3     1    2    3	  1    2    3
 *   123  123  123	 123  123  123   123  123  123
 */

// depth : 단계  N: 숫자의 개수
const getPermutation = (target) => {
  const N = target.length;
  const result = [];
  let selected = [];
  let flag = [];

  const permutation = (depth, N) => {
    if (depth === N) {
      result.push(selected.slice());
      return;
    }

    for (let i = 0; i < N; i++) {
      if (flag[target[i]]) continue;
      flag[target[i]] = true;
      selected.push(target[i]);
      permutation(depth + 1, N);
      flag[target[i]] = false;
      selected.pop();
    }
  };

  permutation(0, N);
  return result;
};

console.log(getPermutation([1, 2, 4, 5]));
