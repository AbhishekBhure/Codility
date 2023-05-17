function solution(N = 529) {
  let binary = N.toString(2);
  let maxGap = 0;
  let cGap = 0;
  let counting = false;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      if (!counting) {
        counting = true;
      } else {
        maxGap = Math.max(maxGap, cGap);
      }
      cGap = 0;
    } else {
      cGap++;
    }
  }
  // console.log(maxGap);
  return maxGap;
}

console.log(solution());
