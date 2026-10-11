// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle icon between bars and times
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// Form Submission logic
const emailBtn = document.querySelector('.btn-email');
const whatsappBtn = document.querySelector('.btn-whatsapp');

function getFormData() {
    const nameInput = document.querySelector('input[placeholder="John Carter"]');
    const emailInput = document.querySelector('input[placeholder="example@email.com"]');
    const msgInput = document.querySelector('textarea');
    
    return {
        name: nameInput ? nameInput.value.trim() : '',
        email: emailInput ? emailInput.value.trim() : '',
        message: msgInput ? msgInput.value.trim() : ''
    };
}

if(whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const data = getFormData();
        
        let waText = "Hi Sinan! I'm " + (data.name || "a visitor from your portfolio") + ".";
        if(data.message) waText += " " + data.message;
        else waText += " I saw your portfolio and wanted to connect!";
        
        const waUrl = "https://wa.me/918129129641?text=" + encodeURIComponent(waText);
        window.open(waUrl, '_blank');
    });
}

if(emailBtn) {
    emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const data = getFormData();
        
        const subject = "Contact from Portfolio: " + (data.name || "Visitor");
        let body = "Hi Sinan,\n\n";
        if(data.name) body += "Name: " + data.name + "\n";
        if(data.email) body += "Email: " + data.email + "\n\n";
        body += "Message:\n" + (data.message || "I saw your portfolio and wanted to connect!");
        
        const mailtoUrl = "mailto:sinanrahmanak@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        window.location.href = mailtoUrl;
    });
}

// Slider logic
window.moveSlide = function(direction, btn) {
    const slider = btn.closest('.achievement-slider');
    const slides = slider.querySelectorAll('.slide');
    let activeIndex = 0;
    slides.forEach((slide, index) => {
        if(slide.classList.contains('active')) activeIndex = index;
    });
    
    slides[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + direction + slides.length) % slides.length;
    slides[activeIndex].classList.add('active');
};
