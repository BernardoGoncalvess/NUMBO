// Detects if it's opened in PWA ----------

// Se o modo de display do ecra for standalone
// adicionar a class .pwa-active
// senao
// remover a class

let isPwa = window.document.getElementById("non-pwa");

if (window.matchMedia("(display-mode:standalone)").matches) {
  isPwa.classList.remove("pwa-active");
} else {
  isPwa.classList.add("pwa-active");
}
