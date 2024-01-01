const weaponsButtons = document.querySelectorAll('.weapon-button');

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playSingleRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Log player selection before the round
  console.log(`Player selection: ${playerSelection}`);

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `Player win ${playerSelection} beats ${computerSelection}`;
  }
  return `Comp win ${computerSelection} beats ${playerSelection}`;
}

function game() {
  console.log('Game begins!');

  for (let r = 0; r < 5; r++) {
    // Prompt player for selection
    const playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');

    // Log player selection after the prompt
    console.log(`Player selection: ${playerSelection}`);

    // Get computer selection
    const computerSelection = getComputerChoice();

    // Log computer selection before the game round
    console.log(`Computer selection: ${computerSelection}`);

    // Play single round and log result
    const result = playSingleRound(playerSelection, computerSelection);
    console.log(`Game result: ${result}`);
  }
}

const btn = document.querySelector('.weapon-button');
btn.addEventListener('click', () => {
  alert('Hello World');
});
