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

console.log(computerPlay());