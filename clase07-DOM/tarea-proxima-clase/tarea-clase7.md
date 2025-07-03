# 🏠 TAREA CLASE 7 - Aplicar DOM a tu Proyecto Personal

## 🎯 OBJETIVO
Agregar **2 funcionalidades con JavaScript DOM** a tu proyecto personal usando archivos separados.

## ⏰ TIEMPO ESTIMADO
**45-60 minutos**

---

## 📂 ESTRUCTURA OBLIGATORIA

```
mi-proyecto/
├── index.html
├── css/styles.css
├── js/
│   ├── datos.js        ← Datos de tu proyecto
│   ├── funciones.js    ← Funciones que generan HTML
│   └── dom.js          ← Eventos y querySelector
```

---

## ✅ FUNCIONALIDAD 1: OBLIGATORIA PARA TODOS

### **Mostrar tu contenido principal dinámicamente**

**Todos deben hacer esto según su proyecto:**

### 💼 **PORTFOLIO:** Mostrar lista de proyectos
```javascript
// datos.js
const proyectos = [
    {nombre: "Portfolio Web", tecnologia: "HTML/CSS", año: 2024},
    {nombre: "Tienda Online", tecnologia: "JavaScript", año: 2024},
    // TODO: Agregar 2-3 proyectos más
];

// TODO: Exportar proyectos

// funciones.js  
// TODO: Importar proyectos
// TODO: Crear función mostrarProyectos() que devuelva HTML con forEach
// TODO: Exportar función

// dom.js
// TODO: Importar función
// TODO: Mostrar proyectos automáticamente al cargar la página
```

### 📝 **BLOG:** Mostrar lista de artículos
```javascript
// datos.js
const articulos = [
    {titulo: "Mi primer post", categoria: "Personal", fecha: "2024"},
    {titulo: "Aprendiendo JavaScript", categoria: "Tecnología", fecha: "2024"},
    // TODO: Agregar 2-3 artículos más
];

// TODO: Exportar articulos

// funciones.js
// TODO: Importar articulos  
// TODO: Crear función mostrarArticulos() que devuelva HTML con forEach
// TODO: Exportar función

// dom.js
// TODO: Importar función
// TODO: Mostrar artículos automáticamente al cargar la página
```

### 🍽️ **RESTAURANTE:** Mostrar menú
```javascript
// datos.js
const menu = [
    {nombre: "Hamburguesa Clásica", categoria: "Principal", precio: 850},
    {nombre: "Ensalada César", categoria: "Entrada", precio: 650},
    // TODO: Agregar 2-3 platos más
];

// TODO: Exportar menu

// funciones.js
// TODO: Importar menu
// TODO: Crear función mostrarMenu() que devuelva HTML con forEach  
// TODO: Exportar función

// dom.js
// TODO: Importar función
// TODO: Mostrar menú automáticamente al cargar la página
```

### 💼 **SERVICIO:** Mostrar servicios
```javascript
// datos.js
const servicios = [
    {nombre: "Desarrollo Web", precio: 15000, duracion: "2 semanas"},
    {nombre: "Diseño Logo", precio: 5000, duracion: "3 días"},
    // TODO: Agregar 2-3 servicios más
];

// TODO: Exportar servicios

// funciones.js
// TODO: Importar servicios
// TODO: Crear función mostrarServicios() que devuelva HTML con forEach
// TODO: Exportar función

// dom.js  
// TODO: Importar función
// TODO: Mostrar servicios automáticamente al cargar la página
```

---

## ➕ FUNCIONALIDAD 2: ELIGE UNA

### **Opción A: Filtrar por categoría**
```javascript
// HTML: Botones para cada categoría
// TODO: Agregar propiedad categoria a tus datos
// TODO: Crear función filtrarPorCategoria(categoria)
// TODO: Agregar eventos click a botones
// TODO: Mostrar solo elementos de esa categoría
```

### **Opción B: Búsqueda simple**
```javascript
// HTML: Input de búsqueda
// TODO: Crear función buscar(texto)
// TODO: Usar includes() para filtrar por nombre/título
// TODO: Agregar evento keyup al input
// TODO: Mostrar resultados mientras escribe
```

### **Opción C: Mostrar/ocultar detalles**
```javascript
// HTML: Botón "Ver más" en cada elemento  
// TODO: Agregar propiedad descripcion a tus datos
// TODO: Crear función alternarDetalles(id)
// TODO: Agregar eventos click a botones "Ver más"
// TODO: Mostrar/ocultar descripción completa
```

### **Opción D: Formulario de contacto**
```javascript
// HTML: Formulario con nombre y mensaje
// TODO: Seleccionar formulario con querySelector
// TODO: Agregar evento submit
// TODO: Usar event.preventDefault()
// TODO: Mostrar mensaje de confirmación
```

### **Opción E: Cambiar tema/colores**
```javascript
// HTML: Botón "Cambiar tema"
// TODO: Crear función cambiarTema()
// TODO: Cambiar style.backgroundColor del body
// TODO: Agregar evento click al botón
// TODO: Alternar entre 2 colores
```

---

## 💡 CONSEJOS

### **Empieza por:**
1. Crear datos.js con export
2. Crear funciones.js con import/export  
3. Crear dom.js con import y eventos
4. Agregar `type="module"` al script en HTML

### **Usa conceptos de clase:**
- `querySelector` y `addEventListener`
- `forEach` para listas
- Template strings `` `${variable}` ``
- `innerHTML` para mostrar HTML

### **Si no funciona:**
- Abre consola (F12) para ver errores
- Verifica que usas Live Server
- Revisa que import/export estén bien escritos

---

## 🎉 EN LA PRÓXIMA CLASE

### **Compartir pantalla (voluntario):**
- Mostraremos algunos proyectos funcionando
- 2-3 voluntarios de 3 minutos cada uno
- Explicar qué funcionalidades agregaron

### **No es obligatorio:**
- Solo quien quiera mostrar su proyecto
- El resto puede preguntar dudas

---

## 🚀 ¡RECUERDA!

**Objetivo: Practicar DOM + Import/Export en tu proyecto real**

**Funcional y simple > Complicado y roto**

¡Nos vemos en la próxima clase! 🎉