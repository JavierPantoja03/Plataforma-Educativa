document.addEventListener('DOMContentLoaded', function() {
    const siguienteInicio = document.getElementById('siguienteInicio');
    const bienvenida = document.querySelector('.bienvenida');
    const seleccionRol = document.getElementById('seleccionRol');
    const volverBienvenida = document.getElementById('volverBienvenida');
    const botonDocente = document.getElementById('botonDocente');
    const botonEstudiante = document.getElementById('botonEstudiante');
    const formularioDocente = document.getElementById('formularioDocente');
    const formularioEstudiante = document.getElementById('formularioEstudiante');
    const siguienteDocente = document.getElementById('siguienteDocente');
    const siguienteEstudiante = document.getElementById('siguienteEstudiante');
    const paginaDocente = document.getElementById('paginaDocente');
    const volverSeleccionRol = document.getElementById('volverSeleccionRol');
    const verActividades = document.getElementById('verActividades');
    const verEvaluacion = document.getElementById('verEvaluacion');

    // Usar localStorage para persistencia de datos
    let estudiantesRegistrados = JSON.parse(localStorage.getItem('estudiantesRegistrados')) || [];

    siguienteInicio.addEventListener('click', function() {
        bienvenida.style.display = 'none';
        seleccionRol.style.display = 'block';
    });

    volverBienvenida.addEventListener('click', function() {
        seleccionRol.style.display = 'none';
        bienvenida.style.display = 'block';
    });

    botonDocente.addEventListener('click', function() {
        formularioDocente.style.display = 'block';
        formularioEstudiante.style.display = 'none';
    });

    botonEstudiante.addEventListener('click', function() {
        formularioEstudiante.style.display = 'block';
        formularioDocente.style.display = 'none';
    });

    siguienteDocente.addEventListener('click', function() {
        const idDocente = document.getElementById('idDocente').value.trim();
        const nombreDocente = document.getElementById('nombreDocente').value.trim();

        if (!idDocente || !nombreDocente) {
            alert('Debes diligenciar todos los campos. No dejes espacios en blanco.');
            return;
        }

        formularioDocente.style.display = 'none';
        paginaDocente.style.display = 'block';
    });

    siguienteEstudiante.addEventListener('click', function() {
        const nombre = document.getElementById('nombreEstudiante').value.trim();
        const codigo = document.getElementById('codigoEstudiante').value.trim();
        const grado = document.getElementById('gradoEstudiante').value;

        if (!nombre || !codigo || !grado) {
            alert('Debes diligenciar todos los campos. No dejes espacios en blanco.');
            return;
        }

        // Añadir el nuevo estudiante al array y actualizar localStorage
        estudiantesRegistrados.push({ nombre, codigo, grado });
        localStorage.setItem('estudiantesRegistrados', JSON.stringify(estudiantesRegistrados));

        window.location.href = `estudiante.html?grado=${grado}`;
    });

    volverSeleccionRol.addEventListener('click', function() {
        paginaDocente.style.display = 'none';
        seleccionRol.style.display = 'block';
    });

    verActividades.addEventListener('click', function() {
        window.location.href = 'actividades.html';
    });

    verEvaluacion.addEventListener('click', function() {
        window.location.href = 'evaluacion.html';
    });
});