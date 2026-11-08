const square0El = document.querySelector('[id="0"]');
const square1El = document.querySelector('[id="1"]');
const square2El = document.querySelector('[id="2"]');
const square3El = document.querySelector('[id="3"]');
const square4El = document.querySelector('[id="4"]');
const square5El = document.querySelector('[id="5"]');
const square6El = document.querySelector('[id="6"]');
const square7El = document.querySelector('[id="7"]');
const square8El = document.querySelector('[id="8"]');

const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');


let currentPlayer = 'X';
let moveCount = 0;
let gameOver = false;

function playMove(squareEl) {
    if (squareEl.textContent !== '' || gameOver) {
        return;
    }

    squareEl.textContent = currentPlayer;
    moveCount++;

    checkWinner();

    if (gameOver) {
        return;
    }

    if (moveCount === 9) {
        gameOver = true;
        messageEl.textContent = "It's a tie!";
        return;
    }

    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }

    messageEl.textContent = "Player " + currentPlayer + "'s turn";
}

function checkWinner() {
    if (
        (square0El.textContent === currentPlayer &&
         square1El.textContent === currentPlayer &&
         square2El.textContent === currentPlayer) ||

        (square3El.textContent === currentPlayer &&
         square4El.textContent === currentPlayer &&
         square5El.textContent === currentPlayer) ||

        (square6El.textContent === currentPlayer &&
         square7El.textContent === currentPlayer &&
         square8El.textContent === currentPlayer) ||

        (square0El.textContent === currentPlayer &&
         square3El.textContent === currentPlayer &&
         square6El.textContent === currentPlayer) ||

        (square1El.textContent === currentPlayer &&
         square4El.textContent === currentPlayer &&
         square7El.textContent === currentPlayer) ||

        (square2El.textContent === currentPlayer &&
         square5El.textContent === currentPlayer &&
         square8El.textContent === currentPlayer) ||

        (square0El.textContent === currentPlayer &&
         square4El.textContent === currentPlayer &&
         square8El.textContent === currentPlayer) ||

        (square2El.textContent === currentPlayer &&
         square4El.textContent === currentPlayer &&
         square6El.textContent === currentPlayer)
    ) {
        gameOver = true;
        messageEl.textContent = "Player " + currentPlayer + " wins!";
    }
}

square0El.addEventListener('click', function() {
    playMove(square0El);
});

square1El.addEventListener('click', function() {
    playMove(square1El);
});

square2El.addEventListener('click', function() {
    playMove(square2El);
});

square3El.addEventListener('click', function() {
    playMove(square3El);
});

square4El.addEventListener('click', function() {
    playMove(square4El);
});

square5El.addEventListener('click', function() {
    playMove(square5El);
});

square6El.addEventListener('click', function() {
    playMove(square6El);
});

square7El.addEventListener('click', function() {
    playMove(square7El);
});

square8El.addEventListener('click', function() {
    playMove(square8El);
});

function resetGame() {
    square0El.textContent = '';
    square1El.textContent = '';
    square2El.textContent = '';
    square3El.textContent = '';
    square4El.textContent = '';
    square5El.textContent = '';
    square6El.textContent = '';
    square7El.textContent = '';
    square8El.textContent = '';

    currentPlayer = 'X';
    moveCount = 0;
    gameOver = false;

    messageEl.textContent = "Player X's turn";
}

resetBtnEl.addEventListener('click', resetGame);

resetGame();
