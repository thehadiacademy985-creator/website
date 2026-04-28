// ===== Navigation Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        updateActiveNav(link);
    });
});

// Update active navigation link
function updateActiveNav(element) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    element.classList.add('active');
}

// ===== Modal Functionality =====
const applyBtn = document.getElementById('applyBtn');
const admissionModal = document.getElementById('admissionModal');
const modalClose = document.getElementById('modalClose');

applyBtn.addEventListener('click', () => {
    admissionModal.classList.add('active');
});

modalClose.addEventListener('click', () => {
    admissionModal.classList.remove('active');
});

// Close modal when clicking outside
admissionModal.addEventListener('click', (e) => {
    if (e.target === admissionModal) {
        admissionModal.classList.remove('active');
    }
});

// ===== Admission Form Submission =====
const admissionForm = document.getElementById('admissionForm');

admissionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('appName').value,
        email: document.getElementById('appEmail').value,
        phone: document.getElementById('appPhone').value,
        course: document.getElementById('appCourse').value,
        education: document.getElementById('appEducation').value
    };
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Validate email
    if (!isValidEmail(formData.email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Validate phone
    if (!isValidPhone(formData.phone)) {
        alert('Please enter a valid phone number');
        return;
    }
    
    // Display success message
    alert(`Thank you ${formData.name}! Your application for ${formData.course} has been submitted successfully. We will contact you soon.`);
    
    // Reset form
    admissionForm.reset();
    admissionModal.classList.remove('active');
    
    // Log form data (in real scenario, send to server)
    console.log('Application submitted:', formData);
});

// ===== Contact Form Submission =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Validate email
    if (!isValidEmail(formData.email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Display success message
    alert(`Thank you ${formData.name}! Your message has been sent successfully. We will get back to you soon.`);
    
    // Reset form
    contactForm.reset();
    
    // Log form data (in real scenario, send to server)
    console.log('Message submitted:', formData);
});

// ===== Utility Functions =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

// ===== Scroll to Top Button =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0066cc 0%, #00a8ff 100%);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 5px 20px rgba(0, 102, 204, 0.4);
    transition: all 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll top button hover effect
scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1)';
});

// ===== Smooth Scrolling for Navigation Links =====
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

// ===== Active Navigation on Scroll =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe course cards for animation
document.querySelectorAll('.course-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hadi Academy Website Loaded Successfully!');
});
