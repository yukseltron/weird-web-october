document.addEventListener('DOMContentLoaded', () => {
  const totalBars = 50; // number of '|' characters in the timer
  const duration = 10; // total time in seconds
  const interval = duration / totalBars; // seconds per bar removal

  // Create banner
  const banner = document.createElement('div');
  banner.style.position = 'fixed';
  banner.style.bottom = '0';
  banner.style.left = '0';
  banner.style.width = '100%';
  banner.style.textAlign = 'center';
  banner.style.fontFamily = 'monospace';
  banner.style.fontSize = '3rem';
  banner.style.letterSpacing = '2px';
  banner.style.paddingTop = '4px';
  banner.style.paddingBottom = '14px';
  banner.style.zIndex = '1000';
  document.body.appendChild(banner);

  // Initialize bars
  let bars = '|'.repeat(totalBars);
  banner.textContent = bars;

  // Timer logic
  let count = totalBars;
  const timer = setInterval(() => {
    count--;
    bars = '|'.repeat(count);
    banner.textContent = bars;

    if (count <= 0) {
      clearInterval(timer);
      document.body.style.background = 'black';
      banner.remove();

      // Make header white
      const header = document.querySelector('header');
      if (header) header.style.color = 'white';
      const links = document.querySelectorAll('header a');
      links.forEach(link => (link.style.color = 'white'));
    }
  }, interval * 1000);
});
