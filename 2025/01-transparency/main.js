const svg = document.getElementById('overlaySvg');
const maskBg = document.getElementById('maskBg');
const holeRect = document.getElementById('holeRect');
const holeSize = 400;

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
  setHoleAt(e.clientX, e.clientY);
});

document.addEventListener('touchmove', (e) => {
  if (!e.touches || e.touches.length === 0) return;
  const t = e.touches[0];
  setHoleAt(t.clientX, t.clientY);
}, { passive: true });