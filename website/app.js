//configure and display chess board.js
var chessPosition = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R';
var correctPosition = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R';
var config = {
  draggable: true,
  dropOffBoard: 'snapback', // this is the default
  position: chessPosition
}
var puzzle = ChessBoard('pBoard', config);

//reset chessboard button
$('#resetBoard').on('click', function () {
  puzzle.position(chessPosition);
})

//reset chess puzzle on button click
function resetPuzzle(){
  puzzle.position(chessPosition);
}

//check chess puzzle
function checkPuzzle(){
  if(puzzle.fen() == correctPosition){
    window.alert("Correct! Great job!");
  }
  else{
    window.alert("Try again");
  }
}

//get random puzzle