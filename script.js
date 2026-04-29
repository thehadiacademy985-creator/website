// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Modal Elements
const applyBtn = document.getElementById('applyBtn');
const admissionModal = document.getElementById('admissionModal');
const modalClose = document.getElementById('modalClose');
const admissionForm = document.getElementById('admissionForm');

// Open Modal
applyBtn.addEventListener('click', () => {
    admissionModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close Modal
modalClose.addEventListener('click', () => {
    admissionModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === admissionModal) {
        admissionModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Handle Admission Form Submission
admissionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('appName').value,
        email: document.getElementById('appEmail').value,
        phone: document.getElementById('appPhone').value,
        course: document.getElementById('appCourse').value,
        education: document.getElementById('appEducation').value
    };

    console.log('Application Submitted:', formData);
    
    // Show success message
    alert(`Thank you for your application, ${formData.name}!\n\nWe will contact you soon at ${formData.email}\n\nCourse Selected: ${formData.course}`);
    
    // Reset form
    admissionForm.reset();
    
    // Close modal
    admissionModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Handle Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        console.log('Message Sent:', formData);
        
        // Show success message
        alert(`Thank you for your message, ${formData.name}!\n\nWe will get back to you soon at ${formData.email}`);
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe course cards
document.querySelectorAll('.course-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe about features
document.querySelectorAll('.feature').forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.animationDelay = `${index * 0.1}s`;
    observer.observe(feature);
});

// Observe info cards
document.querySelectorAll('.info-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 250) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Add active state styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: #ffd700;
        font-weight: bold;
    }
    
    .nav-links a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Hamburger Menu Animation
menuToggle.addEventListener('click', () => {
    const spans = menuToggle.querySelectorAll('span');
    if (menuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Scroll to Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #0066cc 0%, #00a8ff 100%);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: 0 10px 25px rgba(0, 102, 204, 0.3);
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopBtn);

// Show/Hide Scroll to Top Button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
        scrollTopBtn.style.alignItems = 'center';
        scrollTopBtn.style.justifyContent = 'center';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to Top Function
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
    scrollTopBtn.style.boxShadow = '0 15px 35px rgba(0, 102, 204, 0.4)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
    scrollTopBtn.style.boxShadow = '0 10px 25px rgba(0, 102, 204, 0.3)';
});

// Number Counter Animation
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.floor(target);
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

// Form Validation
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePhone = (phone) => {
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Add input validation to contact form
if (contactForm) {
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', () => {
        if (!validateEmail(emailInput.value)) {
            emailInput.style.borderColor = '#ff6b6b';
        } else {
            emailInput.style.borderColor = '#00a8ff';
        }
    });
}

// Add input validation to admission form
document.getElementById('appEmail').addEventListener('blur', (e) => {
    if (!validateEmail(e.target.value)) {
        e.target.style.borderColor = '#ff6b6b';
    } else {
        e.target.style.borderColor = '#00a8ff';
    }
});

document.getElementById('appPhone').addEventListener('blur', (e) => {
    if (!validatePhone(e.target.value)) {
        e.target.style.borderColor = '#ff6b6b';
    } else {
        e.target.style.borderColor = '#00a8ff';
    }
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && admissionModal.style.display === 'block') {
        admissionModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Preload animations
window.addEventListener('load', () => {
    document.body.style.animation = 'fadeIn 0.5s ease';
});

console.log('Hadi Academy Website Loaded Successfully!');
