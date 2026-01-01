function firstNonRepeatingLetter(s) {
  let arr = s.split("").map((e) => e.toLowerCase());
  for (let i = 0; i < arr.length - 1; i++) {
    if (!arr.slice(i).includes(arr[i])) {
      return arr[i];
    }
  }
}

console.log(firstNonRepeatingLetter("moonmen"));
