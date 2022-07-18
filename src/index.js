const NUMBER_OF_PICS = 5;

import './style.scss';

/**
 * Set random image for display
 */
(async () => {
    const imgNum = Math.floor(Math.random() * NUMBER_OF_PICS) + 1;
    document.querySelector("#bottom img#cover").setAttribute('src', `./img/${imgNum}.webp`);
})();