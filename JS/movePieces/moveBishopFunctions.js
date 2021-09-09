function moveBishop(that) {
    let legalMove = true;
    let direction;
    if (squareSpaces % 9 === 0) {
        direction = 9;
    } else if (squareSpaces % 11 === 0) {
        direction = 11;
    } else {
        console.log('not valid spot');
        return
    }

    for (j = direction; j <= squareSpaces; j += direction) {
        const getBishopMoves = [j];
        legalMove = checkPieceMoved(that, getBishopMoves);
        if (!legalMove) {
            return
        }
    }
}