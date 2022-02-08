import * as fisFunctions from "./modules/functions.js";

fisFunctions.isWebp();

// core version + navigation, pagination modules:
// import Swiper from 'swiper';


const swiper = new Swiper('.swiper-container', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1
    },

    spaceBetween: 40,

    autoHeight: true,
});
