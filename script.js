// ===== Header shrink on scroll =====
const header = document.getElementById('siteHeader');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Mobile navigation =====
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

const closeNav = () => {
  nav.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
};

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Respect the user's motion preference: show everything, no entrance animation.
  revealEls.forEach((el) => el.classList.add('visible'));
} else if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('visible'));
}

// ===== Booking form =====
const form = document.getElementById('bookingForm');
const formMsg = document.getElementById('formMsg');

const today = new Date().toISOString().split('T')[0];
const checkin = document.getElementById('checkin');
const checkout = document.getElementById('checkout');
checkin.min = today;
checkout.min = today;

checkin.addEventListener('change', () => {
  checkout.min = checkin.value || today;
  if (checkout.value && checkout.value < checkin.value) checkout.value = '';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.classList.remove('error');

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailOk || !checkin.value || !checkout.value) {
    formMsg.classList.add('error');
    formMsg.textContent = 'Please complete your name, a valid email, and both dates.';
    return;
  }
  if (checkout.value <= checkin.value) {
    formMsg.classList.add('error');
    formMsg.textContent = 'Check-out must be after check-in.';
    return;
  }

  formMsg.textContent = `Thank you, ${name}. We've received your enquiry for the ${form.suite.value} and will reply personally, shortly.`;
  form.reset();
  checkin.min = today;
  checkout.min = today;
});

// ===== Footer year =====
const copy = document.querySelector('.footer-copy');
if (copy) copy.textContent = `© ${new Date().getFullYear()} The Hallery. All rights reserved.`;
