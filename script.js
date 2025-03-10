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

    const estudiantesRegistrados = [];

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
        const idDocente = document.getElementById('idDocente').value;
        const nombreDocente = document.getElementById('nombreDocente').value;

        if (!idDocente || !nombreDocente) {
            alert('Debes diligenciar todos los campos. No dejes espacios en blanco.');
            return;
        }

        window.location.href = 'docente.html';
    });

    siguienteEstudiante.addEventListener('click', function() {
        const nombre = document.getElementById('nombreEstudiante').value;
        const codigo = document.getElementById('codigoEstudiante').value;
        const grado = document.getElementById('gradoEstudiante').value;

        if (!nombre || !codigo || !grado) {
            alert('Debes diligenciar todos los campos. No dejes espacios en blanco.');
            return;
        }

        estudiantesRegistrados.push({ nombre, codigo, grado });
        window.localStorage.setItem('estudiantesRegistrados', JSON.stringify(estudiantesRegistrados));

        window.location.href = `estudiante.html?grado=${grado}`;
    });
});