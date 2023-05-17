function FrogRiverOne(X, A) {
  const leaves = new Set();
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= X) {
      leaves.add(A[i]);
      if (leaves.size === X) {
        // console.log(i);
        return i;
      }
    }
  }
  return -1;
}

console.log(FrogRiverOne(6, [1, 3, 1, 4, 2, 3, 5, 4, 6, 5]));
