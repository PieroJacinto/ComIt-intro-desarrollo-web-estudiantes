// DATOS PARA BÚSQUEDA
const productos = [
  "Laptop",
  "Mouse",
  "Teclado",
  "Monitor",
  "Auriculares",
  "Webcam",
  "Impresora",
  "Tablet",
  "Smartphone",
  "Parlantes",
];

// PARTE 1: Formulario de contacto
// TODO: Seleccionar '#form-contacto' con querySelector
// TODO: Agregar addEventListener con 'submit'
// TODO: En la función del evento:
//       - Usar event.preventDefault()
//       - Obtener valor de '#nombre'
//       - Obtener valor de '#email'
//       - Obtener valor de '#mensaje'
//       - Mostrar los datos en '#resultado-contacto' con template strings

// PARTE 2: Formulario con validación
// TODO: Seleccionar '#form-registro' con querySelector
// TODO: Agregar addEventListener con 'submit'
// TODO: En la función del evento:
//       - Usar event.preventDefault()
//       - Obtener valores de usuario, edad y ciudad
//       - Limpiar errores anteriores (innerHTML = '')
//       - Validar usuario: mínimo 3 caracteres
//       - Validar edad: entre 13 y 100
//       - Validar ciudad: no vacía
//       - Si todo está bien, mostrar resultado exitoso

// PARTE 3: Búsqueda en tiempo real
// TODO: Seleccionar '#buscar' con querySelector
// TODO: Agregar addEventListener con 'keyup'
// TODO: En la función del evento:
//       - Obtener el texto del input
//       - Crear array vacío para resultados
//       - Usar forEach en productos para filtrar
//       - Mostrar resultados en '#resultado-busqueda'
