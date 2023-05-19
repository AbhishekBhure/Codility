function StoneWall(H) {
  const stack = [];
  let blocks = 0;

  for (let i = 0; i < H.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] > H[i]) {
      stack.pop();
    }
    if (stack.length === 0 || stack[stack.length - 1] < H[i]) {
      stack.push(H[i]);
      blocks++;
    }
  }
  return blocks;
}

console.log(StoneWall([8, 8, 5, 7, 9, 8, 7, 4, 8]));
