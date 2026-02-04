function lastDigit(as) {
  let last = as.at(-1).toString().slice(-1);
  let tlast = as.at(-2).toString().slice(-1);

  console.log(`${last} => ${tlast}`);
}
lastDigit([2, 2, 2, 0]);
lastDigit([937640, 767456, 981242]);
lastDigit([7, 6, 21]);
lastDigit([12, 30, 21]);

// Description:
// For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

// E. g., with the input [3, 4, 2], your code should return 1 because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.

// Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.

// Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.

// This kata generalizes Last digit of a large number; you may find useful to solve it beforehand.
// it('Fixed tests', function() {
//   assert.strictEqual(lastDigit([]),           1);
//   assert.strictEqual(lastDigit([0, 0]),       1); // 0 ^ 0
//   assert.strictEqual(lastDigit([1, 2]),       1);
//   assert.strictEqual(lastDigit([ 0,  0,  0]), 0); // 0^(0 ^ 0) = 0^1 = 0
//   assert.strictEqual(lastDigit([ 3,  4,  5]), 1);
//   assert.strictEqual(lastDigit([ 4,  3,  6]), 4);
//   assert.strictEqual(lastDigit([ 7,  6, 21]), 1);
//   assert.strictEqual(lastDigit([12, 30, 21]), 6);
//   assert.strictEqual(lastDigit([2, 2, 2, 0]), 4);
//   assert.strictEqual(lastDigit([937640, 767456, 981242]), 0);
//   assert.strictEqual(lastDigit([123232, 694022, 140249]), 6);
//   assert.strictEqual(lastDigit([499942, 898102, 846073]), 6);
// });
