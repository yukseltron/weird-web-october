document.addEventListener('DOMContentLoaded', () => {
  const paragraph = document.querySelector('p');

  const texts = [
    paragraph.innerText.trim(),
    "Please never forget the time we had together. When you see me again, I'm afraid I won't remember. So hold onto this moment for the both of us. Thank you."
  ];
  
  let currentTextIndex = 0;

  function spanifyText(text) {
    paragraph.innerHTML = ''; 
    text.split(/\s+/).forEach((word, i) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.transition = 'opacity 0.8s ease';
      span.style.opacity = '1';
      span.dataset.index = i;
      paragraph.appendChild(span);
    });
  }

  spanifyText(texts[currentTextIndex]);

  paragraph.addEventListener('mouseover', e => {
    const target = e.target;
    if (target.tagName === 'SPAN' && target.style.opacity !== '0') {
      target.style.opacity = '0';

      const allGone = [...paragraph.querySelectorAll('span')]
        .every(span => span.style.opacity === '0');

      if (allGone) {
        setTimeout(() => {
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          fadeInNewText();
        }, 1000);
      }
    }
  });

  function fadeInNewText() {
    spanifyText(texts[currentTextIndex]);
    const spans = [...paragraph.querySelectorAll('span')];
    spans.forEach(span => {
      span.style.opacity = '0';
    });
    spans.forEach((span, i) => {
      setTimeout(() => {
        span.style.opacity = '1';
      }, i * 100);
    });
  }
});
