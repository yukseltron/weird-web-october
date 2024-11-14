function crawlingBugs() {
    const container = document.querySelector('.container');

    for (let i = 0; i < 100; i++) {
        const bug = document.createElement('span');
        bug.textContent = '🪰';
        bug.style.position = 'absolute';
        bug.style.top = Math.floor(Math.random() * 100) + 'vh';
        bug.style.left = Math.floor(Math.random() * 100) + 'vw';
        bug.style.fontSize = Math.floor(Math.random() * 20) + 10 + 'px';
        bug.style.color = 'green';
        bug.style.zIndex = '1000';
        bug.style.transition = 'all 0.5s linear';
        container.appendChild(bug);
        moveBug(bug);
    }
}

function moveBug(bug) {
    bug.addEventListener('mouseover', () => {
        setInterval(() => {
            bug.style.top = Math.floor(Math.random() * 100) + 'vh';
            bug.style.left = Math.floor(Math.random() * 100) + 'vw';
        }, 100);
    });
    const swarm = setInterval(() => {
        const randomRotation = Math.floor(Math.random() * 720);
        bug.style.transform = `rotate(${randomRotation}deg)`;
    }, 100);
}

crawlingBugs();