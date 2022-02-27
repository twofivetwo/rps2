// declare a variable called 'choice'
// assign a list containing, Rock, Paper and Scissors as it's values.
// declare a function called computerPlay.
// randomly choose a value from the variable 'choice'.
// stores selection in a variable called computerSelection.


function computerPlay(){
    let choice = ['rock', 'paper', 'scissors'];
    let computerSelection = choice[Math.floor(Math.random()*choice.length)];
    return computerSelection;
}

let playerSelectionCheck = function (playerSelection) {
    playerSelection = prompt('Choose your weapon...').toLowerCase();
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        playerSelection = prompt(`${playerSelection} is not a valid choice, try again.`).toLowerCase();
    }
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection === playerSelection && computerSelection === computerSelection) {
        case playerSelection === 'rock' && computerSelection === 'scissors':
        case playerSelection === 'scissors' && computerSelection === 'paper':
        case playerSelection === 'paper' && computerSelection === 'rock':
            alert(`You win! ${playerSelection} beats ${computerSelection}!`);
            break;
        case playerSelection === 'scissors' && computerSelection === 'rock':
        case playerSelection === 'paper' && computerSelection === 'scissors':
        case playerSelection === 'rock' && computerSelection === 'paper':
            alert(`You lose...${computerSelection} beats ${playerSelection}`);
            break;
        case playerSelection === 'rock' && computerSelection === 'rock':
        case playerSelection === 'paper' && computerSelection === 'paper':
        case playerSelection === 'scissors' && computerSelection === 'scissors':
            alert('It\'s a tie!');
            break;
        default:
            alert('Sorry but you need to choose, Rock, Paper or Scissors');
            break;
    }
}

playerSelection = playerSelectionCheck();
computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

