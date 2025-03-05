document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      bar.style.width = level;
    });
  });