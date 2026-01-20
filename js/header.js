// ------------------------- MENU ----------------------------
const menuItems = {
    inicio: document.querySelector('.menu-item.inicio'),
    intro: document.querySelector('.menu-item.intro'),
    proyectos: document.querySelector('.menu-item.proyectos'),
    sobremi: document.querySelector('.menu-item.sobremi'),
    contacto: document.querySelector('.menu-item.contacto')
};

const secciones = {
    inicio: document.getElementById('inicio'),
    intro: document.getElementById('intro'),
    proyectos: document.getElementById('proyectos'),
    sobremi: document.getElementById('sobremi'),
    contacto: document.getElementById('contacto')
};

function actualizarMenu() {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    // Limpiamos clases
    for (let key in menuItems) {
        menuItems[key].classList.remove('activo', 'collapsed');
    }

    if (window.scrollY < 20) {
        // Scroll < 20px: todos visibles completos
        for (let key in menuItems) {
            menuItems[key].classList.add('activo');
        }

    } else if (scrollPos < secciones.intro.offsetTop) {
        // INICIO
        menuItems.inicio.classList.add('activo');
        menuItems.intro.classList.add('collapsed');
        menuItems.proyectos.classList.add('collapsed');
        menuItems.sobremi.classList.add('collapsed');
        menuItems.contacto.classList.add('collapsed');

    } else if (scrollPos >= secciones.intro.offsetTop && scrollPos < secciones.proyectos.offsetTop) {
        // INTRO
        menuItems.intro.classList.add('activo');
        menuItems.inicio.classList.add('collapsed');
        menuItems.proyectos.classList.add('collapsed');
        menuItems.sobremi.classList.add('collapsed');
        menuItems.contacto.classList.add('collapsed');

    } else if (scrollPos >= secciones.proyectos.offsetTop && scrollPos < secciones.sobremi.offsetTop) {
        // PROYECTOS
        menuItems.proyectos.classList.add('activo');
        menuItems.inicio.classList.add('collapsed');
        menuItems.intro.classList.add('collapsed');
        menuItems.sobremi.classList.add('collapsed');
        menuItems.contacto.classList.add('collapsed');

    } else if (scrollPos >= secciones.sobremi.offsetTop && scrollPos < secciones.contacto.offsetTop) {
        // SOBRE MÍ
        menuItems.sobremi.classList.add('activo');
        menuItems.inicio.classList.add('collapsed');
        menuItems.intro.classList.add('collapsed');
        menuItems.proyectos.classList.add('collapsed');
        menuItems.contacto.classList.add('collapsed');

    } else {
        // CONTACTO
        menuItems.contacto.classList.add('activo');
        menuItems.inicio.classList.add('collapsed');
        menuItems.intro.classList.add('collapsed');
        menuItems.proyectos.classList.add('collapsed');
        menuItems.sobremi.classList.add('collapsed');
    }
}

window.addEventListener('scroll', actualizarMenu);
window.addEventListener('load', actualizarMenu);
