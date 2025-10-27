    document.addEventListener('DOMContentLoaded', () => {
      const solids = document.querySelectorAll('.solid');

      solids.forEach(solid => {
        let fontSize = 1; // initial font size in px
        let growing = false;
        let animationFrame;

        const grow = () => {
          if (growing) {
            fontSize += 0.2; // growth rate
            solid.style.fontSize = fontSize + 'px';
            animationFrame = requestAnimationFrame(grow);
          }
        };

        solid.addEventListener('mouseenter', () => {
          if (!growing) {
            growing = true;
            animationFrame = requestAnimationFrame(grow);
          }
        });

        solid.addEventListener('mouseleave', () => {
          growing = false;
          cancelAnimationFrame(animationFrame);
        });
      });
    });