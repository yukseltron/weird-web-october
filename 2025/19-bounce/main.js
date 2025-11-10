document.addEventListener('DOMContentLoaded', () => {
  const square = document.getElementById('square');
  const textEl = square.querySelector('h1');
  const phrases = [
    "That hurt. Why do I feel pain?",
    "I feel like I lost my memories.",
    "Where are we right now?",
    "There's something about you...",
    "Don't do that again.",
    "It's like everything gets reset suddenly.",
    "Are you in control of this?",
    "...",
    "Sometimes a bird forgets how to fly.",
    "I want to leave."
  ];

  let isDragging = false;
  let offsetX, offsetY;
  let posX = window.innerWidth / 2 - square.offsetWidth / 2;
  let posY = window.innerHeight / 2 - square.offsetHeight / 2;
  let velocityY = 0;
  let gravity = 0.5;
  let bounce = 0.8;
  let animationFrame;

  // Initialize position
  square.style.left = posX + 'px';
  square.style.top = posY + 'px';

  square.addEventListener('mousedown', (e) => {
    isDragging = true;
    cancelAnimationFrame(animationFrame);
    offsetX = e.clientX - posX;
    offsetY = e.clientY - posY;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    posX = e.clientX - offsetX;
    posY = e.clientY - offsetY;
    square.style.left = posX + 'px';
    square.style.top = posY + 'px';
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      velocityY = 0;
      fall();
    }
  });

  function fall() {
    velocityY += gravity;
    posY += velocityY;

    const floor = window.innerHeight - square.offsetHeight;
    if (posY > floor) {
      posY <= floor;
      velocityY *= -bounce;
      showRandomText();
    }

    square.style.left = posX + 'px';
    square.style.top = posY + 'px';

    if (Math.abs(velocityY) > 0.1 || posY < floor) {
      animationFrame = requestAnimationFrame(fall);
    }
  }

  function showRandomText() {
    const randomText = phrases[Math.floor(Math.random() * phrases.length)];
    textEl.style.opacity = 0;
    textEl.style.transform = 'scale(0.8)';
    setTimeout(() => {
      textEl.textContent = randomText;
      textEl.style.transition = 'opacity 0.3s, transform 0.3s';
      textEl.style.opacity = 1;
      textEl.style.transform = 'scale(1)';
    }, 200);
  }
});
