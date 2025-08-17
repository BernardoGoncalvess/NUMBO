// Get the HTML elements
const startScreen = window.document.getElementById("start-screen");
const playButton = window.document.getElementById("play-button");
const mainGame = window.document.getElementById("game");
const playerGuess = window.document.getElementById("player-guess");
const playerGuessBtn = window.document.getElementById("player-guess-btn");
const hint = window.document.getElementById("hint");

// Logic

if (startScreen.classList.contains("active")) {
  //If start screen have the class 'active'
  // Hide main game page
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

    let mysterynumber = Math.floor(Math.random() * 101);
    console.log(mysterynumber);
  }
});
