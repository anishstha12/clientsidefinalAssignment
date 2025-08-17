// ====================
// Original Vanilla JS
// ====================

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


// ====================
// jQuery Version
// ====================

$(document).ready(function () {

  // Fade-in hero text
  const $hero = $('.hero-text');
  if ($hero.length) {
    $hero.css({ opacity: 0, transform: 'translateY(20px)' });
    setTimeout(() => {
      $hero.css({
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        opacity: 1,
        transform: 'translateY(0)'
      });
    }, 200);
  }

  // Menu filter logic
  $('.filter-btn').on('click', function () {
    const category = $(this).data('category');
    $('.menu-item').each(function () {
      if (category === 'all' || $(this).hasClass(category)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // Form submission feedback
  function feedback($form) {
    const $statusEl = $form.find('#form-status, #order-status');
    if ($statusEl.length) $statusEl.text("Thank you! We'll be in touch soon.");
    $form[0].reset();
  }

  $('.contact-form').on('submit', function (e) {
    e.preventDefault();
    feedback($(this));
  });

  $('.order-form').on('submit', function (e) {
    e.preventDefault();
    feedback($(this));
  });

  // Header + hamburger
  const $header = $('.site-header');
  const $hamburger = $('.hamburger');
  const $navLinks = $('.nav-links');

  // Scroll effect
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }
  });

  // Mobile menu toggle
  $hamburger.on('click', function () {
    $(this).toggleClass('active');
    $navLinks.toggleClass('open');
  });

  // Close menu on nav link click
  $navLinks.find('a').on('click', function () {
    if ($navLinks.hasClass('open')) {
      $hamburger.removeClass('active');
      $navLinks.removeClass('open');
    }
  });

});


