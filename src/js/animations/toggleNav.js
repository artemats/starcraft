import { TweenLite, Power4 } from 'gsap';

const burger = document.querySelector('.burger');
const navBox = document.querySelector('.header-side-nav');
const links = navBox.querySelectorAll('.nav-box ul li');

burger.addEventListener('click', function () {

    burger.classList.contains('is-active') ? closeNavMenu() : openNavMenu();

});

export const openNavMenu = () => {

    burger.classList.add('is-active');
    navBox.style.display = 'block';

    TweenLite.fromTo(navBox,
        {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 0.5,
            ease: Power4.easeOut,
            // onComplete: () => {
            //     for(let i = 0; i < links.length; i++) {
            //         setTimeout(function () {
            //             TweenLite.to(links[i], 1.5, {
            //                 y: 0,
            //                 opacity: 1,
            //                 ease: Power4.easeOut
            //             });
            //         }, 100 * (i + 1));
            //     }
            // }
        });

};

export const closeNavMenu = () => {

    TweenLite.to(navBox, 0.5, {
       opacity: 0,
       onComplete: () => {
           navBox.style.display = 'none';
       }
    });

    burger.classList.remove('is-active');

};