function PermMissingElement(A) {
  var SumOfAcctualArray = 0;
  const len = A.length + 1;

  let AP = (len * (len + 1)) / 2;

  for (let i = 0; i < A.length; i++) {
    SumOfAcctualArray += A[i];
  }
  // const SumOfAcctualArray = A.reduce((acc, val) => acc + val, 0);

  const result = AP - SumOfAcctualArray;
  // console.log(result);
  return result;
}
console.log(PermMissingElement([2, 4, 3, 1, 6, 5, 8, 10, 9]));
