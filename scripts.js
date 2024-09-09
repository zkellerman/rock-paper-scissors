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
  console.log(`You chose: ${playerChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (playerChoice == computerChoice) {
    console.log("It's a tie! Replay the round.");
    return;
  }

  switch (playerChoice) {
    case 'rock':
      if (computerChoice == 'Paper') {
        console.log('You lose! Paper beats Rock.');
        //computerScore++;
      }
      else if (computerChoice == 'Scissors') {
        console.log('You win! Rock beats Scissors');
        //playerScore++;
      }

      break;

    case 'paper':
      if (computerChoice == 'Rock') {
        console.log('You win! Paper beats Rock.');
        //playerScore++;
      }
      else if (computerChoice == 'Scissors') {
        console.log('You lose! Scissors beats Paper.');
        //computerScore++;
      }

      break;

    case 'scissors':
      if (computerChoice == 'Rock') {
        console.log('You lose! Rock beats Scissors');
        //computerScore++;
      }
      else if (computerChoice == 'Paper') {
        console.log('You win! Scissors beats Paper');
        //playerScore++;
      }

      break;

    default:
      console.log('You entered an invalid choice. Replay the round.');
      break;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 3 && computerScore < 3) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    if (playerSelection == 'Quit') {
      console.log('You quit the game.');
      return;
    }
    
    playRound(playerSelection, computerSelection);
    console.log('');

    if (playerScore == 3 || computerScore == 3)
      break;

    if (playerScore > computerScore)
      console.log(`You're winning! The score is ${playerScore} - ${computerScore}.`);
    else if (playerScore < computerScore)
      console.log(`You're losing. The score is ${playerScore} - ${computerScore}.`);
    else
      console.log(`The score is tied ${playerScore} - ${computerScore}.`);

    console.log('');
  }

  if (playerScore == 3)
    console.log(`Congratulations! You won the game ${playerScore} - ${computerScore}.`);
  else
    console.log(`Better luck next time! You lost the game ${playerScore} - ${computerScore}.`);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});