// Get the HTML elements
const startScreen = window.document.getElementById("start-screen");
const playButton = window.document.getElementById("play-button");
const mainGame = window.document.getElementById("game");
const playerGuess = window.document.getElementById("player-guess");
const playerGuessBtn = window.document.getElementById("player-guess-btn");
const hint = window.document.getElementById("hint");

// Logic

if (startScreen.classList.contains("active")) {
  // Hide main game page when the app is loaded
  mainGame.style.display = "none";
}

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

    let mysterynumber = Math.floor(Math.random() * 101); // Generate a random number between 1 - 100
    console.log(mysterynumber);

    // innit

    playerGuessBtn.addEventListener("click", function () {
      // Register player input on the 'guess' button
      let guess = parseInt(playerGuess.value); // Turn the player guess input into a integer

      if (guess > 100) {
        alert("Must be under 100");
      } else if (guess === mysterynumber) {
        // If the player guessed correctly
        const line = window.document.createElement("p"); // Create a 'p' element
        line.classList.add("answer"); // Give it the class 'answer'
        line.textContent = "🎉 YOU GUESSED IT, CONGRATS! 🎉"; // Say that it is corret
        hint.appendChild(line); // Show the line on 'hint' div

        playerGuess.value = "";
      } else if (guess < mysterynumber) {
        hint.value = "";
        const line = window.document.createElement("p"); // Create a 'p' element
        line.classList.add("answer"); // Give it the class 'answer'
        line.textContent = "😕 You're a little off, try a bigger number ⬆️"; // Say to try a bigger number
        hint.appendChild(line); // Show the line on 'hint' div

        playerGuess.value = "";
      } else if (guess > mysterynumber) {
        hint.value = "";
        const line = window.document.createElement("p"); // Create a 'p' element
        line.classList.add("answer"); // Give it the class 'answer'
        line.textContent = "😕 You're a little off, try a smaller number ⬇️"; // Say to try a smaller number
        hint.appendChild(line); // Show the line on 'hint' div

        playerGuess.value = "";
      }
    });
  }
});
