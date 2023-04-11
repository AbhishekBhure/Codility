function OddOccurance(A = [9, 9, 3, 3, 7, 6, 6, 6]) {
  const count = {};
  let num;
  let key;

  for (num of A) {
    if (num in count) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  for (key in count) {
    if (count[key] % 2 === 1) {
      console.log(parseInt(key));
    }
  }
  return null;
}

OddOccurance();
