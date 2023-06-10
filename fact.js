function factorial(a) {
  if (a < 0) {
    return 'Error! Factorial for negative number does not exist.';
  } else if (a === 0) {
    return 1;
  } else {
    let fact = 1;
    for (i = 1; i <= a; i++) {
      fact *= i;
    }
    return fact;
  }
}

module.exports = {
  factorial,
};
