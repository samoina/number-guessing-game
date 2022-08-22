// Player must guess a number between a minimum and maximum
//Player gets a specific number of guesses
//Player gets notified of the remaining guesses
//Player gets notified if the answer is correct
//Player can opt to play again


//UI variables
let minimum = parseInt(document.getElementById('minimum').innerHTML),
    maximum = parseInt(document.getElementById('maximum').innerHTML),
    userInput = document.getElementById("user-input"),
    gameDiv = document.getElementById('game');

document.getElementById('submit-value').addEventListener('click', checkGuess);

//function to show the error
function showError(message){
  let div = document.createElement('div');
  div.style.backgroundColor = 'red';
  div.style.margin = '3px';
  div.innerHTML = `<p>${message}</p>`

  gameDiv.parentNode.insertBefore(div, gameDiv);

  setTimeout(() => {
    div.style.display = 'none';
  }, 2000);
}

function checkGuess(event) {
  if(userInput.value<minimum || userInput.value>maximum){
    showError(`Your guess number,  ${userInput.value}, is outside the given range`)
  } else {
   alert(`Your guess was ${userInput.value}`);
  }

  event.preventDefault();
}
