import './style.css';

/**
 * Set random image for display
 */
(async () => {
    const imgNum = Math.floor(Math.random() * 2) + 1;
    document.querySelector("#bottom img#cover").setAttribute('src', `./img/${imgNum}.jpg`);
    console.log(`chose img ${imgNum}`);
})();