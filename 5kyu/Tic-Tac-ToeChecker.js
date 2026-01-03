function isSolved(board) {
  let wons = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["02", "11", "20"],
  ];
  let xPlaces = [];
  let yPlaces = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == 1) {
        xPlaces.push(`${i}${j}`);
      }
      if (board[i][j] == 2) {
        yPlaces.push(`${i}${j}`);
      }
    }
  }
  for (let w = 0; w < wons.length; w++) {
    if (wons[w].every((v) => yPlaces.includes(v))) {
      return 2;
    }
    if (wons[w].every((v) => xPlaces.includes(v))) {
      return 1;
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == 0) {
        return -1;
      }
    }
  }
  return 0;
}

// Game still in progress → -1
console.log(
  isSolved([
    [0, 1, 2],
    [2, 1, 0],
    [0, 2, 1],
  ])
);

// X wins by row → 1
console.log(
  isSolved([
    [1, 1, 1],
    [2, 2, 0],
    [0, 0, 0],
  ])
);

// O wins by column → 2
console.log(
  isSolved([
    [2, 1, 0],
    [2, 1, 1],
    [2, 0, 0],
  ])
);

// X wins by main diagonal → 1
console.log(
  isSolved([
    [1, 2, 0],
    [0, 1, 2],
    [0, 0, 1],
  ])
);

// O wins by anti-diagonal → 2
console.log(
  isSolved([
    [1, 1, 2],
    [1, 2, 0],
    [2, 0, 0],
  ])
);

// Draw (cat’s game) → 0
console.log(
  isSolved([
    [1, 2, 1],
    [1, 2, 2],
    [2, 1, 1],
  ])
);

// Almost full, still playing → -1
console.log(
  isSolved([
    [1, 2, 1],
    [2, 1, 2],
    [2, 1, 0],
  ])
);
