function dirReduc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      (arr[i] == "WEST" && arr[i + 1] == "SOUTH") ||
      (arr[i + 1] == "WEST" && arr[i] == "SOUTH")
    ) {
      arr.splice(i, 2);
    } else if (
      (arr[i] == "NORTH" && arr[i + 1] == "EAST") ||
      (arr[i + 1] == "NORTH" && arr[i] == "EAST")
    ) {
      arr.splice(i, 2);
    } else if (
      (arr[i] == "EAST" && arr[i + 1] == "WEST") ||
      (arr[i + 1] == "EAST" && arr[i] == "WEST")
    ) {
      arr.splice(i, 2);
    } else if (
      (arr[i] == "SOUTH" && arr[i + 1] == "NORTH") ||
      (arr[i + 1] == "SOUTH" && arr[i] == "NORTH")
    ) {
      arr.splice(i, 2);
    }
  }
  return arr;
}
console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
