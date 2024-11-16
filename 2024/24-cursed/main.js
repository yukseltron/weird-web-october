const curseAmharic = [
    "በአስቸጋሪው ምድር ላይ በባዶ ትሄዳለህ",
    "እየበሰበሰ ያለው ጥላህ በፀሐይ ተቀደደ",
    "ማለቂያ ለሌለው ብጥብጥ ተፈርዶበታል።",
    "በአሸዋ ውስጥ አስተጋባ እስክትሆን ድረስ"
];

const curseEnglish = [
    "In the torrid land you walk bare",
    "Your decaying shadow ripped by the sun",
    "Condemned to the endless unrest",
    "Until you are an echo in the sands"
];

const curseAmazigh = [
    "ⵉⵏ ⵜⵀ ⵜⵓⵔⵔⵉⴷ ⵍⴰⵏⴷ ⵢⵓⵓ ⵡⴰⵍⴽ ⴱⴰⵔ",
    "ⵢⵓⵓⵔ ⴷⵛⴰⵢⵉⵏⴳ ⵙⵀⴰⴷⵓⵡ ⵔⵉⵒⵒⴷ ⴱⵢ ⵜⵀ ⵙⵓⵏ",
    "ⵛⵓⵏⴷⵎⵏⴷ ⵜⵓ ⵜⵀ ⵏⴷⵍⵙⵙ ⵓⵏⵔⵙⵜ",
    "ⵓⵏⵜⵉⵍ ⵢⵓⵓ ⴰⵔ ⴰⵏ ⵛⵀⵓ ⵉⵏ ⵜⵀ ⵙⴰⵏⴷⵙ"
];

const curseBuginese = [
    "iᨊ ᨈᨖᨙ ᨈᨚᨑᨑᨗᨉ ᨒᨕᨊᨉ yᨚᨘ ᨓᨕᨒᨀ ᨅᨕᨑᨙ",
    "yᨚᨘᨑ ᨉᨙᨌᨕyᨗᨊᨁ ᨔᨖᨕᨉᨚᨓ ᨑᨗᨄᨄᨙᨉ ᨅy ᨈᨖᨙ ᨔᨘᨊ",
    "cᨚᨊᨉᨙᨆᨊᨙᨉ ᨈᨚ ᨈᨖᨙ ᨙᨊᨉᨒᨙᨔᨔ ᨘᨊᨑᨙᨔᨈ",
    "uᨊᨈᨗᨒ yᨚᨘ ᨕᨑᨙ ᨕᨊ ᨙᨌᨖᨚ ᨗᨊ ᨈᨖᨙ ᨔᨕᨊᨉᨔ"
];

const curseJapanese = [
    "灼熱の大地で、あなたは裸で歩く",
    "太陽に引き裂かれた朽ちた影",
    "終わりのない不安の中に",
    "砂の中のこだまになるまで",
];

let chosenCurse;;


function curseEffect(curse) {
    const container = document.querySelector('.container');
    for (let i = 0; i < 10; i++) {
        const h1 = document.createElement('h1');
        h1.classList.add('curse');
        h1.style.position = 'absolute';
        h1.style.left = `${Math.random() * 50}vw`;
        h1.style.top = `${Math.random() * 100}vh`;
        const words = curse.join(' ').split(' ');
        let iteration = 0;
        const interval = setInterval(() => {
            if (iteration >= 100) {
                clearInterval(interval);
                return;
            }
            const span = document.createElement('span');
            span.textContent = words[iteration % words.length] + ' ';
            span.style.display = 'inline-block';
            span.style.transform = `rotate(${Math.random() * 360}deg)`;
            span.addEventListener('mouseover', (event) => {
                event.target.style.fontSize = (parseFloat(window.getComputedStyle(event.target).fontSize) + 5) + 'px';
            });
            h1.appendChild(span);
            iteration++;
        }, 100);
        container.appendChild(h1);
    }
}


function randomCurseEffect() {
    const curses = [curseAmharic, curseEnglish, curseAmazigh, curseBuginese, curseJapanese];
    const random = Math.floor(Math.random() * curses.length);
    const randomCurse = curses[random];
    chosenCurse = random;
    curseEffect(randomCurse);
}

function randomImage() {
    const images = [
        "./assets/zar.png",
        "./assets/stan.png",
        "./assets/amun.png",
        "./assets/rangda.png",
        "./assets/oni.png",
    ]

    const imageContainer = document.querySelector('.image-container');
    imageContainer.style.backgroundImage = `url(${images[chosenCurse]})`;
}

randomCurseEffect();
randomImage();