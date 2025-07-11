function getComputerChoice() {
    let num = Math.random();
    let choice;
    if (num <= 1/3) {
       choice = "rock";
    }
    else if (num > 1/3 && num <= 2/3) {
       choice = "paper";
    }
    else {
       choice = "scissors";
    }

    return choice;
}


humanScore = 0;
computerScore = 0;

const result = document.querySelector("#result");
const content = document.createElement("div");
content.classList.add("content");
result.appendChild(content);

const score = document.querySelector("#score");
const scoreContent = document.createElement("div");
content.classList.add("scoreContent");
score.appendChild(scoreContent);

const winner = document.querySelector("#winner");
const winnerContent = document.createElement("div");
winnerContent.classList.add("winnerContent");
winner.appendChild(winnerContent);

function playRound(humanChoice) {

    if (humanScore === 5 || computerScore === 5) {
        document.getElementById("rock").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("paper").disabled = true;
        winnerContent.textContent = (humanScore === 5) ? "You win the game" : "You lost the game";
        return;
    }
    const computerChoice = getComputerChoice();
    let message = "";
    
        if (computerChoice === "scissors" && humanChoice === "rock") {
            humanScore += 1;
            message = "You win!";
        }
        else if (computerChoice === "rock" && humanChoice === "paper") {
             humanScore += 1;
             message = "You win!";
        }
        else if (computerChoice === "paper" && humanChoice === "scissors") {
             humanScore += 1;
             message = "You win!";

        }
        else if (computerChoice === "scissors" && humanChoice === "paper") {
             computerScore += 1;
             message = "You lose!";

        }
        else if (computerChoice === "paper" && humanChoice === "rock") {
             computerScore += 1;
            message = "You lose!";

        }

        else if (computerChoice === "rock" && humanChoice === "scissors") {
            computerScore += 1;
             message = "You lose!";

        }

        else if (computerChoice === "rock" && humanChoice === "rock") {
             message = "Tie!";

        }

        else if (computerChoice === "scissors" && humanChoice === "scissors") {
             message = "Tie!";

        }


        else if (computerChoice === "paper" && humanChoice === "paper") {
             message = "Tie!";

        }


        content.textContent = message;

    scoreContent.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
    
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));


