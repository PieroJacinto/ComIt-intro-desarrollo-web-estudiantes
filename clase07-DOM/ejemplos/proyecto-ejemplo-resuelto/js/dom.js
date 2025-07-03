// 📄 dom.js - Proyecto Cafetería Luna (VERSIÓN PROFESOR - COMPLETA)
// Solo DOM y eventos

// Importar funciones del otro archivo
import { mostrarInfoCafeteria, mostrarMenuCompleto, buscarProducto } from './funciones.js';

// 🎯 FUNCIÓN: Inicializar página
function inicializarPagina() {
    // Mostrar información básica al cargar
    const infoCafeteria = document.querySelector('#info-cafeteria');
    if (infoCafeteria) {
        infoCafeteria.innerHTML = mostrarInfoCafeteria();
    }

    // Mostrar menú completo al cargar
    const menuContainer = document.querySelector('#menu-container');
    if (menuContainer) {
        menuContainer.innerHTML = mostrarMenuCompleto();
    }

    // Agregar evento al formulario de búsqueda
    const formBuscar = document.querySelector('#form-buscar');
    if (formBuscar) {
        formBuscar.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const inputBuscar = document.querySelector('#input-buscar');
            const textoBusqueda = inputBuscar.value;
            
            const resultadoBusqueda = document.querySelector('#resultado-busqueda');
            resultadoBusqueda.innerHTML = buscarProducto(textoBusqueda);
        });
    }
}

// 🚀 Ejecutar cuando la página termine de cargar
document.addEventListener('DOMContentLoaded', inicializarPagina);