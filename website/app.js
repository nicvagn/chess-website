//lost to time what this does
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});


//configure and display chess board.js
var chessPosition = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R';
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