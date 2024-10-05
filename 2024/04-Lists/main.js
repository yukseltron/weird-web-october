

const theThingImg = new Image();

const data = {
    "shelf-horror": [
        {
            "title": "The Thing",
            "url": "https://en.wikipedia.org/wiki/The_Thing_(1982_film)",
            "year": 1982
        },
        {
            "title": "Deep Blue Sea",
            "url": "https://en.wikipedia.org/wiki/Deep_Blue_Sea_(1999_film)",
            "year": 1999
        },
        {
            "title": "Tremors",
            "url": "https://en.wikipedia.org/wiki/Tremors_(1990_film)",
            "year": 1990
        },
        {
            "title": "Ravenous",
            "url": "https://en.wikipedia.org/wiki/Ravenous_(1999_film)",
            "year": 1999
        },
        {
            "title": "The Faculty",
            "url": "https://en.wikipedia.org/wiki/The_Faculty",
            "year": 1998
        },
    ],
    "shelf-thriller": [
        {
            "title": "Insomnia",
            "url": "https://en.wikipedia.org/wiki/Insomnia_(2002_film)",
            "year": 2002
        },
        {
            "title": "The Bone Collector",
            "url": "https://en.wikipedia.org/wiki/The_Bone_Collector",
            "year": 1999
        },
        {
            "title": "The Net",
            "url": "https://en.wikipedia.org/wiki/The_Net_(1995_film)",
            "year": 1995
        },
        {
            "title": "Joy Ride",
            "url": "https://en.wikipedia.org/wiki/Joy_Ride_(2001_film)",
            "year": 2001
        },
        {
            "title": "Copycat",
            "url": "https://en.wikipedia.org/wiki/Copycat_(1995_film)",
            "year": 1995
        },
    ],
    "shelf-action": [
        {
            "title": "The Art of War",
            "url": "https://en.wikipedia.org/wiki/The_Art_of_War_(film)",
            "year": 2000
        },
        {
            "title": "Hard Rain",
            "url": "https://en.wikipedia.org/wiki/Hard_Rain_(film)",
            "year": 1998
        },
        {
            "title": "The Negotiator",
            "url": "https://en.wikipedia.org/wiki/The_Negotiator",
            "year": 1998
        },
        {
            "title": "Tears of the Sun",
            "url": "https://en.wikipedia.org/wiki/Tears_of_the_Sun",
            "year": 2003
        },
        {
            "title": "The 13th Warrior",
            "url": "https://en.wikipedia.org/wiki/The_13th_Warrior",
            "year": 1999
        },
    ],
    "shelf-romance": [
        {
            "title": "Sliding Doors",
            "url": "https://en.wikipedia.org/wiki/Sliding_Doors",
            "year": 1998
        },
        {
            "title": "Reality Bites",
            "url": "https://en.wikipedia.org/wiki/Reality_Bites",
            "year": 1994
        },
        {
            "title": "Hitch",
            "url": "https://en.wikipedia.org/wiki/Hitch_(film)",
            "year": 2005
        },
        {
            "title": "You've Got Mail",
            "url": "https://en.wikipedia.org/wiki/You%27ve_Got_Mail",
            "year": 1998
        },
        {
            "title": "Cruel Intentions",
            "url": "https://en.wikipedia.org/wiki/Cruel_Intentions",
            "year": 1999
        },
    ],
    "shelf-disaster": [
        {
            "title": "Daylight",
            "url": "https://en.wikipedia.org/wiki/Daylight_(1996_film)",
            "year": 1996
        },
        {
            "title": "Outbreak",
            "url": "https://en.wikipedia.org/wiki/Outbreak_(film)",
            "year": 1995
        },
        {
            "title": "Dante's Peak",
            "url": "https://en.wikipedia.org/wiki/Dante%27s_Peak",
            "year": 1997
        },
        {
            "title": "Twister",
            "url": "https://en.wikipedia.org/wiki/Twister_(1996_film)",
            "year": 1996
        },
        {
            "title": "Deep Impact",
            "url": "https://en.wikipedia.org/wiki/Deep_Impact_(film)",
            "year": 1998
        },
    ],
    "shelf-comedy": [
        {
            "title": "Friday",
            "url": "https://en.wikipedia.org/wiki/Friday_(1995_film)",
            "year": 1995
        },
        {
            "title": "Go",
            "url": "https://en.wikipedia.org/wiki/Go_(1999_film)",
            "year": 1999
        },
        {
            "title": "Life",
            "url": "https://en.wikipedia.org/wiki/Life_(1999_film)",
            "year": 1999
        },
        {
            "title": "Dude, Where's My Car?",
            "url": "https://en.wikipedia.org/wiki/Dude,_Where%27s_My_Car%3F",
            "year": 2000
        },
        {
            "title": "Waiting...",
            "url": "https://en.wikipedia.org/wiki/Waiting..._(film)",
            "year": 2005
        },
    ],
}

let toggleCard = false;

function signBlink() {
    let sign = document.querySelector(".sign");
    const sign1 = sign.querySelector("#sign-1");
    const sign2 = sign.querySelector("#sign-2");
    sign1.style.display = sign1.style.display === "block" ? "none" : "block";
    sign2.style.display = sign2.style.display === "none" ? "block" : "none";
}

function showShelf() {
    const shelves = document.querySelectorAll('.shelf');
    for (let shelf of shelves) {
        shelf.addEventListener('click', (e) => {
            toggleCard = !toggleCard;
            const id = e.target.id;
            const shelf = data[id];
            if (toggleCard) {
                for (let film of shelf) {
                    addFilmToCard(film);
                }
            } else {
                resetCard();
            }
            e.stopPropagation();
        });
    }
}

function addFilmToCard(film) {
    let card = document.querySelector('.card');
    //create elements
    let title = document.createElement('h2');
    let year = document.createElement('p');
    title.textContent = film.title;
    year.textContent = film.year;
    //append to card
    let link = document.createElement('a');
    link.classList.add('film');
    link.appendChild(title);
    link.appendChild(year);
    link.href = film.url;
    card.appendChild(link);
    card.style.display = 'flex';
}

function resetCard() {
    let card = document.querySelector('.card');
    card.innerHTML = '';
    card.style.display = 'none';
}

setInterval(signBlink, 800);
showShelf();
document.body.addEventListener('click', () => {
    toggleCard = false;
    resetCard();
});