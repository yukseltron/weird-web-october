const divider = document.querySelector('.divider');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let isDragging = false;

divider.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mouseup', () => isDragging = false);

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const containerWidth = divider.parentElement.offsetWidth;
  let x = e.clientX;

  if (x < 0) x = 0;
  if (x > containerWidth) x = containerWidth;

  const percent = x / containerWidth * 100;

  divider.style.left = `${percent}%`;
  left.style.width = `${percent}%`;
  right.style.width = `${100 - percent}%`;
  right.style.left = `${percent}%`;
});
