// Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Nav link active state
  const sections = document.querySelectorAll('[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const id = entry.target.id;
        const active = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('[id]').forEach(el => {
    if (['about','skills','projects','experience','contact'].includes(el.id)) observer.observe(el);
  });

  // Fade-up animation on scroll
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), 0);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => {
    if (!el.classList.contains('visible')) fadeObserver.observe(el);
  });

  // Staggered card animations
  document.querySelectorAll('.project-card, .skill-card, .exp-card').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 0.1}s`;
  });