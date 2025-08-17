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


