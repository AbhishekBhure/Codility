function EquiLeader(A) {
  const stack = [];
  let leaderCount = 0;
  let leader;

  // Find the leader element using the "stack" algorithm
  for (let i = 0; i < A.length; i++) {
    if (stack.length === 0) {
      stack.push(A[i]);
    } else if (stack[stack.length - 1] === A[i]) {
      stack.push(A[i]);
    } else {
      stack.pop();
    }
  }

  // If there is no leader element, return 0
  if (stack.length === 0) {
    return 0;
  }

  // Find the candidate leader element
  leader = stack[0];

  // Count the occurrences of the candidate leader element
  for (let i = 0; i < A.length; i++) {
    if (A[i] === leader) {
      leaderCount++;
    }
  }
  //   console.log(leaderCount, "leaderCount");
  //   console.log(leader, "leader");

  // If the candidate leader is not a leader, return 0
  if (leaderCount <= A.length / 2) {
    return 0;
  }

  let equiLeaderCount = 0;
  let leftLeaderCount = 0;

  // Check each element if it is a potential equi leader
  for (let i = 0; i < A.length; i++) {
    if (A[i] === leader) {
      leftLeaderCount++;
    }

    if (
      leftLeaderCount > (i + 1) / 2 &&
      leaderCount - leftLeaderCount > (A.length - i - 1) / 2
    ) {
      equiLeaderCount++;
    }
  }

  return equiLeaderCount;
}

console.log(EquiLeader([4, 3, 4, 4, 4, 2]));
