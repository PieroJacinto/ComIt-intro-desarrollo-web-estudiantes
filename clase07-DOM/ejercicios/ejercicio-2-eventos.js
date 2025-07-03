// DATOS PARA EL EJERCICIO
let contador = 0;

// PARTE 1: Eventos de click
// TODO: Seleccionar '#btn-saludo' con querySelector
// TODO: Agregar addEventListener con 'click'
// TODO: En la función, cambiar innerHTML de '#resultado-clicks' a:
//       "👋 ¡Hola! Gracias por hacer click"

// TODO: Seleccionar '#btn-contador' con querySelector
// TODO: Agregar addEventListener con 'click'
// TODO: En la función:
//       - Aumentar la variable contador: contador = contador + 1
//       - Cambiar innerHTML de '#resultado-clicks' a: `🔢 Clicks: ${contador}`

// TODO: Seleccionar '#btn-color' con querySelector
// TODO: Agregar addEventListener con 'click'
// TODO: En la función, cambiar style.backgroundColor de '#resultado-clicks' a '#48bb78'

// PARTE 2: Eventos de mouse
// TODO: Seleccionar '#caja-hover' con querySelector
// TODO: Agregar addEventListener con 'mouseover'
// TODO: En la función cuando mouse entra:
//       - Cambiar innerHTML de la caja a "🔥 ¡Mouse encima!"
//       - Cambiar style.backgroundColor de la caja a '#48bb78'
//       - Cambiar innerHTML de '#resultado-mouse' a "➡️ Mouse entró en la caja"

// TODO: Al mismo elemento '#caja-hover'
// TODO: Agregar addEventListener con 'mouseout'
// TODO: En la función cuando mouse sale:
//       - Cambiar innerHTML de la caja a "Pasa el mouse por encima de mí"
//       - Cambiar style.backgroundColor de la caja a '#fef5e7'
//       - Cambiar innerHTML de '#resultado-mouse' a "⬅️ Mouse salió de la caja"

// PARTE 3: Eventos de teclado
// TODO: Seleccionar '#input-texto' con querySelector
// TODO: Agregar addEventListener con 'keyup'
// TODO: En la función del evento:
//       - Crear variable: const texto = event.target.value
//       - Seleccionar '#resultado-teclado'
//       - Cambiar su innerHTML a: `✏️ Escribiste: ${texto}`
//
// EXTRA: Si quieres mostrar también la longitud:
//       - Agregar: `<br>📏 Longitud: ${texto.length} caracteres`
