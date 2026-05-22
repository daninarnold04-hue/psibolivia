// 📝 ARCHIVO PRINCIPAL PARA EDITAR - Cambia todo aquí sin tocar HTML

const content = {
    // Header
    header: {
        brand: "Psi Bolivia",
        nav: ["Inicio", "Servicios", "Testimonios", "Contacto"]
    },

    // Hero Section
    hero: {
        title: "Salud Mental Accesible",
        subtitle: "Conecta con psicólogos profesionales certificados de forma simple, rápida y segura",
        image: "images/hero.jpg",
        buttonText: "Comenzar Ahora",
        buttonUrl: "#contact"
    },

    // Features/Services
    features: [
        {
            icon: "👨‍⚕️",
            title: "Profesionales Certificados",
            description: "Psicólogos con credenciales verificadas y experiencia comprobada"
        },
        {
            icon: "🔒",
            title: "Privacidad Garantizada",
            description: "Tus sesiones son completamente confidenciales y seguras"
        },
        {
            icon: "⏰",
            title: "Flexible y Conveniente",
            description: "Agendas sesiones según tu disponibilidad, desde cualquier lugar"
        },
        {
            icon: "💰",
            title: "Precios Accesibles",
            description: "Tarifas justas para que todos tengan acceso a salud mental de calidad"
        },
        {
            icon: "📱",
            title: "Fácil de Usar",
            description: "Plataforma intuitiva diseñada pensando en tu comodidad"
        },
        {
            icon: "🌍",
            title: "Para Todo Bolivia",
            description: "Conectamos a pacientes de cualquier región del país"
        }
    ],

    // Testimonials
    testimonials: [
        {
            name: "María López",
            role: "Paciente",
            text: "Encontré la ayuda que necesitaba sin tener que viajar a la ciudad. Muy recomendado.",
            image: "images/testimonial1.jpg",
            rating: 5
        },
        {
            name: "Juan Rodríguez",
            role: "Paciente",
            text: "El psicólogo que me asignaron fue excelente. La plataforma es muy fácil de usar.",
            image: "images/testimonial2.jpg",
            rating: 5
        },
        {
            name: "Ana García",
            role: "Paciente",
            text: "Finalmente pude acceder a terapia profesional. Psi Bolivia cambió mi vida.",
            image: "images/testimonial3.jpg",
            rating: 5
        }
    ],

    // Contact Section
    contact: {
        title: "¿Listo para Comenzar?",
        description: "Contáctanos y da el primer paso hacia una mejor salud mental",
        email: "info@psibolivia.com",
        phone: "+591 712 345 678"
    },

    // Footer
    footer: {
        company: "Psi Bolivia",
        description: "Plataforma de salud mental para conectar bolivianos con psicólogos profesionales",
        links: [
            { label: "Inicio", url: "#" },
            { label: "Servicios", url: "#features" },
            { label: "Testimonios", url: "#testimonials" },
            { label: "Contacto", url: "#contact" }
        ],
        social: [
            { label: "Facebook", url: "https://facebook.com/psibolivia", icon: "f" },
            { label: "Instagram", url: "https://instagram.com/psibolivia", icon: "📷" },
            { label: "WhatsApp", url: "https://wa.me/591712345678", icon: "💬" }
        ]
    }
};

// ================================
// NO EDITES LO QUE SIGUE
// ================================

// Render Header
function renderHeader() {
    const header = document.getElementById('header-title');
    if (header) header.textContent = content.header.brand;
}

// Render Hero
function renderHero() {
    document.getElementById('hero-title').textContent = content.hero.title;
    document.getElementById('hero-subtitle').textContent = content.hero.subtitle;
    document.getElementById('hero-image').src = content.hero.image;
    document.getElementById('hero-image').alt = content.hero.title;
    document.getElementById('hero-cta').textContent = content.hero.buttonText;
}

// Render Features
function renderFeatures() {
    const grid = document.getElementById('features-grid');
    grid.innerHTML = content.features.map(feature => `
        <div class="feature-card">
            <div class="feature-icon">${feature.icon}</div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');
}

// Render Testimonials
function renderTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    grid.innerHTML = content.testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="stars">${'⭐'.repeat(testimonial.rating)}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.name}">
                <div>
                    <p class="author-name">${testimonial.name}</p>
                    <p class="author-role">${testimonial.role}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Footer
function renderFooter() {
    document.getElementById('footer-company').textContent = content.footer.company;
    document.getElementById('footer-description').textContent = content.footer.description;
    
    const footerLinks = document.getElementById('footer-links');
    footerLinks.innerHTML = content.footer.links.map(link => 
        `<li><a href="${link.url}">${link.label}</a></li>`
    ).join('');

    const footerSocial = document.getElementById('footer-social');
    footerSocial.innerHTML = content.footer.social.map(social => 
        `<li><a href="${social.url}" target="_blank">${social.icon} ${social.label}</a></li>`
    ).join('');
}

// Initialize
function init() {
    renderHeader();
    renderHero();
    renderFeatures();
    renderTestimonials();
    renderFooter();
}

// Run on page load
document.addEventListener('DOMContentLoaded', init);
