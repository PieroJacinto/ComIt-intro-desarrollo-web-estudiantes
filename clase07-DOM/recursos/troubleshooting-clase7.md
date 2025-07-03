# 🐛 TROUBLESHOOTING CLASE 7 - Problemas Comunes

## 🚨 ERRORES DE IMPORT/EXPORT

### **Error: Cannot use import statement outside a module**

**🔍 Síntoma:**
```
Uncaught SyntaxError: Cannot use import statement outside a module
```

**✅ Solución:**
```html
<!-- Cambiar de: -->
<script src="js/main.js"></script>

<!-- A: -->
<script type="module" src="js/main.js"></script>
```

**📝 Explicación:** Los navegadores necesitan saber que el archivo usa módulos (import/export)

---

### **Error: CORS policy / file:// protocol**

**🔍 Síntoma:**
```
Access to script at 'file:///...' from origin 'null' has been blocked by CORS policy
```

**✅ Solución:**
- **Usar Live Server** en VS Code
- No abrir HTML directamente desde el explorador
- Debe aparecer `http://localhost:5500` en la URL

**📝 Explicación:** Los navegadores bloquean import/export en archivos locales por seguridad

---

### **Error: Failed to resolve module specifier**

**🔍 Síntoma:**
```
Failed to resolve module specifier "datos.js"
```

**❌ Rutas incorrectas:**
```javascript
import { datos } from 'datos.js';        // Falta ./
import { datos } from '/datos.js';       // No usar /
import { datos } from 'js/datos.js';     // No usar carpeta
```

**✅ Ruta correcta:**
```javascript
import { datos } from './datos.js';      // Con ./ y .js
```

---

### **Error: The requested module does not provide an export**

**🔍 Síntoma:**
```
The requested module './datos.js' does not provide an export named 'productos'
```

**❌ Problemas comunes:**
```javascript
// En datos.js
const productos = [...];
// Falta export

// O nombres diferentes
export { producto };              // Se llama 'producto'
import { productos } from '...';  // Pero importas 'productos'
```

**✅ Solución:**
```javascript
// En datos.js
const productos = [...];
export { productos };            // Exportar

// En main.js
import { productos } from './datos.js';  // Mismo nombre
```

---

## 🖱️ ERRORES DE DOM

### **Error: Cannot read property 'addEventListener' of null**

**🔍 Síntoma:**
```
Cannot read property 'addEventListener' of null
```

**❌ Problema:**
```javascript
const boton = document.querySelector('#boton-inexistente'); // null
boton.addEventListener('click', ...); // ERROR!
```

**✅ Soluciones:**

**Opción 1: Verificar que existe**
```javascript
const boton = document.querySelector('#mi-boton');
if (boton) {
    boton.addEventListener('click', ...);
} else {
    console.log('Botón no encontrado');
}
```

**Opción 2: Usar DOMContentLoaded**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.querySelector('#mi-boton'); // Ahora existe
    boton.addEventListener('click', ...);
});
```

**Opción 3: Revisar selectores**
```javascript
// Verificar que el HTML tenga:
// <button id="mi-boton">Click</button>

// Y que el selector sea correcto:
const boton = document.querySelector('#mi-boton'); // Con #
```

---

### **Error: Formulario se recarga la página**

**🔍 Síntoma:**
- Formulario funciona por un segundo y luego se recarga la página
- Los datos desaparecen inmediatamente

**❌ Problema:**
```javascript
form.addEventListener('submit', function(event) {
    // event.preventDefault(); ← FALTA ESTA LÍNEA
    console.log('Formulario enviado');
    // Página se recarga automáticamente
});
```

**✅ Solución:**
```javascript
form.addEventListener('submit', function(event) {
    event.preventDefault(); // ← AGREGAR ESTA LÍNEA
    console.log('Formulario enviado');
    // Página NO se recarga
});
```

---

## 🔍 ERRORES DE SELECCIÓN

### **Seleccionadores incorrectos**

**❌ Errores comunes:**
```javascript
// Falta # para IDs
document.querySelector('mi-id');           // ❌
document.querySelector('#mi-id');          // ✅

// Falta . para clases
document.querySelector('mi-clase');        // ❌
document.querySelector('.mi-clase');       // ✅

// Mayúsculas/minúsculas
document.querySelector('#Mi-Boton');       // ❌ Si el HTML es #mi-boton
document.querySelector('#mi-boton');       // ✅
```

**🔍 Cómo verificar:**
```html
<!-- En tu HTML -->
<button id="btn-mostrar">Mostrar</button>
<div class="contenedor">Contenido</div>
```

```javascript
// En tu JavaScript
const boton = document.querySelector('#btn-mostrar');    // ✅ Con #
const div = document.querySelector('.contenedor');       // ✅ Con .
```

---

## 🎨 ERRORES DE ESTILOS

### **Propiedades CSS incorrectas en JavaScript**

**❌ Problema:**
```javascript
// CSS usa guiones
elemento.style.background-color = 'blue';  // ❌ Error de sintaxis
elemento.style.font-size = '20px';         // ❌ Error de sintaxis
```

**✅ Solución:**
```javascript
// JavaScript usa camelCase
elemento.style.backgroundColor = 'blue';   // ✅
elemento.style.fontSize = '20px';          // ✅
```

**📝 Regla de conversión:**
```
CSS                 →  JavaScript
background-color    →  backgroundColor
font-size          →  fontSize
border-radius      →  borderRadius
margin-top         →  marginTop
```

---

## 📁 ERRORES DE ESTRUCTURA DE ARCHIVOS

### **Archivos en lugares incorrectos**

**❌ Estructura incorrecta:**
```
mi-proyecto/
├── index.html
├── datos.js          ← Archivos JS sueltos
├── funciones.js
└── main.js
```

**✅ Estructura correcta:**
```
mi-proyecto/
├── index.html
├── css/styles.css
└── js/               ← Archivos JS en carpeta
    ├── datos.js
    ├── funciones.js
    └── main.js
```

**🔧 Ajustar rutas en HTML:**
```html
<!-- Si JS está en carpeta js/ -->
<script type="module" src="js/main.js"></script>

<!-- Si JS está en raíz -->
<script type="module" src="main.js"></script>
```

---

## 🔧 HERRAMIENTAS DE DEBUGGING

### **Usar console.log() efectivamente**

**🔍 Para verificar que elementos existen:**
```javascript
const boton = document.querySelector('#mi-boton');
console.log('Botón:', boton); // null = no existe, objeto = existe
```

**🔍 Para verificar valores de variables:**
```javascript
const texto = input.value;
console.log('Texto ingresado:', texto);
```

**🔍 Para verificar que funciones se ejecutan:**
```javascript
function miFuncion() {
    console.log('miFuncion ejecutada'); // Confirma que se llama
    // resto del código...
}
```

### **Usar DevTools del navegador**

**📋 Pasos:**
1. Abrir DevTools (F12)
2. Ir a la pestaña "Console"
3. Buscar errores en rojo
4. Leer el mensaje de error
5. Hacer click en el archivo:línea para ver dónde está el error

### **Verificar que Live Server está funcionando**

**✅ URL correcta:**
```
http://localhost:5500/index.html
```

**❌ URL incorrecta:**
```
file:///C:/Users/usuario/proyecto/index.html
```

---

## 💡 CHECKLIST DE DEBUGGING

### **Cuando algo no funciona:**

**□ 1. ¿Estoy usando Live Server?**
- URL debe empezar con `http://localhost`

**□ 2. ¿Agregué type="module"?**
```html
<script type="module" src="js/main.js"></script>
```

**□ 3. ¿Los archivos están en las rutas correctas?**
- Verificar que `js/datos.js` existe
- Verificar que las rutas en import son correctas

**□ 4. ¿Los export/import coinciden?**
```javascript
// datos.js
export { productos };

// main.js
import { productos } from './datos.js'; // Mismo nombre
```