// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
function sumDigPow(a, b) {
  // define Myarray
  // for on every element between a to b
  // return the number to string and split him digits
  // convert the every digit for number and calc the digit power of (index + 1)
  // sum the all values and check if its equal to my number
  // push the number to myarray
  let myarr = [];
  for (let i = a; i < b; i++) {
    let digits = String(i).split("");
    let sum = 0;
    for (let j = 0; j < digits.length; j++) {
      sum += digits[j] ** (j + 1);
    }
    if (sum == i) {
      myarr.push(i);
    }
  }
  return myarr;
}
console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(90, 150));
