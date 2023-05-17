function NumberOfDisIntersections(A) {
  const K = A.length;
  const MAX_INTERSECTIONS = 10000000;

  const endpoint = [];
  for (let i = 0; i < K; i++) {
    endpoint.push([i - A[i], 1]);
    endpoint.push([i + A[i], -1]);
  }

  endpoint.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  // console.log(endpoint);
}

console.log(NumberOfDisIntersections([1, 5, 2, 1, 4, 0]));
