document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  // Create an overlay div that will serve as the dark layer
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.pointerEvents = 'none';
  overlay.style.background = 'black';
  overlay.style.transition = 'background 0.3s ease-out';
  overlay.style.zIndex = 9999;
  body.appendChild(overlay);

  let lightIntensity = 0; // 0 = dark, 1 = bright
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  // Update the gradient
  function updateLight() {
    const radius = 10 + 10 * lightIntensity; // light grows with clicks
    overlay.style.background = `radial-gradient(
      circle ${radius}px at ${mouseX}px ${mouseY}px,
      rgba(255,255,255,0) 100%,
      rgba(0,0,0,1) 100%
    )`;
  }

  // When user clicks, increase intensity
  document.addEventListener('click', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    lightIntensity = Math.min(lightIntensity + 1, 100);
    updateLight();
  });

  // Smoothly fade the light away over time
  setInterval(() => {
    lightIntensity = Math.max(0, lightIntensity - 0.05);
    updateLight();
  }, 50);

  // Move the light source with the mouse
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    updateLight();
  });

  updateLight();
});
