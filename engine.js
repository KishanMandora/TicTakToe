function ticTacToe(xName, oName) {
  const X = "X";
  const O = "O";
  const currentPlayer = X;

  const players = {
    X: xName,
    O: oName,
  };

  const nextPlayer = {
    X: O,
    O: X,
  };

  const board = [
    "not started", // ongoing, X, O, draw, not started
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
    winningCombos.forEach((combo) => {
      const [a, b, c] = combo;
      if (board[a] === board[b] && board[b] === board[c]) {
        result = `winner is ${currentPlayer}`;
        return result;
      }
    });

    // check for a draw
    if (board.every((cell) => cell !== "")) {
      // checking every cell even when we want to check only 1 to 9 coz of the 0th index will always have a values
      result = "draw";
      return result;
    }

    return result;
  };

  return (player, move) => {
    // validate the rght player is playing
    if (player !== currentPlayer) {
      return [false, `Sorry, It's not ${currentPlayer}'s turn, try again`];
    }

    // validate the right move
    if (isValidMove(move)) {
      return [false, `Sorry, ${move} is not a valid move, try again`];
    }

    board[move] = currentPlayer;
    board[0] = getBoardStatus();
    currentPlayer = nextPlayer[currentPlayer];

    return [true];
  };
}
