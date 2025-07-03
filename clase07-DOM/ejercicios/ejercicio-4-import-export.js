// TODO: Agregar import { animales, persona } from './datos.js' aquí al inicio
// TODO: Cambiar <script> por <script type="module"> en el HTML

// FUNCIONES YA HECHAS - No las cambies
function mostrarAnimales() {
  const resultado = document.querySelector("#resultado");
  let html = "<h3>🐶 Lista de Animales:</h3>";

  animales.forEach(function (animal) {
    html += `<p>${animal}</p>`;
  });

  resultado.innerHTML = html;
}

function mostrarPersona() {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = `
                <h3>👤 Información Personal:</h3>
                <p><strong>Nombre:</strong> ${persona.nombre}</p>
                <p><strong>Edad:</strong> ${persona.edad} años</p>
                <p><strong>Ciudad:</strong> ${persona.ciudad}</p>
            `;
}

// EVENTOS YA HECHOS - No los cambies
const btnAnimales = document.querySelector("#btn-animales");
const btnPersona = document.querySelector("#btn-persona");

btnAnimales.addEventListener("click", mostrarAnimales);
btnPersona.addEventListener("click", mostrarPersona);

// MENSAJE INICIAL
console.log("👋 Para que funcione este ejercicio necesitas:");
console.log("1. Crear datos.js con los datos y export");
console.log("2. Importar los datos al inicio de este script");
console.log('3. Cambiar script a type="module"');
console.log("4. Usar Live Server");
