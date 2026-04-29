// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create WhatsApp message
        const whatsappMessage = `Hello UZAIR Ice Cream Corner,\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage: ${message}`;
        const whatsappURL = `https://wa.me/923038315775?text=${encodeURIComponent(whatsappMessage)}`;

        // Show success message and open WhatsApp
        alert('Thank you for your message! We will contact you soon. Opening WhatsApp...');
        window.open(whatsappURL, '_blank');

        // Reset form
        contactForm.reset();
    });
}

// Smooth Scroll Enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe menu items and other elements
document.querySelectorAll('.menu-item, .service-card, .review-card').forEach(element => {
    observer.observe(element);
});

// Add click to call functionality
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function () {
        // This will trigger the phone call on mobile devices
        console.log('Attempting to call: ' + this.getAttribute('href'));
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Add loading animation
window.addEventListener('load', function () {
    document.body.style.opacity = '1';
});

// Prevent form submission on Enter in certain fields
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        if (e.target.tagName === 'INPUT' && e.target.form && e.target !== e.target.form.querySelector('button[type="submit"]')) {
            e.preventDefault();
        }
    }
});