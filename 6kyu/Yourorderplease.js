function order(words) {
  if (words.length == 0) {
    return "";
  }
  let sep = words.split(" ");
  let obj = {};
  for (let i = 0; i < sep.length; i++) {
    obj[sep[i].match(/[0-9]/)] = sep[i];
  }
  let t = "";
  for (let j = 1; j <= sep.length; j++) {
    t += obj[j];
    t += " ";
  }
  return t.trim();
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
