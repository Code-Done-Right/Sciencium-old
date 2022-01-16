const images = ['bgimages/1.jpg', 'bgimages/2.jpg'];
let currentImage = 0;

function changeBg() {
    const curr = document.getElementsByClassName("current")[0];
    const next = document.getElementsByClassName("next")[0];
    next.src = images[currentImage];
    currentImage = (currentImage+1) % images.length;
    next.classList.remove("next");
    curr.classList.remove("current");
    next.classList.add("current");
    curr.classList.add("next");
};

changeBg();
setInterval(changeBg, 10000);