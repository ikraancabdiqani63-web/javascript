let random = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
  let userGuess = document.getElementById("guessInput").value;
  if (userGuess == random) {
    alert("Congratulations! You guessed the number!");
  } else if (userGuess < random) {
    alert("Too low! Try again.");
  } else {
    alert("Too high! Try again.");
  }
}
document.getElementById("guessInput").style.backgroundColor = "lightblue";
