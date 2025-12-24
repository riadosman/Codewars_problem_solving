// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s) {
  console.log(
    s
      .split("")
      .map((e, i) => e.toUpperCase() + e.toLowerCase().repeat(i))
      .join("-")
  );
}

accum("abcd");
accum("RqaEzty");
accum("cwAt");
