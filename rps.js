let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  msg.textContent = "It's a draw!";
  msg.style.color = "orange";
};
const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.textContent = userScore;
    msg.textContent = "You win the game!";
    msg.style.color = "green";
  } else {
    compScore++;
    compScorePara.textContent = compScore;
    msg.textContent = "You lose the game!";
    msg.style.color = "red";
  }
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = false;
    if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "scissors" && compChoice === "paper") ||
      (userChoice === "paper" && compChoice === "rock")
    ) {
      userWin = true;
    }
    showWinner(userWin);
  }
};
choices.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.getAttribute("data-choice");
    playGame(userChoice);
  });
});