
document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const viewfinder = document.getElementById('camera-viewfinder');
  const gallery = document.getElementById('gallery');
  const VIEWFINDER_WIDTH = 250;
  const VIEWFINDER_HEIGHT = 200;
  let currentMouseX = 0;
  let currentMouseY = 0;

  main.addEventListener('mousemove', (e) => {
    const mainRect = main.getBoundingClientRect();
    
    currentMouseX = e.clientX - mainRect.left;
    currentMouseY = e.clientY - mainRect.top;
    
    viewfinder.style.left = `${currentMouseX}px`;
    viewfinder.style.top = `${currentMouseY}px`;
  });

  main.addEventListener('click', () => {
    gallery.innerHTML = ''; 
 
    const contentOffsetLeft = currentMouseX - (VIEWFINDER_WIDTH / 2);
    const contentOffsetTop = currentMouseY - (VIEWFINDER_HEIGHT / 2);
    const photo = document.createElement('div');
    photo.classList.add('captured-image');    
    photo.style.width = `${VIEWFINDER_WIDTH}px`;
    photo.style.height = `${VIEWFINDER_HEIGHT}px`;
    
    const contentClone = main.cloneNode(true);
    
    const clonedViewfinder = contentClone.querySelector('#camera-viewfinder');
    if (clonedViewfinder) {
      clonedViewfinder.remove();
    }
    
    
    contentClone.style.position = 'absolute';
    contentClone.style.left = `-${contentOffsetLeft}px`;
    contentClone.style.top = `-${contentOffsetTop}px`;
    
    photo.appendChild(contentClone);
    gallery.appendChild(photo);
    
  });
});