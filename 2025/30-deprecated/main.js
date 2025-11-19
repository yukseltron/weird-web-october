const p = document.querySelector("p");
const slidersContainer = document.querySelector(".sliders");

const originalText = p.textContent.trim();

const degradationStages = [
  (t) => degradeSemantic(t, 0.2),
  (t) => degradeSemantic(t, 0.45),
  (t) => degradeSemantic(t, 0.6),
  (t) => degradeSemantic(t, 0.9),
  () => "....."
];

let currentLockedStage = 0;

let scramblingInterval = null;
let stopScrambleTimeout = null;

// Create the sliders dynamically
for (let i = 0; i < 5; i++) {
  const s = document.createElement("input");
  s.type = "range";
  s.min = 0;
  s.max = 100;
  s.value = 100;
  s.dataset.stage = i;
  s.className = "core-slider";
  slidersContainer.appendChild(s);
}

document.querySelectorAll(".core-slider").forEach(slider => {

  slider.addEventListener("input", (e) => {
    const stage = Number(e.target.dataset.stage);
    const val = Number(e.target.value);

    // Can't adjust earlier cores
    if (stage < currentLockedStage) return;

    // Start scrambling as slider moves
    startScrambling();

    // If the user pauses the slider, freeze the scramble
    if (stopScrambleTimeout) clearTimeout(stopScrambleTimeout);
    stopScrambleTimeout = setTimeout(() => {
      stopScrambling();  // <-- freeze exactly where scramble is
    }, 150);

    if (val <= 0) {
      stopScrambling();
      currentLockedStage = stage + 1;
      p.textContent = degradationStages[stage](originalText);

      // Disable this slider permanently
      slider.disabled = true;
      slider.classList.add("disabled-core");
    }

  });
});


// ---------- SCRAMBLING CONTROL ----------
function startScrambling() {
  if (!scramblingInterval) {
    scramblingInterval = setInterval(() => {
      p.textContent = scrambleText(p.textContent); // <-- mutate the CURRENT state, not original
    }, 40);
  }
}

function stopScrambling() {
  if (scramblingInterval) {
    clearInterval(scramblingInterval);
    scramblingInterval = null;
  }
}


// ---------- TEXT MUTATION HELPERS ----------
function scrambleText(text) {
  const chars = "!@#$%^&*()_+=-[]{}<>?/|abcdefghijklmnopqrstuvwxyz";
  return text
    .split("")
    .map(ch => (Math.random() < 0.25 ? chars[Math.floor(Math.random() * chars.length)] : ch))
    .join("");
}

function degradeSemantic(text, intensity) {
  const words = text.split(" ");
  const result = words
    .filter(() => Math.random() > intensity)
    .map(word => mutateWord(word, intensity))
    .join(" ");
  return result || "...";
}

function mutateWord(word, intensity) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return word
    .split("")
    .map(ch => (Math.random() < intensity ? letters[Math.floor(Math.random() * letters.length)] : ch))
    .join("");
}
