// Detect if it's in PWA on phone

// function that detects if it's opened in standalone ----------
// function isPwa() {
//   return (
//     window.matchMedia('("display-mode: standalone")').matches ||
//     window.navigator.standalone === true //IOS
//   );
// }

// init if its opened in standalone ----------
let nonPwa = window.document.getElementById("non-pwa");
if (
  window.matchMedia('("display-mode: standalone")').matches ||
  window.navigator.standalone === true
) {
  console.log("PWA-active");

  nonPwa.style.display = "none";
  startScreen.style.display = "block";
  footer.style.display = "block";
} else {
  console.log("PWA-not active");
}
