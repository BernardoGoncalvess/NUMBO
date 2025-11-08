// Detects if it's opened in PWA ----------

// Se o modo de display do ecra for standalone
// adicionar a class .pwa-active
// senao
// remover a class

let isPwa = window.document.getElementById("non-pwa");
let body = window.document.body;

if (!window.matchMedia("(display-mode:standalone)").matches) {
  isPwa.classList.add("pwa-active");
} else {
  body.classList.add("pwa-mode");
}
