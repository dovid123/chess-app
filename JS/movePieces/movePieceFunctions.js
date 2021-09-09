function moveCheck(direction, opr) {
    return moveToSqaure == opr(thisSqaure, direction);
}

function movePiece(that) {
    that.innerHTML = currentPiece; //Set the selected space to the piece that was grabbed
    currentCell.innerHTML = ""; //remove the piece from its old location
    isWhiteTurn = !isWhiteTurn;
    // currentCell.style.backgroundColor = '';
}

function getPiece(squares) {
    for (let square of squares) {
        square.addEventListener('click', function() {
            getCell(this);
        })
    }
}

function checkPieceMoved(that, availableMoves, direction = 1) {
    if (that.innerHTML === '' || isNaN(pieceColor) != isNaN(otherPieceColor)) {
        const longDistance = ['b', 'c', 'd', '5', '6', '7'];
        for (i = 0; i < availableMoves.length; i++) {
            if (moveCheck(availableMoves[i], opr)) {
                movePiece(that);
                return true;
            }
            for (k = 0; k < longDistance.length; k++) {
                if (pieceColor === longDistance[k]) {
                    // getting info on square
                    let skipSquare;
                    skipSquare = changeSquare(Math.floor(thisSqaure / direction), opr, j / direction);
                    // check if square is empty
                    if (skipSquare.innerHTML !== '') {
                        return false;
                    }
                    return true;
                }
            }
        }
    } else {
        console.log('illegal move');
        return false;
    }
}