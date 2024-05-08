const choices = ['rock', 'paper', 'scissors'];

// buttons
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let playAgain = document.querySelector(".play-again")

// text
let roundResults = document.querySelector(".round-result");
let gameResults = document.querySelector(".game-results");
let score = document.querySelector(".score");

// div containers
let buttonContainer = document.querySelector(".button-container");
let gameActiveContainer = document.querySelector(".game-active");
let gameInactiveContainer = document.querySelector(".game-inactive");

let computerScore = 0;
let humanScore = 0;

getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

function playRound(computerChoice, humanChoice) {

    if (computerChoice === humanChoice){
        roundResults.innerText = `It's a tie! You both chose ${computerChoice}!`;
        return;
    }
    
    switch(humanChoice) {
        case 'rock':
            switch(computerChoice) {
                case 'paper':
                    roundResults.innerText = "Computer chose paper. You lose!";
                    computerScore++;
                    break;
                case 'scissors':
                    roundResults.innerText = "Computer chose scissors. You win!";
                    humanScore++;
                    break;
            }
            break;
        case 'paper':
            switch(computerChoice) {
                case 'rock':
                    roundResults.innerText = "Computer chose rock. You win!";
                    humanScore++;
                    break;
                case 'scissors':
                    roundResults.innerText = "Computer chose scissors. You lose!";
                    computerScore++;
                    break;
            }
            break;
        case 'scissors':
            switch(computerChoice) {
                case 'paper':
                    roundResults.innerText = "Computer chose paper. You win!";
                    humanScore++;
                    break;
                case 'rock':
                    roundResults.innerText = "Computer chose rock. You lose!";
                    computerScore++;
                    break;
            }
            break;
        default:
            console.error("Something has gone very wrong.");
    }
    tallyScore();
}

function tallyScore() {
    score.innerText = `Computer: ${computerScore}\nHuman: ${humanScore}`
    checkForWinner();
}

function checkForWinner() {
    if (humanScore === 5 || computerScore === 5) {
        gameActiveContainer.style.display = 'none';
        gameInactiveContainer.style.display = 'block';

        humanScore = 0;
        computerScore = 0;

        score.innerText = '';
        roundResults.innerText = '';

        if (humanScore > computerScore)
            gameResults.innerText = 'You win!!!';
        else
            gameResults.innerText = 'You lose :(';
    }
}

rock.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
});

paper.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
});

scissors.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors");
});

playAgain.addEventListener("click", () => {
    gameInactiveContainer.style.display = 'none';
    gameActiveContainer.style.display = 'block';
});