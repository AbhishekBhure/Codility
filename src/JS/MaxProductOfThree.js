function MaxProductOfThree(A) {
  A.sort((a, b) => a - b);
  const n = A.length;

  const m1 = A[n - 1];
  const m2 = A[n - 2];
  const m3 = A[n - 3];
  const min1 = A[0];
  const min2 = A[1];

  const product1 = m1 * m2 * m3;
  const product2 = m1 * min1 * min2;

  return Math.max(product1, product2);
}

console.log(MaxProductOfThree([-3, -1, -2, -2, -5, -6, -4]));
