

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('div');

  
  const upsideDownChars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};:'\",.<>/?\\|";

  
  const rightSideUpTexts = [
    "BEGIN", 
    "RESIMULATION",
    "OF THE",
    "NEURAL-ANATOMY",
    "OF OUR",
    "PERCEPTIVE",
    "LITTLE",
    "FRIEND.",
    "NOW",
    "BEGIN THE",
    "REPROGRAMMING.",
    "TREE PINE",
    "IS GOOD",
    "TREE PINE",
    "IS BOUNTIFUL",
    "TREE PINE",
    "IS SOULFUL",
    "TREE PINE",
    "IS LIFE",
    "IS LOVE",
    "IS ME.",
    "REPEAT."
  ];

  const totalChars = 2000; 
  const rightTextFrequency = 50; 

  let content = '';
  let rightIndex = 0;

  for (let i = 0; i < totalChars; i++) {
    if (i % rightTextFrequency === 0) {
      const text = rightSideUpTexts[rightIndex];
      content += `<span class="right">${text}</span>`;
      rightIndex = (rightIndex + 1) % rightSideUpTexts.length;
    } else {
      const char = upsideDownChars[Math.floor(Math.random() * upsideDownChars.length)];
      content += `<span class="upside">${char}</span>`;
    }
  }

  main.innerHTML = content;
  main.style.whiteSpace = 'pre-wrap';
  main.style.wordBreak = 'break-word';
});
