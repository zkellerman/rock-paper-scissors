function getComputerChoice() {
  let choice = Math.random();

  if (choice <= 0.33)
    return 'Rock';
  else if (choice <= 0.67)
    return 'Paper';
  else
    return 'Scissors';
}

function getPlayerChoice() {
  let promptMessage = 
    `Select one of the following:
      1.) Rock
      2.) Paper
      3.) Scissors`;

  let choice = prompt(promptMessage)

  switch (choice) {
    case '1':
      return 'Rock';

    case '2':
      return 'Paper';

    case '3':
      return 'Scissors';

    default:
      return 'Invalid choice'
  }
}

let playerScore = 0;
let computerScore = 0;