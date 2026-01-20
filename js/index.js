/* =========================================================
   1. APARICIÓN GLOBAL (TODO EL BODY EXCEPTO #INICIO)
   ========================================================= */

// Seleccionamos todos los elementos excepto los que están dentro de #inicio
const globalElements = document.querySelectorAll('body *:not(#inicio *)');

// Añadimos la clase base de fade
globalElements.forEach(el => el.classList.add('fade'));

const globalObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // solo una vez
    }
  });
}, {
  threshold: 0.2
});

// Observamos todos los elementos globales
globalElements.forEach(el => globalObserver.observe(el));


/* =========================================================
   2. APARICIÓN ESPECÍFICA · SECCIÓN INICIO
   ========================================================= */

// Solo los grupos conceptuales del hero
const inicioElements = document.querySelectorAll(
  '#inicio .bolso, #inicio .objetos, #inicio .objmenu'
);

// Añadimos la clase base de fade
inicioElements.forEach(el => el.classList.add('fade'));

const inicioObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // solo una vez
    }
  });
}, {
  threshold: 0.6
});

// Observamos los elementos del inicio
inicioElements.forEach(el => inicioObserver.observe(el));

/* =========================================================
   3. OBJETOS
   ========================================================= */

const objetos = [
  {selector: '.milan', top: 17, rot: -85},
  {selector: '.siargao', top: 19, rot: 103},
  {selector: '.gafas', top: 20, rot: 80},
  {selector: '.gloss', top: 17, rot: 160},
  {selector: '.airpods', top: 23, rot: 10}
];

// Ajustes iniciales (más arriba 2% y +3°)
objetos.forEach(obj => {
  const el = document.querySelector(obj.selector);
  el.style.top = (obj.top - 10) + '%';
  el.style.transform = `rotate(${obj.rot + 5}deg)`;
});

// Función que se activa al hacer scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  objetos.forEach(obj => {
    const el = document.querySelector(obj.selector);

    // Calculamos porcentaje de scroll para animación
    const offset = Math.min(scrollY / windowHeight, 1);

    const topValue = (obj.top - 2) + offset * 2; // sube 2% al 100% scroll
    const rotValue = (obj.rot + 3) - offset * 3; // gira -3° al 100% scroll

    el.style.top = topValue + '%';
    el.style.transform = `rotate(${rotValue}deg)`;
  });
});


/* =========================================================
   4. SOBREMÍ
   ========================================================= */
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.arrow.left');
  const btnRight = document.querySelector('.arrow.right');

  let activeIndex = 0;

  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active', 'left', 'right');

      if (index === activeIndex) {
        slide.classList.add('active');
      } else if (index === (activeIndex - 1 + slides.length) % slides.length) {
        slide.classList.add('left');
      } else if (index === (activeIndex + 1) % slides.length) {
        slide.classList.add('right');
      }
    });
  }

  btnRight.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % slides.length;
    updateSlides();
  });

  btnLeft.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + slides.length) % slides.length;
    updateSlides();
  });



/* =========================================================
   5. CV
   ========================================================= */

const section = document.querySelector('#contacto');
const line = document.querySelector('.cv-line');

window.addEventListener('scroll', () => {
  const rect = section.getBoundingClientRect();
  const vh = window.innerHeight;

  let progress = (vh - rect.top - 100) / (vh * 0.6);
  progress = Math.min(Math.max(progress, 0), 1);

  line.style.width = `${progress * 100}%`;
});
