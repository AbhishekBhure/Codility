function OddOccurance(A = [9, 3, 9, 3, 9, 7, 9]) {
  const count = {};
  let num;
  let val;

  for (num of A) {
    if (num in count) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  console.log(Object.keys(count));
  for (val in count) {
    if (count[val] % 2 === 1) {
      return parseInt(val);
    }
  }
  return null;
}

console.log(OddOccurance());
