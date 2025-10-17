document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  this.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Modo Claro"
    : "🌙 Modo Escuro";
});
