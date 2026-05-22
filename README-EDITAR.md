# 🚀 Psi Bolivia - Edición Rápida de Contenido

Estructura optimizada para **editar rápidamente imágenes, textos y contenido** sin tocar HTML.

## 📂 Estructura del Proyecto

```
/
├── index.html       ← HTML limpio (NO EDITES)
├── app.js          ← 📝 EDITA TODO AQUÍ
├── styles.css      ← CSS moderno (opcional editar)
└── images/         ← Coloca tus imágenes aquí
    ├── hero.jpg
    ├── testimonial1.jpg
    ├── testimonial2.jpg
    └── testimonial3.jpg
```

## ⚡ Cómo Editar Contenido Rápidamente

### 1️⃣ Cambiar Títulos y Textos

Abre `app.js` y busca la sección que quieres editar:

```javascript
hero: {
    title: "Salud Mental Accesible",           // ✏️ CAMBIA ESTO
    subtitle: "Conecta con psicólogos...",     // ✏️ O ESTO
}
```

### 2️⃣ Cambiar Imágenes

En `app.js`, solo reemplaza la ruta:

```javascript
image: "images/hero.jpg"  // ✏️ Cambia al nombre de tu imagen
```

### 3️⃣ Agregar Nuevos Servicios

En la sección `features`:

```javascript
features: [
    {
        title: "Mi Nuevo Servicio",
        description: "Descripción del servicio"
    },
    // ← AGREGA MÁS AQUÍ
]
```

### 4️⃣ Agregar Nuevos Testimonios

En la sección `testimonials`:

```javascript
testimonials: [
    {
        name: "Juan Pérez",
        role: "Paciente",
        text: "Excelente experiencia...",
        image: "images/testimonial1.jpg",
        rating: 5
    },
    // ← AGREGA MÁS AQUÍ
]
```

## 🎨 Personalizar Colores

En `styles.css`, cambia las variables en `:root`:

```css
:root {
    --primary: #8b5cf6;        /* Púrpura */
    --secondary: #06b6d4;      /* Cyan */
    --text-dark: #1f2937;      /* Texto oscuro */
}
```

## 📱 Secciones de la Página

| Sección | Ubicación en app.js | Qué Editar |
|---------|-------------------|-----------|
| Header | `header` | Título, navegación |
| Hero (Banner) | `hero` | Título, subtítulo, imagen |
| Servicios | `features` | Lista de servicios |
| Testimonios | `testimonials` | Testimonios de pacientes |
| Footer | `footer` | Enlaces, redes sociales |

## 🔧 Ejemplos Prácticos

### Cambiar el botón principal
```javascript
hero: {
    buttonText: "Agendar Cita",      // ✏️ Texto del botón
    buttonUrl: "https://tu-link.com" // ✏️ Dónde va el botón
}
```

### Cambiar redes sociales
```javascript
footer: {
    social: [
        { label: "Facebook", url: "https://facebook.com/tunuevo" },
        { label: "Instagram", url: "https://instagram.com/tunuevo" },
        { label: "WhatsApp", url: "https://wa.me/YOUR_NUMBER" }
    ]
}
```

## 📸 Sugerencias para Imágenes

- **Hero image**: 1200x600px (landscape)
- **Testimonial images**: 200x200px (cuadrado)
- **Formato**: JPG o PNG

## ✅ Checklist Rápido

- [ ] Cambié `hero.title` con mi título
- [ ] Cambié `hero.image` con mi imagen
- [ ] Actualicé los `features` con mis servicios
- [ ] Cambié los `testimonials` con mis testimonios reales
- [ ] Actualicé `footer.company` con mi nombre
- [ ] Cambié URLs de redes sociales

---

**¡Listo! Guarda los cambios y tu página se actualizará automáticamente. No necesitas tocar HTML nunca.** 🎉
