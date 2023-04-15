import './style.scss';
import imageData from './img/images.json'

/**
 * Add preload tags to DOM for all images to get properly cached for faster reloads
 */

(async () => {
    for (var image of imageData) {
        let element = document.createElement('link');
        element.setAttribute('rel', 'preload');
        element.setAttribute('href', `./img/${image.file}`);
        element.setAttribute('as', 'image');
        document.head.appendChild(element);
    }
    return;
})();

/**
 * Set random image for display
 */
(async () => {
    const selectedImage = imageData[Math.floor(Math.random() * imageData.length)];
    const imageElement = document.querySelector("#bottom img#cover");
    imageElement.setAttribute('src', `./img/${selectedImage.file}`);
    imageElement.setAttribute('title', `${selectedImage.title}\n\n© ${selectedImage.month ? selectedImage.month + " " : ""}${selectedImage.year} ${selectedImage.author}, All rights reserved.`);
})();