# 📝 TAREA PARA LA PRÓXIMA CLASE - JavaScript en Archivos

## 🎯 Objetivo Principal
**Consolidar JavaScript fundamentos** y **prepararte para funciones** practicando con archivos .js profesionales en lugar de solo la consola.

---

## 📋 Lo que tienes que entregar

### ✅ **Parte 1: Repasar Conceptos (30 min)**
1. **Completar ejercicios de clase** si no terminaste
2. **Experimentar con variaciones** de los ejemplos vistos
3. **Practicar en consola** hasta sentirte cómodo

### ✅ **Parte 2: JavaScript en Archivos (45 min)**
1. **Crear archivo `practica.js`** en tu proyecto personal
2. **Conectar con HTML** usando `<script src="practica.js">`
3. **Migrar código de consola** a archivo profesional
4. **Probar que funcione** igual que en consola

### ✅ **Parte 3: Ejercicios Prácticos (60 min)**
1. **Ejercicios específicos** con JavaScript básico
2. **Casos reales** para practicar conceptos
3. **Preparación** para funciones de Clase 6

---

## 🗓️ Fecha de entrega
**Antes de la Clase 6** - Traer archivo `practica.js` funcionando

---

## 📁 PARTE 2: JavaScript en Archivos

### **Paso 1: Crear la estructura**
En tu proyecto personal, crea:
```
mi-proyecto-web/
├── js/
│   └── practica.js          ← ¡NUEVO!
├── index.html
└── otras-paginas.html
```

### **Paso 2: Conectar JavaScript con HTML**
En cualquier página HTML (ej: `index.html`), agrega antes de `</body>`:
```html
<script src="js/practica.js"></script>
</body>
</html>
```

### **Paso 3: Escribir código en archivo**
En `js/practica.js`, escribe:
```javascript
// ✅ Mi primer archivo JavaScript
console.log("¡Hola desde archivo JavaScript!");

// ✅ Variables básicas
let miNombre = "Tu Nombre";
const miEdad = 25;
let soyEstudiante = true;

// ✅ Template Literals - Nueva forma de crear strings
console.log(`Me llamo ${miNombre} y tengo ${miEdad} años`);

// 🆚 Comparación con concatenación tradicional:
console.log("Forma antigua: " + miNombre + " tiene " + miEdad + " años");
console.log(`Forma moderna: ${miNombre} tiene ${miEdad} años`);
```

### **Paso 4: Probar que funciona**
1. Abrir tu página HTML en navegador
2. Abrir consola (F12 → Console)
3. Ver tus mensajes en la consola
4. ✅ Si funciona: ¡Listo para más ejercicios!

---

## 🏃‍♂️ PARTE 3: Ejercicios Prácticos

### **📝 Template Literals - Sintaxis Moderna**
Antes de hacer los ejercicios, aprende esta nueva forma de crear strings:

```javascript
// ❌ Forma tradicional (concatenación)
let nombre = "Ana";
let edad = 25;
console.log("Hola " + nombre + ", tienes " + edad + " años");

// ✅ Template Literals (forma moderna)
console.log(`Hola ${nombre}, tienes ${edad} años`);

// 🎯 Ventajas de Template Literals:
// 1. Más fácil de leer
// 2. Soporte para múltiples líneas
// 3. Cualquier expresión JavaScript dentro de ${}

let precio = 100;
let descuento = 20;
console.log(`Precio original: ${precio}`);
console.log(`Con descuento: ${precio - descuento}`);
console.log(`Total con IVA: ${(precio - descuento) * 1.21}`);
```

**🎯 Usa template literals en todos los ejercicios siguientes**

### **Ejercicio A: Datos Personales (15 min)**
```javascript
// TODO: Crea tu objeto personal con al menos estas propiedades:
// - nombre (string)
// - edad (number) 
// - ciudad (string)
// - intereses (array con 3-4 elementos)
// - esDesarrollador (boolean)

// TODO: Muestra tu información usando template literals y for loops
// Ejemplo de output esperado:
// === MI PERFIL ===
// Nombre: [tu nombre]
// Vivo en: [tu ciudad]
// Interés 1: programación
// Interés 2: música
// etc...
```

**🎯 Desafío:** Agrega más propiedades (profesión, hobbies, comida favorita) y muéstralas todas.

### **Ejercicio B: Lista de Tareas (20 min)**
```javascript
// TODO: Crea dos arrays:
// - tareas: array con 3-4 tareas que tienes que hacer
// - duraciones: array con el tiempo estimado para cada tarea (en minutos)

// TODO: Usar for loop para mostrar cada tarea con su duración
// Usar template literals para el formato

// TODO: Calcular el tiempo total de todas las tareas

// TODO: Agregar una nueva tarea al final usando push()

// Ejemplo de output esperado:
// === MIS TAREAS DE HOY ===
// Estudiar JavaScript - 120 minutos
// Hacer ejercicio - 60 minutos
// Tiempo total: X minutos
```

**🎯 Desafío:** Convierte el tiempo total a horas y minutos usando división y módulo.

### **Ejercicio C: Catálogo Simple (25 min)**
```javascript
// TODO: Crear array de productos, cada producto es un objeto con:
// - nombre (string)
// - precio (number)
// - categoria (string)
// - disponible (boolean)
// Crear al menos 3 productos diferentes

// TODO: Usar for loop para mostrar cada producto
// Formato esperado con template literals:
// Producto 1:
//   Nombre: Laptop
//   Precio: $800
//   Categoría: Tecnología
//   Estado: Disponible/Agotado

// TODO: Calcular y mostrar el precio promedio de todos los productos

// BONUS: Contar cuántos productos están disponibles vs agotados
```

**🎯 Desafío:** Encuentra el producto más caro y el más barato.

---

## 💡 PREPARACIÓN PARA CLASE 6: Funciones

### **¿Qué patrones notaste en los ejercicios?**
- ✅ **Repetición de código:** Mostrar productos, calcular totales
- ✅ **Lógica similar:** Loops que hacen cosas parecidas
- ✅ **Código largo:** Mucho texto para tareas simples

### **¿Cómo lo mejoraremos en Clase 6?**
```javascript
// 🔮 ADELANTO - Lo que aprenderás la próxima clase

// ❌ Hoy: código repetido
console.log("Hola Ana");
console.log("Hola Luis"); 
console.log("Hola María");

// ✅ Clase 6: funciones reutilizables
function saludar(nombre) {
    console.log(`Hola ${nombre}`); // ¡Con template literals!
}

saludar("Ana");    // Más limpio
saludar("Luis");   // Más fácil
saludar("María");  // Más profesional
```

### **Conceptos que dominarás después de esta tarea:**
- ✅ **JavaScript en archivos** (no solo consola)
- ✅ **Template literals** (strings modernos con ${})
- ✅ **Objetos con arrays** (estructuras complejas)
- ✅ **For loops anidados** (loops dentro de loops)
- ✅ **Patrones repetitivos** (listos para funciones)

---

## 🔧 Comandos Git para recordar

```bash
# Ver qué archivos agregaste
git status

# Agregar tu nuevo archivo JavaScript
git add js/practica.js

# También agregar cualquier HTML que modificaste
git add index.html

# Guardar cambios
git commit -m "Agregar ejercicios JavaScript en archivo practica.js"

# Subir a GitHub
git push
```

---

## 📋 Checklist antes de Clase 6

### **Técnico:**
- [ ] Archivo `js/practica.js` existe
- [ ] Conectado correctamente con HTML (`<script src="...">`)
- [ ] Código funciona sin errores en consola
- [ ] Al menos 2 de los 3 ejercicios completados
- [ ] Todo subido a GitHub

### **Conceptual:**
- [ ] Entiendo diferencia entre arrays y objetos
- [ ] Puedo escribir for loops sin mirar ejemplos
- [ ] Uso métodos básicos: push, pop, indexOf, join
- [ ] Veo patrones de código que se repiten
- [ ] Tengo curiosidad sobre funciones

### **Práctica:**
- [ ] He experimentado modificando los ejercicios
- [ ] Probé crear mis propios datos
- [ ] Entiendo cómo debuggear con console.log
- [ ] Puedo explicar el código a alguien más

---

## 🆘 ¿Problemas?

### **JavaScript no funciona:**
1. ✅ Verificar ruta: `<script src="js/practica.js">` 
2. ✅ Abrir consola para ver errores (F12 → Console)
3. ✅ Verificar sintaxis: paréntesis, llaves, punto y coma

### **No entiendo un ejercicio:**
1. ✅ Empezar por partes más pequeñas
2. ✅ Usar `console.log()` para ver qué está pasando
3. ✅ Simplificar: menos datos, arrays más cortos
4. ✅ Preguntar en el grupo de clase

### **Git/GitHub problemas:**
1. ✅ `git status` para ver estado
2. ✅ `git add .` para agregar todo
3. ✅ `git commit -m "mensaje descriptivo"`
4. ✅ `git push` para subir

---

## 🎯 ¡El objetivo es practicar!

No tiene que ser perfecto, pero sí **completo**. En la Clase 6 vamos a ver cómo hacer este código mucho más elegante con **funciones** y **lógica avanzada**.

**¡Nos vemos la próxima clase con tu JavaScript funcionando en archivos!** 🚀

---

## 📚 Recursos adicionales

- **Repaso de conceptos:** Carpeta `recursos/` de esta clase
- **Dudas técnicas:** Consultar `recursos/troubleshooting.md`
- **Ejemplos extra:** `recursos-extras/` para estudiantes avanzados
- **Próxima clase:** `clase06-funciones-logica/` (disponible después de Clase 5)