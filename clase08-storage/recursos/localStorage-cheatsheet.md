# 💾 Local Storage Cheat Sheet

## 🎯 ¿Qué es Local Storage?

Local Storage es como la **"memoria del navegador"** que recuerda información entre sesiones.

### 💡 Piénsalo así:
- **Como tu celular** → Guarda contactos, fotos, configuraciones
- **Como una libreta** → Escribes información y queda guardada
- **Como configuración de apps** → Recuerda tema, idioma, preferencias

---

## 🔧 Métodos Básicos

### **💾 GUARDAR datos**
```javascript
localStorage.setItem('nombre', 'Ana');
localStorage.setItem('tema', 'oscuro');
localStorage.setItem('edad', '25');
```

### **📱 RECUPERAR datos**
```javascript
const nombre = localStorage.getItem('nombre');
const tema = localStorage.getItem('tema');
const edad = localStorage.getItem('edad');

console.log(nombre); // 'Ana'
console.log(tema);   // 'oscuro'
console.log(edad);   // '25'
```

### **🗑️ BORRAR datos**
```javascript
// Borrar uno específico
localStorage.removeItem('nombre');

// Borrar todo
localStorage.clear();
```

### **🔍 VERIFICAR si existe**
```javascript
if (localStorage.getItem('nombre')) {
    // Existe, usar los datos
    const nombre = localStorage.getItem('nombre');
} else {
    // No existe, usar valores por defecto
    const nombre = 'Usuario';
}
```

---

## 🎯 Trabajar con Objetos

### **❌ MAL - Guardar objeto directamente**
```javascript
const usuario = { nombre: 'Ana', edad: 25 };
localStorage.setItem('usuario', usuario); // ❌ Guarda [object Object]
```

### **✅ BIEN - Convertir a JSON**
```javascript
const usuario = { nombre: 'Ana', edad: 25 };

// GUARDAR: Convertir objeto a string JSON
localStorage.setItem('usuario', JSON.stringify(usuario));

// RECUPERAR: Convertir string JSON a objeto
const usuarioJSON = localStorage.getItem('usuario');
if (usuarioJSON) {
    const usuario = JSON.parse(usuarioJSON);
    console.log(usuario.nombre); // 'Ana'
}
```

---

## 🌙 Tema Claro/Oscuro - Código Completo

### **📄 HTML necesario**
```html
<!-- Botón para cambiar tema -->
<button onclick="cambiarTema()">🌙 Cambiar Tema</button>
```

### **🎨 CSS necesario**
```css
/* Tema claro por defecto */
body {
    background: #ffffff;
    color: #333333;
    transition: all 0.3s ease;
}

/* Tema oscuro cuando body tiene clase "oscuro" */
body.oscuro {
    background: #1a1a1a;
    color: #ffffff;
}

/* Opcional: Cambiar colores de otros elementos */
body.oscuro .navbar {
    background: #2d2d2d;
}

body.oscuro .card {
    background: #3a3a3a;
}
```

### **⚡ JavaScript completo**
```javascript
// FUNCIÓN PARA CAMBIAR TEMA
function cambiarTema() {
    // 1. Ver si body tiene clase "oscuro"
    const tieneOscuro = document.body.classList.contains('oscuro');
    
    // 2. Cambiar al contrario Y guardar directamente
    if (tieneOscuro) {
        document.body.classList.remove('oscuro');
        localStorage.setItem('tema-oscuro', 'false');
    } else {
        document.body.classList.add('oscuro');
        localStorage.setItem('tema-oscuro', 'true');
    }
}

// CARGA AUTOMÁTICA AL ABRIR PÁGINA
window.addEventListener('load', function() {
    // Recuperar tema guardado
    const temaGuardado = localStorage.getItem('tema-oscuro');
    
    // Si el tema guardado es 'true', aplicar tema oscuro
    if (temaGuardado === 'true') {
        document.body.classList.add('oscuro');
    }
});
```

---

## 📝 Auto-guardado de Formularios - Código Completo

### **📄 HTML necesario**
```html
<form id="form-contacto">
    <input type="text" id="nombre" placeholder="Tu nombre">
    <input type="email" id="email" placeholder="Tu email">
    <textarea id="mensaje" placeholder="Tu mensaje"></textarea>
    
    <button type="button" onclick="limpiarFormulario()">🗑️ Limpiar</button>
    <button type="submit">📤 Enviar</button>
</form>
```

### **⚡ JavaScript completo**
```javascript
// FUNCIÓN PARA GUARDAR FORMULARIO
function guardarFormulario() {
    // 1. Leer todos los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // 2. Crear objeto con todos los datos
    const datos = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };
    
    // 3. Convertir a JSON y guardar
    localStorage.setItem('formulario-contacto', JSON.stringify(datos));
}

// FUNCIÓN PARA CARGAR FORMULARIO
function cargarFormulario() {
    // 1. Recuperar datos de Local Storage
    const datosJSON = localStorage.getItem('formulario-contacto');
    
    // 2. Si hay datos guardados
    if (datosJSON) {
        // 3. Convertir JSON a objeto
        const datos = JSON.parse(datosJSON);
        
        // 4. Llenar cada campo
        document.getElementById('nombre').value = datos.nombre || '';
        document.getElementById('email').value = datos.email || '';
        document.getElementById('mensaje').value = datos.mensaje || '';
    }
}

// FUNCIÓN PARA LIMPIAR FORMULARIO
function limpiarFormulario() {
    // Limpiar campos
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';
    
    // Borrar de Local Storage
    localStorage.removeItem('formulario-contacto');
}

// CONFIGURACIÓN AUTOMÁTICA
window.addEventListener('load', function() {
    // 1. Cargar formulario guardado al abrir página
    cargarFormulario();
    
    // 2. Auto-guardar cuando usuario escribe
    document.getElementById('nombre').addEventListener('input', guardarFormulario);
    document.getElementById('email').addEventListener('input', guardarFormulario);
    document.getElementById('mensaje').addEventListener('input', guardarFormulario);
});
```

---

## 🎯 Casos de Uso por Proyecto

### **💼 Portfolio Personal**
```javascript
// Tema claro/oscuro
localStorage.setItem('tema-oscuro', 'true');

// Filtro de proyectos favorito
localStorage.setItem('filtro-favorito', 'web');

// Datos del formulario de contacto
const contacto = {
    nombre: 'Juan Pérez',
    email: 'juan@email.com',
    mensaje: 'Hola, me interesa tu trabajo...'
};
localStorage.setItem('contacto-borrador', JSON.stringify(contacto));
```

### **🍽️ Restaurante**
```javascript
// Carrito de pedidos
const carrito = [
    { plato: 'Pizza Margherita', precio: 1200, cantidad: 2 },
    { plato: 'Ensalada César', precio: 800, cantidad: 1 }
];
localStorage.setItem('carrito-pedidos', JSON.stringify(carrito));

// Platos favoritos
const favoritos = ['Pizza Margherita', 'Pasta Carbonara'];
localStorage.setItem('platos-favoritos', JSON.stringify(favoritos));
```

### **📝 Blog Personal**
```javascript
// Categoría preferida
localStorage.setItem('categoria-preferida', 'tecnología');

// Búsquedas recientes
const busquedas = ['javascript', 'css flexbox', 'responsive design'];
localStorage.setItem('busquedas-recientes', JSON.stringify(busquedas));
```

### **💼 Servicio/Emprendimiento**
```javascript
// Servicios de interés
const servicios = ['diseño-web', 'consultoría', 'desarrollo'];
localStorage.setItem('servicios-interes', JSON.stringify(servicios));

// Cotización en progreso
const cotizacion = {
    servicio: 'diseño-web',
    presupuesto: 50000,
    timeline: '2-meses'
};
localStorage.setItem('cotizacion-borrador', JSON.stringify(cotizacion));
```

---

## 🔍 Debugging con DevTools

### **🛠️ Cómo inspeccionar Local Storage**
1. **Abrir DevTools** (F12)
2. **Ir a pestaña "Application"**
3. **Expandir "Local Storage"**
4. **Seleccionar tu dominio**
5. **Ver/editar datos guardados**

### **🔍 Comandos útiles en Console**
```javascript
// Ver todo el Local Storage
console.log(localStorage);

// Ver un item específico
console.log(localStorage.getItem('tema-oscuro'));

// Ver todos los items
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key, '=', value);
}

// Limpiar todo (para testing)
localStorage.clear();
```

---

## 🐛 Errores Comunes y Soluciones

### **❌ Error: [object Object]**
```javascript
// MAL
const usuario = { nombre: 'Ana' };
localStorage.setItem('usuario', usuario); // ❌ Guarda [object Object]

// BIEN
localStorage.setItem('usuario', JSON.stringify(usuario)); // ✅
```

### **❌ Error: Cannot read property of null**
```javascript
// MAL
const datos = JSON.parse(localStorage.getItem('datos'));
console.log(datos.nombre); // ❌ Error si no existe

// BIEN
const datosJSON = localStorage.getItem('datos');
if (datosJSON) {
    const datos = JSON.parse(datosJSON);
    console.log(datos.nombre); // ✅
}
```

### **❌ Error: SyntaxError JSON.parse**
```javascript
// MAL
localStorage.setItem('datos', 'texto-roto');
const datos = JSON.parse(localStorage.getItem('datos')); // ❌ Error

// BIEN
const datosJSON = localStorage.getItem('datos');
if (datosJSON) {
    try {
        const datos = JSON.parse(datosJSON);
        console.log(datos);
    } catch (error) {
        console.log('Error parsing JSON:', error);
    }
}
```

---

## 💡 Tips y Mejores Prácticas

### **🎯 Nombres de claves claros**
```javascript
// ❌ MAL
localStorage.setItem('data', 'valor');
localStorage.setItem('info', 'valor');

// ✅ BIEN
localStorage.setItem('proyecto-tema-oscuro', 'true');
localStorage.setItem('contacto-formulario-borrador', JSON.stringify(datos));
```

### **🔒 Verificar siempre antes de usar**
```javascript
// Siempre verificar si existe
const tema = localStorage.getItem('tema') || 'claro';
const datos = localStorage.getItem('datos');
if (datos) {
    // Usar datos
}
```

### **🧹 Limpieza periódica**
```javascript
// Limpiar datos viejos
function limpiarDatosViejos() {
    localStorage.removeItem('datos-temporales');
    localStorage.removeItem('cache-viejo');
}
```

---

## 🚀 Próximos Pasos

### **Para mejorar tu proyecto:**
1. **Más persistencia** - Guardar configuraciones del usuario
2. **Mejor UX** - Indicadores visuales de guardado
3. **Validación** - Verificar datos antes de guardar
4. **Backup** - Exportar/importar configuraciones

### **Para aprender más:**
- **Session Storage** - Datos solo para la sesión actual
  - [MDN Session Storage](https://developer.mozilla.org/es/docs/Web/API/Window/sessionStorage)
- **IndexedDB** - Base de datos del navegador
  - [MDN IndexedDB](https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API)
- **Web Storage API** - Más opciones de almacenamiento
  - [MDN Web Storage](https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API)
- **Service Workers** - Funcionalidad offline
  - [MDN Service Worker](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API)
- **localStorage vs sessionStorage vs cookies**
  - [JavaScript.info - LocalStorage](https://javascript.info/localstorage)
- **Curso completo de JavaScript**
  - [FreeCodeCamp JavaScript](https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/)
- **Práctica con proyectos**
  - [JavaScript30](https://javascript30.com/) - 30 proyectos en 30 días

---

## 📝 Checklist Final

### **✅ Verificar que funciona:**
- [ ] Tema claro/oscuro cambia colores
- [ ] Tema persiste al recargar página
- [ ] Tema persiste al navegar entre páginas
- [ ] Formulario se guarda automáticamente
- [ ] Formulario se carga automáticamente
- [ ] DevTools muestra datos guardados
- [ ] Console no muestra errores
- [ ] Funciona en modo incógnito (debería no guardar)

### **🎯 Tu proyecto debe tener:**
- [ ] Botón de cambio de tema visible
- [ ] CSS para tema claro y oscuro
- [ ] JavaScript para cambiar tema
- [ ] Formulario con IDs únicos
- [ ] Auto-guardado en formulario
- [ ] Carga automática al abrir página

**¡Con esto tu proyecto se ve completamente profesional! 🌟**