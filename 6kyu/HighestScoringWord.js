function high(x) {
  let arr = [
    ...x.split(" ").map((j) =>
      j
        .split("")
        .map((e) => e.charCodeAt() - 96)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    ),
  ];
  return x.split(" ")[arr.indexOf(Math.max(...arr))];
}

high("take me to semynak");
high("AA BB");
high("what time are we climbing up the volcano");
console.log(high("what time are we climbing up the volcano"));
