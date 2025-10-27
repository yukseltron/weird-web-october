document.addEventListener('DOMContentLoaded', () => {
  
  const sequenceEls = document.querySelectorAll('.sequence');
  const diverseChars = ['▰', ' '];
  const queueLength = 40;
  const updateInterval = 100;

  function renderQueue() {
    sequenceEls.forEach(sequence => {
      const queue = Array.from({ length: queueLength }, () =>
        diverseChars[Math.floor(Math.random() * diverseChars.length)]
      );
      sequence.textContent = queue.join('');
    });
  }

  function loop() {
    renderQueue();
  }

  renderQueue();
  setInterval(loop, updateInterval);

  sequenceEls.forEach(sequence => {
    sequence.addEventListener('mouseenter', () => {
      sequence.classList.add('paused');
    });
    sequence.addEventListener('mouseleave', () => {
      sequence.classList.remove('paused');
    });
  });

  
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    const paragraph = button.nextElementSibling;

    
    if (!paragraph || paragraph.tagName.toLowerCase() !== 'p') return;

    
    paragraph.style.opacity = '0';
    paragraph.style.transform = 'scale(0.5) translateY(50px)';
    paragraph.style.transition = 'transform 2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.2s ease-in-out';
    paragraph.style.filter = 'blur(4px)';

    let shown = false;

    button.addEventListener('click', () => {
      if (shown) return; 
      shown = true;

      requestAnimationFrame(() => {
        paragraph.style.opacity = '1';
        paragraph.style.transform = 'scale(1) translateY(0)';
        paragraph.style.filter = 'blur(0px)';
      });

      
      button.disabled = true;
      button.innerHTML = 'X'
    });
  });
});

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = Math.min(scrollTop / docHeight, 1);

  const blueValue = Math.floor(255 * (1 - scrollFraction));
  document.body.style.backgroundColor = `rgb(0, 0, ${blueValue})`;
});
