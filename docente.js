document.addEventListener('DOMContentLoaded', function() {
    const botonCursos = document.getElementById('botonCursos');
    const botonResultados = document.getElementById('botonResultados');
    const grados = document.getElementById('grados');
    const resultados = document.getElementById('resultados');
    const volverInicio = document.getElementById('volverInicio');
    const botonEstudiantesRegistrados = document.getElementById('botonEstudiantesRegistrados');
    const estudiantesRegistradosDiv = document.getElementById('estudiantesRegistrados');
    const listaEstudiantesRegistradosDiv = document.getElementById('listaEstudiantesRegistrados');

    volverInicio.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    botonCursos.addEventListener('click', function() {
        grados.style.display = 'block';
        resultados.style.display = 'none';
        estudiantesRegistradosDiv.style.display = 'none';
    });

    botonResultados.addEventListener('click', function() {
        resultados.style.display = 'block';
        grados.style.display = 'none';
        estudiantesRegistradosDiv.style.display = 'none';
    });

    botonEstudiantesRegistrados.addEventListener('click', function() {
        estudiantesRegistradosDiv.style.display = 'block';
        grados.style.display = 'none';
        resultados.style.display = 'none';
        mostrarEstudiantesRegistrados();
    });

    function mostrarEstudiantesRegistrados() {
        const estudiantes = JSON.parse(localStorage.getItem('estudiantesRegistrados')) || [];
        listaEstudiantesRegistradosDiv.innerHTML = '';

        if (estudiantes.length === 0) {
            listaEstudiantesRegistradosDiv.innerHTML = '<p>No hay estudiantes registrados.</p>';
        } else {
            estudiantes.forEach(estudiante => {
                listaEstudiantesRegistradosDiv.innerHTML += `<p>Nombre: ${estudiante.nombre}, Código: ${estudiante.codigo}, Grado: ${estudiante.grado}</p>`;
            });
        }
    }

    const gradoBotones = document.querySelectorAll('.grado-boton');
    gradoBotones.forEach(boton => {
        boton.addEventListener('click', function() {
            const grado = this.dataset.grado;
            window.location.href = `estudiante.html?grado=${grado}`;
        });
    });
});