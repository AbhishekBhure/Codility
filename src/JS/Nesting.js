function Nesting(S) {
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    if (char === "(") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return 0;
      }
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}
console.log(Nesting("(()(())())"));
