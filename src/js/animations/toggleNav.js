import { TweenLite, Power4 } from 'gsap';

const burger = document.querySelector('.burger');
const navBox = document.querySelector('.header-side-nav');

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
            duration: 1,
            ease: Power4.easeOut
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