// Función para desplazarse suavemente a una sección
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Agregar efecto de scroll a los enlaces de navegación
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Agregar efecto hover a los botones de cursos
document.querySelectorAll('.curso-card .btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('¡Pronto tendrás acceso a este curso!');
    });
});

// Detectar scroll y cambiar estilos de navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

console.log('¡Estudio Web cargado exitosamente!');