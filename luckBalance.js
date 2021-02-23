const luckBalance = (k, contests) => {
  let luckTotal = 0;
  for (let idx = 0; idx < contests[0].length; idx += 1) {
    luckTotal += contests[0][idx];
  }

  console.log(luckTotal);
};

luckBalance(1, [
  [1, 2, 3],
  [1, 1, 0],
]);
