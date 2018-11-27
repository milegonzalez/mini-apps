// initiate players and board.
let playerOne = "X";
let playerTwo = "O";
let player;
let board;

//function newGame starts with an empty board that will be filled with X and O.
let newGame = function () {
  let player = playerOne;
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let squares = document.getElementsByClassName("square");
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = '';
    squares[i].addEventListener('click', XorO, true);
  }
}

let disableSquare = function () {
  let squares = document.getElementsByClassName("square");
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerText === "X" || squares[i].innerText === "O") {
      squares[i].removeEventListener('click', XorO, true);
    }
  }
}

let disableBoard = function () {
  let squares = document.getElementsByClassName("square");
  for (let i = 0; i < squares.length; i++) {
    squares[i].removeEventListener('click', XorO, true);
  }
}

//determine if there is a winning board and stop people from continuing to play
let winningBoard = function (board) {
  disableSquare();
  let winnerText = document.getElementsByClassName("scoreInfo");
  let squares = document.getElementsByClassName("square");
  //need to be refactored!!!!
  //first row
  if ("X" === squares[0].innerText && squares[1].innerText === squares[0].innerText && squares[2].innerText === squares[0].innerText) {
    winnerText[0].innerText = "X Won";
    disableBoard();
  }
  if ("O" === squares[0].innerText && squares[1].innerText === squares[0].innerText && squares[2].innerText === squares[0].innerText) {
    winnerText[0].innerText = "O Won";
    disableBoard();
  }
  //middle row
  if ("X" === squares[3].innerText && squares[5].innerText === squares[3].innerText && squares[4].innerText === squares[3].innerText) {
    winnerText[0].innerText = "X Won";
    disableBoard();
  }
  if ("0" === squares[3].innerText && squares[5].innerText === squares[3].innerText && squares[4].innerText === squares[3].innerText) {
    winnerText[0].innerText = "0 Won";
    disableBoard();
  }
  //last row
  if ("X" === squares[6].innerText && squares[7].innerText === squares[6].innerText && squares[8].innerText === squares[6].innerText) {
    winnerText[0].innerText = "X Won";
    disableBoard();
  }
  if ("O" === squares[6].innerText && squares[7].innerText === squares[6].innerText && squares[8].innerText === squares[6].innerText) {
    winnerText[0].innerText = "O Won";
    disableBoard();
  }
  //first column
  if ("X" === squares[0].innerText && squares[3].innerText === squares[0].innerText && squares[6].innerText === squares[3].innerText) {
    winnerText[0].innerText = "X Won";
    disableBoard();
  }
  if ("O" === squares[0].innerText && squares[3].innerText === squares[0].innerText && squares[6].innerText === squares[3].innerText) {
    winnerText[0].innerText = "O Won";
    disableBoard();
  }
  //center column
  if ("X" === squares[1].innerText && squares[4].innerText === squares[7].innerText && squares[1].innerText === squares[4].innerText) {
    winnerText[0].innerText = "X Won";
    disableBoard();
  }
  if ("O" === squares[1].innerText && squares[4].innerText === squares[7].innerText && squares[1].innerText === squares[4].innerText) {
    winnerText[0].innerText = "O Won";
    disableBoard();
  }
  //last column
  if ("X" === squares[2].innerText && squares[2].innerText === squares[8].innerText && squares[5].innerText === squares[2].innerText) {
    winnerText[0].innerText = "X Won";
    disableBoard();
  }
  if ("O" === squares[2].innerText && squares[2].innerText === squares[8].innerText && squares[5].innerText === squares[2].innerText) {
    winnerText[0].innerText = "O Won";
    disableBoard();
  }
  //diagonal one
  if ("X" === squares[0].innerText && squares[0].innerText === squares[4].innerText && squares[4].innerText === squares[8].innerText) {
    winnerText[0].innerText = "X Won";
    disableBoard();
  }
  if ("O" === squares[0].innerText && squares[0].innerText === squares[4].innerText && squares[4].innerText === squares[8].innerText) {
    winnerText[0].innerText = "O Won";
    disableBoard();
  }
  //diagonal two
  if ("X" === squares[2].innerText && squares[2].innerText === squares[4].innerText && squares[4].innerText === squares[6].innerText) {
    winnerText[0].innerText = "X Won";
    disableBoard();
  }
  if ("O" === squares[2].innerText && squares[2].innerText === squares[4].innerText && squares[4].innerText === squares[6].innerText) {
    winnerText[0].innerText = "O Won";
    disableBoard();
  } else if (board.indexOf(0) === -1) {
    winnerText[0].innerText = "Its a Tie!";
  }
}

//need to define how to change players.
let XorO = function (square) {
  var nextPlayerWording = document.getElementsByClassName("nextTurn");
  if (player === playerOne) {
    document.getElementById(square.path[0].id).innerText = "X";
    board[square.path[0].id] = "X";
    nextPlayerWording[0].innerText = "Next turn: Player O";
    //rremove event listener from the square
    player = playerTwo;
  } else {
    document.getElementById(square.path[0].id).innerText = "O";
    board[square.path[0].id] = "O";
    nextPlayerWording[0].innerText = "Next turn: Player X";
    player = playerOne;
  }
  winningBoard(board);
}

newGame();