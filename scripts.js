function getComputerChoice() {
  let choice = Math.random();

  if (choice <= 0.33)
    return 'rock';
  else if (choice <= 0.67)
    return 'paper';
  else
    return 'scissors';
}