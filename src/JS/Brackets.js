function Brackets(S) {
  const n = S.length;
  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < n; i++) {
    if (S[i] in pairs) {
      stack.push(S[i]);
    } else {
      if (stack.length === 0) {
        console.log(0, "1st if");
        return 0;
      }
      const poped = stack.pop();
      if (S[i] !== pairs[poped]) {
        console.log(0, "2nd if");
        return 0;
      }
    }
    console.log(stack);
  }
  return stack.length === 0 ? 1 : 0;
}
console.log(Brackets("{()[]}"));
