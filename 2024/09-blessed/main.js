function handleClick() {
    let interval;
    
    document.body.addEventListener('mousedown', (event) => {
        interval = document.body.addEventListener('mousemove', blessEffect);

        // Stop the blessEffect on mouseup
        document.body.addEventListener('mouseup', () => {
            document.body.removeEventListener('mousemove', blessEffect);
        }, { once: true });
    });
}

function blessEffect(event) {
    //create a new h1 element on click with the text بركة
    const h1 = document.createElement('h1');
    h1.textContent = 'بركة';
    document.body.appendChild(h1);
    //style the new element to be where the mousepress was
    h1.style.position = 'absolute';
    h1.style.top = `${event.clientY}px`;
    h1.style.left = `${event.clientX}px`;
    console.log(event.clientX, event.clientY);

    //have the element fall off the screen
    let top = event.clientY;
    
    let blessInterval = setInterval(() => {
        top += 1;
        h1.style.top = `${top}px`;
        if (top > window.innerHeight) {
            h1.remove();
        }
    }, 10);
    setTimeout(() => {
        clearInterval(blessInterval);
        h1.remove();
    }, 2000);
}

handleClick();