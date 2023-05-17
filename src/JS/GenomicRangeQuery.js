function GenomicRangeQuery(S, P, Q) {
  const nucleotides = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };
  const N = S.length;
  const M = P.length;

  // initialize prefix sum array
  const prefixSum = [[0], [0], [0], [0]];

  // calculate prefixSum
  const result = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < 4; j++) {
      prefixSum[j][i + 1] = prefixSum[j][i];
    }
    prefixSum[nucleotides[S[i]] - 1][i + 1]++;
  }

  //Calculate minimum impactFactor
  for (let i = 0; i < M; i++) {
    const start = P[i];
    const end = Q[i];
    let min = Infinity;

    for (let j = 0; j < 4; j++) {
      const count = prefixSum[j][end + 1] - prefixSum[j][start];
      if (count > 0) {
        min = Math.min(min, j + 1);
      }
    }
    result.push(min);
  }

  return result;
}

console.log(GenomicRangeQuery("CAGCCTA", [2, 5, 0], [4, 5, 6]));
