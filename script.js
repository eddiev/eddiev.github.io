const yearNode = document.querySelector("#year");
const revealNodes = document.querySelectorAll(".reveal");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!prefersReducedMotion.matches) {
  document.body.classList.add("enhanced-motion");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));
}
