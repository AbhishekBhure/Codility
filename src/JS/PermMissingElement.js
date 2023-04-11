function PermMissingElement(A) {
  var SumOfAcctualArray = 0;
  const len = A.length + 1;
  let AP = (len * (len + 1)) / 2;

  for (let i = 0; i < A.length; i++) {
    SumOfAcctualArray += A[i];
  }
  //   console.log(AP);
  //   console.log(SumOfAcctualArray);
  const result = AP - SumOfAcctualArray;
  console.log(result);
  return result;
}
PermMissingElement([1, 2, 3, 4, 5, 6, 8, 9, 10]);
// A = [2, 3, 1, 5];
// sum = 0;
// n = 4 + 1; ---> n = 5;
// AP = (n / 2) * ( n + 1); ---> (5 / 2) * (5 + 6)
// AP = 2 * 11; ---> 22;

// 1 -> j = 0; j(0) < 4 ;
// sum = 0 + 2; ---> sum = 2; j++

// 2 -> j = 1; j(1) < 4;
// sum = 2 + 3; 5 j++

// 3 -> j =2; j(2) < 4;
// sum = 5 + 1; 6; j++

// 4 -> j =3; j(3) < 4;
// sum = 6 + 5; 11; j++

// 5 -> j =4; j(4) < 5;
// sum = 12 + 6; 18; j++

// 6 -> j =5; j(5) < 5; out of loop

// return 22 - 18; 4
