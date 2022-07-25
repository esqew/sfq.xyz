const NUMBER_OF_PICS = 7;

import './style.scss';
import imageInfo from './img/images.json'

/**
 * Set random image for display
 */
(async () => {
    const imgNum = Math.floor(Math.random() * NUMBER_OF_PICS) + 1;
    const imageElement = document.querySelector("#bottom img#cover");
    imageElement.setAttribute('src', `./img/${imgNum}.webp`);
    imageElement.setAttribute('title', `${imageInfo[imgNum - 1].title}\n\n© ${imageInfo[imgNum - 1].year} ${imageInfo[imgNum - 1].author}, All rights reserved.`);
})();