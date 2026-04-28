document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    // Manejo del formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            try {
                formResponse.innerHTML = 'Enviando...';
                
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (result.success) {
                    formResponse.innerHTML = `<p style="color: #00aeef; margin-top: 1rem;">${result.message}</p>`;
                    contactForm.reset();
                } else {
                    formResponse.innerHTML = '<p style="color: #ec008c; margin-top: 1rem;">Ocurrió un error. Inténtalo de nuevo.</p>';
                }
            } catch (error) {
                console.error('Error:', error);
                formResponse.innerHTML = '<p style="color: #ec008c; margin-top: 1rem;">Error de conexión con el servidor.</p>';
            }
        });
    }

    // Smooth Scroll para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efecto de scroll para el header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.padding = '1rem 0';
            header.style.backgroundColor = 'white';
        }
    });
});
