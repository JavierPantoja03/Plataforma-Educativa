document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const grado = params.get('grado');
    const juegosEstudiante = document.getElementById('juegosEstudiante');
    const volverInicio = document.getElementById('volverInicio');

    volverInicio.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    if (grado) {
        juegosEstudiante.innerHTML = `<h2>Juegos para Grado ${grado}</h2>
            <a href="URL_JUEGO_1" target="_blank">Juego 1</a><br>
            <a href="URL_JUEGO_2" target="_blank">Juego 2</a><br>
            <a href="URL_JUEGO_3" target="_blank">Juego 3</a><br>
            <a href="URL_JUEGO_4" target="_blank">Juego 4</a><br>
            <a href="URL_JUEGO_5" target="_blank">Juego 5</a>`;
    }
});