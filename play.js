const readline = require("readline");
const ticTacToe = require("./engine");

const args = process.argv.slice(2);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const [firstPlayer = "Luffy", secondPlayer = "Naruto"] = args;

const play = ticTacToe(firstPlayer, secondPlayer);

console.log(`Welcome to Tic Tac Toe! ${firstPlayer} vs ${secondPlayer}`);

let result, boardOrMsg, status;

function getPlayerInput(text, callback) {
  rl.question(text, callback);
}

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

function playGame(playerTurn) {
  getPlayerInput(`${playerTurn}'s turn: `, (playerInput) => {
    const [playerPlay, move] = playerInput.split(" ");
    [result, boardOrMsg, status] = play(playerPlay.toUpperCase(), move);
    result ? printBoard(boardOrMsg) : console.log(boardOrMsg);

    if (status === "ongoing") {
      const nextPlayer = !result
        ? playerTurn
        : playerTurn === firstPlayer
        ? secondPlayer
        : firstPlayer;

      playGame(nextPlayer);
    } else {
      console.log(status);
      rl.close();
    }
  });
}

playGame(firstPlayer);
