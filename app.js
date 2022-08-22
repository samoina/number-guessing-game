// Player must guess a number between a minimum and maximum
//Player gets a specific number of guesses
//Player gets notified of the remaining guesses
//Player gets notified if the answer is correct
//Player can opt to play again


//UI variables
let minimum = parseInt(document.getElementById('minimum').innerHTML),
    maximum = parseInt(document.getElementById('maximum').innerHTML),
    userInput = document.getElementById("user-input");

document.getElementById('submit-value').addEventListener('click', checkGuess);

function checkGuess() {
  if(userInput.value<minimum || userInput.value>maximum){
    alert('Error! The number is outside the given range')
  } else {
   alert(`Your guess was ${userInput.value}`);
  }

  
}
