function ticTacToe(xName, oName) {
  const X = "X";
  const O = "O";
  let currentPlayer = X;

  const players = {
    X: xName,
    O: oName,
  };

  const nextPlayer = {
    X: O,
    O: X,
  };

  // visual representation of the board updated by prettier
  const board = [
    "ongoing", // ongoing, X, O, draw,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const isValidMove = (move) => {
    return 1 <= move && move <= 9 && board[move] === "";
  };

  const getBoardStatus = () => {
    let result = "ongoing";
    const winningCombos = [
      [1, 2, 3], // top row
      [4, 5, 6], // middle row
      [7, 8, 9], // bottom row
      [1, 4, 7], // left column
      [2, 5, 8], // middle column
      [3, 6, 9], // right column
      [1, 5, 9], // diagonal top left to bottom right
      [3, 5, 7], // diagonal top right to bottom left
    ];

    // check for a winner
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (board[a] === board[b] && board[b] === board[c] && board[a] !== "") {
        result = `Congrats ${players[currentPlayer]} you have won the game!`;
        return result;
      }
    }

    // check for a draw
    if (board.every((cell) => cell !== "")) {
      // checking every cell even when we want to check only 1 to 9 coz of the 0th index will always have a values
      result = "draw";
      return result;
    }

    return result;
  };

  return (play, move) => {
    // validate the right play is playing
    if (play !== currentPlayer) {
      return [
        false,
        `Sorry ${players[currentPlayer]}, wrong play you need to enter ${currentPlayer}, try again`,
        board[0],
      ];
    }

    // validate the right move
    if (!isValidMove(move)) {
      return [
        false,
        `Sorry ${players[currentPlayer]}, ${move} is not a valid move, try again`,
        board[0],
      ];
    }

    board[move] = currentPlayer;
    board[0] = getBoardStatus();
    currentPlayer = nextPlayer[currentPlayer];

    return [true, board, board[0]];
  };
}

module.exports = ticTacToe;
