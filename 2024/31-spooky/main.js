//a function that detects which .img-container is in the middle of the viewport and sets its img child's opacity back to 1

function detectMiddleImg() {
    const imgContainers = document.querySelectorAll('.img-container');
    const imgContainerArray = Array.from(imgContainers);
    const middleImgContainer = imgContainerArray.find(imgContainer => {
        const imgRect = imgContainer.getBoundingClientRect();
        return imgRect.top <= window.innerHeight / 2 && imgRect.bottom >= window.innerHeight / 2;
    });
    if (middleImgContainer) {
        const img = middleImgContainer.querySelector('img');
        img.style.opacity = 1;
    } else {
        hideAllImgs();
    }
}

//a function that sets the opacity of all img children of .img-container to 0
function hideAllImgs() {
    const imgContainers = document.querySelectorAll('.img-container');
    imgContainers.forEach(imgContainer => {
        const img = imgContainer.querySelector('img');
        img.style.opacity = 0;
    });
}

//add event listeners for scrolling and resizing
window.addEventListener('scroll', detectMiddleImg);
window.addEventListener('resize', detectMiddleImg);

//hide all images initially
hideAllImgs();

//detect the middle image on page load
detectMiddleImg();