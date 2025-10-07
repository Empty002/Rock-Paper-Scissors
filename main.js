let humanScore = 0;
let computerScore = 0;

const resultDisplay = document.querySelector(".score");
const roundDisplay = document.querySelector(".result");
const finalMessageDisplay = document.querySelector(".final-message");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  return ["Rock", "Paper", "Scissors"][random];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let resultText = "";

  if (humanChoice === computerChoice) {
    resultText = "Draw!";
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    resultText = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultText = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  resultDisplay.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
  roundDisplay.textContent = resultText;

  if (humanScore === 5 || computerScore === 5) {
    const finalMessage =
      humanScore === 5
        ? "🎉 Congratulations! You won the game!"
        : "😢 GG, You lost the game.";

    finalMessageDisplay.textContent = finalMessage;
    disableButtons(true);
    showRestartButton();
  }
}

function disableButtons(state) {
  rockBtn.disabled = state;
  paperBtn.disabled = state;
  scissorsBtn.disabled = state;
}

function showRestartButton() {
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Play Again";
  restartBtn.classList.add("restart-btn");
  restartBtn.style.marginTop = "10px";
  restartBtn.style.padding = "10px 20px";
  restartBtn.style.fontSize = "16px";
  restartBtn.style.cursor = "pointer";
  restartBtn.style.borderRadius = "5px";
  restartBtn.style.border = "none";
  restartBtn.style.backgroundColor = "#4CAF50";
  restartBtn.style.color = "white";
  restartBtn.style.boxShadow = "0 4px #999";

  finalMessageDisplay.appendChild(document.createElement("br"));
  finalMessageDisplay.appendChild(restartBtn);

  restartBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    resultDisplay.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
    roundDisplay.textContent = "";
    finalMessageDisplay.textContent = "";
    disableButtons(false);
  });
}

function setupGame() {
  rockBtn.addEventListener("click", () => playRound("Rock"));
  paperBtn.addEventListener("click", () => playRound("Paper"));
  scissorsBtn.addEventListener("click", () => playRound("Scissors"));
}

setupGame();
``