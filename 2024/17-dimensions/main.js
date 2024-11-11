function setListener() {
  const cube = document.querySelector('.cube');
  cube.addEventListener('click', () => {
    //pause the animation
    cube.style.animationPlayState = cube.style.animationPlayState === 'paused' ? 'running' : 'paused';
  });
}

setListener();