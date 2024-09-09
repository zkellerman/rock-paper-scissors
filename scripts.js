function getComputerChoice() {
  let choice = Math.random();

  if (choice <= 0.33)
    return 'Rock';
  else if (choice <= 0.67)
    return 'Paper';
  else
    return 'Scissors';
}

function playRound(playerChoice, computerChoice) {
  const resultArea = document.querySelector("#results");
  const resultParagraph = document.createElement("p");
  let roundNumber = resultArea.children.length + 1;

  if (playerChoice == computerChoice) {
    resultParagraph.textContent = `Round ${roundNumber}: It's a tie! Replay the round.`;
  }
  else {
    switch (playerChoice) {
      case 'Rock':
        if (computerChoice == 'Paper') {
          computerScore++;
          resultParagraph.textContent = `Round ${roundNumber}: You lose! Paper beats Rock.`;
        }
        else if (computerChoice == 'Scissors') {
          playerScore++;
          resultParagraph.textContent = `Round ${roundNumber}: You win! Rock beats Scissors`;
        }

        break;

      case 'Paper':
        if (computerChoice == 'Rock') {
          playerScore++;
          resultParagraph.textContent = `Round ${roundNumber}: You win! Paper beats Rock.`;
        }
        else if (computerChoice == 'Scissors') {
          computerScore++;
          resultParagraph.textContent = `Round ${roundNumber}: You lose! Scissors beats Paper.`;
        }

        break;

      case 'Scissors':
        if (computerChoice == 'Rock') {
          computerScore++;
          resultParagraph.textContent = `Round ${roundNumber}: You lose! Rock beats Scissors`;
        }
        else if (computerChoice == 'Paper') {
          playerScore++;
          resultParagraph.textContent = `Round ${roundNumber}: You win! Scissors beats Paper`;
        }

        break;
    }
  }

  resultArea.appendChild(resultParagraph);

  const scoreArea = document.querySelector("#score");
  const playerScoreText = scoreArea.firstElementChild;
  const computerScoreText = scoreArea.lastElementChild;

  playerScoreText.textContent = `Player: ${playerScore}`;
  computerScoreText.textContent = `Computer: ${computerScore}`;

  if (playerScore == 5 || computerScore == 5)
  {
    const gameWinnerText = document.createElement("p");

    if (playerScore == 5)
      gameWinnerText.textContent = "Congratulations! You won the game!";
    else
      gameWinnerText.textContent = "You lost the game. Better luck next time!";

    resultArea.appendChild(gameWinnerText);
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5)
      playRound(button.textContent, getComputerChoice());
  });
});

let playerScore = 0;
let computerScore = 0;