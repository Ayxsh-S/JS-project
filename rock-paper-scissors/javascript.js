function getComputerChoice() {
    let num = Math.random();
    let choice;
    if (num <= 1/3) {
       choice = "Rock";
    }
    else if (num > 1/3 && num <= 2/3) {
       choice = "Paper";
    }
    else {
       choice = "Scissors";
    }

    return choice;
}




function getHumanChoice() {
    const prompt = require('prompt-sync')();
    const choice = prompt("rock, paper or scissors")
    return choice
}

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
        if (computerChoice === "Scissors" && humanChoice === "rock") {
            humanScore += 1;
            console.log("You Win")
        }
        else if (computerChoice === "Rock" && humanChoice === "paper") {
             humanScore += 1;
             console.log("You Win")
        }
        else if (computerChoice === "Paper" && humanChoice === "scissors") {
             humanScore += 1;
             console.log("You Win")

        }
        else if (computerChoice === "Scissors" && humanChoice === "paper") {
             computerScore += 1;
             console.log("You Lose")

        }
        else if (computerChoice === "Paper" && humanChoice === "rock") {
             computerScore += 1;
             console.log("You Lose")

        }

        else if (computerChoice === "Rock" && humanChoice === "scissors") {
            computerScore += 1;
             console.log("You Lose")

        }


    
}
for (let i = 0; i < 5; i++) { 
    playRound(getHumanChoice(),getComputerChoice())
}

console.log(humanScore, computerScore)