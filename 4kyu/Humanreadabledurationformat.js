function formatDuration(seconds) {
  return Math.trunc(seconds / 60 / 60) % 60
    ? (Math.trunc(seconds / 60 / 60) % 60) + " hour"
    : "" + (Math.trunc(seconds / 60) % 60)
    ? (Math.trunc(seconds / 60) % 60) + " minutes"
    : "" + (seconds % 60)
    ? (seconds % 60) + " seconds"
    : "";
  // (Math.trunc(seconds / 60) % 60) +
  // " minutes " +
  // "and " +
  // (seconds % 60) +
  // " seconds";
}
console.log(formatDuration(62));
console.log(formatDuration(3600));
console.log(formatDuration(3662));
// console.log(Math.trunc(62 / 60 / 60) % 60 ? "dd" : "");
console.log(62 % 60 ? (62 % 60) + " seconds" : "");
