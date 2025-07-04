// =========================================== 
// MAIN.JS - SE USA EN TODAS LAS PÁGINAS
// ===========================================

// ===========================================
// FUNCIÓN PARA CAMBIAR TEMA OSCURO/CLARO
// ===========================================
function cambiarTema() {
    console.log('🔄 Cambiando tema...');
    
    // TODO: Ver si body tiene clase "oscuro"
        
    
    // TODO: Cambiar al contrario
    // Si tiene la clase "oscuro", quitarla con .remove('oscuro')
    // Si no la tiene, agregarla con .add('oscuro')
    
    
    // TODO: Ver qué quedó activo después del cambio
        
    
    // TODO: GUARDAR en Local Storage
       
    
    console.log('✅ Función cambiarTema completada');
}

// ===========================================
// CARGA AUTOMÁTICA AL ABRIR CUALQUIER PÁGINA
// ===========================================

// TODO: Agregar window.addEventListener('load', function() {

    console.log('🚀 Página cargada - cargando tema automáticamente...');
    
    // TODO: Recuperar tema guardado de Local Storage
        
    
    // TODO: Si el tema guardado es 'true', aplicar tema oscuro
        
    
    console.log('✅ Tema cargado automáticamente');

//});

/*
✅ VERIFICAR QUE FUNCIONA:
- Presionar botón tema → cambia colores
- Recargar página → mantiene el tema
- Navegar entre páginas → tema persiste
- Console muestra logs correctos
- Local Storage muestra datos guardados

📁 ESTE ARCHIVO VA EN:
- index.html: <script src="js/main.js"></script>
- contacto.html: <script src="js/main.js"></script>

🎯 OBJETIVO:
El tema oscuro/claro funciona en TODAS las páginas del sitio
*/