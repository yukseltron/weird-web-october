function handleHover (e) {
    //get id of the element that was hovered
    const id = e.target.id;
    const foreground = document.querySelector(`#${id} .foreground`);
    const background = document.querySelector(`#${id} .background`);
    //show background and hide foreground
    foreground.style.display = 'none';
    background.style.display = 'block';
}

function handleLeave (e) {
    const id = e.target.id;
    const foreground = document.querySelector(`#${id} .foreground`);
    const background = document.querySelector(`#${id} .background`);
    //show foreground and hide background
    foreground.style.display = 'block';
    background.style.display = 'none';
}

function addListeners () {
    const exhibits = document.querySelectorAll('.exhibit');
    exhibits.forEach(exhibit => {
        exhibit.addEventListener('mouseenter', handleHover);
        exhibit.addEventListener('mouseleave', handleLeave);
    });
}

addListeners();