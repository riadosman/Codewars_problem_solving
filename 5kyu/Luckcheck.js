function luckCheck(ticket) {
  if (typeof ticket !== "string" || ticket.length === 0) {
    throw new Error();
  }
  let last = ticket
    .slice(-ticket.length / 2)
    .split("")
    .map((e) => +e)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let first = ticket
    .slice(0, ticket.length / 2)
    .split("")
    .map((e) => +e)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  if (last == first) {
    return true;
  } else {
    return false;
  }
}
console.log(luckCheck("683179"));
console.log(luckCheck("683000"));
console.log(luckCheck("6F43E8"));
console.log(luckCheck("17935"));
