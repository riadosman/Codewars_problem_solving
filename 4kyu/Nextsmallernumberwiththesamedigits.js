// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
function nextSmaller(n) {
  let x = String(n).split("");
  for (let i = n - 1; i > 0; i--) {
    let strn = String(i).split("");
    console.log(`${i} => i`);
    for (let j = 0; j < strn.length; j++) {
      if (x.includes(strn[j])) {
        // x[strn[j]] = null;
        console.log(`${x} => x`);
      }
    }
    if (x.every((cur) => cur == null)) {
      return i;
    }
  }
  return -1;
}
// console.log(nextSmaller(9));
// console.log(nextSmaller(111));
// console.log(nextSmaller(135));
console.log(nextSmaller(21));
