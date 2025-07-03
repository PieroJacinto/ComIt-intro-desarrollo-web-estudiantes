# 📁 IMPORT/EXPORT CHEATSHEET - Clase 7

## 🎯 ¿POR QUÉ SEPARAR ARCHIVOS?

### **Ventajas**
- **Organización:** Cada archivo tiene una responsabilidad
- **Reutilización:** Usar mismos datos en diferentes páginas
- **Mantenimiento:** Más fácil encontrar y arreglar código
- **Colaboración:** Diferentes personas trabajan en diferentes archivos

### **Estructura típica**
```
mi-proyecto/
├── index.html
├── css/styles.css
├── js/
│   ├── datos.js        ← Solo datos
│   ├── funciones.js    ← Solo funciones
│   └── main.js         ← Solo DOM y eventos
```

---

## 📤 EXPORTAR (export)

### **Exportar variables**
```javascript
// datos.js
const frutas = ['manzana', 'banana', 'naranja'];
const persona = {
    nombre: 'Ana',
    edad: 25,
    ciudad: 'Buenos Aires'
};

// Exportar al final del archivo
export { frutas, persona };
```

### **Exportar funciones**
```javascript
// funciones.js
function saludar(nombre) {
    return `Hola ${nombre}`;
}

function calcular(a, b) {
    return a + b;
}

// Exportar al final del archivo
export { saludar, calcular };
```

---

## 📥 IMPORTAR (import)

### **Importar en otro archivo**
```javascript
// main.js
import { frutas, persona } from './datos.js';
import { saludar, calcular } from './funciones.js';

// Ahora puedo usar las variables y funciones
console.log(frutas); // ['manzana', 'banana', 'naranja']
console.log(persona.nombre); // 'Ana'
console.log(saludar('Carlos')); // 'Hola Carlos'
```

### **Sintaxis exacta**
```javascript
// Estructura: import { variables } from 'ruta';
import { variable1, variable2 } from './archivo.js';

// Las variables deben tener los mismos nombres
// La ruta SIEMPRE empieza con './'
// SIEMPRE termina con '.js'
```

---

## 🌐 HTML CON type="module"

### **Configuración necesaria**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Proyecto</title>
</head>
<body>
    <!-- Tu contenido HTML -->
    
    <!-- IMPORTANTE: type="module" -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

### **¿Por qué type="module"?**
```html
<!-- Sin type="module" -->
<script src="js/main.js"></script>
<!-- ERROR: Cannot use import statement outside a module -->

<!-- Con type="module" -->
<script type="module" src="js/main.js"></script>
<!-- ✅ Import/export funciona correctamente -->
```

---

## 🔄 EJEMPLO COMPLETO PASO A PASO

### **Paso 1: Crear datos.js**
```javascript
// datos.js
const productos = [
    { nombre: 'Laptop', precio: 80000 },
    { nombre: 'Mouse', precio: 2500 },
    { nombre: 'Teclado', precio: 4000 }
];

const tienda = {
    nombre: 'TechStore',
    ubicacion: 'Buenos Aires'
};

export { productos, tienda };
```

### **Paso 2: Crear funciones.js**
```javascript
// funciones.js
import { productos, tienda } from './datos.js';

function mostrarProductos() {
    let html = `<h3>Productos de ${tienda.nombre}</h3>`;
    
    productos.forEach(function(producto) {
        html += `
            <div>
                <h4>${producto.nombre}</h4>
                <p>$${producto.precio}</p>
            </div>
        `;
    });
    
    return html;
}

export { mostrarProductos };
```

### **Paso 3: Crear main.js**
```javascript
// main.js
import { mostrarProductos } from './funciones.js';

function inicializar() {
    const contenedor = document.querySelector('#productos');
    contenedor.innerHTML = mostrarProductos();
}

document.addEventListener('DOMContentLoaded', inicializar);
```

### **Paso 4: HTML**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Tienda</title>
</head>
<body>
    <h1>Mi Tienda Online</h1>
    <div id="productos"></div>
    
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ⚠️ REQUISITOS TÉCNICOS

### **Servidor local obligatorio**
```
❌ No funciona: Abrir HTML directamente (file://)
✅ Funciona: Live Server, XAMPP, servidor local
```

### **Configuración en VS Code**
1. Instalar extensión "Live Server"
2. Click derecho en index.html
3. "Open with Live Server"
4. Se abre en http://localhost:5500

---

## 🚨 ERRORES COMUNES

### **❌ Error: Cannot use import statement outside a module**
```html
<!-- Problema: Falta type="module" -->
<script src="js/main.js"></script>

<!-- Solución: Agregar type="module" -->
<script type="module" src="js/main.js"></script>
```

### **❌ Error: CORS policy**
```
Problema: Abriste HTML directamente (file://)
Solución: Usar servidor local (Live Server)
```

### **❌ Error: Failed to resolve module specifier**
```javascript
// Problema: Ruta incorrecta
import { datos } from 'datos.js';        // ❌ Falta ./
import { datos } from '/datos.js';       // ❌ No usar /
import { datos } from '../datos.js';     // ❌ Si está en misma carpeta

// Solución: Ruta correcta
import { datos } from './datos.js';      // ✅ Con ./ y .js
```

### **❌ Error: The requested module does not provide an export**
```javascript
// Problema en datos.js: No exporta la variable
const frutas = ['manzana'];
// export { frutas }; ← FALTA ESTA LÍNEA

// Problema en main.js: Nombre incorrecto
import { fruta } from './datos.js';      // ❌ Se llama 'frutas', no 'fruta'

// Solución: Nombres exactos
export { frutas };                       // En datos.js
import { frutas } from './datos.js';     // En main.js
```

---

## 📝 BUENAS PRÁCTICAS

### **Separación de responsabilidades**
```javascript
// datos.js - Solo datos
const usuarios = [...];
export { usuarios };

// funciones.js - Solo funciones
import { usuarios } from './datos.js';
function mostrarUsuarios() { ... }
export { mostrarUsuarios };

// main.js - Solo DOM y eventos
import { mostrarUsuarios } from './funciones.js';
document.addEventListener('DOMContentLoaded', ...);
```

### **Nombres descriptivos**
```javascript
// ✅ Buenos nombres de archivos
datos.js          // Para datos
funciones.js      // Para funciones
main.js           // Para DOM
app.js            // Alternativa a main.js

// ❌ Evitar nombres genéricos
script.js
codigo.js
archivo.js
```

---

## 💡 TIPS IMPORTANTES

### **Orden de trabajo recomendado**
1. Crear `datos.js` con export
2. Crear `funciones.js` con import/export
3. Crear `main.js` con import
4. Agregar `type="module"` en HTML
5. Usar Live Server para probar

### **Para debugging**
- Abrir DevTools (F12) → Console
- Verificar errores de import/export
- Comprobar que Live Server esté funcionando
- Revisar rutas de archivos