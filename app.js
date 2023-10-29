function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playSingleRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } if (
    (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    return `Player win ${playerSelection} beats ${computerSelection}`;
  }
  return `Comp win ${computerSelection} beats ${playerSelection}`;
}

function game() {
  console.log('Game begins!');
  for (let r = 0; r < 5; r++) {
    const playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');
    const result = playSingleRound(playerSelection, getComputerChoice());
    console.log(result);
  }
}
