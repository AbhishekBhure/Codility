function MaxProfit(P) {
  let max = 0;
  let min = Infinity;

  P.forEach((p) => {
    min = Math.min(min, p);
    max = Math.max(max, p - min);
  });
  //   for (let i = 0; i < P.length; i++) {
  //     if (P[i] < min) {
  //       min = P[i];
  //     } else if (P[i] - max > min) {
  //       max = P[i] - min;
  //     }
  //   }
  return max;
}

console.log(MaxProfit([23171, 21011, 21123, 21366, 21013, 21367]));
