let scorePlayer1 = 0;
let scorePlayer2 = 0;
let currentPlayer = 1;
let player1Choice = null;
let player2Choice = null;

function startGame(mode) {
    document.querySelector('.game-mode').style.display = 'none';
    document.querySelector('.game-container').style.display = 'flex';
    resetScores();
}

function resetScores() {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    currentPlayer = 1;
    player1Choice = null;
    player2Choice = null;
    document.querySelector("#score").innerText = scorePlayer1;
    document.querySelector("#score2").innerText = scorePlayer2;
    document.querySelector(".hexa").innerText = "Player 1's Turn!";
    document.querySelector(".hexa").style.backgroundColor = "rgb(2, 2, 49)";
}

function checkWinner(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return "DRAW";
    }
    if (
        (player1Choice === "paper" && player2Choice === "rock") ||
        (player1Choice === "scissors" && player2Choice === "paper") ||
        (player1Choice === "rock" && player2Choice === "scissors")
    ) {
        return "Player 1";
    }
    return "Player 2";
}

function handleChoice(userChoice) {
    if (currentPlayer === 1) {
        player1Choice = userChoice;
        document.querySelector(".hexa").innerText = "Player 1: Make your second choice!";
    } else if (currentPlayer === 2) {
        player2Choice = userChoice;
        let result = checkWinner(player1Choice, player2Choice);
        if (result === "Player 1") {
            scorePlayer1++;
            document.querySelector(".hexa").innerText = "Player 1 Wins!";
            document.querySelector(".hexa").style.backgroundColor = "green";
        } else if (result === "Player 2") {
            scorePlayer2++;
            document.querySelector(".hexa").innerText = "Player 2 Wins!";
            document.querySelector(".hexa").style.backgroundColor = "red";
        } else {
            document.querySelector(".hexa").innerText = "Draw!";
            document.querySelector(".hexa").style.backgroundColor = "grey";
        }
        document.querySelector("#score").innerText = scorePlayer1;
        document.querySelector("#score2").innerText = scorePlayer2;
        currentPlayer = 1;
        player1Choice = null;
        player2Choice = null;
        document.querySelector(".hexa").innerText = "Player 1's Turn!";
    }
}

document.getElementById("box1").onclick = function () { handleChoice("paper") };
document.getElementById("box2").onclick = function () { handleChoice("scissors") };
document.getElementById("box3").onclick = function () { handleChoice("rock") };
