document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const overlay = document.getElementById("circle-overlay");
  const textLayers = document.querySelectorAll(".layer");
  const image = document.querySelector('img');
  let toggle = false;

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      toggle = !toggle;
      image.src = toggle ? 'headset-dead.svg' : 'headset-alive.svg';
      image.style.filter = 'invert(0.5) sepia(1) saturate(5) hue-rotate(175deg)'
      const color = e.target.dataset.color;
      const rect = e.target.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // Reset overlay to button center
      overlay.style.width = `0px`;
      overlay.style.height = `0px`;
      overlay.style.backgroundColor = color;
      overlay.style.left = `${x}px`;
      overlay.style.top = `${y}px`;
      overlay.style.transition = "none";

      // Trigger reflow for animation reset
      overlay.offsetWidth; 

      // Expand circle animation
      overlay.style.transition = "width 1s ease-out, height 1s ease-out";
      overlay.style.width = `300vmax`;
      overlay.style.height = `300vmax`;

      // Change text dynamically
      textLayers.forEach(layer => {
        const newText = layer.dataset[color] || layer.dataset.white;
        layer.textContent = newText;
        layer.style.color = getContrastingColor(color);
      });

      // Change background after short delay for sync
      setTimeout(() => {
        document.body.style.backgroundColor = color;
      }, 400);
    });
  });

  function getContrastingColor(bgColor) {
    switch (bgColor) {
      case "white": return "black";
      case "orangered": return "yellow";
      case "violet": return "cyan";
      case "lime": return "white";
      default: return "black";
    }
  }
});
