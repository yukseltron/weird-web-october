function createBoxes() {
    const main = document.querySelector('main');
    // Create 100 boxes and add them to the main element and have it wrap around the page
    for (let i = 0; i < 100; i++) {
        const box = document.createElement('div');
        box.classList.add('box');

        // Randomize the size of the box
        const size = Math.random() * 100 + 50;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.transform = `rotate(${Math.random() * 360}deg)`;
        box.textContent = '#' + randomHashtag();

        box.addEventListener('mouseover', () => {
            const effect = Math.floor(Math.random() * 5) + 1;
            randomTextEffects(box, effect);
        });
        main.appendChild(box);
    }
}

function randomTextEffects(box, effect) {
    switch(effect) {
        case 1:
            box.style.transform = `rotate(${Math.random() * 360}deg)`;
            break;
        case 2:
            box.style.fontSize = `${Math.random() * 50 + 10}px`;
            break;
        case 3:
            box.style.fontStretch = `${Math.random() * 100}%`;
            break;
        case 4:
            box.style.fontWeight = Math.random() > 0.5 ? 'bold' : 'normal';
            break;
        case 5:
            box.style.letterSpacing = `${Math.random() * 10}px`;
            break;
    }
}

function randomHashtag() {
    const hashtags = [
        "love",
        "instagood",
        "photooftheday",
        "fashion",
        "beautiful",
        "happy",
        "cute",
        "tbt",
        "like4like",
        "followme",
        "picoftheday",
        "follow",
        "me",
        "selfie",
        "summer",
        "art",
        "instadaily",
        "friends",
        "repost",
        "nature",
    ];
    return hashtags[Math.floor(Math.random() * hashtags.length)];
}

createBoxes();