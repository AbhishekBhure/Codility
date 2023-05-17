function ForgJump(X, Y, D) {
  const distance = Y - X;
  const jumps = Math.ceil(distance / D);

  // console.log(jumps);
  return jumps;
}

console.log(ForgJump(10, 200, 20));
