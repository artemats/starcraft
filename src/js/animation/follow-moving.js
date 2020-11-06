import { TweenLite, Power3 } from 'gsap';

export const followMoving = () => {

    const boxes = document.querySelectorAll('.follow');

    for(let i = 0; i < boxes.length; i++){

        const link = boxes[i].querySelector('.follow-link');
        const linkWidth = link.clientWidth;
        const linkHeight = link.clientHeight;

        boxes[i].addEventListener('mousemove', function (event) {
            TweenLite.to(link, 1.5, {
                left: event.offsetX - ( linkWidth / 2 ),
                top: event.offsetY - ( linkHeight / 2 ),
                ease: Power3.easeOut
            });
        });
    }
};