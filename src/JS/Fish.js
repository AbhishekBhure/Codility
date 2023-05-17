function Fish(A, B) {
  const stack = [];
  let aliveFish = 0;

  for (let i = 0; i < A.length; i++) {
    const size = A[i];
    const direction = B[i];

    if (direction === 1) {
      stack.push(size);
    } else {
      while (stack.length > 0) {
        const topFishSize = stack[stack.length - 1];
        console.log(topFishSize);
        if (topFishSize > size) {
          break;
        } else {
          stack.pop();
        }
      }
      if (stack.length === 0) {
        aliveFish++;
      }
    }
  }
  aliveFish += stack.length;

  return aliveFish;
}
console.log(Fish([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));
