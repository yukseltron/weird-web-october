

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
const SCRAMBLE_SPEED = 3; 
const targets = document.querySelectorAll('.scramble');
const sticker = document.getElementById('sticker');

targets.forEach(el => {
    el.dataset.value = el.innerText;
    el.style.height = el.offsetHeight + "px";
});

let isMoving = false;
let moveTimeout;
let frameCount = 0;
let animationId;

document.addEventListener('mousemove', () => {
    isMoving = true; 
    clearTimeout(moveTimeout);
 
    if (!animationId) {
    loop();
    }

    moveTimeout = setTimeout(() => {
    isMoving = false;
    sticker.style.backgroundColor = 'black';
    }, 100); 
});

function loop() {
    if (isMoving) {
    frameCount++;
    
    if (frameCount % SCRAMBLE_SPEED === 0) {
        sticker.style.backgroundColor = 'orangered';
    }
    animationId = requestAnimationFrame(loop);
    }
}

document.addEventListener('DOMContentLoaded', () => {
  function getRandomChar() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:\'",.<>?';
    return chars.charAt(Math.floor(Math.random() * chars.length));
  }

  
  function wrapTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
      const span = document.createElement('span');
      span.textContent = node.nodeValue;
      node.parentNode.replaceChild(span, node);
      return [span];
    } else {
      let spans = [];
      node.childNodes.forEach(child => {
        spans = spans.concat(wrapTextNodes(child));
      });
      return spans;
    }
  }

  const spans = wrapTextNodes(document.querySelector('main'));

  document.addEventListener('mousemove', () => {
    if (!spans.length) return;

    const randomSpan = spans[Math.floor(Math.random() * spans.length)];
    const text = randomSpan.textContent;
    if (!text) return;

    const index = Math.floor(Math.random() * text.length);
    const randomChar = getRandomChar();

    const before = text.slice(0, index);
    const after = text.slice(index + 1);

    randomSpan.textContent = ''; 
    if (before) randomSpan.appendChild(document.createTextNode(before));

    const charSpan = document.createElement('span');
    charSpan.style.color = 'orangered';
    charSpan.textContent = randomChar;
    randomSpan.appendChild(charSpan);

    if (after) randomSpan.appendChild(document.createTextNode(after));
  });
});
