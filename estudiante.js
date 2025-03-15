document.addEventListener('DOMContentLoaded', function() {
    const volverInicio = document.getElementById('volverInicio');
    const juegosEstudiante = document.getElementById('juegosEstudiante');
    const modalTerminar = document.getElementById('modal-terminar');
    const modalPuntaje = document.getElementById('modal-puntaje');
    const modalSi = document.getElementById('modal-si');
    const modalNo = document.getElementById('modal-no');
    const modalPuntajeOk = document.getElementById('modal-puntaje-ok');
    const inputPuntaje = document.getElementById('input-puntaje');
    const params = new URLSearchParams(window.location.search);
    const grado = params.get('grado');

    volverInicio.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    const juegos = [
        { nombre: 'Juego 1', url: 'URL_DEL_JUEGO_1' },
        { nombre: 'Juego 2', url: 'URL_DEL_JUEGO_2' },
        { nombre: 'Juego 3', url: 'URL_DEL_JUEGO_3' }
    ];

    juegos.forEach(juego => {
        const botonJuego = document.createElement('button');
        botonJuego.textContent = juego.nombre;
        botonJuego.classList.add('juego-boton');
        botonJuego.dataset.url = juego.url;
        juegosEstudiante.appendChild(botonJuego);

        botonJuego.addEventListener('click', function() {
            modalTerminar.style.display = 'block';
        });
    });

    modalSi.addEventListener('click', function() {
        modalTerminar.style.display = 'none';
        modalPuntaje.style.display = 'block';
    });

    modalNo.addEventListener('click', function() {
        modalTerminar.style.display = 'none';
        window.location.href = `estudiante.html?grado=${grado}`;
    });

    modalPuntajeOk.addEventListener('click', function() {
        const puntaje = parseInt(inputPuntaje.value);
        if (puntaje >= 1 && puntaje <= 100) {
            modalPuntaje.style.display = 'none';
            alert(`Puntaje: ${puntaje}`);
            window.location.href = `estudiante.html?grado=${grado}`;
        } else {
            alert('El puntaje debe ser un número entero entre 1 y 100.');
        }
    });
});