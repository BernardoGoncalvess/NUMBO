// Detect if it's in PWA on phone

// function that detects if it's opened in standalone ----------
// function isPwa() {
//   return (
//     window.matchMedia('("display-mode: standalone")').matches ||
//     window.navigator.standalone === true //IOS
//   );
// }

// init if its opened in standalone ----------
if (
  window.matchMedia('("display-mode: standalone")').matches ||
  window.navigator.standalone === true
) {
  console.log("PWA-active");

  window.document.getElementById("non-pwa").style.display = "none !important";
  startScreen.style.display = "block";
  footer.style.display = "block";
} else {
  console.log("PWA-not active");
}
