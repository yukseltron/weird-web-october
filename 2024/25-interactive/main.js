function getRandomCSS() {
    const randomTransformations = [
        `rotate(${Math.random() * 360}deg)`,
        `scale(${Math.random()})`,
        `translate(${Math.random() * 100}px, ${Math.random() * 100}px)`,
        `skew(${Math.random() * 360}deg, ${Math.random() * 360}deg)`,
        `rotateX(${Math.random() * 360}deg)`,
        `rotateY(${Math.random() * 360}deg)`,
        `rotateZ(${Math.random() * 360}deg)`,
        `scaleX(${Math.random()})`,
        `scaleY(${Math.random()})`,
        `skewX(${Math.random() * 360}deg)`,
        `skewY(${Math.random() * 360}deg)`,
        `translateX(${Math.random() * 100}px)`,
        `translateY(${Math.random() * 100}px)`,
    ]

    const randomStyles = [
        `background-color: hsl(${Math.random() * 360}, 100%, 50%)`,
        `color: hsl(${Math.random() * 360}, 100%, 50%)`,
        `border: 5px solid hsl(${Math.random() * 360}, 100%, 50%)`,
        `border-radius: ${Math.random() * 100}px`,
        `box-shadow: ${Math.random() * 100}px ${Math.random() * 100}px hsl(${Math.random() * 360}, 100%, 50%)`,
    ]

    const randomStyle = randomStyles[Math.floor(Math.random() * randomStyles.length)];
    const randomTransformation = randomTransformations[Math.floor(Math.random() * randomTransformations.length)];

    return `${randomStyle}; transform: ${randomTransformation}`;
}

function randomEye() {
    const eyeEmojis = ['👁️', 'o', '•', '👁️‍🗨️', '*', 'x', '◎', '🧿', '🍎']
    const randomEmoji = eyeEmojis[Math.floor(Math.random() * eyeEmojis.length)];
    return randomEmoji;
}

function randomNose() {
    const noseEmojis = ['👃', '👃🏽', '👃🏿', '👃🏻', '👃🏼', '👃🏾']
    const randomEmoji = noseEmojis[Math.floor(Math.random() * noseEmojis.length)];
    return randomEmoji;
}

function randomMouth() {
    const mouthEmojis = ['👄', '👅', '---', '==', '||||', '___', '🫦', '🗢', '◎']
    const randomEmoji = mouthEmojis[Math.floor(Math.random() * mouthEmojis.length)];
    return randomEmoji;
}

function handleClickLeftEye() {
    const eye = document.getElementById('left-eye');
    eye.style.cssText = getRandomCSS();
    eye.innerText = randomEye();
}

function handleClickRightEye() {
    const eye = document.getElementById('right-eye');
    eye.style.cssText = getRandomCSS();
    eye.innerText = randomEye();
}

function handleClickNose() {
    const nose = document.getElementById('nose');
    nose.style.cssText = getRandomCSS();
    nose.innerText = randomNose();
}

function handleClickMouth() {
    const mouth = document.getElementById('mouth');
    mouth.style.cssText = getRandomCSS();
    mouth.innerText = randomMouth();
}

//function to perform the same as the clicks but with a setinterval instead of clicklign
function randomizeFace() {
    handleClickLeftEye();
    handleClickRightEye();
    handleClickNose();
    handleClickMouth();
}

