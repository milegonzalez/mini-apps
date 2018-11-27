// initiate players and board.
let playerOne = "X";
let playerTwo = "O";
let player;
let board;

//Create an array with all possible winning solutions.
let winningSolutions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]


//function newGame starts with an empty board that will be filled with X and O.
let newGame = function () {
  let player = playerOne;
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let squares = document.getElementsByClassName("square");
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = '';
    squares[i].addEventListener('click', XorO, false);
  }
}

//determine if there is a winning board and stop people from continuing to play
let winningBoard = function (board) {
  let winningCombo = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 'X') {
      winningCombo.push(i);
    }
  }
  //its a bad algorithm, but its partially working.
  for (var i = 0; i < winningSolutions.length; i++) {
    // console.log('winningCombo',  winningCombo, 'winningSolutions[i]', winningSolutions[i])
    if (winningCombo === winningSolutions[i]) {

          console.log('player won!')
//  document.getElementsByClassName('scoreInfo').innerText = 'X Won!'
    }
  }
}

//need to define how to change players.
let XorO = function (square) {
  if(player === playerOne) {
    document.getElementById(square.path[0].id).innerText = "X";
    board[square.path[0].id] = "X";
    console.log(board);
    document.getElementsByClassName("nextTurn").innerText = "Player Two!";
    player = playerTwo;
  } else {
    document.getElementById(square.path[0].id).innerText = "O";
    board[square.path[0].id] = "O";
    // document.getElementsByClassName("nextTurn").innerText = "Player One!";
    player = playerOne;
  }
  winningBoard(board);
}

newGame();


let checkTiedGame = function (board) {
  if (!winningBoard) {
    document.getElementsByClassName('scoreInfo').innerText = 'Game Tied!';
  }
}