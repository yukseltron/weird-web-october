function handleHover() {
  const exhibits = document.querySelectorAll('.exhibit');
  for (let exhibit of exhibits) {
    const list = exhibit.querySelector('.popover-content');
    exhibit.addEventListener('mousemove', (e) => {
        const mouseX = e.pageX;
        const mouseY = e.pageY;
        list.style.top = `${mouseY+10}px`;
        list.style.left = `${mouseX+10}px`;
        list.style.visibility = 'visible';
    });
    exhibit.addEventListener('mouseout', () => {
        list.style.visibility = 'hidden';
    });
  }
}

handleHover();