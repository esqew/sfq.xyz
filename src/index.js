import './style.scss';
import imageData from './img/images.json'

/**
 * Set random image for display
 */
(async () => {
    const selectedImage = imageData[Math.floor(Math.random() * imageData.length)];
    const imageElement = document.querySelector("#bottom img#cover");
    imageElement.setAttribute('src', `./img/${selectedImage.file}`);
    imageElement.setAttribute('title', `${selectedImage.title}\n\n© ${selectedImage.month ? selectedImage.month + " " : ""}${selectedImage.year} ${selectedImage.author}, All rights reserved.`);
})();