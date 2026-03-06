

        // Slider de Depoimentos adaptado
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial');
        const dots = document.querySelectorAll('.slider-dot');
        
        function showTestimonial(index) {
            // Remove active de todos
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Ativa o selecionado
            currentTestimonial = index;
            testimonials[currentTestimonial].classList.add('active');
            dots[currentTestimonial].classList.add('active');
        }
        
        // Inicia o slider se houver elementos
        if (testimonials.length > 0) {
            // Auto-rotacionar depoimentos a cada 6 segundos
            let testimonialInterval = setInterval(() => {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
            }, 6000);
            
            // Pausar auto-rotação quando o usuário interagir e depois retomar
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    clearInterval(testimonialInterval);
                    showTestimonial(index);
                    // Reinicia o intervalo
                    testimonialInterval = setInterval(() => {
                        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                        showTestimonial(currentTestimonial);
                    }, 6000);
                });
            });
        }
