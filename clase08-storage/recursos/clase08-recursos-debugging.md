# 🔍 Debugging y DevTools - Clase 8

## 🛠️ Cómo Inspeccionar Local Storage

### **Paso a paso para ver datos guardados:**

1. **Abrir DevTools**
   - **Windows/Linux:** `F12` o `Ctrl + Shift + I`
   - **Mac:** `Cmd + Option + I`
   - **Click derecho** → "Inspeccionar elemento"

2. **Ir a la pestaña "Application"**
   - En Chrome: Pestaña **"Application"**
   - En Firefox: Pestaña **"Storage"**
   - En Safari: Pestaña **"Storage"**

3. **Navegar a Local Storage**
   - **Expandir** "Local Storage" en el panel izquierdo
   - **Seleccionar** tu dominio (ej: `localhost:3000`)

4. **Ver y editar datos**
   - **Ver:** Todos los datos guardados aparecen en tabla
   - **Editar:** Doble click en "Value" para modificar
   - **Borrar:** Click derecho → "Delete"

### **🎯 Qué buscar:**
- **Key:** Nombre de la clave (ej: `tema-oscuro`)
- **Value:** Valor guardado (ej: `"true"`)
- **Tamaño:** Cuánto espacio ocupa cada item

---

## 🔍 Debugging con Console

### **Comandos útiles para probar Local Storage:**

```javascript
// Ver todo el Local Storage
console.log(localStorage);

// Ver un item específico
console.log(localStorage.getItem('tema-oscuro'));

// Ver cuántos items hay
console.log('Items guardados:', localStorage.length);

// Listar todas las claves
for (let i = 0; i < localStorage.length; i++) {
    console.log('Clave ' + i + ':', localStorage.key(i));
}

// Probar si funciona el guardado
localStorage.setItem('test', 'funcionando');
console.log('Test:', localStorage.getItem('test'));
localStorage.removeItem('test');
```

### **🧪 Tests rápidos:**
```javascript
// Test 1: Verificar tema
function testTema() {
    console.log('🎨 Tema actual:', localStorage.getItem('tema-oscuro'));
    console.log('🎨 Body tiene clase oscuro:', document.body.classList.contains('oscuro'));
}

// Test 2: Verificar formulario
function testFormulario() {
    const form = localStorage.getItem('formulario-contacto');
    console.log('📝 Formulario guardado:', form);
    if (form) {
        console.log('📝 Datos:', JSON.parse(form));
    }
}

// Test 3: Simular cambio de tema
function testCambioTema() {
    console.log('🔄 Antes:', document.body.classList.contains('oscuro'));
    cambiarTema();
    console.log('🔄 Después:', document.body.classList.contains('oscuro'));
}
```

---

## 🐛 Errores Comunes y Soluciones

### **❌ Error: "No se guarda nada"**

**Posibles causas:**
1. **Modo incógnito** - Local Storage no persiste
2. **Navegador muy viejo** - No soporta Local Storage
3. **Configuración de privacidad** - Local Storage deshabilitado

**Solución:**
```javascript
// Verificar si Local Storage está disponible
function verificarLocalStorage() {
    if (typeof(Storage) !== "undefined") {
        console.log('✅ Local Storage disponible');
        return true;
    } else {
        console.log('❌ Local Storage NO disponible');
        return false;
    }
}

// Usar antes de guardar datos
if (verificarLocalStorage()) {
    localStorage.setItem('test', 'valor');
}
```

### **❌ Error: "localStorage.setItem is not a function"**

**Causa:** Estás en un entorno que no soporta Local Storage

**Solución:**
```javascript
// Verificar antes de usar
if (window.localStorage) {
    localStorage.setItem('clave', 'valor');
} else {
    console.log('Local Storage no disponible');
}
```

### **❌ Error: "JSON.parse error"**

**Causa:** Intentas parsear algo que no es JSON válido

**Solución:**
```javascript
// Verificar antes de parsear
function recuperarDatos(clave) {
    const datos = localStorage.getItem(clave);
    if (datos) {
        try {
            return JSON.parse(datos);
        } catch (error) {
            console.log('Error parseando JSON:', error);
            return null;
        }
    }
    return null;
}
```

### **❌ Error: "Cannot read property of null"**

**Causa:** Intentas acceder a propiedades de un objeto que no existe

**Solución:**
```javascript
// Verificar antes de acceder
const usuario = localStorage.getItem('usuario');
if (usuario) {
    const datos = JSON.parse(usuario);
    console.log(datos.nombre); // ✅ Seguro
} else {
    console.log('No hay usuario guardado');
}
```

### **❌ Error: "Tema no persiste entre páginas"**

**Posibles causas:**
1. **window.addEventListener('load')** no está en todas las páginas
2. **Nombre de clave diferente** en cada página
3. **CSS no cargado** en alguna página

**Solución:**
```javascript
// Verificar en cada página
window.addEventListener('load', function() {
    console.log('🚀 Página cargada');
    
    // Verificar si existe la función
    if (typeof cambiarTema === 'function') {
        console.log('✅ Función cambiarTema disponible');
    } else {
        console.log('❌ Función cambiarTema NO disponible');
    }
    
    // Verificar tema guardado
    const tema = localStorage.getItem('tema-oscuro');
    console.log('🎨 Tema guardado:', tema);
    
    // Aplicar tema
    if (tema === 'true') {
        document.body.classList.add('oscuro');
        console.log('🌙 Tema oscuro aplicado');
    }
});
```

---

## 🧪 Testing Manual

### **Checklist de pruebas:**

#### **🎨 Tema Claro/Oscuro**
1. **Cambiar tema**
   - [ ] Botón cambia colores inmediatamente
   - [ ] Console muestra logs correctos
   - [ ] DevTools muestra dato guardado

2. **Persistencia**
   - [ ] Recargar página → tema se mantiene
   - [ ] Navegar a otra página → tema se mantiene
   - [ ] Cerrar y abrir navegador → tema se mantiene

3. **Modo incógnito**
   - [ ] Funciona dentro de la sesión
   - [ ] NO persiste al cerrar ventana

#### **📝 Formulario Auto-guardado**
1. **Guardado automático**
   - [ ] Escribir en campo → se guarda inmediatamente
   - [ ] Console muestra datos guardados
   - [ ] DevTools muestra objeto JSON

2. **Recuperación**
   - [ ] Recargar página → campos se llenan automáticamente
   - [ ] Navegar y volver → datos siguen ahí

3. **Limpieza**
   - [ ] Botón "Limpiar" → campos se vacían
   - [ ] DevTools muestra que se borró el dato

---

## 🔍 Debugging Avanzado

### **Inspeccionar paso a paso:**

```javascript
// Función de debugging completa
function debugLocalStorage() {
    console.log('🔍 === DEBUG LOCAL STORAGE ===');
    
    // 1. Verificar disponibilidad
    console.log('✅ Local Storage disponible:', typeof(Storage) !== "undefined");
    
    // 2. Ver todos los items
    console.log('📊 Items guardados:', localStorage.length);
    
    // 3. Listar todos los datos
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log(`📝 ${key}:`, value);
    }
    
    // 4. Verificar tema específico
    const tema = localStorage.getItem('tema-oscuro');
    console.log('🎨 Tema guardado:', tema);
    console.log('🎨 Body tiene clase oscuro:', document.body.classList.contains('oscuro'));
    
    // 5. Verificar formulario específico
    const form = localStorage.getItem('formulario-contacto');
    console.log('📝 Formulario guardado:', form);
    if (form) {
        try {
            const datos = JSON.parse(form);
            console.log('📝 Datos parseados:', datos);
        } catch (e) {
            console.log('❌ Error parseando formulario:', e);
        }
    }
    
    console.log('🔍 === FIN DEBUG ===');
}
```

### **Usar en Console:**
```javascript
// Ejecutar debug completo
debugLocalStorage();

// Limpiar todo para empezar de nuevo
localStorage.clear();
console.log('🧹 Local Storage limpiado');
```

---

## 📱 Testing Cross-Browser

### **Navegadores a probar:**
- [ ] **Chrome** (versión actual)
- [ ] **Firefox** (versión actual)
- [ ] **Safari** (si tienes Mac)
- [ ] **Edge** (si tienes Windows)

### **Dispositivos a probar:**
- [ ] **Desktop** (pantalla grande)
- [ ] **Tablet** (pantalla mediana)
- [ ] **Mobile** (pantalla pequeña)

### **Modos especiales:**
- [ ] **Modo incógnito** (datos NO deben persistir)
- [ ] **Modo normal** (datos SÍ deben persistir)

---

## 🚨 Límites y Consideraciones

### **Límites de Local Storage:**
- **Tamaño:** ~5-10MB por dominio
- **Tipo:** Solo strings (por eso JSON.stringify)
- **Scope:** Por dominio (no se comparte entre sitios)
- **Persistencia:** Hasta que usuario lo borre

### **Cuándo NO usar Local Storage:**
- **Datos sensibles** (passwords, tokens)
- **Datos grandes** (imágenes, videos)
- **Datos críticos** (puede ser borrado por el usuario)

### **Alternativas:**
- **Session Storage** - Solo para la sesión actual
- **Cookies** - Para datos del servidor
- **IndexedDB** - Para datos complejos y grandes

---

## 💡 Tips para Debugging Eficaz

### **1. Usar console.log estratégicamente:**
```javascript
function cambiarTema() {
    console.log('🔄 Iniciando cambio de tema');
    
    const tieneOscuro = document.body.classList.contains('oscuro');
    console.log('🎨 Tiene tema oscuro:', tieneOscuro);
    
    if (tieneOscuro) {
        document.body.classList.remove('oscuro');
        localStorage.setItem('tema-oscuro', 'false');
        console.log('☀️ Cambiado a tema claro');
    } else {
        document.body.classList.add('oscuro');
        localStorage.setItem('tema-oscuro', 'true');
        console.log('🌙 Cambiado a tema oscuro');
    }
}
```

### **2. Verificar errores en Console:**
- **Errores rojos** = Algo está roto
- **Warnings amarillos** = Algo puede mejorar
- **Logs azules** = Información normal

### **3. Usar breakpoints:**
- **DevTools → Sources → Click en número de línea**
- **Pausar ejecución** para inspeccionar variables

### **4. Network tab:**
- **Verificar si archivos CSS/JS se cargan**
- **404 errors** = Archivos no encontrados

---

## 🎯 Checklist Final de Debugging

### **Antes de declarar "terminado":**
- [ ] **Console limpia** - Sin errores rojos
- [ ] **Local Storage funciona** - Datos se guardan y recuperan
- [ ] **Tema persiste** - Entre páginas y recargas
- [ ] **Formulario se guarda** - Automáticamente mientras escribes
- [ ] **Responsive funciona** - En móvil y desktop
- [ ] **Navegación funciona** - Todos los links van a páginas correctas
- [ ] **Contenido real** - No hay Lorem Ipsum
- [ ] **DevTools Application** - Muestra datos guardados correctamente

### **Testing final:**
1. **Abrir proyecto en navegador**
2. **Cambiar tema** → Verificar que funciona
3. **Escribir en formulario** → Verificar auto-guardado
4. **Recargar página** → Verificar que tema y formulario persisten
5. **Navegar entre páginas** → Verificar tema en todas
6. **Abrir DevTools** → Verificar datos en Local Storage
7. **Probar en móvil** → Verificar responsive

**¡Si todo funciona, tu proyecto está listo para presentar! 🎉**