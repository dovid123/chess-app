function lastRow(that) {
    if (isNaN(pieceColor)) {
        that.innerHTML = pieces.blackQueen;
    } else {
        that.innerHTML = pieces.whiteQueen;
    }
    currentCell.innerHTML = ""; //remove the piece from its old location
}

function movePawn(that, opr, startLocation) {
    // check if square infront of pawn is empty
    if (that.innerHTML === '') {
        // check if its first move
        if ((startLocation === Math.floor(thisSqaure / 10)) && (moveCheck(20, opr))) {
            let skipSquare;
            skipSquare = changeSquare(startLocation, opr);
            if (skipSquare.innerHTML === '') {
                movePiece(that);
                return;
            }
        }
        // regular move
        if (moveCheck(10, opr)) {
            if (Math.floor(moveToSqaure / 10) === opr(startLocation, 6)) {
                lastRow(that);
                return;
            }
            movePiece(that);
        }
    } else if (isNaN(pieceColor) != isNaN(otherPieceColor)) { // check if piece is other color
        if (moveCheck(11, opr) || moveCheck(9, opr)) {
            if (Math.floor(moveToSqaure / 10) === opr(startLocation, 6)) {
                lastRow(that);
                return;
            }
            movePiece(that);
        }
    } else {
        console.log('illegal move');
    }
}