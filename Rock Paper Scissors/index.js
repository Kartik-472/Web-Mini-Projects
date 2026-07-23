const resultDisplay = document.getElementById("result");
const playerC = document.getElementById("playerChoice");
const computerC = document.getElementById("computerChoice");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const triesDisplay = document.getElementById("tries");
let playerScore = 0;
let computerScore = 0;
let tries = 0;
const choices = ['rock', 'paper', 'scissors'];

function play(playerChoice) {
    tries++;
    resultDisplay.classList.remove("red");
    resultDisplay.classList.remove("green");
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    if (playerChoice === computerChoice) {
        resultDisplay.textContent = "It's a Draw!";
    }
    else {
        switch (playerChoice) {
            case 'rock':
                resultDisplay.textContent = (computerChoice === 'paper') ? 'YOU LOST! :(' : 'YOU WON! :)'
                break;
            case 'paper':
                resultDisplay.textContent = (computerChoice === 'scissors') ? 'YOU LOST! :(' : 'YOU WON! :)'
                break;
            case 'scissors':
                resultDisplay.textContent = (computerChoice === 'rock') ? 'YOU LOST! :(' : 'YOU WON! :)'
                break;
        }
    }
    playerC.textContent = `Player: ${playerChoice}`;
    computerC.textContent = `Computer: ${computerChoice}`;

    if (resultDisplay.textContent === 'YOU WON! :)') {
        resultDisplay.classList.add("green");
        playerScore++;
    }
    else if (resultDisplay.textContent === 'YOU LOST! :(') {
        resultDisplay.classList.add("red");
        computerScore++;
    }
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    triesDisplay.textContent = `Plays: ${tries}`;
}