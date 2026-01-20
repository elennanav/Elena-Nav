$(document).ready(function() {
  // Inicializar Turn.js
  $('#book').turn({
    width: 900,
    height: 600,
    autoCenter: true,
    display: 'double',
    gradients: true,
    elevation: 50
  });

  // Ajuste responsive
  $(window).on('resize', function() {
    const w = window.innerWidth > 900 ? 900 : window.innerWidth * 0.95;
    const h = window.innerHeight > 600 ? 600 : window.innerHeight * 0.7;
    $('#book').turn('size', w, h);
  });

  // --- CONTROL POR TECLADO ---
  $(document).on('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      $('#book').turn('previous'); // izquierda
    } else if (e.key === "ArrowRight") {
      $('#book').turn('next');     // derecha
    }
  });

  // --- ZONAS INVISIBLES DE CLIC ---
  // Creamos dos divs invisibles que ocupan los bordes izquierdo y derecho
  const $book = $('#book');
  const leftZone = $('<div class="click-zone left"></div>').appendTo('body');
  const rightZone = $('<div class="click-zone right"></div>').appendTo('body');

  const updateZones = () => {
    const offset = $book.offset();
    const width = $book.width();
    const height = $book.height();

    leftZone.css({
      position: 'absolute',
      top: offset.top,
      left: offset.left,
      width: width * 0.2,  // 20% ancho izquierdo
      height: height,
      cursor: 'pointer',
      zIndex: 1000
    });

    rightZone.css({
      position: 'absolute',
      top: offset.top,
      left: offset.left + width * 0.8, // 20% ancho derecho
      width: width * 0.2,
      height: height,
      cursor: 'pointer',
      zIndex: 1000
    });
  };

  updateZones();
  $(window).on('resize', updateZones);

  // Click para pasar página
  leftZone.on('click', function() {
    $('#book').turn('previous');
  });

  rightZone.on('click', function() {
    $('#book').turn('next');
  });
});
