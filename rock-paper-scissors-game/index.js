const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener("click", () => run("ROCK"));
paperBtn.addEventListener("click", () => run("PAPER"));
scissorsBtn.addEventListener("click", () => run("SCISSORS"));

function run(playerChoice){
  player.textContent = "Player: " + playerChoice;
  let compChoice = Math.floor(Math.random() * 3);
  switch (compChoice) {
    case 0:
      compChoice = "ROCK";
      break;
    case 1:
      compChoice = "PAPER";
      break;
    case 2:
      compChoice = "SCISSORS";
      break;
    default:
      compChoice = "NULL";
      break;
  }
  computer.textContent = "Computer: " + compChoice;

  if ((playerChoice == "ROCK" && compChoice == "SCISSORS") ||
      (playerChoice == "SCISSORS" && compChoice == "PAPER") ||
      (playerChoice == "PAPER" && compChoice == "ROCK")){
        result.textContent = "Result: PLAYER WINS!";
      }
  else if (playerChoice == compChoice){
    result.textContent = "Result: Tie! Try Again!";
  
  }
  else{
    result.textContent = "Result: COMPUTER WINS!";
  }
}
