// DATOS PARA LA PARTE 3
const frutas = ["🍎 Manzana", "🍌 Banana", "🍊 Naranja", "🍇 Uvas"];
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Carlos", edad: 30 },
  { nombre: "María", edad: 28 },
];

// PARTE 1: Cambiar contenido
function cambiarContenido() {
  // TODO: Seleccionar elemento con id 'titulo-principal'
  // y cambiar su innerHTML a "¡Nuevo Título!"

  // TODO: Seleccionar elemento con clase 'mensaje-bienvenida'
  // y cambiar su textContent a "¡Bienvenido a la práctica de DOM!"

  // TODO: Seleccionar '#resultado-parte1' y mostrar:
  // "✅ Contenido cambiado exitosamente"

  console.log("✅ Parte 1 completada");
}

// PARTE 2: Cambiar estilos
function cambiarEstilos() {
  // TODO: Seleccionar '#caja-demo' y cambiar:
  // - backgroundColor a '#48bb78' (verde)
  // - color a 'white'
  // - fontSize a '24px'
  // - border a '3px solid #2d3748'
  // TODO: Seleccionar '#resultado-parte2' y mostrar:
  // "🎨 Estilos aplicados correctamente"
}

function resetearEstilos() {
  // TODO: Seleccionar '#caja-demo' y resetear:
  // - backgroundColor a ''
  // - color a ''
  // - fontSize a ''
  // - border a ''
  // TODO: Cambiar innerHTML de '#resultado-parte2' a:
  // "🔄 Estilos reseteados"
}

// PARTE 3: Mostrar datos
function mostrarDatos() {
  // TODO: Mostrar frutas en '#lista-frutas'
  // Crear una variable html = '<h4>🍎 Frutas:</h4>'
  // Usar forEach para agregar cada fruta como <p>fruta</p>
  // Cambiar innerHTML de '#lista-frutas' con el html completo

  // TODO: Mostrar personas en '#lista-personas'
  // Crear html = '<h4>👥 Personas:</h4>'
  // Usar forEach para agregar cada persona como:
  // <p>Nombre: ${persona.nombre}, Edad: ${persona.edad}</p>
  // Cambiar innerHTML de '#lista-personas'

  console.log("📊 Datos mostrados correctamente");
}
