document.addEventListener("DOMContentLoaded", () => {
  const p = document.querySelector("p");
  const words = p.textContent.trim().split(/\s+/);
  p.textContent = "";

  // Create span elements for each word
  words.forEach(word => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    span.style.position = "absolute";
    span.style.top = `${Math.random() * -200 - 100}px`; // start above view
    span.style.left = `${Math.random() * window.innerWidth * 0.8}px`;
    span.style.display = "inline-block";
    span.style.transformOrigin = "center";
    span.style.userSelect = "none";
    p.appendChild(span);
  });

  const spans = Array.from(p.querySelectorAll("span"));
  const gravity = 0.7;
  const floorY = window.innerHeight - 400;
  const friction = 0.26;
  let dropped = new Set();
  // index of the next span to drop (in DOM/text order)
  let nextIndex = 0;

  function dropWord(span, callback) {
    let y = parseFloat(span.style.top);
    let x = parseFloat(span.style.left);
    let velocityY = 0;
    let velocityX = (Math.random() - 0.5) * 4;
    // initial rotation between -200 and 200 degrees
    let rotation = (Math.random() * 180) - 90;
    let rotationSpeed = (Math.random() - 0.25) * 2;

    function animate() {
      velocityY += gravity;
      y += velocityY;
      x += velocityX;
      rotation += rotationSpeed;

      // bounce on floor
      if (y >= floorY - span.offsetHeight) {
        y = floorY - span.offsetHeight;
        velocityY *= -friction;
        rotationSpeed *= 0.25;
        // stop bouncing if it's settled
        if (Math.abs(velocityY) < 0.5) {
          velocityY = 0;
          rotationSpeed = 0;
          span.style.top = y + "px";
          span.style.left = x + "px";
          span.style.transform = `rotate(${rotation}deg)`;
          if (callback) callback();
          return;
        }
      }

      // keep within screen bounds
      if (x < 0 || x > window.innerWidth - span.offsetWidth) {
        velocityX *= -0.6;
      }

      span.style.top = y + "px";
      span.style.left = x + "px";
      span.style.transform = `rotate(${rotation}deg)`;

      requestAnimationFrame(animate);
    }

    animate();
  }

  document.body.addEventListener("click", () => {
    // stop if we've dropped them all
    if (nextIndex >= spans.length) return;

    // pick the next word in order
    let chosen = spans[nextIndex++];
    dropped.add(chosen);
    dropWord(chosen, () => {
      if (dropped.size === spans.length) {
        const warningText = document.getElementById("warning-text");
        setTimeout(() => {
          document.body.style.transition = "background 1s ease";
          document.body.style.background = "red";
          warningText.style.zIndex = 10;
        }, 1000);
      }
    });
  });
});
