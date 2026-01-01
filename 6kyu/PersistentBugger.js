function persistence(num) {
  let count = 0;
  function regresive(numd) {
    let arr = numd.toString().split("");
    if (arr.length == 1) {
      return;
    }
    let total = 1;
    for (let i = 0; i < arr.length; i++) {
      total *= +arr[i];
    }
    count++;
    return regresive(total);
  }
  regresive(num);
  return count;
}
// console.log(persistence(45));
console.log(persistence(89));
// persistence(89);
// persistence(894);
