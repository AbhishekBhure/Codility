function PassingCars(A) {
  let passingCars = 0;
  let carTravelingEast = 0;

  A.forEach((a) => {
    if (a === 0) {
      carTravelingEast++;
    } else {
      passingCars += carTravelingEast;
    }
  });

  if (passingCars > 1000000000) {
    return -1;
  } else {
    return passingCars;
  }
}

console.log(PassingCars([0, 1, 0, 1, 1]));
