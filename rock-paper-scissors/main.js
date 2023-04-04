function getComputerChoice() {
    let computerChoice = ""
    let randomInteger = Math.floor(Math.random() * 3)+1 // generate random integer from 1 to 3
    if (randomInteger === 1) {
        computerChoice = "rock"
    } else if (randomInteger === 2) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice
}

function playRound(playerChoice, computerChoice) {
    let winner = ""
    if (playerChoice === computerChoice) {
        winner = "tie"
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            winner = "computer"
        } else if (computerChoice === "scissors") {
            winner = "player"
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            winner = "computer"
        } else if (computerChoice === "rock") {
            winner = "player"
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            winner = "computer"
        } else if (computerChoice === "paper") {
            winner = "player"
        }
    }
    roundCount++
    if (winner === "player") {
        playerScore++
        updateText(winner)
    } else if (winner === "computer") {
        computerScore++
        updateText(winner)
    } else if (winner === "tie") { 
        gameStatus.textContent = `round ${roundCount} was a draw!`
    }
}

function checkForWinner() { 
    if (computerScore === 5) { 
        reset("computer");
    } else if (playerScore === 5) { 
        reset("player");
    }
}

function updateText(winner,endComputerScore,endPlayerScore) {
    winner = winner.charAt(0).toUpperCase()+winner.slice(1)
    if (playerScore === 0 && computerScore === 0) {
        gameStatus.textContent = `Last match was won by the ${winner}, the score was ${endPlayerScore} to the player and ${endComputerScore} to the computer. `
    } else { 
        gameStatus.textContent = `${winner} won round ${roundCount}`
    }
    computerCounter.textContent = computerScore
    playerCounter.textContent = playerScore
}

function reset(winner) {
    let endPlayerScore = playerScore
    let endComputerScore = computerScore
    computerScore = 0 
    playerScore = 0
    roundCount = 0
    updateText(winner,endPlayerScore,endComputerScore)
}

function runGame() {
    let selectedButton = this.classList.value
    playRound(selectedButton, getComputerChoice())
    checkForWinner()
}

let computerScore = 0
let playerScore = 0
let roundCount = 0
const buttons = document.querySelectorAll("button")
const gameStatus = document.querySelector(".gameStatus")
const playerCounter = document.querySelector(".playerPoints")
const computerCounter = document.querySelector(".computerPoints")
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')

buttons.forEach(button => button.addEventListener("click", runGame));
