document.addEventListener("DOMContentLoaded", () => {
  const solids = document.querySelectorAll(".solid");

  solids.forEach((solid) => {
    let rotation = 0;
    const rotateDir = Math.random() < 0.5 ? -1 : 1; // random rotation direction
    const rotateSpeed = 0.15 + Math.random() * 0.25; // slow random speed
    let animating = false;
    let animationFrame;

    // Store the initial font size
    const baseFontSize = parseFloat(window.getComputedStyle(solid).fontSize);
    let currentScaleX = 1;
    let currentScaleY = 1;

    const animate = () => {
      if (!animating) return;
      rotation += rotateSpeed * rotateDir;
      //increasing fontsize on each hover
      solid.style.fontSize = `${baseFontSize * currentScaleY}%`;
      animationFrame = requestAnimationFrame(animate);
    };

    solid.addEventListener("mouseenter", () => {
      animating = true;

      // Height grows faster than width
      currentScaleX = 1.1;
      currentScaleY = 1.3;

      solid.style.transition = "transform 0.4s ease, font-size 0.4s ease";
      solid.style.fontSize = `${baseFontSize * 1.3}px`;
      animationFrame = requestAnimationFrame(animate);
    });

    solid.addEventListener("mouseleave", () => {
      animating = false; // pause rotation, but keep state
      cancelAnimationFrame(animationFrame);
    });
  });
});
