const gallery = [
    {
        original: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/%C3%89mile_Bernard_1888-08_-_Breton_Women_in_the_Meadow_%28Le_Pardon_de_Pont-Aven%29.jpg',
        copy: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Breton_Women.jpg',
        original_artist: 'Émile Bernard',
    },
    {
        original: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/L%27homme_est_en_mer.jpg/1280px-L%27homme_est_en_mer.jpg',
        copy: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Van_Gogh_-_Der_Mann_ist_auf_See_%28nach_Demont-Breton%29.jpeg/1280px-Van_Gogh_-_Der_Mann_ist_auf_See_%28nach_Demont-Breton%29.jpeg',
        original_artist: 'Virginie Demont Breton',
    },
    {
        original: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Daumier_The_Drinkers.jpg',
        copy: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Van_Gogh_-_Die_Trinker_%28nach_Daumier%29.jpeg/1920px-Van_Gogh_-_Die_Trinker_%28nach_Daumier%29.jpeg',
        original_artist: 'Honoré Daumier',
    },
    {
        original: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Keisai_Eisen_-_Oiran.jpg',
        copy: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Van_Gogh_-_la_courtisane.jpg/1024px-Van_Gogh_-_la_courtisane.jpg',
        original_artist: 'Keisai Eisen',
    },
    {
        original: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Newgate-prison-exercise-yard.jpg/1280px-Newgate-prison-exercise-yard.jpg',
        copy: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Vincent_Willem_van_Gogh_037.jpg/1280px-Vincent_Willem_van_Gogh_037.jpg',
        original_artist: 'Gustave Doré',
    },
    {
        original: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Van_Gogh_1881-04%2C_Etten_-_Sower_%28after_Millet%29_F_830_JH_1.jpg',
        copy: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Vincent_van_Gogh_-_The_Sower_-_c._17-28_June_1888.jpg/1920px-Vincent_van_Gogh_-_The_Sower_-_c._17-28_June_1888.jpg',
        original_artist: 'Jean-François Millet',
    }, 
]

let highestZIndex = 0;
let positions = [];

function loadPaintings() {
    const galleryDiv = document.querySelector('.gallery');
    gallery.forEach(painting => {
        const paintingDiv = document.createElement('div');
        paintingDiv.classList.add('painting');
        paintingDiv.style.backgroundImage = `url(${painting.original})`;
        paintingDiv.style.backgroundSize = 'cover';
        paintingDiv.style.backgroundPosition = 'center';
        const originalArtist = document.createElement('p');
        originalArtist.textContent = painting.original_artist;
        paintingDiv.appendChild(originalArtist);
        galleryDiv.appendChild(paintingDiv);

        paintingDiv.addEventListener('mouseenter', () => {
            paintingDiv.style.backgroundImage = `url(${painting.copy})`;
            paintingDiv.style.zIndex = ++highestZIndex;
        });
        paintingDiv.addEventListener('mouseleave', () => {
            paintingDiv.style.backgroundImage = `url(${painting.original})`;
        });


        //add random margin to each painting, can be negative too

        const randomMargin = Math.floor(Math.random() * 100) - 50;
        paintingDiv.style.margin = `${randomMargin}px`;

    });
}

loadPaintings();