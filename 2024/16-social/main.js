function handleHover() {
    const exhibits = document.querySelectorAll('.building');
    for (let exhibit of exhibits) {
      const list = exhibit.querySelector('p');
      exhibit.addEventListener('mousemove', (e) => {
          const mouseX = e.pageX;
          const mouseY = e.pageY;
          list.style.top = `${mouseY-275}px`;
          list.style.left = `${mouseX-275}px`;
          list.style.visibility = 'visible';
      });
      exhibit.addEventListener('mouseout', () => {
          list.style.visibility = 'hidden';
      });
    }
  }
  
  handleHover();