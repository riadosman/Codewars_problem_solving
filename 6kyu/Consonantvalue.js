function solve(s) {
  let v = "aeiou";
  s = s.toLowerCase();
  let arr = s.split(/(a|e|i|o|u)/gi).filter((e) => !v.includes(e));
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      let tal = arr[i][j].charCodeAt() - 96;
      sum += tal;
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
solve("zodiac");
solve("chruschtschov");
solve("khrushchev");
solve("strength");
