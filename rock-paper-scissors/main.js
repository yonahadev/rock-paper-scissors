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
    if (playerChoice === computerChoice) {
        return "tie"
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "computer" 
        } else if (computerChoice === "scissors") {
            return "player"
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return "computer"
        } else if (computerChoice === "rock") {
            return "player"
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return "computer"
        } else if (computerChoice === "paper") {
            return "player"
        }
    }
}

function promptUser() {
    while (true) {
        let userInput = prompt("State your choice: ")
        if (userInput != null || userInput != undefined) {
            userInput = userInput.toLowerCase() 
        }
        if (userInput === "rock" || userInput === "paper" || userInput === "scissors"|| userInput === "exit") {
            return userInput
        }
        alert("Please enter a correct value of either rock, paper or scissors!")
    }
}

function calculateOverallWinner(playerScore, computerScore) {
    if (playerScore === computerScore) { 
        return "The game is a draw."
    }
    return (playerScore > computerScore ? "Player wins the game!" : "Computer wins this time.") // if playerScore > computer score return player wins else do opposite
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let roundCount = 0; roundCount < 5; roundCount++) {
        let playerChoice = promptUser()
        if (playerChoice === "exit") { 
            console.log("Exiting game.")
            return
        }
        let computerChoice = getComputerChoice()
        let roundWinner = playRound(playerChoice, computerChoice)
        console.log(`Player picked ${playerChoice}.`)
        console.log(`Computer picked ${playerChoice}.`)
        if (roundWinner === "player") {
            playerScore += 1
            console.log(`Player wins round ${roundCount+1}.`)
        } else if (roundWinner === "computer") {
            computerScore += 1
            console.log(`Computer wins round ${roundCount+1}.`)
        } else {
            console.log("This round is a draw.")
        }
    }
    console.log(calculateOverallWinner(playerScore,computerScore))
}

console.log("Welcome to Rock, Paper, Scissors! Initialising game: ")
game()