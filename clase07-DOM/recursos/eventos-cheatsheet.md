# 🖱️ EVENTOS CHEATSHEET - Clase 7

## 📋 SINTAXIS BÁSICA

### **Estructura general**
```javascript
elemento.addEventListener('tipoDeEvento', function() {
    // código que se ejecuta cuando ocurre el evento
});
```

### **Con event parameter**
```javascript
elemento.addEventListener('tipoDeEvento', function(event) {
    // código que usa información del evento
});
```

---

## 🖱️ EVENTOS DE MOUSE

### **Click**
```javascript
const boton = document.querySelector('#mi-boton');
boton.addEventListener('click', function() {
    console.log('Botón clickeado');
});
```

### **Mouse sobre elemento (mouseover)**
```javascript
const caja = document.querySelector('#mi-caja');
caja.addEventListener('mouseover', function() {
    caja.style.backgroundColor = '#48bb78';
});
```

### **Mouse sale del elemento (mouseout)**
```javascript
const caja = document.querySelector('#mi-caja');
caja.addEventListener('mouseout', function() {
    caja.style.backgroundColor = '';
});
```

---

## ⌨️ EVENTOS DE TECLADO

### **Escribir en input (keyup)**
```javascript
const input = document.querySelector('#mi-input');
input.addEventListener('keyup', function(event) {
    const texto = event.target.value;
    console.log('Escribiste:', texto);
});
```

### **Ejemplo práctico: búsqueda en tiempo real**
```javascript
const inputBuscar = document.querySelector('#buscar');
const resultados = document.querySelector('#resultados');

inputBuscar.addEventListener('keyup', function(event) {
    const textoBusqueda = event.target.value;
    resultados.innerHTML = `Buscando: ${textoBusqueda}`;
});
```

---

## 📝 EVENTOS DE FORMULARIO

### **Submit (enviar formulario)**
```javascript
const formulario = document.querySelector('#mi-formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // ¡SIEMPRE necesario!
    
    // Obtener datos del formulario
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    
    console.log('Nombre:', nombre);
    console.log('Email:', email);
});
```

### **¿Por qué event.preventDefault()?**
```javascript
// Sin preventDefault()
form.addEventListener('submit', function(event) {
    console.log('Datos enviados');
    // La página se recarga automáticamente ❌
});

// Con preventDefault()
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página
    console.log('Datos enviados');
    // La página NO se recarga ✅
});
```

---

## 🔄 EVENTO AL CARGAR LA PÁGINA

### **DOMContentLoaded**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada completamente');
    
    // Aquí va tu código de inicialización
    const boton = document.querySelector('#mi-boton');
    boton.addEventListener('click', function() {
        console.log('Click!');
    });
});
```

### **¿Por qué es importante?**
```javascript
// Problema: Script se ejecuta antes de que HTML esté listo
const boton = document.querySelector('#mi-boton'); // null (no existe aún)
boton.addEventListener('click', ...); // ERROR!

// Solución: Esperar a que HTML esté listo
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.querySelector('#mi-boton'); // ✅ Ahora existe
    boton.addEventListener('click', ...); // ✅ Funciona
});
```

---

## 💡 COMBINACIONES ÚTILES

### **Click + cambiar contenido**
```javascript
const boton = document.querySelector('#btn-mostrar');
const contenedor = document.querySelector('#contenedor');

boton.addEventListener('click', function() {
    contenedor.innerHTML = '<h3>¡Contenido mostrado!</h3>';
});
```

### **Keyup + filtrar lista**
```javascript
const inputFiltro = document.querySelector('#filtro');
const lista = document.querySelector('#lista');

inputFiltro.addEventListener('keyup', function(event) {
    const filtro = event.target.value;
    
    if (filtro === '') {
        lista.innerHTML = 'Escribe para filtrar';
    } else {
        lista.innerHTML = `Filtrando por: ${filtro}`;
    }
});
```

### **Submit + mostrar datos**
```javascript
const form = document.querySelector('#contacto');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.querySelector('#nombre').value;
    const mensaje = document.querySelector('#mensaje').value;
    
    resultado.innerHTML = `
        <h4>Mensaje recibido:</h4>
        <p><strong>De:</strong> ${nombre}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
    `;
});
```

---

## 🚨 ERRORES COMUNES

### **❌ Olvidar event.preventDefault()**
```javascript
// Problema: Formulario recarga la página
form.addEventListener('submit', function(event) {
    // event.preventDefault(); // ← FALTA ESTA LÍNEA
    console.log('Enviado'); // Se ejecuta pero la página se recarga
});

// Solución: Siempre usar preventDefault en formularios
form.addEventListener('submit', function(event) {
    event.preventDefault(); // ✅ Previene recarga
    console.log('Enviado'); // ✅ Se ejecuta sin recarga
});
```

### **❌ Agregar eventos antes de que existan los elementos**
```javascript
// Problema: Script al inicio del HTML
const boton = document.querySelector('#mi-boton'); // null
boton.addEventListener('click', ...); // ERROR!

// Solución: Usar DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.querySelector('#mi-boton'); // ✅ Existe
    boton.addEventListener('click', ...); // ✅ Funciona
});
```

### **❌ Tipos de evento incorrectos**
```javascript
// Incorrecto
elemento.addEventListener('onclick', ...);    // ❌ 'onclick' no existe
elemento.addEventListener('keypress', ...);   // ❌ Usar 'keyup' es mejor

// Correcto
elemento.addEventListener('click', ...);      // ✅ 'click'
elemento.addEventListener('keyup', ...);      // ✅ 'keyup'
```

---

## 📝 TIPOS DE EVENTOS MÁS USADOS

| Evento | Cuándo ocurre | Ejemplo |
|--------|---------------|---------|
| `click` | Click del mouse | Botones |
| `keyup` | Soltar tecla | Inputs de búsqueda |
| `submit` | Enviar formulario | Formularios |
| `mouseover` | Mouse encima | Efectos hover |
| `mouseout` | Mouse sale | Efectos hover |
| `DOMContentLoaded` | Página cargada | Inicialización |