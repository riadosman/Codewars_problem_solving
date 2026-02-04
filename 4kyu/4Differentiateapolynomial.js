function differentiate(equation, point) {
  let terms = equation.match(/(\+|-)?(\d+)?x\^?(\d+)?/g);
  let newDif = "";
  for (let i = 0; i < terms.length; i++) {
    if (/(\+|-)?(\d+)x\^(\d+)/.test(terms[i])) {
      // console.log("First");
      let cons = terms[i].split("x")[0];
      let pow = terms[i].split("x")[1].split("^");
      pow.shift();
      newDif +=
        cons * pow + "x" + (pow - 1 == 1 || pow == 1 ? "" : `^${pow - 1}`);
    } else if (/(\+|-)?(\d+)x/.test(terms[i])) {
      // console.log("Second");
      let cons = terms[i].split("x")[0];
      newDif += cons;
    } else if (/(\+|-)?x\^(\d+)/.test(terms[i])) {
      // console.log("Third");
      let op = terms[i].split("x")[0];
      let pow = terms[i].split("x")[1].split("^");
      pow.shift();
      newDif +=
        op +
        (pow == 1 ? "" : pow) +
        "x" +
        (pow - 1 == 1 || pow == 1 ? "" : `^${pow - 1}`);
    } else if (/(\+|-)?x/.test(terms[i])) {
      // console.log("Fourth");
      newDif += terms[i].split("x")[0] + "1";
    }
  }
  console.log(newDif);
}
differentiate("12x+2", 3);
differentiate("x^10", 3);
differentiate("12x^10", 3);
differentiate("3x^2-5x+7", 3);
differentiate("-x^3+4x", 3);
differentiate("x^2-x", 3);
differentiate("x^2+x", 3);
differentiate("3x^4-5x^2+10x+4", 3);
differentiate("x^1+2", 3);
differentiate("-x", 3);
// 12
// 10x^9
// 120x^9
// 6x-5
// -3x^2+4
// 2x-1
// 2x+1
// 12x^3-10x+10
// x
// -1
// console.log(/(\+|-)?(\d+)x\^(\d+)/.test("12x^5"));
// console.log(/(\+|-)?(\d+)x/.test("12x"));
// console.log(/(\+|-)?x\^(\d+)/.test("x^6"));
// console.log(/(\+|-)?x/.test("x"));
// console.log(/(\+|-)?\d+/.test("8"));
