function getComputerChoice() { // declare getComputerChoice function
    let computerChoice = "" // create empty string variable computerChoice
    let randomInteger = Math.floor(Math.random() * 3)+1 // generate random integer from 1 to 3
    if (randomInteger === 1) { // if number is 1 assign computerChoice to rock
        computerChoice = "rock"
    } else if (randomInteger === 2) { // if number is 2 assign computerChoice to paper
        computerChoice = "paper"
    } else if (randomInteger === 3) { // if number is 3 assign computerChoice to scissors
        computerChoice = "scissors"
    }
    return computerChoice // return computerChoice
}

function playRound(playerChoice, computerChoice) { // declare playRound function taking user input parameter and fire getComputerchoice
    if (playerChoice === computerChoice) { // check for draw case
        return "tie"
    } else if (playerChoice === "rock") {// check for user win cases, check for computer win cases, // return appropriate message depending on winner
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

function promptUser() { // user input function to prompt for an input
    while (true) {
        let userInput = prompt("State your choice: ") // prompt for user input
        if (userInput != null || userInput != undefined) { // catches null and undefined errors
            userInput = userInput.toLowerCase() // converts to lower case   
        }
        if (userInput === "rock" || userInput === "paper" || userInput === "scissors"|| userInput === "exit") { // check if input is valid 
            return userInput // returns input
        }
        alert("Please enter a correct value of either rock, paper or scissors!")
    }
}

// function calculate round winner 

function calculateOverallWinner(playerScore, computerScore) { // function calculate who won the game 
    if (playerScore === computerScore) { 
        return "The game is a draw."
    }
    return (playerScore > computerScore ? "Player wins the game!" : "Computer wins this time.") // two input variables determine who is greater return winner
}

function game() { // declare game function
    let playerScore = 0 // declare int variable of user round wins
    let computerScore = 0 // declare int variable of computer round wins
    for (let roundCount = 0; roundCount < 5; roundCount++) { // repeat the game five times
        let playerChoice = promptUser() // call promptUser() function
        if (playerChoice === "exit") { 
            console.log("Exiting game.")
            return
        }
        let computerChoice = getComputerChoice() // call getComputerChoice() function
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
    console.log(calculateOverallWinner(playerScore,computerScore)) // returns overall winner
}

console.log("Welcome to Rock, Paper, Scissors! Initialising game: ")
game()