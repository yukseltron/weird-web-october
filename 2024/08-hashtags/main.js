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
            box.style.transform = `rotate(${Math.random() * 360}deg)`;
        });
        main.appendChild(box);
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