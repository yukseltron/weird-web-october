function handleIntroAnimation() {
    const introAnimation = document.querySelector('.intro-animation');
    const circle = document.createElement('div');
    circle.style.width = '200px';
    circle.style.height = '200px';
    circle.style.border = '2px solid green';
    circle.style.borderRadius = '100%';
    introAnimation.appendChild(circle);

    setTimeout(() => {
        circle.style.backgroundColor = 'green';
    }, 1000);

    setTimeout(() => {
        circle.style.outline = '2px solid darkkhaki';
        circle.style.outlineOffset = '-10px';
    }, 2000);

    setTimeout(() => {
        circle.style.outline = '50px solid darkkhaki';
        circle.style.outlineOffset = '-100px';
    }, 3000);

    setTimeout(() => {
        //reset circle
        circle.style.width = '200px';
        circle.style.height = '200px';
        circle.style.backgroundColor = 'transparent';
        circle.style.outline = 'none';
        circle.style.outlineOffset = 'none';
    }, 4000);

}

function deleteCircles() {
    const introAnimation = document.querySelector('.intro-animation');
    introAnimation.innerHTML = '';
}

function boil() {
    const button = document.querySelector('button');
    button.disabled = true;
    const kettle = document.querySelector('.kettle');
    const degrees = document.querySelector('.degrees');
    kettle.style.animation = 'boil 200s infinite';
    const interval = setInterval(() => {
        if (parseInt(degrees.textContent) === 200) {
            clearInterval(interval);
            kettle.style.backgroundColor = 'red';
            return;
        }
        degrees.textContent = parseInt(degrees.textContent) + 1 + '°C';
    }, 1000);
}

function handleCupClick() {
    const cup = document.querySelector('.cup');
    let counter = 0;
    cup.addEventListener('click', (e) => {
        //create a text element with the content 't' and have it fall down slowly 100px;
        const text = document.createElement('div');
        const cup = document.querySelector('.cup');
        //change cup background color towards red per click
        counter += 10;
        cup.style.backgroundColor = `rgb(${counter}, 50, ${255-counter})`;
        text.textContent = 'T';
        text.style.position = 'absolute';
        text.style.fontSize = '1rem';
        text.style.color = 'black';
        text.style.top = `${cup.offsetTop - 50}px`;
        text.style.left = e.clientX + 'px';
        text.style.transition = 'all 1s';
        cup.appendChild(text);
        setTimeout(() => {
            text.style.top = `${cup.offsetTop + 160}px`;
            text.style.transform = `rotate(${Math.random() * 360}deg) translate(${Math.random() * 10}px, ${Math.random() * 10}px)`;
        }, 100);
    });
}

function handleCupDrinkClick() {
    let counter = -200;
    const cup = document.querySelector('.cup-container');
    const fluid = document.querySelector('.cup-fluid');
    cup.addEventListener('click', () => {
        counter += 10;
        fluid.style.transform = `translateY(${counter}px)`;
        if (counter === 0) {
            //create a div and have it cover the screen
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0)';
            modal.style.top = 0;
            modal.style.left = 0;
            document.body.appendChild(modal);
            const crypticTexts = document.body.querySelectorAll('.cryptic');
            crypticTexts.forEach(text => {
                text.style.zIndex = 1000;
                text.style.color = 'white';
                text.style.position = 'relative';
            });
            //change '.step strike' text-decoration-thickness to 0.1em
            const strike = document.querySelectorAll('.step strike');
            strike.forEach(s => {
                s.style.textDecoration = 'none';
            });
        }
    });
}

//loop handleIntroAnimation 4 times and then clear and repeat
let i = 0;
handleIntroAnimation();
const interval = setInterval(() => {
    handleIntroAnimation();
    i++;
    if (i === 5) {
        deleteCircles();
        i = 0;
    }
}, 5000);

handleCupClick();
handleCupDrinkClick();
