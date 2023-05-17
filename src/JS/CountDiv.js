function CountDiv(A, B, K) {
  let isDivisible = Math.floor(B / K) - Math.floor(A / K);

  if (A % K === 0) {
    isDivisible++;
  }
  if (B % K === 0) {
    isDivisible++;
  }
  return isDivisible;
}
console.log(CountDiv(0, 1, 11));
