const choices = ['rock', 'paper', 'scissors'];

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let results = document.querySelector(".result");

let computerScore = 0;
let humanScore = 0;

getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

function playRound(computerChoice, humanChoice) {

    if (computerChoice === humanChoice){
        results.innerText = `It's a tie! You both chose ${computerChoice}!`;
        return;
    }
    
    switch(humanChoice) {
        case 'rock':
            switch(computerChoice) {
                case 'paper':
                    results.innerText = "Computer chose paper. You lose!";
                    computerScore++;
                    break;
                case 'scissors':
                    results.innerText = "Computer chose scissors. You win!";
                    playerScore++;
                    break;
            }
            break;
        case 'paper':
            switch(computerChoice) {
                case 'rock':
                    results.innerText = "Computer chose rock. You win!";
                    playerScore++;
                    break;
                case 'scissors':
                    results.innerText = "Computer chose scissors. You lose!";
                    computerScore++;
                    break;
            }
            break;
        case 'scissors':
            switch(computerChoice) {
                case 'paper':
                    results.innerText = "Computer chose paper. You win!";
                    playerScore++;
                    break;
                case 'rock':
                    results.innerText = "Computer chose rock. You lose!";
                    computerScore++;
                    break;
            }
            break;
        default:
            console.error("Something has gone very wrong.");
    }
}

function playGame() {
    playRound(getComputerChoice(), getHumanChoice());
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