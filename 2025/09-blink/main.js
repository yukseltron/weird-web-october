const paragraphs = [
  "The area broke into a million pieces as we scattered ourselves. I felt my vision split apart and melt together. My being was being stretched and pulled and pushed and squashed.",
  "Fingers like spaghetti with the bones and muscle torn and thin. I feel my skin get taught as the speed keeps picking up. I become a statue unable to move.",
  "It took some amount of time, I can't really remember. Just that droning on and on with that buzz of light and sounds of flashing bursts and booms.",
  "I woke back up and felt my body reorganize. My essence returned and I regained animation. I felt the air puncture my lungs and blood begin to flow. My eyes felt dry.",
  `"Welcome back." _____________________________________________________________________________________________`
];

const paraText = document.getElementById('paraText');
const topLid = document.querySelector('.eyelid.top');
const bottomLid = document.querySelector('.eyelid.bottom');
const paragraphTextEl = document.querySelector('.paragraph text');

let current = 0;
paraText.textContent = paragraphs[current];
paragraphTextEl.classList.add('active');

function blink() {
  topLid.classList.add('close');
  bottomLid.classList.add('close');
  
  setTimeout(() => {
    current = (current + 1) % paragraphs.length;
    paraText.textContent = paragraphs[current];
  }, 300);

  setTimeout(() => {
    topLid.classList.remove('close');
    bottomLid.classList.remove('close');
  }, 700);
}

document.addEventListener('click', blink);
