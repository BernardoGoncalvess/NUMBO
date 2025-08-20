// Detect if the app is open on the web or as a PWA

function isPwa() {
  // function that detects if the link have /pwa included
  return (
    window.matchMedia('("display-mode: standalone")').matches ||
    window.navigator.standalone === true //IOS
  );
}

if (isPwa()) {
  // If the display mode is standalone
  console.log("ok");
  // log 'ok'
} else {
  // Hide elements
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
}
