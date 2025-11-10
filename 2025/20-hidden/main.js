document.addEventListener('DOMContentLoaded', () => {
  const dots = document.querySelectorAll('.dot');
  const marginRatio = 0.20; 
  const minX = window.innerWidth * marginRatio;
  const maxX = window.innerWidth * (1 - marginRatio);
  const minY = window.innerHeight * marginRatio;
  const maxY = window.innerHeight * (1 - marginRatio);

  dots.forEach(dot => {
    const rect = dot.getBoundingClientRect();
    const dotW = rect.width || 0;
    const dotH = rect.height || 0;
    const x = Math.random() * (Math.max(0, maxX - minX - dotW)) + minX;
    const y = Math.random() * (Math.max(0, maxY - minY - dotH)) + minY;

    dot.style.left = `${Math.max(minX, Math.min(x, maxX - dotW))}px`;
    dot.style.top = `${Math.max(minY, Math.min(y, maxY - dotH))}px`;
  });
});
