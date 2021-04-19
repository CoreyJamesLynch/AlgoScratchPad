const solveMeFirst = require('./solveMeFirst');

test(`Properly adds two values`, () => {
  expect(solveMeFirst(2, 3)).toBe(5);
});
