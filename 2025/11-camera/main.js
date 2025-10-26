// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

  // Get the main elements we need to interact with
  const main = document.querySelector('main');
  const viewfinder = document.getElementById('camera-viewfinder');
  const gallery = document.getElementById('gallery');

  // Define the fixed dimensions of the viewfinder from CSS (Recommended for accuracy)
  const VIEWFINDER_WIDTH = 250;
  const VIEWFINDER_HEIGHT = 200;
  // Variables to hold the current mouse position relative to <main>
  let currentMouseX = 0;
  let currentMouseY = 0;


  /**
   * Event Listener for Mouse Movement
   * This moves the "camera-viewfinder" div to follow the mouse.
   */
  main.addEventListener('mousemove', (e) => {
    const mainRect = main.getBoundingClientRect();
    
    // Calculate the mouse's position *relative* to the <main> container
    currentMouseX = e.clientX - mainRect.left;
    currentMouseY = e.clientY - mainRect.top;

    // Set the viewfinder's position.
    // The CSS 'transform: translate(-50%, -50%)' handles centering it on the cursor.
    viewfinder.style.left = `${currentMouseX}px`;
    viewfinder.style.top = `${currentMouseY}px`;
  });

  /**
   * Event Listener for Clicks
   * This "takes a photo" by cloning the <main> content.
   */
  main.addEventListener('click', () => {
    
    // --- CORE FIX FOR REPLACEMENT ---
    // 1. Clear the gallery container before adding the new image
    gallery.innerHTML = ''; 
    // --------------------------------

    // Calculate the top-left corner position of the content that should be visible
    const contentOffsetLeft = currentMouseX - (VIEWFINDER_WIDTH / 2);
    const contentOffsetTop = currentMouseY - (VIEWFINDER_HEIGHT / 2);

    // 1. Create the "photo" container
    const photo = document.createElement('div');
    photo.classList.add('captured-image');

    // 2. Set the "photo" size using fixed values
    photo.style.width = `${VIEWFINDER_WIDTH}px`;
    photo.style.height = `${VIEWFINDER_HEIGHT}px`;

    // 3. Clone the entire <main> element and its content
    const contentClone = main.cloneNode(true);

    // 4. Remove the viewfinder from the *cloned* content
    const clonedViewfinder = contentClone.querySelector('#camera-viewfinder');
    if (clonedViewfinder) {
      clonedViewfinder.remove();
    }
    
    // 5. Style the cloned <main> to act as a panned background
    contentClone.style.position = 'absolute';
    // Pan the cloned content *opposite* to the calculated offset.
    contentClone.style.left = `-${contentOffsetLeft}px`;
    contentClone.style.top = `-${contentOffsetTop}px`;
    
    photo.appendChild(contentClone);
    gallery.appendChild(photo);
    
  });
});