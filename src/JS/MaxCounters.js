function MaxCounters(N, A) {
  let counters = new Array(N).fill(0);
  let maxCount = 0;
  let applyMax = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      counters[A[i] - 1] = Math.max(counters[A[i] - 1], applyMax);
      counters[A[i] - 1]++;
      maxCount = Math.max(maxCount, counters[A[i] - 1]);
    } else {
      applyMax = maxCount;
    }
  }

  for (let i = 0; i < N; i++) {
    counters[i] = Math.max(counters[i], applyMax);
  }
  return counters;
}

console.log(MaxCounters(5, [3, 4, 4, 6, 1, 4, 4]));
