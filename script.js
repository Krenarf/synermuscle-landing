// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const heroForm = document.getElementById('heroForm');
    const heroMessage = document.getElementById('heroMessage');

    // Handle hero form submission
    if (heroForm) {
        heroForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button[type="submit"]');
            const email = emailInput.value.trim();
            
            // Basic email validation
            if (!isValidEmail(email)) {
                showMessage(heroMessage, 'Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';
            
            try {
                // Simulate API call
                await submitEmail(email);
                
                // Show success message
                showMessage(heroMessage, 'Thanks! You\'ll be notified when we launch.', 'success');
                emailInput.value = '';
                
                // Save to localStorage
                saveToLocalStorage(email);
                
            } catch (error) {
                showMessage(heroMessage, 'Something went wrong. Please try again.', 'error');
            } finally {
                // Reset button state
                submitButton.disabled = false;
                submitButton.textContent = 'Get Notified';
            }
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show message function
    function showMessage(element, message, type) {
        element.textContent = message;
        element.className = `form-message ${type}`;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            element.textContent = '';
            element.className = 'form-message';
        }, 5000);
    }

    // Simulate API submission
    async function submitEmail(email) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Email submitted:', email);
                resolve();
            }, 1000);
        });
    }

    // Save to localStorage
    function saveToLocalStorage(email) {
        try {
            const emails = JSON.parse(localStorage.getItem('synermuscle_emails') || '[]');
            if (!emails.includes(email)) {
                emails.push(email);
                localStorage.setItem('synermuscle_emails', JSON.stringify(emails));
                console.log('Email saved to localStorage');
            }
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }

    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .hero-main').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effects for interactive elements
    document.querySelectorAll('.form-wrapper button, .feature-card').forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('feature-card') ? 'translateY(-4px)' : 'translateY(-2px)';
        });
        
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
