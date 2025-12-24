function twoSum(numbers, target) {
  // I think:
  // find the all combination of sums in numbers array
  // save the result with two position of the number which sumed to
  // for on the all results and find the one which is equal to target
  // return the two positions of the result siblings
  let sums = [];
  for (let col = 0; col < numbers.length; col++) {
    for (let row = 0; row < numbers.length; row++) {
      if (numbers[col] + numbers[row] == target && row !== col) {
        console.log(`${row}:${col} => ${target}`);
      }
    }
  }
}
twoSum([1, 2, 3], 4);
