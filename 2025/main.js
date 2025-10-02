
function randomDots() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const randomColor = () => Math.floor(Math.random() * 100);

    const dot = document.createElement('div');
    dot.style.width = '200px';
    dot.style.height = '200px';
    dot.style.borderRadius = '50%';
    dot.style.mixBlendMode = 'difference';
    dot.style.backgroundColor = 'white';
    dot.style.position = 'absolute';
    dot.style.left = `${Math.floor(Math.random() * viewportWidth)}px`;
    dot.style.top = `${Math.floor(Math.random() * viewportHeight)}px`;
    dot.style.pointerEvents = 'none';

    document.body.appendChild(dot);
}

setInterval(randomDots, 1000);