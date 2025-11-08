// Detect if it's in PWA on phone

// function that detects if it's opened in standalone ----------
function isPwa() {
  return (
    window.matchMedia('("display-mode: standalone")').matches ||
    window.navigator.standalone === true //IOS
  );
}

// init if its opened in standalone ----------
// if (isPwa()) {
//   console.log("PWA");
// } else {
//   // Hide elements
//   startScreen.style.display = "none";
//   footer.style.display = "none";

//   const newElement = document.createElement("div"); // Create div
//   newElement.setAttribute("id", "non-pwa"); // Give it the id 'non-pwa'

//   const pMessage = document.createElement("p"); // Create a 'p' element to store the image
//   pMessage.classList = "nonPwaPage"; // Give it the class 'nonPwaPage'
//   pMessage.textContent = "You opened this app on a browser."; // Messsage to pass

//   const pMessage2 = document.createElement("p"); // Create a 'p' element to store the image
//   pMessage2.classList = "nonPwaPage"; // Give it the class 'nonPwaPage'
//   pMessage2.textContent = "Press share and add the app to your homescreen."; // Messsage to pass

//   newElement.appendChild(pMessage); // append the message to the div
//   newElement.appendChild(pMessage2); // append the message to the div
//   page.appendChild(newElement); // Append the div to the body
// // }

if (window.matchMedia("(width >= 480px)").matches) {
  console.log("PC mode");
} else if (window.matchMedia("(width <=. 480px").matches) {
  console.log("Mobile mode");

  startScreen.style.display = "none";
  footer.style.display = "none";

  const newElement = document.createElement("div"); // Create div
  newElement.setAttribute("id", "non-pwa"); // Give it the id 'non-pwa'

  const pMessage = document.createElement("p"); // Create a 'p' element to store the image
  pMessage.classList = "nonPwaPage"; // Give it the class 'nonPwaPage'
  pMessage.textContent = "You opened this app on a browser."; // Messsage to pass

  const pMessage2 = document.createElement("p"); // Create a 'p' element to store the image
  pMessage2.classList = "nonPwaPage"; // Give it the class 'nonPwaPage'
  pMessage2.textContent = "Press share and add the app to your homescreen."; // Messsage to pass

  newElement.appendChild(pMessage); // append the message to the div
  newElement.appendChild(pMessage2); // append the message to the div
  page.appendChild(newElement); // Append the div to the body
} else if (isPwa()) {
  console.log("Pwa mode");
}
