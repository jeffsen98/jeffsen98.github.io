// ─────────────────────────────────────────────
//  Jeffrey Sen — Resume JS
// ─────────────────────────────────────────────

// Scroll progress bar
const bar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.body.scrollHeight - window.innerHeight;
  bar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
}, { passive: true });

// Fade-in sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

sections.forEach(s => observer.observe(s));

// Active nav link highlighting
const navLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
const sectionEls = [...navLinks].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const link = document.querySelector(`.sidebar-nav a[href="#${entry.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sectionEls.forEach(s => navObserver.observe(s));

// Year in footer
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();