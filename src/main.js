const choices = ["rock", "paper", "scissors"];
const emojiMap = {rock: "✊", paper: "✋", scissors: "✌️" };

const computerScoreDisplay = document.getElementById("computerScore");
const playerScoreDisplay = document.getElementById("playerScore");
document.getElementById("computerChoiceBtn").textContent = "✌️";
document.getElementById("playerChoiceBtn").textContent = "✌️";
document.getElementById("showResult").textContent = "CURRENTLY AT DRAW";

let computerScore = 0;
let playerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(`Computer chose: ${computerChoice}`);
  let result = "";

  if (playerChoice === computerChoice) {
    result = "Draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Player Wins";
    playerScore++;
  } else {
    result = "Computer Wins";
    computerScore++;
  }

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  showResult.textContent = result;

  computerChoiceBtn.textContent = emojiMap[computerChoice];
  playerChoiceBtn.textContent = emojiMap[playerChoice];
}
