// Fade-in hero text
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-text');
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(20px)';
    setTimeout(() => {
      hero.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      hero.style.opacity = 1;
      hero.style.transform = 'translateY(0)';
    }, 200);
  }
});

// Menu filter logic
const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.menu-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    items.forEach(item => {
      item.style.display = category === 'all' || item.classList.contains(category)
        ? 'block'
        : 'none';
    });
  });
});

// Form submission feedback
const contactForm = document.querySelector('.contact-form');
const orderForm = document.querySelector('.order-form');

const feedback = formType => {
  const statusEl = formType.querySelector('#form-status') || formType.querySelector('#order-status');
  if (statusEl) statusEl.textContent = "Thank you! We'll be in touch soon.";
  formType.reset();
};

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    feedback(contactForm);
  });
}

if (orderForm) {
  orderForm.addEventListener('submit', e => {
    e.preventDefault();
    feedback(orderForm);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Scroll effect: add/remove scrolled class
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Optional: Close mobile menu when clicking a nav link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      }
    });
  });
});

