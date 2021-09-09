function moveQueen(that) {
    if (squareSpaces % 9 === 0 || squareSpaces % 11 === 0) {
        moveBishop(that);
    } else {
        moveRook(that);
    }
}