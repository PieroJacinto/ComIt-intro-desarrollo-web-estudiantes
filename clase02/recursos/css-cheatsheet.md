# CSS Cheat Sheet - Referencia Rápida Clase 2

## 🎯 Selectores que Usamos

```css
/* Elemento */
h1 { color: blue; }

/* Clase */
.mi-clase { background: red; }

/* ID */
#mi-id { border: 1px solid black; }

/* Descendiente */
nav ul { list-style: none; }

/* Múltiple */
h1, h2, h3 { font-family: Arial; }

/* Hover */
a:hover { color: red; }
```

## 🎨 Fondos Básicos

```css
background-color: #f0f0f0;
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## ✨ Efectos Simples

```css
/* Transiciones */
transition: all 0.3s ease;

/* Sombras */
box-shadow: 0 2px 10px rgba(0,0,0,0.1);

/* Hover effects */
.boton:hover {
    transform: translateY(-2px);
}
```

## 📐 Layout Básico

```css
/* Centrar contenido */
max-width: 800px;
margin: 0 auto;
padding: 2rem;

/* Flex básico (para navegación) */
display: flex;
justify-content: center;
gap: 2rem;
```

## 🔧 Propiedades Útiles

```css
/* Cursor */
cursor: pointer;
cursor: default;

/* Opacidad */
opacity: 0.5;  /* 0 = invisible, 1 = visible */

/* Overflow */
overflow: hidden;
overflow: scroll;
overflow: auto;

/* Centrar contenido */
text-align: center;        /* texto */
margin: 0 auto;           /* elemento con ancho fijo */
```

## 📱 Media Queries Básicas

```css
/* Móvil (por defecto) */
/* 0px - 767px */

/* Tablet */
@media (min-width: 768px) {
    /* Estilos para tablet */
}

/* Desktop */
@media (min-width: 1024px) {
    /* Estilos para desktop */
}
```

## 📋 Reset CSS Base

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
}
```

## 💡 Tips Importantes

- **Usar `box-sizing: border-box`** siempre
- **Empezar con reset CSS** (`* { margin: 0; padding: 0; }`)
- **Mínimo 16px** para texto legible
- **Máximo 3-4 colores** principales
- **Usar transiciones** para efectos suaves
- **Testear en Chrome DevTools** (F12) Colores Básicos

```css
/* Hexadecimal (recomendado) */
color: #ff0000;  /* rojo */
color: #3498db;  /* azul */
color: #333333;  /* gris oscuro */

/* RGB */
color: rgb(255, 0, 0);

/* Nombres (solo básicos) */
color: red;
color: white;
color: black;
```

## ✍️ Tipografías Esenciales

```css
font-family: Arial, sans-serif;
font-size: 16px;           /* mínimo para legibilidad */
font-weight: bold;         /* normal, bold */
font-style: italic;        /* normal, italic */
text-align: center;        /* left, center, right */
text-decoration: none;     /* quitar subrayado */
line-height: 1.6;          /* espaciado entre líneas */
```

## 📦 Modelo de Caja

```css
/* SIEMPRE usar */
* {
    box-sizing: border-box;
}

/* Dimensiones */
width: 300px;
height: 200px;

/* Espaciado interno */
padding: 20px;

/* Borde */
border: 2px solid #333;
border-radius: 10px;

/* Espaciado externo */
margin: 20px;
margin: 0 auto;  /* centrar */
```

## 🎨