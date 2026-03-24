const revealTargets = document.querySelectorAll(
  ".section, .stats-band article, .doctor-card, .feature-card, .testimonial"
);

revealTargets.forEach((node) => node.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealTargets.forEach((node) => observer.observe(node));
