import './style.css'

// Main JS
// Update Year
document.getElementById('year').textContent = new Date().getFullYear();

// Cursor Glow Effect
const cursorGlow = document.getElementById('cursor-glow');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursorGlow.style.top = `${y}px`;
  cursorGlow.style.left = `${x}px`;
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-show');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Select elements to animate
// Use querySelectorAll for elements with 'fade-in' class or hero elements that we manually added classes to
// Actually, let's fix the CSS to rely on a common class or add the initial state in JS to avoid FOUC (Flash of Unstyled Content) if JS fails,
// but better is to have CSS set opacity 0 for specific classes.

// In style.css we defined .animate-hidden. Let's add that class to elements we want to animate.
// Or we can just add it here.

const heroElements = document.querySelectorAll('.animate-fade-up');
heroElements.forEach(el => {
  el.classList.add('animate-hidden');
  observer.observe(el);
});

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => {
  el.classList.add('animate-hidden');
  observer.observe(el);
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });

      // Update URL hash without jump (optional)
      history.pushState(null, null, targetId);
    }
  });
});

console.log('Portfolio ready.');
