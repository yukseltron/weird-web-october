const IRLImages = [
    "https://ssec.si.edu/sites/default/files/ThinkstockPhotos-72967326.jpg",
    "https://media.istockphoto.com/id/1404184397/photo/sunrise-over-lake-k%C3%B6nigssee-with-watzmann-in-the-background-xxxl-panorama.jpg?s=612x612&w=0&k=20&c=d2tWqknbWERqlXCrdgvPXWSzPsqf3HaN5N_E1FCZvb8=",
    "https://plus.unsplash.com/premium_photo-1661963113279-5825c7500813?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJjdGljfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1459496330497-25b1010dd9c8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWlzdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://hips.hearstapps.com/hmg-prod/images/ocean-quotes-index-1624414741.jpg",
    "https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww",
    "https://static.vecteezy.com/system/resources/thumbnails/026/542/204/small_2x/landscape-natural-beautiful-mountains-and-blue-sky-panorama-photo.jpg",
    "https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg",
    "https://myplantin.com/_next/image?url=https%3A%2F%2Fstrapi.myplantin.com%2Fafrican_savannah_landscape_2022_10_14_19_35_27_utc_min_5efd041b6a.webp&w=1920&q=75",
    "https://images.newscientist.com/wp-content/uploads/2023/11/03102701/SEI_178383054.jpg",

];

function clutterScreen() {
    //using an interval clutter the screen with images in containers of size 100x100 one at a time
    let i = 0;
    const clutterInterval = setInterval(() => {
        const img = document.createElement('img');
        img.src = IRLImages[i];
        img.style.width = '300px';
        img.style.height = '300px';
        img.style.position = 'absolute';
        img.style.objectFit = 'contain';
        img.style.left = `${Math.random() * 90}vw`;
        img.style.top = `${Math.random() * 90}vh`;
        img.style.zIndex = -1;
        document.body.appendChild(img);
        i = (i + 1) % IRLImages.length;
    }, 1000);
}

clutterScreen();