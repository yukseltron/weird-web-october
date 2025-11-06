async function getCatPicture () {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    console.log(data[0].url);
    return data[0].url;
}

async function setBackgroundImage() {
    const title = document.getElementById("title");
    const imageUrl = await getCatPicture();
    title.style.backgroundImage = `url(${imageUrl})`;
    title.style.backgroundPosition = 'center';
}

setBackgroundImage();