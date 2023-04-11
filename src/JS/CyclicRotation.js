function CyclicRoatation(A = [1, 2, 3, 4, 5, 6], K = 2) {
  const len = A.length;

  //Noralise K to be with the range of [0, len -1]
  K = K % len;

  //Rotate the A to the right
  const result = [...A.slice(len - K), ...A.slice(0, len - K)];
  console.log(result);
  return result;
}

CyclicRoatation();
