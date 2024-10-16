async function getCats() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?');
    const data = await response.json();
    return data;
}

async function loadCats() {
    const catDiv = document.querySelector('.cats');
    const cats = await getCats();
    for (let cat of cats) {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        const img = document.createElement('img');
        img.src = cat.url;
        imgContainer.appendChild(img);
        catDiv.appendChild(imgContainer);
    }
}

loadCats();