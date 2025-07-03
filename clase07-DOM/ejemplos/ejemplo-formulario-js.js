// ejemplo-3-formularios.js

// 1. Seleccionar el formulario
const form = document.querySelector('#formulario-contacto');

// 2. Escuchar el evento submit
form.addEventListener('submit', function(event) {
    
    // 3. Evitar que se recargue la página
    event.preventDefault();
    
    // 4. Obtener los valores
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const mensaje = document.querySelector('#mensaje').value;
    
    // 5. Validar que no estén vacíos
    if (nombre === '' || email === '' || mensaje === '') {
        alert('Completa todos los campos');
        return;
    }
    
    // 6. Validar email básico
    if (!email.includes('@')) {
        alert('Email inválido');
        return;
    }
    
    // 7. Mostrar resultado
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `
        <h3>¡Mensaje enviado!</h3>
        <p>Nombre: ${nombre}</p>
        <p>Email: ${email}</p>
        <p>Mensaje: ${mensaje}</p>
    `;
    resultado.style.display = 'block';
    
    // 8. Limpiar formulario
    form.reset();
});

// Función para limpiar
function limpiar() {
    document.querySelector('#formulario-contacto').reset();
    document.querySelector('#resultado').style.display = 'none';
}