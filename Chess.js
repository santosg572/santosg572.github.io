"use strict";
// Get the canvas context
var chessCanvas = document.getElementById("board");
var chessContext = chessCanvas.getContext("2d");

// Draw the chess board
function drawBoard() {
chessContext.clearRect(0, 0, 600, 600);
chessContext.fillStyle = "red";
chessContext.strokeStyle = "red";
// Draw the alternating squares
for (var x = 0; x < 8; x++) {
for (var y = 0; y < 8; y++) {
if ((x + y) % 2) {
chessContext.fillRect(75 * x, 75 * y, 75, 75);
}
}
}
// Add a border around the entire board
chessContext.strokeRect(0, 0, 600, 600);
}
drawBoard();
