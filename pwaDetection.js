// Detects if it's opened in PWA ----------

// Se o modo de display do ecra for standalone
// adicionar a class .pwa-active
// senao
// remover a class

let isPwa = window.document.getElementById("non-pwa");
let body = window.document.body;

if (!window.matchMedia("(display-mode:standalone)").matches) {
  console.log("App not in standalone");

  isPwa.classList.add("pwa-notActive");
} else {
  body.classList.add("pwa-mode");
}
