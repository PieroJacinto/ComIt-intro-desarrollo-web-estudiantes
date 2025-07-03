# 🔍 DOM CHEATSHEET - Clase 7

## 📋 SELECCIONAR ELEMENTOS

### **Métodos básicos**
```javascript
// Por ID (más común)
const elemento = document.querySelector('#mi-id');

// Por clase
const elemento = document.querySelector('.mi-clase');

// Por etiqueta
const elemento = document.querySelector('button');
const elemento = document.querySelector('input');
const elemento = document.querySelector('form');
```

### **Ejemplos prácticos**
```javascript
// Seleccionar botón específico
const btnMostrar = document.querySelector('#btn-mostrar');

// Seleccionar input de búsqueda
const inputBuscar = document.querySelector('#input-buscar');

// Seleccionar contenedor de resultados
const contenedor = document.querySelector('#resultados');

// Seleccionar formulario
const formulario = document.querySelector('#mi-formulario');
```

---

## ✏️ MODIFICAR CONTENIDO

### **Cambiar HTML completo**
```javascript
elemento.innerHTML = '<h3>Nuevo contenido</h3>';
elemento.innerHTML = `<p>Hola ${nombre}</p>`;
```

### **Cambiar solo texto**
```javascript
elemento.textContent = 'Solo texto sin HTML';
elemento.textContent = `Usuario: ${usuario}`;
```

### **Obtener valores de inputs**
```javascript
// Input de texto
const texto = input.value;

// Textarea
const mensaje = textarea.value;

// Select
const opcionSeleccionada = select.value;
```

### **Limpiar contenido**
```javascript
elemento.innerHTML = '';
input.value = '';
```

---

## 🎨 MODIFICAR ESTILOS

### **Colores**
```javascript
// Color de fondo
elemento.style.backgroundColor = '#48bb78';
elemento.style.backgroundColor = 'blue';

// Color de texto
elemento.style.color = 'white';
elemento.style.color = '#333333';
```

### **Tamaños y espacios**
```javascript
// Tamaño de fuente
elemento.style.fontSize = '20px';
elemento.style.fontSize = '1.5rem';

// Márgenes y padding
elemento.style.margin = '10px';
elemento.style.padding = '15px';
```

### **Otros estilos comunes**
```javascript
// Borde
elemento.style.border = '2px solid #333';
elemento.style.borderRadius = '8px';

// Ocultar/mostrar
elemento.style.display = 'none';
elemento.style.display = 'block';
```

---

## 🔄 RESETEAR ESTILOS

### **Volver a valores por defecto**
```javascript
// Resetear un estilo específico
elemento.style.backgroundColor = '';
elemento.style.color = '';

// Resetear todos los estilos
elemento.style = '';
```

---

## 💡 TIPS IMPORTANTES

### **Verificar que el elemento existe**
```javascript
const boton = document.querySelector('#mi-boton');
if (boton) {
    boton.innerHTML = 'Botón encontrado';
} else {
    console.log('Botón no encontrado');
}
```

### **Nombres de propiedades CSS en JavaScript**
```css
/* CSS */
background-color: blue;
font-size: 16px;
border-radius: 5px;
```

```javascript
/* JavaScript */
elemento.style.backgroundColor = 'blue';
elemento.style.fontSize = '16px';
elemento.style.borderRadius = '5px';
```

**Regla:** CSS con guiones → JavaScript con camelCase

---

## 🚨 ERRORES COMUNES

### **❌ Error: Cannot read property of null**
```javascript
// Problema
const boton = document.querySelector('#boton-inexistente'); // null
boton.innerHTML = 'texto'; // ERROR!

// Solución
const boton = document.querySelector('#boton-que-existe');
if (boton) {
    boton.innerHTML = 'texto';
}
```

### **❌ Error: Seleccionores incorrectos**
```javascript
// Incorrecto
document.querySelector('mi-id');        // ❌ Falta #
document.querySelector('mi-clase');     // ❌ Falta .

// Correcto
document.querySelector('#mi-id');       // ✅ Con #
document.querySelector('.mi-clase');    // ✅ Con .
```

### **❌ Error: Propiedades CSS incorrectas**
```javascript
// Incorrecto
elemento.style.background-color = 'blue';  // ❌ Guión no funciona

// Correcto
elemento.style.backgroundColor = 'blue';   // ✅ camelCase
```