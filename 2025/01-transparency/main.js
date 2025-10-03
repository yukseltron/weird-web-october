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

  if (isDisplayAll) {
    // Hide overlay + invert page
    overlay.style.display = "none";
    body.style.filter = "invert(1)";
    secretText.style.visibility = 'visible';
    secretText.style.color = 'white';
    secretText.style.position = 'fixed';
    secretText.style.top = '0';
  } else {
    // Restore overlay + normal colors
    overlay.style.display = "block";
    body.style.filter = "none";
  }
}
