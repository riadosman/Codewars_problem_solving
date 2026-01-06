function findMissingLetter(array) {
  let ascii = array.map((e) => e.charCodeAt());
  let myarr = [];
  for (let j = 0; j < ascii.length + 1; j++) {
    myarr.push(ascii[0] + j);
  }
  for (let i = 0; i < myarr.length; i++) {
    if (myarr[i] != ascii[i]) {
      return String.fromCharCode(myarr[i]);
    }
  }
}

// console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "P", "Q", "R", "T"]));
