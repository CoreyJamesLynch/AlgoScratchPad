const solveMeFirst = require('./solveMeFirst');

test(`Expects 2 + 3 to equal 5`, () => {
  expect(solveMeFirst(2, 3)).toBe(5);
});
