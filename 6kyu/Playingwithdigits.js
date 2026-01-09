function digPow(n, p) {
  let nums = n
    .toString()
    .split("")
    .map((e, i) => e ** (p + i))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return (nums / n) % 1 == 0 ? nums / n : -1;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));