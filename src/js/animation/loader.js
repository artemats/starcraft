import { TweenLite, TweenMax, Power1, Power4 } from 'gsap';
const fadeElements = document.querySelectorAll('.load-fade');
const fadeElementSmooth = document.querySelector('.load-fade-smooth');
const fallElement = document.querySelector('.load-fall');
const shapeElements = document.querySelectorAll('.shape');

for(let i = 0; i < fadeElements.length; i++) {
    TweenLite.to(fadeElements[i], 1, {
        opacity: 1,
        ease: Power1.easeOut,
        onComplete: () => {
            TweenLite.to(fadeElementSmooth, 2, {
                opacity: 1,
                ease: Power1.easeOut,
                onComplete: () => {
                    TweenLite.to(fallElement, 0.3, {
                        opacity: 1,
                        y: 0,
                        ease: Power4.easeOut,
                        onUpdate: () => {
                            shapePage();
                        }
                    });
                }
            });
        }
    }, 0.5);
}

const shapePage = () => {
    if(window.innerWidth > 991) {
        for (let j = 0; j < shapeElements.length; j++) {
            shapeElements[j].classList.add('is-active');
        }
    }
};