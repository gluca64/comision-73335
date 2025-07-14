//  acordeon interactivo
document.querySelectorAll('.acordeon-titulo').forEach(button => {
    button.addEventListener('click', function() {
        const contenido = this.nextElementSibling;
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        // cerrar todos los acordeones
        document.querySelectorAll('.acordeon-titulo').forEach(btn => {
            btn.setAttribute('aria-expanded', 'false');
            btn.nextElementSibling.hidden = true;
        });
        
        // abrir el clickeado si estaba cerrado
        if (!isExpanded) {
            this.setAttribute('aria-expanded', 'true');
            contenido.hidden = false;
        }
    });
});

// abrir primer acordeon al cargar la pagina
document.addEventListener('DOMContentLoaded', function() {
    const firstBtn = document.querySelector('.acordeon-titulo');
    const firstContent = document.querySelector('.acordeon-contenido');
    if (firstBtn && firstContent) {
        firstBtn.setAttribute('aria-expanded', 'true');
        firstContent.hidden = false;
    }
});
