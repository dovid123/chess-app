// help variables to move pieces
let state = false //false if no piece has been selected
let currentPiece;
let currentCell;
let pieceColor;
let otherPieceColor;
let isWhiteTurn = true;
let firstWhiteMove = true;
let firstBlackMove = true;
let whiteCastle = false;
let blackCastle = false;

// these variables hold square number
let moveToSqaure;
let thisSqaure;

let opr; // this operetor lets us know if we are moving backward or foward
let squareSpaces; // how many squares between the 2 squares


function moveSquareInfo(that) {
    moveToSqaure = parseInt(that.className.slice(7, 9));
    thisSqaure = parseInt(currentCell.className.slice(7, 9));

    if (!(pieceColor === '9' || pieceColor === 'f')) {
        squareSpaces = Math.abs(moveToSqaure - thisSqaure);
        if (thisSqaure > moveToSqaure) { // checking direction 
            opr = deduct;
        } else {
            opr = add;
        }
    }
}

// checking inBetween sqaures
function changeSquare(location, opr, i = 1) {
    let checkSquare = currentCell.className;
    checkSquare = checkSquare.replace(`${location}`, `${opr(location, i)}`);
    checkSquare = checkSquare.slice(0, 9);
    return document.querySelector(`.${checkSquare}`);
}

function getCell(that) {
    if (!state) { //this means if the state is false (i.e. no piece selected
        if (that.innerHTML != '') {
            currentCell = that; //get the current cell selection
            currentPiece = that.innerHTML; //get the current piece selected
            pieceColor = currentPiece.codePointAt(0).toString(16)[3]; // lets me know which piece is selected
            if (isWhiteTurn === !isNaN(pieceColor)) {
                state = true; //piece has been selected
            }
        }
    } else { //else, you are moving a piece
        if (that.innerHTML != '') {
            otherPieceColor = that.innerHTML.codePointAt(0).toString(16)[3];
        }
        moveSquareInfo(that);
        switch (pieceColor) {
            case '9':
                movePawn(that, add, 2);
                break;
            case 'f':
                movePawn(that, deduct, 7);
                break;
            case '6':
            case 'c':
                moveRook(that);
                break;
            case '7':
            case 'd':
                moveBishop(that);
                break;
            case '5':
            case 'b':
                moveQueen(that);
                break;
            case '4':
                if (firstWhiteMove) {
                    whiteCastle = getKingCastle(that, pieces.whiteRook);
                    if (whiteCastle) {
                        firstWhiteMove = false;
                        break;
                    }
                }
            case 'a':
                if (firstBlackMove) {
                    blackCastle = getKingCastle(that, pieces.blackRook);
                    if (blackCastle) {
                        firstBlackMove = false;
                        break;
                    }
                }
                checkPieceMoved(that, getKingMoves());
                break;
            case '8':
            case 'e':
                checkPieceMoved(that, getKnightMoves());
                break;
            default:
                break;
        }
        state = false; //piece has been placed, so set state back to false
    }
}