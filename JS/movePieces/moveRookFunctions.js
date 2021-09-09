function checkRow() {
    return checkTens(thisSqaure) !== checkTens(moveToSqaure);
}

function moveRook(that) {
    try {
        let legalMove = true;
        let direction;
        if (squareSpaces < 8) {
            if (checkRow()) {
                return;
            }
            direction = 1;
            squareSpaces = squareSpaces % 10;
        } else {
            direction = 10;
            squareSpaces = Math.floor(squareSpaces / 10) * 10;
        }
        // looping through all the squares
        for (j = direction; j <= squareSpaces; j += direction) {
            const getRookMoves = [j];
            legalMove = checkPieceMoved(that, getRookMoves, direction);
            if (!legalMove) {
                return;
            }
        }
    } catch (err) {
        console.log(err);
    }
}