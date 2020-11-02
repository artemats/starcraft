import { TweenLite, Power3 } from 'gsap';

export const moveCursorUnderWorks = () => {

    const boxes = document.querySelectorAll('.works-list-box');

    for(let i = 0; i < boxes.length; i++) {

        boxes[i].addEventListener('mousemove', function (event) {
            let thumb = this.querySelector('.work-thumb');
            let thumbHeight = thumb.clientHeight;

            TweenLite.to(thumb, 1.5, {
                left: event.offsetX + 20,
                top: event.offsetY - ( thumbHeight + 20 ),
                ease: Power3.easeOut
            });
        });

    }

};