const logo = document.querySelector(".logo");
const hero = document.querySelector("#hero");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;

    // 🔹 Progreso del scroll en la primera pantalla (0 a 1)
    let progress = Math.min(scrollY / heroHeight, 1);

    // 🔹 Escalado: de 1 → 0.1 (1200px → 120px)
    const scale = 1 - 0.8 * progress;

    // 🔹 Movimiento vertical: de centro (50%) → top (10%)
    const translateY = -50 - 50 * progress; // mueve hacia arriba

    // 🔹 Aplicar transformación
    logo.style.transform = `translate(-50%, ${translateY}%) scale(${scale})`;
});

$(document).ready(function () {
    $("#galeria-justificada").justifiedGallery({
        rowHeight: 200, // altura de las filas
        lastRow: "nojustify",
        margins: 10, // espacio entre imágenes
        captions: false
    });
});