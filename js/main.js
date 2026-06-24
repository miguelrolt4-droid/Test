// main.js — Point d'entrée JavaScript

document.addEventListener("DOMContentLoaded", () => {
  console.log("Site chargé avec succès !");

  // Navigation fluide
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const cible = document.querySelector(this.getAttribute("href"));
      if (cible) {
        cible.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
