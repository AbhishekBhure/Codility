function MissingInteger(A) {
  let sets = new Set();
  let num = 1;

  for (let i = 0; i < A.length; i++) {
    sets.add(A[i]);
  }

  while (sets.has(num)) {
    num++;
  }
  return num;
}

console.log(MissingInteger([1, 3, 6, 5, 4, 2]));
