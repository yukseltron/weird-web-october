document.addEventListener('DOMContentLoaded', () => {
  const landmarks = document.querySelectorAll('.landmark');
  const content = document.getElementById('popup-content');
  let activePopup = null;

  landmarks.forEach((landmark, index) => {
    landmark.addEventListener('click', (e) => {
      // Close existing popup
      if (activePopup) {
        activePopup.remove();
        activePopup = null;
      }

      // Clone content from hidden section
      const info = content.querySelector(`#landmark-${index}`);
      if (!info) return;

      const popup = document.createElement('div');
      popup.className = 'popup';
      popup.innerHTML = info.innerHTML;

      // Basic style
      popup.style.position = 'absolute';
      popup.style.background = 'white';
      popup.style.border = '2px solid blue';
      popup.style.padding = '8px 12px';
      popup.style.maxWidth = '300px';
      popup.style.fontStyle = 'italic';
      popup.style.fontSize = '120%';
      popup.style.zIndex = '1000';
      popup.style.pointerEvents = 'auto';

      document.body.appendChild(popup);

      // Get popup dimensions
      const popupRect = popup.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Base position (to the right of click)
      let left = e.clientX + 15;
      let top = e.clientY - 10;

      // Adjust if overflowing right edge
      if (left + popupRect.width > viewportWidth - 10) {
        left = e.clientX - popupRect.width - 15;
      }

      // Adjust if overflowing bottom edge
      if (top + popupRect.height > viewportHeight - 10) {
        top = viewportHeight - popupRect.height - 10;
      }

      // Adjust if overflowing top
      if (top < 10) {
        top = 10;
      }

      // Adjust if overflowing left
      if (left < 10) {
        left = 10;
      }

      popup.style.left = `${left}px`;
      popup.style.top = `${top}px`;

      activePopup = popup;
    });
  });

  // Click outside closes popup
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('landmark') && activePopup) {
      activePopup.remove();
      activePopup = null;
    }
  });
});
