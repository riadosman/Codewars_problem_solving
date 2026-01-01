function rgb(r, g, b) {
  return `#${Math.abs(r).toString(16)}${Math.abs(g).toString(16)}${Math.abs(
    b
  ).toString(16)}`;
}
console.log(Math.abs(255).toString(16));

console.log(rgb([148, 0, 211]));
