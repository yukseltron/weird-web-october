document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll("h1");

  headings.forEach(h1 => {
    // Store the base position
    h1.style.position = "relative";

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    function jitter() {
      // Occasionally pick a new random offset
      if (Math.random() < 0.02) { // controls how often the target changes
        targetX = (Math.random() - 0.5) * 6; // range: -3px to +3px
        targetY = (Math.random() - 0.5) * 6;
      }

      // Smoothly move toward the target
      x += (targetX - x) * 0.05;
      y += (targetY - y) * 0.05;

      h1.style.transform = `rotate(180deg) translate(${x}px, ${y}px)`;

      requestAnimationFrame(jitter);
    }

    jitter();
  });
});
