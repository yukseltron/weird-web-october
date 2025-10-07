document.addEventListener("DOMContentLoaded", () => {
  const spans = document.querySelectorAll("span");

  // words the scrambled text will turn into
  const replacementWords = [
    "THEY KNOW", "THEY HIDE", "THEY LIE", "THEY SEE",
    "THEY CRY", "THEY PRAY", "THEY KILL", "THEY HUNT"
  ];

  // simple random word selector
  function getRandomWord() {
    return replacementWords[Math.floor(Math.random() * replacementWords.length)];
  }

  // scramble effect function
  function scrambleText(element, finalText) {
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
      }
    }, 150);
  }

  // add hover listeners to each scrambled span
  spans.forEach(span => {
    span.style.cursor = "pointer";
    span.addEventListener("mouseenter", () => {
      const newWord = getRandomWord();
      scrambleText(span, newWord);
    });
  });
});
