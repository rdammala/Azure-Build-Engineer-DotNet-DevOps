const nodes = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

nodes.forEach((el, idx) => {
  el.style.transitionDelay = `${Math.min(idx * 0.06, 0.32)}s`;
  observer.observe(el);
});
