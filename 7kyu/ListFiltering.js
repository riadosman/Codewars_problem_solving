function filter_list(l) {
  return l.filter((e) => typeof e === "number");
} // Return a new array with the strings filtered out

filter_list([1, 2, "a", "b"]);
