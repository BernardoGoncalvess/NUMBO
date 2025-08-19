// Detect if the app is open on the web or as a PWA
function isPwa() {
  // function that detects if the link have /pwa included
  return window.location.href.includes("/pwa");
}

if (isPwa()) {
  // If the link have /pwa
  console.log("ok");
  // log 'ok'
} else {
  // Hide elements
  startScreen.style.display = "none";
  footer.style.display = "none";

  const newElement = document.createElement("div"); // Create div
  newElement.setAttribute("id", "non-pwa"); // Give it the id 'non-pwa'

  const pMessage = document.createElement("p");
  pMessage.classList = "nonPwaPage";
  pMessage.textContent = "You opened this app on a browser.";

  const pMessage2 = document.createElement("p");
  pMessage2.classList = "nonPwaPage";
  pMessage2.textContent = "Press share and add the app to your homescreen.";

  newElement.appendChild(pMessage);
  newElement.appendChild(pMessage2);
  page.appendChild(newElement);
}
