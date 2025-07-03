// 📄 funciones.js - Proyecto Cafetería Luna (VERSIÓN PROFESOR - COMPLETA)
// Importar datos del otro archivo
import { cafeteria, productos, equipo } from './datos.js';

// 🏪 FUNCIÓN: Mostrar información de la cafetería
function mostrarInfoCafeteria() {
    return `
        <h2>${cafeteria.nombre}</h2>
        <p>${cafeteria.descripcion}</p>
        <p>📍 ${cafeteria.direccion}</p>
        <p>📞 ${cafeteria.telefono}</p>
    `;
}

// ☕ FUNCIÓN: Mostrar todo el menú
function mostrarMenuCompleto() {
    let html = '<h3>☕ Nuestro Menú</h3>';
    
    productos.forEach(function(producto) {
        html += `
            <div class="producto">
                <h4>${producto.nombre}</h4>
                <p>Precio: $${producto.precio}</p>
                <p>Categoría: ${producto.categoria}</p>
                <p>${producto.disponible ? '✅ Disponible' : '❌ No disponible'}</p>
            </div>
        `;
    });
    
    return html;
}

// 🔍 FUNCIÓN: Buscar producto por nombre
function buscarProducto(texto) {
    if (texto === '') {
        return '<p>Escribe algo para buscar.</p>';
    }
    
    let html = `<h3>🔍 Resultados para: "${texto}"</h3>`;
    let encontrado = false;
    
    productos.forEach(function(producto) {
        if (producto.nombre.toLowerCase().includes(texto.toLowerCase())) {
            html += `
                <div class="resultado">
                    <h4>${producto.nombre}</h4>
                    <p>Precio: $${producto.precio}</p>
                    <p>Categoría: ${producto.categoria}</p>
                    <p>${producto.disponible ? '✅ Disponible' : '❌ No disponible'}</p>
                </div>
            `;
            encontrado = true;
        }
    });
    
    if (!encontrado) {
        html += '<p>No encontramos productos con ese nombre.</p>';
    }
    
    return html;
}

// ✅ EXPORTAR funciones
export { mostrarInfoCafeteria, mostrarMenuCompleto, buscarProducto };