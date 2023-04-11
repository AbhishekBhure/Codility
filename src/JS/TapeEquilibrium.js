function TapeEquilibrium(A) {
  let totalSum = 0;
  for (let i = 0; i < A.length; i++) {
    totalSum += A[i];
  }
  //   let totalSum = A.reduce((acc, val) => acc + val, 0);
  let leftSum = A[0];
  let rightSum = totalSum - leftSum;
  let minDiff = Math.abs(leftSum - rightSum);
  for (let i = 1; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];

    const diff = Math.abs(leftSum - rightSum);
    if (diff < minDiff) {
      minDiff = diff;
    }
  }
  console.log(minDiff, "minDiff");
  console.log(totalSum, "totalsum");
  console.log(leftSum, "leftsum");
  console.log(rightSum, "rightsum");
  return minDiff;
}

TapeEquilibrium([3, 1, 2, 4, 3]);
