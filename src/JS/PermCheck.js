// function PermCheck(A) {
//   A.sort();
//   //   console.log(Math.max(...A));
//   if (Math.max(...A) === A.length) {
//     for (let i = 0; i < A.length; ++i) {
//       if (A[i] != i + 1) {
//         console.log(0);
//         return 0;
//       }
//     }
//     console.log(1);
//     return 1;
//   }
// }

function PermCheck(A) {
  const n = A.length;
  const count = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (A[i] > n) {
      console.log(0, "first if");
      return 0;
    }

    if (count[A[i] - 1] !== 0) {
      console.log(0, "second if");
      return 0;
    }

    count[A[i] - 1] = 1;
  }
  return 1;
}
console.log(PermCheck([4, 1, 3, 2]));
