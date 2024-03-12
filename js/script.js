$(document).ready(function() {                             // Selecciona todos los enlaces que empiezan con #
    $('a[href^="#"]').on('click', function(event) {       // Obtiene el elemento al que apunta el enlace
        var target = $(this.getAttribute('href'));        // Verifica si el elemento existe en el documento
        if( target.length ) {                             // Evita el comportamiento por defecto del enlace
            event.preventDefault();                       // Realiza una animación de desplazamiento suave hasta el elemento
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});