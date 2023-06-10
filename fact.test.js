const fact = require('./fact');

test('fact 2 is 2', () => {
  expect(fact.factorial(2)).toBe(2);
});

test('fact 5 is 120', () => {
  expect(fact.factorial(5)).toBe(120);
});

test('fact 1 is 1', () => {
  expect(fact.factorial(1)).toBe(1);
});

test('fact -1 ', () => {
  expect(fact.factorial(-1)).toBe(
    'Error! Factorial for negative number does not exist.'
  );
});

test('fact 6 is 720', () => {
  expect(fact.factorial(6)).toBe(720);
});

test('fact -5 is ', () => {
  expect(fact.factorial(-5)).toBe(
    'Error! Factorial for negative number does not exist.'
  );
});
