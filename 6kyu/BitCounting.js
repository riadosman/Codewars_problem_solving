function countBits(n) {
  return n
    .toString(2)
    .split("")
    .filter((e) => e == "1").length;
}

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));
