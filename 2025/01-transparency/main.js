const svg = document.getElementById('overlaySvg');
const maskBg = document.getElementById('maskBg');
const holeRect = document.getElementById('holeRect');
const overlay = document.getElementById('overlay');
const body = document.body;
const holeSize = 400;

let isDisplayAll = false; // toggle state

function resizeMask() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  maskBg.setAttribute('width', w);
  maskBg.setAttribute('height', h);
}
resizeMask();
window.addEventListener('resize', resizeMask);

function setHoleAt(clientX, clientY) {
  const x = Math.round(clientX - holeSize / 2);
  const y = Math.round(clientY - holeSize / 2);
  holeRect.setAttribute('x', x);
  holeRect.setAttribute('y', y);
}

document.addEventListener('mousemove', (e) => {
  if (!isDisplayAll) {
    setHoleAt(e.clientX, e.clientY);
  }
});

document.addEventListener('touchmove', (e) => {
  if (!isDisplayAll) {
    if (!e.touches || e.touches.length === 0) return;
    const t = e.touches[0];
    setHoleAt(t.clientX, t.clientY);
  }
}, { passive: true });

// Toggle overlay + invert colors
function displayAll() {
  isDisplayAll = !isDisplayAll;
  const secretText = document.getElementById('secret-text');
  const main = document.querySelector('main')

  if (isDisplayAll) {
    // Hide overlay + invert page
    body.style.backgroundColor = "black";
    overlay.style.display = "none";
    main.style.filter = "invert(1)";
    body.style.color = "white";
    secretText.style.filter = "invert(0)";
    secretText.style.display = "inline-block";
  } else {
    // Restore overlay + normal colors
    overlay.style.display = "block";
    main.style.filter = "none";
  }
}
