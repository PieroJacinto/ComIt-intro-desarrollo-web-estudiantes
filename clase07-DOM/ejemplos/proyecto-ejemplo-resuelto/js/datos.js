// 📄 datos.js - Proyecto Cafetería Luna (VERSIÓN PROFESOR - COMPLETA)
// Solo datos - sin funciones

// 🏪 INFORMACIÓN DE LA CAFETERÍA
const cafeteria = {
    nombre: "Cafetería Luna",
    descripcion: "El mejor café de la ciudad",
    direccion: "Av. Principal 123",
    telefono: "(011) 1234-5678"
};

// ☕ PRODUCTOS DEL MENÚ
const productos = [
    {
        id: 1,
        nombre: "Café Americano",
        categoria: "Bebidas Calientes",
        precio: 450,
        disponible: true
    },
    {
        id: 2,
        nombre: "Cappuccino",
        categoria: "Bebidas Calientes", 
        precio: 650,
        disponible: true
    },
    {
        id: 3,
        nombre: "Latte Helado",
        categoria: "Bebidas Frías",
        precio: 750,
        disponible: true
    },
    {
        id: 4,
        nombre: "Croissant",
        categoria: "Panadería",
        precio: 380,
        disponible: false
    },
    {
        id: 5,
        nombre: "Muffin",
        categoria: "Panadería",
        precio: 420,
        disponible: true
    }
];

// 👥 EQUIPO
const equipo = [
    {
        nombre: "María González",
        cargo: "Gerente"
    },
    {
        nombre: "Carlos Méndez", 
        cargo: "Barista"
    },
    {
        nombre: "Ana Silva",
        cargo: "Pastelera"
    }
];

// ✅ EXPORTAR datos para usar en otros archivos
export { cafeteria, productos, equipo };