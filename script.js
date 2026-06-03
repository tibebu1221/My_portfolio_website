// ===== PRELOADER =====
window.addEventListener('load', () => {
    const pre = document.getElementById('preloader');
    pre.style.opacity = '0';
    setTimeout(() => pre.style.display = 'none', 500);
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
        backTop.classList.add('show');
    } else {
        navbar.classList.remove('scrolled');
        backTop.classList.remove('show');
    }
    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        const bottom = top + sec.offsetHeight;
        const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
        if (link) {
            if (window.scrollY >= top && window.scrollY < bottom) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== TYPED TEXT =====
const roles = ['Web Developer', 'IT Professional', 'Problem Solver', ];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typed');
function typeEffect() {
    const current = roles[roleIndex];
    if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex--);
    } else {
        typedEl.textContent = current.substring(0, charIndex++);
    }
    let speed = isDeleting ? 60 : 100;
    if (!isDeleting && charIndex > current.length) {
        speed = 1800; isDeleting = true;
    } else if (isDeleting && charIndex < 0) {
        isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; speed = 300;
    }
    setTimeout(typeEffect, speed);
}
typeEffect();

// ===== SKILL BARS =====
const animateBars = () => {
    document.querySelectorAll('.bar-fill').forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            bar.style.width = bar.getAttribute('data-w') + '%';
        }
    });
};
window.addEventListener('scroll', animateBars);
animateBars();

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.tl-card, .srv-card, .cert-card, .soft-card, .proj-card, .about-grid').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// ===== CERTIFICATE UPLOAD (localStorage) =====
let uploadMode = false;
let selectedCert = null;
const certFileInput = document.getElementById('certFileInput');

// Load saved certificates from localStorage on page load
function loadSavedCertificates() {
    document.querySelectorAll('.cert-card[data-certificate]').forEach(card => {
        const num = card.getAttribute('data-certificate');
        const saved = localStorage.getItem('cert_' + num);
        if (saved) {
            const img = card.querySelector('.cert-img');
            const placeholder = card.querySelector('.cert-placeholder');
            img.src = saved;
            img.style.display = 'block';
            placeholder.style.display = 'none';
        }
    });
}
loadSavedCertificates();

// ===== LIGHTBOX =====
let currentCert = 1;
const certCards = document.querySelectorAll('.cert-card[data-certificate]');
const totalCerts = certCards.length;
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');

certCards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('.cert-up-btn')) return;
        const img = card.querySelector('.cert-img');
        // Show lightbox if image loaded successfully (naturalWidth > 0)
        if (!img || img.naturalWidth === 0) return;
        currentCert = parseInt(card.getAttribute('data-certificate'));
        lbImg.src = img.src;
        lbCaption.textContent = card.querySelector('h4').textContent;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

function showCert(n) {
    const card = document.querySelector(`.cert-card[data-certificate="${n}"]`);
    if (!card) return;
    const img = card.querySelector('.cert-img');
    if (img && img.naturalWidth > 0) {
        lbImg.src = img.src;
        lbCaption.textContent = card.querySelector('h4').textContent;
    }
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.getElementById('lbPrev').addEventListener('click', (e) => {
    e.stopPropagation();
    currentCert = currentCert > 1 ? currentCert - 1 : totalCerts;
    showCert(currentCert);
});
document.getElementById('lbNext').addEventListener('click', (e) => {
    e.stopPropagation();
    currentCert = currentCert < totalCerts ? currentCert + 1 : 1;
    showCert(currentCert);
});
document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
});



