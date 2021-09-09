// // help variables to move pieces
// let state = false //false if no piece has been selected
// let currentPiece;
// let currentCell;
// let pieceColor;
// let otherPieceColor;

const pieces = {
    whiteKing: '&#x2654',
    whiteQueen: '&#x2655',
    whiteRook: '&#x2656',
    whiteBishop: '&#x2657',
    whiteKnight: '&#x2658',
    whitePawn: '&#x2659',
    blackKing: '&#x265A',
    blackQueen: '&#x265B',
    blackRook: '&#x265C',
    blackBishop: '&#x265D',
    blackKnight: '&#x265E',
    blackPawn: '&#x265F'
};

function generateNameClass(num, square, white) {
    if (white) {
        square.className = `square-${num} tdWhite `;
        square.innerText = num;
    } else {
        square.className = `square-${num} tdBlue`;
        square.innerText = num;
    }
}

function chooseSquareClass(i, j, square) {
    let num = `${i}${j+1}`;
    if (i % 2 === 0) {
        if (j % 2 === 0) {
            generateNameClass(num, square, true);
        } else {
            generateNameClass(num, square, false);
        }
    } else {
        if (j % 2 === 0) {
            generateNameClass(num, square, false);
        } else {
            generateNameClass(num, square, true);
        }
    }
}

function generateBoard(board) {
    for (let i = 8; i > 0; i--) {
        let row = document.createElement('tr');
        for (let j = 0; j < 8; j++) {
            let square = document.createElement('td');
            chooseSquareClass(i, j, square);
            row.appendChild(square);
        }
        board.appendChild(row);
    }
}

function fillSquare(squareNumber, content) {
    document.querySelector(`.square-${squareNumber}`).innerHTML = content;
}

function setBoard() {
    state = false;
    whiteCastle = false;
    blackCastle = false;
    firstWhiteMove = true;
    firstBlackMove = true;
    isWhiteTurn = true;
    // setting rows 3-6 as empty
    for (i = 3; i < 7; i++) {
        for (j = 0; j < 8; j++) {
            squareNumber = i * 10 + j + 1;
            squareContent = '';
            fillSquare(squareNumber, squareContent);
        }
    }
    // setting the second and seventh row with pawns
    for (i = 0; i < 8; i++) {
        fillSquare(71 + i, pieces.blackPawn);
        fillSquare(21 + i, pieces.whitePawn);
    }
    // setting first and eighth row with pieces
    fillSquare(81, pieces.blackRook);
    fillSquare(88, pieces.blackRook);
    fillSquare(82, pieces.blackKnight);
    fillSquare(87, pieces.blackKnight);
    fillSquare(83, pieces.blackBishop);
    fillSquare(86, pieces.blackBishop);
    fillSquare(85, pieces.blackKing);
    fillSquare(84, pieces.blackQueen);

    fillSquare(11, pieces.whiteRook);
    fillSquare(18, pieces.whiteRook);
    fillSquare(12, pieces.whiteKnight);
    fillSquare(17, pieces.whiteKnight);
    fillSquare(13, pieces.whiteBishop);
    fillSquare(16, pieces.whiteBishop);
    fillSquare(15, pieces.whiteKing);
    fillSquare(14, pieces.whiteQueen);
}