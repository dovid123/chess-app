function getKingMoves() {
    const kinghtMoves = [1, 9, 10, 11];
    return kinghtMoves;
}

function getKingCastle(that, rook) {
    if (moveToSqaure === thisSqaure + 2 || moveToSqaure === thisSqaure - 2) {
        if (that.innerHTML === '') {
            that.innerHTML = currentPiece; //Set the selected space to the piece that was grabbed
            currentCell.innerHTML = ""; //remove the piece from its old location
            if (moveToSqaure === thisSqaure + 2) {
                document.querySelector(`.square-${moveToSqaure + 1}`).innerHTML = '';
                document.querySelector(`.square-${thisSqaure + 1}`).innerHTML = rook;
                isWhiteTurn = !isWhiteTurn;
            } else {
                document.querySelector(`.square-${moveToSqaure - 2 }`).innerHTML = '';
                document.querySelector(`.square-${thisSqaure - 1}`).innerHTML = rook;
                isWhiteTurn = !isWhiteTurn;
            }
            return true;
        }
    }
}