import {locoScroll} from "../smooth-scroll/smoothScroll";
const sidebar = document.querySelector('.header-side');
const lightColor = '#f7f7ea';
const darkColor = '#151718';

export const scrollListener = () => {

    locoScroll.on('call', (func, dir) => {
        /*
        Change background color theme
         */
        if(func === 'changeBg' && dir === 'enter') {
            document.body.style.backgroundColor = lightColor;
            sidebar.classList.add('light-theme');
        } else {
            document.body.style.backgroundColor = darkColor;
            sidebar.classList.remove('light-theme');
        }

    });

};