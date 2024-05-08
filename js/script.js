const choices = ['rock', 'paper', 'scissors'];

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let results = document.querySelector(".results");

getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

function playRound(computerChoice, humanChoice) {

    if (computerChoice === humanChoice){
        console.log(`It's a tie! You both chose ${computerChoice}!`)
        return;
    }
        
    
    switch(humanChoice) {
        case 'rock':
            switch(computerChoice) {
                case 'paper':
                    console.log("Computer chose paper. You lose!");
                    break;
                case 'scissors':
                    console.log("Computer chose scissors. You win!");
                    break;
            }
            break;
        case 'paper':
            switch(computerChoice) {
                case 'rock':
                    console.log("Computer chose rock. You win!");
                    break;
                case 'scissors':
                    console.log("Computer chose scissors. You lose!");
                    break;
            }
            break;
        case 'scissors':
            switch(computerChoice) {
                case 'paper':
                    console.log("Computer chose paper. You win!");
                    break;
                case 'rock':
                    console.log("Computer chose rock. You lose!");
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