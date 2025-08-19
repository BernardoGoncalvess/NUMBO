// Get the HTML elements
const startScreen = window.document.getElementById("start-screen");
const playButton = window.document.getElementById("play-button");
const mainGame = window.document.getElementById("game");
const playerGuess = window.document.getElementById("player-guess");
const playerGuessBtn = window.document.getElementById("player-guess-btn");
const hint = window.document.getElementById("hint");
const replay = window.document.getElementById("replay");
const footer = window.document.getElementById("app-footer");
const page = window.document.getElementById("full-page");

// Logic

function randomNumber() {
  return Math.floor(Math.random() * 101); // Generate a random number between 1 - 100
}

let mysteryNumber = randomNumber(); // Save the random number on mysteryNumber variable

playButton.addEventListener("click", function () {
  // Register the click on the play button
  startScreen.classList.remove("active"); // Remove class 'active' from the splash screen
  mainGame.classList.add("active"); // Add 'active' class to the game screen

  if (mainGame.classList.contains("active")) {
    // If main game screen have the class 'active'
    // Hide the startscreen
    // Shows game screen
    startScreen.style.display = "none";
    mainGame.style.display = "block";

    randomNumber();

    const line = window.document.createElement("p"); // Create a 'p' element
    line.setAttribute("id", "answer"); // Give it the class 'answer'
    line.textContent = "";
    hint.appendChild(line); // Show the line on 'hint' div

    // innit

    playerGuessBtn.addEventListener("click", function () {
      // Register player input on the 'guess' button
      let guess = parseInt(playerGuess.value); // Turn the player guess input into a integer

      if (guess > 100) {
        alert("Must be under 100");
      } else if (guess === mysteryNumber) {
        // If the player guessed correctly
        randomCorrectMessage = Math.floor(Math.random() * correctGuess.length); // gives a random number between 0 and the number of items on the array
        correctMessage = correctGuess[randomCorrectMessage]; // Outputs the message at the index of the random number
        line.setAttribute("class", "rightAnswer"); // Class for corrrect messages to have different styles
        line.textContent = correctMessage; // Say that it is correct

        playerGuess.value = ""; // Clears the input field after being used
        playerGuess.disabled = true; // Disable the input field so after you guess it you cant type anything more
      } else if (guess < mysteryNumber) {
        // If the player guesses a lower number
        randomBelowMessage = Math.floor(Math.random() * belowGuess.length); // gives a random number between 0 and the number of items on the array
        belowMessage = belowGuess[randomBelowMessage]; // Outputs the message at the index of the random number
        line.textContent = belowMessage; // Say that it is incorrect

        playerGuess.value = ""; // Clears the input field after being used
      } else if (guess > mysteryNumber) {
        // If the player guesses a higher number
        randomAboveMessage = Math.floor(Math.random() * aboveGuess.length); // gives a random number between 0 and the number of items on the array
        aboveMessage = aboveGuess[randomAboveMessage]; // Outputs the message at the index of the random number
        line.textContent = aboveMessage; // Say that it is incorrect

        playerGuess.value = ""; // Clears the input field after being used
      }
    });

    playerGuess.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        // Register player input on the 'Enter' key
        let guess = parseInt(playerGuess.value); // Turn the player guess input into a integer

        if (guess > 100) {
          alert("Must be under 100");
        } else if (guess === mysteryNumber) {
          // If the player guessed correctly
          randomCorrectMessage = Math.floor(
            Math.random() * correctGuess.length
          ); // gives a random number between 0 and the number of items on the array
          correctMessage = correctGuess[randomCorrectMessage]; // Outputs the message at the index of the random number
          line.setAttribute("class", "rightAnswer"); // Class for corrrect messages to have different styles
          line.textContent = correctMessage; // Say that it is correct

          playerGuess.value = ""; // Clears the input field after being used
          playerGuess.disabled = true; // Disable the input field so after you guess it you cant type anything more
        } else if (guess < mysteryNumber) {
          // If the player guesses a lower number
          randomBelowMessage = Math.floor(Math.random() * belowGuess.length); // gives a random number between 0 and the number of items on the array
          belowMessage = belowGuess[randomBelowMessage]; // Outputs the message at the index of the random number
          line.textContent = belowMessage; // Say that it is incorrect

          playerGuess.value = ""; // Clears the input field after being used
        } else if (guess > mysteryNumber) {
          // If the player guesses a higher number
          randomAboveMessage = Math.floor(Math.random() * aboveGuess.length); // gives a random number between 0 and the number of items on the array
          aboveMessage = aboveGuess[randomAboveMessage]; // Outputs the message at the index of the random number
          line.textContent = aboveMessage; // Say that it is incorrect

          playerGuess.value = ""; // Clears the input field after being used
        }
      }
    });
  }
});

if (window.matchMedia("(display-mode: standalone)").matches) {
  console.log("This is running as standalone.");
}
