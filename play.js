const ticTacToe = require("./engine");

console.log("Welcome to Tic Tac Toe!", ticTacToe);
const play = ticTacToe("Luffy", "Naruto");

let result, boardOrMsg;

function printBoard(board) {
  console.log("Board:");
  for (let i = 1; i <= 9; i += 3) {
    for (let j = i; j < i + 3; j++) {
      process.stdout.write(board[j] ? board[j] + " " : "_ ");
    }
    process.stdout.write("\n");
  }
  process.stdout.write("\n");
}

[result, boardOrMsg] = play("X", 1);
result ? printBoard(boardOrMsg) : console.log(boardOrMsg);

[result, boardOrMsg] = play("O", 2);
result ? printBoard(boardOrMsg) : console.log(boardOrMsg);

[result, boardOrMsg] = play("X", 4);
result ? printBoard(boardOrMsg) : console.log(boardOrMsg);

[result, boardOrMsg] = play("O", 5);
result ? printBoard(boardOrMsg) : console.log(boardOrMsg);

[result, boardOrMsg] = play("X", 10);
result ? printBoard(boardOrMsg) : console.log(boardOrMsg);
