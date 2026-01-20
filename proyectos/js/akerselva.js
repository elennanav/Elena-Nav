// Esperar a que el DOM cargue
$(document).ready(function() {
  // Inicializar Turn.js
  $('#book').turn({
    width: 900,
    height: 600,
    autoCenter: true,
    gradients: true,
    elevation: 50
  });

  // Ajustar tamaño en modo responsive
  $(window).on('resize', function() {
    const w = window.innerWidth > 900 ? 900 : window.innerWidth * 0.95;
    const h = window.innerHeight > 600 ? 600 : window.innerHeight * 0.7;
    $('#book').turn('size', w, h);
  });
});

// Botones de navegación
$('.next').on('click', function() {
  $('#book').turn('next');
});

$('.prev').on('click', function() {
  $('#book').turn('previous');
});

$(document).keydown(function(e) {
  switch(e.keyCode) {
    case 37: // Flecha izquierda
      $('#book').turn('previous');
      break;
    case 39: // Flecha derecha
      $('#book').turn('next');
      break;
  }
});
