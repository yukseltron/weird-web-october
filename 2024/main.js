
function randomDots() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const randomColor = () => Math.floor(Math.random() * 256);

    const dot = document.createElement('div');
    dot.style.width = '10px';
    dot.style.height = '10px';
    dot.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    dot.style.position = 'absolute';
    dot.style.left = `${Math.floor(Math.random() * viewportWidth)}px`;
    dot.style.top = `${Math.floor(Math.random() * viewportHeight)}px`;
    dot.style.pointerEvents = 'none';

    document.body.appendChild(dot);
}

setInterval(randomDots, 1000);