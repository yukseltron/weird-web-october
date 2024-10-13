function handleMouseover() {
    const celestialObject = document.querySelector('.celestial-object');
    const text = document.querySelector('.text');
    celestialObject.addEventListener('mouseover', () => {
        celestialObject.style.animationPlayState = 'paused';
        text.style.visibility = 'visible';
    });
}

function handleMouseout() {
    const celestialObject = document.querySelector('.celestial-object');
    const text = document.querySelector('.text');
    celestialObject.addEventListener('mouseout', () => {
        celestialObject.style.animationPlayState = 'running';
        text.style.visibility = 'hidden';
    });
}

function incrementDistance() {
    const distance = document.querySelector('#distance');
    const value = parseInt(distance.textContent) + 1;
    if (value > 384400)
        distance.textContent = "384400 km away";
    else {
        distance.textContent = value + " km away";
    }
}

setInterval(incrementDistance, 10);
handleMouseover();
handleMouseout();