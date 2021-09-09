// making board
let board = document.querySelector('table');
generateBoard(board);
const squares = document.querySelectorAll('td');
getPiece(squares);

// set board / new game 
let newGame = document.querySelector('.new');
newGame.addEventListener('click', setBoard);