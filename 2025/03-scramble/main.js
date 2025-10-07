document.addEventListener("DOMContentLoaded", () => {
  const spans = document.querySelectorAll("span");

  
  const replacementWords = [
    "THEY KNOW", "THEY HIDE", "THEY LIE", "THEY SEE",
    "THEY CRY", "THEY PRAY", "THEY KILL", "THEY HUNT"
  ];

  
  function getRandomWord() {
    return replacementWords[Math.floor(Math.random() * replacementWords.length)];
  }

  
  function scrambleText(element, finalText) {
    if (element.dataset.scrambling === "true") return; 
    element.dataset.scrambling = "true";

    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let frame = 0;
    const totalFrames = 30;
    const original = element.textContent;

    const scrambleInterval = setInterval(() => {
      let display = "";
      for (let i = 0; i < original.length; i++) {
        if (i < (frame / totalFrames) * original.length) {
          display += finalText[i] || "";
        } else {
          display += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      element.textContent = display;
      frame++;

      if (frame > totalFrames) {
        clearInterval(scrambleInterval);
        element.textContent = finalText;
        element.dataset.scrambling = "false"; 
      }
    }, 100); 
  }

  spans.forEach(span => {
    span.style.cursor = "pointer";
    span.dataset.scrambling = "false"; 
    span.addEventListener("mouseenter", () => {
      if (span.dataset.scrambling === "true") return;
      const newWord = getRandomWord();
      scrambleText(span, newWord);
    });
  });
});
