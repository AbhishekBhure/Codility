function Dominator(A) {
  const stack = [];
  let x = -1;

  for (let i = 0; i < A.length; i++) {
    if (stack.length === 0) {
      stack.push[A[i]];
      x = i;
    } else if (stack[stack.length - 1] === A[i]) {
      stack.push[A[i]];
    } else {
      stack.pop();
    }
  }

  const y = stack.length > 0 ? stack[stack.length - 1] : -1;
  let count = 0;
  let index = -1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === y) {
      count++;
      index = i;
    }
  }

  return count > A.length / 2 ? index : -1;
}

console.log(Dominator([3, 4, 3, 2, 3, -1, 3, 3]));
