function Distinct(A) {
  A.sort();
  let set = new Set();
  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
  }
  return set.size;
}

console.log(Distinct([2, 1, 1, 2, 3, 1]));
